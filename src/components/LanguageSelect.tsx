import type { LanguageId } from "../types";
import { cardsByLanguage, languages } from "../data/cards";

type Props = {
  onSelectLanguage: (id: LanguageId) => void;
};

export function LanguageSelect({ onSelectLanguage }: Props) {
  return (
    <div className="main-container">
      <div className="page-language-container">
        <header className="page-language-header">
          <h1 className="page-language-title">Language Flashcards</h1>
          <p className="page-language-subtitle">Pick a language to start</p>
        </header>

        <div className="card-grid">
          {languages.map((language) => {
            const count = cardsByLanguage[language.id].length;
            return (
              <button
                key={language.id}
                type="button"
                onClick={() => onSelectLanguage(language.id)}
                className="card-language"
              >
                <div className="card-language-flag">{language.flag}</div>
                <div className="card-language-info">
                  <div className="card-language-name">{language.name}</div>
                  <div className="card-language-description">
                    {language.description}
                  </div>
                  <div className="card-language-count">
                    {count} card{count === 1 ? "" : "s"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
