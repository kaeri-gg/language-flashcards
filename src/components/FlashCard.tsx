import { useState } from "react";
import type { Flashcard } from "../types";

type Props = {
  card: Flashcard;
};

export function FlashCard({ card }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="perspective group min-h-96 w-full max-w-md cursor-pointer bg-transparent"
      aria-pressed={flipped}
      aria-label={`Flashcard: ${card.transliteration}. Click to ${flipped ? "hide" : "reveal"} translation.`}
    >
      <div
        className={`preserve-3d relative min-h-96 w-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white shadow-xl">
          <div className="text-5xl font-semibold tracking-wide">
            {card.georgian}
          </div>
          <div className="mt-4 text-lg opacity-80 italic">
            {card.transliteration}
          </div>
          <div className="absolute bottom-4 text-xs opacity-60">
            Click to reveal
          </div>
        </div>

        {/* Back */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col rounded-2xl bg-white p-6 text-left text-slate-800 shadow-xl">
          <div className="text-center">
            <div className="text-2xl font-semibold text-indigo-600">
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
                        {part.georgian}
                      </span>
                      <span className="text-slate-400 italic">
                        {part.transliteration}
                      </span>
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
  );
}
