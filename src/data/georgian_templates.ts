import type { Category, Flashcard } from "../types";

export const georgianTemplateCategories: Category[] = [
  {
    id: "template-dining",
    name: "Template · Dining",
    emoji: "🍽️",
    description: "Fill-in-the-blank phrases for meals and eating out",
  },
  {
    id: "template-needs",
    name: "Template · Personal Needs",
    emoji: "🚻",
    description: "Bathroom, hunger, sleep, and other basics",
  },
  {
    id: "template-intro",
    name: "Template · Introductions",
    emoji: "🪪",
    description: "Your name, this person, where you're from",
  },
  {
    id: "template-meetup",
    name: "Template · Meeting Up",
    emoji: "📍",
    description: "Where you are, where to meet, arriving times",
  },
];

// Georgian is complex — cases and verb conjugation are easy to get wrong.
// Every card here is marked unverified: true so you can review them with
// your partner's family and remove the flag as each is confirmed.
export const georgianTemplateCards: Flashcard[] = [
  // ══════════════════════════════════════════════════════════════
  // DINING
  // ══════════════════════════════════════════════════════════════
  {
    id: "ka-tpl-minda-x",
    category: "template-dining",
    native: "მინდა [საკვები]",
    transliteration: "minda [sak'vebi]",
    english: "I want [food]",
    description:
      "Minda = 'I want.' Directly followed by the noun in nominative for simple requests. Sak'vebi = food.",
    unverified: true,
  },
  {
    id: "ka-tpl-vch-am",
    category: "template-dining",
    native: "[სახელი]-თან ერთად ვჭამ",
    transliteration: "[sakheli]-tan ertad vch'am",
    english: "I'll eat with [name]",
    description:
      "-თან (-tan) is the postposition 'with/near' (attached to the name). ერთად (ertad) = 'together.' Vch'am = 'I eat' (used here for near-future).",
    unverified: true,
  },
  {
    id: "ka-tpl-gemrielia",
    category: "template-dining",
    native: "[კერძი] გემრიელია",
    transliteration: "[k'erdzi] gemrielia",
    english: "[dish] is delicious",
    description:
      "Gemrielia = 'is delicious' (from gemrieli + copula -a). K'erdzi = dish.",
    unverified: true,
  },
  {
    id: "ka-tpl-madloba-stvis",
    category: "template-dining",
    native: "მადლობა [X]-სთვის",
    transliteration: "madloba [X]-stvis",
    english: "Thank you for [X]",
    description:
      "-სთვის (-stvis) is the postposition 'for.' Attaches directly to the noun.",
    unverified: true,
  },
  {
    id: "ka-tpl-momitanet",
    category: "template-dining",
    native: "[X] მომიტანეთ, თუ შეიძლება",
    transliteration: "[X] momit'anet, tu sheidzleba",
    english: "Please bring me [X]",
    description:
      "Momit'anet = 'bring (it) to me' (polite/plural imperative). Tu sheidzleba = 'if possible / please.'",
    unverified: true,
  },

  // ══════════════════════════════════════════════════════════════
  // PERSONAL NEEDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "ka-tpl-sad-tualeti",
    category: "template-needs",
    native: "სად არის ტუალეტი?",
    transliteration: "sad aris t'ualet'i?",
    english: "Where is the bathroom?",
    description:
      "Sad = where, aris = is, t'ualet'i = bathroom/toilet (loanword from French).",
    unverified: true,
  },
  {
    id: "ka-tpl-tualetshi",
    category: "template-needs",
    native: "ტუალეტში მინდა წასვლა",
    transliteration: "t'ualet'shi minda ts'asvla",
    english: "I need to go to the bathroom",
    description:
      "-ში (-shi) is the postposition 'in/to.' Ts'asvla = 'going' (verbal noun). Literally 'to the bathroom I want going.'",
    unverified: true,
  },
  {
    id: "ka-tpl-mshia",
    category: "template-needs",
    native: "მშია",
    transliteration: "mshia",
    english: "I'm hungry",
    description:
      "One-word phrase. Georgian doesn't need a separate subject pronoun here — the 'm-' prefix marks 'me.'",
    unverified: true,
  },
  {
    id: "ka-tpl-mts-quria",
    category: "template-needs",
    native: "მწყურია",
    transliteration: "mts'q'uria",
    english: "I'm thirsty",
    description:
      "Same pattern as mshia — the 'm-' prefix marks 'me.' Pair with წყალი (ts'q'ali) = water.",
    unverified: true,
  },
  {
    id: "ka-tpl-daghlili",
    category: "template-needs",
    native: "დაღლილი ვარ",
    transliteration: "daghlili var",
    english: "I'm tired",
    description:
      "Daghlili = tired (adjective/participle). Var = 'I am.'",
    unverified: true,
  },
  {
    id: "ka-tpl-dzili-minda",
    category: "template-needs",
    native: "ძილი მინდა",
    transliteration: "dzili minda",
    english: "I want to sleep",
    description:
      "Literally 'sleep I want.' Dzili = sleep (noun). Word order is flexible; the object often comes before the verb.",
    unverified: true,
  },
  {
    id: "ka-tpl-mchirdeba",
    category: "template-needs",
    native: "[X] მჭირდება",
    transliteration: "[X] mch'irdeba",
    english: "I need [X]",
    description:
      "Mch'irdeba = 'is needed by me' (impersonal verb with 'm-' marking the beneficiary).",
    unverified: true,
  },
  {
    id: "ka-tpl-tsudad-var",
    category: "template-needs",
    native: "ცუდად ვარ",
    transliteration: "ts'udad var",
    english: "I don't feel well",
    description:
      "Literally 'I am badly.' Ts'udad is the adverb form of ts'udi (bad).",
    unverified: true,
  },

  // ══════════════════════════════════════════════════════════════
  // INTRODUCTIONS
  // ══════════════════════════════════════════════════════════════
  {
    id: "ka-tpl-me-var",
    category: "template-intro",
    native: "მე ვარ [სახელი]",
    transliteration: "me var [sakheli]",
    english: "I am [name]",
    description:
      "Me = I, var = am. The most direct introduction. Sakheli = name.",
    unverified: true,
  },
  {
    id: "ka-tpl-chemi-sakhelia",
    category: "template-intro",
    native: "ჩემი სახელია [სახელი]",
    transliteration: "chemi sakhelia [sakheli]",
    english: "My name is [name]",
    description:
      "Chemi = my. Sakhelia = 'is (the) name' (sakheli + copula -a).",
    unverified: true,
  },
  {
    id: "ka-tpl-es-aris",
    category: "template-intro",
    native: "ეს არის [სახელი]",
    transliteration: "es aris [sakheli]",
    english: "This is [name]",
    description:
      "Es = this. Georgian doesn't mark gender in pronouns — es works for both 'he' and 'she' when introducing.",
    unverified: true,
  },
  {
    id: "ka-tpl-chemi-x-aris",
    category: "template-intro",
    native: "ის ჩემი [X] არის",
    transliteration: "is chemi [X] aris",
    english: "He/she is my [X]",
    description:
      "Is = he/she (unisex). Common completions: მეგობარი (megobari) = friend, და (da) = sister, ძმა (dzma) = brother, დედა (deda) = mother.",
    unverified: true,
  },
  {
    id: "ka-tpl-idan-var",
    category: "template-intro",
    native: "მე ვარ [ქვეყანა]-იდან",
    transliteration: "me var [k'veq'ana]-idan",
    english: "I'm from [country]",
    description:
      "-იდან (-idan) is the postposition 'from.' K'veq'ana = country.",
    unverified: true,
  },
  {
    id: "ka-tpl-vtskhovrob",
    category: "template-intro",
    native: "ვცხოვრობ [ქალაქი]-ში",
    transliteration: "vtskhovrob [k'alaki]-shi",
    english: "I live in [city]",
    description:
      "Vtskhovrob = 'I live.' -ში (-shi) = 'in.' K'alaki = city.",
    unverified: true,
  },
  {
    id: "ka-tpl-vmushaob",
    category: "template-intro",
    native: "ვმუშაობ [ადგილი]-ში",
    transliteration: "vmushaob [adgili]-shi",
    english: "I work at [place]",
    description:
      "Vmushaob = 'I work.' Same -shi postposition as 'in.' Adgili = place.",
    unverified: true,
  },

  // ══════════════════════════════════════════════════════════════
  // MEETING UP
  // ══════════════════════════════════════════════════════════════
  {
    id: "ka-tpl-sad-khar",
    category: "template-meetup",
    native: "სად ხარ?",
    transliteration: "sad khar?",
    english: "Where are you?",
    description:
      "Sad = where. Khar = 'you are' (singular/informal).",
    unverified: true,
  },
  {
    id: "ka-tpl-shi-var",
    category: "template-meetup",
    native: "[ადგილი]-ში ვარ",
    transliteration: "[adgili]-shi var",
    english: "I'm at/in [place]",
    description:
      "-ში (-shi) = in/at. Var = 'I am.' Works for enclosed places: სახლში (sakhlshi) = at home.",
    unverified: true,
  },
  {
    id: "ka-tpl-tan-var",
    category: "template-meetup",
    native: "[X]-თან ვარ",
    transliteration: "[X]-tan var",
    english: "I'm near/at [X]",
    description:
      "-თან (-tan) = near/beside. Used for open places and next to people: მარიამ-თან (Mariam-tan) = with/near Mariam.",
    unverified: true,
  },
  {
    id: "ka-tpl-tsutshi-moval",
    category: "template-meetup",
    native: "[X] წუთში მოვალ",
    transliteration: "[X] ts'utshi moval",
    english: "I'll come in [X] minutes",
    description:
      "Ts'uti = minute; ts'utshi = 'in minutes' (with -shi postposition). Moval = 'I will come' (future).",
    unverified: true,
  },
  {
    id: "ka-tpl-sad-aris-x",
    category: "template-meetup",
    native: "სად არის [X]?",
    transliteration: "sad aris [X]?",
    english: "Where is [X]?",
    description:
      "Sad aris = 'where is.' The all-purpose location question.",
    unverified: true,
  },
  {
    id: "ka-tpl-shevkhvdet",
    category: "template-meetup",
    native: "[ადგილი]-ში შევხვდეთ",
    transliteration: "[adgili]-shi shevkhvdet",
    english: "Let's meet at [place]",
    description:
      "Shevkhvdet = 'let's meet' (first-person plural subjunctive/hortative).",
    unverified: true,
  },
  {
    id: "ka-tpl-rom-saatze",
    category: "template-meetup",
    native: "რომელ საათზე შევხვდეთ?",
    transliteration: "romel saatze shevkhvdet?",
    english: "What time shall we meet?",
    description:
      "Romel = which. Saati = hour; saatze = 'at (the) hour' (with -ze postposition = on/at).",
    unverified: true,
  },
];
