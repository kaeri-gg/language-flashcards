import type { Category, Flashcard, Language, LanguageId } from "../types";
import { georgianCards, georgianCategories } from "./georgian";
import { georgianTemplateCards, georgianTemplateCategories } from "./georgian_templates";
import { spanishCards, spanishCategories } from "./spanish";
import { spanishPhraseCards, spanishPhraseCategories } from "./spanish_phrases";
import { spanishPracticalCards, spanishPracticalCategories } from "./spanish_practical";
import { spanishTemplateCards, spanishTemplateCategories } from "./spanish_templates";

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
  georgian: [...georgianCategories, ...georgianTemplateCategories],
  spanish: [
    ...spanishCategories,
    ...spanishPracticalCategories,
    ...spanishPhraseCategories,
    ...spanishTemplateCategories,
  ],
};

export const cardsByLanguage: Record<LanguageId, Flashcard[]> = {
  georgian: [...georgianCards, ...georgianTemplateCards],
  spanish: [
    ...spanishCards,
    ...spanishPracticalCards,
    ...spanishPhraseCards,
    ...spanishTemplateCards,
  ],
};
