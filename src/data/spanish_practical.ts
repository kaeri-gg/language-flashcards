import type { Category, Flashcard } from "../types";

export const spanishPracticalCategories: Category[] = [
  {
    id: "numbers-more",
    name: "Numbers 11–100",
    emoji: "💯",
    description: "Bigger numbers for money, time, and age",
  },
  {
    id: "time-calendar",
    name: "Time, Days & Months",
    emoji: "⏰",
    description: "Telling time, days of the week, months, expressions",
  },
  {
    id: "shopping",
    name: "Shopping & Money",
    emoji: "🛍️",
    description: "Prices, paying, asking about items",
  },
  {
    id: "grocery",
    name: "Grocery & Produce",
    emoji: "🥬",
    description: "Fruits, vegetables, meats, and staples at the mercado",
  },
  {
    id: "transport",
    name: "Directions & Transport",
    emoji: "🚌",
    description: "Getting around: buses, taxis, metro, and asking the way",
  },
  {
    id: "accommodation",
    name: "Hotel & Housing",
    emoji: "🏨",
    description: "Reservations, rooms, and staying somewhere",
  },
  {
    id: "restaurant",
    name: "At the Restaurant",
    emoji: "🍽️",
    description: "Ordering, allergies, the check, and menu vocabulary",
  },
  {
    id: "health",
    name: "Health & Emergencies",
    emoji: "🚑",
    description: "Pharmacy, doctor, pain, and calling for help",
  },
  {
    id: "weather",
    name: "Weather & Seasons",
    emoji: "🌦️",
    description: "Talking about the sky, seasons, and temperature",
  },
  {
    id: "colors",
    name: "Colors",
    emoji: "🎨",
    description: "The rainbow, with gender agreement",
  },
  {
    id: "clothing",
    name: "Clothing",
    emoji: "👕",
    description: "What you wear, from shirts to shoes",
  },
  {
    id: "body",
    name: "Body Parts",
    emoji: "🦴",
    description: "From head to toe — for describing pain and appearance",
  },
  {
    id: "city",
    name: "Places in the City",
    emoji: "🏙️",
    description: "Bank, post office, museum, and other places you'll go",
  },
  {
    id: "actions",
    name: "Common Verbs",
    emoji: "🏃",
    description: "The everyday action verbs you'll use most",
  },
];

export const spanishPracticalCards: Flashcard[] = [
  // ══════════════════════════════════════════════════════════════
  // NUMBERS 11–100
  // ══════════════════════════════════════════════════════════════
  {
    id: "once",
    category: "numbers-more",
    native: "Once",
    english: "Eleven",
    description:
      "Pronounced 'ON-say', not like English 'once'. Teens 11–15 have their own words; 16–19 use compound forms (diez y seis → dieciséis).",
  },
  {
    id: "doce",
    category: "numbers-more",
    native: "Doce",
    english: "Twelve",
    description:
      "Doce years is 'a decade and a bit'. Twelve is also 'a dozen' — una docena de huevos (a dozen eggs).",
  },
  {
    id: "trece",
    category: "numbers-more",
    native: "Trece",
    english: "Thirteen",
    description:
      "Not unlucky in Spain — but 'martes 13' (Tuesday the 13th) is the equivalent of Friday the 13th. Superstition, different day.",
  },
  {
    id: "catorce",
    category: "numbers-more",
    native: "Catorce",
    english: "Fourteen",
    description:
      "Last of the teens with a unique word. From 16 on, they're written as compound words (dieciséis, diecisiete…).",
  },
  {
    id: "quince",
    category: "numbers-more",
    native: "Quince",
    english: "Fifteen",
    description:
      "Culturally huge in Latin America: la quinceañera is a girl's 15th birthday celebration. In Spain the equivalent milestone is often 18.",
  },
  {
    id: "dieciseis",
    category: "numbers-more",
    native: "Dieciséis",
    english: "Sixteen",
    description:
      "Compound: diez y seis, written as one word. The accent shifts to keep the stress on the final syllable. Same pattern through 19.",
    breakdown: [
      { native: "diez", meaning: "ten" },
      { native: "y", meaning: "and" },
      { native: "seis", meaning: "six" },
    ],
  },
  {
    id: "veinte",
    category: "numbers-more",
    native: "Veinte",
    english: "Twenty",
    description:
      "21–29 also compound as one word: veintiuno, veintidós, veintitrés… — different from 30+ which use 'y' (treinta y uno, 'thirty and one').",
  },
  {
    id: "veintiuno",
    category: "numbers-more",
    native: "Veintiuno",
    english: "Twenty-one",
    description:
      "Shortens to veintiún before a masculine noun: veintiún años (21 years). Feminine: veintiuna sillas (21 chairs).",
  },
  {
    id: "treinta",
    category: "numbers-more",
    native: "Treinta",
    english: "Thirty",
    description:
      "From here up, compounds use 'y': treinta y uno (31), treinta y dos (32). Filipino borrowed this: treynta = 30 in Tagalog.",
  },
  {
    id: "cuarenta",
    category: "numbers-more",
    native: "Cuarenta",
    english: "Forty",
    description:
      "'La cuarentena' — quarantine — literally 'a set of forty (days)'. The word entered English via Italian quarantina, same Latin root.",
  },
  {
    id: "cincuenta",
    category: "numbers-more",
    native: "Cincuenta",
    english: "Fifty",
    description:
      "Filipino kwenta (bill, count) and singkwenta (50) come from here. Recognizing these will unlock a lot of Tagalog vocabulary.",
  },
  {
    id: "sesenta",
    category: "numbers-more",
    native: "Sesenta",
    english: "Sixty",
    description:
      "Careful: sesenta (60) ≠ setenta (70). One letter changes the number by ten — a common slip that can cost you money at the market.",
  },
  {
    id: "setenta",
    category: "numbers-more",
    native: "Setenta",
    english: "Seventy",
    description:
      "The 't' distinguishes it from sesenta (60). Listen carefully to price tags — mispronouncing these is the classic tourist mistake.",
  },
  {
    id: "ochenta",
    category: "numbers-more",
    native: "Ochenta",
    english: "Eighty",
    description:
      "Note the pattern: 8 = ocho, 80 = ochenta. All the tens (except 20 = veinte) end in -enta.",
  },
  {
    id: "noventa",
    category: "numbers-more",
    native: "Noventa",
    english: "Ninety",
    description:
      "Last of the -enta tens. 99 = noventa y nueve — the point after which you switch to 'cien' (100).",
  },
  {
    id: "cien",
    category: "numbers-more",
    native: "Cien",
    english: "One hundred",
    description:
      "Exactly 100 is 'cien'. Anything more (101+) uses 'ciento': ciento uno, ciento cincuenta. In Filipino: sento (like porsyento, percent).",
    breakdown: [
      { native: "cien", meaning: "exactly 100 (before nouns and by itself)" },
      { native: "ciento", meaning: "100 + something (101, 150…)" },
      { native: "cien euros", meaning: "100 euros" },
      { native: "ciento veinte", meaning: "120" },
    ],
  },
  {
    id: "mil",
    category: "numbers-more",
    native: "Mil",
    english: "One thousand",
    description:
      "Doesn't take 'un' — just 'mil euros', not 'un mil'. Plural for counting thousands: dos mil (2,000), tres mil (3,000). Millón DOES take un: un millón.",
  },
  {
    id: "cero",
    category: "numbers-more",
    native: "Cero",
    english: "Zero",
    description:
      "For phone numbers, room numbers, and scores. Filipino 'sero' comes directly from this. Sports score: dos a cero (two to zero).",
  },

  // ══════════════════════════════════════════════════════════════
  // TIME, DAYS & MONTHS
  // ══════════════════════════════════════════════════════════════
  {
    id: "que-hora-es",
    category: "time-calendar",
    native: "¿Qué hora es?",
    english: "What time is it?",
    description:
      "Answer with 'es la…' for 1 o'clock or 'son las…' for everything else. Es la una. Son las tres. Son las diez y media (10:30).",
    breakdown: [
      { native: "es la una", meaning: "it is one o'clock" },
      { native: "son las dos", meaning: "it is two o'clock" },
      { native: "y media", meaning: "and a half (:30)" },
      { native: "y cuarto", meaning: "and a quarter (:15)" },
      { native: "menos cuarto", meaning: "quarter to (:45)" },
    ],
  },
  {
    id: "de-la-manana",
    category: "time-calendar",
    native: "De la mañana / tarde / noche",
    english: "In the morning / afternoon / at night",
    description:
      "Spanish uses 'de la…' to specify AM/PM: las ocho de la mañana (8 AM), las ocho de la noche (8 PM). Spain also uses 24-hour time formally.",
  },
  {
    id: "lunes",
    category: "time-calendar",
    native: "Lunes",
    english: "Monday",
    description:
      "From luna (moon) — Monday = moon-day, same origin as English. Days of the week are NOT capitalized in Spanish. Same in singular and plural: el lunes / los lunes.",
  },
  {
    id: "martes",
    category: "time-calendar",
    native: "Martes",
    english: "Tuesday",
    description:
      "From Mars. Martes 13 (Tuesday the 13th) is the Spanish 'bad luck' day — famous saying: 'en martes ni te cases ni te embarques' (don't marry or set sail).",
  },
  {
    id: "miercoles",
    category: "time-calendar",
    native: "Miércoles",
    english: "Wednesday",
    description:
      "From Mercury. The longest weekday to say — you'll trip on it at first. Miércoles de ceniza = Ash Wednesday.",
  },
  {
    id: "jueves",
    category: "time-calendar",
    native: "Jueves",
    english: "Thursday",
    description:
      "From Jupiter (Jove). Jueves Santo = Holy Thursday, a national holiday in Spain during Semana Santa (Holy Week).",
  },
  {
    id: "viernes",
    category: "time-calendar",
    native: "Viernes",
    english: "Friday",
    description:
      "From Venus. Viernes Santo = Good Friday, also a national holiday. 'El finde' is Spanish slang for 'the weekend' (fin de semana).",
  },
  {
    id: "sabado",
    category: "time-calendar",
    native: "Sábado",
    english: "Saturday",
    description:
      "From Sabbath. Along with domingo, this is when Spain socializes — long lunches, family visits, late dinners. Nightlife starts around midnight.",
  },
  {
    id: "domingo",
    category: "time-calendar",
    native: "Domingo",
    english: "Sunday",
    description:
      "From 'día del Señor' (day of the Lord). Many shops are closed on Sundays in Spain, especially outside tourist areas. Family day.",
  },
  {
    id: "enero",
    category: "time-calendar",
    native: "Enero",
    english: "January",
    description:
      "Months aren't capitalized in Spanish. Enero (from Janus). Dates: el 5 de enero. Los Reyes Magos (Three Kings' Day, Jan 6) is huge in Spain — bigger gift day than Christmas.",
  },
  {
    id: "febrero",
    category: "time-calendar",
    native: "Febrero",
    english: "February",
    description:
      "The 'shortest month' — el mes más corto. Carnaval falls in February most years — big celebrations in Cádiz, Tenerife, and across Latin America.",
  },
  {
    id: "marzo",
    category: "time-calendar",
    native: "Marzo",
    english: "March",
    description:
      "From Mars. Las Fallas festival in Valencia (March 15-19) is one of Spain's wildest events — giant sculptures burned at midnight.",
  },
  {
    id: "abril",
    category: "time-calendar",
    native: "Abril",
    english: "April",
    description:
      "Semana Santa (Holy Week) usually falls in late March or April. 'En abril, aguas mil' — an April proverb meaning 'April brings lots of rain'.",
  },
  {
    id: "mayo",
    category: "time-calendar",
    native: "Mayo",
    english: "May",
    description:
      "Not to be confused with 'mayo' (mayonnaise). Feria de Sevilla, one of Spain's biggest festivals, happens in late April/early May.",
  },
  {
    id: "junio",
    category: "time-calendar",
    native: "Junio",
    english: "June",
    description:
      "San Juan (June 23-24) — beach bonfires across Spain to mark the summer solstice. A huge night in coastal towns.",
  },
  {
    id: "julio",
    category: "time-calendar",
    native: "Julio",
    english: "July",
    description:
      "San Fermín in Pamplona (running of the bulls) starts July 6. Also the start of Spain's 'vacaciones' — most of the country empties into the coast.",
  },
  {
    id: "agosto",
    category: "time-calendar",
    native: "Agosto",
    english: "August",
    description:
      "Peak vacation month. Madrid famously empties out — many small shops close for 'vacaciones de agosto'. La Tomatina (tomato fight) is late August.",
  },
  {
    id: "septiembre",
    category: "time-calendar",
    native: "Septiembre",
    english: "September",
    description:
      "'La vuelta al cole' (back to school). Also La Mercè in Barcelona (late September), one of Catalonia's biggest festivals.",
  },
  {
    id: "octubre",
    category: "time-calendar",
    native: "Octubre",
    english: "October",
    description:
      "October 12 is 'Día de la Hispanidad' — Spain's national day, marking Columbus's arrival in the Americas.",
  },
  {
    id: "noviembre",
    category: "time-calendar",
    native: "Noviembre",
    english: "November",
    description:
      "'Todos los Santos' (All Saints, Nov 1) is a national holiday in Spain — traditionally families visit cemeteries. Not Halloween-flavored like Mexico's Día de Muertos.",
  },
  {
    id: "diciembre",
    category: "time-calendar",
    native: "Diciembre",
    english: "December",
    description:
      "Nochebuena (Christmas Eve, Dec 24) is the big family dinner, bigger than the 25th. Nochevieja (Dec 31) — grapes at midnight, one per bell chime.",
  },
  {
    id: "ayer",
    category: "time-calendar",
    native: "Ayer",
    english: "Yesterday",
    description:
      "Anteayer = the day before yesterday. Ayer por la mañana = yesterday morning. Ayer por la noche = last night.",
  },
  {
    id: "manana-adv",
    category: "time-calendar",
    native: "Mañana",
    english: "Tomorrow",
    description:
      "Also means 'morning' — la mañana. Pasado mañana = the day after tomorrow. 'Mañana' without an article means tomorrow.",
  },
  {
    id: "la-semana",
    category: "time-calendar",
    native: "La semana",
    english: "The week",
    description:
      "El fin de semana = the weekend (often shortened to el finde). La semana pasada = last week. La semana que viene = next week.",
  },
  {
    id: "el-mes",
    category: "time-calendar",
    native: "El mes",
    english: "The month",
    description:
      "El mes pasado = last month. El mes que viene / el próximo mes = next month. Also: dentro de un mes (in a month).",
  },
  {
    id: "el-ano",
    category: "time-calendar",
    native: "El año",
    english: "The year",
    description:
      "Careful with pronunciation — el año (year) vs el ano (anus). The tilde on the ñ is not optional. ¡Feliz Año Nuevo! = Happy New Year.",
  },
  {
    id: "temprano",
    category: "time-calendar",
    native: "Temprano",
    english: "Early",
    description:
      "Es muy temprano = it's very early. Note that Spanish 'early' for dinner is 9-10 PM — cultural gap for Filipinos used to eating at 6-7.",
  },
  {
    id: "tarde",
    category: "time-calendar",
    native: "Tarde",
    english: "Late",
    description:
      "Also 'afternoon' (la tarde). Es tarde = it's late. Llegar tarde = to arrive late. Más tarde = later. Buenas tardes = good afternoon.",
  },
  {
    id: "siempre",
    category: "time-calendar",
    native: "Siempre",
    english: "Always",
    description:
      "Casi siempre = almost always. Para siempre = forever. Siempre y cuando = as long as / provided that.",
  },
  {
    id: "nunca",
    category: "time-calendar",
    native: "Nunca",
    english: "Never",
    description:
      "Double negative is standard: no viene nunca (he never comes). Nunca jamás = never ever. Casi nunca = almost never.",
  },
  {
    id: "a-veces",
    category: "time-calendar",
    native: "A veces",
    english: "Sometimes",
    description:
      "Muchas veces = often. Pocas veces = seldom. Una vez = once. Dos veces = twice. Otra vez = again.",
  },

  // ══════════════════════════════════════════════════════════════
  // SHOPPING & MONEY
  // ══════════════════════════════════════════════════════════════
  {
    id: "cuanto-es",
    category: "shopping",
    native: "¿Cuánto es?",
    english: "How much is it? (total)",
    description:
      "Asks for the TOTAL — good when the cashier is bagging your items. ¿Cuánto cuesta? asks about a specific item's price. Use 'es' for a total, 'cuesta' for individual items.",
  },
  {
    id: "el-precio",
    category: "shopping",
    native: "El precio",
    english: "The price",
    description:
      "Los precios están altos = prices are high. En oferta = on sale. Precio fijo = fixed price (no bargaining). Note the 'ci' is pronounced 'thee' in Spain.",
  },
  {
    id: "barato",
    category: "shopping",
    native: "Barato / Barata",
    english: "Cheap",
    description:
      "Agrees with the noun's gender. Un vestido barato (masc), una camisa barata (fem). '¡Qué barato!' = how cheap! Also implies 'inexpensive' with no negative connotation.",
  },
  {
    id: "caro",
    category: "shopping",
    native: "Caro / Cara",
    english: "Expensive",
    description:
      "¡Qué caro! = how expensive! Es demasiado caro = it's too expensive. Also means 'dear' emotionally: mi caro amigo (my dear friend, formal/literary).",
  },
  {
    id: "efectivo",
    category: "shopping",
    native: "En efectivo",
    english: "In cash",
    description:
      "¿Paga en efectivo o con tarjeta? = paying cash or card? Small shops in Spain sometimes have a minimum for card. Also called 'metálico' or informally 'pasta' (dough).",
  },
  {
    id: "la-tarjeta",
    category: "shopping",
    native: "La tarjeta",
    english: "The card",
    description:
      "Full form: tarjeta de crédito (credit) or tarjeta de débito (debit). ¿Aceptan tarjeta? = do you take card? Contactless is common in Spain — tap and go.",
  },
  {
    id: "la-vuelta",
    category: "shopping",
    native: "La vuelta",
    english: "The change",
    description:
      "Money returned: quédese con la vuelta = keep the change. In Latin America they say 'el vuelto' or 'el cambio'. Vuelta also means 'return' or 'turn'.",
  },
  {
    id: "el-recibo",
    category: "shopping",
    native: "El recibo / El ticket",
    english: "The receipt",
    description:
      "In Spain 'el ticket' is common for supermarket receipts (Spanglish). El recibo is more formal. ¿Me da el recibo? = can I have the receipt?",
  },
  {
    id: "una-bolsa",
    category: "shopping",
    native: "Una bolsa",
    english: "A bag",
    description:
      "In Spain since 2018, plastic bags cost extra by law (5-10 cents). ¿Quiere bolsa? = do you want a bag? Bring your own = 'bolsa reutilizable'.",
  },
  {
    id: "lo-tiene-en",
    category: "shopping",
    native: "¿Lo tiene en otro color?",
    english: "Do you have it in another color?",
    description:
      "Feminine version: ¿La tiene en otro color? Match 'lo/la' to the noun's gender. Also: ¿otra talla? (another size), ¿otro modelo? (another model).",
    breakdown: [
      { native: "lo", meaning: "it (masculine object)" },
      { native: "la", meaning: "it (feminine object)" },
      { native: "tiene", meaning: "you have (formal)" },
      { native: "otro/otra", meaning: "another (matches gender)" },
    ],
  },
  {
    id: "solo-estoy-mirando",
    category: "shopping",
    native: "Solo estoy mirando",
    english: "I'm just looking",
    description:
      "The polite deflection when a shop assistant approaches. Also: gracias, solo miro. Assistants in Spain are usually less pushy than in tourist areas of Latin America.",
  },
  {
    id: "me-lo-llevo",
    category: "shopping",
    native: "Me lo llevo",
    english: "I'll take it",
    description:
      "Feminine version: me la llevo. Literally 'I'm taking it (with me)'. The commitment phrase — signals you're ready to buy.",
  },
  {
    id: "descuento",
    category: "shopping",
    native: "El descuento",
    english: "The discount",
    description:
      "¿Hay descuento? = is there a discount? Rebajas (plural) = the sale season — Spain has two big sales per year: enero and julio.",
  },
  {
    id: "probador",
    category: "shopping",
    native: "El probador",
    english: "The fitting room",
    description:
      "¿Dónde está el probador? = where is the fitting room? From probar (to try). Cabina de prueba is a more formal alternative.",
  },
  {
    id: "devolver",
    category: "shopping",
    native: "Devolver",
    english: "To return (an item)",
    description:
      "Quiero devolver esto = I want to return this. Devolución = the return. In Spain you usually have 15-30 days to return with the receipt.",
  },

  // ══════════════════════════════════════════════════════════════
  // GROCERY & PRODUCE
  // ══════════════════════════════════════════════════════════════
  {
    id: "el-mercado",
    category: "grocery",
    native: "El mercado",
    english: "The market",
    description:
      "Traditional food market — most Spanish neighborhoods have one. El Mercado de San Miguel in Madrid is famous, but every barrio has its everyday market.",
  },
  {
    id: "el-supermercado",
    category: "grocery",
    native: "El supermercado",
    english: "The supermarket",
    description:
      "Common Spanish chains: Mercadona (the giant), Carrefour, Lidl, Dia. Mercadona is the go-to — beloved for house-brand Hacendado products.",
  },
  {
    id: "un-kilo",
    category: "grocery",
    native: "Un kilo",
    english: "A kilo",
    description:
      "Spain uses metric — everything is by kilogramos (kg) or gramos (g). Medio kilo = half a kilo. Un cuarto de kilo = 250g. Ciento de gramos = 100g.",
    breakdown: [
      { native: "kilo", meaning: "kilogram (1000g)" },
      { native: "medio kilo", meaning: "half a kilo (500g)" },
      { native: "un cuarto", meaning: "a quarter (of a kilo)" },
      { native: "gramo", meaning: "gram" },
    ],
  },
  {
    id: "un-litro",
    category: "grocery",
    native: "Un litro",
    english: "A liter",
    description:
      "For liquids. Medio litro = half a liter. Litro y medio = 1.5 liters. Wine, milk, oil — all measured in litros.",
  },
  {
    id: "una-docena",
    category: "grocery",
    native: "Una docena",
    english: "A dozen",
    description:
      "Una docena de huevos = a dozen eggs. Half a dozen = media docena. Filipino borrowed this: 'dosena' means dozen. Same Latin root.",
  },
  {
    id: "la-manzana",
    category: "grocery",
    native: "La manzana",
    english: "The apple",
    description:
      "Also means 'city block' in Latin America. Filipino 'mansanas' = apples, direct loan. Types: manzana roja (red), manzana verde (green).",
  },
  {
    id: "el-platano",
    category: "grocery",
    native: "El plátano",
    english: "The banana",
    description:
      "In Spain and Mexico 'plátano' means banana. In much of Latin America they say 'banana' or 'guineo'. Filipino 'saging' isn't a loan — Spanish 'plátano' comes from a different word.",
  },
  {
    id: "la-naranja",
    category: "grocery",
    native: "La naranja",
    english: "The orange",
    description:
      "Also the color. Valencia is famous for oranges — 'naranjas de Valencia' are the best-known variety. Zumo de naranja = orange juice (Spain uses zumo, not jugo).",
  },
  {
    id: "la-uva",
    category: "grocery",
    native: "La uva",
    english: "The grape",
    description:
      "Spanish New Year's tradition: eat 12 uvas at midnight, one per bell chime. Miss one and you lose your luck for that month. Vino is made from uvas.",
  },
  {
    id: "la-fresa",
    category: "grocery",
    native: "La fresa",
    english: "The strawberry",
    description:
      "Spain is Europe's biggest strawberry producer — Huelva region especially. 'Fresas con nata' (strawberries with cream) is a classic dessert.",
  },
  {
    id: "el-limon",
    category: "grocery",
    native: "El limón",
    english: "The lemon",
    description:
      "In Spain, limón usually means yellow lemon; lima = lime. In Mexico, limón often means the green lime. Regional word swap.",
  },
  {
    id: "el-tomate",
    category: "grocery",
    native: "El tomate",
    english: "The tomato",
    description:
      "Foundational to Spanish cuisine — pan con tomate is Catalan breakfast. La Tomatina festival (Buñol, August) is a giant tomato fight. Filipino 'kamatis' isn't from Spanish (that's from Nahuatl via Spanish and then Malay).",
  },
  {
    id: "la-cebolla",
    category: "grocery",
    native: "La cebolla",
    english: "The onion",
    description:
      "Filipino 'sibuyas' comes directly from cebollas (plural). Any Spanish tortilla (potato omelette) needs cebolla — though 'con o sin cebolla' is a famous national debate.",
  },
  {
    id: "el-ajo",
    category: "grocery",
    native: "El ajo",
    english: "Garlic",
    description:
      "Un diente de ajo = a clove of garlic (literally 'a tooth'). Ajos y aceite is the base of countless Spanish dishes. Filipino 'bawang', not from Spanish.",
  },
  {
    id: "la-patata",
    category: "grocery",
    native: "La patata",
    english: "The potato",
    description:
      "Spain says 'patata'; Latin America says 'papa'. Tortilla de patatas is Spain's most iconic dish. Also: patatas fritas = fries (also = chips in Spain, context-dependent).",
  },
  {
    id: "la-lechuga",
    category: "grocery",
    native: "La lechuga",
    english: "The lettuce",
    description:
      "Filipino 'litsugas' comes from here. Ensalada = salad. Iceberg-style is 'lechuga iceberg'; romaine is 'lechuga romana'.",
  },
  {
    id: "la-zanahoria",
    category: "grocery",
    native: "La zanahoria",
    english: "The carrot",
    description:
      "One of the trickiest words to pronounce for beginners — the 'z' is 'th' in Spain, 's' in Latin America. Filipino 'karot' actually comes from English, not Spanish.",
  },
  {
    id: "el-pimiento",
    category: "grocery",
    native: "El pimiento",
    english: "The pepper (bell)",
    description:
      "Bell pepper. Not to be confused with 'la pimienta' = the spice (black pepper). Pimientos del padrón (little green peppers, some spicy) are a classic tapa.",
  },
  {
    id: "el-pollo",
    category: "grocery",
    native: "El pollo",
    english: "Chicken",
    description:
      "Universal. Pollo asado = roast chicken (Spanish street food staple, sold at the rotisería). Un pollo entero = a whole chicken.",
  },
  {
    id: "la-carne",
    category: "grocery",
    native: "La carne",
    english: "Meat",
    description:
      "Generic 'meat'. Specifically beef: carne de res (Latin America) or carne de ternera (Spain, technically 'veal' but used generally).",
  },
  {
    id: "el-cerdo",
    category: "grocery",
    native: "El cerdo",
    english: "Pork / pig",
    description:
      "Also the animal. Central to Spanish diet — jamón, chorizo, panceta, morcilla all come from cerdo. Filipino 'baboy' isn't from Spanish.",
  },
  {
    id: "el-pescado",
    category: "grocery",
    native: "El pescado",
    english: "Fish (to eat)",
    description:
      "Pescado = fish on your plate (already caught). Pez = live fish in the water. Spain eats a lot of fish — merluza (hake), bacalao (cod), sardinas.",
  },
  {
    id: "el-jamon",
    category: "grocery",
    native: "El jamón",
    english: "Ham",
    description:
      "Sacred in Spain. Jamón ibérico (from Iberian pigs, acorn-fed) is the premium; jamón serrano is everyday. Filipino 'hamon' comes directly from here.",
  },
  {
    id: "el-arroz",
    category: "grocery",
    native: "El arroz",
    english: "Rice",
    description:
      "Paella is the most famous rice dish — from Valencia. Rice is called el arroz throughout — Filipino 'aros' is a direct loan but 'kanin' (cooked rice) is native Tagalog.",
  },
  {
    id: "el-aceite",
    category: "grocery",
    native: "El aceite",
    english: "Oil",
    description:
      "Aceite de oliva = olive oil, Spain's kitchen essential. Extra virgen = extra virgin. Filipino 'aseyte' comes from here. Also: aceite de girasol = sunflower oil.",
  },
  {
    id: "el-huevo",
    category: "grocery",
    native: "El huevo",
    english: "Egg",
    description:
      "Plural huevos also has vulgar slang meanings — same as 'balls' in English. But 'una docena de huevos' at the market is completely normal, no innuendo.",
  },
  {
    id: "la-leche",
    category: "grocery",
    native: "La leche",
    english: "Milk",
    description:
      "Also Spanish slang! '¡La leche!' can mean 'wow!' or '¡qué mala leche!' = what a bad mood. Context makes it clear. Filipino 'gatas' isn't from Spanish.",
  },
  {
    id: "el-pan-generic",
    category: "grocery",
    native: "El pan",
    english: "Bread",
    description:
      "Spain is a bread country — fresh baguettes daily from la panadería. 'Barra de pan' = a baguette. Pan integral = whole wheat. Filipino 'pandesal' = literally 'bread of salt'.",
  },
  {
    id: "el-azucar",
    category: "grocery",
    native: "El azúcar",
    english: "Sugar",
    description:
      "Filipino 'asukal' comes from here. Note: azúcar is technically masculine but 'el' or 'la' both used ('el azúcar' more standard). Un terrón = a sugar cube.",
  },
  {
    id: "la-sal",
    category: "grocery",
    native: "La sal",
    english: "Salt",
    description:
      "Filipino 'asin' isn't from Spanish (it's Malay-Polynesian). Common phrase: '¿Me pasas la sal?' = pass me the salt. Sal marina = sea salt.",
  },

  // ══════════════════════════════════════════════════════════════
  // DIRECTIONS & TRANSPORT
  // ══════════════════════════════════════════════════════════════
  {
    id: "izquierda",
    category: "transport",
    native: "A la izquierda",
    english: "To the left",
    description:
      "Gira a la izquierda = turn left. Está a la izquierda = it's on the left. Tricky word — no cognate to help you. Filipino uses 'kaliwa'.",
  },
  {
    id: "derecha",
    category: "transport",
    native: "A la derecha",
    english: "To the right",
    description:
      "Don't confuse with 'derecho' (straight ahead) — one letter changes meaning. Derecha = right (direction); derecho = law, or straight.",
  },
  {
    id: "todo-recto",
    category: "transport",
    native: "Todo recto",
    english: "Straight ahead",
    description:
      "Spain says 'todo recto' or 'siga recto'. Latin America often uses 'derecho' or 'de frente'. Sigue todo recto = keep going straight.",
  },
  {
    id: "la-esquina",
    category: "transport",
    native: "La esquina",
    english: "The corner",
    description:
      "En la esquina = at the corner. A la vuelta de la esquina = around the corner. Doblar la esquina = to turn the corner.",
  },
  {
    id: "el-semaforo",
    category: "transport",
    native: "El semáforo",
    english: "The traffic light",
    description:
      "En el semáforo, gira a la derecha = at the light, turn right. Colors: rojo (red), amarillo (yellow), verde (green).",
  },
  {
    id: "cerca-lejos",
    category: "transport",
    native: "Cerca / Lejos",
    english: "Near / Far",
    description:
      "¿Está cerca? = is it near? Está muy lejos = it's very far. Cerca de aquí = near here. A dos calles = two streets away.",
    breakdown: [
      { native: "cerca", meaning: "near" },
      { native: "lejos", meaning: "far" },
      { native: "cerca de", meaning: "near/close to (something)" },
      { native: "lejos de", meaning: "far from" },
    ],
  },
  {
    id: "el-autobus",
    category: "transport",
    native: "El autobús",
    english: "The bus",
    description:
      "Also called 'el bus' informally. In Latin America: colectivo, guagua (Caribbean), micro (Chile), camión (Mexico). Spain: autobús is standard.",
  },
  {
    id: "el-metro",
    category: "transport",
    native: "El metro",
    english: "The subway/metro",
    description:
      "Madrid and Barcelona have extensive metros. Bilbao, Valencia, and Sevilla too. Un billete sencillo = single ticket. Un abono = a pass (weekly/monthly).",
  },
  {
    id: "el-taxi",
    category: "transport",
    native: "El taxi",
    english: "The taxi",
    description:
      "Pedir un taxi = order a taxi. Spanish taxis are metered and reliable — a green light on top means available. Uber and Cabify operate in major cities too.",
  },
  {
    id: "el-tren",
    category: "transport",
    native: "El tren",
    english: "The train",
    description:
      "RENFE is Spain's national rail. AVE = high-speed. Cercanías = commuter trains. Regional = slower. Coger el tren = take the train (careful: 'coger' has vulgar meaning in Mexico/Argentina — use 'tomar' there).",
  },
  {
    id: "el-avion",
    category: "transport",
    native: "El avión",
    english: "The plane",
    description:
      "En avión = by plane. El aeropuerto = the airport. Madrid-Barajas and Barcelona-El Prat are Spain's biggest airports. Vuelo = flight.",
  },
  {
    id: "el-billete",
    category: "transport",
    native: "El billete",
    english: "The ticket",
    description:
      "Spain uses 'billete' for train, bus, plane. Latin America mostly says 'boleto' or 'pasaje'. Billete also means banknote (paper money). Billete de ida y vuelta = round-trip ticket.",
  },
  {
    id: "la-estacion",
    category: "transport",
    native: "La estación",
    english: "The station",
    description:
      "Estación de tren, estación de autobuses, estación de metro. Madrid's Atocha is famous. Also: la parada = the (bus/tram) stop.",
  },
  {
    id: "el-anden",
    category: "transport",
    native: "El andén",
    english: "The platform",
    description:
      "El tren sale del andén 5 = the train leaves from platform 5. Only for trains and metros — buses use 'la parada' or 'la dársena'.",
  },
  {
    id: "a-que-hora-sale",
    category: "transport",
    native: "¿A qué hora sale?",
    english: "What time does it leave?",
    description:
      "Universally useful. ¿A qué hora llega? = what time does it arrive? Sale = leaves (from salir). Llega = arrives.",
  },
  {
    id: "cuanto-tarda",
    category: "transport",
    native: "¿Cuánto tarda?",
    english: "How long does it take?",
    description:
      "Tarda una hora = it takes an hour. Different from '¿cuánto tiempo?' — 'tardar' specifically means 'to take (time)' or 'to be delayed'.",
  },
  {
    id: "donde-esta-la-parada",
    category: "transport",
    native: "¿Dónde está la parada?",
    english: "Where is the (bus) stop?",
    description:
      "La parada = the stop. Bus stops in Spain are marked with an 'H' sign (from bus-Halt). Parada del autobús is fully explicit.",
  },
  {
    id: "proxima-parada",
    category: "transport",
    native: "La próxima parada",
    english: "The next stop",
    description:
      "You'll hear this announced on buses and metros: 'próxima parada: Sol'. Also: la siguiente parada. To signal you want off: 'pido parada' (I'm requesting the stop).",
  },
  {
    id: "el-coche",
    category: "transport",
    native: "El coche",
    english: "The car",
    description:
      "Spain says 'coche'; Latin America says 'carro' or 'auto'. Filipino 'kotse' comes from 'coche'. Alquilar un coche = to rent a car.",
  },
  {
    id: "aparcar",
    category: "transport",
    native: "Aparcar",
    english: "To park",
    description:
      "Spain uses 'aparcar'; Latin America uses 'estacionar' or 'parquear'. Aparcamiento = parking lot. Prohibido aparcar = no parking.",
  },
  {
    id: "conducir",
    category: "transport",
    native: "Conducir",
    english: "To drive",
    description:
      "Spain: conducir. Latin America: manejar. Carnet de conducir = driver's license (Spain); licencia de conducir (LatAm). Yo conduzco = I drive (irregular).",
  },

  // ══════════════════════════════════════════════════════════════
  // HOTEL & HOUSING
  // ══════════════════════════════════════════════════════════════
  {
    id: "una-reserva",
    category: "accommodation",
    native: "Una reserva",
    english: "A reservation",
    description:
      "Tengo una reserva a nombre de… = I have a reservation under… Hacer una reserva = to make a reservation. Also used for restaurants.",
  },
  {
    id: "la-habitacion",
    category: "accommodation",
    native: "La habitación",
    english: "The room",
    description:
      "Hotel room. In a house, 'la habitación' also = the bedroom (or 'el dormitorio'). Filipino 'kwarto' = room, comes from 'cuarto' (another word for room).",
  },
  {
    id: "individual-doble",
    category: "accommodation",
    native: "Individual / Doble",
    english: "Single / Double (room)",
    description:
      "Habitación individual = single room. Habitación doble = double. Doble con dos camas = twin beds. Doble con cama de matrimonio = one big bed.",
  },
  {
    id: "la-llave",
    category: "accommodation",
    native: "La llave",
    english: "The key",
    description:
      "Filipino 'susi' isn't from Spanish. Most hotels use 'la tarjeta' (key card) now. La llave de la habitación = the room key.",
  },
  {
    id: "el-wifi",
    category: "accommodation",
    native: "El wifi",
    english: "The wifi",
    description:
      "Pronounced 'WEE-fee' in Spain (not 'WHY-fye'). ¿Cuál es la contraseña del wifi? = what's the wifi password?",
  },
  {
    id: "aire-acondicionado",
    category: "accommodation",
    native: "El aire acondicionado",
    english: "Air conditioning",
    description:
      "Often abbreviated 'A/C' or 'aire acondicionado' in written form. Essential in Spanish summers (40°C+). ¿La habitación tiene aire? = does the room have A/C?",
  },
  {
    id: "la-calefaccion",
    category: "accommodation",
    native: "La calefacción",
    english: "The heating",
    description:
      "Winter essential in most of Spain (Madrid gets very cold). ¿Cómo funciona la calefacción? = how does the heating work?",
  },
  {
    id: "la-toalla",
    category: "accommodation",
    native: "La toalla",
    english: "The towel",
    description:
      "Filipino 'tuwalya' comes from here. Toalla de baño = bath towel; toalla de mano = hand towel; toalla de playa = beach towel.",
  },
  {
    id: "el-jabon",
    category: "accommodation",
    native: "El jabón",
    english: "Soap",
    description:
      "Filipino 'sabon' comes directly from jabón (the 'j' becomes 's'). Champú = shampoo. Gel de baño = shower gel.",
  },
  {
    id: "la-ducha",
    category: "accommodation",
    native: "La ducha",
    english: "The shower",
    description:
      "Ducharse = to shower (reflexive). Voy a ducharme = I'm going to shower. Also: bañera = bathtub. Filipino uses 'shower' (English loan).",
  },
  {
    id: "check-in-check-out",
    category: "accommodation",
    native: "Check-in / Check-out",
    english: "Check-in / Check-out",
    description:
      "Used as-is (English loan). Also: la entrada / la salida in more Spanish-flavored contexts. ¿A qué hora es el check-in? = what time is check-in?",
  },
  {
    id: "el-ascensor",
    category: "accommodation",
    native: "El ascensor",
    english: "The elevator",
    description:
      "Spain: ascensor. Latin America: elevador. Older buildings in Spanish city centers often DON'T have one — worth asking before booking.",
  },
  {
    id: "la-planta",
    category: "accommodation",
    native: "La planta",
    english: "The floor (of a building)",
    description:
      "In Spain, 'planta baja' = ground floor, 'primera planta' = second floor (US style). So 'la habitación está en la tercera planta' = fourth floor in US terms. Confusing!",
  },
  {
    id: "el-alquiler",
    category: "accommodation",
    native: "El alquiler",
    english: "The rent",
    description:
      "Alquilar = to rent. Piso en alquiler = apartment for rent. In Latin America: renta / rentar. Necessary vocabulary for moving to Spain.",
  },
  {
    id: "el-piso",
    category: "accommodation",
    native: "El piso",
    english: "The apartment (Spain)",
    description:
      "Spain: piso = apartment. Latin America: departamento or apartamento. Piso compartido = shared flat. Also 'piso' = the floor (surface).",
  },

  // ══════════════════════════════════════════════════════════════
  // AT THE RESTAURANT
  // ══════════════════════════════════════════════════════════════
  {
    id: "la-carta",
    category: "restaurant",
    native: "La carta",
    english: "The menu",
    description:
      "In Spain: 'la carta' for the à la carte menu. 'El menú' usually means the daily fixed menu (menú del día). Careful — different from English.",
  },
  {
    id: "menu-del-dia",
    category: "restaurant",
    native: "El menú del día",
    english: "The daily set menu",
    description:
      "Spanish institution — lunch (13:00-16:00), 3 courses + drink + bread for €10-15. Choose from a small list. Best value in Spain. Weekdays only usually.",
  },
  {
    id: "el-camarero",
    category: "restaurant",
    native: "El camarero / La camarera",
    english: "The waiter / waitress",
    description:
      "Spain: camarero/a. Latin America: mesero/a. To call one over: '¡Perdón!' or wave — NEVER snap fingers or shout '¡oiga!' (rude).",
  },
  {
    id: "de-primero",
    category: "restaurant",
    native: "De primero / De segundo",
    english: "For the first course / second course",
    description:
      "Menú del día uses these: De primero, voy a tomar la ensalada. De segundo, el pollo. De postre = for dessert. Standard ordering pattern.",
  },
  {
    id: "el-plato",
    category: "restaurant",
    native: "El plato",
    english: "The dish / plate",
    description:
      "Both the physical plate and the dish. ¿Cuál es el plato del día? = what's today's special? Plato principal = main course.",
  },
  {
    id: "la-especialidad",
    category: "restaurant",
    native: "La especialidad",
    english: "The specialty",
    description:
      "¿Cuál es la especialidad de la casa? = what's the house specialty? A great way to get the best of what a restaurant does.",
  },
  {
    id: "el-postre",
    category: "restaurant",
    native: "El postre",
    english: "The dessert",
    description:
      "De postre, quiero flan = for dessert, I want flan. Classic Spanish desserts: flan, tarta de Santiago, crema catalana, arroz con leche.",
  },
  {
    id: "para-llevar",
    category: "restaurant",
    native: "Para llevar",
    english: "To take away",
    description:
      "Coffee/food to go: 'un café para llevar'. In Latin America: 'para llevar' works; also 'para llevar' or 'de pasada'. Opposite: 'para tomar aquí' = to have here.",
  },
  {
    id: "sin-cebolla",
    category: "restaurant",
    native: "Sin cebolla, por favor",
    english: "Without onion, please",
    description:
      "'Sin' + [ingredient] to exclude anything. Sin sal (no salt), sin gluten (gluten-free), sin lactosa (lactose-free), sin picante (not spicy).",
  },
  {
    id: "soy-alergico",
    category: "restaurant",
    native: "Soy alérgico/a a…",
    english: "I'm allergic to…",
    description:
      "Critical phrase. Match to your gender (alérgico/a). Soy alérgica a los frutos secos = I'm allergic to nuts. Spanish restaurants take allergies seriously.",
  },
  {
    id: "vegetariano",
    category: "restaurant",
    native: "Vegetariano / Vegano",
    english: "Vegetarian / Vegan",
    description:
      "Soy vegetariana = I'm vegetarian (feminine). Soy vegano = I'm vegan. Rising in Spain but menú del día can be meat-heavy — ask about options.",
  },
  {
    id: "agua-con-gas",
    category: "restaurant",
    native: "Agua con gas / sin gas",
    english: "Sparkling / still water",
    description:
      "Spain: 'agua con gas' = sparkling, 'agua sin gas' = still. Tap water is fine to drink; ask for 'agua del grifo' if you don't want to pay for bottled.",
  },
  {
    id: "la-cuenta-please",
    category: "restaurant",
    native: "La cuenta, por favor",
    english: "The check, please",
    description:
      "In Spain, the waiter WILL NOT bring the bill until you ask. You can sit for hours. Also: ¿me cobra? = can you charge me? (very common in Spain).",
  },
  {
    id: "la-propina",
    category: "restaurant",
    native: "La propina",
    english: "The tip",
    description:
      "Tipping culture is MUCH lighter in Spain than the US. Leaving €1-2 or rounding up is fine at a cafe; 5-10% at a nicer restaurant is generous. Not obligatory.",
  },
  {
    id: "tapas",
    category: "restaurant",
    native: "Las tapas",
    english: "Tapas (small plates)",
    description:
      "Small savory dishes, often free with drinks in some regions (Granada, León). 'Ir de tapas' = to go tapas hopping. Raciones = larger plates for sharing.",
  },

  // ══════════════════════════════════════════════════════════════
  // HEALTH & EMERGENCIES
  // ══════════════════════════════════════════════════════════════
  {
    id: "socorro",
    category: "health",
    native: "¡Socorro!",
    english: "Help! (emergency)",
    description:
      "For real emergencies — shouted. Also '¡Ayuda!' Everyday 'help me' = '¿me puede ayudar?'. Emergency number in Spain: 112 (all services).",
  },
  {
    id: "necesito-ayuda",
    category: "health",
    native: "Necesito ayuda",
    english: "I need help",
    description:
      "Less urgent than ¡socorro!. Necesito un médico = I need a doctor. Necesito una ambulancia = I need an ambulance.",
  },
  {
    id: "llame-a-la-policia",
    category: "health",
    native: "¡Llame a la policía!",
    english: "Call the police!",
    description:
      "Formal (usted). Casual: ¡llama a la policía! In Spain: Policía Nacional (national), Guardia Civil (rural/highways), Policía Local (municipal). All reachable via 112.",
  },
  {
    id: "me-duele",
    category: "health",
    native: "Me duele…",
    english: "My … hurts",
    description:
      "Reversed from English: literally 'it hurts me'. Me duele la cabeza = my head hurts. Me duelen los pies = my feet hurt (plural verb for plural body part).",
    breakdown: [
      { native: "me duele", meaning: "singular body part (la cabeza, el estómago)" },
      { native: "me duelen", meaning: "plural body parts (los pies, las piernas)" },
      { native: "te duele", meaning: "your (informal) … hurts" },
    ],
  },
  {
    id: "estoy-enfermo",
    category: "health",
    native: "Estoy enfermo/a",
    english: "I'm sick",
    description:
      "Uses estar (temporary state). Match to gender. Estoy mal = I'm unwell. Me encuentro mal = I'm not feeling well (softer, common in Spain).",
  },
  {
    id: "tengo-fiebre",
    category: "health",
    native: "Tengo fiebre",
    english: "I have a fever",
    description:
      "Uses tener like other body states. Tengo tos = I have a cough. Tengo náuseas = I feel nauseated. Fiebre alta = high fever.",
  },
  {
    id: "el-dolor",
    category: "health",
    native: "El dolor",
    english: "The pain",
    description:
      "Dolor de cabeza = headache. Dolor de estómago = stomachache. Dolor de garganta = sore throat. Dolor de muelas = toothache.",
  },
  {
    id: "la-farmacia",
    category: "health",
    native: "La farmacia",
    english: "The pharmacy",
    description:
      "Marked with a green cross. Spanish pharmacists can advise on minor issues without a prescription. Farmacia de guardia = 24-hour on-call pharmacy.",
  },
  {
    id: "el-medico",
    category: "health",
    native: "El médico / La médica",
    english: "The doctor",
    description:
      "Also 'el doctor / la doctora'. Ir al médico = to go to the doctor. In Spain: centro de salud = neighborhood clinic; hospital for emergencies.",
  },
  {
    id: "el-hospital",
    category: "health",
    native: "El hospital",
    english: "The hospital",
    description:
      "Urgencias = ER. In Spain, public healthcare (Seguridad Social) is free for residents with your tarjeta sanitaria. Bring your passport/DNI.",
  },
  {
    id: "la-receta",
    category: "health",
    native: "La receta",
    english: "The prescription (or recipe)",
    description:
      "Same word! Context tells you which. Necesito una receta = I need a prescription. También = a recipe (for cooking). Con receta / sin receta at the pharmacy.",
  },
  {
    id: "la-medicina",
    category: "health",
    native: "La medicina / El medicamento",
    english: "The medicine",
    description:
      "Medicina is common speech; medicamento is more technical/formal. Tomar medicina = to take medicine. Antibióticos = antibiotics.",
  },
  {
    id: "estoy-herido",
    category: "health",
    native: "Estoy herido/a",
    english: "I'm hurt / injured",
    description:
      "For physical injury. Match to gender. Está herido = he's injured. Also: 'me he hecho daño' = I've hurt myself (softer, everyday).",
  },
  {
    id: "una-ambulancia",
    category: "health",
    native: "Una ambulancia",
    english: "An ambulance",
    description:
      "¡Llame a una ambulancia! = call an ambulance! Number 112 in Spain (Europe-wide). Emergency services are FREE to call.",
  },
  {
    id: "seguro-medico",
    category: "health",
    native: "El seguro médico",
    english: "Health insurance",
    description:
      "Tengo seguro médico = I have health insurance. Public: Seguridad Social. Private: Sanitas, Adeslas, DKV are common providers. Necessary for residency paperwork.",
  },
  {
    id: "la-tarjeta-sanitaria",
    category: "health",
    native: "La tarjeta sanitaria",
    english: "The health card",
    description:
      "Your public healthcare ID in Spain. Get one after registering as a resident. Also: tarjeta sanitaria europea (EHIC) for EU travel — Filipinos will use Spanish version once resident.",
  },

  // ══════════════════════════════════════════════════════════════
  // WEATHER & SEASONS
  // ══════════════════════════════════════════════════════════════
  {
    id: "que-tiempo-hace",
    category: "weather",
    native: "¿Qué tiempo hace?",
    english: "What's the weather like?",
    description:
      "Literally 'what weather does it make?' — Spanish personifies weather. Answer with 'hace + [noun]': hace calor, hace frío. Not 'está caliente'.",
  },
  {
    id: "hace-sol",
    category: "weather",
    native: "Hace sol",
    english: "It's sunny",
    description:
      "Uses 'hacer' (to make). Also: hace un sol espléndido = beautiful sun. El sol = the sun. Filipino 'araw' isn't from Spanish.",
  },
  {
    id: "hace-frio",
    category: "weather",
    native: "Hace frío",
    english: "It's cold",
    description:
      "Hace mucho frío = it's very cold. For 'I'm cold' (personal), use 'tengo frío' — remember Spanish 'has' cold, not 'is' cold.",
  },
  {
    id: "hace-calor",
    category: "weather",
    native: "Hace calor",
    english: "It's hot",
    description:
      "Spain gets brutal summer heat (40°C+ inland). For 'I'm hot' say 'tengo calor'. Don't say 'estoy caliente' — that means 'I'm horny' 🚨.",
  },
  {
    id: "hace-viento",
    category: "weather",
    native: "Hace viento",
    english: "It's windy",
    description:
      "El viento = the wind. Northern Spain (Galicia, Basque country) is windy year-round. Also: ¡hace mucho viento! = it's really windy!",
  },
  {
    id: "llueve",
    category: "weather",
    native: "Llueve",
    english: "It's raining",
    description:
      "From the verb llover. La lluvia = the rain. Está lloviendo = it IS raining right now (progressive). 'Llueve a cántaros' = it's pouring (buckets).",
  },
  {
    id: "nieva",
    category: "weather",
    native: "Nieva",
    english: "It's snowing",
    description:
      "From nevar. La nieve = the snow. In Spain, mainly in the Pyrenees, Sierra Nevada, and inland north. Madrid gets occasional snow in winter.",
  },
  {
    id: "esta-nublado",
    category: "weather",
    native: "Está nublado",
    english: "It's cloudy",
    description:
      "Uses 'estar' — it's a state. La nube = cloud. Nublado = cloudy. Also: el cielo está nublado = the sky is cloudy.",
  },
  {
    id: "la-tormenta",
    category: "weather",
    native: "La tormenta",
    english: "The storm",
    description:
      "Hay tormenta = there's a storm. Trueno = thunder; relámpago = lightning. Summer 'tormentas de verano' can be sudden and dramatic in Spain.",
  },
  {
    id: "la-primavera",
    category: "weather",
    native: "La primavera",
    english: "Spring",
    description:
      "March-May in Spain. Andalusia in primavera is beautiful — flowers everywhere. Feria de Sevilla is a spring festival.",
  },
  {
    id: "el-verano",
    category: "weather",
    native: "El verano",
    english: "Summer",
    description:
      "June-September. In Spain: hot, dry, and everyone flees to the beach in July/August. 'Vacaciones de verano' = summer vacation.",
  },
  {
    id: "el-otono",
    category: "weather",
    native: "El otoño",
    english: "Autumn / Fall",
    description:
      "September-November. Latin America sometimes uses 'el otoño' too. Milder, still warm in southern Spain. Grape harvest (la vendimia) season.",
  },
  {
    id: "el-invierno",
    category: "weather",
    native: "El invierno",
    english: "Winter",
    description:
      "December-February. Cold in central/northern Spain — Madrid can freeze. Andalusia stays mild. Ski season in the Pyrenees and Sierra Nevada.",
  },
  {
    id: "la-temperatura",
    category: "weather",
    native: "La temperatura",
    english: "The temperature",
    description:
      "Spain uses Celsius (°C). Hace veinte grados = it's 20 degrees. 0°C = freezing, 40°C = very hot. 'Hoy hace treinta y cinco' = today it's 35°.",
  },

  // ══════════════════════════════════════════════════════════════
  // COLORS
  // ══════════════════════════════════════════════════════════════
  {
    id: "rojo",
    category: "colors",
    native: "Rojo / Roja",
    english: "Red",
    description:
      "Agrees with gender: un coche rojo (masc), una manzana roja (fem). Spain's flag is red and yellow. Also: rojo vino = wine-red, rojo tomate = tomato-red.",
  },
  {
    id: "azul",
    category: "colors",
    native: "Azul",
    english: "Blue",
    description:
      "Doesn't change for gender (ends in consonant): un cielo azul, una camisa azul. Plural: azules. Azul marino = navy; azul cielo = sky blue.",
  },
  {
    id: "verde",
    category: "colors",
    native: "Verde",
    english: "Green",
    description:
      "Also doesn't change for gender (ends in -e). Un ojo verde, una hoja verde. Slang: 'ponerse verde' = to be extremely jealous or nauseous.",
  },
  {
    id: "amarillo",
    category: "colors",
    native: "Amarillo / Amarilla",
    english: "Yellow",
    description:
      "Cambia según el género. Amarillo huevo, amarillo limón. Amarillento = yellowish. In flamenco, yellow is bad luck on stage.",
  },
  {
    id: "negro",
    category: "colors",
    native: "Negro / Negra",
    english: "Black",
    description:
      "Un vestido negro, una noche negra. Spain: 'la lista negra' = the black list. 'Trabajar en negro' = to work off the books (informal).",
  },
  {
    id: "blanco",
    category: "colors",
    native: "Blanco / Blanca",
    english: "White",
    description:
      "Casa blanca, papel blanco. Vino blanco = white wine. Filipino 'blangko' comes from here (in the sense of 'blank').",
  },
  {
    id: "gris",
    category: "colors",
    native: "Gris",
    english: "Gray",
    description:
      "Invariable for gender. Un día gris = a gray day (dreary). Plural: grises. Spain sometimes calls a dull day 'un día gris'.",
  },
  {
    id: "marron",
    category: "colors",
    native: "Marrón",
    english: "Brown",
    description:
      "For most objects. For hair and eyes, Spanish also uses 'castaño' (chestnut). Ojos marrones or ojos castaños — both fine.",
  },
  {
    id: "rosa-color",
    category: "colors",
    native: "Rosa",
    english: "Pink",
    description:
      "Invariable. Also means 'rose' (the flower). Una camisa rosa = a pink shirt. Prensa rosa = celebrity gossip press ('pink press').",
  },
  {
    id: "naranja-color",
    category: "colors",
    native: "Naranja",
    english: "Orange (color)",
    description:
      "Same word as the fruit, invariable. Un jersey naranja. Anaranjado (agrees with gender) is a formal alternative.",
  },
  {
    id: "morado",
    category: "colors",
    native: "Morado / Morada",
    english: "Purple",
    description:
      "Agrees with gender. Also: violeta (invariable), lila (light purple). Morado is the everyday word.",
  },

  // ══════════════════════════════════════════════════════════════
  // CLOTHING
  // ══════════════════════════════════════════════════════════════
  {
    id: "la-ropa",
    category: "clothing",
    native: "La ropa",
    english: "The clothing",
    description:
      "Always singular in Spanish, even though 'clothes' is plural in English. Ropa interior = underwear. Ropa de invierno / verano = winter/summer clothes.",
  },
  {
    id: "la-camisa",
    category: "clothing",
    native: "La camisa",
    english: "The shirt (button-up)",
    description:
      "Button-up dress shirt. Not to be confused with 'camiseta' (T-shirt). Filipino 'kamisa' comes from here (with variants like 'kamiseta' = tank top/undershirt).",
  },
  {
    id: "la-camiseta",
    category: "clothing",
    native: "La camiseta",
    english: "The T-shirt",
    description:
      "T-shirt or short-sleeved casual top. In Argentina/Uruguay: 'la remera'. In Mexico: 'la playera'. Filipino 'kamiseta' actually means undershirt/tank top.",
  },
  {
    id: "el-pantalon",
    category: "clothing",
    native: "El pantalón",
    english: "The pants / trousers",
    description:
      "Often used singular in Spain (un pantalón), plural in Latin America (unos pantalones). Both correct. Filipino 'pantalon' comes directly from here.",
  },
  {
    id: "los-vaqueros",
    category: "clothing",
    native: "Los vaqueros",
    english: "Jeans",
    description:
      "Spain-specific! Literally 'cowboy pants'. Latin America: 'jeans' (English loan) or 'pantalones de mezclilla'. Both understood.",
  },
  {
    id: "la-falda",
    category: "clothing",
    native: "La falda",
    english: "The skirt",
    description:
      "Falda larga = long skirt. Falda corta = short skirt. Minifalda = miniskirt. Filipino 'palda' comes directly from here.",
  },
  {
    id: "el-vestido",
    category: "clothing",
    native: "El vestido",
    english: "The dress",
    description:
      "Also means 'dressed' (past participle of vestir). Vestido de noche = evening dress. Filipino 'bestida' comes from here (informal, for women's dress).",
  },
  {
    id: "los-zapatos",
    category: "clothing",
    native: "Los zapatos",
    english: "Shoes",
    description:
      "Filipino 'sapatos' comes directly — you already know this word! Zapatos de tacón = high heels. Zapatos de deporte = sneakers (Spain: also 'zapatillas').",
  },
  {
    id: "las-zapatillas",
    category: "clothing",
    native: "Las zapatillas",
    english: "Sneakers / slippers",
    description:
      "In Spain: 'zapatillas' primarily means sneakers/trainers. In Latin America: house slippers. Context matters. Zapatillas deportivas is fully explicit for sneakers.",
  },
  {
    id: "los-calcetines",
    category: "clothing",
    native: "Los calcetines",
    english: "Socks",
    description:
      "Spain: calcetines. Latin America: 'medias' (which in Spain means stockings/tights). Filipino 'medyas' = socks, comes from 'medias'.",
  },
  {
    id: "la-chaqueta",
    category: "clothing",
    native: "La chaqueta",
    english: "The jacket",
    description:
      "Filipino 'tsaketa'/'jacket' — the loan didn't stick as strongly. In Mexico: 'la chamarra'. In Argentina: 'la campera'. Spain: chaqueta is universal.",
  },
  {
    id: "el-abrigo",
    category: "clothing",
    native: "El abrigo",
    english: "The coat (winter)",
    description:
      "Heavier than a chaqueta — for real cold. Ponte el abrigo = put on your coat. Abrigar = to keep warm.",
  },
  {
    id: "el-sombrero",
    category: "clothing",
    native: "El sombrero",
    english: "The hat (wide-brimmed)",
    description:
      "Wide-brimmed like a Mexican sombrero. For a baseball cap say 'la gorra'. Filipino 'sombrero' also refers to a wide-brimmed hat.",
  },
  {
    id: "las-gafas",
    category: "clothing",
    native: "Las gafas",
    english: "Glasses",
    description:
      "Spain uses 'gafas'; most of Latin America uses 'lentes' or 'anteojos'. Gafas de sol = sunglasses. Always plural.",
  },
  {
    id: "el-cinturon",
    category: "clothing",
    native: "El cinturón",
    english: "The belt",
    description:
      "Filipino 'sinturon' comes from here — you already know this. Cinturón de seguridad = seatbelt. Cinturón negro = black belt (martial arts).",
  },
  {
    id: "la-talla",
    category: "clothing",
    native: "La talla",
    english: "The size (clothing)",
    description:
      "For clothes and shoes. ¿Qué talla usa? = what size do you wear? European sizes: 36-44 for women's clothes; 38-46 for men's shoes.",
  },

  // ══════════════════════════════════════════════════════════════
  // BODY PARTS
  // ══════════════════════════════════════════════════════════════
  {
    id: "la-cabeza",
    category: "body",
    native: "La cabeza",
    english: "The head",
    description:
      "Me duele la cabeza = I have a headache. Cabezón = big-headed (also stubborn). Note: Spanish uses 'la cabeza' with definite article for body parts, not 'my head'.",
  },
  {
    id: "el-ojo",
    category: "body",
    native: "El ojo",
    english: "The eye",
    description:
      "Plural: los ojos. Ojos azules = blue eyes. '¡Ojo!' = be careful! (interjection). Tener buen ojo = to have a good eye (judgment).",
  },
  {
    id: "la-nariz",
    category: "body",
    native: "La nariz",
    english: "The nose",
    description:
      "Plural: las narices. Filipino 'ilong' isn't from Spanish. Estar hasta las narices = to be fed up (up to the nose).",
  },
  {
    id: "la-boca",
    category: "body",
    native: "La boca",
    english: "The mouth",
    description:
      "Filipino 'bibig' isn't Spanish. Common phrase: 'boca abajo' = face-down, 'boca arriba' = face-up. Also: la boca del metro = subway entrance.",
  },
  {
    id: "el-oido",
    category: "body",
    native: "El oído / La oreja",
    english: "The ear (inner / outer)",
    description:
      "Oído = the inner ear (hearing). Oreja = the outer ear (what you see). Me duele el oído = my ear (inside) hurts. Filipino 'tenga' isn't from Spanish.",
  },
  {
    id: "el-cuello",
    category: "body",
    native: "El cuello",
    english: "The neck",
    description:
      "Also means shirt collar (cuello de la camisa). Filipino 'kwelyo' = collar. Different word for 'neck' proper in Filipino: 'leeg'.",
  },
  {
    id: "el-hombro",
    category: "body",
    native: "El hombro",
    english: "The shoulder",
    description:
      "Not to be confused with 'hombre' (man). Plural: los hombros. Encogerse de hombros = to shrug (contract shoulders).",
  },
  {
    id: "el-brazo",
    category: "body",
    native: "El brazo",
    english: "The arm",
    description:
      "Filipino 'braso' comes directly from here — 'you know this word'. Plural: los brazos. Del brazo = arm in arm.",
  },
  {
    id: "la-mano",
    category: "body",
    native: "La mano",
    english: "The hand",
    description:
      "Unusual: ends in -o but is FEMININE. Las manos = the hands. Filipino 'kamay' isn't from Spanish. 'A mano' = by hand.",
  },
  {
    id: "los-dedos",
    category: "body",
    native: "Los dedos",
    english: "The fingers / toes",
    description:
      "Same word for fingers and toes! To distinguish: dedos de la mano vs. dedos del pie. Or 'dedo gordo' (thumb / big toe — the fat one).",
  },
  {
    id: "el-pecho",
    category: "body",
    native: "El pecho",
    english: "The chest",
    description:
      "Chest / breast. Also the female breast — 'los pechos' or 'las tetas' (vulgar). Dolor en el pecho = chest pain (medically important).",
  },
  {
    id: "la-espalda",
    category: "body",
    native: "La espalda",
    english: "The back",
    description:
      "The physical back (spine area). Me duele la espalda = my back hurts. Not to be confused with 'atrás' or 'detrás' (behind, adverbs).",
  },
  {
    id: "el-estomago",
    category: "body",
    native: "El estómago",
    english: "The stomach",
    description:
      "Filipino 'sikmura' isn't from Spanish. Dolor de estómago = stomachache. Familiar term for belly: 'la barriga' or 'la tripa'.",
  },
  {
    id: "la-pierna",
    category: "body",
    native: "La pierna",
    english: "The leg",
    description:
      "Filipino 'binti' isn't from Spanish. Plural: las piernas. Estirar las piernas = to stretch the legs. Different from 'la pata' (animal leg / table leg).",
  },
  {
    id: "la-rodilla",
    category: "body",
    native: "La rodilla",
    english: "The knee",
    description:
      "De rodillas = on your knees / kneeling. Me duele la rodilla = my knee hurts. Filipino 'tuhod' isn't from Spanish.",
  },
  {
    id: "el-pie",
    category: "body",
    native: "El pie",
    english: "The foot",
    description:
      "Plural: los pies. A pie = on foot / walking. De pie = standing. Filipino 'paa' isn't from Spanish, but 'pyes' (colloquial) sometimes is.",
  },

  // ══════════════════════════════════════════════════════════════
  // PLACES IN THE CITY
  // ══════════════════════════════════════════════════════════════
  {
    id: "el-banco",
    category: "city",
    native: "El banco",
    english: "The bank / bench",
    description:
      "Same word for both! Context tells you which. Ir al banco = go to the bank. Sentarse en un banco = sit on a bench. Spanish banks: Santander, BBVA, CaixaBank.",
  },
  {
    id: "el-correo",
    category: "city",
    native: "El correo / La oficina de correos",
    english: "The post / post office",
    description:
      "El correo = the mail. La oficina de correos = the post office. Correos (with -s) is Spain's national postal service (like USPS).",
  },
  {
    id: "el-restaurante",
    category: "city",
    native: "El restaurante",
    english: "The restaurant",
    description:
      "Universal. Also: el bar (bar/cafe hybrid — very Spanish), la cafetería (breakfast/coffee spot), la taberna (traditional bar).",
  },
  {
    id: "el-hotel",
    category: "city",
    native: "El hotel",
    english: "The hotel",
    description:
      "Universal. Also: la pensión (small guesthouse, cheaper), el hostal (like a small hotel, not a youth hostel — that's 'el albergue').",
  },
  {
    id: "el-museo",
    category: "city",
    native: "El museo",
    english: "The museum",
    description:
      "Spain's big ones: El Prado, Reina Sofía, Thyssen (Madrid); Guggenheim (Bilbao); Picasso Museum (Málaga, Barcelona). Many free on Sundays.",
  },
  {
    id: "el-parque",
    category: "city",
    native: "El parque",
    english: "The park",
    description:
      "Ir al parque = go to the park. Madrid's Retiro is iconic; Barcelona's Parc Güell is a Gaudí masterpiece. Sunday afternoons: everyone's in the park.",
  },
  {
    id: "la-iglesia",
    category: "city",
    native: "La iglesia",
    english: "The church",
    description:
      "Spain's cathedrals: Sagrada Familia (Barcelona), Sevilla, Toledo, Burgos. Filipino 'iglesya' comes from here (though the modern word is 'simbahan').",
  },
  {
    id: "la-escuela",
    category: "city",
    native: "La escuela / El colegio",
    english: "The school",
    description:
      "In Spain 'el colegio' = elementary/secondary school; 'la escuela' more general. 'El instituto' = high school. Filipino 'eskwela' comes from here.",
  },
  {
    id: "la-universidad",
    category: "city",
    native: "La universidad",
    english: "The university",
    description:
      "Filipino 'unibersidad' — direct loan. Universidad Complutense de Madrid is one of Europe's oldest. La uni is the common short form.",
  },
  {
    id: "la-biblioteca",
    category: "city",
    native: "La biblioteca",
    english: "The library",
    description:
      "Filipino 'biblyoteka' — direct loan. Free to use with a card. La Biblioteca Nacional (Madrid) is Spain's national library.",
  },
  {
    id: "el-cine",
    category: "city",
    native: "El cine",
    english: "The cinema",
    description:
      "Filipino 'sine' comes directly. Ir al cine = to go to the movies. In Spain most films are dubbed ('doblada'); look for 'V.O.' (versión original) for subtitled.",
  },
  {
    id: "el-teatro",
    category: "city",
    native: "El teatro",
    english: "The theater",
    description:
      "Filipino 'teatro' — direct loan. Madrid has a strong theater scene, especially in the 'Gran Vía' area (like Broadway but smaller).",
  },
  {
    id: "el-hospital-place",
    category: "city",
    native: "El hospital",
    english: "The hospital",
    description:
      "Filipino 'ospital' — direct loan. In Spain: hospitales públicos (public) and privados (private). Urgencias = ER entrance.",
  },
  {
    id: "la-farmacia-place",
    category: "city",
    native: "La farmacia",
    english: "The pharmacy",
    description:
      "Green cross sign, often lit at night. Filipino 'parmasya'/'farmasi' — direct loan. Also: 'de guardia' pharmacies stay open all night on rotation.",
  },
  {
    id: "la-tienda",
    category: "city",
    native: "La tienda",
    english: "The shop / store",
    description:
      "General small shop. Tienda de ropa = clothing store. Tienda de comestibles = grocery store. Filipino 'tindahan' comes from here! Also: 'tindera' = shopkeeper (fem).",
  },
  {
    id: "el-supermercado-place",
    category: "city",
    native: "El supermercado",
    english: "The supermarket",
    description:
      "Big grocery chains: Mercadona, Carrefour, Dia, Lidl, Alcampo. Sundays: most closed (except tourist areas).",
  },
  {
    id: "la-plaza",
    category: "city",
    native: "La plaza",
    english: "The square / plaza",
    description:
      "Central to Spanish city life — every town has a plaza mayor. Filipino 'plasa' comes directly. Where you'll find cafes, benches, and city life.",
  },

  // ══════════════════════════════════════════════════════════════
  // COMMON VERBS
  // ══════════════════════════════════════════════════════════════
  {
    id: "ir-verb",
    category: "actions",
    native: "Ir",
    english: "To go",
    description:
      "Highly irregular. Present: voy, vas, va, vamos, vais, van. Ir + a + [infinitive] = 'going to do' (near future). Voy a comer = I'm going to eat.",
    breakdown: [
      { native: "voy", meaning: "I go" },
      { native: "vas", meaning: "you go" },
      { native: "va", meaning: "he/she/you (formal) goes" },
      { native: "vamos", meaning: "we go / let's go" },
      { native: "van", meaning: "they / you (plural) go" },
    ],
  },
  {
    id: "venir-verb",
    category: "actions",
    native: "Venir",
    english: "To come",
    description:
      "Also irregular. Vengo, vienes, viene, venimos, venís, vienen. ¡Ven aquí! = come here! (informal command).",
  },
  {
    id: "comer-verb",
    category: "actions",
    native: "Comer",
    english: "To eat",
    description:
      "Regular -er verb. Como, comes, come, comemos, coméis, comen. In Spain: 'la comida' can mean lunch specifically, not just food.",
  },
  {
    id: "beber-verb",
    category: "actions",
    native: "Beber",
    english: "To drink",
    description:
      "Regular -er. In Spain, also common: 'tomar' for drinks (una tomar una cerveza). ¿Qué quieres tomar? = what do you want to drink?",
  },
  {
    id: "dormir-verb",
    category: "actions",
    native: "Dormir",
    english: "To sleep",
    description:
      "Stem-changing (o→ue): duermo, duermes, duerme, dormimos, dormís, duermen. Dormir bien = to sleep well. Filipino 'tulog' isn't from Spanish.",
  },
  {
    id: "hablar-verb",
    category: "actions",
    native: "Hablar",
    english: "To speak / talk",
    description:
      "Regular -ar. Hablo, hablas, habla, hablamos, habláis, hablan. ¿Hablas español? = do you speak Spanish?",
  },
  {
    id: "escuchar-verb",
    category: "actions",
    native: "Escuchar",
    english: "To listen",
    description:
      "Regular -ar. Different from 'oír' (to hear passively). Escuchar música = listen to music. Take note: no preposition — you 'listen music' not 'listen to music'.",
  },
  {
    id: "ver-verb",
    category: "actions",
    native: "Ver",
    english: "To see / watch",
    description:
      "Slightly irregular: veo, ves, ve, vemos, veis, ven. Ver la tele = watch TV. Also: a ver = let's see (super common filler).",
  },
  {
    id: "mirar-verb",
    category: "actions",
    native: "Mirar",
    english: "To look at",
    description:
      "Regular -ar. Mirar = intentional looking; ver = perceiving. ¡Mira! = look! Mirar la hora = to check the time.",
  },
  {
    id: "leer-verb",
    category: "actions",
    native: "Leer",
    english: "To read",
    description:
      "Regular -er with a spelling quirk in preterite (leí, leíste, leyó). Leer un libro = to read a book. Filipino 'basa' isn't from Spanish.",
  },
  {
    id: "escribir-verb",
    category: "actions",
    native: "Escribir",
    english: "To write",
    description:
      "Regular -ir. Escribo, escribes, escribe, escribimos, escribís, escriben. Escribir a mano = to handwrite. Filipino 'sulat' isn't Spanish.",
  },
  {
    id: "comprar-verb",
    category: "actions",
    native: "Comprar",
    english: "To buy",
    description:
      "Regular -ar. Filipino 'bumili' isn't from Spanish. Ir de compras = to go shopping. Compre = 'buy!' (formal command).",
  },
  {
    id: "vender-verb",
    category: "actions",
    native: "Vender",
    english: "To sell",
    description:
      "Regular -er. Se vende = for sale (you'll see this sign everywhere). En venta = on sale (for purchase, not discounted).",
  },
  {
    id: "trabajar-verb",
    category: "actions",
    native: "Trabajar",
    english: "To work",
    description:
      "Regular -ar. Filipino 'trabaho' comes from 'trabajo' (the noun). Trabajo = a job. Trabajar duro = to work hard.",
  },
  {
    id: "estudiar-verb",
    category: "actions",
    native: "Estudiar",
    english: "To study",
    description:
      "Regular -ar. Filipino 'estudyante' (student) from 'estudiante'. Estudio español = I study Spanish. Ir a estudiar = to go study.",
  },
  {
    id: "vivir-verb",
    category: "actions",
    native: "Vivir",
    english: "To live",
    description:
      "Regular -ir. Vivo en Madrid = I live in Madrid. ¿Dónde vives? = where do you live? Vivir para contarlo = to live to tell the tale.",
  },
  {
    id: "viajar-verb",
    category: "actions",
    native: "Viajar",
    english: "To travel",
    description:
      "Regular -ar. Filipino 'biyahe' (trip) comes from 'viaje'. Viajar por Europa = travel around Europe. Un buen viaje = have a good trip.",
  },
  {
    id: "salir-verb",
    category: "actions",
    native: "Salir",
    english: "To leave / go out",
    description:
      "Irregular yo form: salgo. Sales, sale, salimos, salís, salen. Salir con amigos = to go out with friends. Salir de casa = to leave the house.",
  },
  {
    id: "entrar-verb",
    category: "actions",
    native: "Entrar",
    english: "To enter",
    description:
      "Regular -ar. Entrar en (Spain) or entrar a (Latin America) + place. Entra en la casa / entra a la casa — both correct depending on region.",
  },
  {
    id: "esperar-verb",
    category: "actions",
    native: "Esperar",
    english: "To wait / hope",
    description:
      "One verb, two meanings! Espero el autobús = I'm waiting for the bus. Espero que sí = I hope so. Context makes it clear.",
  },
];
