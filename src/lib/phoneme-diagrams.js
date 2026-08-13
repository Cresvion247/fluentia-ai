const groups = {
  "1": ["/ɪ/ · /e/ · /æ/ · /ʌ/ · /ɒ/", "vowels", "Mantén la mandíbula relajada y ajusta la lengua según la vocal. La boca se abre más para /æ/ y /ʌ/."],
  "2": ["/ɪ/ · /e/ · /æ/ · /ʌ/ · /ɒ/", "vowels", "Usa una vocal corta y nítida antes de /tər/; no alargues la vocal."],
  "3": ["Vocales cortas, largas y /r/", "vowels", "La duración y la posición de la lengua cambian el significado. Para /r/, la lengua no toca el paladar."],
  "4": ["Vocales largas", "front", "Eleva la lengua y mantén la vocal un poco más de tiempo; la e final no se pronuncia."],
  "5": ["Vocales + /r/", "rhotic", "Redondea levemente los labios y retrae la lengua sin tocar el paladar."],
  "6": ["/ə/", "neutral", "Relaja boca, lengua y mandíbula. Es una vocal muy breve y central."],
  "8": ["/æ/", "open", "Abre bastante la boca; coloca la lengua baja y adelantada, sin redondear los labios."],
  "9": ["/ɑː/", "open", "Abre la boca y lleva la lengua hacia atrás. Mantén el sonido largo."],
  "10": ["/ɒ/", "rounded", "Abre ligeramente la boca, lleva la lengua atrás y redondea los labios."],
  "11": ["/ɔː/", "rounded", "Redondea los labios y eleva la parte posterior de la lengua; prolonga el sonido."],
  "12": ["/uː/", "rounded", "Redondea los labios como para silbar y eleva la parte trasera de la lengua."],
  "13": ["/ʊ/", "rounded", "Redondea ligeramente los labios; usa una vocal breve y relajada."],
  "14": ["/əʊ/", "diphthong", "Empieza con la lengua central y deslízala hacia atrás mientras redondeas los labios."],
  "15": ["/aʊ/", "diphthong", "Empieza con la boca abierta y termina redondeando los labios hacia /ʊ/."],
  "16": ["/ɔɪ/", "diphthong", "Empieza atrás con labios redondeados y desliza la lengua hacia delante para /ɪ/."],
  "18": ["/iː/", "front", "Sonríe suavemente, eleva la lengua hacia delante y prolonga el sonido."],
  "19": ["/ʌ/", "open", "Mantén la lengua baja y central, con una apertura media de la boca."],
  "20": ["/eɪ/", "diphthong", "Empieza con la lengua media-delantera y deslízala hacia /ɪ/ sin cerrar los labios."],
  "21": ["/eə/", "diphthong", "Parte de /e/ y relaja la lengua hacia el centro para llegar a /ə/."],
  "22": ["/ɪə/", "diphthong", "Empieza con /ɪ/ y relaja la lengua hacia una posición central /ə/."],
  "24": ["/ʊə/", "diphthong", "Empieza con los labios ligeramente redondeados y termina con la lengua centrada."],
  "26": ["/ɪ/", "front", "Eleva la parte frontal de la lengua sin tensarla y mantén una abertura pequeña."],
  "27": ["/aɪ/", "diphthong", "Empieza con la boca abierta y desliza la lengua hacia /ɪ/ al final."],
  "29": ["/ə/", "neutral", "Relaja todos los músculos de la boca: la lengua queda en el centro."],
  "30": ["Oclusivos", "consonant", "Bloquea brevemente el aire con labios o lengua y suéltalo de forma limpia."],
  "31": ["/juː/", "front", "Empieza con una ligera semivocal /j/ y pasa a /uː/ con labios redondeados."],
  "32": ["/kw/", "consonant", "Forma /k/ con la parte posterior de la lengua y enlaza inmediatamente con /w/."],
  "34": ["/dʒ/ · /j/", "consonant", "Para /dʒ/, la lengua toca y se separa del paladar; para /j/, deslízala sin cerrar el paso del aire."],
  "37": ["/g/", "consonant", "La parte posterior de la lengua toca el paladar blando y libera aire con vibración."],
  "38": ["/ks/ · /k/", "consonant", "Para /ks/, libera /k/ y añade /s/ inmediatamente; para /k/, detén el aire atrás y suéltalo."],
  "40": ["/z/ · /s/", "consonant", "Acerca la lengua a los alveolos sin tocar; /z/ vibra y /s/ no vibra."],
  "41": ["/f/", "consonant", "Apoya el labio inferior suavemente en los dientes superiores y deja salir aire continuo."],
  default: ["Guía de pronunciación", "vowels", "Observa la posición de la lengua, los labios y los dientes; compárala con el sonido de la palabra seleccionada."]
};

export function getPhonemeGuide(group) {
  const [ipa, diagram, description] = groups[group] || groups.default;
  return { ipa, diagram, description };
}