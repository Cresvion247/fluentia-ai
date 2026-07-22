import { idiomQuestions } from "@/lib/idioms-data";

const sections = [
  [...idiomQuestions.slice(72, 80), idiomQuestions[39]],
  idiomQuestions.slice(80, 92),
  idiomQuestions.slice(50, 60),
  idiomQuestions.slice(60, 72),
  idiomQuestions.slice(0, 12),
  idiomQuestions.slice(26, 37),
  idiomQuestions.slice(12, 26),
  idiomQuestions.slice(37, 50),
  idiomQuestions.slice(104),
  idiomQuestions.slice(92, 104)
];

export const idiomsInQuestions = sections.flat();