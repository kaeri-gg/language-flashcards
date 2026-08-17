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

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const p = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      // Each gradient drifts a bit along its own axis, but bounded so it never
      // leaves the viewport frame.
      const style = document.body.style;
      style.setProperty("--flare-x1", `${18 + p * 20}%`);
      style.setProperty("--flare-y1", `${22 + p * 30}%`);
      style.setProperty("--flare-x2", `${82 - p * 20}%`);
      style.setProperty("--flare-y2", `${18 + p * 40}%`);
      style.setProperty("--flare-x3", `${50 + p * 10}%`);
      style.setProperty("--flare-y3", `${88 - p * 40}%`);
      raf = 0;
    };
    const onScroll = () => {
      if (raf === 0) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf !== 0) window.cancelAnimationFrame(raf);
    };
  }, []);

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
    <div className="main-container">
      <div className="page-container">
        <div className="page-brow">
          <button
            type="button"
            onClick={() => setCategoryId(null)}
            className="btn-back"
          >
            ← Categories
          </button>
        </div>

        <header className="page-header">
          <h1 className="page-title">{category.name}</h1>
          <p className="card-count">
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
          <div className="card-wrapper">{emptyMessage}</div>
        )}

        {card && (
          <div className="card-container">
            <button type="button" onClick={prev} className="btn-previous">
              ← Previous
            </button>
            <button type="button" onClick={next} className="btn-next">
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
          className="btn-archive"
        >
          Show {otherModeLabel} ({otherModeCount})
        </button>

        <p className="info-instruction">
          ← / → to navigate · space or enter to flip
        </p>
      </div>
    </div>
  );
}
