import type { Category, Flashcard } from "../types";

export const spanishTemplateCategories: Category[] = [
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

export const spanishTemplateCards: Flashcard[] = [
  // ══════════════════════════════════════════════════════════════
  // DINING
  // ══════════════════════════════════════════════════════════════
  {
    id: "es-tpl-comer-con",
    category: "template-dining",
    native: "Voy a comer con [nombre]",
    english: "I'm going to eat (lunch) with [name]",
    description:
      "Comer in Spain usually means the midday meal (lunch), not just 'eat' in general. For dinner, swap comer for cenar.",
  },
  {
    id: "es-tpl-cenar-con",
    category: "template-dining",
    native: "Voy a cenar con [nombre]",
    english: "I'm going to have dinner with [name]",
    description:
      "Cenar is the evening meal — typically late in Spain, from 21:00 onward.",
  },
  {
    id: "es-tpl-quiero-comer",
    category: "template-dining",
    native: "Quiero comer [comida]",
    english: "I want to eat [food]",
    description:
      "The most direct way to say what you want. Slightly blunter than me gustaría — fine with family and friends, softer to say me gustaría with strangers.",
  },
  {
    id: "es-tpl-me-gustaria",
    category: "template-dining",
    native: "Me gustaría [plato], por favor",
    english: "I'd like [dish], please",
    description:
      "The polite ordering phrase for restaurants. Conditional gustaría softens quiero.",
  },
  {
    id: "es-tpl-tiene",
    category: "template-dining",
    native: "¿Tiene [ingrediente]?",
    english: "Do you have [ingredient]?",
    description:
      "For asking a waiter or shopkeeper. Uses formal usted (tiene). Casual version: ¿tienes …?",
  },
  {
    id: "es-tpl-alergico",
    category: "template-dining",
    native: "Soy alérgico/a a [ingrediente]",
    english: "I'm allergic to [ingredient]",
    description:
      "Match the ending to yourself — alérgico if male, alérgica if female. Essential for nuts (frutos secos), gluten (gluten), shellfish (marisco).",
  },
  {
    id: "es-tpl-no-como",
    category: "template-dining",
    native: "No como [comida]",
    english: "I don't eat [food]",
    description:
      "For dietary preferences and restrictions. Common completions: carne (meat), cerdo (pork), pescado (fish).",
  },
  {
    id: "es-tpl-un-por-favor",
    category: "template-dining",
    native: "Un/una [bebida], por favor",
    english: "A [drink], please",
    description:
      "Match un/una to the drink's gender. Un café, un vino, un agua (masculine even though agua is feminine — 'un' avoids two 'a' sounds). Una cerveza, una caña.",
  },
  {
    id: "es-tpl-la-cuenta",
    category: "template-dining",
    native: "La cuenta, por favor",
    english: "The check, please",
    description:
      "In Spain, the waiter never brings the bill until you ask. You can also raise a hand and mouth this across the room.",
  },

  // ══════════════════════════════════════════════════════════════
  // PERSONAL NEEDS
  // ══════════════════════════════════════════════════════════════
  {
    id: "es-tpl-donde-bano",
    category: "template-needs",
    native: "¿Dónde está el baño?",
    english: "Where's the bathroom?",
    description:
      "Universal Spanish. In Spain you'll also hear el aseo or los servicios in restaurants and public places.",
  },
  {
    id: "es-tpl-necesito-bano",
    category: "template-needs",
    native: "Necesito ir al baño",
    english: "I need to go to the bathroom",
    description:
      "Slightly more direct than asking where it is. Polite and clear.",
  },
  {
    id: "es-tpl-tengo-hambre",
    category: "template-needs",
    native: "Tengo hambre",
    english: "I'm hungry",
    description:
      "Literally 'I have hunger.' Spanish uses tener (to have) for physical states — hambre (hunger), sed (thirst), sueño (sleepiness), frío (cold), calor (heat).",
  },
  {
    id: "es-tpl-tengo-sed",
    category: "template-needs",
    native: "Tengo sed",
    english: "I'm thirsty",
    description:
      "Same tener + noun pattern as hambre. Follow with ¿puedo tener agua? — can I have water?",
  },
  {
    id: "es-tpl-cansado",
    category: "template-needs",
    native: "Estoy cansado/a",
    english: "I'm tired",
    description:
      "Uses estar (temporary state), not ser. Match ending to gender: cansado / cansada.",
  },
  {
    id: "es-tpl-quiero-dormir",
    category: "template-needs",
    native: "Quiero dormir",
    english: "I want to sleep",
    description:
      "Direct and unambiguous. Handy at the end of a long night with the extended family.",
  },
  {
    id: "es-tpl-no-me-siento-bien",
    category: "template-needs",
    native: "No me siento bien",
    english: "I don't feel well",
    description:
      "The go-to phrase when you're feeling sick. If you need to be more specific: me duele [parte del cuerpo] — my [body part] hurts.",
  },
  {
    id: "es-tpl-necesito",
    category: "template-needs",
    native: "Necesito [cosa]",
    english: "I need [thing]",
    description:
      "For anything you need: necesito agua, necesito ayuda (help), necesito descansar (to rest).",
  },
  {
    id: "es-tpl-tengo-frio",
    category: "template-needs",
    native: "Tengo frío / calor",
    english: "I'm cold / hot",
    description:
      "Again tener + noun. Never say estoy frío/a — that means you're emotionally cold or literally cold to the touch (dead).",
  },

  // ══════════════════════════════════════════════════════════════
  // INTRODUCTIONS
  // ══════════════════════════════════════════════════════════════
  {
    id: "es-tpl-me-llamo",
    category: "template-intro",
    native: "Me llamo [nombre]",
    english: "My name is [name]",
    description:
      "Literally 'I call myself [name].' The most standard way to introduce yourself.",
  },
  {
    id: "es-tpl-soy-nombre",
    category: "template-intro",
    native: "Soy [nombre]",
    english: "I'm [name]",
    description:
      "Shorter, more casual than me llamo. Fine in relaxed settings.",
  },
  {
    id: "es-tpl-este-es",
    category: "template-intro",
    native: "Este/esta es [nombre]",
    english: "This is [name]",
    description:
      "Este for a man, esta for a woman. For introducing someone standing next to you.",
  },
  {
    id: "es-tpl-es-mi",
    category: "template-intro",
    native: "Es mi [relación]",
    english: "He/she is my [relation]",
    description:
      "Common completions: pareja (partner), novio/novia (boyfriend/girlfriend), amigo/a (friend), hermano/a (sibling), madre/padre (parent).",
  },
  {
    id: "es-tpl-soy-de",
    category: "template-intro",
    native: "Soy de [lugar]",
    english: "I'm from [place]",
    description:
      "Soy de Filipinas — I'm from the Philippines. For nationalities (adjective form): soy filipina.",
  },
  {
    id: "es-tpl-vivo-en",
    category: "template-intro",
    native: "Vivo en [lugar]",
    english: "I live in [place]",
    description:
      "Present tense of vivir. Vivo en Madrid, vivo en un piso pequeño.",
  },
  {
    id: "es-tpl-trabajo-en",
    category: "template-intro",
    native: "Trabajo en [lugar/campo]",
    english: "I work at/in [place or field]",
    description:
      "Trabajo en Google (a company), trabajo en tecnología (a field), trabajo en un hospital (a place).",
  },
  {
    id: "es-tpl-mucho-gusto",
    category: "template-intro",
    native: "Mucho gusto, [nombre]",
    english: "Nice to meet you, [name]",
    description:
      "Short and warm. In Spain also encantado/a (male/female) de conocerte works, but mucho gusto is universally understood.",
  },

  // ══════════════════════════════════════════════════════════════
  // MEETING UP
  // ══════════════════════════════════════════════════════════════
  {
    id: "es-tpl-estoy-en",
    category: "template-meetup",
    native: "Estoy en [lugar]",
    english: "I'm at [place]",
    description:
      "Estar for location, always. Estoy en casa (at home), estoy en el metro, estoy en la puerta.",
  },
  {
    id: "es-tpl-cerca-de",
    category: "template-meetup",
    native: "Estoy cerca de [lugar]",
    english: "I'm near [place]",
    description:
      "Cerca de means 'near.' Opposite: lejos de (far from).",
  },
  {
    id: "es-tpl-llego-en",
    category: "template-meetup",
    native: "Llego en [número] minutos",
    english: "I'll arrive in [number] minutes",
    description:
      "Present tense used for near-future events. Llego en cinco / diez / veinte minutos.",
  },
  {
    id: "es-tpl-donde-estas",
    category: "template-meetup",
    native: "¿Dónde estás?",
    english: "Where are you?",
    description:
      "Casual (tú form). Formal: ¿dónde está usted?",
  },
  {
    id: "es-tpl-donde-esta-lugar",
    category: "template-meetup",
    native: "¿Dónde está [lugar]?",
    english: "Where is [place]?",
    description:
      "For asking about the location of things: ¿dónde está el metro? ¿dónde está la parada del autobús?",
  },
  {
    id: "es-tpl-nos-vemos",
    category: "template-meetup",
    native: "Nos vemos en [lugar]",
    english: "See you at [place]",
    description:
      "Literally 'we'll see each other at.' Nos vemos en la plaza, nos vemos en el bar.",
  },
  {
    id: "es-tpl-te-espero",
    category: "template-meetup",
    native: "Te espero en [lugar]",
    english: "I'll wait for you at [place]",
    description:
      "Te espero — I wait for you. Present tense standing in for future.",
  },
  {
    id: "es-tpl-a-que-hora",
    category: "template-meetup",
    native: "¿A qué hora quedamos?",
    english: "What time shall we meet?",
    description:
      "Quedar in Spain means 'to meet up' (colloquial), not just 'to remain.' Quedamos a las nueve — we'll meet at nine.",
  },
];
