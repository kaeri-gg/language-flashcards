import { useCallback, useEffect, useMemo, useState } from "react";
import { FlashCard } from "./components/FlashCard";
import { LanguageSelect } from "./components/LanguageSelect";
import { MainMenu } from "./components/MainMenu";
import { cardsByLanguage, categoriesByLanguage } from "./data/cards";
import type { CategoryId, LanguageId } from "./types";

const ARCHIVE_STORAGE_KEY = "language-flashcards:archived-v1";

function loadArchived(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(ARCHIVE_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set(parsed.filter((x): x is string => typeof x === "string"));
    return new Set();
  } catch {
    return new Set();
  }
}

type ViewMode = "active" | "archived";

export default function App() {
  const [languageId, setLanguageId] = useState<LanguageId | null>(null);
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("active");
  const [archivedIds, setArchivedIds] = useState<Set<string>>(() => loadArchived());

  useEffect(() => {
    window.localStorage.setItem(
      ARCHIVE_STORAGE_KEY,
      JSON.stringify([...archivedIds]),
    );
  }, [archivedIds]);

  const allCategoryCards = useMemo(() => {
    if (!languageId || !categoryId) return [];
    return cardsByLanguage[languageId].filter((c) => c.category === categoryId);
  }, [languageId, categoryId]);

  const categoryCards = useMemo(
    () =>
      allCategoryCards.filter((c) =>
        viewMode === "active" ? !archivedIds.has(c.id) : archivedIds.has(c.id),
      ),
    [allCategoryCards, viewMode, archivedIds],
  );

  const cardCount = categoryCards.length;

  useEffect(() => {
    if (index >= cardCount) setIndex(cardCount === 0 ? 0 : cardCount - 1);
  }, [index, cardCount]);

  const inCardView = languageId !== null && categoryId !== null;

  const toggleArchive = useCallback((cardId: string) => {
    setArchivedIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
    setFlipped(false);
  }, []);

  useEffect(() => {
    if (!inCardView || cardCount === 0) return;

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFlipped(false);
        setIndex((i) => (i - 1 + cardCount) % cardCount);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setFlipped(false);
        setIndex((i) => (i + 1) % cardCount);
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inCardView, cardCount]);

  if (languageId === null) {
    return (
      <LanguageSelect
        onSelectLanguage={(id) => {
          setLanguageId(id);
          setCategoryId(null);
          setIndex(0);
          setFlipped(false);
          setViewMode("active");
        }}
      />
    );
  }

  if (categoryId === null) {
    return (
      <MainMenu
        language={languageId}
        onSelectCategory={(id) => {
          setCategoryId(id);
          setIndex(0);
          setFlipped(false);
          setViewMode("active");
        }}
        onBack={() => setLanguageId(null)}
      />
    );
  }

  const category = categoriesByLanguage[languageId].find(
    (c) => c.id === categoryId,
  )!;
  const card = categoryCards[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % categoryCards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + categoryCards.length) % categoryCards.length);
  };

  const archivedCount = allCategoryCards.filter((c) => archivedIds.has(c.id)).length;
  const activeCount = allCategoryCards.length - archivedCount;
  const otherModeCount = viewMode === "active" ? archivedCount : activeCount;
  const otherModeLabel = viewMode === "active" ? "archived" : "active";

  const emptyMessage =
    viewMode === "active"
      ? "You've archived every card in this category. Nice work!"
      : "No cards archived yet. Tap the circle at the top of a card to mark it as learned.";

  return (
    <div className="min-h-screen bg-slate-100 py-12 text-slate-900">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 px-4">
        <div className="w-full">
          <button
            type="button"
            onClick={() => setCategoryId(null)}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            ← Categories
          </button>
        </div>

        <header className="w-full text-center">
          <h1 className="text-2xl font-bold">{category.name}</h1>
          <p className="mt-1 text-sm text-slate-500">
            {cardCount === 0
              ? viewMode === "active"
                ? "No active cards"
                : "No archived cards"
              : `Card ${index + 1} of ${cardCount}${viewMode === "archived" ? " (archived)" : ""}`}
          </p>
        </header>

        {card ? (
          <FlashCard
            card={card}
            flipped={flipped}
            onFlip={() => setFlipped((f) => !f)}
            archived={archivedIds.has(card.id)}
            onToggleArchive={() => toggleArchive(card.id)}
          />
        ) : (
          <div className="flex min-h-96 w-full max-w-md items-center justify-center rounded-2xl bg-white p-8 text-center text-sm text-slate-500 shadow">
            {emptyMessage}
          </div>
        )}

        {card && (
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-slate-50"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-lg bg-[#a996ff] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#8f7aff]"
            >
              Next →
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setViewMode((m) => (m === "active" ? "archived" : "active"));
            setIndex(0);
            setFlipped(false);
          }}
          className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
        >
          Show {otherModeLabel} ({otherModeCount})
        </button>

        <p className="text-xs text-slate-400">
          ← / → to navigate · space or enter to flip
        </p>
      </div>
    </div>
  );
}
