import type { CategoryId, LanguageId } from "../types";
import { cardsByLanguage, categoriesByLanguage, languages } from "../data/cards";

type Props = {
  language: LanguageId;
  onSelectCategory: (id: CategoryId) => void;
  onBack: () => void;
};

export function MainMenu({ language, onSelectCategory, onBack }: Props) {
  const languageMeta = languages.find((l) => l.id === language)!;
  const categories = categoriesByLanguage[language];
  const cards = cardsByLanguage[language];

  const countsByCategory = categories.map((category) => ({
    category,
    count: cards.filter((c) => c.category === category.id).length,
  }));

  return (
    <div className="min-h-screen bg-slate-100 py-12 text-slate-900">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4">
        <div className="w-full">
          <button
            type="button"
            onClick={onBack}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            ← Languages
          </button>
        </div>

        <header className="text-center">
          <div className="text-4xl">{languageMeta.flag}</div>
          <h1 className="mt-2 text-3xl font-bold">{languageMeta.name} Flashcards</h1>
          <p className="mt-2 text-sm text-slate-500">
            Pick a category to start
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {countsByCategory.map(({ category, count }) => {
            const disabled = count === 0;
            return (
              <button
                key={category.id}
                type="button"
                disabled={disabled}
                onClick={() => onSelectCategory(category.id)}
                className={`flex items-center gap-4 rounded-2xl p-5 text-left shadow transition ${
                  disabled
                    ? "cursor-not-allowed bg-slate-200/60 text-slate-400"
                    : "bg-white hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="text-lg font-semibold">{category.name}</div>
                  <div className="text-xs text-slate-500">
                    {category.description}
                  </div>
                  <div
                    className={`pt-1 text-xs font-medium ${
                      disabled ? "text-slate-400" : "text-[#a996ff]"
                    }`}
                  >
                    {disabled ? "Coming soon" : `${count} card${count === 1 ? "" : "s"}`}
                  </div>
                </div>
                <div className="shrink-0 text-4xl">{category.emoji}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
