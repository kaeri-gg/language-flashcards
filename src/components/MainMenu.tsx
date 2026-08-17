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
    <div className="main-container">
      <div className="page-menu-container">
        <div className="page-brow">
          <button type="button" onClick={onBack} className="btn-back">
            ← Languages
          </button>
        </div>

        <header className="page-menu-header">
          <div className="page-menu-flag">{languageMeta.flag}</div>
          <h1 className="page-menu-title">{languageMeta.name} Flashcards</h1>
          <p className="page-menu-subtitle">Pick a category to start</p>
        </header>

        <div className="card-grid">
          {countsByCategory.map(({ category, count }) => {
            const disabled = count === 0;
            return (
              <button
                key={category.id}
                type="button"
                disabled={disabled}
                onClick={() => onSelectCategory(category.id)}
                className="card-category"
              >
                <div className="card-category-info">
                  <div className="card-category-name">{category.name}</div>
                  <div className="card-category-description">
                    {category.description}
                  </div>
                  <div className="card-category-count">
                    {disabled ? "Coming soon" : `${count} card${count === 1 ? "" : "s"}`}
                  </div>
                </div>
                <div className="card-category-emoji">{category.emoji}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
