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
    <div className="card-frame">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleArchive();
        }}
        aria-pressed={archived}
        aria-label={archived ? "Unmark as learned" : "Mark as learned"}
        title={archived ? "Unmark as learned" : "Mark as learned"}
        className="btn-card-archive"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="card-archive-icon"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onFlip}
        className="btn-card-flip"
        aria-pressed={flipped}
        aria-label={`Flashcard: ${card.transliteration ?? card.native}. Click to ${flipped ? "hide" : "reveal"} translation.`}
      >
        <div className={`card-rotator${flipped ? " card-rotator--flipped" : ""}`}>
          {/* Front */}
          <div className="card-front">
            <div className="card-front-body">
              <div className="card-native">{card.native}</div>
              {card.transliteration && (
                <div className="card-transliteration">{card.transliteration}</div>
              )}
            </div>
            <div className="card-hint-front">Click to reveal</div>
          </div>

          {/* Back */}
          <div className="card-back">
            {card.unverified && (
              <div className="card-badge-row">
                <span className="card-badge">Needs verification</span>
              </div>
            )}
            <div className="card-back-header">
              <div className="card-english">{card.english}</div>
              <p className="card-description">{card.description}</p>
            </div>

            {card.breakdown && card.breakdown.length > 0 && (
              <div className="card-breakdown">
                <div className="card-breakdown-title">Grammar breakdown</div>
                <ul className="card-breakdown-list">
                  {card.breakdown.map((part, i) => (
                    <li key={i} className="card-breakdown-item">
                      <div className="card-breakdown-row">
                        <span className="card-breakdown-native">
                          {part.native}
                        </span>
                        {part.transliteration && (
                          <span className="card-breakdown-translit">
                            {part.transliteration}
                          </span>
                        )}
                      </div>
                      <span className="card-breakdown-meaning">→ {part.meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-hint-back">Click to flip back</div>
          </div>
        </div>
      </button>
    </div>
  );
}
