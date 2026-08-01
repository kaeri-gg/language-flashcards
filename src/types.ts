export type WordPart = {
  georgian: string;
  transliteration: string;
  meaning: string;
};

export type Flashcard = {
  id: string;
  georgian: string;
  transliteration: string;
  english: string;
  description: string;
  breakdown?: WordPart[];
};
