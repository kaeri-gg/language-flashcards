import type { Flashcard } from "../types";

export const cards: Flashcard[] = [
  {
    id: "gamarjoba",
    georgian: "გამარჯობა",
    transliteration: "gamarjoba",
    english: "Hello",
    description:
      "The most common greeting. Rooted in the noun for 'victory' — you are literally wishing the other person success.",
    breakdown: [
      {
        georgian: "გამარჯვება",
        transliteration: "gamarjveba",
        meaning: "victory (noun) — the root word",
      },
      {
        georgian: "გამარჯობა",
        transliteration: "gamarjoba",
        meaning: "'may you have victory' — a frozen greeting form",
      },
    ],
  },
  {
    id: "madloba",
    georgian: "მადლობა",
    transliteration: "madloba",
    english: "Thank you",
    description:
      "Standard thank-you. Add 'დიდი' (didi, 'big') in front for 'thank you very much': დიდი მადლობა.",
    breakdown: [
      {
        georgian: "მადლი",
        transliteration: "madli",
        meaning: "grace, gratitude (root noun)",
      },
      {
        georgian: "-ობა",
        transliteration: "-oba",
        meaning: "suffix turning a noun into an abstract state ('-ness')",
      },
    ],
  },
  {
    id: "diakh",
    georgian: "დიახ",
    transliteration: "diakh",
    english: "Yes (formal)",
    description:
      "Polite/formal 'yes'. In casual speech you'll also hear 'კი' (ki) or 'ჰო' (ho).",
    breakdown: [
      {
        georgian: "დიახ",
        transliteration: "diakh",
        meaning: "affirmation particle — used on its own, no morphology",
      },
    ],
  },
  {
    id: "ara",
    georgian: "არა",
    transliteration: "ara",
    english: "No",
    description:
      "Universal 'no' — works in both formal and casual contexts. Also used as a negator: 'არ ვიცი' (ar vitsi) = 'I don't know'.",
    breakdown: [
      {
        georgian: "არა",
        transliteration: "ara",
        meaning: "negation particle 'no'",
      },
      {
        georgian: "არ",
        transliteration: "ar",
        meaning: "shortened form used before verbs to mean 'not'",
      },
    ],
  },
  {
    id: "bodishi",
    georgian: "ბოდიში",
    transliteration: "bodishi",
    english: "Sorry / Excuse me",
    description:
      "Used both to apologize and to get someone's attention, like 'excuse me' in English.",
    breakdown: [
      {
        georgian: "ბოდიში",
        transliteration: "bodishi",
        meaning: "apology (noun); used as a standalone interjection",
      },
    ],
  },
  {
    id: "rogorkhar",
    georgian: "როგორ ხარ?",
    transliteration: "rogor khar?",
    english: "How are you?",
    description:
      "Informal 'how are you' (singular). Use 'როგორ ხართ?' (rogor khart?) for formal or plural.",
    breakdown: [
      {
        georgian: "როგორ",
        transliteration: "rogor",
        meaning: "how (question word)",
      },
      {
        georgian: "ხარ",
        transliteration: "khar",
        meaning: "you are (2nd person singular of the verb 'to be')",
      },
      {
        georgian: "ხართ",
        transliteration: "khart",
        meaning: "you are (formal/plural — swap in for politeness)",
      },
    ],
  },
  {
    id: "kargad",
    georgian: "კარგად",
    transliteration: "kargad",
    english: "Well / Good",
    description:
      "Common reply to 'how are you'. Shows the adverb pattern: take an adjective, add -ად.",
    breakdown: [
      {
        georgian: "კარგი",
        transliteration: "kargi",
        meaning: "good (adjective)",
      },
      {
        georgian: "-ად",
        transliteration: "-ad",
        meaning: "adverb suffix — turns adjectives into adverbs (like '-ly')",
      },
    ],
  },
  {
    id: "gemrielia",
    georgian: "გემრიელია",
    transliteration: "gemrielia",
    english: "It's delicious",
    description:
      "Essential for Georgian food culture — a supra (feast) host will want to hear this. Shows how Georgian glues 'is' onto the end of an adjective.",
    breakdown: [
      {
        georgian: "გემრიელი",
        transliteration: "gemrieli",
        meaning: "tasty, delicious (adjective)",
      },
      {
        georgian: "-ა",
        transliteration: "-a",
        meaning: "'is' — 3rd person singular copula, attached as a suffix",
      },
    ],
  },
];
