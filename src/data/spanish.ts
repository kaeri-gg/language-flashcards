import type { Category, Flashcard } from "../types";

export const spanishCategories: Category[] = [
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
    id: "meeting-people",
    name: "Meeting People",
    emoji: "🤝",
    description: "Introductions and small talk",
  },
  {
    id: "food",
    name: "Food & Dining",
    emoji: "🥘",
    description: "Eating, drinking, and asking for more",
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

export const spanishCards: Flashcard[] = [
  // ══════════════════════════════════════════════════════════════
  // GREETINGS & BASICS
  // ══════════════════════════════════════════════════════════════
  {
    id: "hola",
    category: "greetings",
    native: "Hola",
    english: "Hello",
    description:
      "The all-purpose greeting — works with anyone, any time of day. The 'h' is silent (say 'OH-la'), a rule that catches every English speaker at first.",
  },
  {
    id: "buenos-dias",
    category: "greetings",
    native: "Buenos días",
    english: "Good morning",
    description:
      "Used until roughly midday. Note the plural — literally 'good days'. Spanish uses the plural form idiomatically for these greetings.",
    breakdown: [
      { native: "buenos", meaning: "good (masculine plural)" },
      { native: "días", meaning: "days (from el día, 'day' — masculine)" },
    ],
  },
  {
    id: "buenas-tardes",
    category: "greetings",
    native: "Buenas tardes",
    english: "Good afternoon",
    description:
      "Used from midday until sunset. Feminine plural because la tarde ('afternoon') is feminine — Spanish adjectives always agree with the noun.",
    breakdown: [
      { native: "buenas", meaning: "good (feminine plural)" },
      { native: "tardes", meaning: "afternoons (from la tarde, feminine)" },
    ],
  },
  {
    id: "buenas-noches",
    category: "greetings",
    native: "Buenas noches",
    english: "Good evening / Good night",
    description:
      "Doubles as both a hello (after dark) and a goodnight when parting for bed. Same feminine-plural pattern as buenas tardes.",
  },
  {
    id: "adios",
    category: "greetings",
    native: "Adiós",
    english: "Goodbye",
    description:
      "The classic goodbye. Literally 'to God' — a shortened blessing from 'a Dios te encomiendo' ('I commend you to God'). Casual alternatives: chao, hasta luego.",
  },
  {
    id: "hasta-luego",
    category: "greetings",
    native: "Hasta luego",
    english: "See you later",
    description:
      "The friendly everyday goodbye — softer than adiós. Also common: hasta pronto ('see you soon'), hasta mañana ('see you tomorrow').",
    breakdown: [
      { native: "hasta", meaning: "until (preposition)" },
      { native: "luego", meaning: "later, then" },
    ],
  },
  {
    id: "si",
    category: "greetings",
    native: "Sí",
    english: "Yes",
    description:
      "The accent matters — sí (with accent) = 'yes'; si (no accent) = 'if'. In speech they sound identical but in writing they're strictly distinguished.",
  },
  {
    id: "no",
    category: "greetings",
    native: "No",
    english: "No",
    description:
      "Same word as English 'no' — but also the negator placed before verbs: no sé ('I don't know'), no quiero ('I don't want'). Simple and versatile.",
  },
  {
    id: "vale",
    category: "greetings",
    native: "Vale",
    english: "OK / alright",
    description:
      "Spain's ubiquitous 'ok'. In Latin America you'll hear bueno, dale, or listo instead. Comes from the verb valer ('to be worth' — 'it's valid').",
  },

  // ══════════════════════════════════════════════════════════════
  // POLITENESS
  // ══════════════════════════════════════════════════════════════
  {
    id: "gracias",
    category: "politeness",
    native: "Gracias",
    english: "Thank you",
    description:
      "The everyday thank-you. Intensify with muchas ('many'): muchas gracias = 'thank you very much'. Note the plural — literally 'graces'.",
  },
  {
    id: "muchas-gracias",
    category: "politeness",
    native: "Muchas gracias",
    english: "Thank you very much",
    description:
      "Warmer than plain gracias. Muchísimas gracias is even stronger — the -ísimo suffix is Spanish's built-in intensifier ('extremely').",
    breakdown: [
      { native: "muchas", meaning: "many (feminine plural — agrees with gracias)" },
      { native: "gracias", meaning: "thanks" },
    ],
  },
  {
    id: "de-nada",
    category: "politeness",
    native: "De nada",
    english: "You're welcome",
    description:
      "Literally 'of nothing' — the standard reply to gracias. Alternatives: no hay de qué ('there's nothing to thank for'), por nada.",
    breakdown: [
      { native: "de", meaning: "of, from (preposition)" },
      { native: "nada", meaning: "nothing" },
    ],
  },
  {
    id: "por-favor",
    category: "politeness",
    native: "Por favor",
    english: "Please",
    description:
      "The everyday 'please' — tack it onto any request. Literally 'for/through a favor'. Placement is flexible: at the start, end, or middle of a sentence.",
    breakdown: [
      { native: "por", meaning: "for, through, by" },
      { native: "favor", meaning: "favor (noun)" },
    ],
  },
  {
    id: "perdon",
    category: "politeness",
    native: "Perdón",
    english: "Sorry / Excuse me",
    description:
      "Used both to apologize and to get someone's attention (like 'excuse me' passing through a crowd). From the verb perdonar ('to forgive').",
  },
  {
    id: "disculpa",
    category: "politeness",
    native: "Disculpa / Disculpe",
    english: "Excuse me (casual / formal)",
    description:
      "Disculpa is informal, disculpe is formal — used to politely interrupt or begin a request. The -e ending marks the formal (usted) command form.",
    breakdown: [
      { native: "disculpa", meaning: "excuse me (informal — tú)" },
      { native: "disculpe", meaning: "excuse me (formal — usted)" },
    ],
  },
  {
    id: "lo-siento",
    category: "politeness",
    native: "Lo siento",
    english: "I'm sorry",
    description:
      "The heartfelt apology — for sympathy or genuine regret. Literally 'I feel it'. For a minor bump, use perdón; for real sorrow, lo siento.",
    breakdown: [
      { native: "lo", meaning: "it (direct object pronoun)" },
      { native: "siento", meaning: "I feel (from sentir)" },
    ],
  },
  {
    id: "con-permiso",
    category: "politeness",
    native: "Con permiso",
    english: "Excuse me (passing through)",
    description:
      "Said when squeezing past someone, entering a room, or leaving the table. Literally 'with permission'. More polite than perdón for physical space.",
  },
  {
    id: "senor-senora",
    category: "politeness",
    native: "Señor / Señora",
    english: "Sir / Ma'am",
    description:
      "Polite address for a man / married or older woman. Señorita is used for younger unmarried women — though it's falling out of use in favor of señora as a default.",
    breakdown: [
      { native: "señor", meaning: "sir, mister" },
      { native: "señora", meaning: "ma'am, missus" },
      { native: "señorita", meaning: "miss (young/unmarried woman)" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // MEETING PEOPLE
  // ══════════════════════════════════════════════════════════════
  {
    id: "mucho-gusto",
    category: "meeting-people",
    native: "Mucho gusto",
    english: "Nice to meet you",
    description:
      "Literally 'much pleasure' — the standard first-meeting phrase. Reply with igualmente ('likewise') or el gusto es mío ('the pleasure is mine').",
    breakdown: [
      { native: "mucho", meaning: "much, a lot" },
      { native: "gusto", meaning: "pleasure, taste" },
    ],
  },
  {
    id: "encantado",
    category: "meeting-people",
    native: "Encantado / Encantada",
    english: "Pleased to meet you",
    description:
      "Literally 'enchanted'. Men say encantado, women say encantada — this agreement with the speaker's gender is a defining feature of Spanish.",
    breakdown: [
      { native: "encantado", meaning: "delighted (masculine)" },
      { native: "encantada", meaning: "delighted (feminine)" },
    ],
  },
  {
    id: "como-estas",
    category: "meeting-people",
    native: "¿Cómo estás?",
    english: "How are you? (casual)",
    description:
      "Informal — use with friends, family, kids. Formal version is ¿Cómo está? (usted form). Note the inverted ¿ at the start — Spanish opens questions with it.",
    breakdown: [
      { native: "cómo", meaning: "how (question word — with accent)" },
      { native: "estás", meaning: "you are (from estar — informal tú form)" },
    ],
  },
  {
    id: "como-esta-usted",
    category: "meeting-people",
    native: "¿Cómo está usted?",
    english: "How are you? (formal)",
    description:
      "The polite form — use with elders, strangers, or in professional settings. Usted takes third-person verb endings, hence está (not estás).",
    breakdown: [
      { native: "cómo", meaning: "how" },
      { native: "está", meaning: "you are (formal usted form)" },
      { native: "usted", meaning: "you (formal singular)" },
    ],
  },
  {
    id: "bien-gracias",
    category: "meeting-people",
    native: "Bien, gracias",
    english: "Fine, thanks",
    description:
      "The reflex reply. Add muy for emphasis: muy bien ('very well'). Also common: más o menos ('so-so'), no me quejo ('can't complain').",
  },
  {
    id: "me-llamo",
    category: "meeting-people",
    native: "Me llamo...",
    english: "My name is...",
    description:
      "Literally 'I call myself'. The me is reflexive — you call YOURSELF something. Fill in your name after: Me llamo Kathleen. Alt: Mi nombre es... ('my name is').",
    breakdown: [
      { native: "me", meaning: "myself (reflexive pronoun)" },
      { native: "llamo", meaning: "I call (from llamar, 'to call')" },
    ],
  },
  {
    id: "como-te-llamas",
    category: "meeting-people",
    native: "¿Cómo te llamas?",
    english: "What's your name?",
    description:
      "Literally 'how do you call yourself?' The te is reflexive for tú. Formal version: ¿Cómo se llama usted?",
    breakdown: [
      { native: "cómo", meaning: "how" },
      { native: "te", meaning: "yourself (reflexive — tú)" },
      { native: "llamas", meaning: "you call (from llamar)" },
    ],
  },
  {
    id: "soy-de",
    category: "meeting-people",
    native: "Soy de Filipinas",
    english: "I'm from the Philippines",
    description:
      "The pattern: soy de + [country]. Uses ser (permanent identity), not estar. Country names in Spanish are often plural: Filipinas, Estados Unidos.",
    breakdown: [
      { native: "soy", meaning: "I am (from ser — for identity/origin)" },
      { native: "de", meaning: "from, of" },
      { native: "Filipinas", meaning: "the Philippines (plural, feminine)" },
    ],
  },
  {
    id: "hablas-ingles",
    category: "meeting-people",
    native: "¿Hablas inglés?",
    english: "Do you speak English?",
    description:
      "Casual (tú). Formal: ¿Habla inglés? Spanish drops subject pronouns — the verb ending already tells you who's doing the action.",
    breakdown: [
      { native: "hablas", meaning: "you speak (tú form of hablar)" },
      { native: "habla", meaning: "you speak (formal usted form)" },
      { native: "inglés", meaning: "English (language)" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // FOOD & DINING
  // ══════════════════════════════════════════════════════════════
  {
    id: "vamos-a-comer",
    category: "food",
    native: "¡Vamos a comer!",
    english: "Let's eat!",
    description:
      "The 'vamos a + [infinitive]' pattern is Spanish's easy way to say 'let's [do something]'. Vamos a bailar ('let's dance'), vamos a ver ('let's see').",
    breakdown: [
      { native: "vamos", meaning: "we go (from ir, 'to go')" },
      { native: "a", meaning: "to (preposition)" },
      { native: "comer", meaning: "to eat (infinitive)" },
    ],
  },
  {
    id: "esta-delicioso",
    category: "food",
    native: "Está delicioso",
    english: "It's delicious",
    description:
      "Essential compliment for the cook. Uses estar (temporary state — this particular dish, right now), not ser. Also common: está riquísimo, está buenísimo.",
    breakdown: [
      { native: "está", meaning: "it is (from estar — for states)" },
      { native: "delicioso", meaning: "delicious (masculine — agrees with the dish)" },
    ],
  },
  {
    id: "salud",
    category: "food",
    native: "¡Salud!",
    english: "Cheers!",
    description:
      "The universal toast — literally 'health!' Also what you say when someone sneezes, like English 'bless you'. Raise glass, make eye contact, drink.",
  },
  {
    id: "tengo-hambre",
    category: "food",
    native: "Tengo hambre",
    english: "I'm hungry",
    description:
      "Spanish uses tener ('to have') for physical states, not ser or estar — literally 'I have hunger'. Same pattern: tengo sed (thirst), tengo sueño (sleepiness), tengo frío (cold).",
    breakdown: [
      { native: "tengo", meaning: "I have (from tener)" },
      { native: "hambre", meaning: "hunger (feminine noun)" },
    ],
  },
  {
    id: "tengo-sed",
    category: "food",
    native: "Tengo sed",
    english: "I'm thirsty",
    description:
      "Same tener pattern as tengo hambre. In Spanish, thirst, hunger, cold, and fear are things you HAVE, not things you ARE.",
    breakdown: [
      { native: "tengo", meaning: "I have" },
      { native: "sed", meaning: "thirst (feminine noun)" },
    ],
  },
  {
    id: "quiero",
    category: "food",
    native: "Quiero...",
    english: "I want...",
    description:
      "The workhorse for expressing wants. Quiero agua ('I want water'), quiero dormir ('I want to sleep'). Softer alternative: quisiera ('I would like').",
    breakdown: [
      { native: "quiero", meaning: "I want (from querer)" },
      { native: "quisiera", meaning: "I would like (conditional — more polite)" },
    ],
  },
  {
    id: "estoy-lleno",
    category: "food",
    native: "Estoy lleno / llena",
    english: "I'm full",
    description:
      "The polite decline. Uses estar (temporary state). Men say lleno, women say llena — again the gender agreement rule.",
    breakdown: [
      { native: "estoy", meaning: "I am (estar)" },
      { native: "lleno", meaning: "full (masculine)" },
      { native: "llena", meaning: "full (feminine)" },
    ],
  },
  {
    id: "un-poco",
    category: "food",
    native: "Un poco",
    english: "A little",
    description:
      "Essential for portion control — or for describing how much you know: hablo un poco de español ('I speak a little Spanish'). Un poquito is the diminutive: 'a tiny bit'.",
  },
  {
    id: "agua",
    category: "food",
    native: "Agua",
    english: "Water",
    description:
      "Odd fact: agua is feminine but takes el (el agua, not la agua) — because starting with a stressed 'a' would clash with la. The adjective still agrees as feminine: el agua fría.",
  },
  {
    id: "vino",
    category: "food",
    native: "Vino",
    english: "Wine",
    description:
      "Un vino tinto (red wine), un vino blanco (white wine). Spain and Latin America both have deep wine cultures — Rioja, Malbec, Ribera del Duero, Carmenère.",
  },
  {
    id: "pan",
    category: "food",
    native: "Pan",
    english: "Bread",
    description:
      "A meal staple. Pásame el pan, por favor = 'pass me the bread, please'. Variations everywhere: pan de molde (sandwich bread), pan dulce (sweet bread), pan de muerto.",
  },
  {
    id: "queso",
    category: "food",
    native: "Queso",
    english: "Cheese",
    description:
      "Every Spanish-speaking country has its cheeses — manchego (Spain), cotija and Oaxaca (Mexico), queso fresco across Latin America. Also Spanish for 'cheese' as in 'say cheese' when photographing.",
  },
  {
    id: "la-cuenta",
    category: "food",
    native: "La cuenta, por favor",
    english: "The check, please",
    description:
      "Essential at any restaurant. Waiters won't bring the bill until you ask — lingering after a meal is expected, not rude. Also: ¿Me trae la cuenta?",
    breakdown: [
      { native: "la cuenta", meaning: "the bill, check (feminine noun)" },
      { native: "por favor", meaning: "please" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // FAMILY MEMBERS
  // ══════════════════════════════════════════════════════════════
  {
    id: "mama-papa",
    category: "family",
    native: "Mamá / Papá",
    english: "Mom / Dad",
    description:
      "The affectionate everyday terms. Formal: madre / padre. The accent on the final á is important — mama (no accent) can mean 'suckles' in some contexts!",
    breakdown: [
      { native: "mamá", meaning: "mom (with accent — the noun)" },
      { native: "papá", meaning: "dad (with accent)" },
      { native: "madre", meaning: "mother (formal)" },
      { native: "padre", meaning: "father (formal)" },
    ],
  },
  {
    id: "abuela",
    category: "family",
    native: "Abuela",
    english: "Grandmother",
    description:
      "Affectionate diminutives: abuelita, abu, yaya. Spanish grandmothers are often central family figures — a matriarch's word carries weight.",
  },
  {
    id: "abuelo",
    category: "family",
    native: "Abuelo",
    english: "Grandfather",
    description:
      "Diminutives: abuelito, abu, yayo. Grandparents together: los abuelos — Spanish defaults to the masculine plural when a group is mixed-gender.",
  },
  {
    id: "hermana",
    category: "family",
    native: "Hermana",
    english: "Sister",
    description:
      "Mi hermana = 'my sister'. Older/younger: hermana mayor / hermana menor. Also used for close female friends — 'she's like a sister to me'.",
  },
  {
    id: "hermano",
    category: "family",
    native: "Hermano",
    english: "Brother",
    description:
      "Same pattern as hermana. Los hermanos can mean 'the brothers' OR 'the siblings' (mixed group) — context tells you which.",
  },
  {
    id: "tia",
    category: "family",
    native: "Tía",
    english: "Aunt",
    description:
      "Also used casually for older women who aren't family — like calling someone 'auntie'. In Spain, tío/tía is slang for 'dude/girl' among friends.",
  },
  {
    id: "tio",
    category: "family",
    native: "Tío",
    english: "Uncle",
    description:
      "Same as tía but masculine. In Spain: ¡qué tío! = 'what a guy!' — the family word became teenager slang, much like English 'dude'.",
  },
  {
    id: "familia",
    category: "family",
    native: "Familia",
    english: "Family",
    description:
      "Family is central across Spanish-speaking cultures. Mi familia (my family), la familia (the family). The word is feminine — la familia.",
  },
  {
    id: "hijo-hija",
    category: "family",
    native: "Hijo / Hija",
    english: "Son / Daughter",
    description:
      "Los hijos = 'the sons' OR 'the children' (mixed). Also used as a term of endearment for younger people: mi hijo can just mean 'sweetie'. Diminutive: hijito/hijita.",
    breakdown: [
      { native: "hijo", meaning: "son" },
      { native: "hija", meaning: "daughter" },
      { native: "hijos", meaning: "children / sons (mixed group)" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // NUMBERS 1–10
  // ══════════════════════════════════════════════════════════════
  {
    id: "uno",
    category: "numbers",
    native: "Uno",
    english: "One",
    description:
      "Careful — uno shortens to un before a masculine noun (un libro, 'one/a book') and becomes una before feminine (una silla, 'one/a chair').",
  },
  {
    id: "dos",
    category: "numbers",
    native: "Dos",
    english: "Two",
    description:
      "One of the shortest number words. Ordinal: segundo/segunda ('second'). Also used in expressions: en un dos por tres ('in no time').",
  },
  {
    id: "tres",
    category: "numbers",
    native: "Tres",
    english: "Three",
    description:
      "Ordinal: tercero/tercera. Note: tercero shortens to tercer before a masculine noun (el tercer día, 'the third day'). Same rule as uno → un.",
  },
  {
    id: "cuatro",
    category: "numbers",
    native: "Cuatro",
    english: "Four",
    description:
      "The 'cu-' spelling represents the /kw/ sound — Spanish avoids 'qu' before 'a' or 'o'. Ordinal: cuarto/cuarta.",
  },
  {
    id: "cinco",
    category: "numbers",
    native: "Cinco",
    english: "Five",
    description:
      "Ordinal: quinto/quinta. Note the switch from cinco to quint- — Spanish borrowed the ordinal from Latin, so it looks different from the cardinal.",
  },
  {
    id: "seis",
    category: "numbers",
    native: "Seis",
    english: "Six",
    description:
      "The 'ei' is a diphthong — one syllable, pronounced like English 'say' + 's'. Ordinal: sexto/sexta.",
  },
  {
    id: "siete",
    category: "numbers",
    native: "Siete",
    english: "Seven",
    description:
      "Ordinal: séptimo/séptima. The lucky-or-unlucky number varies by culture — in Spanish tradition, 7 is often the lucky one.",
  },
  {
    id: "ocho",
    category: "numbers",
    native: "Ocho",
    english: "Eight",
    description:
      "Ordinal: octavo/octava. Fun fact: a un octavo is 'one eighth', but an eighth-note (music) is a corchea — different word entirely.",
  },
  {
    id: "nueve",
    category: "numbers",
    native: "Nueve",
    english: "Nine",
    description:
      "Ordinal: noveno/novena. The novena is also a Catholic prayer said over nine days — deeply embedded in Latin American culture.",
  },
  {
    id: "diez",
    category: "numbers",
    native: "Diez",
    english: "Ten",
    description:
      "Ordinal: décimo/décima. After ten, teens compound with a 'y' (and): dieciséis (16 = diez + y + seis, contracted). Once you know 1–10, teens follow.",
  },

  // ══════════════════════════════════════════════════════════════
  // USEFUL QUESTIONS
  // ══════════════════════════════════════════════════════════════
  {
    id: "donde-esta",
    category: "questions",
    native: "¿Dónde está...?",
    english: "Where is...?",
    description:
      "Uses estar (location is a state, not identity). ¿Dónde está el baño? ('where is the bathroom?'). The accent on dónde marks it as a question word.",
    breakdown: [
      { native: "dónde", meaning: "where (question word — with accent)" },
      { native: "está", meaning: "is located (from estar — for location)" },
    ],
  },
  {
    id: "que-es-esto",
    category: "questions",
    native: "¿Qué es esto?",
    english: "What is this?",
    description:
      "Uses ser (identity — asking what something IS by nature). Great for pointing at unfamiliar foods and learning by asking. Esto is neuter — 'this thing'.",
    breakdown: [
      { native: "qué", meaning: "what (with accent as question word)" },
      { native: "es", meaning: "is (from ser — for identity)" },
      { native: "esto", meaning: "this (neuter demonstrative)" },
    ],
  },
  {
    id: "cuanto-cuesta",
    category: "questions",
    native: "¿Cuánto cuesta?",
    english: "How much does it cost?",
    description:
      "Essential at markets and shops. For multiple items: ¿Cuánto cuestan? (plural). Reply comes in the local currency: pesos, euros, soles, quetzales.",
    breakdown: [
      { native: "cuánto", meaning: "how much (masculine — with accent)" },
      { native: "cuesta", meaning: "it costs (from costar)" },
    ],
  },
  {
    id: "no-entiendo",
    category: "questions",
    native: "No entiendo",
    english: "I don't understand",
    description:
      "Present tense — 'I'm not understanding right now'. Very useful. To soften: no entiendo bien ('I don't understand well'). Alternative: no comprendo.",
    breakdown: [
      { native: "no", meaning: "not (negation)" },
      { native: "entiendo", meaning: "I understand (from entender)" },
    ],
  },
  {
    id: "no-hablo-espanol",
    category: "questions",
    native: "No hablo español",
    english: "I don't speak Spanish",
    description:
      "Softer alternative: hablo un poco de español ('I speak a little Spanish'). Native speakers appreciate the effort — asking politely for slower speech usually works.",
    breakdown: [
      { native: "no", meaning: "not" },
      { native: "hablo", meaning: "I speak (from hablar)" },
      { native: "español", meaning: "Spanish (the language)" },
    ],
  },
  {
    id: "hablo-poco-espanol",
    category: "questions",
    native: "Hablo un poco de español",
    english: "I speak a little Spanish",
    description:
      "The confident-beginner phrase. Sets expectations gently and invites the other person to slow down or simplify.",
    breakdown: [
      { native: "hablo", meaning: "I speak" },
      { native: "un poco de", meaning: "a little of" },
      { native: "español", meaning: "Spanish" },
    ],
  },
  {
    id: "puede-repetir",
    category: "questions",
    native: "¿Puede repetir, por favor?",
    english: "Can you repeat, please? (formal)",
    description:
      "Formal (usted). Casual: ¿puedes repetir? Uses poder ('to be able') + infinitive — a very useful construction. Also: ¿me lo puede repetir? ('can you repeat it for me?').",
    breakdown: [
      { native: "puede", meaning: "you can (formal — from poder)" },
      { native: "puedes", meaning: "you can (informal)" },
      { native: "repetir", meaning: "to repeat (infinitive)" },
    ],
  },
  {
    id: "mas-despacio",
    category: "questions",
    native: "Más despacio, por favor",
    english: "Slower, please",
    description:
      "The single most useful phrase for a beginner. Spanish speakers often speak fast — asking politely for slower delivery is completely normal.",
    breakdown: [
      { native: "más", meaning: "more (with accent)" },
      { native: "despacio", meaning: "slowly (adverb)" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // COMPLIMENTS & SWEET WORDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "hermoso-hermosa",
    category: "compliments",
    native: "Hermoso / Hermosa",
    english: "Beautiful",
    description:
      "For a view, a dish, a home, a person. Agrees with the noun's gender: un lugar hermoso (a beautiful place, masc), una casa hermosa (a beautiful house, fem). Also common: bonito/bonita, precioso/preciosa.",
    breakdown: [
      { native: "hermoso", meaning: "beautiful (masculine)" },
      { native: "hermosa", meaning: "beautiful (feminine)" },
    ],
  },
  {
    id: "me-gusta",
    category: "compliments",
    native: "Me gusta",
    english: "I like it",
    description:
      "Literally 'it pleases me' — the thing you like is the subject, and you're the recipient. For plurals: me gustan (los gatos me gustan). Different from te quiero — this is 'appeals to me', not 'love'.",
    breakdown: [
      { native: "me", meaning: "to me (indirect object)" },
      { native: "gusta", meaning: "pleases (from gustar — 3rd person singular)" },
      { native: "gustan", meaning: "please (plural — for multiple things)" },
    ],
  },
  {
    id: "te-quiero",
    category: "compliments",
    native: "Te quiero",
    english: "I love you (affectionate)",
    description:
      "The everyday 'I love you' — for family, close friends, partners. Softer than te amo, which is reserved for deep romantic love. From querer ('to want/love').",
    breakdown: [
      { native: "te", meaning: "you (informal object pronoun)" },
      { native: "quiero", meaning: "I love/want (from querer)" },
    ],
  },
  {
    id: "te-amo",
    category: "compliments",
    native: "Te amo",
    english: "I love you (deeply)",
    description:
      "The romantic, weighty 'I love you' — for a partner, spouse, or your children in a serious moment. In some countries te amo is casual too; in Spain it's more solemn.",
    breakdown: [
      { native: "te", meaning: "you (informal object)" },
      { native: "amo", meaning: "I love (from amar — the deeper verb)" },
    ],
  },
  {
    id: "mi-amor",
    category: "compliments",
    native: "Mi amor",
    english: "My love",
    description:
      "The most common term of endearment. Universal across Spanish-speaking countries. Others: mi vida ('my life'), mi cielo ('my sky/heaven'), mi cariño ('my darling').",
    breakdown: [
      { native: "mi", meaning: "my" },
      { native: "amor", meaning: "love (masculine noun)" },
    ],
  },
  {
    id: "cariño",
    category: "compliments",
    native: "Cariño",
    english: "Sweetheart / darling",
    description:
      "A warm term of affection — for partners, kids, or close friends. Literally 'affection'. Used as a form of address: ¿cómo estás, cariño? ('how are you, sweetheart?').",
  },

  // ══════════════════════════════════════════════════════════════
  // HANDY EVERYDAY WORDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "hoy",
    category: "everyday",
    native: "Hoy",
    english: "Today",
    description:
      "Short and useful. Hoy es lunes ('today is Monday'). Not to be confused with hay ('there is/are') — they sound almost identical but mean very different things.",
  },
  {
    id: "manana",
    category: "everyday",
    native: "Mañana",
    english: "Tomorrow / Morning",
    description:
      "Double meaning: mañana can mean either 'tomorrow' or 'morning' depending on context. La mañana = 'the morning'; mañana (no article) = 'tomorrow'. Yesterday is ayer.",
  },
  {
    id: "ahora",
    category: "everyday",
    native: "Ahora",
    english: "Now",
    description:
      "Also flexible in precision. Ahora mismo = 'right now' (emphatic). Ahorita is a common diminutive, but in Mexico it can mean 'in a bit' more than 'now' — a famous cultural quirk.",
  },
  {
    id: "aqui",
    category: "everyday",
    native: "Aquí",
    english: "Here",
    description:
      "The everyday 'here'. Some regions prefer acá (used with motion verbs: ven acá, 'come here'). Its pair is allí / allá ('there').",
  },
  {
    id: "alli",
    category: "everyday",
    native: "Allí",
    english: "There",
    description:
      "Partner of aquí. Spanish has a three-way distinction: aquí (here, near me), ahí (there, near you), allí (over there, far from us both).",
  },
  {
    id: "caliente",
    category: "everyday",
    native: "Caliente",
    english: "Hot",
    description:
      "For temperature — food, drinks, weather. Careful: describing a person as caliente has a strong sexual connotation. For 'I'm hot' (temperature), say tengo calor.",
  },
  {
    id: "frio",
    category: "everyday",
    native: "Frío",
    english: "Cold",
    description:
      "Same trap as caliente — for 'I'm cold' you say tengo frío ('I have cold'), NOT estoy frío (which means emotionally cold/unfeeling).",
    breakdown: [
      { native: "frío", meaning: "cold (adjective/noun)" },
      { native: "tengo frío", meaning: "I am cold (literally 'I have cold')" },
    ],
  },
  {
    id: "grande",
    category: "everyday",
    native: "Grande",
    english: "Big",
    description:
      "Doesn't change form between masculine and feminine (una casa grande, un perro grande). BUT it shortens to gran before a singular noun and means 'great': un gran hombre ('a great man').",
  },
  {
    id: "pequeno",
    category: "everyday",
    native: "Pequeño / Pequeña",
    english: "Small",
    description:
      "The opposite of grande. Diminutive form pequeñito/pequeñita means 'tiny'. Also used affectionately for children — mi pequeño = 'my little one'.",
  },
  {
    id: "feliz",
    category: "everyday",
    native: "Estoy feliz",
    english: "I am happy",
    description:
      "Feliz doesn't change form between masculine and feminine (same as grande). Uses estar because it's a state — you can also say estoy contento/contenta.",
    breakdown: [
      { native: "estoy", meaning: "I am (from estar — for states)" },
      { native: "feliz", meaning: "happy (unisex — no gender ending)" },
    ],
  },
  {
    id: "cansado",
    category: "everyday",
    native: "Estoy cansado / cansada",
    english: "I'm tired",
    description:
      "Uses estar (a temporary state, not who you are). Cansado for men, cansada for women. Estoy muy cansado = 'I'm very tired'.",
    breakdown: [
      { native: "cansado", meaning: "tired (masculine)" },
      { native: "cansada", meaning: "tired (feminine)" },
    ],
  },
  {
    id: "voy-a-dormir",
    category: "everyday",
    native: "Voy a dormir",
    english: "I'm going to sleep",
    description:
      "The 'ir a + [infinitive]' construction — Spanish's easy near-future tense. Voy a comer ('I'm going to eat'), voy a salir ('I'm going to leave').",
    breakdown: [
      { native: "voy", meaning: "I go (from ir — 'to go')" },
      { native: "a", meaning: "to" },
      { native: "dormir", meaning: "to sleep (infinitive)" },
    ],
  },
];
