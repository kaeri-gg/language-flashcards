import type { Category, Flashcard } from "../types";

export const georgianCategories: Category[] = [
  {
    id: "greetings",
    name: "Greetings & Basics",
    emoji: "👋",
    description: "Hello, goodbye, yes and no",
  },
  {
    id: "politeness",
    name: "Politeness",
    emoji: "🙏",
    description: "Thank you, sorry, please",
  },
  {
    id: "family-intro",
    name: "Meeting the Family",
    emoji: "🤝",
    description: "Introductions and first impressions",
  },
  {
    id: "supra",
    name: "At the Table (Supra)",
    emoji: "🍞",
    description: "Food, drink, and toasts",
  },
  {
    id: "family",
    name: "Family Members",
    emoji: "👪",
    description: "Mom, dad, siblings, and more",
  },
  {
    id: "numbers",
    name: "Numbers 1–10",
    emoji: "🔢",
    description: "Counting basics",
  },
  {
    id: "questions",
    name: "Useful Questions",
    emoji: "❓",
    description: "What, where, how much",
  },
  {
    id: "compliments",
    name: "Compliments & Sweet Words",
    emoji: "💕",
    description: "Kind things to say",
  },
  {
    id: "everyday",
    name: "Handy Everyday Words",
    emoji: "🗓️",
    description: "Today, now, here, big, small",
  },
];

export const georgianCards: Flashcard[] = [
  // ══════════════════════════════════════════════════════════════
  // GREETINGS & BASICS
  // ══════════════════════════════════════════════════════════════
  {
    id: "gamarjoba",
    category: "greetings",
    native: "გამარჯობა",
    transliteration: "gamarjoba",
    english: "Hello",
    description:
      "The most common greeting. Rooted in the noun for 'victory' — you are literally wishing the other person success.",
    breakdown: [
      {
        native: "გამარჯვება",
        transliteration: "gamarjveba",
        meaning: "victory (noun) — the root word",
      },
      {
        native: "გამარჯობა",
        transliteration: "gamarjoba",
        meaning: "'may you have victory' — a frozen greeting form",
      },
    ],
  },
  {
    id: "gagimarjos",
    category: "greetings",
    native: "გაგიმარჯოს",
    transliteration: "gagimarjos",
    english: "Hello (reply)",
    description:
      "The traditional reply to gamarjoba — same 'victory' root, bounced back to the greeter. A warm, slightly formal response, always welcome with elders.",
    breakdown: [
      {
        native: "გამარჯვება",
        transliteration: "gamarjveba",
        meaning: "victory (root)",
      },
      {
        native: "გა-გი-",
        transliteration: "ga-gi-",
        meaning: "prefix with 'you' built in — 'to you'",
      },
    ],
  },
  {
    id: "dila-mshvidobisa",
    category: "greetings",
    native: "დილა მშვიდობისა",
    transliteration: "dila mshvidobisa",
    english: "Good morning",
    description:
      "Literally 'morning of peace'. Georgian time-of-day greetings all follow this pattern: [time] + მშვიდობისა.",
    breakdown: [
      { native: "დილა", transliteration: "dila", meaning: "morning (noun)" },
      {
        native: "მშვიდობა",
        transliteration: "mshvidoba",
        meaning: "peace (noun)",
      },
      {
        native: "-ისა",
        transliteration: "-isa",
        meaning: "genitive ending — 'of peace'",
      },
    ],
  },
  {
    id: "saghamo-mshvidobisa",
    category: "greetings",
    native: "საღამო მშვიდობისა",
    transliteration: "saghamo mshvidobisa",
    english: "Good evening",
    description:
      "Same 'X of peace' pattern — use from late afternoon onward. Georgians often shift to this greeting well before dark.",
    breakdown: [
      {
        native: "საღამო",
        transliteration: "saghamo",
        meaning: "evening (noun)",
      },
      {
        native: "მშვიდობისა",
        transliteration: "mshvidobisa",
        meaning: "of peace (genitive)",
      },
    ],
  },
  {
    id: "ghame-mshvidobisa",
    category: "greetings",
    native: "ღამე მშვიდობისა",
    transliteration: "ghame mshvidobisa",
    english: "Good night",
    description:
      "Said when parting for bed. A softer, more affectionate alternative is 'ძილი ნებისა' (dzili nebisa) — 'may sleep be by your will'.",
    breakdown: [
      { native: "ღამე", transliteration: "ghame", meaning: "night (noun)" },
      {
        native: "მშვიდობისა",
        transliteration: "mshvidobisa",
        meaning: "of peace (genitive of მშვიდობა)",
      },
    ],
  },
  {
    id: "nakhvamdis",
    category: "greetings",
    native: "ნახვამდის",
    transliteration: "nakhvamdis",
    english: "Goodbye",
    description:
      "The formal goodbye, literally 'until we see (each other again)'. In casual settings კარგად (kargad, 'take care') also works.",
    breakdown: [
      {
        native: "ნახვა",
        transliteration: "nakhva",
        meaning: "seeing (verbal noun)",
      },
      {
        native: "-მდის",
        transliteration: "-mdis",
        meaning: "until (suffix)",
      },
    ],
  },
  {
    id: "ki",
    category: "greetings",
    native: "კი",
    transliteration: "ki",
    english: "Yes",
    description:
      "The everyday 'yes' — neutral and works in almost any context. What you'll say most often.",
    breakdown: [
      { native: "კი", transliteration: "ki", meaning: "yes (neutral)" },
      {
        native: "ხო",
        transliteration: "kho",
        meaning: "even more casual 'yeah'",
      },
      {
        native: "დიახ",
        transliteration: "diakh",
        meaning: "formal 'yes' — for elders and strangers",
      },
    ],
  },
  {
    id: "kho",
    category: "greetings",
    native: "ხო",
    transliteration: "kho",
    english: "Yes (casual)",
    description:
      "A relaxed 'yeah' — for friends and family. Don't use it with your partner's grandparents on day one.",
  },
  {
    id: "diakh",
    category: "greetings",
    native: "დიახ",
    transliteration: "diakh",
    english: "Yes (formal)",
    description:
      "Polite/formal 'yes'. In casual speech you'll also hear 'კი' (ki) or 'ჰო' (ho).",
    breakdown: [
      {
        native: "დიახ",
        transliteration: "diakh",
        meaning: "affirmation particle — used on its own, no morphology",
      },
    ],
  },
  {
    id: "ara",
    category: "greetings",
    native: "არა",
    transliteration: "ara",
    english: "No",
    description:
      "Universal 'no' — works in both formal and casual contexts. Also used as a negator: 'არ ვიცი' (ar vitsi) = 'I don't know'.",
    breakdown: [
      {
        native: "არა",
        transliteration: "ara",
        meaning: "negation particle 'no'",
      },
      {
        native: "არ",
        transliteration: "ar",
        meaning: "shortened form used before verbs to mean 'not'",
      },
    ],
  },
  {
    id: "kargi",
    category: "greetings",
    native: "კარგი",
    transliteration: "kargi",
    english: "Good / OK",
    description:
      "The adjective 'good' — also used as 'ok/alright' in reply. It's the source of the adverb კარგად (kargad, 'well').",
    breakdown: [
      {
        native: "კარგი",
        transliteration: "kargi",
        meaning: "good (adjective)",
      },
      {
        native: "კარგად",
        transliteration: "kargad",
        meaning: "well (adverb — add -ად)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // POLITENESS
  // ══════════════════════════════════════════════════════════════
  {
    id: "madloba",
    category: "politeness",
    native: "მადლობა",
    transliteration: "madloba",
    english: "Thank you",
    description:
      "Standard thank-you. Add 'დიდი' (didi, 'big') in front for 'thank you very much': დიდი მადლობა.",
    breakdown: [
      {
        native: "მადლი",
        transliteration: "madli",
        meaning: "grace, gratitude (root noun)",
      },
      {
        native: "-ობა",
        transliteration: "-oba",
        meaning: "suffix turning a noun into an abstract state ('-ness')",
      },
    ],
  },
  {
    id: "didi-madloba",
    category: "politeness",
    native: "დიდი მადლობა",
    transliteration: "didi madloba",
    english: "Thank you very much",
    description:
      "Literally 'big thank-you'. Georgians use this heavily — it's warmer than plain მადლობა and worth the extra syllable.",
    breakdown: [
      { native: "დიდი", transliteration: "didi", meaning: "big" },
      { native: "მადლობა", transliteration: "madloba", meaning: "thanks" },
    ],
  },
  {
    id: "gmadlobt",
    category: "politeness",
    native: "გმადლობთ",
    transliteration: "gmadlobt",
    english: "Thank you (formal)",
    description:
      "The formal 'thank you' — 'I thank you' with the person marker built in. Use with elders, strangers, and in professional settings.",
    breakdown: [
      {
        native: "გ-",
        transliteration: "g-",
        meaning: "'you' object marker",
      },
      {
        native: "-მადლობ-",
        transliteration: "-madlob-",
        meaning: "to thank",
      },
      {
        native: "-თ",
        transliteration: "-t",
        meaning: "formal/plural ending",
      },
    ],
  },
  {
    id: "arapris",
    category: "politeness",
    native: "არაფრის",
    transliteration: "arapris",
    english: "You're welcome",
    description:
      "Literally 'of nothing' — like French 'de rien' or Spanish 'de nada'. The standard reply after being thanked.",
    breakdown: [
      {
        native: "არაფერი",
        transliteration: "araperi",
        meaning: "nothing",
      },
      {
        native: "-ის",
        transliteration: "-is",
        meaning: "genitive ending ('of')",
      },
    ],
  },
  {
    id: "ukatsravad",
    category: "politeness",
    native: "უკაცრავად",
    transliteration: "ukatsravad",
    english: "Excuse me / sorry",
    description:
      "More formal than ბოდიში. Use to interrupt politely, get someone's attention on the street, or apologize to a stranger.",
  },
  {
    id: "bodishi",
    category: "politeness",
    native: "ბოდიში",
    transliteration: "bodishi",
    english: "Sorry / Excuse me (casual)",
    description:
      "Used both to apologize and to get someone's attention, like 'excuse me' in English.",
    breakdown: [
      {
        native: "ბოდიში",
        transliteration: "bodishi",
        meaning: "apology (noun); used as a standalone interjection",
      },
    ],
  },
  {
    id: "tu-sheidzleba",
    category: "politeness",
    native: "თუ შეიძლება",
    transliteration: "tu sheidzleba",
    english: "Please (if possible)",
    description:
      "The everyday 'please' — tack it onto any request. Literally 'if it's possible'. For a more formal register, use გთხოვთ.",
    breakdown: [
      { native: "თუ", transliteration: "tu", meaning: "if (conjunction)" },
      {
        native: "შეიძლება",
        transliteration: "sheidzleba",
        meaning: "it is possible / one may (impersonal verb)",
      },
    ],
  },
  {
    id: "gtkhovt",
    category: "politeness",
    native: "გთხოვთ",
    transliteration: "gtkhovt",
    english: "Please (formal)",
    description:
      "The formal 'please' — literally 'I request of you'. More weighty than თუ შეიძლება; use for real favors or with elders.",
    breakdown: [
      {
        native: "გ-",
        transliteration: "g-",
        meaning: "'you' object marker",
      },
      {
        native: "თხოვნა",
        transliteration: "tkhovna",
        meaning: "to request (root verb)",
      },
      {
        native: "-თ",
        transliteration: "-t",
        meaning: "formal/plural ending",
      },
    ],
  },
  {
    id: "batono",
    category: "politeness",
    native: "ბატონო",
    transliteration: "batono",
    english: "Sir",
    description:
      "A polite address for a man — softer than English 'sir'. Also works as a warm filler at the start of a sentence, like 'well now...'.",
  },
  {
    id: "kalbatono",
    category: "politeness",
    native: "ქალბატონო",
    transliteration: "kalbatono",
    english: "Madam",
    description:
      "The feminine counterpart to ბატონო. ქალი (kali) means 'woman', so this is literally 'woman-sir'.",
    breakdown: [
      { native: "ქალი", transliteration: "kali", meaning: "woman" },
      { native: "ბატონო", transliteration: "batono", meaning: "sir" },
    ],
  },
  {
    id: "inebet",
    category: "politeness",
    native: "ინებეთ",
    transliteration: "inebet",
    english: "Here you go",
    description:
      "What you say when handing something to someone — a plate, a gift, the salt. Related to the verb 'to wish/desire': you're inviting them to accept.",
  },

  // ══════════════════════════════════════════════════════════════
  // MEETING THE FAMILY
  // ══════════════════════════════════════════════════════════════
  {
    id: "sasiamovnoa",
    category: "family-intro",
    native: "სასიამოვნოა",
    transliteration: "sasiamovnoa",
    english: "Nice to meet you",
    description:
      "Literally 'it is pleasant'. The full form is სასიამოვნოა თქვენი გაცნობა ('meeting you is pleasant') but the short version alone is warm and works fine.",
    breakdown: [
      {
        native: "სასიამოვნო",
        transliteration: "sasiamovno",
        meaning: "pleasant, agreeable (adjective)",
      },
      {
        native: "-ა",
        transliteration: "-a",
        meaning: "'is' — copula suffix",
      },
      {
        native: "გაცნობა",
        transliteration: "gatsnoba",
        meaning: "acquaintance, introduction",
      },
    ],
  },
  {
    id: "rogor-khart",
    category: "family-intro",
    native: "როგორ ხართ?",
    transliteration: "rogor khart?",
    english: "How are you? (polite)",
    description:
      "The polite/plural form. Always use this with your partner's parents, grandparents, and anyone older or unfamiliar. Only switch to ხარ once they invite you to be informal.",
    breakdown: [
      {
        native: "როგორ",
        transliteration: "rogor",
        meaning: "how (question word)",
      },
      {
        native: "ხართ",
        transliteration: "khart",
        meaning: "you are (formal/plural)",
      },
      {
        native: "ხარ",
        transliteration: "khar",
        meaning: "you are (informal singular)",
      },
    ],
  },
  {
    id: "rogorkhar",
    category: "family-intro",
    native: "როგორ ხარ?",
    transliteration: "rogor khar?",
    english: "How are you? (casual)",
    description:
      "Informal 'how are you' (singular). Use with your partner, kids, and close friends — not with new in-laws.",
    breakdown: [
      { native: "როგორ", transliteration: "rogor", meaning: "how" },
      {
        native: "ხარ",
        transliteration: "khar",
        meaning: "you are (2nd person singular of the verb 'to be')",
      },
    ],
  },
  {
    id: "kargad-var",
    category: "family-intro",
    native: "კარგად ვარ",
    transliteration: "kargad var",
    english: "I'm fine",
    description:
      "The natural reply to 'how are you'. Literally 'I am well'. Intensify with ძალიან ('very'): ძალიან კარგად ვარ.",
    breakdown: [
      {
        native: "კარგად",
        transliteration: "kargad",
        meaning: "well (adverb)",
      },
      { native: "ვარ", transliteration: "var", meaning: "I am" },
    ],
  },
  {
    id: "kargad",
    category: "family-intro",
    native: "კარგად",
    transliteration: "kargad",
    english: "Well / Good",
    description:
      "Common short reply to 'how are you'. Shows the adverb pattern: take an adjective, add -ად.",
    breakdown: [
      {
        native: "კარგი",
        transliteration: "kargi",
        meaning: "good (adjective)",
      },
      {
        native: "-ად",
        transliteration: "-ad",
        meaning: "adverb suffix — turns adjectives into adverbs (like '-ly')",
      },
    ],
  },
  {
    id: "dzalian-kargad",
    category: "family-intro",
    native: "ძალიან კარგად",
    transliteration: "dzalian kargad",
    english: "Very well",
    description:
      "A confident reply. ძალიან is the all-purpose intensifier: ძალიან გემრიელი (very tasty), ძალიან ლამაზი (very beautiful).",
    breakdown: [
      {
        native: "ძალიან",
        transliteration: "dzalian",
        meaning: "very (intensifier)",
      },
      { native: "კარგად", transliteration: "kargad", meaning: "well" },
    ],
  },
  {
    id: "me-mkvia",
    category: "family-intro",
    native: "მე მქვია...",
    transliteration: "me mkvia...",
    english: "My name is...",
    description:
      "Literally 'to me it is called'. Fill in your name after: მე მქვია კეთი (me mkvia Keti). The experiencer prefix მ- again — same pattern as მშია, მინდა.",
    breakdown: [
      { native: "მე", transliteration: "me", meaning: "I / me" },
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' experiencer prefix",
      },
      { native: "ქვია", transliteration: "kvia", meaning: "is called" },
    ],
  },
  {
    id: "ra-gkvia",
    category: "family-intro",
    native: "რა გქვია?",
    transliteration: "ra gkvia?",
    english: "What's your name?",
    description:
      "Same 'is called' verb, but with გ- ('you') instead of მ- ('me'). Georgian builds who-is-doing-what right into the verb.",
    breakdown: [
      { native: "რა", transliteration: "ra", meaning: "what" },
      {
        native: "გ-",
        transliteration: "g-",
        meaning: "'to you' experiencer prefix",
      },
      { native: "ქვია", transliteration: "kvia", meaning: "is called" },
    ],
  },
  {
    id: "pilipineli-var",
    category: "family-intro",
    native: "ფილიპინელი ვარ",
    transliteration: "pilipineli var",
    english: "I am Filipino",
    description:
      "Nationalities end in -ელი (-eli). ფილიპინი = the Philippines, ფილიპინელი = a Filipino person. Same pattern: ქართველი (Georgian), ამერიკელი (American).",
    breakdown: [
      {
        native: "ფილიპინი",
        transliteration: "pilipini",
        meaning: "the Philippines",
      },
      {
        native: "-ელი",
        transliteration: "-eli",
        meaning: "suffix meaning 'person from'",
      },
      { native: "ვარ", transliteration: "var", meaning: "I am" },
    ],
  },
  {
    id: "dzalian-mikharia",
    category: "family-intro",
    native: "ძალიან მიხარია",
    transliteration: "dzalian mikharia",
    english: "I'm very glad",
    description:
      "Experiencer construction again: 'it gladdens me very much'. Perfect for meeting someone, receiving good news, or being welcomed warmly.",
    breakdown: [
      { native: "ძალიან", transliteration: "dzalian", meaning: "very" },
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' experiencer prefix",
      },
      {
        native: "ხარია",
        transliteration: "kharia",
        meaning: "gladdens (from სიხარული, joy)",
      },
    ],
  },
  {
    id: "tkveni-sakhli-lamazia",
    category: "family-intro",
    native: "თქვენი სახლი ლამაზია",
    transliteration: "tkveni sakhli lamazia",
    english: "Your home is beautiful",
    description:
      "A perfect thing to say on arrival. თქვენი is the formal/plural 'your' — use with in-laws. The casual version is შენი (sheni).",
    breakdown: [
      {
        native: "თქვენი",
        transliteration: "tkveni",
        meaning: "your (formal/plural)",
      },
      {
        native: "სახლი",
        transliteration: "sakhli",
        meaning: "house, home",
      },
      { native: "ლამაზი", transliteration: "lamazi", meaning: "beautiful" },
      {
        native: "-ა",
        transliteration: "-a",
        meaning: "'is' — copula → ლამაზია",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // AT THE TABLE (SUPRA)
  // ══════════════════════════════════════════════════════════════
  {
    id: "modi-vchamot",
    category: "supra",
    native: "მოდი ვჭამოთ",
    transliteration: "modi vch'amot",
    english: "Let's eat",
    description:
      "How you call the household to the table. For your partner's parents (formal/plural), say 'მოდით, ჭამეთ' (modit, ch'amet) — 'come, eat'.",
    breakdown: [
      {
        native: "მოდი",
        transliteration: "modi",
        meaning: "come! (informal singular imperative)",
      },
      {
        native: "მოდით",
        transliteration: "modit",
        meaning: "come! (formal/plural — use with elders and in-laws)",
      },
      {
        native: "ვჭამოთ",
        transliteration: "vch'amot",
        meaning: "let us eat (1st person plural of 'to eat')",
      },
    ],
  },
  {
    id: "gemrielia",
    category: "supra",
    native: "გემრიელია",
    transliteration: "gemrielia",
    english: "It's delicious",
    description:
      "Essential for Georgian food culture — a supra host will want to hear this. Shows how Georgian glues 'is' onto the end of an adjective.",
    breakdown: [
      {
        native: "გემრიელი",
        transliteration: "gemrieli",
        meaning: "tasty, delicious (adjective)",
      },
      {
        native: "-ა",
        transliteration: "-a",
        meaning: "'is' — 3rd person singular copula, attached as a suffix",
      },
    ],
  },
  {
    id: "gaumarjos",
    category: "supra",
    native: "გაუმარჯოს!",
    transliteration: "gaumarjos!",
    english: "Cheers!",
    description:
      "Said during toasts — same 'victory' root as gamarjoba. Raise the glass, say gaumarjos, and drink. Never toast with beer — that's an insult.",
    breakdown: [
      {
        native: "გამარჯვება",
        transliteration: "gamarjveba",
        meaning: "victory (root)",
      },
      {
        native: "-ოს",
        transliteration: "-os",
        meaning: "subjunctive ending — 'may (it) be'",
      },
    ],
  },
  {
    id: "sadghegrdzelo",
    category: "supra",
    native: "სადღეგრძელო",
    transliteration: "sadghegrdzelo",
    english: "A toast (the speech)",
    description:
      "A spoken toast at a supra — a short (or very long) speech honoring family, ancestors, love, peace. The tamada (toastmaster) leads them. Try 'თქვენს სადღეგრძელოს!' — 'to your toast!'",
    breakdown: [
      {
        native: "დღეგრძელი",
        transliteration: "dghegrdzeli",
        meaning: "long-lived",
      },
      {
        native: "სა- ... -ო",
        transliteration: "sa- ... -o",
        meaning: "noun-forming pattern — literally 'the long-lived one'",
      },
    ],
  },
  {
    id: "mshia",
    category: "supra",
    native: "მშია",
    transliteration: "mshia",
    english: "I'm hungry",
    description:
      "Georgian treats hunger as something that happens to you, not something you are — literally 'it hungers me'. The 'me' is baked into the prefix.",
    breakdown: [
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' — the experiencer prefix",
      },
      {
        native: "შია",
        transliteration: "shia",
        meaning: "hungers (from შიმშილი, 'hunger')",
      },
      {
        native: "გშია",
        transliteration: "gshia",
        meaning: "you are hungry — swap the prefix to change the person",
      },
    ],
  },
  {
    id: "mtsquria",
    category: "supra",
    native: "მწყურია",
    transliteration: "mts'q'uria",
    english: "I'm thirsty",
    description:
      "Same pattern as მშია — 'it thirsts me'. Once you spot this experiencer prefix, you'll recognize a whole family of feelings-verbs in Georgian.",
    breakdown: [
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' — experiencer prefix",
      },
      {
        native: "წყურია",
        transliteration: "ts'q'uria",
        meaning: "thirsts (from წყურვილი, 'thirst')",
      },
    ],
  },
  {
    id: "minda",
    category: "supra",
    native: "მინდა",
    transliteration: "minda",
    english: "I want",
    description:
      "The workhorse for expressing wants. The thing you want comes before it: 'ჩაი მინდა' (chai minda) = 'I want tea', 'ძილი მინდა' = 'I want to sleep'.",
    breakdown: [
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' — experiencer prefix again",
      },
      {
        native: "-ინდა",
        transliteration: "-inda",
        meaning: "wants (root of 'to want')",
      },
      {
        native: "გინდა",
        transliteration: "ginda",
        meaning: "you want (informal) — swap the prefix",
      },
    ],
  },
  {
    id: "gamadzghari-var",
    category: "supra",
    native: "გამაძღარი ვარ",
    transliteration: "gamadzghari var",
    english: "I'm full",
    description:
      "The polite way to decline a third helping — though be warned, it rarely works the first time. Pair with 'მადლობა, ძალიან გემრიელი იყო' (thanks, it was delicious).",
    breakdown: [
      {
        native: "გამაძღარი",
        transliteration: "gamadzghari",
        meaning: "sated, full (past participle)",
      },
      {
        native: "ვარ",
        transliteration: "var",
        meaning: "I am (1st person of 'to be')",
      },
    ],
  },
  {
    id: "meqopa",
    category: "supra",
    native: "მადლობა, მეყოფა",
    transliteration: "madloba, meqopa",
    english: "Thanks, I've had enough",
    description:
      "The graceful decline. Say it early and often — Georgian hosts consider the first two 'no thanks' a mere formality. Experiencer construction: 'it suffices to me'.",
    breakdown: [
      { native: "მადლობა", transliteration: "madloba", meaning: "thanks" },
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' experiencer",
      },
      {
        native: "ეყოფა",
        transliteration: "eqopa",
        meaning: "it suffices, is enough",
      },
    ],
  },
  {
    id: "tsota",
    category: "supra",
    native: "ცოტა",
    transliteration: "tsota",
    english: "A little",
    description:
      "Essential for portion control. Point at the food and say ცოტა — or ცოტა, თუ შეიძლება ('a little, please'). Also common in ცოტა ხანში ('in a little while').",
  },
  {
    id: "kidev-tsota",
    category: "supra",
    native: "კიდევ ცოტა",
    transliteration: "kidev tsota",
    english: "A little more",
    description:
      "The polite 'just a bit more' — you'll want it when they refill your plate five times. Also useful: კიდევ ერთი (kidev erti) = 'one more'.",
    breakdown: [
      {
        native: "კიდევ",
        transliteration: "kidev",
        meaning: "more, again, still",
      },
      { native: "ცოტა", transliteration: "tsota", meaning: "a little" },
    ],
  },
  {
    id: "tsqali",
    category: "supra",
    native: "წყალი",
    transliteration: "ts'q'ali",
    english: "Water",
    description:
      "To ask for some: 'წყალი, თუ შეიძლება' (ts'q'ali, tu sheidzleba). The ყ (q') is a punchy back-of-throat sound that trips up learners; don't worry, you'll be understood.",
    breakdown: [
      {
        native: "წყალი",
        transliteration: "ts'q'ali",
        meaning: "water (noun, nominative case)",
      },
    ],
  },
  {
    id: "ghvino",
    category: "supra",
    native: "ღვინო",
    transliteration: "ghvino",
    english: "Wine",
    description:
      "Georgia is one of the oldest wine-making regions in the world — 8,000+ years. Wine is central to the supra. Popular types: საფერავი (saperavi, dry red), რქაწითელი (rkatsiteli, white).",
  },
  {
    id: "puri",
    category: "supra",
    native: "პური",
    transliteration: "puri",
    english: "Bread",
    description:
      "Central to any Georgian meal — often shotis puri (შოთის პური), the canoe-shaped loaf from a tone oven. 'პური მომეცი, თუ შეიძლება' = 'pass me the bread, please'.",
    breakdown: [
      {
        native: "პური",
        transliteration: "puri",
        meaning: "bread (noun, nominative case)",
      },
      {
        native: "მომეცი",
        transliteration: "mometsi",
        meaning: "give me (informal imperative of 'to give')",
      },
    ],
  },
  {
    id: "qveli",
    category: "supra",
    native: "ყველი",
    transliteration: "qveli",
    english: "Cheese",
    description:
      "A supra staple — especially სულგუნი (sulguni, briny and mozzarella-like) and ხაჭო (khacho, curd cheese). The star ingredient inside khachapuri.",
  },
  {
    id: "khachapuri",
    category: "supra",
    native: "ხაჭაპური",
    transliteration: "khachapuri",
    english: "Khachapuri (cheese bread)",
    description:
      "The national dish — bread stuffed with cheese. The Adjaruli version is boat-shaped with an egg on top; the Imeruli is round and flat. Literally 'cheese + bread'.",
    breakdown: [
      { native: "ხაჭო", transliteration: "khacho", meaning: "curd cheese" },
      { native: "პური", transliteration: "puri", meaning: "bread" },
    ],
  },
  {
    id: "khinkali",
    category: "supra",
    native: "ხინკალი",
    transliteration: "khinkali",
    english: "Khinkali (dumplings)",
    description:
      "Juicy soup dumplings, a mountain specialty. Eat with your hands: hold the twisted top (the kudi, 'tail'), sip the broth first, then bite. Never eat the kudi — count them at the end.",
  },
  {
    id: "churchkhela",
    category: "supra",
    native: "ჩურჩხელა",
    transliteration: "churchkhela",
    english: "Churchkhela (walnut sweet)",
    description:
      "A candle-shaped confection: walnuts strung on thread, dipped in thickened grape juice, and dried. Georgia's traditional 'energy bar' — carried by soldiers and shepherds for centuries.",
  },

  // ══════════════════════════════════════════════════════════════
  // FAMILY MEMBERS
  // ══════════════════════════════════════════════════════════════
  {
    id: "deda-mama",
    category: "family",
    native: "დედა / მამა",
    transliteration: "deda / mama",
    english: "Mom / Dad",
    description:
      "Famously flipped from English: დედა (deda) is mom, მამა (mama) is dad. This trips up every English speaker for months — worth memorizing early. Add ჩემი (chemi, 'my') for 'my mom/dad': ჩემი დედა.",
    breakdown: [
      { native: "დედა", transliteration: "deda", meaning: "mother" },
      { native: "მამა", transliteration: "mama", meaning: "father" },
      { native: "ბებია", transliteration: "bebia", meaning: "grandmother" },
      {
        native: "ბაბუა",
        transliteration: "babua",
        meaning: "grandfather (also პაპა, papa)",
      },
    ],
  },
  {
    id: "bebia",
    category: "family",
    native: "ბებია",
    transliteration: "bebia",
    english: "Grandmother",
    description:
      "Also used as an affectionate 'granny'. In some regions ბებო (bebo) is a warmer diminutive.",
  },
  {
    id: "babua",
    category: "family",
    native: "ბაბუა",
    transliteration: "babua",
    english: "Grandfather",
    description:
      "The standard word. You may also hear პაპა (papa), especially in western Georgia. Careful — this looks like English 'papa' but means grandpa, not dad!",
  },
  {
    id: "da",
    category: "family",
    native: "და",
    transliteration: "da",
    english: "Sister",
    description:
      "A one-syllable word — small but important. ჩემი და (chemi da) = 'my sister'. Georgian doesn't have separate words for older/younger; add უფროსი (older) or უმცროსი (younger) if needed.",
  },
  {
    id: "dzma",
    category: "family",
    native: "ძმა",
    transliteration: "dzma",
    english: "Brother",
    description:
      "Another two-consonant one-syllable word — Georgian is full of these! ჩემი ძმა (chemi dzma) = 'my brother'. Also used affectionately for close male friends.",
  },
  {
    id: "deida",
    category: "family",
    native: "დეიდა",
    transliteration: "deida",
    english: "Aunt (mother's side)",
    description:
      "Specifically your mother's sister. Also used warmly to address any older woman who's not family — like 'tita' in Filipino culture.",
  },
  {
    id: "bidza",
    category: "family",
    native: "ბიძა",
    transliteration: "bidza",
    english: "Uncle",
    description:
      "Used for both mother's and father's brothers. Also a friendly address for any older man — 'uncle' in the same way many Asian cultures use it.",
  },
  {
    id: "ojakhi",
    category: "family",
    native: "ოჯახი",
    transliteration: "ojakhi",
    english: "Family",
    description:
      "The whole family unit. Georgia is intensely family-oriented; ოჯახი is central to identity. ჩემი ოჯახი (chemi ojakhi) = 'my family'.",
  },
  {
    id: "shvili",
    category: "family",
    native: "შვილი",
    transliteration: "shvili",
    english: "Child (son/daughter)",
    description:
      "Gender-neutral 'child'. For specifics: ვაჟი (vazhi) = son, ქალიშვილი (kalishvili) = daughter — literally 'woman-child'. შვილიშვილი = grandchild.",
    breakdown: [
      { native: "შვილი", transliteration: "shvili", meaning: "child" },
      { native: "ვაჟი", transliteration: "vazhi", meaning: "son" },
      {
        native: "ქალიშვილი",
        transliteration: "kalishvili",
        meaning: "daughter (kali + shvili)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // NUMBERS 1–10
  // ══════════════════════════════════════════════════════════════
  {
    id: "erti",
    category: "numbers",
    native: "ერთი",
    transliteration: "erti",
    english: "One",
    description:
      "Useful for ordering: ერთი ყავა, თუ შეიძლება (erti qava, tu sheidzleba) — 'one coffee, please'. Ordinal: პირველი (pirveli, 'first').",
  },
  {
    id: "ori",
    category: "numbers",
    native: "ორი",
    transliteration: "ori",
    english: "Two",
    description:
      "Becomes 'both' in ორივე (orive). Ordinal: მეორე (meore, 'second'). The pattern for ordinals: მე- + [number] + -ე.",
  },
  {
    id: "sami",
    category: "numbers",
    native: "სამი",
    transliteration: "sami",
    english: "Three",
    description: "Ordinal: მესამე (mesame, 'third').",
  },
  {
    id: "otkhi",
    category: "numbers",
    native: "ოთხი",
    transliteration: "otkhi",
    english: "Four",
    description:
      "The kh sound is like Spanish 'j' — a soft rasp from the back of the throat. Ordinal: მეოთხე (meotkhe).",
  },
  {
    id: "khuti",
    category: "numbers",
    native: "ხუთი",
    transliteration: "khuti",
    english: "Five",
    description: "Ordinal: მეხუთე (mekhute).",
  },
  {
    id: "ekvsi",
    category: "numbers",
    native: "ექვსი",
    transliteration: "ekvsi",
    english: "Six",
    description:
      "The 'kv' cluster is not unusual in Georgian — the language likes stacked consonants. Ordinal: მეექვსე (meekvse).",
  },
  {
    id: "shvidi",
    category: "numbers",
    native: "შვიდი",
    transliteration: "shvidi",
    english: "Seven",
    description: "Ordinal: მეშვიდე (meshvide).",
  },
  {
    id: "rva",
    category: "numbers",
    native: "რვა",
    transliteration: "rva",
    english: "Eight",
    description:
      "Another famously short two-consonant word. Ordinal: მერვე (merve).",
  },
  {
    id: "tskhra",
    category: "numbers",
    native: "ცხრა",
    transliteration: "tskhra",
    english: "Nine",
    description:
      "A tongue-twister — three consonants before the vowel. Ordinal: მეცხრე (metskhre).",
  },
  {
    id: "ati",
    category: "numbers",
    native: "ათი",
    transliteration: "ati",
    english: "Ten",
    description:
      "After ten, teens compound: თერთმეტი (tertmeti, 11), თორმეტი (tormeti, 12). Ordinal: მეათე (meate).",
  },

  // ══════════════════════════════════════════════════════════════
  // USEFUL QUESTIONS
  // ══════════════════════════════════════════════════════════════
  {
    id: "sad-aris",
    category: "questions",
    native: "სად არის?",
    transliteration: "sad aris?",
    english: "Where is...?",
    description:
      "Put the thing you're looking for first: 'ტუალეტი სად არის?' (tualeti sad aris?) — 'where is the toilet?'. Georgian word order is flexible; topic-first is very natural.",
    breakdown: [
      {
        native: "სად",
        transliteration: "sad",
        meaning: "where (question word)",
      },
      {
        native: "არის",
        transliteration: "aris",
        meaning: "is (3rd person singular of 'to be')",
      },
    ],
  },
  {
    id: "es-ra-aris",
    category: "questions",
    native: "ეს რა არის?",
    transliteration: "es ra aris?",
    english: "What is this?",
    description:
      "Point at anything on the table you don't recognize (there will be many) and ask this. Great for learning vocabulary organically from your in-laws.",
    breakdown: [
      {
        native: "ეს",
        transliteration: "es",
        meaning: "this (demonstrative)",
      },
      {
        native: "რა",
        transliteration: "ra",
        meaning: "what (question word)",
      },
      { native: "არის", transliteration: "aris", meaning: "is" },
    ],
  },
  {
    id: "ramdeni-ghirs",
    category: "questions",
    native: "რამდენი ღირს?",
    transliteration: "ramdeni ghirs?",
    english: "How much does it cost?",
    description:
      "Essential at markets. The answer comes in ლარი (lari, the currency): ხუთი ლარი = 5 lari. Point and ask: ეს რამდენი ღირს? — 'how much is this?'",
    breakdown: [
      {
        native: "რამდენი",
        transliteration: "ramdeni",
        meaning: "how much / how many",
      },
      { native: "ღირს", transliteration: "ghirs", meaning: "it costs" },
    ],
  },
  {
    id: "ver-gavige",
    category: "questions",
    native: "ვერ გავიგე",
    transliteration: "ver gavige",
    english: "I didn't catch that",
    description:
      "The go-to when the conversation flies past you. Uses ვერ (ver, 'unable') rather than არ (ar, 'not') — Georgian distinguishes 'I didn't' from 'I couldn't'; here it's the latter.",
    breakdown: [
      {
        native: "ვერ",
        transliteration: "ver",
        meaning: "cannot / was unable to (negation of ability)",
      },
      {
        native: "გავიგე",
        transliteration: "gavige",
        meaning: "I understood (past tense of 'to understand')",
      },
      {
        native: "არ ვიცი",
        transliteration: "ar vitsi",
        meaning: "compare: 'I don't know' — უses არ because knowing isn't about ability",
      },
    ],
  },
  {
    id: "ar-mesmis",
    category: "questions",
    native: "არ მესმის",
    transliteration: "ar mesmis",
    english: "I don't understand",
    description:
      "Present tense — 'I'm not understanding right now'. Different from ვერ გავიგე (past: 'I didn't catch that'). Uses the experiencer prefix again.",
    breakdown: [
      { native: "არ", transliteration: "ar", meaning: "not" },
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' experiencer",
      },
      {
        native: "ესმის",
        transliteration: "esmis",
        meaning: "it is understood",
      },
    ],
  },
  {
    id: "ar-vitsi-kartuli",
    category: "questions",
    native: "არ ვიცი ქართული",
    transliteration: "ar vitsi kartuli",
    english: "I don't speak Georgian",
    description:
      "Literally 'I don't know Georgian'. Georgians will love that you tried — they don't expect foreigners to speak. Softer: ცოტა ვიცი (tsota vitsi) = 'I know a little'.",
    breakdown: [
      { native: "არ", transliteration: "ar", meaning: "not" },
      { native: "ვიცი", transliteration: "vitsi", meaning: "I know" },
      {
        native: "ქართული",
        transliteration: "kartuli",
        meaning: "Georgian (the language)",
      },
    ],
  },
  {
    id: "vitsi-tsota-kartuli",
    category: "questions",
    native: "ვიცი ცოტა ქართული",
    transliteration: "vitsi tsota kartuli",
    english: "I know a little Georgian",
    description:
      "The confident-beginner phrase — softer than 'I don't speak'. Sets expectations gently and invites them to slow down.",
    breakdown: [
      { native: "ვიცი", transliteration: "vitsi", meaning: "I know" },
      { native: "ცოტა", transliteration: "tsota", meaning: "a little" },
      {
        native: "ქართული",
        transliteration: "kartuli",
        meaning: "Georgian",
      },
    ],
  },
  {
    id: "laparakobt-inglisurad",
    category: "questions",
    native: "ლაპარაკობთ ინგლისურად?",
    transliteration: "laparakobt inglisurad?",
    english: "Do you speak English?",
    description:
      "Formal 'you' (the -თ ending). ინგლისურად uses the adverbial suffix -ად — literally 'in an English manner'. Same pattern: ქართულად = 'in Georgian'.",
    breakdown: [
      {
        native: "ლაპარაკობთ",
        transliteration: "laparakobt",
        meaning: "you speak (formal)",
      },
      {
        native: "ინგლისურ-",
        transliteration: "inglisur-",
        meaning: "English",
      },
      {
        native: "-ად",
        transliteration: "-ad",
        meaning: "adverbial suffix ('in the manner of')",
      },
    ],
  },
  {
    id: "gaimeoret",
    category: "questions",
    native: "გაიმეორეთ, გთხოვთ",
    transliteration: "gaimeoret, gtkhovt",
    english: "Please repeat",
    description:
      "Formal/plural imperative — pairs naturally with გთხოვთ. Casual form: გაიმეორე (gaimeore).",
    breakdown: [
      {
        native: "გამეორება",
        transliteration: "gameoreba",
        meaning: "to repeat",
      },
      {
        native: "-ეთ",
        transliteration: "-et",
        meaning: "formal/plural imperative ending",
      },
      {
        native: "გთხოვთ",
        transliteration: "gtkhovt",
        meaning: "please (formal)",
      },
    ],
  },
  {
    id: "nela",
    category: "questions",
    native: "ნელა, თუ შეიძლება",
    transliteration: "nela, tu sheidzleba",
    english: "Slowly, please",
    description:
      "The single most useful phrase for a beginner. Georgians speak fast; asking politely for slower delivery is completely normal and appreciated.",
    breakdown: [
      {
        native: "ნელი",
        transliteration: "neli",
        meaning: "slow (adjective)",
      },
      {
        native: "ნელა",
        transliteration: "nela",
        meaning: "slowly (adverb — same -ა/-ად pattern as კარგად)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // COMPLIMENTS & SWEET WORDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "lamazia",
    category: "compliments",
    native: "ლამაზია",
    transliteration: "lamazia",
    english: "It's beautiful",
    description:
      "The all-purpose compliment — for a view, a dish, a dress, a home. Like გემრიელია, it glues 'is' onto the adjective: ლამაზი + ა → ლამაზია.",
    breakdown: [
      {
        native: "ლამაზი",
        transliteration: "lamazi",
        meaning: "beautiful (adjective)",
      },
      {
        native: "-ა",
        transliteration: "-a",
        meaning: "'is' — copula suffix",
      },
    ],
  },
  {
    id: "sakartvelo-lamazia",
    category: "compliments",
    native: "საქართველო ლამაზია",
    transliteration: "sakartvelo lamazia",
    english: "Georgia is beautiful",
    description:
      "Always well-received. საქართველო is what Georgians call their country — literally 'land of the Kartvelians'. A great phrase to say out loud.",
    breakdown: [
      {
        native: "საქართველო",
        transliteration: "sakartvelo",
        meaning: "Georgia (the country)",
      },
      { native: "ლამაზი", transliteration: "lamazi", meaning: "beautiful" },
      { native: "-ა", transliteration: "-a", meaning: "'is'" },
    ],
  },
  {
    id: "momtsons",
    category: "compliments",
    native: "მომწონს",
    transliteration: "momtsons",
    english: "I like it",
    description:
      "Different from 'love' — this is 'it appeals to me'. Uses the experiencer pattern: 'it is pleasing to me'. Intensify with ძალიან: ძალიან მომწონს.",
    breakdown: [
      {
        native: "მ-",
        transliteration: "m-",
        meaning: "'to me' experiencer prefix",
      },
      {
        native: "-წონ-",
        transliteration: "-tson-",
        meaning: "to please, be pleasing",
      },
      {
        native: "მიყვარს",
        transliteration: "miqvars",
        meaning: "contrast: 'I love' — stronger",
      },
    ],
  },
  {
    id: "miqvarkhar",
    category: "compliments",
    native: "მიყვარხარ",
    transliteration: "miqvarkhar",
    english: "I love you",
    description:
      "The romantic 'I love you' (informal singular). Contains both people — 'me' (მი-) and 'you' (-ხარ) — baked into a single verb. Formal/plural: მიყვარხართ.",
    breakdown: [
      { native: "მი-", transliteration: "mi-", meaning: "'I' subject" },
      {
        native: "ყვარ-",
        transliteration: "qvar-",
        meaning: "love (from სიყვარული)",
      },
      { native: "-ხარ", transliteration: "-khar", meaning: "'you' object" },
    ],
  },
  {
    id: "chemo-siqvarulo",
    category: "compliments",
    native: "ჩემო სიყვარულო",
    transliteration: "chemo siqvarulo",
    english: "My love",
    description:
      "A vocative — the form used to address someone directly. -ო is the vocative ending: სიყვარული ('love') becomes სიყვარულო when you're speaking TO the beloved.",
    breakdown: [
      { native: "ჩემი", transliteration: "chemi", meaning: "my" },
      {
        native: "ჩემო",
        transliteration: "chemo",
        meaning: "my (vocative form)",
      },
      {
        native: "სიყვარული",
        transliteration: "siqvaruli",
        meaning: "love (noun)",
      },
      {
        native: "სიყვარულო",
        transliteration: "siqvarulo",
        meaning: "love! (vocative)",
      },
    ],
  },
  {
    id: "genatsvale",
    category: "compliments",
    native: "გენაცვალე",
    transliteration: "genatsvale",
    english: "My dear (untranslatable)",
    description:
      "Deeply Georgian and hard to translate — roughly 'may I take your place' (if harm comes to you, I'll take it instead). Expresses love so intense you'd suffer for the other person. Used for anyone dear, romantic or not.",
  },

  // ══════════════════════════════════════════════════════════════
  // HANDY EVERYDAY WORDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "dghes",
    category: "everyday",
    native: "დღეს",
    transliteration: "dghes",
    english: "Today",
    description:
      "Not to be confused with დღე (dghe, 'day'). დღეს is 'today' — technically the adverbial form. 'What's for dinner today?' → დღეს რა ვახშამია?",
  },
  {
    id: "khval",
    category: "everyday",
    native: "ხვალ",
    transliteration: "khval",
    english: "Tomorrow",
    description:
      "One of the few Georgian words starting with khv-, a distinctive cluster. Yesterday: გუშინ (gushin).",
  },
  {
    id: "akhla",
    category: "everyday",
    native: "ახლა",
    transliteration: "akhla",
    english: "Now",
    description:
      "Also used as 'right now' or 'in a moment' — precision depends on context, like English 'now'. Don't confuse with აღარ (aghar) = 'not anymore'.",
  },
  {
    id: "ak",
    category: "everyday",
    native: "აქ",
    transliteration: "ak",
    english: "Here",
    description:
      "The pair to იქ (ik, 'there'). Georgian has a three-way distinction: აქ (here, near me), იქ (there, away from us), აი (here it is, look at this).",
  },
  {
    id: "ik",
    category: "everyday",
    native: "იქ",
    transliteration: "ik",
    english: "There",
    description:
      "Partner of აქ. Also useful: იქით (ikit) = 'that way, in that direction'.",
  },
  {
    id: "tskheli",
    category: "everyday",
    native: "ცხელი",
    transliteration: "tskheli",
    english: "Hot",
    description:
      "For heat — weather, food, drinks. The opposite is ცივი. 'It's hot' = ცხელა (tskhela); 'I'm hot' uses the experiencer form.",
  },
  {
    id: "tsivi",
    category: "everyday",
    native: "ცივი",
    transliteration: "tsivi",
    english: "Cold",
    description:
      "'It's cold' = ცივა (tsiva) — again the -ა copula suffix. 'I'm cold' uses the experiencer construction: მცივა — literally 'it colds me'.",
    breakdown: [
      {
        native: "ცივი",
        transliteration: "tsivi",
        meaning: "cold (adjective)",
      },
      { native: "ცივა", transliteration: "tsiva", meaning: "it is cold" },
      {
        native: "მცივა",
        transliteration: "mtsiva",
        meaning: "I am cold (experiencer form)",
      },
    ],
  },
  {
    id: "didi",
    category: "everyday",
    native: "დიდი",
    transliteration: "didi",
    english: "Big",
    description:
      "You've already met it in დიდი მადლობა (thank you very much). Also used metaphorically: დიდი კაცი (didi katsi) = 'a great man'.",
  },
  {
    id: "patara",
    category: "everyday",
    native: "პატარა",
    transliteration: "patara",
    english: "Small",
    description:
      "The opposite of დიდი. Also 'a little bit' in some contexts, and often used affectionately for children or pets.",
  },
  {
    id: "bednieri-var",
    category: "everyday",
    native: "ბედნიერი ვარ",
    transliteration: "bednieri var",
    english: "I am happy",
    description:
      "The -ერი ending marks a family of feeling adjectives: ბედნიერი (happy), მოწყენილი (sad), მშვიდი (calm). Then tag on ვარ ('I am').",
    breakdown: [
      { native: "ბედი", transliteration: "bedi", meaning: "fate, fortune" },
      {
        native: "-ერი",
        transliteration: "-eri",
        meaning: "adjective-forming suffix",
      },
      { native: "ვარ", transliteration: "var", meaning: "I am" },
    ],
  },
  {
    id: "daghlili-var",
    category: "everyday",
    native: "დაღლილი ვარ",
    transliteration: "daghlili var",
    english: "I'm tired",
    description:
      "Handy for 'I'm off to bed' or 'I need to sit down'. The -ი ending on დაღლილი is the nominative marker — it agrees with 'I' (which is implied).",
    breakdown: [
      {
        native: "დაღლილი",
        transliteration: "daghlili",
        meaning: "tired (past participle from 'to tire')",
      },
      { native: "ვარ", transliteration: "var", meaning: "I am" },
    ],
  },
  {
    id: "davidzineb",
    category: "everyday",
    native: "წავალ დასაძინებლად",
    transliteration: "ts'aval dasadzineblad",
    english: "I'm going to sleep",
    description:
      "The natural way to announce you're turning in. A shorter alternative: 'ძილი მინდა' (dzili minda) — 'I want sleep'.",
    breakdown: [
      {
        native: "წავალ",
        transliteration: "ts'aval",
        meaning: "I will go (future of 'to go')",
      },
      {
        native: "დასაძინებლად",
        transliteration: "dasadzineblad",
        meaning: "in order to sleep (purposive form of 'to sleep')",
      },
    ],
  },
];
