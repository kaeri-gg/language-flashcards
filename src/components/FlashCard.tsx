import type { Flashcard } from "../types";

type Props = {
  card: Flashcard;
  flipped: boolean;
  onFlip: () => void;
  archived: boolean;
  onToggleArchive: () => void;
};

export function FlashCard({ card, flipped, onFlip, archived, onToggleArchive }: Props) {
  return (
    <div className="relative w-full max-w-md">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleArchive();
        }}
        aria-pressed={archived}
        aria-label={archived ? "Unmark as learned" : "Mark as learned"}
        title={archived ? "Unmark as learned" : "Mark as learned"}
        className={`absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 shadow-md transition ${
          archived
            ? "border-[#a996ff] bg-[#a996ff] text-white hover:bg-[#8f7aff]"
            : "border-slate-300 bg-white text-slate-300 hover:border-slate-400 hover:text-slate-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onFlip}
        className="perspective group min-h-96 w-full cursor-pointer bg-transparent"
        aria-pressed={flipped}
        aria-label={`Flashcard: ${card.transliteration ?? card.native}. Click to ${flipped ? "hide" : "reveal"} translation.`}
      >
        <div
          className={`preserve-3d relative min-h-96 w-full transition-transform duration-500 ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#9e88ff] to-[#ffca72] p-8 text-white shadow-xl">
            <div className="text-5xl font-semibold tracking-wide">
              {card.native}
            </div>
            {card.transliteration && (
              <div className="mt-4 text-lg opacity-80 italic">
                {card.transliteration}
              </div>
            )}
            <div className="absolute bottom-4 text-xs opacity-60">
              Click to reveal
            </div>
          </div>

          {/* Back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col rounded-2xl bg-white p-6 text-left text-slate-800 shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#a996ff]">
                {card.english}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {card.description}
              </p>
            </div>

            {card.breakdown && card.breakdown.length > 0 && (
              <div className="mt-4 border-t border-slate-200 pt-3">
                <div className="mb-2 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Grammar breakdown
                </div>
                <ul className="space-y-2">
                  {card.breakdown.map((part, i) => (
                    <li key={i} className="flex flex-col text-xs">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-slate-800">
                          {part.native}
                        </span>
                        {part.transliteration && (
                          <span className="text-slate-400 italic">
                            {part.transliteration}
                          </span>
                        )}
                      </div>
                      <span className="text-slate-600">→ {part.meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-3 text-center text-[10px] text-slate-400">
              Click to flip back
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
