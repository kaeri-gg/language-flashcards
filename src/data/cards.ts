import type { Category, Flashcard, Language, LanguageId } from "../types";
import { georgianCards, georgianCategories } from "./georgian";
import { spanishCards, spanishCategories } from "./spanish";
import { spanishPhraseCards, spanishPhraseCategories } from "./spanish_phrases";
import { spanishPracticalCards, spanishPracticalCategories } from "./spanish_practical";

export const languages: Language[] = [
  {
    id: "georgian",
    name: "Georgian",
    flag: "🇬🇪",
    description: "ქართული — the tongue of the Caucasus",
  },
  {
    id: "spanish",
    name: "Spanish",
    flag: "🇪🇸",
    description: "Español — spoken across the Americas and Spain",
  },
];

export const categoriesByLanguage: Record<LanguageId, Category[]> = {
  georgian: georgianCategories,
  spanish: [
    ...spanishCategories,
    ...spanishPracticalCategories,
    ...spanishPhraseCategories,
  ],
};

export const cardsByLanguage: Record<LanguageId, Flashcard[]> = {
  georgian: georgianCards,
  spanish: [...spanishCards, ...spanishPracticalCards, ...spanishPhraseCards],
};
