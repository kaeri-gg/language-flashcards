export type LanguageId = "georgian" | "spanish";

export type Language = {
  id: LanguageId;
  name: string;
  flag: string;
  description: string;
};

export type WordPart = {
  native: string;
  transliteration?: string;
  meaning: string;
};

export type CategoryId = string;

export type Flashcard = {
  id: string;
  category: CategoryId;
  native: string;
  transliteration?: string;
  english: string;
  description: string;
  breakdown?: WordPart[];
  unverified?: boolean;
};

export type Category = {
  id: CategoryId;
  name: string;
  emoji: string;
  description: string;
};
