import { useState } from "react";
import { FlashCard } from "./components/FlashCard";
import { cards } from "./data/cards";

export default function App() {
  const [index, setIndex] = useState(0);
  const card = cards[index];

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  return (
    <div className="min-h-screen bg-slate-100 py-12 text-slate-900">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 px-4">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Georgian Flashcards</h1>
          <p className="mt-1 text-sm text-slate-500">
            Card {index + 1} of {cards.length}
          </p>
        </header>

        <FlashCard key={card.id} card={card} />

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
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
