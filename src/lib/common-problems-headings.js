const titles = {
  1: "Tiempo verbal y expresiones temporales",
  2: "Present simple, present continuous y present perfect",
  3: "Have gone to y have been to",
  4: "Have y have got",
  6: "Distinguir contracciones al escuchar",
  7: "Posición de los adverbios",
  8: "Have to, must y don’t have to",
  10: "El infinitivo negativo",
  11: "Orden de sujeto y verbo",
  12: "Relative Pronouns: Subject vs. Object",
  13: "Verbos y preposiciones",
  14: "El verbo invite sin preposición",
  15: "Preposiciones al final de preguntas",
  17: "Verbos, sustantivos y preposiciones",
  18: "Could para habilidades en el pasado",
  19: "Cómo decir fechas",
  20: "Another, other y the others",
  21: "Same as y comparaciones",
  23: "Posesivo con ’s",
  24: "Every con sustantivos singulares",
  25: "Pay, pay for y colocaciones",
  26: "Los cuatro tipos de oraciones",
  27: "Do y make",
  28: "Have anything to do with"
};

export function getCommonProblemsHeading(number, content) {
  if (titles[number]) return titles[number];
  const topic = content.replace(/\s+/g, " ").split(/[.!?]/)[0].trim().slice(0, 72);
  return topic || "Punto gramatical clave";
}