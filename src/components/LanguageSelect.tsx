import type { LanguageId } from "../types";
import { cardsByLanguage, languages } from "../data/cards";

type Props = {
  onSelectLanguage: (id: LanguageId) => void;
};

export function LanguageSelect({ onSelectLanguage }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 py-12 text-slate-900">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Language Flashcards</h1>
          <p className="mt-2 text-sm text-slate-500">
            Pick a language to start
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {languages.map((language) => {
            const count = cardsByLanguage[language.id].length;
            return (
              <button
                key={language.id}
                type="button"
                onClick={() => onSelectLanguage(language.id)}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 text-left shadow transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="shrink-0 text-5xl">{language.flag}</div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="text-xl font-semibold">{language.name}</div>
                  <div className="text-xs text-slate-500">
                    {language.description}
                  </div>
                  <div className="pt-1 text-xs font-medium text-[#a996ff]">
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
