// Cirugía oncológica — generado por build/build_esp.py. Para añadir preguntas, pega objetos en el arreglo «preguntas».
window.BANCO = window.BANCO || {};
window.BANCO["esp1"] = {
 "nombre": "Cirugía oncológica",
 "temas": [
  "Principios de cirugía oncológica",
  "Cabeza y cuello y tiroides",
  "Piel y partes blandas",
  "Mama",
  "Cáncer gástrico",
  "Colon y recto",
  "Hígado, vías biliares y páncreas",
  "Cérvix uterino y ginecología oncológica"
 ],
 "preguntas": [
  {
   "id": "ESP1-B-001",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estado general: Karnofsky",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 1",
   "enunciado": "Uno de los factores que condicionan el tratamiento quirúrgico oncológico es el estado general del paciente. Varón de 45 años con cáncer de recto superior, sin comorbilidades, que se cuida a sí mismo pero es INCAPAZ de mantener una actividad normal o de realizar tareas activas. Le corresponde una escala de Karnofsky de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "20 %"
    },
    {
     "id": "b",
     "texto": "10 %"
    },
    {
     "id": "c",
     "texto": "70 %"
    },
    {
     "id": "d",
     "texto": "40 %"
    },
    {
     "id": "e",
     "texto": "90 %"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "se cuida a sí mismo pero es INCAPAZ de mantener una actividad normal",
   "por_que_correcta": "En la tabla de Karnofsky de tu docente, 70 % es exactamente «cuida de sí mismo; INCAPAZ de mantener una actividad normal o realizar tareas activas». Es el primer escalón del tramo «incapaz de trabajar, capaz de vivir en casa».",
   "por_que_no": {
    "a": "20 % es el paciente muy enfermo, hospitalizado, que necesita tratamiento de soporte activo. Habría sido la respuesta si estuviera hospitalizado y grave.",
    "b": "10 % es el paciente moribundo. Lo sería si el caso describiera un proceso fatal que progresa rápidamente.",
    "d": "40 % es el paciente incapacitado que requiere cuidados y asistencia especiales. Correspondería si ya no pudiera cuidarse solo.",
    "e": "90 % es el paciente que mantiene una actividad normal con síntomas mínimos. Sería correcta si pudiera seguir con su actividad normal."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 59): Karnofsky 70 = «Cuida de sí mismo; INCAPAZ de mantener una actividad normal o realizar tareas activas». En el pretest no hay clave oficial: solo la respuesta marcada durante el intento.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 59."
   ]
  },
  {
   "id": "ESP1-B-002",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estado general: ECOG",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 2",
   "enunciado": "Paciente con cáncer de hígado que presenta distensión abdominal, pero el síntoma no le impide trabajar ni realizar sus labores diarias. Le corresponde un ECOG de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "ECOG 0"
    },
    {
     "id": "b",
     "texto": "ECOG 1"
    },
    {
     "id": "c",
     "texto": "ECOG 2"
    },
    {
     "id": "d",
     "texto": "ECOG 3"
    },
    {
     "id": "e",
     "texto": "ECOG 4"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "el síntoma no le impide trabajar ni realizar sus labores diarias",
   "por_que_correcta": "ECOG 1 es el paciente con síntomas que solo se limita en la actividad física intensa, pero camina y puede hacer trabajo ligero o sedentario. Aquí hay un síntoma (distensión) que no le impide trabajar.",
   "por_que_no": {
    "a": "ECOG 0 es el paciente plenamente activo, sin ninguna restricción. Sería la respuesta si no tuviera síntomas.",
    "c": "ECOG 2 camina y se cuida solo, pero ya no puede trabajar. Correspondería si la distensión le impidiera trabajar.",
    "d": "ECOG 3 solo se cuida de forma limitada y pasa más del 50 % del día en cama o sillón.",
    "e": "ECOG 4 está totalmente incapacitado y confinado a cama o sillón."
   },
   "fuentes": {
    "docente": "La escala ECOG no aparece en el texto de las diapositivas; tu docente usa Karnofsky (Principios, diap. 59). Clave sin marca en el banqueo: se resuelve con la escala oficial ECOG-ACRIN.",
    "guia": null,
    "libro": "Escala ECOG-ACRIN: grado 1 = «restringido en actividad física intensa, pero ambulatorio y capaz de realizar trabajo ligero o sedentario» (traducción propia).",
    "discrepancia": false
   },
   "referencias": [
    "Oken MM, Creech RH, Tormey DC, et al. Toxicity and response criteria of the Eastern Cooperative Oncology Group. Am J Clin Oncol. 1982;5(6):649-55. Escala disponible en: https://ecog-acrin.org/re-sources/ecog-performance-status/",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 59."
   ]
  },
  {
   "id": "ESP1-B-003",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Radicalidad R",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 3",
   "enunciado": "A un paciente se le realiza gastrectomía total por adenocarcinoma de fondo gástrico. El informe histopatológico señala que el borde superior de sección esofágico salió comprometido por la neoplasia. Según el tipo de radicalidad, nos encontramos ante una cirugía:",
   "alternativas": [
    {
     "id": "a",
     "texto": "R3"
    },
    {
     "id": "b",
     "texto": "R4"
    },
    {
     "id": "c",
     "texto": "R2"
    },
    {
     "id": "d",
     "texto": "R1"
    },
    {
     "id": "e",
     "texto": "R0"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "el borde superior de sección esofágico salió comprometido por la neoplasia",
   "por_que_correcta": "Un borde de sección comprometido en el informe de patología significa que quedó enfermedad microscópica: eso es R1. Tu docente lo define así: «R1 = queda enfermedad microscópica».",
   "por_que_no": {
    "a": "R3 no existe: la clasificación de radicalidad solo tiene R0, R1 y R2.",
    "b": "R4 no existe: la clasificación de radicalidad solo tiene R0, R1 y R2.",
    "c": "R2 es tumor residual macroscópico. Sería la respuesta si el cirujano hubiera dejado tumor visible.",
    "e": "R0 exige que no quede enfermedad ni macro ni microscópica. Lo sería con todos los bordes libres."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 57): «R0 = No queda enfermedad macroscópica ni microscópica; R1 = Queda enfermedad microscópica; R2 = Queda enfermedad macroscópica».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 57."
   ]
  },
  {
   "id": "ESP1-B-004",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Radicalidad R",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 4",
   "enunciado": "Paciente con cáncer de riñón circunscrito al riñón al que se realiza nefrectomía; la histopatología no muestra compromiso extrarrenal ni ganglios patológicos. Nos encontramos ante una cirugía:",
   "alternativas": [
    {
     "id": "a",
     "texto": "R0"
    },
    {
     "id": "b",
     "texto": "R2"
    },
    {
     "id": "c",
     "texto": "R3"
    },
    {
     "id": "d",
     "texto": "R1"
    },
    {
     "id": "e",
     "texto": "R4"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "la histopatología no muestra compromiso extrarrenal ni ganglios patológicos",
   "por_que_correcta": "Si la pieza no muestra tumor fuera del órgano ni en los bordes, no queda enfermedad macro ni microscópica: es una resección R0, el objetivo de la cirugía con intención curativa.",
   "por_que_no": {
    "b": "R2 implica tumor residual visible. Lo sería si se hubiera dejado tumor macroscópico.",
    "c": "R3 no existe en la clasificación.",
    "d": "R1 implica tumor microscópico en el borde. Sería correcta si el patólogo informara un margen comprometido.",
    "e": "R4 no existe en la clasificación."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 57): «R0 = No queda enfermedad macroscópica ni microscópica».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 57."
   ]
  },
  {
   "id": "ESP1-B-005",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estadificación TNM",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 5",
   "enunciado": "En la estadificación TNM, el componente que determina el tamaño tumoral y su relación con las estructuras vecinas es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tumor primario (T)"
    },
    {
     "id": "b",
     "texto": "Estadio clínico"
    },
    {
     "id": "c",
     "texto": "Estado ganglionar regional (N)"
    },
    {
     "id": "d",
     "texto": "Grado histológico"
    },
    {
     "id": "e",
     "texto": "Metástasis a distancia (M)"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "el tamaño tumoral y su relación con las estructuras vecinas",
   "por_que_correcta": "La T describe el tumor local: su tamaño y su extensión a las estructuras vecinas. En las diapositivas, la T representa el «desarrollo del tumor local» y se gradúa por tamaño (T1a, T1b, T1c, T2…).",
   "por_que_no": {
    "b": "El estadio clínico no es un componente: es el resultado de agrupar T, N y M.",
    "c": "La N describe la diseminación a los ganglios regionales. Sería la respuesta si preguntaran por los ganglios.",
    "d": "El grado histológico describe la diferenciación celular y solo se añade al estadio en algunos tumores, como el sarcoma.",
    "e": "La M describe la metástasis a distancia. Sería la respuesta si preguntaran por la diseminación a órganos lejanos."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios: el TNM recoge «desarrollo del tumor local (T), diseminación a nódulos linfáticos regionales (N) y metástasis a distancia (M)» (diap. 40); la cT se gradúa por tamaño (diap. 28-29).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 40.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 28."
   ]
  },
  {
   "id": "ESP1-B-006",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estadificación TNM",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 6",
   "enunciado": "Es un tipo de neoplasia maligna en el que, para completar la estadificación TNM, se necesita el grado tumoral:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Carcinoma ductal de mama"
    },
    {
     "id": "b",
     "texto": "Cáncer de tiroides"
    },
    {
     "id": "c",
     "texto": "Sarcoma de partes blandas"
    },
    {
     "id": "d",
     "texto": "Cáncer de cuello uterino"
    },
    {
     "id": "e",
     "texto": "Cáncer de testículo"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "se necesita el grado tumoral",
   "por_que_correcta": "Tu docente lo dice textual: en algunos casos, al estadio clínico se le agrega la edad (tiroides) o el grado histológico (sarcoma de partes blandas).",
   "por_que_no": {
    "a": "En mama el estadio se arma con T, N y M; el grado no es lo que el docente pone como ejemplo de dato añadido.",
    "b": "En tiroides lo que se agrega al estadio es la edad, no el grado. Sería la respuesta si preguntaran por la edad.",
    "d": "El cáncer de cuello uterino se estadifica con FIGO/TNM sin grado.",
    "e": "En testículo se añaden marcadores séricos, no el grado. Sería la respuesta si preguntaran por marcadores."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 40 y 45): «En algunos casos, al estadio clínico se le agrega: Edad (tiroides), Grado histológico (sarcoma p. blandas)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 40."
   ]
  },
  {
   "id": "ESP1-B-007",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estadificación TNM",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 7",
   "enunciado": "De los siguientes enunciados, ¿cuál NO pertenece a los objetivos del sistema TNM del AJCC?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Establecer el pronóstico"
    },
    {
     "id": "b",
     "texto": "Decidir la construcción de centros oncológicos"
    },
    {
     "id": "c",
     "texto": "Facilitar el intercambio de información entre centros oncológicos"
    },
    {
     "id": "d",
     "texto": "Evaluar los resultados de los tratamientos"
    },
    {
     "id": "e",
     "texto": "Ayudar al clínico en la planificación del tratamiento"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "NO pertenece a los objetivos del sistema TNM",
   "por_que_correcta": "La diapositiva de objetivos del TNM-AJCC enumera: planificar el tratamiento, establecer el pronóstico, evaluar resultados, intercambiar información entre centros, contribuir a la investigación y al control del cáncer. Decidir dónde construir centros no está en la lista.",
   "por_que_no": {
    "a": "Establecer el pronóstico es el objetivo 2 de la lista del docente.",
    "c": "Facilitar el intercambio de información entre centros es el objetivo 4.",
    "d": "Evaluar los resultados del tratamiento es el objetivo 3.",
    "e": "Ayudar a planificar el tratamiento es el objetivo 1."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 48), «Objetivos del sistema TNM-AJCC»: 1) planificación del tratamiento; 2) pronóstico; 3) evaluación de resultados; 4) intercambio de información entre centros; 5) investigación; 6) control de las actividades relacionadas con el cáncer.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 48."
   ]
  },
  {
   "id": "ESP1-B-008",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Cirugía diagnóstica: biopsias",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 8",
   "enunciado": "Respecto a las intervenciones quirúrgicas con fines diagnósticos (biopsias), ¿qué afirmación es correcta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Incisional: remoción de un pequeño fragmento de la masa tumoral"
    },
    {
     "id": "b",
     "texto": "Escisional: extirpación completa de la lesión con un margen de 2 cm de tejido sano"
    },
    {
     "id": "c",
     "texto": "Por aspiración: obtiene tejido a través de una aguja fina"
    },
    {
     "id": "d",
     "texto": "Con aguja gruesa: obtiene células aisladas"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "¿qué afirmación es correcta?",
   "por_que_correcta": "Es la definición literal de tu docente: «Incisional: remoción de un pequeño fragmento de la masa tumoral».",
   "por_que_no": {
    "b": "La escisional extirpa la lesión completa «si es pequeña», sin margen oncológico de 2 cm. Sería correcta sin la parte del margen.",
    "c": "La aspiración con aguja fina obtiene células (estudio citológico), no tejido. Sería correcta si dijera «células».",
    "d": "La aguja gruesa obtiene una porción de tejido, no células aisladas. Las definiciones de aspiración y aguja gruesa están cruzadas."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 62): incisional = remoción de un pequeño fragmento; escisión = extirpación completa si es pequeña; aspiración = obtiene células con aguja fina (23-25), estudio citológico; aguja gruesa = obtiene porción de tejido.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-B-009",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Cirugía diagnóstica: biopsias",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 9",
   "enunciado": "Biopsia que consiste en la extracción completa de la lesión, teniendo en cuenta que, al ser una biopsia, no tiene márgenes oncológicos:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia core"
    },
    {
     "id": "b",
     "texto": "Biopsia escisional"
    },
    {
     "id": "c",
     "texto": "Curetaje"
    },
    {
     "id": "d",
     "texto": "BAAF"
    },
    {
     "id": "e",
     "texto": "Biopsia incisional"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "extracción completa de la lesión",
   "por_que_correcta": "Escisión = extirpación completa de la lesión cuando es pequeña. Es diagnóstica, no un tratamiento, por eso no se planifica con márgenes oncológicos.",
   "por_que_no": {
    "a": "La biopsia core (aguja gruesa) obtiene un cilindro de tejido, no la lesión completa.",
    "c": "El curetaje se practica en cavidad uterina o hueso; no extrae la lesión entera.",
    "d": "La BAAF obtiene células para citología. Sería la respuesta si el enunciado hablara de células con aguja fina.",
    "e": "La incisional saca solo un fragmento. Sería correcta si dijera «extracción parcial»."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 62): «Escisión: extirpación completa de la lesión, si es pequeña»; curetaje en cavidad uterina o hueso.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-B-010",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Cirugía diagnóstica: estudio intraoperatorio",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 10",
   "enunciado": "El estudio citológico que se realiza de manera intraoperatoria y que muchas veces permite tomar decisiones quirúrgicas se denomina:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia por sacabocado"
    },
    {
     "id": "b",
     "texto": "Impronta"
    },
    {
     "id": "c",
     "texto": "Biopsia incisional con aguja fina"
    },
    {
     "id": "d",
     "texto": "Ablación por radiofrecuencia"
    },
    {
     "id": "e",
     "texto": "Oráculo"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "estudio citológico que se realiza de manera intraoperatoria",
   "por_que_correcta": "La impronta es el estudio citológico intraoperatorio. Tu docente la pone junto con la congelación: «Ambas sirven para la toma de decisiones quirúrgicas intraoperatorias».",
   "por_que_no": {
    "a": "El sacabocado (punch) toma un cilindro de piel; no es un estudio intraoperatorio.",
    "c": "La «biopsia incisional con aguja fina» mezcla dos técnicas distintas y no es intraoperatoria.",
    "d": "La radiofrecuencia es un tratamiento ablativo, no un estudio diagnóstico.",
    "e": "«Oráculo» no es ninguna técnica: es un distractor."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 22-23): «Congelación - Impronta: se requiere la obtención intraoperatoria de un fragmento de tejido… Ambas sirven para la toma de decisiones quirúrgicas intraoperatorias».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 23.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 22."
   ]
  },
  {
   "id": "ESP1-B-011",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Neoadyuvancia y adyuvancia",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 11",
   "enunciado": "El tratamiento neoadyuvante implica:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Es el manejo exclusivo, sin tener en cuenta la cirugía posterior"
    },
    {
     "id": "b",
     "texto": "Es el tratamiento que se da previamente al tratamiento principal"
    },
    {
     "id": "c",
     "texto": "Es el tratamiento coadyuvante a la cirugía"
    },
    {
     "id": "d",
     "texto": "Implica los tratamientos que se dan después de la cirugía"
    },
    {
     "id": "e",
     "texto": "Es el manejo de la enfermedad antes y después de la cirugía"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "El tratamiento neoadyuvante",
   "por_que_correcta": "La secuencia de tu docente es: neoadyuvante → tratamiento primario → adyuvante. Neoadyuvante es lo que se da antes del tratamiento principal.",
   "por_que_no": {
    "a": "Si fuera el único tratamiento, sin cirugía posterior, sería tratamiento definitivo o exclusivo, no neoadyuvante.",
    "c": "«Coadyuvante a la cirugía» no define el momento; la neoadyuvancia se define por ir antes.",
    "d": "Lo que se da después de la cirugía es la adyuvancia. Sería la respuesta si preguntaran por el tratamiento adyuvante.",
    "e": "Antes y después de la cirugía es un esquema perioperatorio, no solo neoadyuvante."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 49): «Tratamiento primario, neoadyuvancia y adyuvancia: Neoadyuvante → Primario → Adyuvante».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 49."
   ]
  },
  {
   "id": "ESP1-B-012",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Márgenes de resección",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 13",
   "enunciado": "El principio quirúrgico oncológico básico de obtener márgenes de resección libres del tumor primario busca principalmente:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Evitar la recurrencia local de la enfermedad"
    },
    {
     "id": "b",
     "texto": "Disminuir la tasa de complicaciones postoperatorias"
    },
    {
     "id": "c",
     "texto": "Garantizar una cirugía R1"
    },
    {
     "id": "d",
     "texto": "Aumentar la sobrevida global"
    },
    {
     "id": "e",
     "texto": "Disminuir la metástasis a distancia"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "márgenes de resección libres del tumor primario",
   "por_que_correcta": "El margen controla la enfermedad local. Tu docente lo resume: extender la resección por encima y por debajo del tumor, «MÁRGENES LIBRES: evitar que recurra».",
   "por_que_no": {
    "b": "Ampliar márgenes no reduce complicaciones; a veces las aumenta.",
    "c": "Un margen libre da una cirugía R0. R1 es justo lo contrario: margen con tumor microscópico.",
    "d": "La sobrevida global depende sobre todo de la enfermedad sistémica; no es el objetivo directo del margen.",
    "e": "La metástasis a distancia se controla con tratamiento sistémico, no con el margen local."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 10): «extender su línea de resección lo suficiente por encima y por debajo del tumor — MÁRGENES LIBRES — Evitar que recurra».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 10.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 57."
   ]
  },
  {
   "id": "ESP1-B-013",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Factores que condicionan el tratamiento: localización",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 14",
   "enunciado": "Otro factor que condiciona el tratamiento quirúrgico oncológico es la localización tumoral. Paciente de 54 años con adenocarcinoma de ángulo esplénico; el tratamiento quirúrgico que le corresponde es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Transversectomía"
    },
    {
     "id": "b",
     "texto": "Hemicolectomía izquierda"
    },
    {
     "id": "c",
     "texto": "Hemicolectomía derecha"
    },
    {
     "id": "d",
     "texto": "Colectomía total + ileostomía definitiva"
    },
    {
     "id": "e",
     "texto": "Resección anterior de recto-sigmoides"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "adenocarcinoma de ángulo esplénico",
   "por_que_correcta": "El ángulo esplénico entra en el territorio de la hemicolectomía izquierda (ligadura de la cólica izquierda o de la mesentérica inferior). En las diapositivas, la hemicolectomía izquierda moviliza el colon hasta la flexura o ángulo esplénico.",
   "por_que_no": {
    "a": "La transversectomía es para el colon transverso medio.",
    "c": "La hemicolectomía derecha es para ciego, colon ascendente y ángulo hepático. Lo sería si el tumor estuviera en el ángulo hepático.",
    "d": "La colectomía total se reserva para tumores sincrónicos o síndromes hereditarios como la poliposis adenomatosa familiar.",
    "e": "La resección anterior es para recto-sigmoides; no alcanza el ángulo esplénico."
   },
   "fuentes": {
    "docente": "Diapositivas de Colon 2.ª parte (diap. 48): hemicolectomía izquierda — «incidir la línea de Toldt hasta la flexura o ángulo esplénico».",
    "guia": "Guía, p. 36: «Hemicolectomía izquierda (ángulo esplénico, descendente): ligadura de la cólica izquierda o de la mesentérica inferior».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 48.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-014",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Rol de la cirugía: paliativa",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 48 (clave resaltada); banco consolidado de Oncología, preg. 15",
   "enunciado": "La siguiente definición: «Es una operación cuyo objetivo es reducir los síntomas de un proceso patológico o enfermedad sin llegar a la curación, atenuando el síntoma y aumentando la calidad de vida del paciente», corresponde a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cirugía curativa"
    },
    {
     "id": "b",
     "texto": "Cirugía electiva"
    },
    {
     "id": "c",
     "texto": "Cirugía paliativa"
    },
    {
     "id": "d",
     "texto": "Cirugía reparadora"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "sin llegar a la curación, atenuando el síntoma",
   "por_que_correcta": "Es la cirugía paliativa: en enfermedad avanzada, la resección o la derivación buscan aliviar al paciente aunque quede tumor residual.",
   "por_que_no": {
    "a": "La curativa busca eliminar toda la enfermedad (R0). Lo sería si el objetivo fuera curar.",
    "b": "«Electiva» habla del momento (programada), no del objetivo.",
    "d": "La reparadora o reconstructiva corrige defectos anatómicos después del tratamiento definitivo."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 48). Diapositivas de Principios (diap. 72): «Cirugía paliativa: cuando hay enfermedad avanzada, la resección del tumor está destinada a aliviar los sufrimientos del paciente, aunque quede tumor residual».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 73."
   ]
  },
  {
   "id": "ESP1-B-015",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Metástasis",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 1; banco consolidado de Oncología, preg. 16",
   "enunciado": "Sitio más frecuente de metástasis para los órganos sólidos:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Bazo"
    },
    {
     "id": "b",
     "texto": "Estómago"
    },
    {
     "id": "c",
     "texto": "Pulmón"
    },
    {
     "id": "d",
     "texto": "Hígado"
    },
    {
     "id": "e",
     "texto": "Ganglios linfáticos"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "Sitio más frecuente de metástasis",
   "por_que_correcta": "El hígado es uno de los sitios más frecuentes de metástasis, con cerca de una cuarta parte de todos los casos. Por eso tu docente le dedica un apartado propio a la cirugía de metástasis hepáticas colorrectales.",
   "por_que_no": {
    "a": "El bazo es un sitio de metástasis excepcional.",
    "b": "El estómago rara vez recibe metástasis; es más bien órgano primario.",
    "c": "El pulmón es el otro gran filtro de metástasis hematógenas, sobre todo de sarcomas. Sería la respuesta si preguntaran por sarcomas.",
    "e": "Los ganglios son el destino más frecuente de la diseminación linfática, pero no son un «órgano sólido». Sería correcta si se quitara «órganos sólidos»."
   },
   "fuentes": {
    "docente": "Clave sin marca en el banqueo. Diapositivas de Principios (diap. 71): cirugía de metástasis pulmonares de sarcoma y de metástasis hepática colorrectal.",
    "guia": null,
    "libro": "StatPearls (Griscom y Wolf, 2023): «el hígado es uno de los sitios más frecuentes de metástasis, con casi el 25 % de todos los casos» (traducción propia).",
    "discrepancia": false
   },
   "referencias": [
    "Griscom JT, Wolf PS. Liver Metastasis. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023. Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK553118/",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 71."
   ]
  },
  {
   "id": "ESP1-B-016",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Evaluación preoperatoria cardiovascular",
   "origen": "banco",
   "procedencia": "Banqueo MedClub UPAO 2025-20; banco consolidado de Oncología, preg. 24",
   "enunciado": "Paciente varón de 72 años, IMC 31, EPOC moderada, fibrilación auricular anticoagulada con apixabán, IAM hace más de un año, ECOG 1, ASA III. Será sometido a colectomía derecha por adenocarcinoma de ciego resecable; ECG y capacidad funcional > 4 MET. ¿Cuál es el siguiente paso más apropiado en la estratificación cardiovascular perioperatoria?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ecocardiograma transtorácico rutinario preoperatorio"
    },
    {
     "id": "b",
     "texto": "Prueba de esfuerzo farmacológica pese a > 4 MET"
    },
    {
     "id": "c",
     "texto": "Continuar el beta-bloqueo si ya está indicado y planificar el control de frecuencia"
    },
    {
     "id": "d",
     "texto": "Suspender la anticoagulación 48 h sin terapia puente y reanudarla a las 24 h"
    },
    {
     "id": "e",
     "texto": "Coronariografía diagnóstica previa a la cirugía"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "capacidad funcional > 4 MET",
   "por_que_correcta": "Con capacidad funcional de 4 MET o más no se piden pruebas de estrés: solo se indican si cambian la conducta. Lo que sí corresponde es no suspender el beta-bloqueador si ya lo toma.",
   "por_que_no": {
    "a": "El ecocardiograma de rutina no está indicado sin un hallazgo nuevo (soplo, disnea, insuficiencia cardiaca). Lo sería si hubiera síntomas nuevos.",
    "b": "La prueba de esfuerzo no se indica cuando la capacidad funcional es adecuada. Sería razonable con < 4 MET y si el resultado cambiara la conducta.",
    "d": "El manejo de la anticoagulación no es un paso de la estratificación cardiovascular, y la pausa depende de la función renal y del riesgo de sangrado.",
    "e": "La coronariografía previa solo se plantea si hay indicación coronaria propia, independiente de la cirugía."
   },
   "fuentes": {
    "docente": "Clave sin marca (anotaciones a mano en el banqueo MedClub). El tema no está en las diapositivas de Oncología.",
    "guia": null,
    "libro": "Guía AHA/ACC 2024 de manejo cardiovascular perioperatorio (resumen de Cohn, CCJM 2025): sin pruebas de estrés si la capacidad funcional es adecuada; continuar los beta-bloqueadores si el paciente ya los toma.",
    "discrepancia": false
   },
   "referencias": [
    "Thompson A, Fleischmann KE, Smilowitz NR, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery. Circulation. 2024;150:e351-e442. Resumen: Cohn SL. Cleve Clin J Med. 2025;92(4):213-219. doi:10.3949/ccjm.92a.24125. Disponible en: https://www.ccjm.org/content/92/4/213"
   ]
  },
  {
   "id": "ESP1-B-017",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Nódulo tiroideo: estudio inicial",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 21",
   "enunciado": "En un tumor pétreo dependiente del lóbulo tiroideo derecho de 2 × 2 cm, se debe realizar primero:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia por aspiración con aguja fina"
    },
    {
     "id": "b",
     "texto": "Gammagrafía tiroidea"
    },
    {
     "id": "c",
     "texto": "Resonancia magnética de cuello"
    },
    {
     "id": "d",
     "texto": "Examen físico y ecografía de cuello"
    },
    {
     "id": "e",
     "texto": "Radioyodo"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "se debe realizar primero",
   "por_que_correcta": "La secuencia ante un nódulo tiroideo es fija: clínica y TSH, luego ecografía cervical, y recién después punción según lo que muestre la ecografía. La ecografía es la que decide si se punza y dónde.",
   "por_que_no": {
    "a": "La BAAF va después de la ecografía, guiada por sus características. Sería la respuesta si ya tuviera una ecografía sospechosa.",
    "b": "La gammagrafía solo se pide si la TSH está baja (nódulo posiblemente funcional). Sería correcta con TSH suprimida.",
    "c": "La resonancia no es el estudio inicial del nódulo; se reserva para enfermedad localmente avanzada.",
    "e": "El radioyodo es tratamiento, no diagnóstico, y solo después de tiroidectomía por cáncer diferenciado."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 86): con TSH baja se pide gammagrafía; la BAAF se guía por ecografía según criterios ATA/TI-RADS.",
    "guia": "Guía, p. 25: «Secuencia fija: TSH → ecografía cervical → punción con aguja fina según las características ecográficas y el tamaño».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 86."
   ]
  },
  {
   "id": "ESP1-B-018",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cáncer de tiroides: generalidades",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 25",
   "enunciado": "Sobre los tumores malignos del tiroides, señale cuál de los siguientes razonamientos NO es correcto:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El carcinoma medular tiroideo no procede del epitelio folicular tiroideo"
    },
    {
     "id": "b",
     "texto": "Algunos adenomas tiroideos pueden contener pseudopapilas y confundirse con las papilas del carcinoma papilar"
    },
    {
     "id": "c",
     "texto": "El riesgo de linfoma tiroideo es mucho más alto en la tiroiditis de Hashimoto que en el bocio nodular"
    },
    {
     "id": "d",
     "texto": "El carcinoma folicular requiere para su identificación invasión capsular, de los vasos sanguíneos o del tiroides adyacente"
    },
    {
     "id": "e",
     "texto": "La tiroglobulina tiene valor en el diagnóstico del carcinoma tiroideo diferenciado"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "NO es correcto",
   "por_que_correcta": "La tiroglobulina la produce el tejido tiroideo normal y el tumoral, así que no sirve para diagnosticar. La ATA no la recomienda para evaluar nódulos; su uso es en el seguimiento postoperatorio.",
   "por_que_no": {
    "a": "Es correcta: tu docente separa los tumores derivados del epitelio folicular de los derivados de las células C, que dan el medular.",
    "b": "Es una afirmación aceptada como correcta en el pretest; no es la falsa.",
    "c": "Es una afirmación aceptada como correcta; el error está en otra alternativa.",
    "d": "Es correcta: el diagnóstico de carcinoma folicular depende de demostrar invasión, no del aspecto de las células."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 61): clasificación en «derivados del epitelio folicular» y «derivados de las células C o parafoliculares (carcinoma medular)».",
    "guia": null,
    "libro": "ATA (Thyroglobulin Assays, 2020): «la medición de Tg para la evaluación inicial de nódulos sospechosos no se recomienda» (traducción propia); se usa en el postoperatorio para vigilar enfermedad residual o recurrente.",
    "discrepancia": false
   },
   "referencias": [
    "American Thyroid Association. Thyroglobulin (Tg) Assays [Internet]. ATA; 2020. Disponible en: https://www.thyroid.org/wp-content/uploads/publications/lab-services/ata-thyroglobulin-tg-assays.pdf",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 61."
   ]
  },
  {
   "id": "ESP1-B-019",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cáncer de tiroides: seguimiento",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 26",
   "enunciado": "La determinación de tiroglobulina sérica tiene su mayor utilidad en el seguimiento de pacientes:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tratados con tiroidectomía total por cáncer anaplásico de tiroides"
    },
    {
     "id": "b",
     "texto": "Con hipertiroidismo tratados con yodo radiactivo"
    },
    {
     "id": "c",
     "texto": "Con tiroiditis de Riedel"
    },
    {
     "id": "d",
     "texto": "Tratados con tiroidectomía total por cáncer diferenciado de tiroides"
    },
    {
     "id": "e",
     "texto": "Tratados con hemitiroidectomía por cáncer diferenciado"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "seguimiento de pacientes",
   "por_que_correcta": "Tras la tiroidectomía total (con o sin radioyodo) por cáncer diferenciado ya no queda tejido que produzca tiroglobulina: una Tg que sube indica enfermedad residual o recurrente. Por eso los algoritmos del docente la miden en el seguimiento junto con los anticuerpos antiTg.",
   "por_que_no": {
    "a": "El anaplásico es indiferenciado y no se sigue con tiroglobulina.",
    "b": "En el hipertiroidismo tratado queda tejido tiroideo normal que produce Tg; no es un marcador útil ahí.",
    "c": "La tiroiditis de Riedel es benigna; no tiene sentido vigilarla con Tg.",
    "e": "Tras una hemitiroidectomía queda el otro lóbulo produciendo Tg, lo que dificulta interpretarla. Sería útil si se completara la tiroidectomía."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 211): tras «tiroidectomía total con RAI», seguimiento con examen físico, ecografía de cuello, TSH y «medición de Tg y anticuerpos antiTg».",
    "guia": null,
    "libro": "ATA (2020): la Tg sérica se usa en el postoperatorio para vigilar enfermedad residual o recurrente.",
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 211.",
    "American Thyroid Association. Thyroglobulin (Tg) Assays [Internet]. ATA; 2020. Disponible en: https://www.thyroid.org/wp-content/uploads/publications/lab-services/ata-thyroglobulin-tg-assays.pdf"
   ]
  },
  {
   "id": "ESP1-B-020",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cáncer de tiroides: histología",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 27",
   "enunciado": "El estudio microscópico de un nódulo tiroideo muestra nidos y trabéculas de células poligonales y fusiformes inmersas en un estroma con sustancia amiloide. ¿Qué diagnóstico realizaría?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Carcinoma anaplásico"
    },
    {
     "id": "b",
     "texto": "Carcinoma folicular"
    },
    {
     "id": "c",
     "texto": "Carcinoma papilar"
    },
    {
     "id": "d",
     "texto": "Carcinoma de células de Hürthle"
    },
    {
     "id": "e",
     "texto": "Carcinoma medular"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "estroma con sustancia amiloide",
   "por_que_correcta": "El depósito de amiloide derivado de la calcitonina es característico del carcinoma medular, que se origina en las células C parafoliculares.",
   "por_que_no": {
    "a": "El anaplásico muestra células muy pleomórficas, sin amiloide. Sería la respuesta con células gigantes y crecimiento explosivo.",
    "b": "El folicular forma folículos y se define por invasión capsular o vascular, sin amiloide.",
    "c": "El papilar se reconoce por papilas y núcleos claros con hendiduras e inclusiones. Sería la respuesta con esos núcleos.",
    "d": "El de células de Hürthle (oncocítico) tiene células con citoplasma eosinófilo granular, sin amiloide."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 61): el carcinoma medular es el derivado de las células C o parafoliculares. El amiloide no figura en el texto de las diapositivas.",
    "guia": null,
    "libro": "StatPearls, Medullary Thyroid Cancer (2024): «los tumores pueden mostrar depósitos de amiloide derivado de la calcitonina» (traducción propia); se originan en las células C parafoliculares.",
    "discrepancia": false
   },
   "referencias": [
    "Ramos Santillan V, Master SR, Menon G, Burns B. Medullary Thyroid Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024. Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459354/",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 61."
   ]
  },
  {
   "id": "ESP1-B-021",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Carcinoma medular: tratamiento",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 28",
   "enunciado": "¿Cuál de los siguientes tratamientos es el más adecuado en el carcinoma medular de tiroides sin metástasis a distancia?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tiroxina en dosis supresoras de TSH"
    },
    {
     "id": "b",
     "texto": "Tiroidectomía subtotal más I-131"
    },
    {
     "id": "c",
     "texto": "Tiroidectomía total más linfadenectomía central"
    },
    {
     "id": "d",
     "texto": "Quimioterapia con ciclofosfamida"
    },
    {
     "id": "e",
     "texto": "Quimioterapia con adriamicina"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "carcinoma medular de tiroides sin metástasis a distancia",
   "por_que_correcta": "Tu docente lo resume en su tabla de tratamiento: en cáncer medular, tiroidectomía total más disección de ganglios cervicales centrales, aun con ganglios N0. Las células C no captan yodo ni dependen de la TSH.",
   "por_que_no": {
    "a": "La supresión de TSH sirve en el cáncer diferenciado, no en el medular.",
    "b": "El I-131 no funciona en el medular porque no capta yodo, y la subtotal es insuficiente.",
    "d": "La quimioterapia no es el tratamiento de elección del medular localizado.",
    "e": "La quimioterapia con adriamicina no es tratamiento curativo del medular localizado."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 85): «En cáncer medular: tiroidectomía total + disección de ganglios cervicales centrales (aún con ganglios N0)».",
    "guia": "Guía, p. 25: el medular «produce calcitonina y no capta yodo, por lo que no responde al yodo radiactivo».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 85.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-B-022",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Carcinoma papilar: diagnóstico",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 29",
   "enunciado": "Paciente de 30 años al que se realiza punción-aspiración de una adenopatía laterocervical cuyo diagnóstico anatomopatológico es metástasis de carcinoma. La descripción microscópica corresponde a una proliferación celular en grupos epiteliales centrados por un eje vascular; las células tienen núcleos muy claros, con hendiduras longitudinales e inclusiones. El origen más probable es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Carcinoma de cavum"
    },
    {
     "id": "b",
     "texto": "Carcinoma de glándula salival"
    },
    {
     "id": "c",
     "texto": "Carcinoma papilar de tiroides"
    },
    {
     "id": "d",
     "texto": "Carcinoma de suelo de la boca"
    },
    {
     "id": "e",
     "texto": "Carcinoma de amígdala"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "núcleos muy claros, con hendiduras longitudinales e inclusiones",
   "por_que_correcta": "Núcleos claros, hendiduras nucleares e inclusiones intranucleares son los rasgos nucleares que definen el carcinoma papilar. Además, el papilar se disemina por vía linfática a los compartimentos cervicales.",
   "por_que_no": {
    "a": "El carcinoma de cavum (nasofaringe) es epidermoide o indiferenciado, sin esos núcleos.",
    "b": "Los carcinomas de glándula salival no tienen ese patrón nuclear característico.",
    "d": "El de suelo de boca es epidermoide (queratinización, puentes intercelulares).",
    "e": "El de amígdala también es epidermoide. Sería la respuesta con queratinización y antecedente de tabaco o VPH."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (respuesta del intento). Guía, p. 25: «El papilar se disemina preferentemente por vía linfática al compartimento central y a los laterales».",
    "guia": null,
    "libro": "Lee y Suh (1991): núcleos con hendiduras, inclusiones citoplásmicas intranucleares y núcleos claros son criterios diagnósticos del carcinoma papilar de tiroides.",
    "discrepancia": false
   },
   "referencias": [
    "Lee CH, Suh KS. Grooved nuclei in thyroid papillary carcinoma. Korean J Pathol. 1991;25(3):185-95. Disponible en: https://www.jpatholtm.org/journal/view.php?number=892",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-B-023",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cáncer de tiroides: estadificación",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 30",
   "enunciado": "Mujer de 23 años con masa palpable cervical anterior; la ecografía muestra una lesión sospechosa de 2,2 cm en el lóbulo izquierdo y la citología informa carcinoma papilar. En la tiroidectomía se evidencia que el tumor infiltra el músculo omohioideo. Según la evaluación del tumor primario (T), le corresponde la categoría:",
   "alternativas": [
    {
     "id": "a",
     "texto": "T1"
    },
    {
     "id": "b",
     "texto": "T2"
    },
    {
     "id": "c",
     "texto": "T3a"
    },
    {
     "id": "d",
     "texto": "T3b"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "el tumor infiltra el músculo omohioideo",
   "por_que_correcta": "T3b es el tumor de cualquier tamaño con extensión extratiroidea grosera que invade solo los músculos de la corredera (esternohioideo, esternotiroideo, tirohioideo u omohioideo). El tamaño de 2,2 cm deja de importar.",
   "por_que_no": {
    "a": "T1 es ≤ 2 cm limitado a la tiroides.",
    "b": "T2 es > 2 a 4 cm limitado a la tiroides. Sería la respuesta si no infiltrara el omohioideo.",
    "c": "T3a es > 4 cm limitado a la tiroides."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 65): «T3b: tumor de cualquier tamaño con extensión extratiroidea grosera invadiendo SOLAMENTE los músculos de la corredera (esternohioideo, esternotiroideo, tirohioideo u omohioideo)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 65."
   ]
  },
  {
   "id": "ESP1-B-024",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cáncer de tiroides: estadificación",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 31",
   "enunciado": "Varón de 60 años con carcinoma papilar de tiroides de 4 cm que infiltra la tráquea, con 3 ganglios metastásicos del compartimento central (nivel VI) y sin metástasis a distancia. El estadio clínico es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Estadio I"
    },
    {
     "id": "b",
     "texto": "Estadio II"
    },
    {
     "id": "c",
     "texto": "Estadio III"
    },
    {
     "id": "d",
     "texto": "Estadio IVB"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "Varón de 60 años",
   "por_que_correcta": "La invasión de tráquea es T4a. En el carcinoma papilar o folicular de 55 años o más, T4a con cualquier N y M0 es estadio III.",
   "por_que_no": {
    "a": "Estadio I en ≥ 55 años es T1-T2 N0 M0. Sería correcto si el tumor fuera pequeño y sin ganglios.",
    "b": "Estadio II en ≥ 55 años es T3 N0 o T1-T3 N1. Sería correcto si no invadiera la tráquea.",
    "d": "IVB exige metástasis a distancia (M1)."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 73) y de Principios (diap. 42): carcinoma papilar o folicular ≥ 55 años — «Estadio III T4a Cualquier N M0», «Estadio IVA T4b Cualquier N M0», «Estadio IVB Cualquier T Cualquier N M1»; T4 incluye invasión de tráquea (diap. 65).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 73.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 65."
   ]
  },
  {
   "id": "ESP1-B-025",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Nódulo tiroideo: ecografía",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología y E-Oncología; banco consolidado de Oncología, preg. 32",
   "enunciado": "Según la clasificación TI-RADS en la evaluación de un nódulo tiroideo, el riesgo de malignidad para la categoría 4a es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Menos del 5 % de malignidad"
    },
    {
     "id": "b",
     "texto": "Malignidad de 5-10 %"
    },
    {
     "id": "c",
     "texto": "Malignidad de 10-80 %"
    },
    {
     "id": "d",
     "texto": "Mayor del 80 % de malignidad"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "categoría 4a",
   "por_que_correcta": "En las diapositivas, el patrón TIRADS 4A corresponde a «baja sospecha, riesgo de cáncer 5-10 %».",
   "por_que_no": {
    "a": "< 5 % corresponde a TIRADS 3 (probablemente benigno).",
    "c": "10-80 % es el rango global de la categoría 4b-4c; no de la 4a.",
    "d": "> 80 % corresponde a TIRADS 5 (probablemente maligno)."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 155): «Patrón neoplásico simple: 4A… Hallazgos ecográficos: BAJA SOSPECHA. Riesgo de cáncer 5-10 %».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 155."
   ]
  },
  {
   "id": "ESP1-B-026",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Nódulo tiroideo: ecografía",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 33",
   "enunciado": "Es una característica sonográfica sospechosa de malignidad en un nódulo tiroideo:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Más alto que ancho en el plano transversal"
    },
    {
     "id": "b",
     "texto": "Todas son características sospechosas de malignidad"
    },
    {
     "id": "c",
     "texto": "Microcalcificaciones en el interior del nódulo"
    },
    {
     "id": "d",
     "texto": "Hipoecoico"
    },
    {
     "id": "e",
     "texto": "Bordes irregulares o márgenes infiltrativos"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "característica sonográfica sospechosa de malignidad",
   "por_que_correcta": "Las cuatro características (más alto que ancho, microcalcificaciones, hipoecogenicidad y bordes irregulares) son criterios de sospecha que el docente revisa uno por uno en la ecografía tiroidea.",
   "por_que_no": {
    "a": "Es sospechosa, pero no es la única: por eso la respuesta es «todas».",
    "c": "Las microcalcificaciones son sospechosas, pero no la única característica.",
    "d": "La hipoecogenicidad es sospechosa, pero no la única.",
    "e": "Los bordes irregulares son sospechosos, pero no los únicos."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea: ecogenicidad (diap. 108-110), microcalcificaciones (diap. 140) y bordes (diap. 142) como criterios ecográficos; patrones de sospecha ATA (diap. 145).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 140.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 142.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 145."
   ]
  },
  {
   "id": "ESP1-B-027",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Radioyodo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 34",
   "enunciado": "Previamente a la administración de I-131 para destruir tejido tiroideo residual tras una tiroidectomía por cáncer folicular, ¿qué debemos hacer?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No variar la dosis de hormona tiroidea, para evitar que la TSH varíe"
    },
    {
     "id": "b",
     "texto": "Aumentar la dosis de hormona tiroidea para disminuir la TSH"
    },
    {
     "id": "c",
     "texto": "Suspender el tratamiento con hormona tiroidea para elevar la TSH"
    },
    {
     "id": "d",
     "texto": "Medir tiroglobulina para fijar la dosis de I-131"
    },
    {
     "id": "e",
     "texto": "Administrar solución de Lugol 3 semanas antes"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "Previamente a la administración de I-131",
   "por_que_correcta": "El remanente solo capta yodo si la TSH está alta. Tus diapositivas indican retirar la hormona tiroidea para lograr TSH > 30 mU/L (o usar TSH recombinante).",
   "por_que_no": {
    "a": "Mantener la dosis deja la TSH baja y el remanente no capta el yodo.",
    "b": "Bajar la TSH haría justo lo contrario de lo que se busca.",
    "d": "La Tg se mide en el control, pero no es lo que se hace para preparar la captación.",
    "e": "El Lugol satura de yodo frío la glándula e impide captar el I-131; además, el docente indica dieta baja en yodo antes."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 206): «se les puede retirar la hormona tiroidea para permitir una elevación adecuada de TSH (> 30 mU/L), o prepararse usando… tirotropina alfa»; diap. 205: «Suspender 4 semanas las hormonas tiroideas».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 206.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 205."
   ]
  },
  {
   "id": "ESP1-B-028",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Radioyodo",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 25 (clave resaltada); banco consolidado de Oncología, preg. 35",
   "enunciado": "¿Cuál no se considera una indicación para tratamiento de radioyodo I-131 luego de una tiroidectomía total por carcinoma papilar clásico de tiroides localizado?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Metástasis a distancia"
    },
    {
     "id": "b",
     "texto": "Metástasis ganglionar cervical"
    },
    {
     "id": "c",
     "texto": "Todas se consideran indicaciones para tratamiento de radioyodo I-131"
    },
    {
     "id": "d",
     "texto": "Tiroglobulina > 10 ng/mL no estimulada postoperatoriamente a las 6-12 semanas del postoperatorio"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "¿Cuál no se considera una indicación",
   "por_que_correcta": "Las tres situaciones indican enfermedad que justifica radioyodo: metástasis a distancia, ganglios cervicales y tiroglobulina postoperatoria elevada. Ninguna queda fuera.",
   "por_que_no": {
    "a": "La metástasis a distancia sí es indicación de radioyodo.",
    "b": "Los ganglios cervicales metastásicos sí son indicación.",
    "d": "Una Tg alta a las 6-12 semanas indica tejido persistente y sí es indicación."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 25). Diapositivas de Patología tiroidea (diap. 230): el yodo radiactivo NO está típicamente recomendado solo si están todos los criterios de bajo riesgo (tumor < 2 cm, intratiroideo, N0, Tg < 1 ng/mL).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 230."
   ]
  },
  {
   "id": "ESP1-B-029",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Radioyodo",
   "origen": "banco",
   "procedencia": "E-Oncología (cuestionario «Virtual»), p. 9; banco consolidado de Oncología, preg. 36",
   "enunciado": "¿Cuál es la indicación RELATIVA o recomendación selectiva para que un paciente operado de tiroidectomía por carcinoma papilar reciba tratamiento con radioyodo I-131?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tumor primario más grande < 2 cm"
    },
    {
     "id": "b",
     "texto": "Tumor infrahioideo"
    },
    {
     "id": "c",
     "texto": "Invasión linfática"
    },
    {
     "id": "d",
     "texto": "Tumor unifocal"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "indicación RELATIVA o recomendación selectiva",
   "por_que_correcta": "La invasión vascular o linfática pertenece al grupo de factores con los que el radioyodo se recomienda selectivamente. En cambio, tumor < 2 cm, intratiroideo y sin invasión vascular son criterios para no darlo.",
   "por_que_no": {
    "a": "Tumor < 2 cm es criterio de bajo riesgo: el docente lo pone entre las condiciones en que el radioyodo NO se recomienda.",
    "b": "«Infrahioideo» no es un criterio de indicación de radioyodo.",
    "d": "Ser unifocal no indica radioyodo; es más bien un rasgo de bajo riesgo."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 230): «YRA NO está típicamente recomendado si TODAS: tumor < 2 cm, intratiroideo, no invasión vascular, cN0…»; «YRA SELECTIVAMENTE recomendado si CUALQUIERA: tamaño grande… invasión…». En E-Oncología la alternativa marcada es «Invasión linfática».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 230."
   ]
  },
  {
   "id": "ESP1-B-030",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Radioyodo",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 18 (clave resaltada); banco consolidado de Oncología, preg. 37",
   "enunciado": "Paciente de 32 años, se le realizó tiroidectomía total cuyo resultado histopatológico arrojó: carcinoma papilar tipo clásico; tamaño tumoral de 4 cm, invasión linfovascular y perineural presente, bordes quirúrgicos libres. No adenopatías ni metástasis. Debería realizársele como tratamiento complementario:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Radioterapia"
    },
    {
     "id": "b",
     "texto": "Hormonoterapia únicamente"
    },
    {
     "id": "c",
     "texto": "Quimioterapia"
    },
    {
     "id": "d",
     "texto": "Rastreo y ablación con yodo 131"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "invasión linfovascular y perineural presente",
   "por_que_correcta": "Es un carcinoma diferenciado de 4 cm con invasión linfovascular: entra en el grupo en que el radioyodo se recomienda. La secuencia es tiroidectomía total → rastreo y ablación con I-131 → levotiroxina.",
   "por_que_no": {
    "a": "La radioterapia externa no es el complemento estándar del papilar resecado.",
    "b": "La levotiroxina se da igual, pero «únicamente» deja sin tratar el riesgo de enfermedad residual. Sería suficiente en un microcarcinoma de bajo riesgo.",
    "c": "El papilar no se trata con quimioterapia adyuvante."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 18). Diapositivas de Patología tiroidea (diap. 230): radioyodo selectivamente recomendado con tumor grande o invasión; diap. 186: el objetivo de la ablación es eliminar el remanente.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 230.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186."
   ]
  },
  {
   "id": "ESP1-B-031",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Tiroidectomía: complicaciones",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 23 (clave resaltada); banco consolidado de Oncología, preg. 38",
   "enunciado": "Al disecar el polo superior del lóbulo tiroideo, sea derecho o izquierdo, la estructura que podría lesionarse sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nervio laríngeo recurrente"
    },
    {
     "id": "b",
     "texto": "Nervio de Bell"
    },
    {
     "id": "c",
     "texto": "Nervio toracodorsal"
    },
    {
     "id": "d",
     "texto": "Nervio laríngeo superior, rama externa"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "polo superior del lóbulo tiroideo",
   "por_que_correcta": "La rama externa del laríngeo superior corre junto a los vasos del polo superior. Por eso el docente indica ligar esos vasos lo más cerca posible de la cápsula tiroidea.",
   "por_que_no": {
    "a": "El recurrente está en riesgo en la disección del polo inferior y el surco traqueoesofágico, no del polo superior.",
    "b": "El nervio de Bell (torácico largo) se lesiona en la disección axilar, no en la tiroidectomía.",
    "c": "El toracodorsal también es de la axila."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 23). Diapositivas de Patología tiroidea (diap. 264): «los vasos polares superiores… se ligan lo más cerca posible de la cápsula tiroidea para evitar lesiones en la rama externa del nervio laríngeo superior».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 264.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 262."
   ]
  },
  {
   "id": "ESP1-B-032",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cavidad oral",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 39",
   "enunciado": "¿Qué lesión de la mucosa oral debe considerarse precancerosa?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Estomatitis aftosa recidivante"
    },
    {
     "id": "b",
     "texto": "Enfermedad de Behçet"
    },
    {
     "id": "c",
     "texto": "Leucoplasia"
    },
    {
     "id": "d",
     "texto": "Candidiasis oral"
    },
    {
     "id": "e",
     "texto": "Pénfigo"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "lesión de la mucosa oral",
   "por_que_correcta": "Tu docente pone la leucoplasia como ejemplo de lesión precancerosa de mucosa, en la que la cirugía profiláctica «es procedimiento obligado».",
   "por_que_no": {
    "a": "Las aftas recidivantes son lesiones inflamatorias benignas sin potencial maligno.",
    "b": "El Behçet da úlceras orales por vasculitis, no lesiones precancerosas.",
    "d": "La candidiasis es una infección; da placas que se desprenden al raspado.",
    "e": "El pénfigo es una enfermedad ampollar autoinmune, no premaligna."
   },
   "fuentes": {
    "docente": "Diapositivas de Principios (diap. 67): «Prevención o cirugía profiláctica… lesiones precancerosas… En lesiones de piel (queratosis) o mucosa (leucoplasia) es procedimiento obligado».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 67."
   ]
  },
  {
   "id": "ESP1-B-033",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cabeza y cuello: factores de riesgo",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 40",
   "enunciado": "El factor de riesgo más importante en cáncer de cabeza y cuello es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tabaco"
    },
    {
     "id": "b",
     "texto": "Síndrome de Plummer-Vinson"
    },
    {
     "id": "c",
     "texto": "Enfermedades virales"
    },
    {
     "id": "d",
     "texto": "Factor ocupacional como el aserrín"
    },
    {
     "id": "e",
     "texto": "Papilomavirus"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "factor de riesgo más importante",
   "por_que_correcta": "El consumo de tabaco, junto con el alcohol, es el factor de riesgo más importante de los cánceres de cabeza y cuello.",
   "por_que_no": {
    "b": "El Plummer-Vinson se asocia a cáncer de hipofaringe y esófago cervical, pero es poco frecuente.",
    "c": "Los virus (VPH, Epstein-Barr) influyen en sitios concretos, no en el conjunto.",
    "d": "El aserrín se asocia a cáncer de senos paranasales, un sitio poco frecuente.",
    "e": "El VPH causa la mayoría de los cánceres de amígdala y base de lengua (orofaringe). Sería la respuesta si preguntaran por orofaringe."
   },
   "fuentes": {
    "docente": "Clave sin marca en el banqueo. El tema no está desarrollado en el texto de las diapositivas.",
    "guia": null,
    "libro": "NCI, Head and Neck Cancers: el tabaco y el alcohol son «los dos factores de riesgo más importantes» (traducción propia); el VPH se relaciona sobre todo con amígdala y base de lengua.",
    "discrepancia": false
   },
   "referencias": [
    "National Cancer Institute. Head and Neck Cancers [Internet]. NCI. Disponible en: https://www.cancer.gov/types/head-and-neck/head-neck-fact-sheet"
   ]
  },
  {
   "id": "ESP1-B-034",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Disecciones de cuello",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 41",
   "enunciado": "Sobre la disección supraomohioidea en cáncer de cabeza y cuello, es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Diseca los grupos I, II y III"
    },
    {
     "id": "b",
     "texto": "Diseca los grupos II, III, IV y V"
    },
    {
     "id": "c",
     "texto": "Diseca los grupos I y II"
    },
    {
     "id": "d",
     "texto": "Se indica para cáncer de cavidad oral sin evidencia clínica de metástasis"
    },
    {
     "id": "e",
     "texto": "A y D son correctas"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "disección supraomohioidea",
   "por_que_correcta": "La supraomohioidea es una disección selectiva de los niveles I a III. Es la electiva de la cavidad oral cuando el riesgo de metástasis ocultas supera el 20 %, aunque el cuello sea clínicamente negativo.",
   "por_que_no": {
    "a": "Es cierta (niveles I-III), pero incompleta: también lo es la indicación en cavidad oral cN0.",
    "b": "II-V corresponde a la disección posterolateral.",
    "c": "I-II es la disección suprahioidea.",
    "d": "Es cierta, pero incompleta: también lo es que diseca los niveles I-III."
   },
   "fuentes": {
    "docente": "Diapositivas de Patología tiroidea (diap. 283): disecciones selectivas — «Suprahioidea (I, II); Supraomohioidea (I-III); Lateral (II-IV); Posterolateral (II-V); Anterior o central (VI)»; diap. 285: electiva si «riesgo de metástasis ocultas en más del 20 %… cáncer de cavidad oral».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 283.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 285."
   ]
  },
  {
   "id": "ESP1-B-035",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Cavidad oral: tratamiento",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 47 (clave resaltada); banco consolidado de Oncología, preg. 42",
   "enunciado": "Paciente con cáncer de lengua cuyo resultado histopatológico es carcinoma epidermoide del lado derecho de 1,2 × 1,2 cm. No ganglios palpables en cuello. La actitud terapéutica por el tipo histológico y la localización es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Glosectomía derecha + biopsia de ganglio centinela"
    },
    {
     "id": "b",
     "texto": "Glosectomía total"
    },
    {
     "id": "c",
     "texto": "Quimiorradiación neoadyuvante"
    },
    {
     "id": "d",
     "texto": "Glosectomía derecha + disección de cuello supraomohioidea"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "No ganglios palpables en cuello",
   "por_que_correcta": "El tumor de lengua es pequeño (glosectomía del lado afectado), pero la cavidad oral tiene riesgo de metástasis ocultas > 20 %. Por eso se trata el cuello de forma electiva con la disección supraomohioidea (niveles I-III).",
   "por_que_no": {
    "a": "El ganglio centinela no es la conducta que da tu docente para cavidad oral; él indica disección electiva.",
    "b": "La glosectomía total es excesiva para una lesión de 1,2 cm unilateral.",
    "c": "La quimiorradiación neoadyuvante no se usa en un T1 de lengua operable."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 47). Diapositivas de Patología tiroidea (diap. 285): disección electiva cuando el riesgo de metástasis ocultas es > 20 % (cáncer de cavidad oral); diap. 283: supraomohioidea = niveles I-III.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 285.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 283."
   ]
  },
  {
   "id": "ESP1-B-036",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Glándulas salivales",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 30 (clave resaltada); banco consolidado de Oncología, preg. 43",
   "enunciado": "Respecto al adenoma pleomorfo, señale la respuesta correcta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Es un tumor de las glándulas salivales que rara vez recidiva"
    },
    {
     "id": "b",
     "texto": "Afecta predominantemente a la glándula sublingual"
    },
    {
     "id": "c",
     "texto": "Se trata habitualmente mediante parotidectomía conservadora del nervio facial"
    },
    {
     "id": "d",
     "texto": "Se trata habitualmente mediante parotidectomía radical dada la posibilidad de recidiva"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "Respecto al adenoma pleomorfo",
   "por_que_correcta": "El adenoma pleomorfo es benigno y asienta sobre todo en el lóbulo superficial de la parótida. Se trata con parotidectomía superficial conservando el nervio facial.",
   "por_que_no": {
    "a": "Recidiva si se enuclea (15-45 %); por eso no se hace enucleación simple.",
    "b": "Afecta sobre todo a la parótida, no a la sublingual.",
    "d": "Al ser benigno, no requiere parotidectomía radical ni sacrificar el facial. Sería la conducta en un tumor maligno que infiltra el nervio."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 30). El tema no está en el texto de las diapositivas de Oncología.",
    "guia": null,
    "libro": "StatPearls, Pleomorphic Adenoma (2025): el lóbulo superficial de la parótida es el sitio más frecuente (84 %); se trata óptimamente con parotidectomía superficial y preservación del nervio facial; la enucleación simple tiene recurrencias del 15-45 %.",
    "discrepancia": false
   },
   "referencias": [
    "Menon G, Winters R. Pleomorphic Adenoma. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025. Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK430829/"
   ]
  },
  {
   "id": "ESP1-B-037",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Cáncer de piel: epidemiología",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 44",
   "enunciado": "El tipo de cáncer de piel más frecuente y el más maligno son, respectivamente:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Basocelular y melanoma"
    },
    {
     "id": "b",
     "texto": "Epidermoide y basocelular"
    },
    {
     "id": "c",
     "texto": "Melanoma y epidermoide"
    },
    {
     "id": "d",
     "texto": "Linfoma y melanoma"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "más frecuente y el más maligno",
   "por_que_correcta": "Tu docente lo dice en dos diapositivas: el basocelular es el cáncer de piel más frecuente (75 %) y el melanoma es «el más maligno de los cánceres de piel».",
   "por_que_no": {
    "b": "El epidermoide es el segundo en frecuencia (20 %) y el basocelular casi nunca da metástasis: el orden está cambiado.",
    "c": "El melanoma es apenas el 4 % de los cánceres de piel; no es el más frecuente.",
    "d": "El linfoma no es un cáncer de piel primario frecuente."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma basocelular (diap. 2 y 4): basocelular 75 %, epidermoide 20 %, melanoma 4 %; «Es el tipo de cáncer de piel MÁS FRECUENTE». Diapositivas de Melanoma (diap. 25): «El más maligno de los cánceres de piel».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 2.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 4.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 25."
   ]
  },
  {
   "id": "ESP1-B-038",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular: tratamiento",
   "origen": "banco",
   "procedencia": "Banqueo MedClub UPAO 2025-20; banco consolidado de Oncología, preg. 45",
   "enunciado": "Varón de 70 años con lesión perlácea con telangiectasias en el ala nasal, de crecimiento lento y ulceración central. ¿Conducta ideal?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Radioterapia exclusiva"
    },
    {
     "id": "b",
     "texto": "Cirugía de Mohs"
    },
    {
     "id": "c",
     "texto": "Exéresis tangencial (shave) sin márgenes"
    },
    {
     "id": "d",
     "texto": "Imiquimod tópico"
    },
    {
     "id": "e",
     "texto": "Quimioterapia sistémica"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "en el ala nasal",
   "por_que_correcta": "Es un basocelular en la cara, una zona de alto riesgo donde importa controlar el margen y ahorrar tejido. La cirugía de Mohs reseca bajo control microscópico completo del margen y ahorra tejido sano.",
   "por_que_no": {
    "a": "La radioterapia es alternativa en quien no puede operarse; no es la conducta ideal en un paciente operable.",
    "c": "La exéresis tangencial sin márgenes deja tumor en profundidad; no controla el margen.",
    "d": "El imiquimod se reserva para basocelulares superficiales de bajo riesgo, no para una lesión ulcerada en el ala nasal.",
    "e": "La quimioterapia sistémica no se usa en el basocelular localizado."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma basocelular (diap. 17): Mohs es «resección del cáncer de piel BAJO COMPLETO CONTROL MICROSCÓPICO… principales ventajas: delimitar mejor las lesiones y ahorrar tejido sano».",
    "guia": "Guía, p. 13: en lesiones grandes o en zonas críticas de la cara se planifica la reconstrucción; Mohs para cara, alto riesgo y recidivas (p. 16).",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 17.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 13."
   ]
  },
  {
   "id": "ESP1-B-039",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular: márgenes",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 18 (clave resaltada); banco consolidado de Oncología, preg. 46",
   "enunciado": "En un paciente varón de 77 años, con lesión en región dorsal derecha de aspecto costroulcerado de 15 mm, se plantea, con biopsia de carcinoma basocelular, una resección local ampliada y colgajo de avance. ¿Cuál es el margen mínimo de piel perilesional que debe realizarse?",
   "alternativas": [
    {
     "id": "a",
     "texto": "1.5 cm"
    },
    {
     "id": "b",
     "texto": "1.0 cm"
    },
    {
     "id": "c",
     "texto": "2.0 cm"
    },
    {
     "id": "d",
     "texto": "0.4 cm"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "carcinoma basocelular",
   "por_que_correcta": "En el basocelular el margen recomendado es de 4 mm (0,4 cm). Tu docente lo pone como ejemplo de que el margen cambia según la histología: basocelular, melanoma y sarcoma tienen márgenes distintos.",
   "por_que_no": {
    "a": "1,5 cm es un margen propio de melanoma intermedio, excesivo para un basocelular.",
    "b": "1 cm es el margen del melanoma fino (≤ 1 mm), no del basocelular.",
    "c": "2 cm es el margen del melanoma grueso (> 2 mm). Sería correcta si la biopsia fuera melanoma de más de 2 mm."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 18). Diapositivas de Principios (diap. 55): «Márgenes de resección diferentes en ca. basocelular, melanoma maligno o sarcoma… 4 mm»; Carcinoma basocelular (diap. 16): «0,4 cm».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 55.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 16."
   ]
  },
  {
   "id": "ESP1-B-040",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular: riesgo",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 15 (clave resaltada); banco consolidado de Oncología, preg. 47",
   "enunciado": "¿Cuál de las siguientes NO es una característica de «alto riesgo» para recurrencia de carcinoma basocelular?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Área de la lesión de 30 mm localizada en el hombro posterior"
    },
    {
     "id": "b",
     "texto": "Localización en la oreja"
    },
    {
     "id": "c",
     "texto": "Edad de diagnóstico a los 25 años"
    },
    {
     "id": "d",
     "texto": "Área de la lesión de 11 mm en el cuero cabelludo"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "NO es una característica de «alto riesgo»",
   "por_que_correcta": "El riesgo de recurrencia del basocelular depende de la localización y el tamaño, de los bordes y del subtipo histológico, no de la edad al diagnóstico. Tu docente usa esta misma pregunta en sus diapositivas.",
   "por_que_no": {
    "a": "Una lesión de 30 mm en el tronco es de alto riesgo por su tamaño.",
    "b": "La oreja es una localización de alto riesgo (zona central de la cara y orejas).",
    "d": "Una lesión de 11 mm en cuero cabelludo supera el umbral de tamaño para esa zona y es de alto riesgo."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 15). Diapositivas de Carcinoma basocelular (diap. 13): la misma pregunta, con «Edad de diagnóstico a los 25 años» entre las alternativas.",
    "guia": "Guía, p. 14: estratificación de riesgo del basocelular por «localización, tamaño, bordes…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 13.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 14."
   ]
  },
  {
   "id": "ESP1-B-041",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide de piel: estadificación",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 48",
   "enunciado": "Paciente con carcinoma epidermoide de piel en región preauricular derecha. El informe revela tumor ≥ 4 cm en su dimensión mayor con erosión ósea mínima o invasión perineural, sin adenopatías ni metástasis. El estadio que le corresponde es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "T3 N0 M0"
    },
    {
     "id": "b",
     "texto": "T2 N0 M0"
    },
    {
     "id": "c",
     "texto": "T4a N0 M0"
    },
    {
     "id": "d",
     "texto": "T1 N0 M0"
    },
    {
     "id": "e",
     "texto": "T4b N0 M0"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "erosión ósea mínima o invasión perineural",
   "por_que_correcta": "En la tabla del docente, T3 es el tumor > 4 cm o con erosión ósea mínima, invasión perineural o invasión profunda. Sin ganglios ni metástasis: T3 N0 M0.",
   "por_que_no": {
    "b": "T2 es el tumor > 2 a < 4 cm sin factores de T3.",
    "c": "T4a exige invasión de hueso cortical grueso o médula ósea, no erosión mínima.",
    "d": "T1 es < 2 cm.",
    "e": "T4b exige invasión de la base del cráneo o del agujero de la base del cráneo."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma epidermoide (diap. 16-17): «T3: tumor > 4 cm en su dimensión mayor o erosión ósea mínima o invasión perineural o invasión profunda»; T4a hueso cortical/médula; T4b base del cráneo.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 16.",
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 17."
   ]
  },
  {
   "id": "ESP1-B-042",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide de piel: pronóstico",
   "origen": "banco",
   "procedencia": "E-Oncología (cuestionario «Virtual»), p. 5; banco consolidado de Oncología, preg. 49",
   "enunciado": "Las características que están asociadas con un peor pronóstico en el carcinoma de células escamosas incluyen todas las siguientes EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Enfermedad no invasiva o in situ en el momento de presentación"
    },
    {
     "id": "b",
     "texto": "Histología pobremente diferenciada"
    },
    {
     "id": "c",
     "texto": "Metástasis en los ganglios linfáticos"
    },
    {
     "id": "d",
     "texto": "Evidencia de invasión perineural"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "EXCEPTO",
   "por_que_correcta": "La enfermedad in situ todavía no atraviesa la membrana basal: no tiene capacidad de metastatizar y tiene buen pronóstico. Las otras tres empeoran el pronóstico; la invasión perineural, por ejemplo, sube el tumor a T3.",
   "por_que_no": {
    "b": "La histología pobremente diferenciada es un factor de peor pronóstico.",
    "c": "Los ganglios metastásicos empeoran el pronóstico y suben el estadio (N1 o más).",
    "d": "La invasión perineural empeora el pronóstico: en la tabla del docente convierte el tumor en T3."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma epidermoide (diap. 16): la invasión perineural define T3 y los ganglios definen N. Guía, p. 10: «La invasión de la membrana basal es la frontera entre carcinoma in situ e infiltrante, y esa frontera es la que decide si hay riesgo de metástasis». En E-Oncología la alternativa marcada es la de enfermedad in situ.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 16.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 10."
   ]
  },
  {
   "id": "ESP1-B-043",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: tipos",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 50",
   "enunciado": "El tipo más frecuente de melanoma maligno es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "De extensión superficial"
    },
    {
     "id": "b",
     "texto": "Nodular"
    },
    {
     "id": "c",
     "texto": "Lentiginoso acral"
    },
    {
     "id": "d",
     "texto": "Léntigo maligno"
    },
    {
     "id": "e",
     "texto": "Ocular"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "El tipo más frecuente",
   "por_que_correcta": "En la clasificación clínico-patológica del docente, el melanoma de extensión superficial es el 70 % (malignidad intermedia).",
   "por_que_no": {
    "b": "El nodular es el 12 % y el más maligno. Sería la respuesta si preguntaran por el más agresivo.",
    "c": "El lentiginoso acral aparece en palmas, plantas y uñas; no es el más frecuente en general.",
    "d": "El léntigo maligno es el 10-15 % y el más benigno.",
    "e": "El ocular no es cutáneo y es poco frecuente."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 57): los cuatro tipos más comunes con su frecuencia y comportamiento: léntigo maligno melanoma, 10-15 %, «El mas benigno»; melanoma de extensión superficial, 70 %, «Malignidad intermedia»; melanoma nodular, 12 %, «El mas maligno»; lentiginoso acral, en «palmas, plantas y regiones subungulares».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 57."
   ]
  },
  {
   "id": "ESP1-B-044",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: Breslow",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 51",
   "enunciado": "Se mide la profundidad de invasión de un melanoma cutáneo a partir de la siguiente capa histológica:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Capa córnea"
    },
    {
     "id": "b",
     "texto": "Capa lúcida"
    },
    {
     "id": "c",
     "texto": "Capa granulosa"
    },
    {
     "id": "d",
     "texto": "Capa basal"
    },
    {
     "id": "e",
     "texto": "Capa espinosa"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "profundidad de invasión",
   "por_que_correcta": "El espesor de Breslow se mide en milímetros desde la capa granulosa hasta la célula tumoral más profunda. En las diapositivas de profundidad, la línea de inicio es la capa granulosa.",
   "por_que_no": {
    "a": "La córnea no se usa: su grosor varía mucho según la zona (más gruesa en plantas).",
    "b": "La capa lúcida solo existe en piel gruesa (palmas y plantas).",
    "d": "La capa basal es donde están los melanocitos; no es el punto de referencia de la medición.",
    "e": "La espinosa no es el punto de partida que define Breslow."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 73): esquema de medición de profundidad con la «capa granulosa» como referencia; diap. 69: el espesor de Breslow (1970) es el factor pronóstico más importante.",
    "guia": "Guía, p. 18: el espesor de Breslow se mide «en milímetros desde la capa granulosa».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 73.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 18."
   ]
  },
  {
   "id": "ESP1-B-045",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: Clark",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 52",
   "enunciado": "A un paciente con melanoma cutáneo se le realiza biopsia en sacabocado y el patólogo informa que la neoplasia ha infiltrado hasta la dermis reticular. ¿En qué nivel estaría según Clark?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nivel I"
    },
    {
     "id": "b",
     "texto": "Nivel II"
    },
    {
     "id": "c",
     "texto": "Nivel III"
    },
    {
     "id": "d",
     "texto": "Nivel IV"
    },
    {
     "id": "e",
     "texto": "Nivel V"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "ha infiltrado hasta la dermis reticular",
   "por_que_correcta": "Los niveles de Clark siguen las capas: I epidermis (in situ), II dermis papilar parcial, III llena la dermis papilar, IV dermis reticular, V tejido subcutáneo.",
   "por_que_no": {
    "a": "Nivel I es melanoma in situ, sin pasar la membrana basal.",
    "b": "Nivel II penetra la dermis papilar sin llegar a la reticular.",
    "c": "Nivel III llena la dermis papilar y llega a la interfase con la reticular, sin invadirla.",
    "e": "Nivel V invade el tejido celular subcutáneo."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 68): «Clark y cols. definen 5 niveles de microinvasión»: epidermis (in situ), dermis papilar, llena la dermis papilar, dermis reticular y tejido subcutáneo.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 68."
   ]
  },
  {
   "id": "ESP1-B-046",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: estadificación",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 53",
   "enunciado": "Se realiza una biopsia en sacabocado de una lesión de piel en región dorsal. El resultado histopatológico arroja: melanoma de 2.4 mm de grosor con ulceración. Según el TNM estamos ante:",
   "alternativas": [
    {
     "id": "a",
     "texto": "T2a"
    },
    {
     "id": "b",
     "texto": "T2a (repetida así en el pretest)"
    },
    {
     "id": "c",
     "texto": "T3b"
    },
    {
     "id": "d",
     "texto": "T2b"
    },
    {
     "id": "e",
     "texto": "T3a"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "2.4 mm de grosor con ulceración",
   "por_que_correcta": "2,4 mm está en el rango 2,01-4 mm (T3) y la ulceración añade el sufijo «b»: T3b.",
   "por_que_no": {
    "a": "T2a es > 1 a 2 mm sin ulceración.",
    "b": "Es la misma opción T2a, repetida en el pretest original: > 1 a 2 mm sin ulceración.",
    "d": "T2b es > 1 a 2 mm con ulceración.",
    "e": "T3a sería el mismo grosor sin ulceración. Correcta si el informe no hubiera mencionado úlcera."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 72): «T3a: melanoma de 2,01-4 mm de grosor sin ulceración; T3b: de 2,01-4 mm con ulceración».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72."
   ]
  },
  {
   "id": "ESP1-B-047",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: estadificación",
   "origen": "banco",
   "procedencia": "E-Oncología (cuestionario «Virtual»), p. 9; Banqueo de Oncología (E. Juárez); banco consolidado de Oncología, preg. 54",
   "enunciado": "Paciente varón de 35 años, con lesión hiperpigmentada y ulcerada de 3.5 × 3.5 cm en piel de región anterolateral de pared torácica. Se le hace una biopsia punch o en sacabocado y se revela que se trata de un melanoma de extensión superficial. La lesión tiene una profundidad de 2.5 mm. Nos encontramos ante el siguiente T (tumor primario):",
   "alternativas": [
    {
     "id": "a",
     "texto": "T3b"
    },
    {
     "id": "b",
     "texto": "T2b"
    },
    {
     "id": "c",
     "texto": "T3a"
    },
    {
     "id": "d",
     "texto": "T4"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "lesión hiperpigmentada y ulcerada",
   "por_que_correcta": "En melanoma la T la define el grosor (Breslow) y la ulceración, no el diámetro. 2,5 mm es T3 y como está ulcerada, T3b.",
   "por_que_no": {
    "b": "T2b es > 1 a 2 mm con ulceración; 2,5 mm ya es T3.",
    "c": "T3a sería sin ulceración. Correcta si la lesión no estuviera ulcerada.",
    "d": "T4 exige > 4 mm de grosor; el diámetro de 3,5 cm no cuenta."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 72): T3b = 2,01-4 mm con ulceración. En el banqueo de E. Juárez no hay clave; en E-Oncología la clave anotada difiere entre fuentes (el consolidado registra que una fuente da T3a ignorando la ulceración).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72."
   ]
  },
  {
   "id": "ESP1-B-048",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: márgenes",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 55",
   "enunciado": "Señale la variable de la que dependerá fundamentalmente la decisión sobre los márgenes quirúrgicos en el tratamiento de un caso de melanoma cutáneo:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Diámetro de la lesión en mm"
    },
    {
     "id": "b",
     "texto": "Máximo espesor de la lesión en mm (índice de Breslow)"
    },
    {
     "id": "c",
     "texto": "Presencia de ulceración en la lesión"
    },
    {
     "id": "d",
     "texto": "Mitosis por mm² (índice mitótico)"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "márgenes quirúrgicos",
   "por_que_correcta": "La tabla de márgenes de escisión amplia del docente está organizada solo por espesor del tumor (Breslow): in situ 0,5-1 cm; ≤ 1 mm 1 cm; 1,01-2 mm 1-2 cm; > 2 mm 2 cm.",
   "por_que_no": {
    "a": "El diámetro no entra en la tabla de márgenes.",
    "c": "La ulceración cambia la T (sufijo «b») y el pronóstico, pero no el margen.",
    "d": "El índice mitótico influye en la indicación de ganglio centinela, no en el margen."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 129), «Principios de márgenes quirúrgicos para escisión amplia de melanoma primario»: espesor del tumor → márgenes clínicos recomendados.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129."
   ]
  },
  {
   "id": "ESP1-B-049",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: márgenes",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 20 (clave resaltada); banco consolidado de Oncología, preg. 56",
   "enunciado": "Paciente mujer de 36 años de edad, que presenta tumoración en piel de antebrazo derecho de crecimiento progresivo. Se le hace una biopsia en sacabocado que arroja melanoma lentiginoso acral con invasión de 5 mm. El margen clínico MÍNIMO recomendado es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "0.5 cm"
    },
    {
     "id": "b",
     "texto": "1.5 cm"
    },
    {
     "id": "c",
     "texto": "1 cm"
    },
    {
     "id": "d",
     "texto": "2 cm"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "invasión de 5 mm",
   "por_que_correcta": "Con un espesor mayor de 2 mm (aquí 5 mm), la tabla de márgenes indica 2 cm.",
   "por_que_no": {
    "a": "0,5-1 cm es para melanoma in situ.",
    "b": "1-2 cm es para espesor de 1,01 a 2 mm.",
    "c": "1 cm es para espesor ≤ 1 mm."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 20). Diapositivas de Melanoma (diap. 129): 2,01-4 mm → 2 cm; > 4 mm → 2 cm.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129."
   ]
  },
  {
   "id": "ESP1-B-050",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: márgenes",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 57",
   "enunciado": "Paciente diagnosticado por biopsia incisional de melanoma lentiginoso acral de planta de pie derecho, cuyo espesor es de 1.5 mm, debe tener unos bordes quirúrgicos clínicos mínimos recomendados de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "1-2 cm"
    },
    {
     "id": "b",
     "texto": "0.6 cm"
    },
    {
     "id": "c",
     "texto": "Amputación del pie"
    },
    {
     "id": "d",
     "texto": "1 cm"
    },
    {
     "id": "e",
     "texto": "0.4 cm"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "cuyo espesor es de 1.5 mm",
   "por_que_correcta": "1,5 mm cae en el rango 1,01-2 mm, que en la tabla del docente corresponde a márgenes de 1-2 cm.",
   "por_que_no": {
    "b": "0,6 cm no figura en la tabla; es menos que el margen del melanoma in situ.",
    "c": "La amputación no está indicada en un melanoma localizado de 1,5 mm.",
    "d": "1 cm es el margen para espesor ≤ 1 mm.",
    "e": "0,4 cm es el margen del carcinoma basocelular, no del melanoma."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 129), tabla «Márgenes clínicos recomendados» (en imagen): espesor de 1,01-2 mm, margen de 1-2 cm.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129."
   ]
  },
  {
   "id": "ESP1-B-051",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: tratamiento",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 42 (clave resaltada); banco consolidado de Oncología, preg. 58",
   "enunciado": "Un paciente varón de 62 años presenta melanoma lentiginoso acral en la planta de pie, 6 cm por detrás del primer dedo, de 1.3 × 1.2 cm. No satelitosis ni adenomegalias ni signos de secundarismo en estudios de imágenes. El tratamiento ideal sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quimiorradioterapia"
    },
    {
     "id": "b",
     "texto": "Inmunoterapia de inicio"
    },
    {
     "id": "c",
     "texto": "Amputación de pierna infracondílea + biopsia de ganglio centinela"
    },
    {
     "id": "d",
     "texto": "Resección local amplia + biopsia de ganglio centinela"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "No satelitosis ni adenomegalias ni signos de secundarismo",
   "por_que_correcta": "Es un melanoma localizado: el tratamiento primario es la escisión amplia y la estadificación ganglionar con biopsia de ganglio centinela, como indica el algoritmo NCCN del docente para estadio IB-II.",
   "por_que_no": {
    "a": "La quimiorradioterapia no es el tratamiento primario del melanoma localizado.",
    "b": "La inmunoterapia es adyuvante o para enfermedad avanzada, no tratamiento inicial del localizado.",
    "c": "La amputación no se indica: el margen se logra con resección amplia."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 42). Diapositivas de Melanoma (diap. 88): estadio IB-II → «discutir y ofrecer bp de ganglio centinela» junto con escisión amplia.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 88.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129."
   ]
  },
  {
   "id": "ESP1-B-052",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: ganglio centinela",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T2 (2022-10); banco consolidado de Oncología, preg. 59",
   "enunciado": "Para el manejo ganglionar de un melanoma cutáneo, en pacientes con ganglios regionales negativos y melanoma de bajo riesgo (pT1a sin ulceración), se recomienda:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Realizar disección ganglionar sistemática"
    },
    {
     "id": "b",
     "texto": "Hacer ganglio centinela"
    },
    {
     "id": "c",
     "texto": "No hacer ganglio centinela"
    },
    {
     "id": "d",
     "texto": "Realizar disección ganglionar selectiva"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "pT1a sin ulceración",
   "por_que_correcta": "En T1a (< 0,8 mm sin ulceración ni otros factores adversos) la probabilidad de centinela positivo es < 5 %, y la NCCN no recomienda la biopsia de ganglio centinela.",
   "por_que_no": {
    "a": "La disección sistemática sin ganglios positivos no se hace en ningún estadio.",
    "b": "El centinela se discute desde T1b o con factores adversos. Sería la respuesta con ulceración o 0,8-1 mm.",
    "d": "No hay indicación de ningún tipo de disección con ganglios negativos y T1a."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 89): «Breslow < 0,8 mm sin ulceración (T1a) SIN otras características adversas → < 5 % → No recomienda BGC».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 89."
   ]
  },
  {
   "id": "ESP1-B-053",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: ganglio centinela",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 48 (clave resaltada); banco consolidado de Oncología, preg. 60",
   "enunciado": "El número mínimo de ganglios centinela que se debe tomar en un melanoma es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "6"
    },
    {
     "id": "b",
     "texto": "5"
    },
    {
     "id": "c",
     "texto": "No hay número mínimo de ganglios, se sacan los que se encuentren"
    },
    {
     "id": "d",
     "texto": "3"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "número mínimo de ganglios centinela",
   "por_que_correcta": "El ganglio centinela no es un número de ganglios sino un concepto funcional: se extraen los ganglios que reciben primero el drenaje del tumor, sean uno o varios.",
   "por_que_no": {
    "a": "No existe un mínimo de 6 ganglios centinela.",
    "b": "No existe un mínimo de 5.",
    "d": "No existe un mínimo de 3."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 48).",
    "guia": "Guía, p. 10: «hay un primer ganglio que la recibe… Se localiza inyectando un trazador… y siguiendo hacia dónde va».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 10."
   ]
  },
  {
   "id": "ESP1-B-054",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: factores de riesgo",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 61",
   "enunciado": "Son factores de riesgo alto para presentar melanoma maligno, excepto:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Exposición a radiación UV"
    },
    {
     "id": "b",
     "texto": "Piel blanca"
    },
    {
     "id": "c",
     "texto": "Historia familiar de melanoma"
    },
    {
     "id": "d",
     "texto": "Presencia de 2 a 3 nevi de 2 mm de diámetro"
    },
    {
     "id": "e",
     "texto": "Melanoma previo"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "excepto",
   "por_que_correcta": "Lo que aumenta el riesgo son los nevos numerosos o grandes (más de 5 nevos grandes de 5 mm), displásicos o congénitos grandes. Dos o tres nevos de 2 mm no son un factor de riesgo alto.",
   "por_que_no": {
    "a": "La radiación ultravioleta es el único factor de riesgo evitable del melanoma.",
    "b": "La raza blanca, sobre todo la que tolera mal el sol, es factor de riesgo.",
    "c": "La historia familiar de melanoma es un factor de riesgo alto.",
    "e": "Haber tenido un melanoma aumenta el riesgo de uno nuevo."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma: «raza blanca; exposición a radiación ultravioleta, único factor de riesgo evitable» (diap. 27); nevus de riesgo: congénito grande, displásico, «más de 5 nevi grandes (5 mm)» (diap. 31-32).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 27.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 32."
   ]
  },
  {
   "id": "ESP1-B-055",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: pronóstico",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 62",
   "enunciado": "¿Cuál es el factor pronóstico más importante en el melanoma estadio I?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nivel sérico de LDH"
    },
    {
     "id": "b",
     "texto": "Espesor tumoral medido en el índice de Breslow"
    },
    {
     "id": "c",
     "texto": "La presencia de ulceración clínica e histológica"
    },
    {
     "id": "d",
     "texto": "Número de metástasis"
    },
    {
     "id": "e",
     "texto": "Índice mitótico"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "melanoma estadio I",
   "por_que_correcta": "Tu docente lo dice textual: el espesor del tumor en mm (Breslow) «es el factor pronóstico más importante» y se usa para el TNM.",
   "por_que_no": {
    "a": "La LDH es pronóstica en enfermedad metastásica (estadio IV), no en estadio I.",
    "c": "La ulceración empeora el pronóstico, pero pesa menos que el espesor.",
    "d": "En estadio I no hay metástasis.",
    "e": "El índice mitótico es un factor adicional, de menor peso."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 69): «Espesor del tumor (en mm) propuesto por Alexander Breslow (1970). Es el factor pronóstico más importante».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 69."
   ]
  },
  {
   "id": "ESP1-B-056",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: márgenes",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 63",
   "enunciado": "Para el melanoma léntigo maligno, el margen clínico recomendado mínimo es hasta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "2 mm"
    },
    {
     "id": "b",
     "texto": "3 mm"
    },
    {
     "id": "c",
     "texto": "10 mm"
    },
    {
     "id": "d",
     "texto": "Menor de 5 mm"
    },
    {
     "id": "e",
     "texto": "3.5 mm"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "melanoma léntigo maligno",
   "por_que_correcta": "El léntigo maligno es un melanoma in situ, y para el in situ la tabla del docente da 0,5-1,0 cm, es decir, hasta 10 mm. La nota de la tabla añade que el tipo léntigo maligno grande puede necesitar más de 0,5 cm.",
   "por_que_no": {
    "a": "2 mm es insuficiente para cualquier melanoma.",
    "b": "3 mm es insuficiente; el mínimo para in situ es 5 mm.",
    "d": "Menos de 5 mm está por debajo del margen del melanoma in situ.",
    "e": "3,5 mm también es insuficiente."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 57): el léntigo maligno es «melanoma in situ, limitado a la epidermis»; diap. 129: in situ → 0,5-1,0 cm, y «para el melanoma in situ grande tipo léntigo maligno pueden ser necesarios márgenes > 0,5 cm».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 57.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129."
   ]
  },
  {
   "id": "ESP1-B-057",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 2; banco consolidado de Oncología, preg. 64",
   "enunciado": "El sarcoma de partes blandas acontece con mayor frecuencia en:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Extremidades"
    },
    {
     "id": "b",
     "texto": "Cuello"
    },
    {
     "id": "c",
     "texto": "Abdomen"
    },
    {
     "id": "d",
     "texto": "Cabeza"
    },
    {
     "id": "e",
     "texto": "Tórax"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "con mayor frecuencia",
   "por_que_correcta": "Dos tercios de los sarcomas de partes blandas ocurren en las extremidades; el tercio restante, en retroperitoneo, vísceras, tronco, cabeza y cuello.",
   "por_que_no": {
    "b": "El cuello está dentro del tercio restante, poco frecuente.",
    "c": "El abdomen (retroperitoneo y vísceras) es el segundo grupo, pero no el más frecuente.",
    "d": "La cabeza es una localización poco frecuente.",
    "e": "El tórax (tronco) es menos frecuente que las extremidades."
   },
   "fuentes": {
    "docente": "Diapositivas de Sarcoma (diap. 9): «2/3 partes de los sarcomas ocurren en las extremidades, y la otra 1/3 parte en retroperitoneo, vísceras, abdomen, tronco, cabeza y cuello».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 9."
   ]
  },
  {
   "id": "ESP1-B-058",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas: márgenes",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 65",
   "enunciado": "En el tratamiento quirúrgico y radioterápico del sarcoma de partes blandas de las extremidades, cuando no afecta estructuras vitales, se recomienda que la resección tenga un margen mínimo de tejido sano de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "0.5 cm"
    },
    {
     "id": "b",
     "texto": "1 cm"
    },
    {
     "id": "c",
     "texto": "2 cm"
    },
    {
     "id": "d",
     "texto": "4 cm"
    },
    {
     "id": "e",
     "texto": "8 cm"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "margen mínimo de tejido sano",
   "por_que_correcta": "Tu docente indica que el margen debe ser de al menos 1 cm en todas las direcciones o incluir una barrera fascial intacta. Con radioterapia asociada no se exige más que eso.",
   "por_que_no": {
    "a": "0,5 cm es menos del mínimo; solo una fascia intacta puede valer como margen más delgado.",
    "c": "2 cm es lo que da el consolidado del banco, pero las diapositivas de tu docente piden al menos 1 cm.",
    "d": "4 cm no se exige; los márgenes de 1 cm ya «rara vez ocurren» junto a estructuras neurovasculares.",
    "e": "8 cm sería una resección mutilante innecesaria."
   },
   "fuentes": {
    "docente": "Diapositivas de Sarcoma (diap. 38): «si la cirugía se utiliza como la única modalidad de tratamiento, el margen debe ser de al menos 1 cm en todas las direcciones o incluir una barrera fascial (plano fascial intacto)». El banqueo no trae clave; el banco consolidado había puesto 2 cm.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 38.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 35."
   ]
  },
  {
   "id": "ESP1-B-059",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "GIST",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 66",
   "enunciado": "La localización más frecuente del GIST es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Colon"
    },
    {
     "id": "b",
     "texto": "Yeyuno"
    },
    {
     "id": "c",
     "texto": "Íleon distal"
    },
    {
     "id": "d",
     "texto": "Estómago"
    },
    {
     "id": "e",
     "texto": "Recto"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "localización más frecuente del GIST",
   "por_que_correcta": "El GIST (tumor del estroma gastrointestinal) se origina con más frecuencia en el estómago (60 %), seguido del intestino delgado (30 %).",
   "por_que_no": {
    "a": "El colon es una localización rara de GIST.",
    "b": "El intestino delgado es el segundo sitio (30 %), no el primero.",
    "c": "El íleon es parte del intestino delgado, segundo sitio.",
    "e": "El recto es una localización poco frecuente."
   },
   "fuentes": {
    "docente": "El GIST no aparece en el texto de las diapositivas de Oncología. Clave sin marca en el banqueo.",
    "guia": null,
    "libro": "StatPearls, Gastrointestinal Stromal Tumors (2025): «los GIST se originan con más frecuencia en el estómago (60 %) y el intestino delgado (30 %)» (traducción propia).",
    "discrepancia": false
   },
   "referencias": [
    "Helbing A, Menon G. Gastrointestinal Stromal Tumors. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025. Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK554541/"
   ]
  },
  {
   "id": "ESP1-B-060",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Tumor desmoide",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 67",
   "enunciado": "En relación con el tumor desmoide, es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Se consideran sarcomas de bajo grado"
    },
    {
     "id": "b",
     "texto": "No dan metástasis"
    },
    {
     "id": "c",
     "texto": "Son frecuentes en las extremidades"
    },
    {
     "id": "d",
     "texto": "En la pared abdominal se asocian a embarazo"
    },
    {
     "id": "e",
     "texto": "El tratamiento de elección es radioterapia con posterior cirugía de resección"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "tumor desmoide",
   "por_que_correcta": "El tumor desmoide es localmente invasivo y no encapsulado, pero tu docente lo dice claro: «no tienen potencial de metástasis».",
   "por_que_no": {
    "a": "Se comporta de forma agresiva como un sarcoma de bajo grado, pero no es un sarcoma porque no metastatiza.",
    "c": "Dos tercios asientan en la vaina anterior de los rectos abdominales, no en las extremidades.",
    "d": "El docente lo asocia a embarazos múltiples y estímulo estrogénico, pero como asociación etiológica, no como regla de la pared abdominal; la única afirmación definitoria es la ausencia de metástasis.",
    "e": "La cirugía con márgenes amplios sigue siendo la primera opción cuando se trata; la radioterapia no va primero."
   },
   "fuentes": {
    "docente": "Diapositivas de Sarcoma (diap. 66): «Localmente invasiva y no encapsulada… No tienen potencial de metástasis»; diap. 67: asociación con traumatismo previo y embarazos múltiples; diap. 68: 2/3 en la vaina anterior de los rectos; diap. 70: «la cirugía con márgenes quirúrgicos amplios permanece como la primera opción».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 66.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 68.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 70."
   ]
  },
  {
   "id": "ESP1-B-061",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Cáncer de piel no melanoma: quimioprevención",
   "origen": "banco",
   "procedencia": "E-Oncología, p. 1; banco consolidado de Oncología, preg. 18",
   "enunciado": "Con respecto a los fundamentos de la quimioprevención de los cánceres de piel no melanoma, el RETINOL se encarga de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mejorar la respuesta inmunitaria del huésped"
    },
    {
     "id": "b",
     "texto": "Fomentar la maduración celular y detener el crecimiento"
    },
    {
     "id": "c",
     "texto": "Destrucción selectiva de clones de células premalignas"
    },
    {
     "id": "d",
     "texto": "Restauración de genes supresores de tumores perdidos"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "el RETINOL se encarga de",
   "por_que_correcta": "Los retinoides regulan el crecimiento y la diferenciación de las células: favorecen la maduración celular y frenan la proliferación. Por eso se usan como agentes de quimioprevención.",
   "por_que_no": {
    "a": "Mejorar la respuesta inmune es el mecanismo de los inmunomoduladores, no del retinol.",
    "c": "Destruir clones premalignos es propio de tratamientos citotóxicos o ablativos.",
    "d": "El retinol no restaura genes supresores perdidos."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma epidermoide (diap. 20): entre las modalidades se mencionan «retinoides sistémicos (p. ej., acitretina, isotretinoína)». El mecanismo no figura en las diapositivas.",
    "guia": null,
    "libro": "Evans y Kaye, Br J Cancer 1999: «los retinoides regulan el crecimiento y la diferenciación de una amplia variedad de tipos celulares» (traducción propia) y se han evaluado como agentes de quimioprevención.",
    "discrepancia": false
   },
   "referencias": [
    "Evans T, Kaye S. Retinoids: present role and future potential. Br J Cancer. 1999;80:1-8. Disponible en: https://www.nature.com/articles/6690312",
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 20."
   ]
  },
  {
   "id": "ESP1-B-062",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: biopsia",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 19",
   "enunciado": "En una lesión de piel de cara anterior de antebrazo derecho, de aspecto negruzco, elevada, de 2,5 × 2 cm, asimétrica, de bordes irregulares, con tonalidades diferentes de color, no ulcerada, que inició con menos de 1 cm y creció en 3 meses, la conducta inicial IDEAL sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quimioterapia con capecitabina"
    },
    {
     "id": "b",
     "texto": "Biopsia por sacabocado para evaluar profundidad"
    },
    {
     "id": "c",
     "texto": "Terapia biológica dirigida + quimioterápicos tópicos"
    },
    {
     "id": "d",
     "texto": "Resonancia magnética de miembro superior"
    },
    {
     "id": "e",
     "texto": "Betaterapia en el sitio de la lesión"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "de 2,5 × 2 cm",
   "por_que_correcta": "Sin histología no hay tratamiento. Tu docente indica biopsia escisional en sospechas de melanoma menores de 1,5 cm, y en tumores grandes incisional o en sacabocado, que debe incluir el espesor total para medir la profundidad.",
   "por_que_no": {
    "a": "No se da quimioterapia sin diagnóstico ni estadificación.",
    "c": "La terapia dirigida se plantea en enfermedad avanzada con mutación demostrada, no como conducta inicial.",
    "d": "Ninguna imagen mide la profundidad (Breslow); primero se necesita la biopsia.",
    "e": "La betaterapia no es tratamiento del melanoma."
   },
   "fuentes": {
    "docente": "Diapositivas de Melanoma (diap. 56): biopsia escisional «preferible en sospecha de melanoma menores de 1,5 cm»; incisional o en sacabocado «en caso de tumores grandes»; la muestra debe «incluir el espesor total».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 56.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-B-063",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: tratamiento sistémico",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 1 (clave marcada en la captura del EVA)",
   "enunciado": "La sobrevida promedio en melanoma metastásico no se mejora con el tratamiento de una de estas medicinas:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Trametinib"
    },
    {
     "id": "b",
     "texto": "Dabrafenib"
    },
    {
     "id": "c",
     "texto": "Interferón alfa"
    },
    {
     "id": "d",
     "texto": "Ipilimumab"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "melanoma metastásico",
   "por_que_correcta": "En la terapia de primera línea del melanoma metastásico que muestra tu docente (NCCN) figuran la inmunoterapia (anti-PD-1, ipilimumab) y la terapia dirigida BRAF/MEK (dabrafenib/trametinib). El interferón alfa no aparece entre esas opciones.",
   "por_que_no": {
    "a": "El trametinib (inhibidor de MEK), combinado con dabrafenib, está en la primera línea si hay mutación BRAF V600.",
    "b": "El dabrafenib (inhibidor de BRAF) está en la primera línea combinado con trametinib.",
    "d": "El ipilimumab (anti-CTLA-4) está entre las opciones de primera línea, combinado con nivolumab."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2. Diapositivas de Melanoma (diap. 134), terapia de primera línea: combinaciones con anti-PD-1, «dabrafenib/trametinib (categoría 1)» si BRAF V600 y «nivolumab/ipilimumab»; no incluye interferón.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 134."
   ]
  },
  {
   "id": "ESP1-B-064",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma: disección ganglionar",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 3 (clave marcada en la captura del EVA); variante en el banqueo UPAO (banco consolidado, preg. 17)",
   "enunciado": "El realizar la disección linfática en el tratamiento del melanoma (complete la oración):",
   "alternativas": [
    {
     "id": "a",
     "texto": "Debe ser recomendada luego de una biopsia de ganglio centinela positiva"
    },
    {
     "id": "b",
     "texto": "Tiene 5 % de linfedema"
    },
    {
     "id": "c",
     "texto": "Va a demostrar enfermedad ganglionar adicional en 50 % de los pacientes"
    },
    {
     "id": "d",
     "texto": "Confiere un beneficio de supervivencia en pacientes con enfermedad ganglionar positiva"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "complete la oración",
   "por_que_correcta": "La clave del examen es completar la disección tras un ganglio centinela positivo. Para el examen, marca esa.",
   "por_que_no": {
    "b": "El linfedema tras la disección no es del 5 %: es una complicación frecuente.",
    "c": "La disección no demuestra enfermedad adicional en la mitad de los pacientes.",
    "d": "La disección no ha demostrado beneficio de supervivencia; por eso hoy se discute."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2: «debe ser recomendada luego de una biopsia de ganglio centinela positiva».",
    "guia": "Dato curioso: las diapositivas actuales del mismo docente (NCCN, diap. 92) prefieren, en el estadio IIIA con centinela positivo, la «vigilancia activa de la cuenca nodal por ecografía… sin disección completa ganglionar (preferido)», y reservan la disección para casos selectos (diap. 86: el centinela «no ha demostrado que mejore la sobrevida específica»). Para el examen: marca lo del docente.",
    "libro": null,
    "discrepancia": true
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 92.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 86."
   ]
  },
  {
   "id": "ESP1-B-065",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Adyuvancia",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 48 (clave marcada); Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 12",
   "enunciado": "¿Cuál es el objetivo principal del tratamiento adyuvante del cáncer de mama?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Transformar tumores no resecables en resecables para la cirugía"
    },
    {
     "id": "b",
     "texto": "Aumentar la supervivencia libre de progresión"
    },
    {
     "id": "c",
     "texto": "Incremento de la supervivencia global"
    },
    {
     "id": "d",
     "texto": "Mejorar el control de síntomas"
    },
    {
     "id": "e",
     "texto": "Negativizar la axila positiva"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "tratamiento adyuvante",
   "por_que_correcta": "La adyuvancia se da después de la cirugía, cuando ya no hay tumor medible, para controlar la enfermedad microscópica a distancia; su objetivo es que la paciente viva más (supervivencia global).",
   "por_que_no": {
    "a": "Volver resecable un tumor es el objetivo de la neoadyuvancia, que va antes de la cirugía.",
    "b": "La supervivencia libre de progresión se mide cuando hay enfermedad presente; no es el objetivo principal de la adyuvancia.",
    "d": "Mejorar síntomas es el objetivo de la terapia paliativa.",
    "e": "Negativizar la axila es un efecto buscado con la neoadyuvancia, antes de operar."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 48). Diapositivas de Principios (diap. 49): neoadyuvante → primario → adyuvante; diap. 70: «aplicación de tratamiento adyuvante que mejore el control de la invasión local y distante».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 49.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 70."
   ]
  },
  {
   "id": "ESP1-B-066",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico: imagen antes de biopsia",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 20",
   "enunciado": "Acude a la consulta una paciente mujer de 38 años, con antecedente familiar de madre con cáncer de mama diagnosticada a los 44 años. Presenta una masa de 2.5 × 3 cm en radio 12 a 6 cm de pezón de mama derecha, consistencia pétrea, poco móvil, bordes mal delimitados; en piel no se observan lesiones groseras. Axila derecha negativa clínicamente. La conducta a seguir es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hacerle biopsia incisional lo más rápido posible"
    },
    {
     "id": "b",
     "texto": "Hacerle ganglio centinela con doble técnica"
    },
    {
     "id": "c",
     "texto": "Mandarla a Oncología Médica para que inicie tratamiento inmediato"
    },
    {
     "id": "d",
     "texto": "Solicitarle mamografía y ecografía de mamas a la brevedad antes de la realización de la biopsia"
    },
    {
     "id": "e",
     "texto": "Proceder a hacer realizar una tumorectomía más disección ganglionar profiláctica"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "Presenta una masa de 2.5 × 3 cm",
   "por_que_correcta": "Ante un síntoma palpable en una mujer mayor de 30 años, el algoritmo del docente pide primero mamografía diagnóstica (con tomosíntesis) más ecografía; según la categoría BI-RADS se decide la biopsia core.",
   "por_que_no": {
    "a": "La biopsia va después de la imagen; además en mama se prefiere la biopsia con aguja gruesa (core), no la incisional.",
    "b": "El ganglio centinela es estadificación quirúrgica: solo se hace con cáncer confirmado.",
    "c": "No se inicia tratamiento sin diagnóstico histológico ni estadificación.",
    "e": "No se opera sin diagnóstico; y la disección «profiláctica» no se indica con axila negativa."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 148): «Síntoma palpable, edad > 30 años: diagnóstico mamográfico con tomosíntesis… + ecografía»; con BI-RADS 4-5 → «biopsia core».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 148."
   ]
  },
  {
   "id": "ESP1-B-067",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Localmente avanzado",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T1 (2022-10); banco consolidado de Oncología, preg. 22",
   "enunciado": "Si en un cáncer de mama izquierdo observamos una masa tumoral de 3 × 4 cm que retrae la piel y produce ulceración periareolar y encontramos adenopatías axilares palpables confirmadas por histología que es neoplasia maligna, la conducta terapéutica a seguir es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Terapia neoadyuvante sistémica"
    },
    {
     "id": "b",
     "texto": "Mastectomía radical total"
    },
    {
     "id": "c",
     "texto": "Hormonoterapia de doble agente"
    },
    {
     "id": "d",
     "texto": "Cirugía conservadora de mama + biopsia de ganglio centinela"
    },
    {
     "id": "e",
     "texto": "Terapia adyuvante"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "produce ulceración periareolar",
   "por_que_correcta": "La ulceración de la piel convierte el tumor en T4 y la axila es positiva: es enfermedad localmente avanzada. Según la guía, estos casos reciben tratamiento sistémico primero (neoadyuvante) y la cirugía se difiere.",
   "por_que_no": {
    "b": "Operar de entrada un tumor con piel ulcerada no es la secuencia indicada; primero va el tratamiento sistémico.",
    "c": "No se puede elegir hormonoterapia sin conocer los receptores, y no es la conducta inicial del localmente avanzado.",
    "d": "La conservación con centinela es para tumores operables con axila negativa.",
    "e": "La adyuvancia va después de la cirugía; aquí la cirugía todavía no se ha hecho."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 186): la ulceración de la piel de la mama es categoría T4.",
    "guia": "Guía, p. 30: la cirugía de entrada «se difiere en el carcinoma inflamatorio y en la enfermedad localmente avanzada, que reciben tratamiento sistémico primero».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186."
   ]
  },
  {
   "id": "ESP1-B-068",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Factores pronósticos",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 69",
   "enunciado": "¿Qué afirmación es INCORRECTA respecto a las variables pronósticas del cáncer de mama?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Elevadas concentraciones de PCNA (Ki67) indican peor pronóstico"
    },
    {
     "id": "b",
     "texto": "La sobreexpresión del gen c-erbB-2 (HER-2/neu) puede ser indicativa de resistencia/sensibilidad a determinados tratamientos"
    },
    {
     "id": "c",
     "texto": "La recidiva del cáncer de mama es más probable en los tumores que poseen receptores hormonales de estrógenos y progesterona"
    },
    {
     "id": "d",
     "texto": "El tamaño del tumor y el estado de los ganglios linfáticos axilares son factores de valor pronóstico probado"
    },
    {
     "id": "e",
     "texto": "La presencia de un número elevado de microvasos en el tumor se acompaña de un peor pronóstico"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "INCORRECTA respecto a las variables pronósticas",
   "por_que_correcta": "Los tumores con receptores hormonales positivos (luminales) son los de mejor pronóstico y responden a la terapia endocrina. Decir que recidivan más es lo incorrecto.",
   "por_que_no": {
    "a": "Es correcta: un Ki-67 alto separa el luminal B (más agresivo) del luminal A.",
    "b": "Es correcta: HER2 predice respuesta a tratamientos dirigidos.",
    "d": "Es correcta: tamaño y ganglios son los factores pronósticos clásicos.",
    "e": "Es una afirmación aceptada como correcta en el pretest; la incorrecta es otra."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 224), clasificación molecular: luminal A (RE/RP +, Ki-67 < 20 %) = «subtipo más común, menos agresivo… responde a terapia endocrina… buen pronóstico».",
    "guia": "Guía, p. 29: los receptores hormonales positivos responden a la hormonoterapia; HER2 es más agresivo pero tiene tratamiento dirigido.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-B-069",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Factores pronósticos",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 70",
   "enunciado": "¿Cuál es, de los siguientes, el más útil y eficaz factor de pronóstico en el cáncer de mama?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Altos niveles de catepsina D en las células tumorales"
    },
    {
     "id": "b",
     "texto": "Invasión de ganglios linfáticos"
    },
    {
     "id": "c",
     "texto": "Negatividad de los receptores de estrógenos en las células tumorales"
    },
    {
     "id": "d",
     "texto": "Presencia de focos de componente intraductal en puntos distantes al tumor"
    },
    {
     "id": "e",
     "texto": "Presencia de mutación en el gen BRCA1"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "el más útil y eficaz factor de pronóstico",
   "por_que_correcta": "El estado de los ganglios axilares es el factor pronóstico más potente del cáncer de mama operable. La guía lo dice así: el estado ganglionar «sigue siendo un factor pronóstico mayor y define el tratamiento adyuvante».",
   "por_que_no": {
    "a": "La catepsina D se estudió como marcador, pero no se usa en la práctica.",
    "c": "La negatividad de receptores empeora el pronóstico, pero pesa menos que los ganglios.",
    "d": "El componente intraductal extenso influye en el margen y la recidiva local, no es el principal factor pronóstico.",
    "e": "BRCA1 es un factor de riesgo hereditario más que el factor pronóstico más útil."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (respuesta del intento).",
    "guia": "Guía, p. 30: el estado ganglionar «sigue siendo un factor pronóstico mayor y define el tratamiento adyuvante».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-B-070",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 71",
   "enunciado": "La menopausia tardía aumenta el riesgo de desarrollar un cáncer de mama:",
   "alternativas": [
    {
     "id": "a",
     "texto": "En casos de menarquia precoz"
    },
    {
     "id": "b",
     "texto": "En mujeres sometidas a terapia hormonal sustitutiva (THS)"
    },
    {
     "id": "c",
     "texto": "Si hay antecedentes familiares de cáncer de mama"
    },
    {
     "id": "d",
     "texto": "En todas las mujeres"
    },
    {
     "id": "e",
     "texto": "En multíparas"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "La menopausia tardía",
   "por_que_correcta": "La menopausia tardía (> 55 años) es por sí sola un factor de riesgo hormonal: prolonga la exposición a estrógenos en cualquier mujer, sin necesitar otro factor asociado.",
   "por_que_no": {
    "a": "La menarquia precoz es otro factor de riesgo independiente; no es condición para que la menopausia tardía cuente.",
    "b": "La THS es un factor aparte; no es requisito.",
    "c": "La historia familiar es un factor aparte; no es requisito.",
    "e": "La multiparidad no es requisito; de hecho la nuliparidad es la que aumenta el riesgo."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 89), tabla de factores de riesgo: «Menarquía precoz (edad < 12 años o menopausía tardía (edad > 55 años)» entre los factores hormonales.",
    "guia": "Guía, p. 29: exposición estrogénica prolongada (menarquia precoz, menopausia tardía, nuliparidad).",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 89.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-B-071",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 72",
   "enunciado": "¿Cuál de los siguientes factores NO aumenta el riesgo de padecer cáncer de mama?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Consumo moderado de alcohol"
    },
    {
     "id": "b",
     "texto": "Obesidad"
    },
    {
     "id": "c",
     "texto": "Mastopatía fibroquística"
    },
    {
     "id": "d",
     "texto": "Menopausia tardía"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "NO aumenta el riesgo",
   "por_que_correcta": "Alcohol, obesidad posmenopáusica y menopausia tardía están en la tabla de factores de riesgo del docente. Lo que eleva el riesgo entre las lesiones benignas es la hiperplasia (florida o atípica), no la mastopatía fibroquística simple.",
   "por_que_no": {
    "a": "10 g de etanol al día aumentan el riesgo de cáncer de mama en torno al 10 %.",
    "b": "La obesidad posmenopáusica aumenta el riesgo (estrógenos 50-100 % más altos).",
    "d": "La menopausia tardía (> 55 años) es factor de riesgo hormonal."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama: alcohol (diap. 95), obesidad (diap. 94), menopausia tardía (diap. 89); entre los antecedentes de riesgo figura la «hiperplasia florida o atípica» (diap. 86).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 95.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 94.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 89.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 86."
   ]
  },
  {
   "id": "ESP1-B-072",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Cáncer hereditario",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 73",
   "enunciado": "Señala cuál de las siguientes afirmaciones sobre los genes BRCA1 y BRCA2 implicados en el cáncer de mama hereditario es FALSA:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El riesgo de padecer además cáncer de ovario es mayor en las mujeres portadoras de mutación en el BRCA1 que en las portadoras de mutación en el BRCA2"
    },
    {
     "id": "b",
     "texto": "Los cánceres de mama asociados a mutaciones en el BRCA1 son generalmente bien diferenciados en comparación con los cánceres de mama esporádicos"
    },
    {
     "id": "c",
     "texto": "Mutaciones en los genes BRCA1 y BRCA2 son muy poco frecuentes en cánceres de mama esporádicos"
    },
    {
     "id": "d",
     "texto": "El riesgo de padecer cáncer de mama en mujeres portadoras de mutaciones en alguno de estos genes es del 60-85 %"
    },
    {
     "id": "e",
     "texto": "La prevalencia de mutaciones del BRCA1 es mayor que la del BRCA2"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "es FALSA",
   "por_que_correcta": "Los tumores asociados a BRCA1 son típicamente triple negativos y de mal pronóstico, no «bien diferenciados». Por eso esa es la afirmación falsa.",
   "por_que_no": {
    "a": "Es verdadera según el banco; no es la falsa.",
    "c": "Es verdadera: la mayoría de los cánceres esporádicos no tienen mutación BRCA.",
    "d": "Es una cifra de riesgo aceptada en el pretest como verdadera; no es la falsa.",
    "e": "Se acepta como verdadera en el pretest; la falsa es la de la diferenciación."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 233): el subtipo que «se asocia con una alta frecuencia de mutaciones en BRCA1 y mal pronóstico» es el triple negativo (basal like). En el pretest no hay clave oficial; la alternativa marcada en el intento fue la del 60-85 %, que no es la falsa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 233."
   ]
  },
  {
   "id": "ESP1-B-073",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Cáncer hereditario",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 74",
   "enunciado": "Una mujer de 33 años consulta por un nódulo mamario que se diagnostica de carcinoma ductal. Su madre a los 50 años y su hermana a los 40 han tenido cáncer de mama. Su tía materna a los 45 y su abuela a los 55 han tenido cáncer de ovario. ¿Qué estudio solicitaría?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Receptor de progesterona"
    },
    {
     "id": "b",
     "texto": "Receptor de estrógeno"
    },
    {
     "id": "c",
     "texto": "P53"
    },
    {
     "id": "d",
     "texto": "BRCA1"
    },
    {
     "id": "e",
     "texto": "Her2"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "Su tía materna a los 45 y su abuela a los 55 han tenido cáncer de ovario",
   "por_que_correcta": "Varios familiares con cáncer de mama y de ovario, y una paciente joven: es el patrón del cáncer hereditario. Lo que corresponde es estudiar la mutación BRCA1 (y BRCA2) con consejería genética.",
   "por_que_no": {
    "a": "Los receptores se piden en todo tumor, pero no responden a la pregunta que plantea la historia familiar.",
    "b": "Igual que el anterior: es parte de la inmunohistoquímica, no del estudio hereditario.",
    "c": "P53 se asocia al síndrome de Li-Fraumeni (sarcomas, cerebro, suprarrenal), no a la asociación mama-ovario.",
    "e": "HER2 se pide en todo tumor; tampoco evalúa la herencia."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 86): factores genéticos — múltiples familiares, madre-hermana, «otros cánceres: ovario», «mutación de genes supresores: BRCA 1, BRCA 2»; diap. 427: «consejería genética para pacientes con riesgo para cáncer hereditario de mama».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 86.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 427."
   ]
  },
  {
   "id": "ESP1-B-074",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Inmunohistoquímica",
   "origen": "banco",
   "procedencia": "Parcial 2023-10, preg. 44 (clave marcada); Parcial validado 2021-1, preg. 48 (clave resaltada); Final 2020-2, preg. 7 (EVA); banco consolidado de Oncología, preg. 75",
   "enunciado": "Mujer de 67 años diagnosticada de un carcinoma ductal infiltrante de mama y sin historia familiar de neoplasia. ¿Qué estudios adicionales deben realizarse en el tumor por sus implicaciones clínico-terapéuticas?:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Estudio fenotípico completo mediante citometría de flujo"
    },
    {
     "id": "b",
     "texto": "Estudio de receptores hormonales y de HER2"
    },
    {
     "id": "c",
     "texto": "Estudio de receptores hormonales, ecadherina y estudio de familiares de primer grado"
    },
    {
     "id": "d",
     "texto": "Estudio de BRCA 1-2 y estudio de familiares de primer grado"
    },
    {
     "id": "e",
     "texto": "HER 2"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "sin historia familiar de neoplasia",
   "por_que_correcta": "En todo carcinoma infiltrante se estudian receptores hormonales y HER2, porque definen el subtipo molecular y con él el tratamiento (hormonoterapia, terapia anti-HER2). Sin historia familiar no hay indicación de estudio genético.",
   "por_que_no": {
    "a": "La citometría de flujo no es el estudio estándar del carcinoma de mama.",
    "c": "La e-cadherina distingue ductal de lobulillar y el estudio familiar no corresponde sin antecedentes.",
    "d": "El estudio BRCA se indica con historia familiar o paciente joven; aquí no hay ninguna de las dos.",
    "e": "HER2 solo es incompleto: faltan los receptores hormonales."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 44), resaltada en el Parcial validado 2021-1 (preg. 48) y marcada en el Final 2020-2. Diapositivas de Cáncer de mama (diap. 224): la clasificación molecular se arma con receptores de estrógeno y progesterona y HER2.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224."
   ]
  },
  {
   "id": "ESP1-B-075",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "HER2",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 76",
   "enunciado": "¿Cuál de estas sentencias sobre el cáncer de mama y el oncogén Her-2 (neu) es INCORRECTA?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Las pacientes con cánceres que sobreexpresan el oncogén Her-2 se pueden beneficiar del tratamiento con trastuzumab"
    },
    {
     "id": "b",
     "texto": "Se sobreexpresa en un 20-25 % de los cánceres de mama"
    },
    {
     "id": "c",
     "texto": "Existen datos que señalan que se benefician del tratamiento con antraciclinas"
    },
    {
     "id": "d",
     "texto": "La sobreexpresión de Her-2 se ha relacionado con resistencia al tratamiento antihormonal"
    },
    {
     "id": "e",
     "texto": "Los cánceres de mama que sobreexpresan el oncogén Her-2 tienen mejor pronóstico"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "es INCORRECTA",
   "por_que_correcta": "Los tumores que sobreexpresan HER2 son más agresivos; lo que mejoró su evolución fue el tratamiento dirigido. Decir que tienen mejor pronóstico es lo incorrecto.",
   "por_que_no": {
    "a": "Es correcta: el trastuzumab es el tratamiento dirigido anti-HER2.",
    "b": "Es la cifra aceptada en el pretest como correcta.",
    "c": "Se acepta como correcta en el pretest.",
    "d": "Se acepta como correcta en el pretest."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (respuesta del intento).",
    "guia": "Guía, p. 29: «los que sobreexpresan HER2 son más agresivos pero tienen tratamiento dirigido eficaz».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224."
   ]
  },
  {
   "id": "ESP1-B-076",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Patología benigna",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 77",
   "enunciado": "Mujer de 25 años con tumoración en mama derecha, sin antecedentes personales ni familiares de cáncer de mama. Si se piensa que el tumor es benigno, ¿cuál sería la causa más frecuente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quiste intraductal"
    },
    {
     "id": "b",
     "texto": "Cáncer de mama"
    },
    {
     "id": "c",
     "texto": "Fibroadenoma"
    },
    {
     "id": "d",
     "texto": "Ninguna de las anteriores"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "Mujer de 25 años",
   "por_que_correcta": "En una mujer joven, el tumor benigno típico es el fibroadenoma, que aparece sobre todo entre los 14 y 35 años.",
   "por_que_no": {
    "a": "El quiste intraductal no es la causa más frecuente de nódulo benigno a esta edad.",
    "b": "El enunciado pide la causa benigna; además el cáncer es raro a los 25 años sin factores de riesgo.",
    "d": "Sí hay una respuesta correcta entre las opciones."
   },
   "fuentes": {
    "docente": "Clave sin marca en el banqueo. Las diapositivas mencionan el fibroadenoma en el diagnóstico diferencial del tumor filodes (diap. 481), sin dar su frecuencia.",
    "guia": null,
    "libro": "StatPearls, Breast Fibroadenoma (2022): «ocurre con más frecuencia en mujeres entre los 14 y 35 años» (traducción propia).",
    "discrepancia": false
   },
   "referencias": [
    "Ajmal M, Khan M, Van Fossen K. Breast Fibroadenoma. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022. Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK535345/",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 481."
   ]
  },
  {
   "id": "ESP1-B-077",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Tumor filodes",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 78",
   "enunciado": "¿Cuál de las siguientes afirmaciones es verdadera sobre el tumor Phyllodes?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Su tratamiento requiere muestreo de ganglios axilares"
    },
    {
     "id": "b",
     "texto": "Metastatiza a través de los vasos linfáticos"
    },
    {
     "id": "c",
     "texto": "Su tratamiento requiere terapia hormonal"
    },
    {
     "id": "d",
     "texto": "Han disminuido la recidiva con un margen negativo de 1 cm de excisión"
    },
    {
     "id": "e",
     "texto": "Tienen disminución de la celularidad del estroma en comparación con el fibroadenoma"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "tumor Phyllodes",
   "por_que_correcta": "El tumor filodes se trata con escisión amplia, sin estadificación axilar; el margen libre amplio es lo que reduce la recidiva. Es la única afirmación compatible con el algoritmo del docente.",
   "por_que_no": {
    "a": "El algoritmo indica «escisión amplia sin estadiaje axilar»: no se muestrean ganglios.",
    "b": "No se disemina por vía linfática; por eso no se toca la axila.",
    "c": "No se trata con hormonoterapia.",
    "e": "Es al revés: el filodes tiene más celularidad del estroma que el fibroadenoma."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 481): tumor filodes borderline o maligno → «escisión amplia sin estadiaje axilar + considerar RT»; diap. 482: recurrencia → «reescisión con márgenes AMPLIOS sin estadiaje axilar».",
    "guia": null,
    "libro": "J Surg Oncol 2005 (172 casos): la escisión amplia con margen libre es la terapia inicial preferible y no se recomienda la disección axilar rutinaria.",
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 481.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 482.",
    "Surgical treatment of phyllodes tumors of the breast: retrospective review of 172 cases. J Surg Oncol. 2005;91(3):185-94. Disponible en: https://pubmed.ncbi.nlm.nih.gov/16118768/"
   ]
  },
  {
   "id": "ESP1-B-078",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Metástasis",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 79",
   "enunciado": "El sitio más frecuente de metástasis a distancia del cáncer de mama es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mama contralateral"
    },
    {
     "id": "b",
     "texto": "Hueso"
    },
    {
     "id": "c",
     "texto": "Hígado"
    },
    {
     "id": "d",
     "texto": "Pulmón"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "sitio más frecuente de metástasis a distancia",
   "por_que_correcta": "El hueso es el sitio más frecuente de metástasis a distancia del cáncer de mama.",
   "por_que_no": {
    "a": "La mama contralateral es un segundo primario, no el sitio de metástasis más frecuente.",
    "c": "El hígado es sitio de metástasis visceral, menos frecuente que el hueso.",
    "d": "El pulmón es frecuente, pero menos que el hueso."
   },
   "fuentes": {
    "docente": "Clave sin marca en el banqueo. Las diapositivas incluyen la gammagrafía ósea en el estudio de la enfermedad recurrente o metastásica (diap. 458), sin dar la frecuencia.",
    "guia": null,
    "libro": "Chen et al., Sci Rep 2017: «el hueso es el sitio más frecuente de metástasis a distancia del cáncer de mama» (traducción propia).",
    "discrepancia": false
   },
   "referencias": [
    "Chen WZ, Shen JF, Zhou Y, Chen XY, Liu JM, Liu ZL. Clinical characteristics and risk factors for developing bone metastases in patients with breast cancer. Sci Rep. 2017;7. Disponible en: https://pmc.ncbi.nlm.nih.gov/articles/PMC5595860/",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 458."
   ]
  },
  {
   "id": "ESP1-B-079",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "BI-RADS",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 80",
   "enunciado": "Paciente mujer de 55 años a la que se hace tamizaje de cáncer de mama y en la mamografía se encuentra una lesión sugestiva de malignidad. ¿Qué BI-RADS le corresponde y cuál es la actitud a tomar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "BI-RADS 3 – Otra mamografía en 6 meses"
    },
    {
     "id": "b",
     "texto": "BI-RADS 4 – Biopsia"
    },
    {
     "id": "c",
     "texto": "BI-RADS 3 – Biopsia"
    },
    {
     "id": "d",
     "texto": "BI-RADS 4 – Otra mamografía en 6 meses"
    },
    {
     "id": "e",
     "texto": "BI-RADS 5 – Biopsia"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "lesión sugestiva de malignidad",
   "por_que_correcta": "«Altamente sugestivo de malignidad» es la definición de BI-RADS 5, y la conducta es biopsia core.",
   "por_que_no": {
    "a": "BI-RADS 3 es probablemente benigno; se controla en el tiempo.",
    "b": "BI-RADS 4 es «sospechoso», también va a biopsia, pero «sugestivo de malignidad» corresponde al 5.",
    "c": "BI-RADS 3 no va a biopsia de entrada; se sigue con imágenes.",
    "d": "BI-RADS 4 no se controla: se biopsia."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 148): «BI-RADS 4 (sospechoso) o BI-RADS 5 (altamente sugestivo de malignidad) → biopsia core».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 148."
   ]
  },
  {
   "id": "ESP1-B-080",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "BI-RADS",
   "origen": "banco",
   "procedencia": "Parcial 2023-10, preg. 46 (clave marcada); Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 81",
   "enunciado": "Mujer de 40 años que consulta porque desde hace un mes se nota un bulto en el cuadrante superoexterno de la mama derecha. Aporta un informe de una mamografía que describe una lesión BIRADS 3. ¿Cuál es la actitud a seguir?:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tranquilizarle, puesto que ya se ha hecho una prueba de imagen y se ha descartado malignidad"
    },
    {
     "id": "b",
     "texto": "Esa clasificación implica probablemente cirugía dado que la probabilidad de cáncer es mayor del 10 %. Se lo explica y le deriva de forma preferente a la Unidad de Mama"
    },
    {
     "id": "c",
     "texto": "Se trata de un hallazgo probablemente benigno, dado que hay menos de un 2 % de probabilidad de cáncer. Le explica que requiere de un seguimiento cada 6-12 meses hasta los 24 meses o una biopsia"
    },
    {
     "id": "d",
     "texto": "Los hallazgos son de baja sospecha de cáncer (entre un 2 y un 10 %) pero es necesario hacer una biopsia"
    },
    {
     "id": "e",
     "texto": "Debe tener tumorectomía con biopsia de ganglio centinela"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "lesión BIRADS 3",
   "por_que_correcta": "BI-RADS 3 es «probablemente benigno»: según la NCCN que usa tu docente, se sigue con examen físico e imágenes durante 24 meses para ver si cambia.",
   "por_que_no": {
    "a": "No se puede tranquilizar sin seguimiento: BI-RADS 3 no descarta del todo la malignidad.",
    "b": "> 10 % de probabilidad de cáncer corresponde a categorías más altas (4b-5), no al 3.",
    "d": "«Baja sospecha, 2-10 %» corresponde al BI-RADS 4a, que sí va a biopsia.",
    "e": "No se opera una lesión probablemente benigna sin diagnóstico."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 46). Diapositivas de Cáncer de mama (diap. 154): BI-RADS 3 → «seguimiento con examen físico e imágenes… por 24 meses para evaluar cambios».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 154.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 148."
   ]
  },
  {
   "id": "ESP1-B-081",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Imagen",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 26 (clave resaltada); banco consolidado de Oncología, preg. 82",
   "enunciado": "¿Cuál de los siguientes exámenes radiológicos para la detección de los tumores mamarios ofrece mayor utilidad?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tomosíntesis mamaria"
    },
    {
     "id": "b",
     "texto": "PET Scan"
    },
    {
     "id": "c",
     "texto": "Gammagrafía con sestamibi"
    },
    {
     "id": "d",
     "texto": "Gammagrafía con impedancia eléctrica"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "para la detección de los tumores mamarios",
   "por_que_correcta": "La tomosíntesis (mamografía 3D) es el estudio que el docente pone en el algoritmo diagnóstico de la masa palpable y del tamizaje; las otras no son pruebas de detección.",
   "por_que_no": {
    "b": "El PET se usa en estadificación de enfermedad avanzada, no para detectar tumores mamarios.",
    "c": "La gammagrafía con sestamibi no es un estudio de detección estándar.",
    "d": "La impedancia eléctrica no es un estudio de detección validado."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 26). Diapositivas de Cáncer de mama (diap. 138-139): «Mamografía TOMOSÍNTESIS»; diap. 148: diagnóstico mamográfico «con TOMOSÍNTESIS».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 138.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 148."
   ]
  },
  {
   "id": "ESP1-B-082",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Carcinoma in situ",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 83",
   "enunciado": "El tipo de carcinoma in situ de la mama con más riesgo de recurrencia en cirugía conservadora y peor pronóstico es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cribiforme"
    },
    {
     "id": "b",
     "texto": "Comedocarcinoma"
    },
    {
     "id": "c",
     "texto": "Sólido"
    },
    {
     "id": "d",
     "texto": "Micropapilar"
    },
    {
     "id": "e",
     "texto": "Papilar"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "más riesgo de recurrencia",
   "por_que_correcta": "El patrón comedo (necrosis central con alto grado nuclear) es el carcinoma ductal in situ de peor pronóstico y más recurrencia tras cirugía conservadora.",
   "por_que_no": {
    "a": "El cribiforme suele ser de bajo grado y mejor pronóstico.",
    "c": "El sólido no es el de mayor riesgo clásico.",
    "d": "El micropapilar no es el de peor pronóstico entre los in situ clásicos.",
    "e": "El papilar in situ es de bajo grado."
   },
   "fuentes": {
    "docente": "Clave sin marca en el banqueo. El subtipo comedo no figura en el texto de las diapositivas ni en la guía: clave deducida por criterio propio.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 427."
   ]
  },
  {
   "id": "ESP1-B-083",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Enfermedad de Paget",
   "origen": "banco",
   "procedencia": "Banqueo UPAO de Oncología; banco consolidado de Oncología, preg. 84",
   "enunciado": "Sobre la enfermedad de Paget del pezón, señale lo correcto:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Se origina en los conductos del pezón"
    },
    {
     "id": "b",
     "texto": "Es un cáncer in situ al inicio"
    },
    {
     "id": "c",
     "texto": "Se puede extender a la piel de la areola"
    },
    {
     "id": "d",
     "texto": "Puede avanzar a infiltrante"
    },
    {
     "id": "e",
     "texto": "Todas"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "enfermedad de Paget del pezón",
   "por_que_correcta": "Las células de Paget son células ductales cancerosas que migran por los conductos hasta la epidermis del pezón. En los tipos histológicos del docente aparece tanto «Paget e intraductal» como «Paget e infiltrante».",
   "por_que_no": {
    "a": "Es cierta, pero no es la única.",
    "b": "Es cierta (Paget e intraductal), pero no es la única.",
    "c": "Es cierta, pero no es la única.",
    "d": "Es cierta (Paget e infiltrante), pero no es la única."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 478): «las células de Paget son células ductales cancerosas que han migrado… hacia la epidermis del pezón»; diap. 173: tipos histológicos «Enfermedad de Paget e intraductal» y «Enfermedad de Paget e infiltrante».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 478.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 173."
   ]
  },
  {
   "id": "ESP1-B-084",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Estadificación",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 85",
   "enunciado": "Mujer de 43 años, sin antecedentes oncológicos familiares, con tumor en mama izquierda en radio 12 a 6 cm del pezón, de 3 × 2 cm, sin infiltración de piel, axila clínicamente negativa y estudios de extensión sin metástasis. ¿Qué estadio le corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "cT1 cN0 M0"
    },
    {
     "id": "b",
     "texto": "cT2 cN0 M0"
    },
    {
     "id": "c",
     "texto": "cT3 cN0 M0"
    },
    {
     "id": "d",
     "texto": "cT4b cN0 M0"
    },
    {
     "id": "e",
     "texto": "cT4a cN0 M0"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "de 3 × 2 cm, sin infiltración de piel",
   "por_que_correcta": "En mama, T2 es el tumor de > 2 a ≤ 5 cm. Con 3 cm, sin piel ni pared, y axila negativa: cT2 cN0 M0.",
   "por_que_no": {
    "a": "T1 es ≤ 2 cm.",
    "c": "T3 es > 5 cm.",
    "d": "T4b exige compromiso de piel (ulceración, satélites, edema).",
    "e": "T4a exige extensión a la pared torácica."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama: T1a-c hasta 2 cm (diap. 183); «> 2 - < 5 cm» (diap. 184); extensión a pared (diap. 185); piel (diap. 186).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 183.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 184.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186."
   ]
  },
  {
   "id": "ESP1-B-085",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Estadificación",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 86",
   "enunciado": "Paciente mujer de 33 años, con diagnóstico confirmatorio de carcinoma ductal de mama derecha, que presenta tumoración en mama derecha asociada a piel de naranja, con presencia de adenopatía dura supraclavicular y ausencia de metástasis a distancia. El estadio clínico que le corresponde es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "T4a N2 M1"
    },
    {
     "id": "b",
     "texto": "T2 N2c M0"
    },
    {
     "id": "c",
     "texto": "T4b N3c M0"
    },
    {
     "id": "d",
     "texto": "T3 N3a M0"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "asociada a piel de naranja, con presencia de adenopatía dura supraclavicular",
   "por_que_correcta": "El edema de la piel (piel de naranja) es T4b, y los ganglios supraclaviculares son N3c (regionales, no M1). Sin metástasis a distancia: T4b N3c M0.",
   "por_que_no": {
    "a": "No es M1: el enunciado dice que no hay metástasis a distancia, y el supraclavicular es N, no M.",
    "b": "Con piel de naranja ya no es T2.",
    "d": "N3a son los infraclaviculares (nivel III); el supraclavicular es N3c."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama: «edema (incluida piel de naranja, piel rugosa)» en la T4 (diap. 186); cN incluye «ganglios supraclaviculares» como regionales (diap. 193).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 193."
   ]
  },
  {
   "id": "ESP1-B-086",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Operabilidad",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 87",
   "enunciado": "Una paciente con cáncer de mama es primariamente operable cuando:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tiene metástasis pulmonar (M1)"
    },
    {
     "id": "b",
     "texto": "Presenta conglomerado ganglionar axilar (N2)"
    },
    {
     "id": "c",
     "texto": "Presenta piel de naranja"
    },
    {
     "id": "d",
     "texto": "Presenta edema de piel"
    },
    {
     "id": "e",
     "texto": "Tiene un tumor no mayor de 5 cm, sin adenopatías axilares"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "primariamente operable",
   "por_que_correcta": "Un tumor ≤ 5 cm (T2) sin ganglios es cáncer de mama operable: la cirugía puede ir primero. Piel de naranja, edema o ganglios fijos son enfermedad localmente avanzada, que va primero a tratamiento sistémico.",
   "por_que_no": {
    "a": "Con metástasis (M1) la cirugía no es el tratamiento primario.",
    "b": "El conglomerado ganglionar (N2) es enfermedad localmente avanzada.",
    "c": "La piel de naranja es T4: localmente avanzado.",
    "d": "El edema de piel también es T4."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 184-186): T2 hasta 5 cm; piel de naranja y edema son T4.",
    "guia": "Guía, p. 30: la cirugía de entrada es para el cáncer operable y «se difiere en el carcinoma inflamatorio y en la enfermedad localmente avanzada».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186."
   ]
  },
  {
   "id": "ESP1-B-087",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Ganglio centinela",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 88",
   "enunciado": "Mujer con cáncer de mama estadio T2 en la que no se palpan adenopatías en el examen físico; el paso siguiente es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia incisional"
    },
    {
     "id": "b",
     "texto": "Linfadenectomía axilar"
    },
    {
     "id": "c",
     "texto": "Biopsia de ganglio centinela"
    },
    {
     "id": "d",
     "texto": "Biopsia escisional"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "no se palpan adenopatías",
   "por_que_correcta": "En T1-T2 con axila clínica y ecográficamente negativa, el paso para estadificar la axila es la biopsia de ganglio centinela.",
   "por_que_no": {
    "a": "La incisional no se usa para estadificar la axila.",
    "b": "La linfadenectomía se reserva para axila positiva.",
    "d": "La escisional es una biopsia diagnóstica del tumor, no de la axila."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 334): «T1-2 con ecografía axilar negativa → biopsia del ganglio centinela».",
    "guia": "Guía, p. 30: biopsia de ganglio centinela «de elección en la axila clínicamente y ecográficamente negativa».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 334.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-B-088",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Ganglio centinela",
   "origen": "banco",
   "procedencia": "Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 89",
   "enunciado": "Sobre la biopsia selectiva del ganglio centinela y el mapa linfático en el cáncer de mama:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Está indicada en el cáncer de mama diseminado"
    },
    {
     "id": "b",
     "texto": "Está indicada si hay afectación clínica de los ganglios axilares"
    },
    {
     "id": "c",
     "texto": "Si es negativa no necesita ampliar la cirugía axilar"
    },
    {
     "id": "d",
     "texto": "No está indicada en varones con cáncer de mama"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "biopsia selectiva del ganglio centinela",
   "por_que_correcta": "Esa es la razón de la técnica: si el centinela es negativo, no se hace disección axilar posterior.",
   "por_que_no": {
    "a": "En enfermedad diseminada no se estadifica la axila con centinela.",
    "b": "Con axila clínicamente positiva se confirma con BAAF o core y se va a disección (o neoadyuvancia).",
    "d": "El centinela también se usa en varones con axila negativa."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 316, NCCN): «Biopsia de GC negativo → No disección axilar posterior nivel I/II»; ganglios palpables → BAAF/core.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 316."
   ]
  },
  {
   "id": "ESP1-B-089",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Radioterapia",
   "origen": "banco",
   "procedencia": "Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 90",
   "enunciado": "En relación con la irradiación parcial de la mama, señale la respuesta correcta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "No está indicada en pacientes posmenopáusicas"
    },
    {
     "id": "b",
     "texto": "Solo la pueden recibir pacientes diagnosticadas de carcinoma in situ"
    },
    {
     "id": "c",
     "texto": "Es de elección en pacientes con ganglios positivos"
    },
    {
     "id": "d",
     "texto": "No se debe emplear cuando hay más de un foco tumoral o lesiones multicéntricas"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "irradiación parcial de la mama",
   "por_que_correcta": "La irradiación parcial trata solo el lecho tumoral; tu docente la plantea en pacientes seleccionadas de bajo riesgo. Con varios focos o lesiones multicéntricas no sirve tratar un solo lecho.",
   "por_que_no": {
    "a": "Al contrario: las candidatas típicas son posmenopáusicas de bajo riesgo.",
    "b": "No es exclusiva del in situ; también se usa en invasores seleccionados.",
    "c": "Con ganglios positivos se irradia toda la mama y las áreas ganglionares, no solo el lecho."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 434): «considerar radiación mamaria parcial acelerada (APBI) en pacientes seleccionadas de bajo riesgo»; diap. 427: APBI/PBI también en CDIS.",
    "guia": "Guía, p. 30: la enfermedad multicéntrica es contraindicación de la cirugía conservadora.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 434.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 427.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-B-090",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Tratamiento local",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 91",
   "enunciado": "Una mujer de 59 años presenta una imagen espiculada de 8 mm de diámetro en la mama derecha en el estudio mamográfico. Una biopsia con aguja gruesa evidencia la presencia de un carcinoma ductal infiltrante grado 2, con receptores para estrógenos positivos en un 80 % de las células tumorales, receptores para progesterona positivos del 60 % y un oncogén Her-2 negativo. ¿Cuál sería el tratamiento primario de elección?:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mastectomía con linfadenectomía axilar"
    },
    {
     "id": "b",
     "texto": "Quimioterapia primaria en combinación con trastuzumab"
    },
    {
     "id": "c",
     "texto": "Tumorectomía con exéresis del ganglio centinela con radioterapia posterior"
    },
    {
     "id": "d",
     "texto": "Radioterapia externa como único tratamiento"
    },
    {
     "id": "e",
     "texto": "Hormonoterapia con tamoxifeno"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "imagen espiculada de 8 mm",
   "por_que_correcta": "Tumor pequeño, unifocal y con axila negativa: el tratamiento primario es cirugía conservadora con ganglio centinela, siempre asociada a radioterapia de la mama.",
   "por_que_no": {
    "a": "La mastectomía con linfadenectomía es excesiva para un tumor de 8 mm con axila negativa.",
    "b": "El trastuzumab es para HER2 positivo; aquí es negativo.",
    "d": "La radioterapia sola no es tratamiento primario de un tumor operable.",
    "e": "La hormonoterapia es adyuvante tras la cirugía en tumores con receptores positivos, no el tratamiento primario."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (respuesta del intento).",
    "guia": "Guía, p. 30: cirugía conservadora «siempre asociada a radioterapia de la mama restante»; centinela en axila negativa.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 434."
   ]
  },
  {
   "id": "ESP1-B-091",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Tratamiento local",
   "origen": "banco",
   "procedencia": "Banqueo MedClub UPAO 2025-20; banco consolidado de Oncología, preg. 92",
   "enunciado": "Mujer de 49 años, BI-RADS 5, lesión de 1,8 cm; biopsia: carcinoma ductal infiltrante RE+/RP+, HER2−, Ki-67 12 %. TC sin metástasis, ganglio axilar clínicamente negativo, ECOG 0. ¿Tratamiento local óptimo?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mastectomía obligatoria"
    },
    {
     "id": "b",
     "texto": "Cirugía conservadora + radioterapia mamaria, con biopsia de ganglio centinela"
    },
    {
     "id": "c",
     "texto": "Quimioterapia neoadyuvante"
    },
    {
     "id": "d",
     "texto": "Radioterapia exclusiva"
    },
    {
     "id": "e",
     "texto": "Mastectomía + disección axilar de rutina"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "ganglio axilar clínicamente negativo",
   "por_que_correcta": "Tumor de 1,8 cm luminal A (Ki-67 < 20 %) con axila negativa: cirugía conservadora con centinela y radioterapia de la mama.",
   "por_que_no": {
    "a": "La mastectomía no es obligatoria: se reserva si no se logra margen o hay multicentricidad.",
    "c": "La neoadyuvancia se indica en localmente avanzados o fenotipos agresivos, no en un luminal A pequeño.",
    "d": "La radioterapia sola no es tratamiento local curativo.",
    "e": "Con axila negativa no se hace disección axilar de rutina."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 224): luminal A = RE/RP +, Ki-67 < 20 %, buen pronóstico.",
    "guia": "Guía, p. 29-30: conservación siempre que se logre margen libre y se dé radioterapia; centinela en axila negativa.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224."
   ]
  },
  {
   "id": "ESP1-B-092",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico y estadificación",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 93",
   "enunciado": "Paciente mujer de 48 años, que se realiza una biopsia con aguja gruesa por un tumor de mama derecha de 2.5 × 2 cm en R12 a 6 cm de pezón. El resultado: carcinoma ductal infiltrante, grado 2, no invasión linfovascular. Axila clínicamente negativa. El manejo a seguir es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El esquema sería: radioterapia + mastectomía + quimioterapia"
    },
    {
     "id": "b",
     "texto": "Solicitar inmunohistoquímica y terminar de estadiar a la paciente con imágenes"
    },
    {
     "id": "c",
     "texto": "Mandarla a quimioterapia y radioterapia neoadyuvante"
    },
    {
     "id": "d",
     "texto": "Administrarle hormonoterapia de inicio y luego cirugía"
    },
    {
     "id": "e",
     "texto": "Operar de inmediato. Realizar tumorectomía + biopsia de ganglio centinela"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "El resultado: carcinoma ductal infiltrante, grado 2",
   "por_que_correcta": "Con la histología confirmada, falta lo que decide el tratamiento: los receptores y HER2 (subtipo molecular) y la estadificación por imágenes. Recién después se planifica.",
   "por_que_no": {
    "a": "No se decide un esquema sin conocer el subtipo ni el estadio.",
    "c": "La neoadyuvancia depende del subtipo y del estadio, que aún no se conocen.",
    "d": "La hormonoterapia requiere saber si tiene receptores hormonales.",
    "e": "Operar sin completar el estudio impide elegir bien la secuencia (por ejemplo, si fuera triple negativo o HER2)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 427): estudio diagnóstico con revisión de patología y «determinación del status de receptor de estrógeno»; diap. 224: clasificación molecular por receptores y HER2.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 427.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224."
   ]
  },
  {
   "id": "ESP1-B-093",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Tratamiento local",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 38 (clave resaltada); banco consolidado de Oncología, preg. 94",
   "enunciado": "Una paciente mujer de 51 años de edad, sin antecedentes oncológicos familiares, con diagnóstico de carcinoma ductal infiltrante de mama derecha de 1.2 cm de tamaño tumoral, localizado en radio 12 a 5 cm de pezón, sin compromiso de piel ni de axila ipsilateral, con inmunohistoquímica luminal B Her 2 (−) y con estudios de imágenes que no muestran multicentricidad, debe realizarse:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quimioterapia y radioterapia neoadyuvante por el resultado de inmunohistoquímica"
    },
    {
     "id": "b",
     "texto": "Mastectomía radical modificada tipo Madden"
    },
    {
     "id": "c",
     "texto": "Cirugía de conservación de mama más biopsia de ganglio centinela"
    },
    {
     "id": "d",
     "texto": "Mastectomía total derecha + biopsia de ganglio centinela"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "no muestran multicentricidad",
   "por_que_correcta": "Tumor de 1,2 cm, unifocal, sin piel ni axila comprometidas: indicación de cirugía conservadora con ganglio centinela. El subtipo luminal B define el tratamiento sistémico, no la cirugía.",
   "por_que_no": {
    "a": "El luminal B no obliga a neoadyuvancia en un tumor pequeño con axila negativa.",
    "b": "La mastectomía radical modificada incluye disección axilar: excesiva con axila negativa.",
    "d": "La mastectomía no es necesaria si se puede conservar con margen libre."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 38).",
    "guia": "Guía, p. 29-30: la mastectomía se elige cuando no se puede lograr margen (por ejemplo, tumor multicéntrico); centinela en axila negativa.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-B-094",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Localmente avanzado",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 95",
   "enunciado": "Mujer con diagnóstico de cáncer de mama estadio IIIB con proceso inflamatorio y axila ipsilateral positiva. Seleccione la conducta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Solo radioterapia para eliminar la infiltración de la piel"
    },
    {
     "id": "b",
     "texto": "Quimioterapia de inducción y luego mastectomía radical"
    },
    {
     "id": "c",
     "texto": "Mastectomía radical modificada tipo Patey a la brevedad posible"
    },
    {
     "id": "d",
     "texto": "Ninguna de las anteriores"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "con proceso inflamatorio",
   "por_que_correcta": "El cáncer inflamatorio o localmente avanzado no se opera de entrada: primero tratamiento sistémico (inducción o neoadyuvancia) y luego cirugía.",
   "por_que_no": {
    "a": "La radioterapia sola no controla una enfermedad que es sistémica.",
    "c": "Operar de entrada está contraindicado en el carcinoma inflamatorio.",
    "d": "Sí hay una alternativa correcta."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 453): «terapia sistémica preoperatoria → mastectomía y estadiaje quirúrgico axilar» si responde.",
    "guia": "Guía, p. 30: la cirugía «se difiere en el carcinoma inflamatorio y en la enfermedad localmente avanzada, que reciben tratamiento sistémico primero».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 453."
   ]
  },
  {
   "id": "ESP1-B-095",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Triple negativo",
   "origen": "banco",
   "procedencia": "Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 96",
   "enunciado": "Mujer de 28 años con diagnóstico reciente de carcinoma ductal infiltrante G3 de mama izquierda, fenotipo triple negativo, tumor de 3 cm con adenopatías axilares sospechosas en ecografía y TC. Señale la afirmación correcta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El tratamiento electivo de inicio es tumorectomía y biopsia selectiva de ganglio centinela"
    },
    {
     "id": "b",
     "texto": "El tratamiento electivo de inicio es mastectomía y disección radical de axila"
    },
    {
     "id": "c",
     "texto": "El tratamiento electivo de inicio es quimioterapia neoadyuvante, luego tumorectomía y disección axilar, complementado con radioterapia"
    },
    {
     "id": "d",
     "texto": "El tratamiento electivo de inicio es quimioterapia neoadyuvante, luego mastectomía y disección axilar, y finalmente trastuzumab"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "fenotipo triple negativo",
   "por_que_correcta": "Triple negativo con axila sospechosa: se empieza con quimioterapia neoadyuvante y luego cirugía con manejo axilar y radioterapia. No lleva trastuzumab porque es HER2 negativo.",
   "por_que_no": {
    "a": "Con axila sospechosa no se empieza con centinela y en el triple negativo con N+ conviene la neoadyuvancia.",
    "b": "Operar de entrada no es lo electivo en un triple negativo con ganglios.",
    "d": "El trastuzumab solo sirve en HER2 positivo; el triple negativo no lo tiene."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 450): la terapia sistémica preoperatoria se considera en «> T2 o cN+… o cT1c cN0 triple (−)»; diap. 419: triple negativo y HER2+ con alta probabilidad de esterilización axilar por neoadyuvancia.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 450.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 419."
   ]
  },
  {
   "id": "ESP1-B-096",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Ganglio centinela tras neoadyuvancia",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 43 (clave resaltada); banco consolidado de Oncología, preg. 97",
   "enunciado": "Paciente mujer de 35 años de edad, nulípara, con abuela y tía materna con cáncer de mama. Sin antecedentes personales de importancia. Recientemente diagnosticada de cáncer de mama triple negativo con Ki67 80 %, unifocal T1c (1.6 cm) N1 M0. Se le realiza quimioterapia neoadyuvante luego de la cual, al examen físico y en el estudio de imágenes no se evidencia compromiso ganglionar. El manejo de la axila debe ser:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia de ganglio centinela con impronta, patent blue y con radiotrazador"
    },
    {
     "id": "b",
     "texto": "Biopsia de ganglio centinela con impronta y patent blue"
    },
    {
     "id": "c",
     "texto": "Terapia endocrina múltiple"
    },
    {
     "id": "d",
     "texto": "Disección axilar radical ya que es un triple negativo"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "no se evidencia compromiso ganglionar",
   "por_que_correcta": "Un triple negativo N1 que se negativiza tras la neoadyuvancia puede estadificarse con ganglio centinela, pero con técnica dual (colorante + radiotrazador). La doble técnica tiene la mayor tasa de identificación.",
   "por_que_no": {
    "b": "Solo con colorante falta el radiotrazador: tras neoadyuvancia se exige técnica dual.",
    "c": "El triple negativo no tiene receptores: no responde a terapia endocrina.",
    "d": "Ser triple negativo no obliga a disección si la axila se negativizó; justamente es el subtipo que más responde."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 43). Diapositivas de Cáncer de mama (diap. 419): triple negativo o HER2+ con ganglio comprobado «pueden someterse a biopsia de ganglio centinela posquimioterapia… de modalidad dual»; diap. 286: azul patente 92,7 %, radiocoloide 97,6 %, técnicas combinadas 98,4 %.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 419.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 286."
   ]
  },
  {
   "id": "ESP1-B-097",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Ganglio centinela tras neoadyuvancia",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T3 (2022-10); banco consolidado de Oncología, preg. 98",
   "enunciado": "Paciente mujer de 45 años, con diagnóstico de neoplasia maligna de mama derecha cT1 cN0 M0 estadio IA - HER2 puro. Recibió quimioterapia neoadyuvante, luego de lo cual es sometida a cirugía de tumorectomía + biopsia de ganglio centinela. La impronta arrojó 0/5 ganglios. Sin embargo, 20 días después el resultado por parafina revela que en uno de los ganglios hay micrometástasis ganglionar. La conducta a seguir sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Completar disección axilar"
    },
    {
     "id": "b",
     "texto": "Darle quimioterapia y radioterapia complementaria"
    },
    {
     "id": "c",
     "texto": "Como es micrometástasis manejo conservador y observación"
    },
    {
     "id": "d",
     "texto": "Darle gammagrafía centellante"
    },
    {
     "id": "e",
     "texto": "Como es micrometástasis manejo conservador y derivarla a radioterapia"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "Recibió quimioterapia neoadyuvante",
   "por_que_correcta": "La micrometástasis aparece en un ganglio que ya recibió quimioterapia: es enfermedad residual tras neoadyuvancia. La conducta que da el banco es completar la disección axilar.",
   "por_que_no": {
    "b": "Repetir quimioterapia no resuelve el estadiaje axilar.",
    "c": "La omisión de disección por micrometástasis se aplica a pacientes sin neoadyuvancia (criterios ACOSOG Z0011/AMAROS).",
    "d": "La gammagrafía no aporta a la conducta axilar.",
    "e": "Igual que la observación: los criterios para evitar disección exigen que no haya recibido quimioterapia neoadyuvante."
   },
   "fuentes": {
    "docente": "Pretest sin clave oficial; la alternativa marcada en el intento fue «manejo conservador y derivarla a radioterapia». Diapositivas de Cáncer de mama (diap. 316, NCCN 4.2025): la omisión de la disección con 1-2 centinelas positivos o micrometástasis exige «No va a recibir QT neoadyuvante». Las diapositivas no muestran un paso específico para micrometástasis tras neoadyuvancia: clave deducida.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 316."
   ]
  },
  {
   "id": "ESP1-B-098",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Hormonoterapia",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología (E. Juárez), sección 3; banco consolidado de Oncología, preg. 100",
   "enunciado": "Paciente premenopáusica con cáncer de mama luminal A. ¿Qué tratamiento hormonal recomendaría?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tamoxifeno"
    },
    {
     "id": "b",
     "texto": "Anastrozol"
    },
    {
     "id": "c",
     "texto": "Fulvestrant"
    },
    {
     "id": "d",
     "texto": "Trastuzumab"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "Paciente premenopáusica",
   "por_que_correcta": "En la premenopáusica la terapia endocrina adyuvante de base es tamoxifeno por 5 años (con o sin supresión ovárica), según el esquema NCCN del docente.",
   "por_que_no": {
    "b": "El anastrozol (inhibidor de aromatasa) en premenopáusicas solo sirve si se asocia supresión ovárica.",
    "c": "El fulvestrant se usa en enfermedad avanzada, no como adyuvancia de entrada.",
    "d": "El trastuzumab es para HER2 positivo; luminal A es HER2 negativo."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de mama (diap. 214): «Premenopáusica al momento del diagnóstico: Tamoxifeno por 5 años (categoría 1) ± supresión o ablación ovárica… o inhibidor de la aromatasa por 5 años + supresión ovárica».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 214.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 207."
   ]
  },
  {
   "id": "ESP1-B-099",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Márgenes y axila",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 2 (clave marcada en la captura del EVA); E-Oncología («Virtual»); banco consolidado de Oncología, preg. 99",
   "enunciado": "Una mujer de 45 años presenta un cáncer de mama de 1.8 cm con márgenes comprometidos. Tiene linfoadenomegalia palpable axilar. ¿Cuál es la mejor opción de tratamiento?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Rerresección con márgenes negativos y disección radical axilar previo BAAF"
    },
    {
     "id": "b",
     "texto": "Mastectomía con biopsia de ganglio centinela"
    },
    {
     "id": "c",
     "texto": "Rerresección con márgenes negativos y biopsia de ganglio centinela"
    },
    {
     "id": "d",
     "texto": "Solo mastectomía"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "Tiene linfoadenomegalia palpable axilar",
   "por_que_correcta": "El margen comprometido obliga a reintervenir para ampliar, sin necesidad de mastectomía. La adenopatía palpable se confirma con BAAF y, si es positiva, la axila va a disección (no a centinela).",
   "por_que_no": {
    "b": "La mastectomía no es necesaria si se puede ampliar el margen, y el centinela no se usa con ganglios palpables.",
    "c": "El centinela es para axila clínicamente negativa; aquí hay adenomegalia palpable. Sería la respuesta si la axila fuera negativa.",
    "d": "La mastectomía sola deja sin tratar la axila palpable."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2; en E-Oncología la misma pregunta dice «Tiene linfoadenomegalia palpable axilar». El banco consolidado había cambiado el enunciado a «no tiene» y la clave; aquí se usa el original. Diapositivas de Cáncer de mama (diap. 316): ganglios palpables → «BAAF guiada por ecografía o biopsia core» y, si es positiva, «disección axilar nivel I/II».",
    "guia": "Guía, p. 30: «un margen positivo obliga a reintervenir para ampliar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 316.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-B-100",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Primario oculto",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 6 (clave marcada en la captura del EVA)",
   "enunciado": "Una mujer de 65 años presenta una adenomegalia palpable axilar, la mamografía y otros exámenes realizados no muestran un primario. ¿Cuál de las siguientes afirmaciones es incorrecta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "TTF-1 es positivo para cáncer de pulmón y negativo para primario de mama"
    },
    {
     "id": "b",
     "texto": "Irradiación a toda la mama y disección axilar"
    },
    {
     "id": "c",
     "texto": "Más de 60 % tienen un cáncer primario de mama oculto"
    },
    {
     "id": "d",
     "texto": "Se debe considerar en ella un cáncer de mama EC III"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "no muestran un primario",
   "por_que_correcta": "La clave del examen marca como incorrecta la afirmación «más de 60 % tienen un cáncer primario de mama oculto». Las demás son conductas o datos que el examen da por correctos.",
   "por_que_no": {
    "a": "Es correcta: el TTF-1 ayuda a distinguir un origen pulmonar de uno mamario.",
    "b": "Es una conducta aceptada como correcta en el examen para el primario mamario oculto.",
    "d": "Es correcta: con ganglio axilar positivo y primario no visible se estadifica como mama con enfermedad ganglionar."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2. Diapositivas de Cáncer de mama (diap. 430 y 450): RM de mamas «con especial consideración para tumores ocultos mamográficamente». La cifra de porcentaje no está en las diapositivas.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 430.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 450."
   ]
  },
  {
   "id": "ESP1-B-101",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Ganglio centinela",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 50 (clave marcada)",
   "enunciado": "Señale la afirmación correcta en la técnica de biopsia del ganglio centinela en cáncer de mama:",
   "alternativas": [
    {
     "id": "a",
     "texto": "No evita la realización de una linfadenectomía axilar"
    },
    {
     "id": "b",
     "texto": "No se debe realizar en pacientes con ganglios palpables"
    },
    {
     "id": "c",
     "texto": "Se realiza mediante marcado con arpón de un ganglio axilar"
    },
    {
     "id": "d",
     "texto": "Sirve para detectar los ganglios axilares sanos"
    },
    {
     "id": "e",
     "texto": "Se realiza simultáneamente en ambas axilas"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "técnica de biopsia del ganglio centinela",
   "por_que_correcta": "El centinela es para la axila clínicamente negativa. Con ganglios palpables, el algoritmo del docente va a BAAF o core del ganglio y, si es positivo, a disección.",
   "por_que_no": {
    "a": "Al contrario: si el centinela es negativo, evita la linfadenectomía.",
    "c": "El arpón se usa para localizar lesiones no palpables de la mama, no es la técnica del centinela.",
    "d": "Sirve para detectar si hay metástasis en el primer ganglio de drenaje, no para «buscar sanos».",
    "e": "Se hace en la axila del lado del tumor."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 50). Diapositivas de Cáncer de mama (diap. 316): ganglios clínicamente sospechosos (palpables) → BAAF/core; el centinela es para axila sin ganglio palpable.",
    "guia": "Guía, p. 30: centinela «de elección en la axila clínicamente y ecográficamente negativa»; el arpón se usa para localizar lesiones no palpables.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 316.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-B-102",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 114",
   "enunciado": "El factor de mayor riesgo para cáncer gástrico es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Edad > 60 años"
    },
    {
     "id": "b",
     "texto": "Helicobacter pylori"
    },
    {
     "id": "c",
     "texto": "Alto consumo de tabaco"
    },
    {
     "id": "d",
     "texto": "Pólipo adenomatoso"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "mayor riesgo",
   "por_que_correcta": "La guía del curso lo dice textualmente: H. pylori es el factor de riesgo «más importante y prevenible». Inicia la cascada de Correa (gastritis crónica → atrofia → metaplasia → displasia → carcinoma) y por eso su erradicación es prevención.",
   "por_que_no": {
    "a": "La edad avanzada acompaña al tipo intestinal (más de 60 años, diap. 256), pero es un rasgo epidemiológico, no el factor de mayor riesgo.",
    "c": "El tabaco sí aumenta el riesgo (HR 1,45 en fumadores, diap. 116), pero en menor medida que H. pylori.",
    "d": "El pólipo adenomatoso es una lesión precursora (diap. 43), pero es mucho menos frecuente que la infección por H. pylori y la guía no lo pone primero."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 66): pregunta de clase «¿Bacteria considerada como un factor de riesgo…?» con H. pylori; diap. 43: lista de factores ambientales, genéticos y precursores.",
    "guia": "Guía, p. 33: factores de riesgo «H. pylori (el más importante y prevenible), dieta rica en sal, ahumados y nitratos…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 66.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 43.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 116.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-103",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Epidemiología y factores de riesgo",
   "origen": "banco",
   "procedencia": "Cuestionario E-Oncología, T4 Cáncer gástrico (marca del alumno en negrita); banqueo UPAO; banco consolidado de Oncología, preg. 115. En el original dice «pólipos adenopatizantes» (errata); se transcribe «adenomatosos»",
   "enunciado": "¿Cuál de las siguientes afirmaciones sobre el adenocarcinoma gástrico es VERDADERA?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Aproximadamente el 40 % de los pacientes presentan una lesión temprana (sin invasión de la muscularis propia)"
    },
    {
     "id": "b",
     "texto": "H. pylori, gastritis crónica y pólipos adenomatosos gástricos son factores de riesgo para el desarrollo de adenocarcinoma gástrico"
    },
    {
     "id": "c",
     "texto": "La incidencia alcanza su punto máximo a los 40 años"
    },
    {
     "id": "d",
     "texto": "El cáncer de estómago es más común en mujeres que en hombres"
    },
    {
     "id": "e",
     "texto": "La predisposición es principalmente genética en lugar de ambiental"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "es VERDADERA",
   "por_que_correcta": "Los tres son factores de riesgo reconocidos en la clase: H. pylori, la gastritis atrófica y los pólipos adenomatosos (diap. 43, donde además se anota que los pólipos adenomatosos grandes del antro tienen carcinoma en 40-60 %).",
   "por_que_no": {
    "a": "Sin programas de tamizaje la mayoría llega avanzado: en EE. UU. el estadio temprano es solo 10-20 % de los diagnósticos (StatPearls), y en el Perú el diagnóstico «suele llegar tarde» (guía, p. 32).",
    "c": "El tipo intestinal, el más frecuente, predomina en mayores de 60 años (diap. 256), no a los 40.",
    "d": "Es más frecuente en varones (diap. 256; StatPearls: «more prevalent among men than women»).",
    "e": "Predominan los factores ambientales (H. pylori, dieta, tabaco); la forma hereditaria difusa (CGHD) explica solo 5-10 % de los casos con historia familiar (diap. 43)."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 43): factores ambientales, genéticos y precursores; diap. 256: tipo intestinal en ancianos (> 60 años), masculino, antropilórico, asociado a H. pylori.",
    "guia": "Guía, p. 32-33: cascada de Correa y factores de riesgo; diagnóstico tardío en el Perú.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 43.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 256.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33.",
    "Menon G, El-Nakeep S, Babiker HM. Gastric Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 28 oct 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459142/"
   ]
  },
  {
   "id": "ESP1-B-104",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 116",
   "enunciado": "¿Qué factor NO se considera factor de riesgo para el desarrollo de cáncer gástrico?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Anemia microcítica hipocrómica"
    },
    {
     "id": "b",
     "texto": "Gastritis crónica atrófica"
    },
    {
     "id": "c",
     "texto": "Infección por H. pylori"
    },
    {
     "id": "d",
     "texto": "Inmunodeficiencia variable común"
    },
    {
     "id": "e",
     "texto": "Enfermedad de Ménétrier"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "NO se considera factor de riesgo",
   "por_que_correcta": "La anemia microcítica (ferropénica) es una consecuencia del cáncer gástrico, por sangrado crónico (diap. 148: «sangrado/anemia» como síntoma), no una causa. La anemia que sí es factor de riesgo es la perniciosa (macrocítica), que la diapositiva 43 cita con un riesgo de 3 a 18 veces.",
   "por_que_no": {
    "b": "Es factor precursor: «gastritis atrófica con aclorhidria» (diap. 43).",
    "c": "Es el factor más importante (guía, p. 33).",
    "d": "Sí es factor de riesgo: en la inmunodeficiencia variable común el riesgo de cáncer gástrico puede ser hasta 10 veces el de la población general (Krein et al., 2021). No figura en las diapositivas.",
    "e": "Figura entre los factores precursores de la diapositiva 43."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 43): anemia perniciosa (3 a 18 veces), gastritis atrófica con aclorhidria, pólipos adenomatosos, gastrectomía parcial previa, enfermedad de Menetrier; diap. 148: sangrado/anemia como síntoma del cáncer avanzado.",
    "guia": "Guía, p. 33: presentación avanzada con «anemia ferropénica»; factores de riesgo con «gastritis atrófica crónica y anemia perniciosa».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 43.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 148.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33.",
    "Krein P, Yogolare GG, Pereira MA, et al. Common variable immunodeficiency: an important but little-known risk factor for gastric cancer. Rev Col Bras Cir. 2021;48:e20213133. Disponible en: https://pmc.ncbi.nlm.nih.gov/articles/PMC10683469/"
   ]
  },
  {
   "id": "ESP1-B-105",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 9 (captura); banco consolidado de Oncología, preg. 117",
   "enunciado": "¿Cuál de las siguientes entidades NO se asocia con mayor riesgo de cáncer gástrico que el de la población general?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Enfermedad de Menetrier"
    },
    {
     "id": "b",
     "texto": "Anemia perniciosa"
    },
    {
     "id": "c",
     "texto": "Gastrectomía por ulcus"
    },
    {
     "id": "d",
     "texto": "Reflujo duodenogástrico"
    },
    {
     "id": "e",
     "texto": "Acalasia"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "NO se asocia con mayor riesgo de cáncer gástrico",
   "por_que_correcta": "La acalasia no figura entre los factores de riesgo gástrico de la clase ni de la guía; es un factor de riesgo del carcinoma escamoso de esófago (StatPearls, Esophageal Cancer: «…as well as achalasia, caustic injury, tylosis…»).",
   "por_que_no": {
    "a": "Está en la lista de la diapositiva 43 (enfermedad de Menetrier).",
    "b": "Está en la diapositiva 43: anemia perniciosa, de 3 a 18 veces más riesgo.",
    "c": "La «gastrectomía parcial previa» es factor precursor (diap. 43): el muñón gástrico tiene mayor riesgo.",
    "d": "Tras Billroth I y II hay «mayor incidencia de cáncer del muñón residual debido a reflujo duodenal» (diap. 646); StatPearls también señala el reflujo biliar tras cirugía gástrica como factor."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 43 (factores precursores) y diap. 646 (reflujo duodenal y cáncer del muñón).",
    "guia": "Guía, p. 33: «gastritis atrófica crónica y anemia perniciosa, antecedente de gastrectomía parcial, pólipos adenomatosos…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 43.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 646.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33.",
    "Wang Y, Mukkamalla SKR, Singh R, Lyons S. Esophageal Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 17 ago 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459267/",
    "Menon G, El-Nakeep S, Babiker HM. Gastric Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 28 oct 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459142/"
   ]
  },
  {
   "id": "ESP1-B-106",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer distal: etiología",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 2 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 118",
   "enunciado": "El adenocarcinoma gástrico distal se asocia generalmente a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Histológicamente indiferenciado"
    },
    {
     "id": "b",
     "texto": "Hipergastrinemia"
    },
    {
     "id": "c",
     "texto": "Alta incidencia en países industrializados"
    },
    {
     "id": "d",
     "texto": "H. pylori"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "distal",
   "por_que_correcta": "El cáncer distal (antropilórico) es el de tipo intestinal de Lauren, el que sigue la cascada de Correa iniciada por H. pylori. La tabla de la clase lo resume: tipo intestinal → antropíloro → «Dieta y Helicobacter pylori: Sí».",
   "por_que_no": {
    "a": "El distal no difuso es «un carcinoma de tipo intestinal moderadamente diferenciado» (diap. 258); el indiferenciado con células en anillo de sello es el difuso.",
    "b": "La hipergastrinemia no aparece en la clase como el factor asociado al cáncer distal; el factor señalado es H. pylori.",
    "c": "Es al revés: el cáncer distal se asocia a baja condición socioeconómica (diap. 43) y en los países desarrollados ha disminuido mucho (StatPearls)."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 2). Diapositivas de Carcinoma gástrico (diap. 256): tipo intestinal, antropíloro, asociado a H. pylori; diap. 258: cáncer no difuso distal con gastritis crónica y metaplasia intestinal.",
    "guia": "Guía, p. 32: «El adenocarcinoma de tipo intestinal sigue la cascada de Correa: la infección crónica por H. pylori produce gastritis…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 256.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 258.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 43.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 32.",
    "Menon G, El-Nakeep S, Babiker HM. Gastric Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 28 oct 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459142/"
   ]
  },
  {
   "id": "ESP1-B-107",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer del cardias",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 11 (clave resaltada); banco consolidado de Oncología, preg. 119",
   "enunciado": "Adenocarcinoma del cardias se caracteriza:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Su pronóstico es peor que los cánceres distales"
    },
    {
     "id": "b",
     "texto": "Es más común en mujeres"
    },
    {
     "id": "c",
     "texto": "La incidencia en países más desarrollados está disminuyendo"
    },
    {
     "id": "d",
     "texto": "Asociado con H. pylori"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "cardias",
   "por_que_correcta": "El cáncer proximal tiene peor pronóstico que el distal. StatPearls lo cuantifica: en enfermedad localizada proximal la supervivencia a 5 años es de solo 10-15 %, frente a cerca de 50 % en la enfermedad distal regional resecable. Las diapositivas también cuentan la «ubicación proximal» como factor desfavorable (diap. 480).",
   "por_que_no": {
    "b": "El cáncer gástrico es más frecuente en varones (StatPearls; diap. 256).",
    "c": "Es al revés: en los países desarrollados el cáncer distal disminuye y el proximal y de la unión esofagogástrica aumenta (StatPearls).",
    "d": "H. pylori se asocia al cáncer distal de tipo intestinal (diap. 256); el del cardias se relaciona con la obesidad, con evidencia suficiente para el cardias y no para el no cardial (diap. 118)."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 11). Diapositivas de Carcinoma gástrico: diap. 480 («ubicación proximal» entre los factores desfavorables); diap. 118 (obesidad y cáncer del cardias).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 480.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 118.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 256.",
    "Menon G, El-Nakeep S, Babiker HM. Gastric Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 28 oct 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459142/"
   ]
  },
  {
   "id": "ESP1-B-108",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Diagnóstico",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 120",
   "enunciado": "Mujer de 58 años con pérdida del 8 % del peso en 3 meses, anemia ferropénica, disfagia progresiva a sólidos, antecedente familiar de cáncer gastrointestinal y sangre oculta en heces positiva. ¿Qué estudio prioriza el diagnóstico temprano y la estadificación inicial?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tránsito esofagogastroduodenal con bario"
    },
    {
     "id": "b",
     "texto": "Endoscopia digestiva alta con biopsias dirigidas + cromoendoscopia"
    },
    {
     "id": "c",
     "texto": "TC de tórax, abdomen y pelvis sin contraste"
    },
    {
     "id": "d",
     "texto": "PET-TC como primer examen"
    },
    {
     "id": "e",
     "texto": "Cápsula endoscópica"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "disfagia progresiva a sólidos",
   "por_que_correcta": "La paciente reúne varios signos de alarma de la diapositiva 155 (edad > 40, disfagia progresiva, deficiencia de hierro, pérdida de peso, antecedente de cáncer gastrointestinal): indican endoscopia digestiva alta, que localiza la lesión y permite tomar múltiples biopsias (6-8, diap. 157). La guía la llama «el estudio de elección y el que confirma».",
   "por_que_no": {
    "a": "El tránsito con bario no permite biopsiar; no confirma el diagnóstico.",
    "c": "La TC estadifica, pero no diagnostica; y la que se pide es con contraste oral y endovenoso (diap. 360).",
    "d": "La PET «no debe llevarse a cabo sistemáticamente» en el adenocarcinoma gástrico (diap. 348) y no es el primer examen.",
    "e": "La cápsula no permite tomar biopsias ni es el estudio para el estómago."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 155 (indicaciones de EDA: signos de alarma), diap. 157 (biopsias múltiples, 6-8), diap. 348 (PET no sistemática).",
    "guia": "Guía, p. 33: «Endoscopia digestiva alta con biopsias múltiples es el estudio de elección y el que confirma».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 155.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 157.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 348.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-109",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Estadificación",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 39 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 121 (que daba otra clave)",
   "enunciado": "Para el estadiaje clínico de adenocarcinoma de estómago se incluye:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Examen clínico, laboratorio, Rx tórax, TAC abdomen y pelvis, laparoscopia y biopsia"
    },
    {
     "id": "b",
     "texto": "Examen clínico, Rx tórax, TAC abdomen y pelvis, laparoscopia y biopsia"
    },
    {
     "id": "c",
     "texto": "Examen clínico, Rx tórax, TAC abdomen y pelvis"
    },
    {
     "id": "d",
     "texto": "Examen clínico, laboratorio, Rx tórax, TAC abdomen y pelvis"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "estadiaje clínico",
   "por_que_correcta": "Es la clave resaltada en el examen. Coincide con la secuencia práctica del docente (diap. 421): examen físico, imágenes de tórax y abdomen-pelvis y, si no hay enfermedad diseminada, laparoscopia diagnóstica con citología peritoneal; el diagnóstico es por biopsia. Para el examen, marca esta.",
   "por_que_no": {
    "a": "Es la opción que agrega laboratorio; el examen marcó la que no lo incluye (ver el dato curioso).",
    "c": "Le falta la laparoscopia, que detecta la carcinomatosis de bajo volumen que la TC no ve (guía, p. 33; diap. 402).",
    "d": "Le falta la laparoscopia de estadificación."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 39). Diapositivas de Carcinoma gástrico (diap. 421): «Examen físico; estudio de imágenes (TAC tórax, AP)… realizamos laparoscopia diagnóstica y estudio citológico peritoneal».",
    "guia": "Dato curioso: el algoritmo NCCN que el docente reproduce en la diapositiva 360 incluye además «hemograma y perfil bioquímico», es decir, el laboratorio de la primera opción; la guía del curso (p. 33) no menciona laboratorio. Para el examen: marca lo del docente.",
    "libro": null,
    "discrepancia": true
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 421.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 360.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 402.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-110",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Clasificación macroscópica",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 122",
   "enunciado": "Al realizar una endoscopia se encuentra, en la curvatura mayor del fondo gástrico, una lesión ulcerada de bordes irregulares con signos de infiltración alrededor de la úlcera. ¿A qué forma macroscópica corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Borrmann I"
    },
    {
     "id": "b",
     "texto": "Borrmann II"
    },
    {
     "id": "c",
     "texto": "Borrmann III"
    },
    {
     "id": "d",
     "texto": "Borrmann IV"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "signos de infiltración alrededor de la úlcera",
   "por_que_correcta": "Úlcera más infiltración de la pared vecina = tipo III «ulceroinfiltrante» de Borrmann (diap. 175).",
   "por_que_no": {
    "a": "El tipo I es exofítico o polipoide, sin úlcera.",
    "b": "El tipo II es ulcerado, sin el componente infiltrante alrededor.",
    "d": "El tipo IV es infiltrante difuso (linitis plástica), sin úlcera dominante."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 175): Borrmann I exofítica o polipoide, II ulcerada, III ulceroinfiltrante, IV infiltrante (linitis plástica); diap. 179: imagen de Borrmann III.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 175.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 179."
   ]
  },
  {
   "id": "ESP1-B-111",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer gástrico precoz",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 123",
   "enunciado": "El carcinoma gástrico precoz se considera cuando hay invasión:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hasta la submucosa"
    },
    {
     "id": "b",
     "texto": "Hasta la muscular propia"
    },
    {
     "id": "c",
     "texto": "Hasta la subserosa"
    },
    {
     "id": "d",
     "texto": "Hasta la serosa"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "carcinoma gástrico precoz",
   "por_que_correcta": "Cáncer precoz = tumor limitado a la mucosa o la submucosa, con independencia de los ganglios (diap. 327 y guía, p. 33).",
   "por_que_no": {
    "b": "Llegar a la muscular propia ya es T2: cáncer avanzado (diap. 147).",
    "c": "La subserosa es T3: avanzado.",
    "d": "La serosa es T4a: avanzado."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 147 (capas de la pared: carcinoma precoz frente a avanzado); diap. 327: «Tumores que no sobrepasan la submucosa, independientemente de la extensión ganglionar».",
    "guia": "Guía, p. 33: «El cáncer gástrico precoz es el limitado a mucosa y submucosa, independientemente del estado ganglionar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 147.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 327.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-112",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Resección endoscópica",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 124",
   "enunciado": "Al realizar ecoendoscopia en un paciente con adenocarcinoma gástrico bien diferenciado antral, se observa una lesión que compromete la mucosa sin impresionar invasión de la submucosa; la endoscopia revela que mide 1 cm y no está ulcerada; las imágenes no muestran compromiso locorregional ni a distancia. El abordaje podría corresponder a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gastrectomía distal laparoscópica más linfadenectomía D2"
    },
    {
     "id": "b",
     "texto": "Resección endoscópica de la mucosa"
    },
    {
     "id": "c",
     "texto": "Gastrectomía distal laparoscópica más linfadenectomía D1"
    },
    {
     "id": "d",
     "texto": "Gastrectomía total más linfadenectomía D1"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "compromete la mucosa sin impresionar invasión de la submucosa",
   "por_que_correcta": "Diferenciado, cT1a, sin úlcera (UL0) y ≤ 2 cm: es la indicación absoluta de resección endoscópica (REM o DSE) de las guías japonesas (diap. 365; en la tabla de la diap. 376, «REM» para mucoso diferenciado sin úlcera < 20 mm).",
   "por_que_no": {
    "a": "La gastrectomía con D2 es para el cáncer avanzado; aquí la probabilidad de ganglios es muy baja.",
    "c": "La gastrectomía con D1 se reserva para los cT1a que no cumplen criterios de resección endoscópica (diap. 381).",
    "d": "Además de innecesaria, una gastrectomía total no corresponde a un tumor antral."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 365 (indicación absoluta de REM o DSE: diferenciado, UL0, cT1a, ≤ 2 cm); diap. 376 (tabla REM/DSE/cirugía); diap. 381 (D1 para cT1a fuera de criterios).",
    "guia": "Guía, p. 33: resección endoscópica «solo en cáncer precoz seleccionado, superficial, bien diferenciado, sin ulceración y sin sospecha de afectación ganglionar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 365.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 376.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 381.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-113",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer precoz: conducta",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 125",
   "enunciado": "Varón de 67 años, H. pylori erradicado, en programa de vigilancia endoscópica: lesión deprimida de 12 mm en cuerpo, ecoendoscopia T1a, sin sospecha de ganglios; histología de adenocarcinoma bien diferenciado confinado a la mucosa. ¿Conducta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gastrectomía subtotal D2"
    },
    {
     "id": "b",
     "texto": "Quimioterapia perioperatoria y cirugía"
    },
    {
     "id": "c",
     "texto": "Radioterapia exclusiva"
    },
    {
     "id": "d",
     "texto": "Observación"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "confinado a la mucosa",
   "por_que_correcta": "Entre las cuatro opciones es la única que reseca el tumor con intención curativa. Ojo: según las diapositivas, este caso (diferenciado, cT1a, ≤ 2 cm, sin úlcera) es indicación absoluta de resección endoscópica (diap. 365), que no figura entre las alternativas; y si se operara, a un cT1a fuera de criterios endoscópicos le corresponde D1 (diap. 381), no D2.",
   "por_que_no": {
    "b": "La quimioterapia perioperatoria es para cT2 o más (diap. 432), no para un cáncer mucoso.",
    "c": "La radioterapia no figura entre los tratamientos del cáncer precoz, que son la resección endoscópica o la cirugía (diap. 383).",
    "d": "Un carcinoma confirmado no se observa: debe resecarse."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 365 (indicación absoluta de resección endoscópica), diap. 381 (D1 para cT1a que no cumplen criterios), diap. 432 (perioperatoria en cT2 o más). Pregunta de banco comercial: la clave es la menos mala de las ofrecidas.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 365.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 381.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 432.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 383."
   ]
  },
  {
   "id": "ESP1-B-114",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Generalidades",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 2 (captura); banco consolidado de Oncología, preg. 126 (con las alternativas reordenadas)",
   "enunciado": "En cáncer gástrico, señale la FALSA:",
   "alternativas": [
    {
     "id": "a",
     "texto": "La hemorragia puede ser una complicación en el cáncer gástrico"
    },
    {
     "id": "b",
     "texto": "La clasificación de Borrmann es para los casos de cáncer gástrico avanzado"
    },
    {
     "id": "c",
     "texto": "La mayoría de los casos que se diagnostican en el Perú están en fase avanzada de su enfermedad"
    },
    {
     "id": "d",
     "texto": "El tratamiento para los casos de cáncer gástrico temprano es sólo quimioterapia y se reserva la cirugía para los casos en fase avanzada"
    },
    {
     "id": "e",
     "texto": "Es una neoplasia frecuente entre los peruanos"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "señale la FALSA",
   "por_que_correcta": "Invierte el esquema: el cáncer gástrico precoz se trata con resección endoscópica o cirugía (diap. 383), y la quimioterapia se suma en la enfermedad localmente avanzada o metastásica.",
   "por_que_no": {
    "a": "Es verdadera: la clase trata la «hemorragia o pérdida sanguínea crónica por cáncer gástrico» (diap. 494).",
    "b": "Es verdadera: Borrmann es la clasificación macroscópica del cáncer avanzado (diap. 175).",
    "c": "Es verdadera: en el Perú el diagnóstico «suele llegar tarde» (guía, p. 32).",
    "e": "Es verdadera: el Perú está en el décimo lugar mundial de incidencia (OMS 2022, diap. 142)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 383 (cáncer precoz: resección endoscópica o cirugía), 175, 142, 494.",
    "guia": "Guía, p. 32: «en el Perú: el diagnóstico suele llegar tarde, porque los síntomas iniciales son inespecíficos».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 383.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 175.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 142.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 494.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 32."
   ]
  },
  {
   "id": "ESP1-B-115",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Tratamiento y pronóstico",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 6 (captura); banco consolidado de Oncología, preg. 127 (con la última alternativa cambiada)",
   "enunciado": "¿Cuál de las siguientes afirmaciones acerca del tratamiento y del pronóstico del carcinoma gástrico no es cierta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La resección quirúrgica es el tratamiento de elección"
    },
    {
     "id": "b",
     "texto": "En el cáncer gástrico precoz la supervivencia a 5 años es del 80 %"
    },
    {
     "id": "c",
     "texto": "La radioterapia es un tratamiento muy eficaz"
    },
    {
     "id": "d",
     "texto": "En los casos de cáncer avanzado que se ha practicado resección completa, la supervivencia a los 5 años es del 30 - 40 %"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "no es cierta",
   "por_que_correcta": "La radioterapia tiene un papel limitado: de al menos ocho ensayos que compararon quimiorradioterapia adyuvante con quimioterapia sola, solo uno mostró beneficio de supervivencia global al añadir radioterapia (diap. 429). StatPearls la reserva sobre todo para la cirugía inadecuada o tumores sintomáticos.",
   "por_que_no": {
    "a": "Es cierta: la cirugía con intención curativa es el tratamiento de la enfermedad localizada (guía, p. 33).",
    "b": "Es cierta en sentido general: el cáncer precoz tiene «excelente pronóstico» (guía, p. 33).",
    "d": "Es una cifra intermedia coherente con las series (StatPearls: alrededor de 50 % en enfermedad distal regional resecable, 10-15 % en la proximal); no es la afirmación falsa que busca la pregunta."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico (diap. 429): «solo UNO de ellos ha demostrado un beneficio significativo de supervivencia global para la adición de radioterapia».",
    "guia": "Guía, p. 33: cirugía con intención curativa en enfermedad localizada; el cáncer precoz tiene excelente pronóstico.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 429.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33.",
    "Menon G, El-Nakeep S, Babiker HM. Gastric Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 28 oct 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459142/"
   ]
  },
  {
   "id": "ESP1-B-116",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Localmente avanzado",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 128",
   "enunciado": "Varón de 60 años con dispepsia y pérdida ponderal; endoscopia: lesión ulcerada antral Borrmann III; biopsia: adenocarcinoma. La ecoendoscopia sugiere T3 y la TC no muestra metástasis. ¿Cuál es el enfoque estándar actual en enfermedad potencialmente resecable localmente avanzada?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gastrectomía subtotal D1 inmediata"
    },
    {
     "id": "b",
     "texto": "Gastrectomía total sin neoadyuvancia"
    },
    {
     "id": "c",
     "texto": "Quimiorradioterapia preoperatoria"
    },
    {
     "id": "d",
     "texto": "Quimioterapia perioperatoria y gastrectomía con linfadenectomía D2"
    },
    {
     "id": "e",
     "texto": "Solo quimioterapia paliativa"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "La ecoendoscopia sugiere T3",
   "por_que_correcta": "En cT2 o más, con cualquier N, resecable y paciente apto, el tratamiento preferido es la quimioterapia perioperatoria (categoría 1) con gastrectomía y D2 (diap. 432). La guía lo llama el estándar del localmente avanzado.",
   "por_que_no": {
    "a": "La D1 es para tumores precoces; y operar de inmediato omite la quimioterapia perioperatoria.",
    "b": "Un tumor antral no requiere gastrectomía total, y omitir la neoadyuvancia no es el estándar.",
    "c": "La quimiorradiación preoperatoria es una alternativa de categoría 2B, no la preferida (diap. 432).",
    "e": "No hay metástasis: la intención es curativa, no paliativa."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 432): «cT2 o más, cualquier N: Quimioterapia perioperatoria (categoría 1) (preferido) o Quimioradiación preoperatoria (categoría 2B)»; diap. 480: flujograma con QT perioperatoria y gastrectomía D2.",
    "guia": "Guía, p. 33: «En enfermedad localmente avanzada, el estándar es tratamiento perioperatorio: quimioterapia antes de la cirugía y después de ella».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 432.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 480.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-117",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Linfadenectomía: grupo 6",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 4 (captura); banco consolidado de Oncología, preg. 129",
   "enunciado": "¿Cuáles son los vasos que se ligan para poder realizar una disección del grupo 6 en carcinoma gástrico avanzado?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Venas prepilóricas de June"
    },
    {
     "id": "b",
     "texto": "Vasos mesentéricos superiores"
    },
    {
     "id": "c",
     "texto": "Vasos gastroepiploicos derechos"
    },
    {
     "id": "d",
     "texto": "Vasos gastroduodenales"
    },
    {
     "id": "e",
     "texto": "Vasos gastroepiploicos izquierdos"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "grupo 6",
   "por_que_correcta": "El grupo 6 son los ganglios infrapilóricos (diap. 6). En la técnica que muestra el docente, se diseca el tejido graso que contiene el grupo 6 «seguida de la sección y ligadura de los vasos gastroepiploicos derechos» (diap. 570).",
   "por_que_no": {
    "a": "Las venas prepilóricas no son el pedículo que se secciona con el grupo 6 en la técnica de la diapositiva 570.",
    "b": "Los vasos mesentéricos superiores corresponden al grupo 14 (14v, 14a), no al 6.",
    "d": "La gastroduodenal no se liga en esta disección; es la gastroepiploica derecha, su rama, la que se secciona.",
    "e": "Los gastroepiploicos izquierdos corresponden al grupo 4sb de la curvatura mayor (diap. 6)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 6 (grupo 6 infrapilóricos; 4sb art. gastroepiploica izquierda; 14v/14a vasos mesentéricos superiores), diap. 570 y 574 (sección de vasos gastroepiploicos derechos y linfadenectomía del grupo 6).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 6.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 570.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 574."
   ]
  },
  {
   "id": "ESP1-B-118",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Linfadenectomía D2+",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 5 (captura); banco consolidado de Oncología, preg. 130",
   "enunciado": "En un adenocarcinoma gástrico operable y resecable, si hay compromiso del grupo 6, ¿qué grupo ganglionar del estómago tengo que necesariamente resecar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Grupo 10"
    },
    {
     "id": "b",
     "texto": "Grupo 12"
    },
    {
     "id": "c",
     "texto": "Grupo 11"
    },
    {
     "id": "d",
     "texto": "Grupo 7"
    },
    {
     "id": "e",
     "texto": "Grupo 14v"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "si hay compromiso del grupo 6",
   "por_que_correcta": "La clase lo dice tal cual: «Disección del n.° 14v (ganglio linfático venoso mesentérico superior) para el cáncer del tumor distal del estómago con metástasis a los ganglios linfáticos n.° 6 (D2 + n.° 14v)» (diap. 26).",
   "por_que_no": {
    "a": "El grupo 10 (hilio esplénico) se agrega en tumores proximales que invaden la curvatura mayor (diap. 26), no por el grupo 6.",
    "b": "El grupo 12 ya se diseca en la técnica estándar de gastrectomía subtotal con linfadenectomía de la clase (diap. 577); no es el que se añade por el compromiso del grupo 6.",
    "c": "El 11p ya forma parte de la disección suprapancreática de la D2 (diap. 586).",
    "d": "El grupo 7 ya forma parte de la D2 (diap. 586); no es el que se añade."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico (diap. 26): indicaciones de D2(+); diap. 6: 14v = vena mesentérica superior; diap. 586: disección suprapancreática de 8, 9, 7 y 11p.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 6.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 586.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 577."
   ]
  },
  {
   "id": "ESP1-B-119",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Linfadenectomía D2+",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 131",
   "enunciado": "¿Cuál es el grupo ganglionar que forzosamente hay que resecar en una lesión gástrica de la curvatura mayor del fondo de 4 cm, y que por ello transforma la D2 en D2+?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Grupo 10"
    },
    {
     "id": "b",
     "texto": "Grupo 13"
    },
    {
     "id": "c",
     "texto": "Grupo 16"
    },
    {
     "id": "d",
     "texto": "Grupo 18"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "curvatura mayor del fondo",
   "por_que_correcta": "Para el cáncer proximal que invade la curvatura mayor se agrega la disección del n.° 10, los ganglios del hilio esplénico: «D2 + n.° 10» (diap. 26).",
   "por_que_no": {
    "b": "El 13 (región posterior de la cabeza del páncreas) se agrega cuando el cáncer invade el duodeno (diap. 26).",
    "c": "El 16 (paraaórticos) se diseca tras quimioterapia neoadyuvante en enfermedad ganglionar extensa (diap. 26).",
    "d": "El 18 corresponde al margen inferior del páncreas (diap. 7); no es el que convierte la D2 en D2+ para un tumor del fondo."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 26 (D2 + n.° 10, + n.° 14v, + n.° 13, + n.° 16); diap. 6 y 7 (numeración JRSGC: 10 hilio esplénico, 13 región posterior de la cabeza del páncreas, 16 paraaórticos, 18 margen inferior del páncreas).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 6.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 7.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 618."
   ]
  },
  {
   "id": "ESP1-B-120",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "TNM",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 27 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 132",
   "enunciado": "Paciente varón de 56 años de edad. Se le realizó gastrectomía subtotal distal + linfadenectomía D2 por cáncer gástrico antral. No signos de extensión de enfermedad. El resultado histopatológico: ADENOCARCINOMA TIPO INTESTINAL que compromete hasta subserosa. Ganglios: 4/41. El estadio que le corresponde, según la clasificación TNM del 2018 es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "T4N2M0"
    },
    {
     "id": "b",
     "texto": "T3aN3M0"
    },
    {
     "id": "c",
     "texto": "T2N1M0"
    },
    {
     "id": "d",
     "texto": "T3N2M0"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "compromete hasta subserosa. Ganglios: 4/41",
   "por_que_correcta": "Subserosa = T3 (diap. 310). Cuatro ganglios positivos = N2, que va de 3 a 6 (diap. 312). Sin metástasis: M0.",
   "por_que_no": {
    "a": "T4 exige que el tumor penetre la serosa; aquí llega solo a la subserosa.",
    "b": "No existe «T3a» en estómago y N3 requiere 7 o más ganglios.",
    "c": "T2 es muscular propia y N1 es 1-2 ganglios: subestima ambas."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 27). Diapositivas de Carcinoma gástrico: diap. 310 (T3 «Tumor invade subserosa»), diap. 312 (N1 1-2, N2 3-6, N3a 7-15, N3b > 15).",
    "guia": "Guía, p. 33: la T se define por la capa invadida y la N por el número de ganglios afectados.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 310.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 312.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-121",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "TNM",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 8 (captura); banco consolidado de Oncología, preg. 133",
   "enunciado": "El resultado de la pieza operatoria de una gastrectomía total por carcinoma gástrico revela que el tumor alcanza la subserosa y hay 18/35 ganglios resecados. No hay metástasis a distancia. El estadio que corresponde es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "pT2 pN2a M0"
    },
    {
     "id": "b",
     "texto": "pT4a pN3a M0"
    },
    {
     "id": "c",
     "texto": "pT4b pN3b M0"
    },
    {
     "id": "d",
     "texto": "pT3 pN3b M0"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "18/35 ganglios",
   "por_que_correcta": "Subserosa = T3 (diap. 310). 18 ganglios positivos de 35 = N3b, que es más de 15 (diap. 312). Muchos ganglios no convierten el tumor en T4: T y N son independientes.",
   "por_que_no": {
    "a": "T2 es muscular propia y 18 ganglios no es N2 (3-6).",
    "b": "T4a exige penetrar la serosa; y N3a es de 7 a 15 ganglios.",
    "c": "T4b exige invadir estructuras adyacentes."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 310 (T), diap. 312 (N3a 7-15, N3b > 15).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 310.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 312."
   ]
  },
  {
   "id": "ESP1-B-122",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Pronóstico por estadio",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 3 (captura); banco consolidado de Oncología, preg. 134 (con alternativas distintas)",
   "enunciado": "En un paciente con cáncer gástrico, ¿cuál de los siguientes estadios es el de peor pronóstico?",
   "alternativas": [
    {
     "id": "a",
     "texto": "T2 N1 M0"
    },
    {
     "id": "b",
     "texto": "T3 N1 M0"
    },
    {
     "id": "c",
     "texto": "T3 N2 M0"
    },
    {
     "id": "d",
     "texto": "T1 N1 M1"
    },
    {
     "id": "e",
     "texto": "T2 N2 M0"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "peor pronóstico",
   "por_que_correcta": "La M1 define el estadio IV, «cualquier T/N, M1» (diap. 483), con tratamiento sistémico y cirugía solo paliativa (guía, p. 33). Un T1 pequeño con metástasis tiene peor pronóstico que cualquier tumor localmente avanzado sin metástasis.",
   "por_que_no": {
    "a": "Sin metástasis: enfermedad potencialmente curable.",
    "b": "Sin metástasis: enfermedad potencialmente curable.",
    "c": "Localmente avanzado, pero M0: aún tratable con intención curativa.",
    "e": "M0: aún tratable con intención curativa."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico (diap. 483): «Estadio IV — Cualquier T/N — M1 (Metástasis a distancia)».",
    "guia": "Guía, p. 33: «En enfermedad metastásica, tratamiento sistémico y cirugía solo paliativa ante sangrado u obstrucción».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 483.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-123",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Invasión duodenal",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 7 (captura); banco consolidado de Oncología, preg. 135",
   "enunciado": "Paciente con diagnóstico de cáncer gástrico que se extiende desde cuerpo medio y región antral, resecable. Se extiende hacia 4.5 cm distal al píloro. El tratamiento quirúrgico sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección en cuña de fondo gástrico + linfadenectomía D3"
    },
    {
     "id": "b",
     "texto": "Gastrectomía total + linfadenectomía D2 alfa + duodenopancreatectomía cefálica"
    },
    {
     "id": "c",
     "texto": "Gastrectomía total + linfadenectomía D2"
    },
    {
     "id": "d",
     "texto": "Gastrectomía subtotal alta + linfadenectomía D1 alfa"
    },
    {
     "id": "e",
     "texto": "Ablación con radiofrecuencia + biopsia de ganglio centinela"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "4.5 cm distal al píloro",
   "por_que_correcta": "Dos datos deciden. La invasión duodenal habitual se extiende dentro de los 2-3 cm, por lo que basta un borde distal de 3-4 cm (diap. 603); cuando la invasión del duodeno es más extensa «se debe considerar la posibilidad de realizar duodenopancreatectomía (operación de Whipple)» (diap. 604). Y si el cáncer invade el duodeno, se agregan los ganglios 12b, 12p y 13 a la D2 (diap. 26).",
   "por_que_no": {
    "a": "La resección en cuña no es oncológica y el tumor no está en el fondo.",
    "c": "La gastrectomía con D2 sola no resecaría los 4,5 cm de duodeno comprometido.",
    "d": "No existe indicación de gastrectomía subtotal alta para un tumor antral que invade el duodeno.",
    "e": "La ablación no es tratamiento del cáncer gástrico resecable."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 603 (borde distal 3-4 cm), diap. 604 (invasión duodenal extensa → Whipple), diap. 605 (duodenopancreatectomía en T4N0-2M0 seleccionados, solo si se logra R0), diap. 26 (D2 + n.° 13 en invasión duodenal).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 603.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 604.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 605.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26."
   ]
  },
  {
   "id": "ESP1-B-124",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Tumor del fondo con ganglios hiliares",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 10 (captura); banco consolidado de Oncología, preg. 136",
   "enunciado": "Paciente varón de 56 años con diagnóstico de adenocarcinoma gástrico de la curvatura mayor del fondo gástrico con adenopatías en hilio esplénico. No secundarismo. La cirugía de elección sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ablación con radiofrecuencia + biopsia de ganglio centinela"
    },
    {
     "id": "b",
     "texto": "Gastrectomía total + linfadenectomía D2 alfa"
    },
    {
     "id": "c",
     "texto": "Gastrectomía subtotal alta + linfadenectomía D1 alfa"
    },
    {
     "id": "d",
     "texto": "Resección en cuña de fondo gástrico + linfadenectomía D3"
    },
    {
     "id": "e",
     "texto": "Gastrectomía total + linfadenectomía D2"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "adenopatías en hilio esplénico",
   "por_que_correcta": "Tumor del fondo → gastrectomía total (guía, p. 33). Ganglios en el hilio esplénico (grupo 10) → hay que ampliar la D2 con el grupo 10, «D2 + n.° 10» (diap. 26); la alternativa llama a esa D2 ampliada «D2 alfa».",
   "por_que_no": {
    "a": "La ablación no trata un cáncer gástrico resecable.",
    "c": "Una D1 deja sin resecar el grupo 10 comprometido.",
    "d": "La resección en cuña no es una cirugía oncológica para el adenocarcinoma.",
    "e": "La D2 estándar no incluye el grupo 10, que aquí está comprometido."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Carcinoma gástrico: diap. 26 (D2 + n.° 10 para el cáncer proximal que invade la curvatura mayor); diap. 618 (criterios de esplenectomía: metástasis macroscópica al hilio esplénico).",
    "guia": "Guía, p. 33: gastrectomía total «para tumores de cuerpo proximal, fundus y cardias».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 618.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-125",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Factores pronósticos",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 137",
   "enunciado": "Mujer de 62 años con gastrectomía total D2 por adenocarcinoma pT3N1, 28 ganglios examinados, R0. ¿Cuál de los «factores de sobrevida» tiene mayor impacto pronóstico?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tipo de Borrmann"
    },
    {
     "id": "b",
     "texto": "Márgenes R0 frente a R1"
    },
    {
     "id": "c",
     "texto": "Serología de H. pylori postoperatoria"
    },
    {
     "id": "d",
     "texto": "Localización cardial frente a antral"
    },
    {
     "id": "e",
     "texto": "Tiempo operatorio"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "mayor impacto pronóstico",
   "por_que_correcta": "La diapositiva 614 lo califica así: el estado del margen es «un factor pronóstico crítico para la sobrevida libre de enfermedad». R0 = sin tumor en el borde; R1 = tumor en el borde o a menos de 1 mm.",
   "por_que_no": {
    "a": "El tipo de Borrmann orienta (los tipos III-IV se asocian al difuso, de peor pronóstico, diap. 256), pero pesa menos que dejar o no tumor residual.",
    "c": "La serología de H. pylori tras la cirugía no es un factor pronóstico.",
    "d": "La localización influye, pero menos que la radicalidad de la resección.",
    "e": "El tiempo operatorio no es un factor pronóstico oncológico."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 614): margen R0 frente a R1, «factor pronóstico crítico para la sobrevida libre de enfermedad».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 614.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 256."
   ]
  },
  {
   "id": "ESP1-B-126",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Subtotal frente a total",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 9 (clave marcada en la captura del EVA); E-Oncología; reemplaza a la variante del banqueo UPAO (banco consolidado, preg. 139)",
   "enunciado": "Para los tumores del estómago distal, se prefiere una gastrectomía subtotal distal sobre una total por estas razones, EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "La gastrectomía subtotal resulta en una mejor calidad de vida que una gastrectomía total"
    },
    {
     "id": "b",
     "texto": "La gastrectomía subtotal permite un mejor status nutricional"
    },
    {
     "id": "c",
     "texto": "La gastrectomía subtotal confiere una mayor sobrevida a 5 años"
    },
    {
     "id": "d",
     "texto": "La gastrectomía total es técnicamente más difícil"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "EXCEPTO",
   "por_que_correcta": "Es la clave marcada en el Final 2020-2. Las razones aceptadas para preferir la subtotal en tumores distales son la mejor calidad de vida y el mejor estado nutricional (Bozzetti, 1999). Para el examen, marca esta.",
   "por_que_no": {
    "a": "Es una razón aceptada: el ensayo italiano asocia la subtotal a mejor estado nutricional y calidad de vida.",
    "b": "Es una razón aceptada: los pacientes con gastrectomía total ingieren menos calorías y quedan más depletados (Bozzetti, 1999).",
    "c": "Ojo: en la literatura esta es la afirmación falsa, porque ambas técnicas tienen supervivencia similar. El docente marcó otra (ver el dato curioso)."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2 (Oncología, preg. 9): «La gastrectomía total es técnicamente más difícil».",
    "guia": "Dato curioso: el ensayo aleatorizado italiano (Bozzetti et al., Ann Surg 1999) concluyó que la gastrectomía subtotal y la total tienen una supervivencia similar, así que en la literatura la razón falsa es la mayor sobrevida a 5 años. La guía del curso (p. 33) solo indica la subtotal para antro y cuerpo distal «siempre que pueda lograrse un margen proximal adecuado». Para el examen: marca lo del docente.",
    "libro": null,
    "discrepancia": true
   },
   "referencias": [
    "Bozzetti F, Marubini E, Bonfanti G, Miceli R, Piano C, Gennari L; Italian Gastrointestinal Tumor Study Group. Subtotal versus total gastrectomy for gastric cancer: five-year survival rates in a multicenter randomized Italian trial. Ann Surg. 1999;230(2):170. Disponible en: https://pmc.ncbi.nlm.nih.gov/articles/PMC1420871/",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-127",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Tratamiento posoperatorio",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2020-2, Oncología, preg. 8 (clave marcada en la captura del EVA); E-Oncología; banqueo UPAO (banco consolidado, preg. 144)",
   "enunciado": "A una mujer de 61 años se le realizó una gastrectomía subtotal con disección D2 y un estadio patológico T2 N1 M0 EC IIa. ¿Cuál de los siguientes es el mejor manejo oncológico para esta paciente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quimioterapia antes y luego de la cirugía"
    },
    {
     "id": "b",
     "texto": "Seguimiento endoscópico y tomografía de abdomen-pelvis cada 6 meses"
    },
    {
     "id": "c",
     "texto": "El paciente es considerado curado desde que tienen una disección D2"
    },
    {
     "id": "d",
     "texto": "Radioterapia postoperatoria"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "T2 N1 M0",
   "por_que_correcta": "Es la clave marcada en el examen y la única opción con tratamiento sistémico. Un T2 o más, o con ganglios positivos, necesita quimioterapia además de la cirugía: el estándar es perioperatorio (guía, p. 33; diap. 432) y, si ya se operó sin terapia previa, quimioterapia adyuvante tras la D2 (diap. 422).",
   "por_que_no": {
    "b": "Solo vigilar deja sin tratamiento sistémico una enfermedad con ganglios positivos.",
    "c": "La D2 no basta: con N1 el riesgo de recaída obliga a quimioterapia (diap. 422).",
    "d": "Tras una D2, la quimiorradiación se reserva para pacientes seleccionados con linfadenectomía menor que D2 (diap. 422); la quimioterapia es la indicación."
   },
   "fuentes": {
    "docente": "Clave marcada (punto amarillo) en el Final 2020-2 (Oncología, preg. 8). Diapositivas de Carcinoma gástrico: diap. 432 (QT perioperatoria preferida en cT2 o más); diap. 422 (tras cirugía primaria, cualquier pT con N+: quimioterapia si se hizo D2, ensayos CLASSIC y ARTIST, categoría 1).",
    "guia": "Guía, p. 33: «el estándar es tratamiento perioperatorio: quimioterapia antes de la cirugía y después de ella».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 432.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 422.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-128",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Signos de diseminación",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 141",
   "enunciado": "En el examen físico de un paciente con carcinoma gástrico se encuentra una adenopatía axilar izquierda dura, poco móvil e indolora, cuya biopsia confirma metástasis del carcinoma. Este signo se denomina:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ganglio de Virchow"
    },
    {
     "id": "b",
     "texto": "Ganglio de Irish"
    },
    {
     "id": "c",
     "texto": "Nódulo de la hermana María José"
    },
    {
     "id": "d",
     "texto": "Signo de Trousseau"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "adenopatía axilar izquierda",
   "por_que_correcta": "El ganglio de Irish es el «ganglio axilar izquierdo» (diap. 187; guía, p. 33).",
   "por_que_no": {
    "a": "El ganglio de Virchow es supraclavicular izquierdo (guía, p. 33).",
    "c": "El nódulo de la hermana María José es umbilical (guía, p. 33).",
    "d": "No figura entre los ganglios ni depósitos de diseminación de las diapositivas 187 y 287; no es un ganglio axilar."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 187 y 287): «Ganglio axilar izquierdo de Irish», ganglio de Virchow, nódulo de la hermana María Josefa.",
    "guia": "Guía, p. 33: «ganglio de Virchow (supraclavicular izquierdo), nódulo de la hermana María José (umbilical), ganglio de Irish (axilar izquierdo)…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 187.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 287.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-129",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Signos de diseminación",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 142",
   "enunciado": "En un paciente con diagnóstico de cáncer gástrico, el tacto rectal palpa en la cara anterior del recto, a unos 7 cm del margen anal, una lesión de consistencia pétrea, poco móvil, no dolorosa. Este hallazgo es compatible con:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Signo de Trousseau"
    },
    {
     "id": "b",
     "texto": "Ganglio de Virchow"
    },
    {
     "id": "c",
     "texto": "Anaquel de Blumer"
    },
    {
     "id": "d",
     "texto": "Ganglio de Irish"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "el tacto rectal palpa en la cara anterior del recto",
   "por_que_correcta": "El anaquel (placa) de Blumer es la siembra peritoneal en el fondo de saco de Douglas, palpable al tacto rectal (diap. 290; guía, p. 33: «masa en el fondo de saco al tacto rectal»).",
   "por_que_no": {
    "a": "No figura entre los depósitos pélvicos de la diapositiva 187 (Krukenberg y Blumer).",
    "b": "El ganglio de Virchow es supraclavicular izquierdo.",
    "d": "El ganglio de Irish es axilar izquierdo."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico: diap. 290 (vista lateral de la pelvis: fondo de saco de Douglas, anaquel de Blumer); diap. 187 (metástasis pélvicas: tumor de Krukenberg, placa rectal de Blumer).",
    "guia": "Guía, p. 33: «anaquel de Blumer (masa en el fondo de saco al tacto rectal). Todos indican enfermedad avanzada e incurable quirúrgicamente».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 290.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 187.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 33."
   ]
  },
  {
   "id": "ESP1-B-130",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Tumor primario grande",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T4; banco consolidado de Oncología, preg. 143. El banco consolidado daba «≥ 10 cm» sin fuente; se usa la definición de la diapositiva del docente",
   "enunciado": "Se denomina carcinoma gástrico grande cuando el tumor primario mide:",
   "alternativas": [
    {
     "id": "a",
     "texto": "5 cm"
    },
    {
     "id": "b",
     "texto": "8 cm"
    },
    {
     "id": "c",
     "texto": "≥ 10 cm"
    },
    {
     "id": "d",
     "texto": "20 cm"
    },
    {
     "id": "e",
     "texto": "30 cm"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "carcinoma gástrico grande",
   "por_que_correcta": "La única definición en el material del curso está en la diapositiva 686: «tumores primarios grandes (tumores tipo 3 o tipo 4 > 8 cm)», en el contexto de las limitaciones de la gastrectomía laparoscópica. Por eso se toma 8 cm.",
   "por_que_no": {
    "a": "Cinco centímetros es el corte que la clase usa para otras decisiones (por ejemplo, la esplenectomía en tumores de la curvatura mayor del fondo, diap. 618), no para llamar «grande» al tumor.",
    "c": "Era la clave del banco consolidado, pero no tiene fuente en el material del curso; la diapositiva del docente dice más de 8 cm.",
    "d": "No es el corte que usa el material del curso.",
    "e": "No es el corte que usa el material del curso."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma gástrico (diap. 686): «tumores primarios grandes (tumores tipo 3 o tipo 4 > 8 cm)». No se encontró otra definición en las diapositivas ni en la guía.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 686.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 618."
   ]
  },
  {
   "id": "ESP1-B-131",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Enfermedad metastásica",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 15 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 145",
   "enunciado": "Paciente varón de 54 años de edad, con diagnóstico de adenocarcinoma gástrico avanzado. Al momento de evaluar la extensión de la enfermedad presenta metástasis hepática en segmento V y VI de hígado. Se le realiza inmunohistoquímica y se observa que es positivo para PD-L1. El tratamiento de elección sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gastrectomía subtotal D2"
    },
    {
     "id": "b",
     "texto": "Pembrolizumab intravenoso a 10 mg/kg una vez cada 2 semanas durante 24 meses"
    },
    {
     "id": "c",
     "texto": "Doxetacel 500 mg EV cada 8 horas por 6 meses"
    },
    {
     "id": "d",
     "texto": "Quimiorradiación con FOLFOX 4"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "positivo para PD-L1",
   "por_que_correcta": "Hay metástasis hepáticas: es estadio IV y el tratamiento es sistémico. Con PD-L1 positivo, la clase indica «considerar IHQ PD-L1 e inhibidor de punto de control como terapia de primera línea» (diap. 270). La dosis que figura es la del examen; las diapositivas no la especifican.",
   "por_que_no": {
    "a": "Con metástasis hepáticas múltiples no hay cirugía con intención curativa (guía, p. 34).",
    "c": "El esquema propuesto (500 mg cada 8 horas por 6 meses) no corresponde a ningún régimen de las diapositivas.",
    "d": "La quimiorradiación es un tratamiento locorregional; no es la elección en la enfermedad metastásica."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 15). Diapositivas de Carcinoma gástrico: diap. 270 («Considerar IHQ PD-L1 e inhibidor de punto de control como terapia de primera línea»); diap. 483 (estadio IV: terapia sistémica).",
    "guia": "Guía, p. 34: la resecabilidad «se pierde ante… metástasis hepáticas múltiples».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 270.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 483.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 34."
   ]
  },
  {
   "id": "ESP1-B-132",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer de esófago",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T4, preg. 1 (captura); banco consolidado de Oncología, preg. 146",
   "enunciado": "Una de las siguientes afirmaciones sobre el cáncer de esófago es INCORRECTA:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El carcinoma escamoso de esófago no se asocia a hipercalcemia"
    },
    {
     "id": "b",
     "texto": "Su pronóstico es muy malo, sólo un 5 % de los pacientes con cáncer de esófago sobreviven los 5 años"
    },
    {
     "id": "c",
     "texto": "La disfagia progresiva es el síntoma más frecuente"
    },
    {
     "id": "d",
     "texto": "Su etiología está relacionada con el consumo de alcohol y tabaco"
    },
    {
     "id": "e",
     "texto": "La incidencia del histotipo adenocarcinoma ha aumentado en estos últimos años"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "es INCORRECTA",
   "por_que_correcta": "La hipercalcemia humoral maligna se asocia con frecuencia a los carcinomas escamosos (Motilal Nehru et al., 2017), así que afirmar que el escamoso de esófago no se asocia a ella es lo incorrecto. El tema no está en las diapositivas del curso.",
   "por_que_no": {
    "b": "El pronóstico sí es malo, aunque la cifra está desactualizada: StatPearls da hoy alrededor de 20 % de supervivencia a 5 años en conjunto y menos de 5 % en enfermedad a distancia. La pregunta apunta a otra afirmación.",
    "c": "Es correcta: la disfagia progresiva es una de las quejas iniciales más comunes (StatPearls).",
    "d": "Es correcta para el escamoso: tabaco y alcohol son sus principales factores de riesgo (StatPearls).",
    "e": "Es correcta: el adenocarcinoma ha aumentado en las últimas décadas (StatPearls)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). El cáncer de esófago no está en las diapositivas de Oncología; se usan fuentes externas oficiales.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Motilal Nehru V, Garcia G, Ding J, Kong F, Dai Q. Humoral hypercalcemia in uterine cancers: a case report and literature review. Am J Case Rep. 2017;18:22-25. Disponible en: https://amjcaserep.com/abstract/full/idArt/900088",
    "Wang Y, Mukkamalla SKR, Singh R, Lyons S. Esophageal Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 (actualizado 17 ago 2024). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459267/"
   ]
  },
  {
   "id": "ESP1-B-133",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Anatomía quirúrgica: grupo 12a",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 2 (clave resaltada). El enunciado original empieza «En dicha porción se encuentran…» (encadenado a una pregunta que no figura); se reformuló el inicio",
   "enunciado": "¿En qué porción se encuentran los ganglios del grupo 12a durante la disección ganglionar D2?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Pars vasculosa del epiplón menor"
    },
    {
     "id": "b",
     "texto": "Pars densa del epiplón menor"
    },
    {
     "id": "c",
     "texto": "Pars flácida del epiplón menor"
    },
    {
     "id": "d",
     "texto": "Omento mayor"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "grupo 12a",
   "por_que_correcta": "El grupo 12 está en el ligamento hepatoduodenal y el 12a acompaña a la arteria hepática propia (diap. 6). La diapositiva 577 describe su disección en «el tejido graso del ligamento hepatoduodenal», abordando la «pars pediculada» del epiplón menor: la porción que contiene el pedículo hepático, la que el examen llama pars vasculosa.",
   "por_que_no": {
    "b": "Es otra porción del epiplón menor. Ojo: el índice de la clase (diap. 32) rotula este paso como «abordaje pars densa», pero la diapositiva que lo describe (577) ubica el grupo 12 en el ligamento hepatoduodenal; la clave del examen es la pars vasculosa.",
    "c": "La pars flácida se secciona en otro tiempo quirúrgico, para abrir el epiplón menor (diap. 576 y 580).",
    "d": "En el omento mayor y la curvatura mayor están los grupos 4 y 6, no el 12a."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 2). Diapositivas de Carcinoma gástrico: diap. 6 (12 = ligamento hepatoduodenal; 12a arteria hepática propia, 12b conducto biliar, 12p vena porta); diap. 577 («Linfadenectomía del grupo 12 y 5 (Abordaje de la pars pediculada del epiplón menor)»).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 6.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 577.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 576.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 32."
   ]
  },
  {
   "id": "ESP1-B-134",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 28 (clave resaltada); banco consolidado de Oncología, preg. 147",
   "enunciado": "El factor de mayor riesgo para cáncer de colon es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Edad mayor a 60 años"
    },
    {
     "id": "b",
     "texto": "Alto consumo de tabaco"
    },
    {
     "id": "c",
     "texto": "Pólipo adenomatoso"
    },
    {
     "id": "d",
     "texto": "Dieta alta en grasas"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "mayor riesgo",
   "por_que_correcta": "El adenoma es el precursor directo: la mucosa pasa a pólipo y luego a cáncer (diap. 89), y esa secuencia adenoma-carcinoma es el fundamento del tamizaje (guía, p. 35). El 5-7 % de los pólipos adenomatosos ya contiene carcinoma in situ, y más del 30 % si miden más de 2 cm (diap. 96).",
   "por_que_no": {
    "a": "La edad es un factor de riesgo (guía, p. 35), pero no es la lesión precursora.",
    "b": "El tabaco figura en la lista de factores (guía, p. 35), con menos peso que el adenoma.",
    "d": "La guía menciona la dieta rica en carnes rojas y pobre en fibra; además, el NCI no encuentra evidencia fiable de que reducir grasa y carne baje el riesgo de forma importante."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 28). Diapositivas de Cáncer de colon, 1.ª parte: diap. 89 (epitelio normal → proliferación → pólipo → cáncer), diap. 96 (riesgo de carcinoma en el adenoma).",
    "guia": "Guía, p. 35: «Secuencia adenoma-carcinoma… Esto es lo que hace posible el tamizaje: hay una lesión precursora extirpable».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 89.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 96.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 35.",
    "National Cancer Institute. Colorectal Cancer Prevention (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 11 abr 2025. Disponible en: https://www.cancer.gov/types/colorectal/hp/colorectal-prevention-pdq"
   ]
  },
  {
   "id": "ESP1-B-135",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Prevención y tamizaje",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 3 (captura); banco consolidado de Oncología, preg. 148",
   "enunciado": "En relación a la prevención primaria y detección precoz de cáncer de colon en pacientes asintomáticos, señale la respuesta INCORRECTA:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Más del 80 % de pacientes asintomáticos con prueba positiva para sangre oculta en heces padecen cáncer de colon"
    },
    {
     "id": "b",
     "texto": "El uso regular de aspirina reduce el riesgo de padecer cáncer de colon"
    },
    {
     "id": "c",
     "texto": "La detección de un adenoma de colon obliga a la extirpación endoscópica"
    },
    {
     "id": "d",
     "texto": "Se aconseja una colonoscopia cada 3-5 años en pacientes mayores de 50 años, como método de detección precoz"
    },
    {
     "id": "e",
     "texto": "No se ha demostrado que la dieta rica en fibra y los antioxidantes reduzcan el riesgo de padecer cáncer de colon"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "señale la respuesta INCORRECTA",
   "por_que_correcta": "La sangre oculta positiva tiene un valor predictivo bajo para cáncer: en los ensayos con guayaco, solo el 2-10 % de los positivos tenía cáncer (NCI). Un positivo obliga a colonoscopia, pero no equivale a cáncer.",
   "por_que_no": {
    "b": "Es correcta: según el NCI, con evidencia sólida, la aspirina diaria reduce la incidencia y la mortalidad por cáncer colorrectal tras 10-20 años.",
    "c": "Es correcta: extirpar los pólipos adenomatosos reduce el riesgo (NCI) y es la base del tamizaje (guía, p. 35).",
    "d": "Ojo: el intervalo hoy recomendado para la colonoscopia de tamizaje es de 10 años (NCI); la cifra está desactualizada, pero el error grueso que busca la pregunta es otro.",
    "e": "Es correcta: el NCI no encuentra evidencia fiable de que una dieta rica en fibra reduzca el riesgo de forma clínicamente importante."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). El tamizaje no tiene diapositiva propia en el material; se usan las síntesis PDQ del NCI.",
    "guia": "Guía, p. 37: estudiar del tamizaje «edad de inicio, métodos disponibles e intervalos, tal como los enseñe tu docente».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "National Cancer Institute. Colorectal Cancer Screening (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 10 abr 2025. Disponible en: https://www.cancer.gov/types/colorectal/hp/colorectal-screening-pdq",
    "National Cancer Institute. Colorectal Cancer Prevention (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 11 abr 2025. Disponible en: https://www.cancer.gov/types/colorectal/hp/colorectal-prevention-pdq",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 35."
   ]
  },
  {
   "id": "ESP1-B-136",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Diagnóstico",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 149",
   "enunciado": "Paciente varón de 63 años con sospecha de cáncer colorrectal, sin antecedentes familiares. Para confirmar el diagnóstico, ¿qué examen o exámenes pediría?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Colonoscopia"
    },
    {
     "id": "b",
     "texto": "Colonoscopia + biopsia"
    },
    {
     "id": "c",
     "texto": "TC toracoabdominopélvica"
    },
    {
     "id": "d",
     "texto": "Radiografía abdominal"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "Para confirmar el diagnóstico",
   "por_que_correcta": "La guía lo dice así: «Colonoscopia completa con biopsia es el estudio de elección», y además explora todo el colon para descartar tumores sincrónicos. Sin biopsia no hay confirmación.",
   "por_que_no": {
    "a": "Sin biopsia no hay diagnóstico histológico.",
    "c": "La tomografía estadifica; no confirma el diagnóstico.",
    "d": "La radiografía no diagnostica un cáncer de colon."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 1.ª parte (diap. 199): estudio con «Biopsia… Colonoscopia total… Determinación de CEA y TC de tórax, abdomen y pelvis».",
    "guia": "Guía, p. 36: «Colonoscopia completa con biopsia es el estudio de elección».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 199."
   ]
  },
  {
   "id": "ESP1-B-137",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "CEA",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 2 (captura); banco consolidado de Oncología, preg. 150",
   "enunciado": "La determinación preoperatoria del antígeno carcinoembriogénico (CEA) en el cáncer de colon es importante para:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Determinación del estadio"
    },
    {
     "id": "b",
     "texto": "Localización del tumor"
    },
    {
     "id": "c",
     "texto": "Determinación del pronóstico"
    },
    {
     "id": "d",
     "texto": "Predicción de buena respuesta a la quimioterapia"
    },
    {
     "id": "e",
     "texto": "Seguimiento postoperatorio"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "determinación preoperatoria",
   "por_que_correcta": "La guía define su papel: el CEA preoperatorio «no sirve para diagnosticar, sino como valor de referencia para el seguimiento; si estaba elevado y no se normaliza tras la cirugía, sugiere enfermedad residual». El seguimiento posterior incluye CEA cada 3 a 6 meses (diap. 235).",
   "por_que_no": {
    "a": "El estadio lo da el TNM; el CEA no estadifica.",
    "b": "El CEA es un marcador sérico; no localiza el tumor.",
    "c": "Es cierto que un CEA alto se asocia a peor pronóstico (StatPearls), pero la guía del curso define el uso del CEA preoperatorio como referencia para el seguimiento, que es la respuesta esperada.",
    "d": "No predice la respuesta a la quimioterapia."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de colon, 2.ª parte (diap. 235): CEA «al inicio y cada 3 a 6 meses durante 2 años, luego cada 6 meses»; Cáncer rectal (diap. 130): CEA en la evaluación preoperatoria.",
    "guia": "Guía, p. 36 y 37: papel real del CEA, «seguimiento, no diagnóstico».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 235.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 130.",
    "Menon G, Cagir B. Colon Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 (actualizado 27 feb 2025). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK470380/"
   ]
  },
  {
   "id": "ESP1-B-138",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Síndromes hereditarios",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 7 (captura); banco consolidado de Oncología, preg. 151",
   "enunciado": "A un paciente de 42 años se le diagnostica un adenocarcinoma de colon ascendente. Entre sus antecedentes familiares destaca el padre fallecido por una neoplasia de colon a los 52 años, una hermana diagnosticada de cáncer de endometrio a los 39 años, y un hermano de 37 años al que se le ha extirpado un pólipo colónico. ¿A cuál de las siguientes entidades es más probable que pertenezca este paciente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cáncer colorrectal asociado a enfermedad inflamatoria intestinal"
    },
    {
     "id": "b",
     "texto": "Síndrome de Peutz-Jeghers"
    },
    {
     "id": "c",
     "texto": "Cáncer colorrectal hereditario sin poliposis"
    },
    {
     "id": "d",
     "texto": "Síndrome de Turcot"
    },
    {
     "id": "e",
     "texto": "Poliposis adenomatosa familiar"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "cáncer de endometrio a los 39 años",
   "por_que_correcta": "Es el cuadro del síndrome de Lynch: autosómico dominante no polipósico, de aparición precoz (antes de los 50 años), con tumores del lado derecho y cánceres extracolónicos como el de endometrio (diap. 130).",
   "por_que_no": {
    "a": "No hay antecedente de enfermedad inflamatoria intestinal.",
    "b": "Es una poliposis hamartomatosa (los pólipos hamartomatosos figuran en la diap. 92); aquí no hay poliposis.",
    "d": "Pertenece al grupo de las poliposis; aquí no hay poliposis (el hermano tuvo un solo pólipo).",
    "e": "La poliposis adenomatosa familiar tiene más de 100 pólipos adenomatosos (diap. 145)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de colon, 1.ª parte: diap. 130 (Lynch I y II, < 50 años, colon derecho, endometrio), diap. 145 (PAF > 100 pólipos), diap. 92 (pólipos hamartomatosos).",
    "guia": "Guía, p. 36: «síndrome de Lynch (pocos pólipos, tumores de colon derecho, edad temprana y riesgo de otros tumores como el de endometrio)».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 130.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 145.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 92.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-139",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Enfermedad inflamatoria intestinal",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 1 (captura); banco consolidado de Oncología, preg. 152",
   "enunciado": "Los pacientes con enfermedad inflamatoria intestinal tienen mayor incidencia de cáncer de colon que la población general. En relación con ello, señale la respuesta INCORRECTA:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Se recomienda realizar colonoscopias para detección selectiva con un intervalo de al menos 2 años en pacientes con enfermedad de larga evolución"
    },
    {
     "id": "b",
     "texto": "El riesgo acumulativo de padecer un tumor es mayor después de los 10 años de enfermedad"
    },
    {
     "id": "c",
     "texto": "La incidencia es similar en pacientes con colitis ulcerosa y con enfermedad de Crohn"
    },
    {
     "id": "d",
     "texto": "Es más frecuente la presencia de tumores múltiples y con mayor grado de malignidad"
    },
    {
     "id": "e",
     "texto": "Es más frecuente en pacientes con pancolitis que en pacientes con proctitis"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "señale la respuesta INCORRECTA",
   "por_que_correcta": "En la colitis ulcerosa la colonoscopia de vigilancia se recomienda cada 1-2 años (StatPearls). Espaciarla «al menos 2 años» va en contra de esa recomendación.",
   "por_que_no": {
    "b": "Es correcta: el riesgo es acumulativo (StatPearls: 2 % a los 10 años del diagnóstico) y el NCI lo ubica desde unos 8 años de enfermedad.",
    "c": "Se acepta como correcta en esta pregunta. Ojo: las fuentes consultadas no comparan el riesgo entre ambas enfermedades (el NCI las agrupa y la clase menciona ambas, diap. 147).",
    "d": "Se acepta como correcta en esta pregunta; no figura en las diapositivas ni en las fuentes consultadas.",
    "e": "Es correcta: el riesgo es mayor en la pancolitis (StatPearls)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno, que marcó otra alternativa). Diapositivas de Cáncer de colon, 1.ª parte (diap. 147): la enfermedad inflamatoria intestinal aumenta el riesgo. Pregunta con dos alternativas discutibles: se mantiene la clave del banco consolidado, que es la que tiene respaldo en las fuentes.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Lynch WD, Hsu R. Ulcerative Colitis. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 (actualizado 5 jun 2023). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459282/",
    "National Cancer Institute. Colorectal Cancer Prevention (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 11 abr 2025. Disponible en: https://www.cancer.gov/types/colorectal/hp/colorectal-prevention-pdq",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 147."
   ]
  },
  {
   "id": "ESP1-B-140",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Colitis ulcerosa: vigilancia",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 43 (clave resaltada) y Final de Especialidades 2020-2, Oncología, preg. 5 (misma clave, alternativas en otro orden); E-Oncología; banco consolidado de Oncología, preg. 153",
   "enunciado": "Un hombre de 60 años de edad con colitis ulcerosa extensa de 15 años de evolución y en remisión clínica los últimos 3 años acude a nuestra consulta para informarse sobre el riesgo de cáncer colorrectal y sobre la posibilidad de participar en programas de prevención. Es correcto informarle de que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "En casos como el suyo se considera adecuado someterse a colonoscopias periódicas con toma de múltiples biopsias escalonadas a lo largo de todo el colon"
    },
    {
     "id": "b",
     "texto": "La colitis ulcerosa solo se asocia a un incremento en el riesgo de cáncer colorrectal en fumadores"
    },
    {
     "id": "c",
     "texto": "En su caso, dado que está en remisión de larga duración, se considera adecuado el cribado aconsejado a la población general"
    },
    {
     "id": "d",
     "texto": "En casos como el suyo se considera adecuado el cribado mediante estudios periódicos de sangre oculta en heces pero con una frecuencia superior a la utilizada en el cribado de la población general"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "colitis ulcerosa extensa de 15 años de evolución",
   "por_que_correcta": "Es la clave de los dos exámenes. Con una colitis extensa de larga evolución el riesgo es acumulativo y mayor en la pancolitis, y la vigilancia es colonoscópica, cada 1-2 años (StatPearls).",
   "por_que_no": {
    "b": "Falso: la colitis ulcerosa aumenta el riesgo por sí misma (diap. 147; StatPearls).",
    "c": "La remisión no lo devuelve al cribado poblacional: el riesgo es acumulativo y depende de la extensión (StatPearls).",
    "d": "En la colitis de larga evolución la vigilancia es con colonoscopia (StatPearls), no con sangre oculta."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 43) y marcada en el Final 2020-2 (Oncología, preg. 5). Diapositivas de Cáncer de colon, 1.ª parte (diap. 147).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Lynch WD, Hsu R. Ulcerative Colitis. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 (actualizado 5 jun 2023). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459282/",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 147.",
    "National Cancer Institute. Colorectal Cancer Prevention (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 11 abr 2025. Disponible en: https://www.cancer.gov/types/colorectal/hp/colorectal-prevention-pdq"
   ]
  },
  {
   "id": "ESP1-B-141",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Colitis ulcerosa: displasia",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 14 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 154",
   "enunciado": "A un paciente con colitis ulcerosa con afectación hasta el colon transverso se le realiza una colonoscopia de cribado de cáncer colorrectal. La colonoscopia no muestra signos de actividad inflamatoria. Se realizaron múltiples biopsias cada 10 cm. Las biopsias fueron revisadas por 2 patólogos expertos demostrando un foco de displasia de alto grado en una de las biopsias realizadas en el colon sigmoide. ¿Qué indicaría a continuación?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Proctocolectomía total"
    },
    {
     "id": "b",
     "texto": "Tratamiento con mesalazina a dosis de 2-3 gramos al día y repetir la exploración a los 3 a 6 meses"
    },
    {
     "id": "c",
     "texto": "Vigilancia intensiva con colonoscopia cada 3-6 meses"
    },
    {
     "id": "d",
     "texto": "Repetir la exploración y realizar una cromoendoscopia para identificar la lesión y realizar una mucosectomía endoscópica"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "displasia de alto grado",
   "por_que_correcta": "Es la clave del examen. La displasia de alto grado no resecable o multifocal es indicación quirúrgica, y como la colitis ulcerosa se limita al colon, la proctocolectomía (con reservorio ileoanal) es curativa (StatPearls).",
   "por_que_no": {
    "b": "La mesalazina no trata la displasia de alto grado.",
    "c": "Vigilar una displasia de alto grado confirmada por dos patólogos la deja sin tratamiento.",
    "d": "La displasia se encontró en biopsias aleatorias sin lesión visible; no hay una lesión delimitada que resecar por endoscopia."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 14). El tema no tiene diapositiva específica; se usa la fuente externa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Lynch WD, Hsu R. Ulcerative Colitis. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 (actualizado 5 jun 2023). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK459282/",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 147."
   ]
  },
  {
   "id": "ESP1-B-142",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Histología",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 9 (captura); banco consolidado de Oncología, preg. 155",
   "enunciado": "La mayoría de los cánceres colorrectales son:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Carcinomas escamosos"
    },
    {
     "id": "b",
     "texto": "Carcinoides"
    },
    {
     "id": "c",
     "texto": "Carcinomas cloacogénicos"
    },
    {
     "id": "d",
     "texto": "Adenocarcinomas de tipo mucosecretor"
    },
    {
     "id": "e",
     "texto": "Carcinomas de epitelio de transición"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "La mayoría",
   "por_que_correcta": "El epitelio del colon es glandular: más del 90 % de los tumores malignos del colon son adenocarcinomas (StatPearls).",
   "por_que_no": {
    "a": "Es una histología poco frecuente en el colon.",
    "b": "Los tumores neuroendocrinos están entre las neoplasias minoritarias del colon (StatPearls).",
    "c": "Es una histología rara, no la mayoritaria.",
    "e": "No es la histología del epitelio colónico."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). La proporción no figura en las diapositivas; se usa la fuente externa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Menon G, Cagir B. Colon Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 (actualizado 27 feb 2025). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK470380/"
   ]
  },
  {
   "id": "ESP1-B-143",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Factores pronósticos",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 8 (captura); banco consolidado de Oncología, preg. 156. En el original la última alternativa dice «Elevación preoperatorio de CEA postoperatorio»",
   "enunciado": "El pronóstico de un cáncer de colon se relaciona con las siguientes circunstancias EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Infiltración grasa pericólica"
    },
    {
     "id": "b",
     "texto": "Tumor perforado"
    },
    {
     "id": "c",
     "texto": "Tamaño tumoral"
    },
    {
     "id": "d",
     "texto": "Diferenciación histológica"
    },
    {
     "id": "e",
     "texto": "Elevación preoperatoria de CEA"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "EXCEPTO",
   "por_que_correcta": "En el colon pesa la profundidad de invasión (T), los ganglios y los factores de alto riesgo, no el diámetro. StatPearls: «The most important prognostic indicator is the pathological stage», y no presenta el tamaño como factor pronóstico; la lista de alto riesgo de la diapositiva 62 tampoco lo incluye.",
   "por_que_no": {
    "a": "La infiltración de la grasa pericólica es T3 (diap. 179): define el estadio.",
    "b": "La perforación figura entre las características de alto riesgo (diap. 62).",
    "d": "La histología poco diferenciada es una característica de alto riesgo (diap. 62).",
    "e": "Un CEA alto se asocia a peor pronóstico (StatPearls)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de colon, 2.ª parte (diap. 62): alto riesgo = T4, histología poco diferenciada, invasión linfovascular y perineural, obstrucción, perforación, márgenes positivos, < 12 ganglios.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 179.",
    "Menon G, Cagir B. Colon Cancer. En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 (actualizado 27 feb 2025). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK470380/"
   ]
  },
  {
   "id": "ESP1-B-144",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "TNM: T",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 157",
   "enunciado": "Paciente al que se realiza hemicolectomía derecha por adenocarcinoma de colon ascendente; la patología revela que el tumor llega hasta la subserosa. ¿Cuál es el T correspondiente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "T3"
    },
    {
     "id": "b",
     "texto": "T2"
    },
    {
     "id": "c",
     "texto": "T4b"
    },
    {
     "id": "d",
     "texto": "T4a"
    },
    {
     "id": "e",
     "texto": "T1"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "llega hasta la subserosa",
   "por_que_correcta": "En colon, T3 = «Subserosa o tejido pericólico o perirectal» (diap. 179).",
   "por_que_no": {
    "b": "T2 es la muscular propia.",
    "c": "T4b invade o se adhiere a órganos o estructuras adyacentes (diap. 184).",
    "d": "T4a penetra la superficie del peritoneo visceral (diap. 184).",
    "e": "T1 es la submucosa."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 1.ª parte: diap. 179 (T1 submucosa, T2 muscular propia, T3 subserosa o tejido pericólico, T4 serosa), diap. 184 (T4a y T4b).",
    "guia": "Guía, p. 36: la T por capas (submucosa, muscular propia, subserosa o tejidos pericólicos, serosa u órganos vecinos).",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 179.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 184.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-145",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "TNM: N",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 158",
   "enunciado": "Varón de 73 años al que se realizó resección colónica por adenocarcinoma, con linfadenectomía D3 y un total de 18 ganglios resecados; el resultado informa 3/18. El estado ganglionar regional es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "N2b"
    },
    {
     "id": "b",
     "texto": "N1a"
    },
    {
     "id": "c",
     "texto": "N2a"
    },
    {
     "id": "d",
     "texto": "N3"
    },
    {
     "id": "e",
     "texto": "N1b"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "3/18",
   "por_que_correcta": "Tres ganglios positivos = N1b, que va de 2 a 3 ganglios (diap. 192).",
   "por_que_no": {
    "a": "N2b es más de 7 ganglios (diap. 290).",
    "b": "N1a es un solo ganglio (diap. 192).",
    "c": "N2a es de 4 a 6 ganglios (diap. 290).",
    "d": "La clasificación de colon de la clase llega hasta N2b; no hay N3."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 1.ª parte: diap. 192 (N1a 1 ganglio, N1b 2-3), diap. 290 (N2a 4-6, N2b > 7).",
    "guia": "Guía, p. 36: se exige un mínimo de doce ganglios examinados.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 192.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 290.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-146",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Linfadenectomía del colon",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 159",
   "enunciado": "Durante la hemicolectomía derecha por cáncer de ciego se retiran los siguientes ganglios:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ileocólicos, apicales y de Drummond"
    },
    {
     "id": "b",
     "texto": "Ganglios de la cólica transversa, pericólicos y paracólicos"
    },
    {
     "id": "c",
     "texto": "Ileocólicos, de la cólica derecha, de la rama derecha de la arteria cólica media y apicales"
    },
    {
     "id": "d",
     "texto": "Cólica media, cólica izquierda, ileocólicos y mesentérica superior"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "cáncer de ciego",
   "por_que_correcta": "En el colon la linfa sigue a la arteria: la hemicolectomía derecha liga la ileocólica y la cólica derecha (guía, p. 36), y la pieza incluye la rama derecha de la cólica media (diap. 26 de la 2.ª parte), con sus ganglios hasta los apicales.",
   "por_que_no": {
    "a": "Le faltan la cólica derecha y la rama derecha de la cólica media; Drummond es la arteria marginal (diap. 57), cuyos ganglios son los paracólicos (diap. 188).",
    "b": "Le faltan los ileocólicos, que son los primeros del ciego (diap. 191).",
    "d": "La cólica izquierda pertenece al territorio de la mesentérica inferior (descendente), no a la hemicolectomía derecha."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon: 1.ª parte, diap. 191 (ganglios regionales por segmento) y diap. 188 (pericólicos, paracólicos, intermedios y principales); 2.ª parte, diap. 26 (hemicolectomía derecha: cólica derecha y rama derecha de la cólica media).",
    "guia": "Guía, p. 36: «Hemicolectomía derecha (ciego, ascendente): ligadura de ileocólica y cólica derecha».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 191.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 188.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-147",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Linfadenectomía D3",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 160",
   "enunciado": "En la linfadenectomía D3 de la cirugía por cáncer de colon derecho es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Se resecan hasta los ganglios principales a nivel de la arteria mesentérica superior"
    },
    {
     "id": "b",
     "texto": "Se resecan hasta los ganglios de la arteria cólica derecha"
    },
    {
     "id": "c",
     "texto": "Se resecan los ganglios aórticos"
    },
    {
     "id": "d",
     "texto": "Se resecan los ganglios del tronco celíaco"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "linfadenectomía D3",
   "por_que_correcta": "La D3 «implica la resección completa de los ganglios principales» (diap. 271), que en el colon derecho están en la arteria mesentérica superior (diap. 188 y 189).",
   "por_que_no": {
    "b": "Llegar a los ganglios de la cólica derecha (intermedios) es una D2.",
    "c": "Los ganglios aórticos no son regionales del colon (diap. 186).",
    "d": "El tronco celíaco no drena el colon derecho; no es regional (diap. 186)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 1.ª parte: diap. 188-189 (paracólicos → intermedios → principales en la AMS/AMI), diap. 186 (ganglios regionales), diap. 271 (EMC frente a D3 japonesa).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 188.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 189.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 186."
   ]
  },
  {
   "id": "ESP1-B-148",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Linfadenectomía D3",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 8 (clave resaltada); banco consolidado de Oncología, preg. 161",
   "enunciado": "Los ganglios apicales o principales, que son resecados durante la disección D3 en la hemicolectomía derecha por cáncer de colon, se corresponden a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ganglios intermedios que discurren por los vasos cólicos derechos"
    },
    {
     "id": "b",
     "texto": "Ganglios alrededor de los vasos mesentéricos superiores"
    },
    {
     "id": "c",
     "texto": "Ganglios paracólicos que discurren alrededor de la arteria marginal"
    },
    {
     "id": "d",
     "texto": "Ninguna de las anteriores"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "apicales o principales",
   "por_que_correcta": "Los ganglios principales o apicales están en el origen de los pedículos, sobre la arteria mesentérica superior en el colon derecho (diap. 188 y 189).",
   "por_que_no": {
    "a": "Los que siguen a los vasos cólicos son los intermedios, una estación previa (diap. 188).",
    "c": "Los paracólicos, a lo largo de la arteria marginal, son la primera estación (diap. 188).",
    "d": "Hay una alternativa correcta."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 8). Diapositivas de Cáncer de colon, 1.ª parte: diap. 188 («Ganglios linfáticos principales o apicales — Arteria mesentérica superior / inferior»), diap. 189.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 188.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 189."
   ]
  },
  {
   "id": "ESP1-B-149",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Localmente avanzado",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 162 (que daba «Colectomía con resección en bloque»); se usa el algoritmo que proyecta el docente",
   "enunciado": "En cáncer de colon de ángulo hepático con enfermedad ganglionar voluminosa o T4b clínico, en un paciente estable y sin comorbilidades, lo recomendable es:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Colectomía con resección en bloque"
    },
    {
     "id": "b",
     "texto": "Radioterapia sola"
    },
    {
     "id": "c",
     "texto": "Quimioterapia neoadyuvante FOLFOX o CAPOX"
    },
    {
     "id": "d",
     "texto": "Quimiorradiación adyuvante"
    },
    {
     "id": "e",
     "texto": "Hemicolectomía derecha radical extendida"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "enfermedad ganglionar voluminosa o T4b clínico",
   "por_que_correcta": "En el algoritmo NCCN 1.2026 que proyecta el docente, el «T4b clínico o enfermedad ganglionar voluminosa» lleva a «considerar terapia neoadyuvante: FOLFOX o CAPEOX», y después colectomía con resección en bloque (diap. 5, recuadro marcado en rojo).",
   "por_que_no": {
    "a": "Es el paso siguiente, después de la neoadyuvancia en este escenario. Era la clave del banco consolidado, pero la diapositiva del docente pone primero la neoadyuvancia.",
    "b": "En el colon no se usa radioterapia (guía, p. 36).",
    "d": "En el colon no se usa radioterapia, y la adyuvancia va después de operar.",
    "e": "Operar de entrada no es lo que indica el algoritmo para el T4b o los ganglios voluminosos."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 2.ª parte (diap. 5, NCCN 1.2026, pMMR/MSS): «T4b clínico o Enfermedad ganglionar voluminosa → Considerar terapia neoadyuvante FOLFOX o CAPEOX → Colectomía con resección en bloque de ganglios linfáticos regionales».",
    "guia": "Guía, p. 36: «No se usa radioterapia en el colon».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 5.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-150",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Tratamiento del colon localizado",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 5 (captura); banco consolidado de Oncología, preg. 163",
   "enunciado": "En un paciente de 70 años se ha detectado por colonoscopia una tumoración en colon descendente, estenosante y con resultado histológico de adenocarcinoma moderadamente diferenciado. Las pruebas complementarias no demuestran diseminación del proceso neoplásico. ¿Cuál debería ser el tratamiento a plantear?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Practicar resección quirúrgica sólo en caso de existir signos clínicos de oclusión intestinal"
    },
    {
     "id": "b",
     "texto": "Resección quirúrgica y tratamiento quimioterápico según resultado del estudio"
    },
    {
     "id": "c",
     "texto": "Resección quirúrgica y tratamiento radioterápico complementario"
    },
    {
     "id": "d",
     "texto": "Radioterapia combinada con quimioterapia y posterior resección quirúrgica"
    },
    {
     "id": "e",
     "texto": "Quimioterapia con 5-fluoracilo y levamisol"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "no demuestran diseminación",
   "por_que_correcta": "Cirugía como pilar y quimioterapia adyuvante según el estudio de la pieza: si hay ganglios positivos o factores de mal pronóstico (guía, p. 36). Las opciones adyuvantes dependen del estadio (diap. 61).",
   "por_que_no": {
    "a": "Esperar a la oclusión en un tumor resecable no tiene justificación.",
    "c": "En el colon no se usa radioterapia (guía, p. 36).",
    "d": "La quimiorradiación previa es del recto, no del colon descendente.",
    "e": "No es un esquema de la diapositiva 5 (FOLFOX, CAPEOX, capecitabina o 5-FU/leucovorina), y la quimioterapia sola no reseca el tumor."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de colon, 2.ª parte: diap. 61 (adyuvancia según estadio), diap. 5 (esquemas adyuvantes).",
    "guia": "Guía, p. 36: «Cirugía como pilar en la enfermedad localizada. Quimioterapia adyuvante en enfermedad con ganglios positivos y en casos seleccionados sin ganglios pero con factores de mal pronóstico. No se usa radioterapia en el colon».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 61.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 5."
   ]
  },
  {
   "id": "ESP1-B-151",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Adyuvancia",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 164",
   "enunciado": "Mujer de 63 años con cáncer de colon sigmoides pT3N1 (3/20 ganglios), R0, ECOG 0. ¿Cuál es la estrategia terapéutica más apropiada y su racional?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Observación"
    },
    {
     "id": "b",
     "texto": "Quimioterapia neoadyuvante"
    },
    {
     "id": "c",
     "texto": "Quimioterapia adyuvante basada en oxaliplatino"
    },
    {
     "id": "d",
     "texto": "Radioterapia pélvica adyuvante"
    },
    {
     "id": "e",
     "texto": "Quimioterapia oral exclusiva"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "pT3N1 (3/20 ganglios), R0",
   "por_que_correcta": "Ganglios positivos = estadio III: va quimioterapia adyuvante (guía, p. 36). Los esquemas preferidos son FOLFOX o CAPEOX, ambos con oxaliplatino (diap. 5).",
   "por_que_no": {
    "a": "Con ganglios positivos, observar deja sin tratamiento una enfermedad con alto riesgo de recaída.",
    "b": "El tumor ya está resecado: la neoadyuvancia no aplica.",
    "d": "En el colon no se usa radioterapia (guía, p. 36).",
    "e": "La capecitabina sola figura como opción, pero los esquemas preferidos son FOLFOX o CAPEOX (diap. 5)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de colon, 2.ª parte: diap. 5 (adyuvancia: FOLFOX preferido o CAPEOX preferido, o capecitabina, o 5-FU/leucovorina), diap. 61 (opciones según estadio).",
    "guia": "Guía, p. 36: quimioterapia adyuvante en enfermedad con ganglios positivos.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 5.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 61.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-152",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Obstrucción del colon izquierdo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 4 (captura); banco consolidado de Oncología, preg. 165",
   "enunciado": "En las oclusiones del colon izquierdo causadas por una neoplasia en el recto-sigma es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El cierre intestinal completo es poco habitual"
    },
    {
     "id": "b",
     "texto": "Los vómitos suelen ser poco abundantes y tardíos"
    },
    {
     "id": "c",
     "texto": "No resulta posible una oclusión de asa cerrada"
    },
    {
     "id": "d",
     "texto": "La distensión abdominal suele ser poco importante"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "recto-sigma",
   "por_que_correcta": "En la obstrucción del intestino grueso la distensión es marcada y el vómito, cuando aparece, es intermitente (StatPearls). En los tumores de recto y sigmoides el vómito ni siquiera figura entre los síntomas frecuentes (diap. 174).",
   "por_que_no": {
    "a": "El tumor izquierdo crece de forma anular y estenosante y se presenta con obstrucción (guía, p. 36).",
    "c": "La oclusión en asa cerrada sí es posible: es la obstrucción completa en ambos extremos de un segmento (StatPearls).",
    "d": "La distensión es marcada en la obstrucción del colon (StatPearls: «distention is marked in LBO»)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de colon, 1.ª parte (diap. 174): síntomas por localización (recto y sigmoides: melena 85 %, estreñimiento 46 %, tenesmo 30 %…).",
    "guia": "Guía, p. 36: colon izquierdo, tumor anular y estenosante que se presenta con cambio del hábito, heces acintadas, rectorragia y obstrucción.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Smith DA, Kashyap S, Nehring SM. Bowel Obstruction (capítulo archivado). En: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 (actualizado 31 jul 2023). Disponible en: https://www.ncbi.nlm.nih.gov/books/NBK441975/",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 174.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-B-153",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Metástasis pulmonares",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 6 (captura); banco consolidado de Oncología, preg. 166",
   "enunciado": "En un paciente con metástasis pulmonares y sin afectación hepática por un carcinoma de origen intestinal, ¿cuál es la localización más probable del primario?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Recto"
    },
    {
     "id": "b",
     "texto": "Colon transverso"
    },
    {
     "id": "c",
     "texto": "Sigma"
    },
    {
     "id": "d",
     "texto": "Ángulo esplénico del colon"
    },
    {
     "id": "e",
     "texto": "Ciego"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "sin afectación hepática",
   "por_que_correcta": "El recto tiene drenaje venoso doble: la rectal superior va a la porta, pero las rectales media e inferior van a la cava, así que el recto bajo puede dar metástasis pulmonares sin pasar por el hígado (guía, p. 38 y 42; diap. 25 de Cáncer rectal).",
   "por_que_no": {
    "b": "Todo el colon drena a la porta: su primera metástasis es hepática (guía, p. 42).",
    "c": "El sigma drena a la porta por la mesentérica inferior.",
    "d": "El ángulo esplénico drena a la porta.",
    "e": "El ciego drena a la porta por la mesentérica superior."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer rectal (diap. 25): drenaje venoso del recto (rectal superior → mesentérica inferior → porta; rectales media e inferior → ilíaca interna → cava).",
    "guia": "Guía, p. 39: «como el recto bajo drena en parte a la cava, puede dar metástasis pulmonares sin metástasis hepáticas, cosa que casi no ocurre en el colon».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 42.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 25."
   ]
  },
  {
   "id": "ESP1-B-154",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Metástasis hepática",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 25 (clave resaltada); Final de Especialidades 2020-2, Oncología, preg. 4, y Parcial 2023-10 (1.ª rotación), preg. 42 (misma clave en ambos); E-Oncología; banco consolidado de Oncología, preg. 167",
   "enunciado": "Paciente de 57 años, diagnosticado de adenocarcinoma de colon estadio T3N1M0. Fue tratado con resección seguida de quimioterapia postoperatoria FOLFOX (fluorouracilo, leucovorin y oxaliplatino) durante 6 meses. En un control rutinario, dos años después, se detecta elevación de antígeno carcinoembrionario (CEA) a 30 ng/mL (previo menor de 2 ng/mL). No tiene síntomas, el examen físico es anodino, la radiografía de tórax es normal. En la TC se aprecia una masa de 3 cm en el lóbulo hepático derecho que capta en PET. No se observan otras alteraciones en TC ni en PET. ¿Qué actitud le parece más correcta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Quimioterapia con FOLFIRI (fluorouracilo, leucovorin e irinotecan) más bevacizumab"
    },
    {
     "id": "b",
     "texto": "Radioterapia hepática"
    },
    {
     "id": "c",
     "texto": "Ninguna"
    },
    {
     "id": "d",
     "texto": "Monoquimioterapia con capecitabina"
    },
    {
     "id": "e",
     "texto": "Valoración por cirugía de resección de la lesión hepática"
    }
   ],
   "correcta": "e",
   "tipo_clave": "docente",
   "dato_clave": "masa de 3 cm en el lóbulo hepático derecho",
   "por_que_correcta": "Metástasis hepática única y resecable: la resección mantiene la intención curativa (guía, p. 36). La clase lo dice así: con la cirugía de las metástasis hepáticas colorrectales «es posible una cura… y debe ser el objetivo» (diap. 132).",
   "por_que_no": {
    "a": "La quimioterapia sola renuncia a la curación posible con la resección.",
    "b": "La radioterapia no es el tratamiento de una metástasis hepática resecable.",
    "c": "No actuar ante una metástasis resecable no es aceptable.",
    "d": "La monoquimioterapia no es tratamiento curativo."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 25) y marcada en el Final 2020-2 (Oncología, preg. 4). Diapositivas de Cáncer de colon, 2.ª parte (diap. 132).",
    "guia": "Guía, p. 36: «En enfermedad metastásica hepática o pulmonar limitada y resecable, la resección de las metástasis mantiene intención curativa».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 132.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 37."
   ]
  },
  {
   "id": "ESP1-B-155",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: neoadyuvancia",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 168",
   "enunciado": "Mujer de 58 años con adenocarcinoma de recto medio T3N1 por resonancia pelviana, con margen de resección circunferencial amenazado; ECOG 1. ¿Plan óptimo?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección anterior baja inmediata"
    },
    {
     "id": "b",
     "texto": "Quimiorradioterapia neoadyuvante (o terapia neoadyuvante total) y luego resección con escisión mesorrectal total"
    },
    {
     "id": "c",
     "texto": "Radioterapia corta sola y cirugía al día siguiente en cualquier caso"
    },
    {
     "id": "d",
     "texto": "Quimioterapia adyuvante sin cirugía"
    },
    {
     "id": "e",
     "texto": "Colostomía definitiva sin tratamiento oncológico"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "margen de resección circunferencial amenazado",
   "por_que_correcta": "Con margen circunferencial amenazado la guía indica neoadyuvancia (radioterapia con o sin quimioterapia), seguida de cirugía con escisión total del mesorrecto; la tendencia actual es dar toda la quimioterapia y la radioterapia antes de operar (neoadyuvancia total).",
   "por_que_no": {
    "a": "Operar de entrada con el margen amenazado arriesga un margen positivo y recidiva local.",
    "c": "Con el margen circunferencial amenazado se busca reducir el tumor antes de operar (guía, p. 39); la radioterapia corta seguida de cirugía inmediata «en cualquier caso» no responde a ese objetivo.",
    "d": "Sin cirugía no hay tratamiento curativo estándar en este caso.",
    "e": "Es una enfermedad potencialmente curable."
   },
   "fuentes": {
    "docente": "El tema está en la guía; la diapositiva 204 de Cáncer rectal trata la quimioterapia concurrente con la radiación preoperatoria.",
    "guia": "Guía, p. 39: «Neoadyuvancia (radioterapia con o sin quimioterapia) en tumores localmente avanzados o con margen circunferencial amenazado, seguida de cirugía con escisión total del mesorrecto»; recuadro «Clásico frente a actual».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 40.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 204."
   ]
  },
  {
   "id": "ESP1-B-156",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: neoadyuvancia",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 169",
   "enunciado": "Paciente de 42 años con cáncer de recto del tercio inferior; en la TC se evidencia infiltración y adenopatías del mesorrecto. ¿Qué se indicaría?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Solo colostomía tipo Hartmann"
    },
    {
     "id": "b",
     "texto": "Resección de la porción rectal comprometida con extirpación de la próstata"
    },
    {
     "id": "c",
     "texto": "Solo operación de Hartmann"
    },
    {
     "id": "d",
     "texto": "Iniciar tratamiento neoadyuvante con quimioterapia + radioterapia"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "adenopatías del mesorrecto",
   "por_que_correcta": "Tumor localmente avanzado con ganglios en el mesorrecto: primero neoadyuvancia y luego escisión total del mesorrecto (guía, p. 39). Añadir quimioterapia a la radioterapia preoperatoria mejora la respuesta patológica y el control local (diap. 204).",
   "por_que_no": {
    "a": "Una colostomía sola no trata el tumor.",
    "b": "No hay datos de invasión prostática que justifiquen una resección extendida, y se omitiría la neoadyuvancia.",
    "c": "La operación de Hartmann sola no es el tratamiento oncológico del recto bajo localmente avanzado."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer rectal (diap. 204): la quimioterapia concurrente con la radioterapia preoperatoria «mejora la respuesta patológica y mejora el control local».",
    "guia": "Guía, p. 39: neoadyuvancia en tumores localmente avanzados, seguida de escisión total del mesorrecto.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 204."
   ]
  },
  {
   "id": "ESP1-B-157",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: tipo de resección",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T5; banco consolidado de Oncología, preg. 170",
   "enunciado": "En cáncer de recto localizado a 9 cm del margen anal, que abarca un tercio de su circunferencia, ¿cuál es la intervención quirúrgica de elección?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección anterior u operación de Dixon"
    },
    {
     "id": "b",
     "texto": "Amputación abdominoperineal u operación de Miles"
    },
    {
     "id": "c",
     "texto": "Proctocolectomía izquierda"
    },
    {
     "id": "d",
     "texto": "Resección local endoanal"
    },
    {
     "id": "e",
     "texto": "Quimioterapia neoadyuvante"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "9 cm del margen anal",
   "por_que_correcta": "La resección anterior baja preserva el ano y está indicada cuando la lesión está a más de 5 cm del margen anal (diap. 121). Para el recto medio y superior es el tratamiento de elección, con escisión mesorrectal y anastomosis colorrectal (diap. 164).",
   "por_que_no": {
    "b": "La amputación abdominoperineal se indica a menos de 5 cm del margen anal o con invasión del esfínter (diap. 121 y 165).",
    "c": "No es la cirugía estándar del cáncer de recto.",
    "d": "La escisión local exige tumor a menos de 8 cm del margen anal, menos del 30 % de la circunferencia y T1 (diap. 119): no se cumple.",
    "e": "No es una intervención quirúrgica; y el enunciado no da datos de enfermedad localmente avanzada."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer rectal: diap. 121 (RAB si > 5 cm del margen anal; RAP si < 5 cm), diap. 164 (RAB con EMT para recto medio y superior), diap. 119 (criterios de escisión local).",
    "guia": "Guía, p. 39: «Resección anterior (alta o baja) con escisión total del mesorrecto: el procedimiento estándar para el recto medio y superior».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 121.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 164.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 119.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39."
   ]
  },
  {
   "id": "ESP1-B-158",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: tipo de resección",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T5, preg. 10 (captura); banco consolidado de Oncología, preg. 171",
   "enunciado": "¿Cuál es la cirugía de elección en el tratamiento del cáncer de recto grosero situado a 4 cm de las márgenes del ano con infiltración de la totalidad de la pared rectal?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La colostomía izquierda"
    },
    {
     "id": "b",
     "texto": "La resección rectal con conservación del esfínter"
    },
    {
     "id": "c",
     "texto": "La amputación abdominoperineal con colostomía"
    },
    {
     "id": "d",
     "texto": "La hemicolectomía izquierda"
    },
    {
     "id": "e",
     "texto": "La resección endoscópica"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "a 4 cm de las márgenes del ano",
   "por_que_correcta": "A menos de 5 cm del margen anal la indicación es la resección abdominoperineal (diap. 121), que extirpa recto, ano y esfínteres en bloque con colostomía definitiva (diap. 165). Ojo: hoy un tumor así recibe antes neoadyuvancia, y en algunos casos la respuesta permite conservar el esfínter (guía, p. 39-40).",
   "por_que_no": {
    "a": "Una colostomía sola no trata el tumor.",
    "b": "A 4 cm y con toda la pared infiltrada no se obtiene margen conservando el esfínter, según el criterio de la diapositiva 121.",
    "d": "La hemicolectomía izquierda es para el colon descendente, no para el recto.",
    "e": "Un tumor que infiltra toda la pared no es candidato a resección endoscópica."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer rectal: diap. 121 (RAP si la lesión está a menos de 5 cm del margen anal), diap. 165 (RAP en bloque con colostomía).",
    "guia": "Guía, p. 39: resección abdominoperineal «cuando el tumor invade el esfínter o está tan cerca de él que no puede conseguirse margen conservándolo».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 121.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 165.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 40."
   ]
  },
  {
   "id": "ESP1-B-159",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: escisión transanal",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 45 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 172",
   "enunciado": "Es uno de los criterios para escisión transanal de un adenocarcinoma de recto:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tumor fijo"
    },
    {
     "id": "b",
     "texto": "Márgenes libres (> 4 mm)"
    },
    {
     "id": "c",
     "texto": "Tamaño tumoral < 3 cm"
    },
    {
     "id": "d",
     "texto": "Compromiso < 40 % de la circunferencia del intestino"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "escisión transanal",
   "por_que_correcta": "Los criterios de la clase: menos del 30 % de la circunferencia, menos de 3 cm de tamaño, móvil, a menos de 8 cm del margen anal, solo T1, bien o moderadamente diferenciado, sin invasión linfovascular ni perineural (diap. 119).",
   "por_que_no": {
    "a": "El tumor debe ser móvil, no fijo.",
    "b": "La diapositiva pide margen libre > 3 mm, con un objetivo de escisión ≥ 10 mm; la cifra de la alternativa no es la del criterio.",
    "d": "El límite es menos del 30 % de la circunferencia, no 40 %."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 45). Diapositivas de Cáncer rectal (diap. 119): «< 30 % de la circunferencia intestinal; < 3 cm de tamaño; margen quirúrgico libre (> 3 mm); móvil, no fijo; a menos de 8 cm del margen anal; solo T1…».",
    "guia": "Guía, p. 39: escisión local transanal «solo para tumores muy precoces, pequeños, bien diferenciados, superficiales y sin sospecha de ganglios».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 119.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39."
   ]
  },
  {
   "id": "ESP1-B-160",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Recto: escisión transanal",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 7 (clave resaltada); E-Oncología; banco consolidado de Oncología, preg. 173",
   "enunciado": "Los adenocarcinomas de recto distal que pueden ir a escisión transanal de primera línea son aquellos que deben presentar la siguiente característica:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ninguna de las anteriores es cierta"
    },
    {
     "id": "b",
     "texto": "Compromiso clínico/radiológico de T3-T4"
    },
    {
     "id": "c",
     "texto": "Tamaño tumoral < 4 cm"
    },
    {
     "id": "d",
     "texto": "Metástasis ganglionar"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "escisión transanal de primera línea",
   "por_que_correcta": "Ninguna de las tres cumple los criterios de la diapositiva 119: la escisión local es solo para T1, sin adenopatías en las imágenes y de menos de 3 cm.",
   "por_que_no": {
    "b": "T3-T4 es justamente una contraindicación: el criterio es «solo T1».",
    "c": "El límite de la clase es menos de 3 cm, no 4 cm.",
    "d": "Exige «sin evidencia de linfadenopatía en las imágenes»: la escisión local no reseca ganglios (guía, p. 39)."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 7). Diapositivas de Cáncer rectal (diap. 119): criterios de escisión local transanal.",
    "guia": "Guía, p. 39: la escisión local «es una excepción, no una alternativa general: no reseca ganglios».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 119.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 39."
   ]
  },
  {
   "id": "ESP1-B-161",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hepatocarcinoma: factores de riesgo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 2 (captura); banco consolidado de Oncología, preg. 175",
   "enunciado": "Entre las causas predisponentes a un carcinoma hepatocelular se consideran las siguientes, EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hepatopatía alcohólica"
    },
    {
     "id": "b",
     "texto": "Hepatitis B"
    },
    {
     "id": "c",
     "texto": "Déficit de la alfa-1 antitripsina"
    },
    {
     "id": "d",
     "texto": "Hemocromatosis"
    },
    {
     "id": "e",
     "texto": "Hepatitis A"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "EXCEPTO",
   "por_que_correcta": "Las causas del hepatocarcinoma son enfermedades crónicas del hígado. La hepatitis A no lo es: «a diferencia de otras formas de hepatitis, la hepatitis A no se convierte en una infección crónica» (CDC).",
   "por_que_no": {
    "a": "Figura en la clase: «la ingesta excesiva de alcohol» y «la cirrosis alcohólica» (diap. 141).",
    "b": "La guía la destaca porque «puede producir hepatocarcinoma incluso sin cirrosis» (p. 44).",
    "c": "Figura en la clase entre los errores hereditarios del metabolismo: «deficiencia de alfa 1 antitripsina» (diap. 141).",
    "d": "Figura en la clase (diap. 141) y en la guía (p. 44)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de hígado: diap. 140 (VHB y VHC), diap. 141 (alcohol, aflatoxina, cirrosis alcohólica, Wilson, hemocromatosis, porfiria, alfa-1 antitripsina).",
    "guia": "Guía, p. 44: «Cirrosis de cualquier causa; hepatitis B… y hepatitis C; alcohol; enfermedad hepática por depósito de grasa…; aflatoxinas; hemocromatosis».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 141.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 140.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 44.",
    "Centers for Disease Control and Prevention. Clinical Overview of Hepatitis A [Internet]. Atlanta: CDC; actualizado 29 ago 2025. Disponible en: https://www.cdc.gov/hepatitis-a/hcp/clinical-overview/index.html"
   ]
  },
  {
   "id": "ESP1-B-162",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hepatocarcinoma: factores de riesgo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 7 (captura); banco consolidado de Oncología, preg. 176",
   "enunciado": "Una de las siguientes enfermedades crónicas del hígado se asocia a carcinoma hepatocelular con menor frecuencia que las otras:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cirrosis alcohólica"
    },
    {
     "id": "b",
     "texto": "Cirrosis por el virus de la hepatitis C"
    },
    {
     "id": "c",
     "texto": "Infección crónica por virus de la hepatitis B"
    },
    {
     "id": "d",
     "texto": "Cirrosis por hemocromatosis"
    },
    {
     "id": "e",
     "texto": "Hepatitis autoinmune de tipo I"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "con menor frecuencia",
   "por_que_correcta": "La clase lo dice: en la hepatitis autoinmune con cirrosis la incidencia anual de hepatocarcinoma es de aproximadamente 1,1 %, «lo que no es lo suficientemente alto como para justificar la vigilancia» (diap. 142).",
   "por_que_no": {
    "a": "La cirrosis alcohólica es una causa reconocida (diap. 141), con riesgo suficiente para vigilar (diap. 183).",
    "b": "El VHC es de las causas principales; la carga viral es factor de riesgo independiente (diap. 140).",
    "c": "El VHB puede dar hepatocarcinoma incluso sin cirrosis (guía, p. 44).",
    "d": "La hemocromatosis hereditaria figura entre las causas (diap. 141)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de hígado (diap. 142): incidencia de 1,1 % anual en hepatitis autoinmune con cirrosis.",
    "guia": "Guía, p. 44: factores de riesgo del hepatocarcinoma.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 142.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 141.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 140.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 44."
   ]
  },
  {
   "id": "ESP1-B-163",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hepatocarcinoma: vigilancia",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 10 (captura); banco consolidado de Oncología, preg. 177. En el original la cuarta alternativa dice «THEM abdominal»",
   "enunciado": "En los grupos de alto riesgo de presentar tumores hepáticos, la exploración más eficiente para detectarlos es la determinación periódica de alfa fetoproteína, asociada a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Arteriografía hepática selectiva"
    },
    {
     "id": "b",
     "texto": "Gammagrafía hepática con radioisótopos"
    },
    {
     "id": "c",
     "texto": "Ecografía abdominal"
    },
    {
     "id": "d",
     "texto": "TC abdominal"
    },
    {
     "id": "e",
     "texto": "Resonancia magnética"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "grupos de alto riesgo",
   "por_que_correcta": "El tamizaje de los pacientes en riesgo es «Ultrasonido (US) + alfa fetoproteína (AFP)», repetido cada 6 meses si es negativo (diap. 183). La guía lo resume: vigilancia del cirrótico con ecografía periódica.",
   "por_que_no": {
    "a": "La arteriografía es invasiva; no es una prueba de tamizaje.",
    "b": "La gammagrafía no figura en el algoritmo de tamizaje (diap. 183).",
    "d": "La TC se usa para caracterizar un nódulo ya detectado, no para el tamizaje (guía, p. 44).",
    "e": "La RM también caracteriza un nódulo ya detectado (guía, p. 44)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de hígado (diap. 183): tamizaje con ecografía + AFP; nódulo > 10 mm → estudio diagnóstico adicional.",
    "guia": "Guía, p. 44: «Vigilancia del paciente cirrótico con ecografía periódica. Ante un nódulo, tomografía o resonancia con contraste en fases».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 183.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 44."
   ]
  },
  {
   "id": "ESP1-B-164",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hepatocarcinoma: resecabilidad",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 8 (captura); banco consolidado de Oncología, preg. 178",
   "enunciado": "Ante un hepatocarcinoma sobre hígado cirrótico, todos los factores descritos son indicativos de irresecabilidad EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Compromiso extenso de la vena cava inferior"
    },
    {
     "id": "b",
     "texto": "Ascitis"
    },
    {
     "id": "c",
     "texto": "Afectación bilobar"
    },
    {
     "id": "d",
     "texto": "Diámetro de la tumoración mayor de 2 cm"
    },
    {
     "id": "e",
     "texto": "Afectación metastásica peritoneal"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "irresecabilidad EXCEPTO",
   "por_que_correcta": "El tamaño por sí solo no está entre las causas de irresecabilidad de la guía (p. 45). La clase incluso muestra series de resección de hepatocarcinomas de más de 10 cm (diap. 362-364).",
   "por_que_no": {
    "a": "La invasión vascular mayor quita resecabilidad (guía, p. 45: porta principal o suprahepáticas mayores).",
    "b": "La ascitis traduce función hepática insuficiente o hipertensión portal, que la guía cuenta entre las causas de irresecabilidad.",
    "c": "La enfermedad multifocal extensa quita resecabilidad (guía, p. 45).",
    "e": "La enfermedad extrahepática quita resecabilidad (guía, p. 45)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de hígado (diap. 362-364): series de hepatocarcinoma > 10 cm tratados con resección.",
    "guia": "Guía, p. 45: la resecabilidad «se pierde por: invasión de la vena porta principal o de las suprahepáticas mayores, enfermedad multifocal extensa, enfermedad extrahepática, función hepática insuficiente… o volumen remanente inadecuado».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 45.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 362.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 364."
   ]
  },
  {
   "id": "ESP1-B-165",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hepatocarcinoma: tratamiento",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 32 (clave resaltada); banco consolidado de Oncología, preg. 179 (que daba otra clave)",
   "enunciado": "En un hepatocarcinoma en ausencia de metástasis a distancia, sin antecedente de cirrosis hepática o presencia de insuficiencia hepática, con un tamaño tumoral de 2 cm en segmento VII según la clasificación de Couinaud, el abordaje terapéutico puede incluir:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hepatectomía o segmentectomía"
    },
    {
     "id": "b",
     "texto": "Inyección con metanol"
    },
    {
     "id": "c",
     "texto": "Todas las alternativas son viables"
    },
    {
     "id": "d",
     "texto": "Ablación por radiofrecuencia"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "puede incluir",
   "por_que_correcta": "Es la clave del examen. Para el hepatocarcinoma menor de 5 cm la clase lista como opciones con intención de curación la resección, el trasplante, la etanolización y la radiofrecuencia (diap. 250).",
   "por_que_no": {
    "a": "Es viable, pero no la única: el enunciado pregunta qué «puede incluir».",
    "b": "La diapositiva la llama etanolización (inyección de etanol); el examen la escribe «metanol». Es una opción en tumores pequeños (diap. 250 y 251).",
    "d": "Es viable en tumores pequeños (diap. 250; guía, p. 44), pero no la única."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 32). Diapositivas de Cáncer de hígado: diap. 250 («CURACIÓN: resección, trasplante, etanolización, radiofrecuencia — CHC < 5 cm»), diap. 251 (ablación térmica frente a etanolización), diap. 188 (resección preferida; ablación preferida como terapia locorregional).",
    "guia": "Guía, p. 44: resección (ideal en pacientes sin cirrosis), trasplante y ablación (en tumores pequeños) como opciones con intención curativa.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 250.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 251.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 188.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 44."
   ]
  },
  {
   "id": "ESP1-B-166",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Hemangioma hepático",
   "origen": "banco",
   "procedencia": "Parcial UPAO (banco consolidado de Oncología, preg. 180)",
   "enunciado": "¿Cuál de los siguientes enunciados es correcto respecto a los hemangiomas hepáticos?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La opción terapéutica más recomendable es la embolización percutánea"
    },
    {
     "id": "b",
     "texto": "La RM hepática no suele ofrecer mucha ayuda para su caracterización diagnóstica"
    },
    {
     "id": "c",
     "texto": "Pueden asociarse al síndrome de Kasabach-Merritt (trombopenia y coagulopatía de consumo), especialmente los hemangiomas gigantes"
    },
    {
     "id": "d",
     "texto": "Se debe indicar la exéresis quirúrgica desde el momento en que se diagnostique si su diámetro es mayor de 3 cm"
    },
    {
     "id": "e",
     "texto": "El mejor método para su confirmación diagnóstica es la biopsia percutánea"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "hemangiomas hepáticos",
   "por_que_correcta": "El síndrome de Kasabach-Merritt es una complicación reconocida de los hemangiomas: la guía EASL 2016 lo pone entre las situaciones que se derivan a un equipo especializado en tumores hepáticos benignos.",
   "por_que_no": {
    "a": "Para la mayoría basta un manejo conservador (EASL); la embolización se considera para manejar el síndrome de Kasabach-Merritt, no como opción habitual.",
    "b": "La imagen con contraste (ecografía con contraste, TC o RM) es la que caracteriza la lesión (EASL).",
    "d": "No hay relación entre el tamaño y las complicaciones, y la mayoría se maneja de forma conservadora (EASL).",
    "e": "La biopsia solo se plantea cuando la imagen no logra el diagnóstico (EASL)."
   },
   "fuentes": {
    "docente": "El hemangioma no está en las diapositivas de Oncología; se usa la guía europea (EASL).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol. 2016;65:386-98. Disponible en: https://easl.eu/wp-content/uploads/2016/10/EASL-CPG-on-Management-of-benign-liver-tumours.pdf"
   ]
  },
  {
   "id": "ESP1-B-167",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Colangiocarcinoma hiliar",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 6 (captura); banco consolidado de Oncología, preg. 181",
   "enunciado": "Un tumor de la bifurcación de los conductos biliares principales (tumor de Klatskin) se asocia con los siguientes hechos, EXCEPTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Acolia"
    },
    {
     "id": "b",
     "texto": "Ictericia indolora"
    },
    {
     "id": "c",
     "texto": "Prurito"
    },
    {
     "id": "d",
     "texto": "Hepatomegalia"
    },
    {
     "id": "e",
     "texto": "Distensión vesicular"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "tumor de Klatskin",
   "por_que_correcta": "El tumor hiliar obstruye por encima del conducto cístico: la vesícula no recibe bilis y no se distiende. La ecografía de la clase lo muestra: «dilatación de vías biliares intrahepáticas, no distensión de vesícula, no dilatación de colédoco» (diap. 69). La vesícula palpable (Courvoisier) orienta a obstrucción distal, no hiliar (guía, p. 47).",
   "por_que_no": {
    "a": "La obstrucción hiliar da colestasis con acolia (guía, p. 47).",
    "b": "La ictericia obstructiva progresiva e indolora es la presentación típica del perihiliar (guía, p. 47).",
    "c": "El prurito acompaña a la colestasis (guía, p. 47).",
    "d": "Se acepta como asociada en esta pregunta; lo que la anatomía excluye es la distensión de la vesícula."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Colangiocarcinoma (diap. 69): hallazgos ecográficos del tumor hiliar.",
    "guia": "Guía, p. 47: «Signo de Courvoisier… sugiere obstrucción distal por debajo del cístico… no a un tumor hiliar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 69.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 47."
   ]
  },
  {
   "id": "ESP1-B-168",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Signo de Courvoisier",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 13 (clave resaltada); variante con cinco alternativas en el pretest EVA T6, preg. 5; banco consolidado de Oncología, preg. 182. En el original la segunda alternativa dice «Carcinoma vehicular»",
   "enunciado": "La palpación de una vesícula distendida e indolora en un paciente ictérico, con pérdida de peso asociada, hay que sospechar en primer lugar el diagnóstico de:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Coledocolitiasis"
    },
    {
     "id": "b",
     "texto": "Carcinoma vesicular"
    },
    {
     "id": "c",
     "texto": "Colecistitis crónica"
    },
    {
     "id": "d",
     "texto": "Carcinoma de cabeza de páncreas"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "vesícula distendida e indolora",
   "por_que_correcta": "Es el signo de Courvoisier: vesícula palpable e indolora con ictericia, que indica obstrucción distal por debajo del cístico y orienta a tumor pancreático o distal (guía, p. 47). La guía lo cita en la presentación del cáncer de cabeza de páncreas (p. 50).",
   "por_que_no": {
    "a": "La pregunta busca la causa tumoral que sugiere el signo; la pérdida de peso apunta a una neoplasia.",
    "b": "El tumor de la vesícula no es la causa que la guía asocia al signo de Courvoisier.",
    "c": "Una vesícula con inflamación crónica no se presenta distendida e indolora con ictericia."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 13).",
    "guia": "Guía, p. 47: el signo de Courvoisier «orienta a tumor distal o pancreático»; p. 50: cabeza de páncreas con «ictericia obstructiva indolora y progresiva… pérdida de peso; signo de Courvoisier».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 47.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-B-169",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Ampuloma",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 1 (captura); banco consolidado de Oncología, preg. 183 (con cuatro alternativas)",
   "enunciado": "Ante un paciente con características clínico biológicas de ictericia obstructiva de evolución INTERMITENTE y sangre oculta en heces positiva, ¿cuál de entre los siguientes es el diagnóstico más probable?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Litiasis vesicular"
    },
    {
     "id": "b",
     "texto": "Colecistitis crónica"
    },
    {
     "id": "c",
     "texto": "Carcinoma pancreático"
    },
    {
     "id": "d",
     "texto": "Ampuloma"
    },
    {
     "id": "e",
     "texto": "Colangiocarcinoma intrahepático"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "sangre oculta en heces positiva",
   "por_que_correcta": "El ampuloma combina los dos datos: obstruye la vía biliar (la ictericia es su síntoma más común) y sangra hacia el tubo digestivo, con anemia (Cedars-Sinai; MD Anderson). El carácter intermitente de la ictericia es el rasgo clásico que busca la pregunta; las fuentes consultadas no lo describen.",
   "por_que_no": {
    "a": "Los cálculos en la vesícula no obstruyen por sí solos la vía biliar principal ni explican el sangrado.",
    "b": "La colecistitis crónica no explica la ictericia obstructiva ni el sangrado oculto.",
    "c": "El cáncer de cabeza de páncreas da ictericia obstructiva progresiva, no intermitente (guía, p. 50).",
    "e": "El intrahepático no da ictericia precoz porque no obstruye el árbol principal (guía, p. 47)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). El ampuloma no tiene diapositiva propia; se usan fuentes institucionales.",
    "guia": "Guía, p. 47 y 50: presentación del colangiocarcinoma intrahepático y del cáncer de cabeza de páncreas.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Cedars-Sinai. Ampullary Cancer [Internet]. Los Ángeles: Cedars-Sinai. Disponible en: https://www.cedars-sinai.org/health-topics/ampullary-cancer",
    "Wendler R. Ampullary cancer: 9 insights on this rare digestive system cancer [Internet]. Houston: UT MD Anderson Cancer Center (Cancerwise); 2 ago 2022. Disponible en: https://www.mdanderson.org/cancerwise/ampullary-cancer-9-insights-on-this-rare-gastrointestinal-cancer.h00-159542112.html",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 47."
   ]
  },
  {
   "id": "ESP1-B-170",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Adenocarcinoma duodenal",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 3 (captura); banco consolidado de Oncología, preg. 184",
   "enunciado": "Un paciente de 55 años refiere plenitud post-prandial progresiva desde hace 3 semanas. En la actualidad intolerancia a la ingesta con vómitos de carácter alimentario. La exploración endoscópica muestra restos alimenticios en cavidad gástrica y una gran ulceración (unos 3 cm de diámetro) en la porción distal próxima a la segunda rodilla duodenal. El estudio anatomopatológico demostró adenocarcinoma. De las opciones terapéuticas siguientes, ¿cuál es la más correcta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "El tratamiento del carcinoma duodenal es paliativo, por lo que debe realizarse gastroyeyunostomía posterior, retrocólica, inframesocólica"
    },
    {
     "id": "b",
     "texto": "Teniendo en cuenta la frecuente afectación ampular (ampolla de Vater), se realizará derivación biliar y a continuación gastroyeyunostomía"
    },
    {
     "id": "c",
     "texto": "Se practicará instalación de prótesis autoexpandible con radioterapia y quimioterapia sistémica"
    },
    {
     "id": "d",
     "texto": "El tratamiento consiste en duodenopancreatectomía cefálica"
    },
    {
     "id": "e",
     "texto": "Se debe realizar resección segmentaria con anastomosis duodenal término-terminal"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "próxima a la segunda rodilla duodenal",
   "por_que_correcta": "El adenocarcinoma del intestino delgado resecable se trata con resección quirúrgica radical, y la curación depende de resecarlo por completo (NCI). Para el duodeno en contacto con la cabeza del páncreas, la operación que lo reseca en bloque es la duodenopancreatectomía cefálica, que extirpa cabeza del páncreas y duodeno completo (guía, p. 50).",
   "por_que_no": {
    "a": "No es paliativo de entrada: si es resecable, el tratamiento es la resección radical (NCI). La derivación es para la obstrucción irresecable.",
    "b": "La derivación biliar y digestiva es paliación; no trata un tumor resecable.",
    "c": "La prótesis es paliativa; no reseca el tumor.",
    "e": "Una resección segmentaria no permite la resección oncológica de un tumor en esta porción, adyacente a la cabeza del páncreas."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). El adenocarcinoma duodenal no tiene diapositiva propia; se usa el PDQ del NCI.",
    "guia": "Guía, p. 50: duodenopancreatectomía cefálica — «Se resecan: cabeza del páncreas, duodeno completo, primeras asas del yeyuno, vesícula biliar y colédoco distal…».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "National Cancer Institute. Small Intestine Cancer Treatment (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 6 mar 2025. Disponible en: https://www.cancer.gov/types/small-intestine/hp/small-intestine-treatment-pdq",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-B-171",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: clínica",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 4 (captura); banco consolidado de Oncología, preg. 185",
   "enunciado": "Señale lo correcto respecto al carcinoma de páncreas:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cuando presenta dolor es habitualmente inoperable"
    },
    {
     "id": "b",
     "texto": "Responde a la radioterapia en un 30-40 % de los casos"
    },
    {
     "id": "c",
     "texto": "Los marcadores tumorales son muy útiles en el diagnóstico"
    },
    {
     "id": "d",
     "texto": "Afecta preferentemente a mujeres"
    },
    {
     "id": "e",
     "texto": "Es muy quimiosensible"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "Señale lo correcto",
   "por_que_correcta": "El dolor epigástrico que irradia a la espalda se debe a invasión del plexo celíaco y acompaña al diagnóstico tardío (guía, p. 50). Solo alrededor del 20 % de los pacientes llega con un tumor resecable (NCI).",
   "por_que_no": {
    "b": "El NCI describe una «pobre respuesta» a la quimioterapia y a la radioterapia.",
    "c": "El CA 19-9 sirve como referencia y para el seguimiento, no para el diagnóstico (guía, p. 50).",
    "d": "No lo describen así las fuentes del curso; la guía no incluye el sexo femenino entre los factores de riesgo (p. 50).",
    "e": "La respuesta a la quimioterapia es pobre (NCI)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de páncreas (diap. 121): el 50 % se presenta con enfermedad avanzada; dolor en 60-90 %.",
    "guia": "Guía, p. 50: cuerpo y cola con «dolor epigástrico sordo que irradia a la espalda… (por invasión del plexo celíaco), pérdida de peso importante y diagnóstico tardío».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 121.",
    "National Cancer Institute. Pancreatic Cancer Treatment (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 12 feb 2025. Disponible en: https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq"
   ]
  },
  {
   "id": "ESP1-B-172",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: factores de riesgo",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 35 (clave resaltada); banco consolidado de Oncología, preg. 186",
   "enunciado": "En relación con el carcinoma de páncreas, es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El signo de Courvoisier indica metástasis"
    },
    {
     "id": "b",
     "texto": "La diabetes es un factor de riesgo"
    },
    {
     "id": "c",
     "texto": "La sobrevida a 5 años es del 40 %"
    },
    {
     "id": "d",
     "texto": "Hasta un 20 % son familiares"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "es cierto",
   "por_que_correcta": "La diabetes de larga data es factor de riesgo (diap. 95), y la de aparición reciente en un adulto mayor puede ser una manifestación precoz del tumor (diap. 117; guía, p. 50).",
   "por_que_no": {
    "a": "El signo de Courvoisier indica obstrucción biliar distal, no metástasis (guía, p. 47).",
    "c": "La supervivencia global es menor del 6 %; incluso con resección completa de tumores pequeños es del 18-24 % a 5 años (NCI).",
    "d": "La clase estima un componente familiar en aproximadamente el 10 % (diap. 101)."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 35). Diapositivas de Cáncer de páncreas: diap. 95 (diabetes de 2-8 años como factor de riesgo), diap. 117 (diabetes de aparición repentina en > 50 años), diap. 101 (componente familiar ~10 %).",
    "guia": "Guía, p. 50: «diabetes de larga evolución y también diabetes de aparición reciente en un adulto mayor sin obesidad».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 95.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 117.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 101.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "National Cancer Institute. Pancreatic Cancer Treatment (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 12 feb 2025. Disponible en: https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq"
   ]
  },
  {
   "id": "ESP1-B-173",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: estadificación",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 41 (clave marcada); Parcial validado de Especialidades 2021-1, preg. 37 (otra alternativa resaltada); banco consolidado de Oncología, preg. 187",
   "enunciado": "¿Cuál de las siguientes afirmaciones es FALSA respecto a la estadificación del cáncer de páncreas?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La estadificación local puede realizarse con RM y TC"
    },
    {
     "id": "b",
     "texto": "La invasión tumoral arterial es un criterio de irresecabilidad"
    },
    {
     "id": "c",
     "texto": "La infiltración focal de la vena mesentérica superior no es una contraindicación a la cirugía"
    },
    {
     "id": "d",
     "texto": "La biopsia preoperatoria de los tumores pancreáticos es habitualmente necesaria para decidir el tratamiento quirúrgico"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "es FALSA",
   "por_que_correcta": "Es la clave del examen más reciente. La guía lo explica: «en un tumor claramente resecable con imagen típica, la cirugía puede realizarse sin confirmación histológica preoperatoria» (p. 50). La biopsia (por ecoendoscopia) sí es necesaria antes de la neoadyuvancia (diap. 391).",
   "por_que_no": {
    "a": "Es verdadera: la RM complementa a la TC con protocolo pancreático (diap. 138). Ojo: en el Parcial validado 2021-1 aparece resaltada esta alternativa; el examen de 2023 y la guía apoyan la otra.",
    "b": "Es verdadera: el contacto arterial > 180° define la enfermedad localmente avanzada (diap. 83).",
    "c": "Es verdadera: el contacto venoso reconstruible no impide la cirugía (diap. 82; guía, p. 50)."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 41). En el Parcial validado 2021-1 (preg. 37) se resaltó «La estadificación local puede realizarse con RM y TC»; se usa la clave de 2023, que coincide con la guía y con las diapositivas.",
    "guia": "Guía, p. 50: TC con protocolo pancreático como estudio clave; ecoendoscopia con punción «especialmente cuando se va a dar tratamiento neoadyuvante o cuando el tumor no es resecable».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 391.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 138.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 82.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 83."
   ]
  },
  {
   "id": "ESP1-B-174",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: resecabilidad",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 188",
   "enunciado": "Varón de 64 años con ictericia indolora, CA 19-9 elevado y TC que muestra masa de cabeza de páncreas de 3,2 cm con contacto < 180° con la vena mesentérica superior, sin oclusión; arterias libres y sin metástasis. ¿Categoría de resecabilidad y plan inicial?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resecable; Whipple inmediato sin quimioterapia"
    },
    {
     "id": "b",
     "texto": "Metastásico; gemcitabina-nab-paclitaxel"
    },
    {
     "id": "c",
     "texto": "Localmente avanzado; quimiorradioterapia exclusiva"
    },
    {
     "id": "d",
     "texto": "Borderline resecable; neoadyuvancia"
    },
    {
     "id": "e",
     "texto": "No resecable; derivaciones paliativas precoces"
    }
   ],
   "correcta": "a",
   "tipo_clave": "deducida",
   "dato_clave": "contacto < 180° con la vena mesentérica superior",
   "por_que_correcta": "Sin contacto arterial y con contacto venoso < 180° sin irregularidad = resecable (diap. 82). Sin rasgos de alto riesgo, la cirugía va primero (diap. 203), y la quimioterapia se da después, como adyuvancia (guía, p. 50); «sin quimioterapia» se refiere al plan inicial. El CA 19-9 pesa como rasgo de alto riesgo cuando está «altamente elevado» (diap. 203), algo que el enunciado no cuantifica.",
   "por_que_no": {
    "b": "No hay metástasis.",
    "c": "Con las arterias libres no es localmente avanzado (diap. 83).",
    "d": "El borderline exige contacto venoso > 180°, o < 180° con distorsión o trombosis, o contacto arterial limitado (diap. 82); aquí no se cumple.",
    "e": "Es resecable: no corresponde la paliación."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de páncreas: diap. 82 (resecable: sin contacto arterial; contacto venoso < 180° sin irregularidad), diap. 83 (localmente avanzado), diap. 203 (cirugía sin neoadyuvancia en ausencia de rasgos de alto riesgo). Pregunta de banco comercial con redacción imperfecta.",
    "guia": "Guía, p. 50: «En enfermedad resecable, cirugía seguida de quimioterapia adyuvante».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 82.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 83.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 203.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-B-175",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: localmente avanzado",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 18 (clave resaltada); banco consolidado de Oncología, preg. 189",
   "enunciado": "Paciente mujer de 65 años, con nódulo en cabeza de páncreas de 3 × 2 cm que contacta íntimamente con la arteria mesentérica superior rodeándola en más de 180 grados. Karnofsky de 80 %, perfil hepático sin mayores alteraciones. Estudios de extensión sin secundarismo. Marcador tumoral CA 19-9 > 400 UI. El tratamiento inicial sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Duodenopancreatectomía cefálica con linfadenectomía D3 con disección de al menos 12 ganglios linfáticos"
    },
    {
     "id": "b",
     "texto": "Duodenopancreatectomía cefálica con linfadenectomía D2"
    },
    {
     "id": "c",
     "texto": "Duodenopancreatectomía cefálica con linfadenectomía D1"
    },
    {
     "id": "d",
     "texto": "Terapia neoadyuvante seguida de revisión de imágenes y, de acuerdo a eso, laparotomía exploratoria"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "rodeándola en más de 180 grados",
   "por_que_correcta": "El contacto > 180° con la arteria mesentérica superior define enfermedad localmente avanzada (diap. 83): no se opera de entrada. Va tratamiento neoadyuvante y nuevas imágenes para reevaluar la resecabilidad (diap. 129).",
   "por_que_no": {
    "a": "Operar de entrada con la arteria englobada no logra un R0; además, las linfadenectomías extendidas no han demostrado beneficio (guía, p. 50).",
    "b": "La cirugía de entrada no corresponde con contacto arterial > 180°.",
    "c": "La cirugía de entrada no corresponde con contacto arterial > 180°."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 18). Diapositivas de Cáncer de páncreas: diap. 83 (localmente avanzado: contacto > 180° con AMS o tronco celíaco), diap. 129 (imágenes después de la neoadyuvancia).",
    "guia": "Guía, p. 50: el englobamiento arterial marca irresecabilidad; en la enfermedad límite, neoadyuvancia y reevaluación.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 83.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 129.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-B-176",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas: preoperatorio",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T6, preg. 9 (captura); banco consolidado de Oncología, preg. 190",
   "enunciado": "¿Cuál de las siguientes medidas preoperatorias es la más importante a realizar en un paciente severamente ictérico, por cáncer de páncreas posiblemente resecable, en vistas a una mejor evolución postoperatoria?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Profilaxis antitrombótica preoperatoria"
    },
    {
     "id": "b",
     "texto": "Descompresión biliar preoperatoria"
    },
    {
     "id": "c",
     "texto": "Tratamiento antibiótico preoperatorio"
    },
    {
     "id": "d",
     "texto": "Nutrición adecuada preoperatoria"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "severamente ictérico",
   "por_que_correcta": "La pregunta busca la descompresión biliar. Ojo con el matiz: el drenaje de rutina no se recomienda en la ictericia moderada, porque en el ensayo de van der Gaag (bilirrubina de 40 a 250 µmol/L) aumentó las complicaciones; el enunciado habla de ictericia severa. Y si se va a dar neoadyuvancia, la descompresión es necesaria antes de iniciarla (diap. 352).",
   "por_que_no": {
    "a": "Es una medida general del perioperatorio; no corrige la colestasis, que es el problema específico del enunciado.",
    "c": "Es una medida general; no corrige la colestasis.",
    "d": "Es importante, pero no corrige la colestasis."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de páncreas: diap. 352 (descompresión biliar necesaria antes de la neoadyuvancia), diap. 358 (stents metálicos preferidos, no colocarlos antes de probar malignidad).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 352.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 358.",
    "van der Gaag NA, Rauws EAJ, van Eijck CHJ, et al. Preoperative biliary drainage for cancer of the head of the pancreas. N Engl J Med. 2010;362(2):129-37. doi:10.1056/NEJMoa0903230. Disponible en: https://pure.eur.nl/en/publications/preoperative-biliary-drainage-for-cancer-of-the-head-of-the-pancr/"
   ]
  },
  {
   "id": "ESP1-B-177",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "IPMN",
   "origen": "banco",
   "procedencia": "Parcial validado de Especialidades 2021-1, preg. 16 (clave resaltada); Final de Especialidades 2020-2, Oncología, preg. 10 (misma clave, con «pancreatitis aguda» en lugar de la alternativa sobre la frecuencia); banco consolidado de Oncología, preg. 191",
   "enunciado": "En relación con los tumores mucinosos papilares intraductales de páncreas, señalar el enunciado INCORRECTO:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Se distinguen tres subtipos: de conducto principal, de conducto secundario y mixto"
    },
    {
     "id": "b",
     "texto": "Son tumores potencialmente malignos"
    },
    {
     "id": "c",
     "texto": "Su frecuencia se ha incrementado notablemente en la última década"
    },
    {
     "id": "d",
     "texto": "Deben ser extirpados tan pronto como se diagnostiquen, excepto la variedad de conducto principal"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "señalar el enunciado INCORRECTO",
   "por_que_correcta": "Invierte la conducta: el de conducto principal es el de mayor riesgo (malignidad de 62 %) y el que se reseca; el de ramas puede seguirse si no tiene rasgos sospechosos (diap. 106 y 107).",
   "por_que_no": {
    "a": "Es correcta: pueden afectar el conducto principal, las ramas o ambos (diap. 106).",
    "b": "Es correcta: la clase los incluye entre los tumores premalignos del páncreas (diap. 106).",
    "c": "Se acepta como correcta; las diapositivas señalan que casi siempre se descubren de forma incidental (diap. 106)."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial validado 2021-1 (preg. 16) y marcada en el Final 2020-2 (Oncología, preg. 10). Diapositivas de Cáncer de páncreas: diap. 106 (riesgo de malignidad 62 % en el conducto principal), diap. 107 (resección del conducto principal; seguimiento de ramas sin rasgos sospechosos).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 106.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 107."
   ]
  },
  {
   "id": "ESP1-B-178",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de vesícula: factores de riesgo",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 45 (clave marcada); Parcial validado de Especialidades 2021-1, preg. 23 (misma clave, con «vesícula en porcelana»); banco consolidado de Oncología, preg. 192",
   "enunciado": "¿Cuál de los siguientes NO se considera factor de riesgo de carcinoma de la vesícula biliar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Litiasis biliar"
    },
    {
     "id": "b",
     "texto": "Alcoholismo crónico"
    },
    {
     "id": "c",
     "texto": "Pólipo vesicular de 15 mm"
    },
    {
     "id": "d",
     "texto": "Infección tifoidea crónica"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "NO se considera factor de riesgo",
   "por_que_correcta": "Es la clave de los dos exámenes. El alcohol no figura entre los factores de riesgo del cáncer de vesícula de la American Cancer Society.",
   "por_que_no": {
    "a": "Los cálculos son el factor de riesgo más común (ACS).",
    "c": "Los pólipos de más de 1 cm tienen más probabilidad de ser cáncer (ACS).",
    "d": "La infección crónica por Salmonella, la bacteria de la fiebre tifoidea, aumenta el riesgo (ACS)."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 45) y resaltada en el Parcial validado 2021-1 (preg. 23). El cáncer de vesícula no tiene diapositiva propia de factores de riesgo; se usan fuentes externas.",
    "guia": "Guía, p. 46: el cáncer de vesícula biliar se lee superficialmente, «salvo que tu docente lo incluya explícitamente».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "American Cancer Society. Risk Factors for Gallbladder Cancer [Internet]. Atlanta: ACS; revisado 16 may 2025. Disponible en: https://www.cancer.org/cancer/types/gallbladder-cancer/causes-risks-prevention/risk-factors.html",
    "National Cancer Institute. Gallbladder Cancer Treatment (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 12 feb 2025. Disponible en: https://www.cancer.gov/types/gallbladder/hp/gallbladder-treatment-pdq"
   ]
  },
  {
   "id": "ESP1-B-179",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Pólipo vesicular",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 193",
   "enunciado": "Mujer de 49 años con pólipo vesicular de 12 mm sésil, asintomática, sin litiasis, con TC sin signos de invasión. ¿Conducta recomendada?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Observación con ecografía anual"
    },
    {
     "id": "b",
     "texto": "Ácido ursodesoxicólico"
    },
    {
     "id": "c",
     "texto": "Biopsia percutánea del pólipo"
    },
    {
     "id": "d",
     "texto": "PET-TC y, si es negativo, seguimiento"
    },
    {
     "id": "e",
     "texto": "Colecistectomía laparoscópica electiva"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "pólipo vesicular de 12 mm",
   "por_que_correcta": "Los pólipos de más de 1 cm tienen más probabilidad de ser cáncer, y se suele recomendar extirpar la vesícula cuando alcanzan ese tamaño (ACS).",
   "por_que_no": {
    "a": "Con más de 1 cm la recomendación es extirpar la vesícula, no solo vigilar (ACS).",
    "b": "No es el tratamiento de un pólipo de más de 1 cm; la recomendación es la colecistectomía (ACS).",
    "c": "La conducta recomendada es la colecistectomía, no la biopsia del pólipo (ACS).",
    "d": "La PET no forma parte de la conducta recomendada para el pólipo."
   },
   "fuentes": {
    "docente": "El pólipo vesicular no tiene diapositiva propia; se usa la fuente externa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "American Cancer Society. Risk Factors for Gallbladder Cancer [Internet]. Atlanta: ACS; revisado 16 may 2025. Disponible en: https://www.cancer.org/cancer/types/gallbladder-cancer/causes-risks-prevention/risk-factors.html"
   ]
  },
  {
   "id": "ESP1-B-180",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de vesícula incidental",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-1, preg. 29 (clave resaltada); banco consolidado de Oncología, preg. 194 (con las alternativas reordenadas)",
   "enunciado": "Un paciente de 32 años es operado de colecistectomía laparoscópica por litiasis vesicular. Dentro de los hallazgos operatorios no se encuentran implantes, líquido ascítico ni tumoraciones visibles. El resultado de la pieza operatoria arroja inesperadamente adenocarcinoma vesicular pT1a con márgenes quirúrgicos negativos. Se revisan las láminas y se confirma el diagnóstico. Si los estudios de extensión son negativos, el tratamiento complementario sería:",
   "alternativas": [
    {
     "id": "a",
     "texto": "El tratamiento de colecistectomía es suficiente"
    },
    {
     "id": "b",
     "texto": "Quimiorradiación concomitante"
    },
    {
     "id": "c",
     "texto": "Bisegmentectomía IVa y V hepática"
    },
    {
     "id": "d",
     "texto": "Bisegmentectomía IVa y V hepática + linfadenectomía hiliar y/o portal"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "pT1a con márgenes quirúrgicos negativos",
   "por_que_correcta": "Es la clave del examen. El cáncer limitado a la mucosa (T1) se cura en la mayoría de los casos, y el hallado de forma incidental es curable en más del 80 % (NCI). La resección ampliada se discute desde el T1b y se plantea en el T2 o más.",
   "por_que_no": {
    "b": "No hay indicación de tratamiento adyuvante en un T1a con márgenes negativos.",
    "c": "La resección hepática se plantea en el T2 o más; en el T1b es controvertida (NCI).",
    "d": "La hepatectomía parcial con linfadenectomía portal es una opción para el T2 o más (NCI), no para el T1a."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-1 (preg. 29). El tema no tiene diapositiva propia; se usa el PDQ del NCI.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "National Cancer Institute. Gallbladder Cancer Treatment (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 12 feb 2025. Disponible en: https://www.cancer.gov/types/gallbladder/hp/gallbladder-treatment-pdq"
   ]
  },
  {
   "id": "ESP1-B-181",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Factores de riesgo",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 2 (captura); banco consolidado de Oncología, preg. 197",
   "enunciado": "Se considera un factor de riesgo para cáncer de cuello uterino:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Poliandria"
    },
    {
     "id": "b",
     "texto": "Tabaquismo"
    },
    {
     "id": "c",
     "texto": "Todos son factores de riesgo"
    },
    {
     "id": "d",
     "texto": "Anticonceptivos orales"
    },
    {
     "id": "e",
     "texto": "Coitarquia precoz"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "factor de riesgo",
   "por_que_correcta": "Los cuatro figuran en la clase: inicio precoz de relaciones sexuales y número de parejas sexuales, tabaquismo y anticonceptivos orales (diap. 44 y 46). Todos facilitan la infección por VPH o su persistencia, que es la causa necesaria (guía, p. 53).",
   "por_que_no": {
    "a": "Es factor de riesgo («mayor número de parejas sexuales», diap. 46), pero no es el único.",
    "b": "Es factor de riesgo (diap. 44: disminuye las células de Langerhans), pero no es el único.",
    "d": "Es factor de riesgo (diap. 44: más de 8 años, riesgo > 2), pero no es el único.",
    "e": "Es factor de riesgo (diap. 44: inicio de relaciones sexuales antes de los 18 años), pero no es el único."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino: diap. 44 (VPH oncogénicos, IVS < 18 años, tabaquismo, anticonceptivos orales) y diap. 46 (factores de riesgo del INEN).",
    "guia": "Guía, p. 53: «Infección persistente por virus del papiloma humano de alto riesgo (causa necesaria); inicio temprano de relaciones sexuales y múltiples parejas; tabaquismo… uso prolongado de anticonceptivos orales».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 44.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 46.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-182",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Metaplasia escamosa",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 6 (captura); banco consolidado de Oncología, preg. 198",
   "enunciado": "¿Cuál es la respuesta que con mayor fidelidad define la metaplasia escamosa del cérvix uterino?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Un proceso infeccioso ligado a Chlamydia trachomatis"
    },
    {
     "id": "b",
     "texto": "Un proceso reparativo fisiológico"
    },
    {
     "id": "c",
     "texto": "El primer paso en la oncogénesis del cáncer de cérvix"
    },
    {
     "id": "d",
     "texto": "Neoplasia intraepitelial de bajo grado"
    },
    {
     "id": "e",
     "texto": "Un fenómeno metaplásico asociado al herpes virus"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "metaplasia escamosa",
   "por_que_correcta": "La clase la define así: «El REEMPLAZO FISIOLÓGICO del epitelio cilíndrico evertido POR un epitelio escamoso neoformado se denomina METAPLASIA ESCAMOSA» (diap. 21).",
   "por_que_no": {
    "a": "No es un proceso infeccioso: es fisiológico, ligado a la eversión del epitelio y la acidez vaginal (diap. 21).",
    "c": "La metaplasia inmadura es una zona susceptible a mutágenos (diap. 44), pero el paso que inicia la oncogénesis es la infección persistente por VPH (guía, p. 52).",
    "d": "La displasia es otra entidad, distinta de la metaplasia (diap. 25).",
    "e": "No es un fenómeno viral: es fisiológico (diap. 21)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino: diap. 21 (definición), diap. 25 (epitelio cilíndrico → metaplasia → displasia), diap. 44.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 21.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 25.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 44.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 52."
   ]
  },
  {
   "id": "ESP1-B-183",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Vacuna contra el VPH",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 3 (captura); banco consolidado de Oncología, preg. 199 (que había fusionado dos alternativas). La primera alternativa aparece incompleta en el original",
   "enunciado": "Las vacunas del papilomavirus frente al carcinoma cervical han demostrado su eficacia mediante:",
   "alternativas": [
    {
     "id": "a",
     "texto": "…asociadas a los virus incluidos en la vacuna (alternativa incompleta en el original)"
    },
    {
     "id": "b",
     "texto": "Estudios clínicos no controlados"
    },
    {
     "id": "c",
     "texto": "La demostración de que se producen anticuerpos tras la vacunación"
    },
    {
     "id": "d",
     "texto": "La demostración de protección frente a la aparición de lesiones preneoplásicas (CIN 2/3)"
    },
    {
     "id": "e",
     "texto": "La demostración de la remisión del cáncer cervical en las mujeres vacunadas"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "han demostrado su eficacia",
   "por_que_correcta": "La eficacia se mide por la protección frente a las lesiones precancerosas: la clase cita que la nonavalente «protege frente al 97 % de las lesiones precancerosas de cuello de útero, vagina y vulva» (diap. 263).",
   "por_que_no": {
    "a": "La alternativa está incompleta en el original y no plantea un método de demostración.",
    "b": "La eficacia no se demuestra con estudios no controlados.",
    "c": "Los anticuerpos miden inmunogenicidad, no eficacia clínica.",
    "e": "La vacuna es preventiva: «no ayudará a mujeres con infecciones / lesiones» (diap. 264)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino: diap. 263 (protección frente a lesiones precancerosas), diap. 264 (conclusiones sobre la vacuna).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 263.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 264."
   ]
  },
  {
   "id": "ESP1-B-184",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tamizaje de cérvix",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 47 (clave marcada); banqueo UPAO (mama y cérvix), con cuatro alternativas; banco consolidado de Oncología, preg. 200",
   "enunciado": "Siguiendo las indicaciones del cribado del cáncer de cérvix, ¿a qué mujer realizaría una citología entre las siguientes candidatas?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mujer de 26 años sin citologías previas"
    },
    {
     "id": "b",
     "texto": "Mujer de 40 años con citología y virus del papiloma humano negativos hace 3 años"
    },
    {
     "id": "c",
     "texto": "Mujer de 67 años con incontinencia urinaria de esfuerzo"
    },
    {
     "id": "d",
     "texto": "Mujer de 22 años vacunada para el virus del papiloma humano e inicio de relaciones sexuales hace 1 año"
    },
    {
     "id": "e",
     "texto": "Mujer que recién ha empezado su vida sexual hace 1 mes"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "realizaría una citología",
   "por_que_correcta": "Es la clave del examen. Una mujer de 26 años nunca tamizada está dentro del grupo de 21 a 29 años, que se tamiza con citología cada 3 años (diap. 71).",
   "por_que_no": {
    "b": "Con co-test negativo (citología y VPH), el siguiente toca a los 5 años (diap. 71).",
    "c": "Después de los 65 años con tamizaje previo adecuado no se tamiza (diap. 71); la incontinencia no es indicación.",
    "d": "Según la diapositiva 72, el tamizaje se inicia en los primeros 3 años tras el inicio de las relaciones sexuales. Ojo: con el esquema por edad de la diapositiva 71 (desde los 21 años) también calificaría; la clave del examen es otra. La vacuna no exime del tamizaje (diap. 264).",
    "e": "Acaba de iniciar su vida sexual: según la diapositiva 72, el tamizaje comienza dentro de los 3 años siguientes."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 47). Diapositivas de Cáncer de cuello uterino: diap. 71 (tamizaje por edad, ASCCP 2019), diap. 72 (inicio en los 3 años posteriores al inicio de relaciones sexuales).",
    "guia": "Guía, p. 54: estudiar el «esquema de vacunación y de tamizaje vigente en tu país».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 71.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 264.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 54."
   ]
  },
  {
   "id": "ESP1-B-185",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Citología AGC",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 1 (captura); banco consolidado de Oncología, preg. 201",
   "enunciado": "Si una mujer de 35 años presenta un resultado citológico cervical de células glandulares atípicas (CGA), el plan siguiente sería realizarle:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Traquelectomía simple"
    },
    {
     "id": "b",
     "texto": "Histerectomía extrafascial"
    },
    {
     "id": "c",
     "texto": "Muestreo endocervical y endometrial"
    },
    {
     "id": "d",
     "texto": "Cono LEEP"
    },
    {
     "id": "e",
     "texto": "Cono frío"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "células glandulares atípicas",
   "por_que_correcta": "El plan inicial ante AGC es colposcopia con muestreo endocervical y muestreo endometrial si tiene 35 años o más (diap. 194). El origen de esas células puede ser el endocérvix o el endometrio.",
   "por_que_no": {
    "a": "Es un tratamiento; la AGC requiere primero estudio diagnóstico.",
    "b": "Es un tratamiento; primero hay que estudiar el origen de las células.",
    "d": "La conización no es el primer paso ante AGC (diap. 194).",
    "e": "La conización no es el primer paso ante AGC (diap. 194)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino (diap. 194): «Colposcopia (con muestreo endocervical…) y muestreo endometrial (si > 35 años…)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 194."
   ]
  },
  {
   "id": "ESP1-B-186",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "ASC-H con colposcopia insatisfactoria",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 202",
   "enunciado": "Mujer de 32 años con citología ASC-H; colposcopia insatisfactoria y prueba de VPH 16 positiva. ¿Conducta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Repetir citología en 1 año"
    },
    {
     "id": "b",
     "texto": "Conización diagnóstica/terapéutica"
    },
    {
     "id": "c",
     "texto": "Crioterapia"
    },
    {
     "id": "d",
     "texto": "Radioterapia"
    },
    {
     "id": "e",
     "texto": "Vacuna VPH"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "colposcopia insatisfactoria",
   "por_que_correcta": "La colposcopia no satisfactoria es indicación de cono diagnóstico (diap. 251), y el ASC-H es un resultado de alto grado (diap. 191). El cono es a la vez diagnóstico y terapéutico (guía, p. 53).",
   "por_que_no": {
    "a": "El ASC-H es un resultado de alto grado (diap. 191): no se difiere el estudio.",
    "c": "Una terapia ablativa no deja pieza para diagnóstico, y con colposcopia insatisfactoria la indicación es el cono (diap. 251).",
    "d": "La radioterapia no trata lesiones preinvasoras.",
    "e": "La vacuna no ayuda a mujeres con infecciones o lesiones ya presentes (diap. 264)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de cuello uterino: diap. 251 (cono frío diagnóstico: «Colposcopía no satisfactoria… ZT3»), diap. 191 (ASC-H entre los resultados de alto grado).",
    "guia": "Guía, p. 53: el cono «es a la vez diagnóstico y terapéutico en las lesiones de alto grado y permite descartar invasión».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 251.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 191.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 264.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-187",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Lesión visible",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 49 (clave resaltada); banco consolidado de Oncología, preg. 203",
   "enunciado": "Mujer de 25 años con flujo vaginal grisáceo y mal olor. Especuloscopia: cérvix con lesión sangrante en radio 12, de 2 cm de tamaño, bordes irregulares. ¿Cuál es la conducta a seguir?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ecografía transvaginal"
    },
    {
     "id": "b",
     "texto": "Papanicolaou"
    },
    {
     "id": "c",
     "texto": "Histeroscopia"
    },
    {
     "id": "d",
     "texto": "Colposcopia"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "lesión sangrante",
   "por_que_correcta": "Es la clave del examen. Hay una lesión visible: no corresponde tamizaje sino diagnóstico. La colposcopia permite ver la lesión y biopsiarla; la guía insiste en que «ante lesión visible, se biopsia directamente».",
   "por_que_no": {
    "a": "La ecografía no diagnostica una lesión cervical visible.",
    "b": "La citología es para el tamizaje; ante una lesión visible se biopsia (guía, p. 53).",
    "c": "La histeroscopia explora la cavidad uterina, no el cuello."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 49). Diapositivas de Cáncer de cuello uterino (diap. 68): diagnóstico con citología, colposcopia, biopsia y cono.",
    "guia": "Guía, p. 53: «Secuencia clásica: tamizaje… → colposcopia → biopsia dirigida… Ante lesión visible, se biopsia directamente»; p. 54, autoevaluación 3.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 68."
   ]
  },
  {
   "id": "ESP1-B-188",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 9 (captura); banco consolidado de Oncología, preg. 204",
   "enunciado": "Los factores pronósticos condicionan la evolución en el cáncer de cuello uterino. ¿Cuál de estos NO sería importante para el estadiaje clínico del tumor?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tamaño tumoral"
    },
    {
     "id": "b",
     "texto": "Compromiso de parametrios"
    },
    {
     "id": "c",
     "texto": "Afectación ganglionar"
    },
    {
     "id": "d",
     "texto": "Profundidad de invasión tumoral"
    },
    {
     "id": "e",
     "texto": "Vaginitis de repetición"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "NO sería importante",
   "por_que_correcta": "La FIGO se construye con profundidad de invasión, tamaño, extensión a vagina y parametrios, ganglios y metástasis (diap. 271). La vaginitis no interviene.",
   "por_que_no": {
    "a": "El tamaño separa IB1, IB2 e IB3 (diap. 271).",
    "b": "El parametrio define el IIB y, hasta la pared pélvica, el IIIB (diap. 271).",
    "c": "Los ganglios definen el IIIC1 y el IIIC2 (diap. 271).",
    "d": "La profundidad de invasión separa IA1 e IA2 (diap. 271)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino (diap. 271): clasificación FIGO.",
    "guia": "Guía, p. 53: lógica de la FIGO por estadios.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-189",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 27 (clave resaltada); banco consolidado de Oncología, preg. 205",
   "enunciado": "Paciente mujer de 48 años de edad, que presenta tumoración en labio anterior de cuello uterino, exofítica, sangrante, de 5 cm. Parametrios libres. Estudios de imágenes libres de secundarismo. El resultado histopatológico revela carcinoma epidermoide de cuello uterino. Estamos ante un estadio:",
   "alternativas": [
    {
     "id": "a",
     "texto": "IB3"
    },
    {
     "id": "b",
     "texto": "IB1"
    },
    {
     "id": "c",
     "texto": "IB2"
    },
    {
     "id": "d",
     "texto": "IIA"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "de 5 cm. Parametrios libres",
   "por_que_correcta": "Confinado al cuello = estadio I. Con más de 4 cm = IB3 (diap. 271).",
   "por_que_no": {
    "b": "IB1 es menor de 2 cm.",
    "c": "IB2 es de 2 a 4 cm.",
    "d": "IIA requiere compromiso de los dos tercios superiores de la vagina, que el enunciado no describe."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 27). Diapositivas de Cáncer de cuello uterino (diap. 271): IB1 ≤ 2 cm, IB2 > 2 y < 4 cm, IB3 > 4 cm.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271."
   ]
  },
  {
   "id": "ESP1-B-190",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 8 (captura); banco consolidado de Oncología, preg. 206 (con otras alternativas)",
   "enunciado": "Paciente con tumor de cuello uterino, confirmado histológicamente como carcinoma epidermoide, de 5 × 5 cm, exofítico, proliferativo, dependiente de labio anterior y posterior cervical, consistencia semidura, superficie irregular, que se proyecta al canal vaginal. Fondos de saco libres. Paredes vaginales sin lesiones macroscópicas. A la especuloscopia: cérvix reemplazado en su totalidad por tumor proliferativo, irregular, sangrante, que respeta fondos de saco vaginales. Tacto rectal: no hay compromiso del tabique rectovaginal. Parametrios no infiltrados. Resto del examen: no secundarismo. ¿Qué estadio le corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IB2"
    },
    {
     "id": "b",
     "texto": "IA"
    },
    {
     "id": "c",
     "texto": "IB3"
    },
    {
     "id": "d",
     "texto": "IIA"
    },
    {
     "id": "e",
     "texto": "IB1"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "Paredes vaginales sin lesiones macroscópicas",
   "por_que_correcta": "Que el tumor se proyecte al canal vaginal no es invadir la vagina: los fondos de saco y las paredes están libres y los parametrios también. Sigue confinado al cuello (estadio I), y con 5 cm es IB3 (diap. 271).",
   "por_que_no": {
    "a": "IB2 es de 2 a 4 cm; aquí mide 5 cm.",
    "b": "IA es enteramente microscópico.",
    "d": "IIA exige compromiso de la vagina, que el enunciado descarta.",
    "e": "IB1 es menor de 2 cm."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino (diap. 271).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 276."
   ]
  },
  {
   "id": "ESP1-B-191",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 10 (captura, seis alternativas); banco consolidado de Oncología, preg. 207",
   "enunciado": "Si el carcinoma epidermoide de cérvix afecta el tercio superior de la vagina, sin extensión a la pared pélvica, ¿ante qué estadio estamos?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IIB"
    },
    {
     "id": "b",
     "texto": "IVA"
    },
    {
     "id": "c",
     "texto": "IIIA"
    },
    {
     "id": "d",
     "texto": "IIIB"
    },
    {
     "id": "e",
     "texto": "IIA"
    },
    {
     "id": "f",
     "texto": "I"
    }
   ],
   "correcta": "e",
   "tipo_clave": "deducida",
   "dato_clave": "tercio superior de la vagina",
   "por_que_correcta": "El compromiso del tercio superior o medio de la vagina, sin parametrio, es IIA (diap. 276).",
   "por_que_no": {
    "a": "IIB es compromiso de parametrios (diap. 276).",
    "b": "IVA es invasión de la mucosa de la vejiga o el recto (diap. 271).",
    "c": "IIIA es el tercio inferior de la vagina (diap. 277).",
    "d": "IIIB es extensión a la pared pélvica o hidronefrosis (diap. 277).",
    "f": "El estadio I está confinado al útero; aquí ya hay compromiso vaginal."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino: diap. 276 (estadio II), diap. 277 (estadio III).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 276.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 277.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271."
   ]
  },
  {
   "id": "ESP1-B-192",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 5 (captura); banco consolidado de Oncología, preg. 208",
   "enunciado": "Paciente mujer de 58 años que presenta dispareunia y sangrado vaginal. Acude al ginecólogo, quien a la especuloscopia le encuentra lesión en labio anterior de ectocérvix de 2 cm. Al tacto rectal, parametrio derecho comprometido sin llegar a hueso pélvico, con función renal normal. La biopsia muestra carcinoma epidermoide infiltrante. Hasta ese momento, ¿qué estadio le corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IIA2"
    },
    {
     "id": "b",
     "texto": "IB2"
    },
    {
     "id": "c",
     "texto": "IIIB"
    },
    {
     "id": "d",
     "texto": "IIB"
    },
    {
     "id": "e",
     "texto": "IB1"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "sin llegar a hueso pélvico",
   "por_que_correcta": "Compromiso de parametrios sin llegar al hueso pélvico = IIB (diap. 271). La función renal normal descarta el IIIB por hidronefrosis.",
   "por_que_no": {
    "a": "IIA2 es compromiso vaginal sin parametrio, con tumor mayor de 4 cm.",
    "b": "El parametrio comprometido saca al tumor del estadio I.",
    "c": "IIIB exige llegar a la pared pélvica o hidronefrosis (diap. 277).",
    "e": "El parametrio comprometido saca al tumor del estadio I."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno). Diapositivas de Cáncer de cuello uterino: diap. 271 («Compromiso de los parametrios sin llegar a hueso pélvico»), diap. 277.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 277."
   ]
  },
  {
   "id": "ESP1-B-193",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 209",
   "enunciado": "Paciente mujer de 33 años con tumor de 2 cm del cérvix, sangrante, con vagina y parametrios libres y biopsia de carcinoma epidermoide; el estudio tomográfico evidencia adenopatías metastásicas retroperitoneales (paraaórticas). Según la estadificación FIGO corresponde a:",
   "alternativas": [
    {
     "id": "a",
     "texto": "IB2"
    },
    {
     "id": "b",
     "texto": "IB3"
    },
    {
     "id": "c",
     "texto": "IIB"
    },
    {
     "id": "d",
     "texto": "IIIC2"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "adenopatías metastásicas retroperitoneales (paraaórticas)",
   "por_que_correcta": "Las metástasis en ganglios paraaórticos son IIIC2 (diap. 271), con independencia del tamaño del tumor; si se definen por imagen se anota «r» (IIIC2r) (diap. 279).",
   "por_que_no": {
    "a": "Por el tamaño local sería IB, pero los ganglios paraaórticos lo llevan a IIIC2.",
    "b": "IB3 es más de 4 cm y sin ganglios.",
    "c": "Los parametrios están libres."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de cuello uterino: diap. 271 (IIIC1 ganglios pélvicos, IIIC2 paraaórticos), diap. 279 (notación r y p).",
    "guia": "Guía, p. 53: la FIGO 2018 «creó un estadio específico (IIIC) para la afectación ganglionar pélvica o paraaórtica».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 279.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-194",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación FIGO",
   "origen": "banco",
   "procedencia": "Final de Especialidades 2021-1, preg. 22 (clave resaltada); banco consolidado de Oncología, preg. 210",
   "enunciado": "Una paciente con diagnóstico de carcinoma epidermoide de cérvix presenta al examen físico y radiológico los siguientes hallazgos: tamaño tumoral de 3.5 cm, compromiso de parametrio derecho hasta hueso pélvico y linfonodo iliaco externo derecho distal de 0.6 × 0.4 cm, que restringe intensamente en difusión y capta el contraste. Según la FIGO, estamos ante un estadio:",
   "alternativas": [
    {
     "id": "a",
     "texto": "IIA"
    },
    {
     "id": "b",
     "texto": "IIIC1r"
    },
    {
     "id": "c",
     "texto": "IIIB"
    },
    {
     "id": "d",
     "texto": "IIB"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "restringe intensamente en difusión y capta el contraste",
   "por_que_correcta": "Es la clave del examen. El ganglio ilíaco externo con características malignas por imagen es una metástasis ganglionar pélvica: IIIC1, con sufijo r porque se definió por imagen (diap. 279).",
   "por_que_no": {
    "a": "Hay parametrio comprometido y un ganglio pélvico: no es IIA.",
    "c": "El parametrio hasta el hueso sería IIIB, pero con el ganglio pélvico positivo el examen asigna IIIC1r (diap. 279).",
    "d": "El parametrio llega al hueso y hay un ganglio pélvico positivo: no es IIB."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Final 2021-1 (preg. 22). Diapositivas de Cáncer de cuello uterino: diap. 279 («si la imagen indica metástasis pélvica en los ganglios linfáticos, la asignación por etapas sería Estadio IIIC1r»), diap. 271.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 279.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-195",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tratamiento IB2",
   "origen": "banco",
   "procedencia": "Banqueo Medclub UPAO 2025-20; banco consolidado de Oncología, preg. 211",
   "enunciado": "Mujer de 52 años con cáncer de cérvix escamoso IB2 (tumor de 3,5 cm), imagen sin metástasis, ECOG 1. ¿Manejo estándar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Conización"
    },
    {
     "id": "b",
     "texto": "Histerectomía simple"
    },
    {
     "id": "c",
     "texto": "Quimiorradioterapia"
    },
    {
     "id": "d",
     "texto": "Quimioterapia neoadyuvante y conización"
    },
    {
     "id": "e",
     "texto": "Solo radioterapia pélvica"
    }
   ],
   "correcta": "c",
   "tipo_clave": "deducida",
   "dato_clave": "IB2 (tumor de 3,5 cm)",
   "por_que_correcta": "Para IB2 sin preservación de la fertilidad, la clase da dos opciones: histerectomía radical con linfadenectomía pélvica (categoría 1) o radioterapia pélvica con braquiterapia y quimioterapia con platino concurrente (diap. 296). Entre las alternativas, solo está la segunda.",
   "por_que_no": {
    "a": "El cono solo basta en enfermedad microinvasora (diap. 294).",
    "b": "La histerectomía simple no reseca los parametrios; el IB2 requiere histerectomía radical (diap. 296).",
    "d": "No es un esquema de la clase para el IB2.",
    "e": "La radioterapia del esquema va con quimioterapia concurrente y braquiterapia (diap. 296)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de cuello uterino (diap. 296): «IB2 – Sin preservación de la fertilidad: histerectomía radical + linfadenectomía pélvica (categoría 1)… o RTHE pélvica + braquiterapia + quimioterapia con platino concurrente».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 296.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 294."
   ]
  },
  {
   "id": "ESP1-B-196",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tratamiento localmente avanzado",
   "origen": "banco",
   "procedencia": "Banqueo UPAO (mama y cérvix); banco consolidado de Oncología, preg. 212",
   "enunciado": "Paciente mujer de 50 años que acude por un tumor de 2 cm del cérvix, sangrante, con compromiso del parametrio derecho y biopsia de carcinoma epidermoide. En el tratamiento es cierto que:",
   "alternativas": [
    {
     "id": "a",
     "texto": "La quimioterapia neoadyuvante es estándar para todas las pacientes"
    },
    {
     "id": "b",
     "texto": "El tratamiento estándar es quimioterapia + radioterapia concurrente"
    },
    {
     "id": "c",
     "texto": "El tratamiento estándar es una histerectomía radical tipo III"
    },
    {
     "id": "d",
     "texto": "El tratamiento estándar es una histerectomía radical tipo III + radioterapia"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "compromiso del parametrio derecho",
   "por_que_correcta": "El parametrio comprometido es IIB, enfermedad localmente avanzada: «QT conteniendo platino + radioterapia de haz externo + braquiterapia» (diap. 297). La guía lo resume: a partir del localmente avanzado, quimiorradioterapia, no cirugía.",
   "por_que_no": {
    "a": "No es el estándar de la clase para el IIB (diap. 297).",
    "c": "Con parametrio comprometido se deja de operar (guía, p. 53).",
    "d": "Sumar cirugía radical y radioterapia multiplica las complicaciones sin mejorar la supervivencia (guía, p. 53)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de cuello uterino (diap. 297): «IIB – IVA: QT conteniendo platino + Radioterapia de haz externo + braquiterapia».",
    "guia": "Guía, p. 53: «los estadios iniciales se operan; a partir de la enfermedad localmente avanzada, el tratamiento es quimiorradioterapia, no cirugía».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 297.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-197",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Preservación de la fertilidad",
   "origen": "banco",
   "procedencia": "Banqueo de Oncología T7; banco consolidado de Oncología, preg. 213",
   "enunciado": "Paciente mujer de 24 años con riesgo de cáncer de cérvix, a la que se realiza biopsia en conización con bisturí, obteniendo invasión del espacio linfovascular negativa y bordes negativos. ¿Qué tratamiento recomendaría, si la paciente desea tener hijos en el futuro?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Histerectomía tipo 1"
    },
    {
     "id": "b",
     "texto": "Histerectomía extrafascial"
    },
    {
     "id": "c",
     "texto": "Histerectomía radical modificada"
    },
    {
     "id": "d",
     "texto": "Con la conización es suficiente"
    }
   ],
   "correcta": "d",
   "tipo_clave": "deducida",
   "dato_clave": "desea tener hijos en el futuro",
   "por_que_correcta": "En el cáncer microinvasor con deseo de fertilidad y sin invasión del espacio linfovascular, el tratamiento es la «biopsia de cono con márgenes negativos» (diap. 294). La conización «es una opción razonable en mujeres que desean preservar la fertilidad y que no tienen invasión del espacio linfovascular» (diap. 328).",
   "por_que_no": {
    "a": "Una histerectomía impide la gestación que desea la paciente.",
    "b": "La histerectomía extrafascial es la opción sin preservación de fertilidad (diap. 294).",
    "c": "La radical modificada se plantea cuando hay invasión linfovascular y no se preserva la fertilidad (diap. 294)."
   },
   "fuentes": {
    "docente": "Diapositivas de Cáncer de cuello uterino: diap. 294 (IA1 con preservación de la fertilidad y sin invasión del ELV: cono con márgenes negativos), diap. 328.",
    "guia": "Guía, p. 53: «En estadios muy precoces puede bastar un cono».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 294.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 328.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-198",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Anatomía quirúrgica pélvica",
   "origen": "banco",
   "procedencia": "Pretest EVA Oncología T7, preg. 7 (captura); banco consolidado de Oncología, preg. 216 (que no traía las alternativas completas)",
   "enunciado": "Pequeño espacio retroperitoneal en la línea media, confinado dentro de la superficie anterior del útero y la inserción del uréter en la vejiga:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Espacio de Latzko"
    },
    {
     "id": "b",
     "texto": "Espacio de Yabuki"
    },
    {
     "id": "c",
     "texto": "Espacio de Okabayashi"
    },
    {
     "id": "d",
     "texto": "Espacio de Retzius"
    }
   ],
   "correcta": "b",
   "tipo_clave": "deducida",
   "dato_clave": "Pequeño espacio retroperitoneal en la línea media",
   "por_que_correcta": "Es la definición textual de la clase: «Espacio de Yabuki: pequeño espacio retroperitoneal de la línea media confinado dentro de la superficie anterior del útero y el uréter insertado en la vejiga (preservación de la inervación vesical)» (diap. 14).",
   "por_que_no": {
    "a": "El espacio de Latzko es el pararrectal lateral (diap. 14).",
    "c": "El espacio de Okabayashi es el pararrectal interno (diap. 14).",
    "d": "El espacio de Retzius es otro espacio quirúrgico distinto, que la clase muestra en el esquema de los tipos de histerectomía (diap. 285)."
   },
   "fuentes": {
    "docente": "Clave sin marca oficial (el pretest muestra la selección del alumno); la diapositiva 14 trae la definición literal. En el original la primera alternativa dice «Lastzko».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 14.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 285."
   ]
  },
  {
   "id": "ESP1-B-199",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Ganglio parametrial positivo",
   "origen": "banco",
   "procedencia": "Parcial de Especialidades 2021-20, preg. 5 (clave resaltada); banco consolidado de Oncología, preg. 217",
   "enunciado": "Paciente con diagnóstico de carcinoma epidermoide de cérvix, que clínicamente presentó parametrios negativos y no adenopatías en los estudios de imágenes preoperatorios. Fue sometida a histerectomía radical. El resultado anatomopatológico reveló ganglio parametrial izquierdo positivo. Ante esta situación, marque la afirmación correcta:",
   "alternativas": [
    {
     "id": "a",
     "texto": "No se puede afirmar que el pronóstico es similar al compararla a una paciente con compromiso parametrial que recibió terapia neoadyuvante"
    },
    {
     "id": "b",
     "texto": "Todas las afirmaciones son correctas, ya que es un punto de debate inconcluso aún"
    },
    {
     "id": "c",
     "texto": "Le corresponde tratamiento adyuvante con quimioterapia y radioterapia"
    },
    {
     "id": "d",
     "texto": "Es un estadio clínico IIIC1p"
    },
    {
     "id": "e",
     "texto": "Corresponde a un estadio clínico IIB"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "ganglio parametrial izquierdo positivo",
   "por_que_correcta": "Es la clave del examen: el docente lo plantea como un punto de debate inconcluso. Para el examen, marca esta.",
   "por_que_no": {
    "a": "Se acepta dentro de la clave del docente, que considera todas las afirmaciones correctas.",
    "c": "Es cierta por sí misma: los ganglios pélvicos positivos tras la cirugía son un criterio de Peters y llevan a quimiorradioterapia adyuvante (diap. 376); pero la clave es la que agrupa todas.",
    "d": "Es la anotación de la FIGO 2018 para un ganglio confirmado por patología (diap. 279); la clave del docente es otra.",
    "e": "Se acepta dentro de la clave del docente. Ver el dato curioso."
   },
   "fuentes": {
    "docente": "Clave resaltada en el Parcial 2021-20 (preg. 5). Diapositivas de Cáncer de cuello uterino: diap. 376 (criterios de Peters: ganglios pélvicos positivos, márgenes positivos o parametrios positivos → radioterapia + quimioterapia con cisplatino), diap. 279 (ganglios parametriales entre los regionales; notación p).",
    "guia": "Dato curioso: la guía (p. 53) explica que la FIGO 2018 creó el estadio IIIC para la afectación ganglionar, y la diapositiva 279 muestra que un ganglio confirmado por patología se anota IIIC1p; con ese criterio la alternativa «IIB» no se sostiene. Para el examen: marca lo del docente.",
    "libro": null,
    "discrepancia": true
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 376.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 279.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-B-200",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tumores de ovario",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 43 (clave marcada)",
   "enunciado": "Mujer de 20 años con tumoración ovárica de 15 cm, sólido-quística, detectada por ecografía tras presentar síntomas abdominales inespecíficos. En el estudio histopatológico de la pieza correspondiente se encuentran dientes, pelos, zonas de epitelio intestinal, áreas de epitelio escamoso (15 %) y bronquial, así como elementos neuroectodérmicos y embrionarios en varias de las preparaciones histológicas. En referencia a este caso, señale el diagnóstico correcto:",
   "alternativas": [
    {
     "id": "a",
     "texto": "Teratocarcinoma"
    },
    {
     "id": "b",
     "texto": "Teratoma inmaduro"
    },
    {
     "id": "c",
     "texto": "Teratoma quístico maduro"
    },
    {
     "id": "d",
     "texto": "Disgerminoma"
    },
    {
     "id": "e",
     "texto": "Cistoadenoma seroso"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "elementos neuroectodérmicos y embrionarios",
   "por_que_correcta": "Es la clave del examen. Lo que separa al teratoma inmaduro del maduro es la presencia de tejidos de aspecto embrionario o fetal, «como tejido conectivo, vías respiratorias y cerebro» (American Cancer Society); suele aparecer en niñas y mujeres jóvenes.",
   "por_que_no": {
    "a": "No es el diagnóstico que corresponde a la descripción: la mezcla de tejidos maduros con elementos embrionarios y neuroectodérmicos es la del teratoma inmaduro (ACS).",
    "c": "El maduro (quiste dermoide) contiene hueso, pelo, dientes u otros tejidos maduros, sin elementos embrionarios (ACS).",
    "d": "El disgerminoma es otro tumor germinal, sin dientes ni pelos (ACS).",
    "e": "Es un tumor epitelial; no contiene tejidos de las tres capas."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 43). Los tumores de ovario no están en las diapositivas de Oncología; se usa la fuente externa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "American Cancer Society. Ovarian Cancer: What Is Ovarian Cancer? [Internet]. Atlanta: ACS; revisado 8 ago 2025. Disponible en: https://www.cancer.org/cancer/types/ovarian-cancer/about/what-is-ovarian-cancer.html"
   ]
  },
  {
   "id": "ESP1-B-201",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Cáncer de endometrio: tamizaje",
   "origen": "banco",
   "procedencia": "Parcial 2023-10 (1.ª rotación), preg. 49 (clave marcada)",
   "enunciado": "¿Qué prueba diagnóstica se recomienda para el cribado anual del cáncer de endometrio en las mujeres postmenopáusicas asintomáticas?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ninguna"
    },
    {
     "id": "b",
     "texto": "Citología endometrial"
    },
    {
     "id": "c",
     "texto": "Ecografía transvaginal"
    },
    {
     "id": "d",
     "texto": "Biopsia endometrial por aspiración"
    },
    {
     "id": "e",
     "texto": "Determinación en plasma del marcador tumoral CA 125"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "asintomáticas",
   "por_que_correcta": "Es la clave del examen. No hay una prueba de tamizaje recomendada para el cáncer de endometrio en mujeres asintomáticas: el NCI no encuentra evidencia de que la ecografía o el muestreo endometrial reduzcan la mortalidad.",
   "por_que_no": {
    "b": "La citología es «demasiado insensible» para detectar el cáncer de endometrio (NCI).",
    "c": "No hay evidencia de que el tamizaje con ecografía reduzca la mortalidad (NCI).",
    "d": "La evidencia sobre el muestreo endometrial como tamizaje es insuficiente (NCI).",
    "e": "El CA 125 no figura como prueba de tamizaje del cáncer de endometrio en el NCI."
   },
   "fuentes": {
    "docente": "Clave marcada en el Parcial 2023-10 (preg. 49). El tema no está en las diapositivas de Oncología; se usa la fuente externa.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "National Cancer Institute. Endometrial Cancer Screening (PDQ®)–Health Professional Version [Internet]. Bethesda (MD): NCI; actualizado 10 abr 2025. Disponible en: https://www.cancer.gov/types/uterine/hp/endometrial-screening-pdq"
   ]
  },
  {
   "id": "ESP1-C-001",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Operabilidad y resecabilidad",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 50)",
   "enunciado": "Varón de 82 años con adenocarcinoma de colon sigmoides de 4 cm, sin metástasis, técnicamente extirpable con márgenes libres. Tiene insuficiencia cardiaca avanzada con disnea de reposo y está postrado. ¿Cómo se clasifica su situación?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tumor irresecable e inoperable"
    },
    {
     "id": "b",
     "texto": "Tumor resecable en un paciente inoperable"
    },
    {
     "id": "c",
     "texto": "Tumor irresecable en un paciente operable"
    },
    {
     "id": "d",
     "texto": "Tumor resecable y operable"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "técnicamente extirpable con márgenes libres",
   "por_que_correcta": "El docente separa los dos conceptos: la inoperabilidad es una condición del paciente (enfermedades concomitantes, estado funcional o enfermedad tan avanzada que la cirugía no aporta beneficio), y la irresecabilidad es una característica del tumor (imposibilidad de retirarlo con márgenes libres). Aquí el tumor se puede extirpar, pero el paciente no tolera la operación.",
   "por_que_no": {
    "a": "El tumor es resecable; lo que impide la cirugía es el estado del paciente.",
    "c": "El tumor sí puede retirarse con márgenes libres: es resecable.",
    "d": "La insuficiencia cardiaca avanzada y la postración lo hacen inoperable."
   },
   "fuentes": {
    "docente": "Diapositiva 50 del Dr. Yan Quiroz, «Inoperabilidad e irresecabilidad»: «La inoperabilidad se refiere a una condición del paciente que IMPIDE que se le pueda OFRECER UN TRATAMIENTO QUIRÚRGICO debido a sus enfermedades concomitantes, estado funcional, estado muy avanzado de la enfermedad…»; «La irresecabilidad es una característica del tumor y se refiere a la IMPOSIBILIDAD de retirarlo cumpliendo el principio de márgenes libres de enfermedad».",
    "guia": "Guía, p. 11: resecabilidad frente a operabilidad, entre lo imprescindible del tema.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 50.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 11."
   ]
  },
  {
   "id": "ESP1-C-002",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Biopsia",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 64)",
   "enunciado": "Mujer de 52 años con una masa ovárica derecha sólido-quística de 9 cm, con CA-125 elevado y sin enfermedad a distancia, candidata a cirugía con intención curativa. El residente propone una biopsia percutánea guiada por ecografía antes de operar. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hacer una citología por aspiración con aguja fina y esperar el resultado para decidir"
    },
    {
     "id": "b",
     "texto": "Hacer una biopsia en sacabocado de la superficie de la masa"
    },
    {
     "id": "c",
     "texto": "Hacer la biopsia percutánea siempre antes de cualquier cirugía oncológica"
    },
    {
     "id": "d",
     "texto": "No hacer biopsia percutánea por riesgo de siembra y operarla"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "intención curativa",
   "por_que_correcta": "Entre las contraindicaciones de la biopsia, el docente señala no hacerla en casos con intención curativa cuando existe posibilidad de diseminar el tumor a lo largo del trayecto, especialmente en las biopsias percutáneas de hígado, vesícula, a veces páncreas, riñón, ovario y tumores de partes blandas intraabdominales o pélvicos.",
   "por_que_no": {
    "a": "La aspiración también es percutánea y además tiene un porcentaje de error.",
    "b": "La biopsia en sacabocado se usa en lesiones de piel, no en una masa ovárica.",
    "c": "En los órganos que señala el docente, la biopsia percutánea puede sembrar el trayecto."
   },
   "fuentes": {
    "docente": "Diapositiva 64 del Dr. Yan Quiroz, «Biopsia: contraindicaciones»: «No realizar biopsia en casos con intención curativa. Existe posibilidad de diseminación de los tumores malignos a lo largo del trayecto de la biopsia (especialmente en bp percutáneas): hígado, vesícula biliar, ocasionalmente páncreas, riñón, ovario, tumores de partes blandas intraabdominales o pélvicas». Diap. 62: la aspiración con aguja fina «tiene un porcentaje de error, aun con patólogos experimentados».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 64.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-C-003",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Biopsia",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 65)",
   "enunciado": "Varón de 40 años con una masa profunda de 10 cm en el muslo, sospechosa de sarcoma. Antes de la biopsia, ¿qué norma indica el docente sobre el trayecto?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Elegir el trayecto más corto, aunque cruce otros compartimentos"
    },
    {
     "id": "b",
     "texto": "Tomar la muestra de la zona más necrótica, que es la más representativa"
    },
    {
     "id": "c",
     "texto": "Ubicar el trayecto para que se extirpe en la cirugía definitiva"
    },
    {
     "id": "d",
     "texto": "Hacer una biopsia escisional de toda la masa para no dejar trayecto"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "Antes de la biopsia",
   "por_que_correcta": "El docente da normas para la biopsia: los trayectos de las agujas o las cicatrices deben colocarse de modo que se puedan extirpar en la cirugía definitiva, sin contaminar nuevos planos tisulares, y la muestra debe ser representativa y evitar las zonas necróticas. La guía lo resume como el principio de evitar la siembra.",
   "por_que_no": {
    "a": "Cruzar otros compartimentos los contamina con tumor.",
    "b": "Hay que evitar las partes necróticas, que no son representativas.",
    "d": "La biopsia escisional se reserva para lesiones pequeñas; en una masa de 10 cm compromete la cirugía definitiva."
   },
   "fuentes": {
    "docente": "Diapositiva 65 del Dr. Yan Quiroz, «Normas para una biopsia»: «Trayecto de agujas o cicatrices deben colocarse adecuadamente que permitan ser removidos en la cirugía definitiva posterior. Evitar contaminar con tumor nuevos planos tisulares. Debe ser representativo del tumor. Evitar partes necrosadas…». Diap. 62: «Escisión: extirpación completa de la lesión, si es pequeña».",
    "guia": "Guía, p. 10: quinto principio, «Evitar la siembra… la biopsia se planifica para ser resecada después».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 65.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 10."
   ]
  },
  {
   "id": "ESP1-C-004",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Biopsia",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 65)",
   "enunciado": "En una colonoscopia se encuentra un pólipo sésil de 2 cm. ¿Qué condición debe cumplir la muestra para que sea útil al patólogo, según las normas del docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Basta con tomar la punta del pólipo con la pinza"
    },
    {
     "id": "b",
     "texto": "Debe tomarse de la zona necrótica del pólipo"
    },
    {
     "id": "c",
     "texto": "Debe tomarse solo tejido sano alrededor del pólipo"
    },
    {
     "id": "d",
     "texto": "Debe contener una parte de la base del pólipo"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "pólipo sésil de 2 cm",
   "por_que_correcta": "El docente indica que en pólipos y papilomas la muestra debe contener una parte de la base: es ahí donde se valora si hay invasión. En lesiones de piel y mucosas se incluyen segmentos marginales de tejido sano.",
   "por_que_no": {
    "a": "La punta no permite valorar la invasión de la base.",
    "b": "Las partes necróticas deben evitarse.",
    "c": "El tejido sano solo no muestra la lesión."
   },
   "fuentes": {
    "docente": "Diapositiva 65 del Dr. Yan Quiroz, «Normas para una biopsia»: «Debe ser representativo del tumor. Evitar partes necrosadas. En lesiones de piel y mucosas incluir segmentos marginales de tejido sano. En pólipos y papilomas la muestra debe contener una parte de la base».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 65."
   ]
  },
  {
   "id": "ESP1-C-005",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Cirugía profiláctica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 67)",
   "enunciado": "Joven de 17 años con poliposis adenomatosa familiar: la colonoscopia muestra cientos de pólipos en todo el colon, aún sin cáncer. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Colectomía total profiláctica antes de los 20 años"
    },
    {
     "id": "b",
     "texto": "Polipectomía endoscópica de todos los pólipos"
    },
    {
     "id": "c",
     "texto": "Hemicolectomía derecha"
    },
    {
     "id": "d",
     "texto": "Colonoscopia anual sin cirugía hasta que aparezca un cáncer"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "poliposis adenomatosa familiar",
   "por_que_correcta": "La cirugía profiláctica se hace en personas sanas con lesiones precancerosas o alto riesgo de cáncer. El docente pone el ejemplo de la poliposis múltiple familiar, en la que recomienda colectomía total antes de los 20 años; igual en la colitis ulcerosa crónica. La guía recuerda que su riesgo de cáncer es prácticamente del 100 %.",
   "por_que_no": {
    "b": "Con cientos de pólipos no es posible resecarlos todos por vía endoscópica.",
    "c": "Los pólipos afectan a todo el colon; una resección parcial deja la mucosa en riesgo.",
    "d": "Esperar al cáncer contradice el objetivo de la cirugía profiláctica."
   },
   "fuentes": {
    "docente": "Diapositiva 67 del Dr. Yan Quiroz, «Prevención o cirugía profiláctica»: «Operaciones que se realizan en personas sanas portadoras de lesiones… precancerosas o personas con riesgo alto de desarrollar cáncer… En condiciones familiares asociadas con alta incidencia de cáncer, como poliposis múltiple se recomienda colectomía total antes de los 20 años. Igual en colitis ulcerativa crónica. En hiperplasia de células C, para prevenir cáncer medular de tiroides».",
    "guia": "Guía, p. 36: poliposis adenomatosa familiar, «cientos de pólipos, riesgo prácticamente del 100 %».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 67.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 36."
   ]
  },
  {
   "id": "ESP1-C-006",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Cirugía de las metástasis",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 71)",
   "enunciado": "Varón de 45 años operado hace 2 años de un sarcoma de partes blandas del muslo con márgenes libres. Ahora la TC muestra una única metástasis pulmonar, sin otra enfermedad, y tiene buena función respiratoria. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resecar la metástasis pulmonar: puede curar hasta un 35 % de los casos"
    },
    {
     "id": "b",
     "texto": "Solo tratamiento paliativo, porque toda enfermedad metastásica es incurable"
    },
    {
     "id": "c",
     "texto": "Observar sin tratamiento"
    },
    {
     "id": "d",
     "texto": "Amputar el miembro operado"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "una única metástasis pulmonar",
   "por_que_correcta": "En la cirugía de las metástasis, el docente indica resecar la metástasis única si no conlleva mayor morbilidad. La resección de metástasis pulmonares de sarcomas de partes blandas o de hueso puede curar hasta el 35 % de los casos, y la de una metástasis hepática solitaria de cáncer colorrectal, hasta el 25 %.",
   "por_que_no": {
    "b": "La metástasis única resecable es una excepción en la que la cirugía puede curar.",
    "c": "Observar desaprovecha la oportunidad de curación que da la metastasectomía.",
    "d": "El primario está controlado; el problema es la metástasis pulmonar."
   },
   "fuentes": {
    "docente": "Diapositiva 71 del Dr. Yan Quiroz, «Cirugía de las metástasis»: «En caso de metástasis única debe resecarse si no hay mayor morbilidad. La resección de metástasis pulmonares de sarcomas de tejidos blandos o hueso puede curar hasta 35 % de casos. En metástasis hepática especialmente colorectal (cuando no hay otro sitio de metástasis, si son solitarias, resección permite hasta 25 % de curación). En metástasis cerebral única» (Sabel, Diehl, Chang. Principles of Surgical Oncology, 2006).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 71."
   ]
  },
  {
   "id": "ESP1-C-007",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Tipos de cirugía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diaps. 71 y 72)",
   "enunciado": "Mujer de 58 años con cáncer de ovario y siembra peritoneal extensa. Se planea resecar la mayor cantidad posible de tumor para que la quimioterapia posterior controle la enfermedad residual. ¿Qué tipo de cirugía es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cirugía profiláctica"
    },
    {
     "id": "b",
     "texto": "Cirugía citorreductora"
    },
    {
     "id": "c",
     "texto": "Cirugía diagnóstica"
    },
    {
     "id": "d",
     "texto": "Cirugía paliativa"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "para que la quimioterapia posterior controle la enfermedad residual",
   "por_que_correcta": "La cirugía citorreductora reduce la masa tumoral para que la terapia adyuvante controle la enfermedad residual; el docente pone como ejemplo el ovario. La paliativa, en cambio, busca aliviar el sufrimiento aunque quede tumor, sin pretender controlar la enfermedad.",
   "por_que_no": {
    "a": "La profiláctica se hace en personas sanas con lesiones precancerosas o alto riesgo.",
    "c": "El diagnóstico ya está hecho; el objetivo es reducir la masa tumoral.",
    "d": "La paliativa busca aliviar síntomas (obstrucción, dolor, sangrado), no preparar la adyuvancia."
   },
   "fuentes": {
    "docente": "Diapositiva 71 del Dr. Yan Quiroz: «Cirugía para reducir la masa tumoral. Cirugía citoreductora. Ejm: Ovario. Reducción quirúrgica de masa tumoral, permite controlar enfermedad residual con terapia adyuvante». Diap. 72: cirugía paliativa, «destinada a aliviar los sufrimientos del paciente, aunque quede tumor residual».",
    "guia": "Guía, p. 11: diferencia entre cirugía curativa, citorreductora y paliativa, entre lo imprescindible.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 71.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 11."
   ]
  },
  {
   "id": "ESP1-C-008",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Tipos de cirugía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 72)",
   "enunciado": "Varón de 70 años con cáncer del antro gástrico irresecable por invasión de grandes vasos, que vomita todo lo que come por obstrucción pilórica. Se le realiza una gastroyeyunoanastomosis sin extirpar el tumor. ¿Qué tipo de operación es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cirugía curativa"
    },
    {
     "id": "b",
     "texto": "Cirugía reconstructiva"
    },
    {
     "id": "c",
     "texto": "Cirugía citorreductora"
    },
    {
     "id": "d",
     "texto": "Cirugía paliativa"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "sin extirpar el tumor",
   "por_que_correcta": "El docente describe dentro de la cirugía paliativa las operaciones de derivación, cuando no se puede extirpar un tumor del aparato digestivo o urinario: por ejemplo, la anastomosis gastrointestinal o la colostomía. Su objetivo es aliviar el síntoma, no curar.",
   "por_que_no": {
    "a": "No se extirpa el tumor; no puede curar.",
    "b": "La reconstructiva repara defectos tras la terapia definitiva.",
    "c": "No se reduce la masa tumoral: el tumor queda intacto."
   },
   "fuentes": {
    "docente": "Diapositiva 72 del Dr. Yan Quiroz, «Cirugía paliativa»: «a) Resección paliativa… tumores del estómago o intestino que producen obstrucción… b) Operaciones de derivación. En casos que no puede extirparse un tumor de aparato digestivo o urinario. Ejem: anastomosis gastrointestinal, colostomía». Diap. 73: cirugía reconstructiva y de rehabilitación.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 73."
   ]
  },
  {
   "id": "ESP1-C-009",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Conceptos",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 38)",
   "enunciado": "Según el concepto del docente, ¿qué caracteriza a un cáncer temprano?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No da síntomas y es in situ o mínimamente invasor"
    },
    {
     "id": "b",
     "texto": "Es palpable e invade las capas profundas del órgano"
    },
    {
     "id": "c",
     "texto": "Siempre tiene metástasis ganglionares"
    },
    {
     "id": "d",
     "texto": "Su definición es igual en todos los órganos"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "cáncer temprano",
   "por_que_correcta": "Para el docente, el concepto de cáncer temprano varía según el órgano, pero comparte rasgos: no da síntomas, es intraepitelial, in situ, mínimamente invasor o pequeño (menos de 1 cm), con metástasis linfáticas escasas o nulas. El avanzado es invasor, casi siempre palpable, invade capas profundas y puede dar metástasis linfáticas o hemáticas.",
   "por_que_no": {
    "b": "Describe al cáncer avanzado.",
    "c": "En el cáncer temprano las metástasis linfáticas son escasas o nulas.",
    "d": "El docente aclara que el concepto varía según el órgano afectado."
   },
   "fuentes": {
    "docente": "Diapositiva 38 del Dr. Yan Quiroz: «Cáncer temprano: concepto VARÍA SEGÚN ÓRGANO AFECTADO. No da síntomas. Intraepitelial, in situ, mínimamente invasor ó de pequeño tamaño (< 1 cm). Metástasis linfática escasas o nulas. Cáncer avanzado: tumor invasor. Mayoría palpables. Invaden capas o tejidos profundos del órgano afectado. Posible metástasis linfática o hemática».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 38."
   ]
  },
  {
   "id": "ESP1-C-010",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 47)",
   "enunciado": "En la pieza de una resección por cáncer gástrico, el tumor invade hasta la submucosa (T1b). Según el esquema del docente, ¿qué probabilidad aproximada hay de metástasis ganglionares?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Alrededor del 70 %"
    },
    {
     "id": "b",
     "texto": "Menos del 5 %"
    },
    {
     "id": "c",
     "texto": "Alrededor del 90 %"
    },
    {
     "id": "d",
     "texto": "Alrededor del 20 %"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "invade hasta la submucosa (T1b)",
   "por_que_correcta": "El docente relaciona la profundidad de invasión con la probabilidad de ganglios positivos: T1a (mucosa) menos del 5 %, T1b (submucosa) 20 %, T2 (muscular propia) 40 %, T3 (subserosa) 70 % y T4a (serosa) 90 %. Cuanto más profundo, más ganglios.",
   "por_que_no": {
    "a": "Corresponde al T3, que llega a la subserosa.",
    "b": "Corresponde al T1a, limitado a la mucosa.",
    "c": "Corresponde al T4a, que alcanza la serosa."
   },
   "fuentes": {
    "docente": "Diapositiva 47 del Dr. Yan Quiroz, «Relación entre la profundidad de invasión a la pared gástrica y la probabilidad de presentar metástasis ganglionar»: T1a < 5 %; T1b 20 %; T2 40 %; T3 70 %; T4a 90 % (Oñate Ocaña LF, 2012).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 47."
   ]
  },
  {
   "id": "ESP1-C-011",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 45)",
   "enunciado": "Mujer de 50 años operada hace 3 años de un cáncer de mama en estadio IIA. Ahora presenta metástasis óseas. ¿Qué ocurre con su estadio según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Pasa a estadio IIIC por progresión"
    },
    {
     "id": "b",
     "texto": "Se reclasifica como estadio IV por las metástasis"
    },
    {
     "id": "c",
     "texto": "Sigue siendo IIA, con recidiva a distancia"
    },
    {
     "id": "d",
     "texto": "Se le asigna un nuevo TNM patológico"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "operada hace 3 años",
   "por_que_correcta": "El docente insiste en que la estadificación inicial es definitiva y nunca cambia, aun cuando el paciente tenga recidivas o progresión, siempre que haya recibido un tratamiento. La recidiva se describe como tal; no se reasigna el estadio.",
   "por_que_no": {
    "a": "Las metástasis no reclasifican el estadio inicial.",
    "b": "La paciente ya recibió tratamiento: su estadio inicial se mantiene.",
    "d": "El pTNM corresponde a la pieza de la cirugía inicial, no a la recidiva."
   },
   "fuentes": {
    "docente": "Diapositiva 45 del Dr. Yan Quiroz: «Hay clasificación clínica cTNM y patológica (pTNM). SIRVE para terapia adyuvante, pronóstico y reporte de resultados. La estadificación INICIAL es DEFINITIVA y nunca cambia, aun cuando el paciente tenga recidivas o progresión de la enfermedad SIEMPRE Y CUANDO HAYA RECIBIDO UN TRATAMIENTO».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 45."
   ]
  },
  {
   "id": "ESP1-C-012",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Estado funcional",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 59)",
   "enunciado": "Varón de 65 años con cáncer de colon que cuida de sí mismo, pero ya no puede mantener su actividad normal ni trabajar. ¿Qué puntuación de Karnofsky le corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "70"
    },
    {
     "id": "b",
     "texto": "30"
    },
    {
     "id": "c",
     "texto": "90"
    },
    {
     "id": "d",
     "texto": "50"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "cuida de sí mismo",
   "por_que_correcta": "En el índice de Karnofsky del docente, 70 corresponde a «cuida de sí mismo; incapaz de mantener una actividad normal o realizar tareas activas». El 90 mantiene la actividad normal con mínimos síntomas, el 50 requiere asistencia considerable y el 30 está gravemente discapacitado.",
   "por_que_no": {
    "b": "Con 30 está gravemente discapacitado y requiere hospitalización.",
    "c": "Con 90 todavía mantiene una actividad normal.",
    "d": "Con 50 requiere asistencia considerable y cuidados médicos frecuentes."
   },
   "fuentes": {
    "docente": "Diapositiva 59 del Dr. Yan Quiroz, «Índice de Karnofsky»: «90 Capaz de mantener una actividad normal; mínimos signos o síntomas… 70 Cuida de sí mismo; INCAPAZ de mantener una actividad normal o realizar tareas activas… 50 Requiere una asistencia considerable y frecuentes cuidados médicos… 30 Gravemente discapacitado. Está indicado su ingreso hospitalario».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 59."
   ]
  },
  {
   "id": "ESP1-C-013",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Factores que condicionan la cirugía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Principios de cirugía oncológica (diap. 55)",
   "enunciado": "Dos pacientes tienen un adenocarcinoma de recto a la misma altura: uno bien diferenciado y otro indiferenciado. ¿Cómo cambia el margen distal según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "El grado no influye en la cirugía, solo en la quimioterapia"
    },
    {
     "id": "b",
     "texto": "En el indiferenciado se reseca un margen distal mayor"
    },
    {
     "id": "c",
     "texto": "En el bien diferenciado se reseca un margen mayor"
    },
    {
     "id": "d",
     "texto": "Se reseca el mismo margen en ambos"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "uno bien diferenciado y otro indiferenciado",
   "por_que_correcta": "Entre los factores que condicionan la cirugía, el docente incluye la estructura histológica y el grado de diferenciación: en el cáncer indiferenciado de recto se reseca un margen distal mayor que en el bien diferenciado, y los márgenes difieren entre basocelular, melanoma y sarcoma.",
   "por_que_no": {
    "a": "El docente lo cita como factor que condiciona el tratamiento quirúrgico.",
    "c": "Es al revés: el indiferenciado necesita más margen.",
    "d": "El grado de diferenciación cambia el margen."
   },
   "fuentes": {
    "docente": "Diapositiva 55 del Dr. Yan Quiroz, «Factores que condicionan tratamiento quirúrgico del cáncer»: «2. Estructura histológica y grado de diferenciación. Márgenes de resección diferentes en ca. basocelular, melanoma maligno o sarcoma de partes blandas… En cáncer indiferenciado de recto se reseca mayor margen distal de recto que en cáncer bien diferenciado».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 55."
   ]
  },
  {
   "id": "ESP1-C-014",
   "especialidad": "esp1",
   "tema": "Principios de cirugía oncológica",
   "subtema": "Principios de resección",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 10)",
   "enunciado": "Durante una hemicolectomía, el tumor del colon está adherido a un asa de intestino delgado. El cirujano decide extirpar el colon y el asa juntos, sin separarlos. ¿Qué principio de resección oncológica aplica?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ganglio centinela"
    },
    {
     "id": "b",
     "texto": "Cirugía citorreductora"
    },
    {
     "id": "c",
     "texto": "Mínima manipulación"
    },
    {
     "id": "d",
     "texto": "Resección en bloque"
    }
   ],
   "correcta": "d",
   "tipo_clave": "guía",
   "dato_clave": "sin separarlos",
   "por_que_correcta": "Si el tumor invade una estructura vecina, se extirpan juntos, sin separarlos: es la resección en bloque. Separarlos equivale a cortar por dentro del tumor. La guía lo cuenta entre los cinco principios, junto al margen adecuado, la mínima manipulación, la linfadenectomía adecuada y evitar la siembra.",
   "por_que_no": {
    "a": "El ganglio centinela estadifica la axila o la ingle sin vaciarla.",
    "b": "La citorreducción reduce la masa tumoral cuando no se puede resecar todo.",
    "c": "La mínima manipulación busca no desprender células (técnica «no touch» y ligadura vascular precoz)."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 10, «Los cinco principios de la resección oncológica»: «2. Resección en bloque. Si el tumor invade una estructura vecina, se extirpan juntos, sin separarlos. Separarlos equivale a cortar por dentro del tumor. 3. Mínima manipulación… técnica “no touch” y la ligadura vascular precoz».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 10."
   ]
  },
  {
   "id": "ESP1-C-015",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Anatomía quirúrgica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diaps. 26 y 27)",
   "enunciado": "Durante una lobectomía tiroidea derecha, el cirujano llega a la zona donde la glándula se fija firmemente a la tráquea. El docente advierte que allí el nervio laríngeo recurrente está en riesgo. ¿Cómo se llama esta estructura?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Arcada subístmica"
    },
    {
     "id": "b",
     "texto": "Ligamento de Berry"
    },
    {
     "id": "c",
     "texto": "Tubérculo de Zuckerkandl"
    },
    {
     "id": "d",
     "texto": "Lóbulo piramidal"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "se fija firmemente a la tráquea",
   "por_que_correcta": "El ligamento de Berry es un engrosamiento de la fascia pretraqueal que ata la glándula al eje laringotraqueal. Está muy vascularizado y, en el 40 % de los pacientes, el nervio laríngeo recurrente pasa medial a él o incluso dentro de él: por eso es un sitio proclive a lesionarlo.",
   "por_que_no": {
    "a": "La arcada subístmica es la anastomosis de las ramas terminales de las arterias tiroideas inferiores.",
    "c": "El tubérculo de Zuckerkandl es tejido tiroideo que crece sobre el nervio hacia el pliegue traqueoesofágico, no la fijación a la tráquea.",
    "d": "El lóbulo piramidal es una prolongación superior del istmo."
   },
   "fuentes": {
    "docente": "Diapositiva 26 del Dr. Yan Quiroz: «Ligamento de Berry: del borde lateral de ambos lóbulos surge una formación fibrosa que ata firmemente la glándula al eje laringotraqueal… Es importante en cirugía pues está muy vascularizado y puede contener al nervio laríngeo recurrente». Diap. 27: «En el 40 % de los pacientes, el nervio laríngeo recurrente se encuentra medial o incluso inmerso dentro de él, lo que hace este sitio PROCLIVE a las lesiones del nervio». Diap. 28: tubérculo de Zuckerkandl. Diap. 20: arcada arterial subístmica.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 26.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 27.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 28.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 20."
   ]
  },
  {
   "id": "ESP1-C-016",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Anatomía quirúrgica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 28)",
   "enunciado": "Al rechazar el lóbulo tiroideo, el cirujano encuentra una prolongación de tejido tiroideo que se extiende lateralmente hacia el pliegue traqueoesofágico. ¿Por qué el docente insiste en identificarla?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Porque es el sitio de la arteria tiroidea superior"
    },
    {
     "id": "b",
     "texto": "Porque suele situarse sobre el nervio laríngeo recurrente"
    },
    {
     "id": "c",
     "texto": "Porque contiene siempre las glándulas paratiroides inferiores"
    },
    {
     "id": "d",
     "texto": "Porque es tejido metastásico que debe biopsiarse"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "hacia el pliegue traqueoesofágico",
   "por_que_correcta": "Es el tubérculo de Zuckerkandl: tejido tiroideo que crece sobre el nervio laríngeo recurrente y se extiende lateralmente hacia el pliegue traqueoesofágico. Si no se identifica, el nervio puede seccionarse con él.",
   "por_que_no": {
    "a": "La arteria tiroidea superior está en el polo superior.",
    "c": "El docente lo relaciona con el nervio recurrente, no con las paratiroides.",
    "d": "Es tejido tiroideo normal, no una metástasis."
   },
   "fuentes": {
    "docente": "Diapositiva 28 del Dr. Yan Quiroz: «Tubérculo de Zuckerkandl. Es una porción de tejido tiroideo que crece sobre el nervio laríngeo recurrente y se extiende lateralmente hacia el pliegue traqueoesofágico… se localiza sobre el nervio laríngeo recurrente, y si no se identifica puede ser seccionado con la consecuente lesión del nervio».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 28."
   ]
  },
  {
   "id": "ESP1-C-017",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Complicaciones de la tiroidectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diaps. 31 y 263)",
   "enunciado": "Profesora de canto de 38 años operada de tiroidectomía. Habla con voz normal, pero ya no alcanza los tonos agudos y se cansa al cantar. ¿Qué estructura se lesionó con más probabilidad?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nervio espinal accesorio ipsilateral"
    },
    {
     "id": "b",
     "texto": "Glándulas paratiroides superiores"
    },
    {
     "id": "c",
     "texto": "Rama externa del nervio laríngeo superior"
    },
    {
     "id": "d",
     "texto": "Nervio laríngeo recurrente bilateral"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "ya no alcanza los tonos agudos",
   "por_que_correcta": "La rama externa del laríngeo superior inerva el músculo cricotiroideo, que tensa la cuerda vocal; su lesión hace perder los tonos agudos, algo muy relevante en cantantes y docentes. Por eso el docente recomienda ligar las ramas de la arteria tiroidea superior lo más cerca posible de la cápsula.",
   "por_que_no": {
    "a": "El espinal accesorio se arriesga en la disección lateral del cuello y afecta al hombro.",
    "b": "La lesión paratiroidea produce hipocalcemia, no cambios de voz.",
    "d": "La lesión recurrencial bilateral produce obstrucción de la vía aérea, no solo pérdida de los agudos."
   },
   "fuentes": {
    "docente": "Diapositiva 31 del Dr. Yan Quiroz: nervio laríngeo superior, rama interna (sensitiva) y externa (motora, al músculo cricotiroideo); «Recomendación: ligar las ramas de la arteria tiroidea superior lo más cerca posible de la cápsula, intentando la identificación del nervio previamente». Diap. 263: dividir los vasos junto a la cápsula «para evitar lesiones a la rama externa del nervio laríngeo superior».",
    "guia": "Guía, p. 26: «Lesión de la rama externa del laríngeo superior: pérdida de los tonos agudos, relevante en cantantes y docentes».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 31.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 263.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26."
   ]
  },
  {
   "id": "ESP1-C-018",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Complicaciones de la tiroidectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 26)",
   "enunciado": "Varón de 50 años a las 4 horas de una tiroidectomía total. Presenta estridor, dificultad respiratoria y un cuello tenso y aumentado de volumen bajo la herida. ¿Qué debe hacerse primero?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Pedir una ecografía de cuello antes de actuar"
    },
    {
     "id": "b",
     "texto": "Observar y repetir la evaluación en 2 horas"
    },
    {
     "id": "c",
     "texto": "Administrar gluconato de calcio endovenoso"
    },
    {
     "id": "d",
     "texto": "Abrir la herida en la cabecera y evacuar el hematoma"
    }
   ],
   "correcta": "d",
   "tipo_clave": "guía",
   "dato_clave": "cuello tenso y aumentado de volumen bajo la herida",
   "por_que_correcta": "Es un hematoma cervical sofocante: una complicación precoz y potencialmente mortal que comprime la vía aérea. La guía indica abrir la herida de inmediato en la cabecera del paciente, sin esperar estudios ni el traslado a quirófano.",
   "por_que_no": {
    "a": "Cualquier demora agrava la compresión de la vía aérea.",
    "b": "Observar puede ser mortal en un hematoma que comprime la vía aérea.",
    "c": "El calcio trata la hipocalcemia, que no produce un cuello tenso y aumentado de volumen."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 26: «Hematoma cervical sofocante: complicación precoz y potencialmente mortal que obliga a abrir la herida de inmediato en la cabecera del paciente». P. 26, entre lo imprescindible: «Hematoma cervical sofocante: reconocerlo y saber que se abre la herida de inmediato».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26."
   ]
  },
  {
   "id": "ESP1-C-019",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Complicaciones de la tiroidectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (pp. 25-26)",
   "enunciado": "Mujer de 45 años a las 36 horas de una tiroidectomía total. Refiere hormigueo alrededor de la boca y en las manos; al golpear delante del trago se contrae la comisura labial. ¿Qué explica el cuadro?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hipocalcemia por lesión de las paratiroides"
    },
    {
     "id": "b",
     "texto": "Tormenta tiroidea posoperatoria"
    },
    {
     "id": "c",
     "texto": "Hematoma cervical compresivo"
    },
    {
     "id": "d",
     "texto": "Lesión unilateral del nervio laríngeo recurrente"
    }
   ],
   "correcta": "a",
   "tipo_clave": "guía",
   "dato_clave": "se contrae la comisura labial",
   "por_que_correcta": "La contracción de la comisura al percutir el nervio facial es el signo de Chvostek. Tras una tiroidectomía total es fácil devascularizar o extirpar las paratiroides, irrigadas sobre todo por la arteria tiroidea inferior; sin hormona paratiroidea cae el calcio y aparecen parestesias peribucales y de las manos en las primeras 24-48 horas. Tras una lobectomía casi nunca ocurre, porque quedan las paratiroides contralaterales.",
   "por_que_no": {
    "b": "La tormenta tiroidea cursa con fiebre, taquicardia y agitación.",
    "c": "El hematoma produce compresión cervical y dificultad respiratoria.",
    "d": "La lesión recurrencial unilateral produce disfonía, no parestesias ni signo de Chvostek."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 25, «Hipocalcemia tras tiroidectomía»: las paratiroides están «alimentadas en gran medida por la arteria tiroidea inferior… Sin hormona paratiroidea, el calcio sérico cae… hormigueo peribucal y en las manos en las primeras 24 a 48 horas… signos clásicos de Chvostek y Trousseau… la lobectomía casi nunca produce hipocalcemia». P. 26: complicaciones de la tiroidectomía.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26."
   ]
  },
  {
   "id": "ESP1-C-020",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Carcinoma medular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diaps. 239 y 241)",
   "enunciado": "Mujer de 35 años con BAAF de nódulo tiroideo compatible con carcinoma medular y calcitonina elevada. Tiene antecedentes familiares de «presión alta en crisis». Antes de operar el tiroides, ¿qué debe descartarse?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Un feocromocitoma asociado (NEM 2)"
    },
    {
     "id": "b",
     "texto": "Un carcinoma papilar contralateral"
    },
    {
     "id": "c",
     "texto": "Una tiroiditis de Hashimoto asociada"
    },
    {
     "id": "d",
     "texto": "Un déficit de yodo en la dieta"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "calcitonina elevada",
   "por_que_correcta": "El carcinoma medular puede ser parte de una neoplasia endocrina múltiple tipo 2, que asocia feocromocitoma. El estudio del docente incluye tamizaje de feocromocitoma, calcitonina, CEA, calcio y la mutación del protooncogén RET.",
   "por_que_no": {
    "b": "No cambia la conducta inmediata y no amenaza la seguridad anestésica.",
    "c": "No modifica la cirugía ni su seguridad.",
    "d": "El déficit de yodo se asocia al carcinoma folicular, no al medular."
   },
   "fuentes": {
    "docente": "Diapositivas 239 y 241 del Dr. Yan Quiroz (estudio del carcinoma medular, NCCN): «Mutación de línea germinal del protooncogén RET; niveles de calcitonina sérica basal; antígeno carcinoembrionario (CEA); tamizaje de feocromocitoma; calcio sérico»; NEM 2A y NEM 2B.",
    "guia": "Guía, p. 26: «Carcinoma medular: calcitonina, asociación con neoplasia endocrina múltiple tipo 2 y necesidad de descartar feocromocitoma antes de operar». P. 25: déficit de yodo asociado al folicular.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 239.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 241.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-C-021",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Carcinoma medular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 243)",
   "enunciado": "Varón de 40 años operado de tiroidectomía total con disección central por carcinoma medular. ¿Qué marcadores se miden a los 2-3 meses para vigilar la enfermedad?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Calcitonina basal y CEA"
    },
    {
     "id": "b",
     "texto": "Tiroglobulina y anticuerpos antitiroglobulina"
    },
    {
     "id": "c",
     "texto": "Alfa-fetoproteína"
    },
    {
     "id": "d",
     "texto": "CA 19-9 y CA 125"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "carcinoma medular",
   "por_que_correcta": "El medular nace de la célula parafolicular o C, que produce calcitonina. El docente indica medir calcitonina basal y CEA a los 2-3 meses del posoperatorio; si la calcitonina supera 150 pg/mL, se buscan metástasis con TC de cuello, hígado y tórax. La tiroglobulina es el marcador de los carcinomas diferenciados.",
   "por_que_no": {
    "b": "La tiroglobulina sigue a los carcinomas diferenciados (papilar y folicular), que derivan de la célula folicular.",
    "c": "No es marcador del carcinoma medular.",
    "d": "No son marcadores del carcinoma medular."
   },
   "fuentes": {
    "docente": "Diapositiva 243 del Dr. Yan Quiroz, «Manejo postoperatorio 2-3 meses»: «Calcitonina basal; CEA… Si la calcitonina > 150 pg/mL, imágenes de corte transversal de TAC con contraste de cuello, hígado, tórax… Calcitonina sérica, CEA cada 6-12 meses». Diap. 61: medular, derivado de las células C o parafoliculares.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 243.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 61."
   ]
  },
  {
   "id": "ESP1-C-022",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 72)",
   "enunciado": "Mujer de 30 años con carcinoma papilar de tiroides de 5 cm, ganglios cervicales afectados y metástasis pulmonares. ¿En qué estadio queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Estadio II"
    },
    {
     "id": "b",
     "texto": "Estadio IVC"
    },
    {
     "id": "c",
     "texto": "Estadio IVB"
    },
    {
     "id": "d",
     "texto": "Estadio III"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "Mujer de 30 años",
   "por_que_correcta": "En el carcinoma papilar o folicular de menores de 55 años solo hay dos estadios: I (cualquier T, cualquier N, M0) y II (cualquier T, cualquier N, M1). Con metástasis a distancia, esta paciente joven queda en estadio II, reflejo del excelente pronóstico.",
   "por_que_no": {
    "b": "El IVC se aplica al anaplásico y a los mayores de 55 años con metástasis.",
    "c": "Los estadios IV se aplican a los mayores de 55 años.",
    "d": "Por debajo de 55 años no existe estadio III en el carcinoma diferenciado."
   },
   "fuentes": {
    "docente": "Diapositiva 72 del Dr. Yan Quiroz, «Estadios TNM, carcinoma papilar o folicular (menor de 55 años)»: «Estadio I: cualquier T, cualquier N, M0; Estadio II: cualquier T, cualquier N, M1» (UICC, 2017). Diap. 41 de Principios: misma tabla.",
    "guia": "Guía, p. 25: en el carcinoma diferenciado la edad entra en el estadio: «por debajo de cierta edad, ningún paciente puede clasificarse por encima del estadio II aunque tenga metástasis a distancia».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72.",
    "Yan Quiroz EF. Principios de cirugía oncológica [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 41.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-C-023",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Carcinoma anaplásico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diaps. 59 y 75)",
   "enunciado": "Varón de 74 años con una masa cervical dura que creció en pocas semanas. La biopsia muestra un carcinoma anaplásico de tiroides y la TC lo muestra limitado a la glándula, sin ganglios ni metástasis. ¿En qué estadio queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Estadio III"
    },
    {
     "id": "b",
     "texto": "Estadio I"
    },
    {
     "id": "c",
     "texto": "Estadio II"
    },
    {
     "id": "d",
     "texto": "Estadio IVA"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "carcinoma anaplásico",
   "por_que_correcta": "Todos los carcinomas anaplásicos se consideran estadio IV, aunque el tumor esté limitado a la glándula: T1-T3a N0 M0 es IVA, con ganglios IVB y con metástasis IVC. Es el 1-2 % de los tumores tiroideos y el de peor pronóstico, con crecimiento explosivo y compromiso de la vía aérea.",
   "por_que_no": {
    "a": "El estadio III no existe para el anaplásico: todos son IV.",
    "b": "El anaplásico no tiene estadios I a III.",
    "c": "Por definición, todo carcinoma anaplásico es estadio IV."
   },
   "fuentes": {
    "docente": "Diapositiva 75 del Dr. Yan Quiroz: «Carcinoma anaplásico (todos los carcinomas anaplásicos son considerados Estadio IV): Estadio IVA T1-T3a N0/NX M0; IVB T1-T3a N1 M0, T3b cualquier N M0, T4 cualquier N M0; IVC cualquier T cualquier N M1». Diap. 59: anaplásico 1-2 % de los tumores tiroideos.",
    "guia": "Guía, p. 25: «El anaplásico es indiferenciado, de crecimiento explosivo y muy mal pronóstico»; «masa cervical de crecimiento en semanas con compromiso de vía aérea».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 75.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 59.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-C-024",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Diseminación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 25)",
   "enunciado": "Mujer de 55 años de una zona con déficit de yodo, operada de un carcinoma folicular de tiroides. A los 2 años presenta dolor óseo en la columna. ¿Qué vía de diseminación explica mejor el cuadro?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Siembra en el trayecto de la punción"
    },
    {
     "id": "b",
     "texto": "Linfática hacia el compartimento central, característica del folicular"
    },
    {
     "id": "c",
     "texto": "Hematógena, característica del folicular, hacia hueso y pulmón"
    },
    {
     "id": "d",
     "texto": "Extensión directa desde el cuello"
    }
   ],
   "correcta": "c",
   "tipo_clave": "guía",
   "dato_clave": "carcinoma folicular",
   "por_que_correcta": "El papilar se disemina preferentemente por vía linfática hacia el compartimento central y los laterales; el folicular, por vía hematógena hacia hueso y pulmón. Por eso el folicular da ganglios con poca frecuencia y metástasis óseas con más frecuencia.",
   "por_que_no": {
    "a": "No explica una metástasis en la columna.",
    "b": "La diseminación linfática es la del papilar; el folicular afecta ganglios rara vez.",
    "d": "Una lesión vertebral a distancia no se explica por extensión directa."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 25: «El papilar se disemina preferentemente por vía linfática al compartimento central y a los laterales; el folicular, por vía hematógena a hueso y pulmón»; factores de riesgo, «déficit de yodo (asociado al folicular)». P. 26: «El papilar afecta ganglios con mucha frecuencia; el folicular, rara vez».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26."
   ]
  },
  {
   "id": "ESP1-C-025",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Nódulo tiroideo",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 181)",
   "enunciado": "Mujer de 42 años con nódulo tiroideo de 3 cm. La BAAF informa «neoplasia folicular» (Bethesda IV). La paciente pregunta si es cáncer. ¿Qué le responde el docente y qué conducta propone?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Es benigno: basta con controles ecográficos anuales"
    },
    {
     "id": "b",
     "texto": "Es un carcinoma confirmado: necesita yodo radiactivo sin cirugía"
    },
    {
     "id": "c",
     "texto": "Repetir la BAAF cada 3 meses hasta que salga negativa"
    },
    {
     "id": "d",
     "texto": "La citología no distingue adenoma de carcinoma; lobectomía diagnóstica"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "neoplasia folicular",
   "por_que_correcta": "El criterio de malignidad del carcinoma folicular es la invasión de la cápsula o de los vasos, que solo se ve en la pieza completa: por eso la citología no lo distingue del adenoma. Ante una neoplasia folicular (Bethesda IV), el algoritmo del docente considera la lobectomía o la tiroidectomía total para el diagnóstico y tratamiento definitivo, o el estudio molecular.",
   "por_que_no": {
    "a": "Bethesda IV no es benigno: tiene riesgo de malignidad y necesita diagnóstico.",
    "b": "No hay diagnóstico de cáncer, y el yodo se usa después de la tiroidectomía, no en lugar de la cirugía.",
    "c": "Repetir la punción no resuelve el problema: la citología no ve la invasión capsular."
   },
   "fuentes": {
    "docente": "Diapositiva 181 del Dr. Yan Quiroz (algoritmo THYR-1): «Neoplasia folicular u oncocítica (Bethesda IV)… Considerar lobectomía o tiroidectomía total para diagnóstico / tratamiento definitivo… Considerar diagnóstico molecular». Diaps. 175-180: clasificación citopatológica de Bethesda.",
    "guia": "Guía, p. 25: «la citología no puede distinguir un adenoma folicular de un carcinoma folicular, porque el criterio de malignidad es la invasión de la cápsula o de los vasos, algo que solo se ve en la pieza quirúrgica completa».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 181.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 180.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-C-026",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Extensión de la cirugía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 184)",
   "enunciado": "Varón de 45 años con carcinoma papilar de 2 cm y una adenopatía yugular del mismo lado cuya punción confirma metástasis. ¿Qué cirugía corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tiroidectomía total con disección lateral"
    },
    {
     "id": "b",
     "texto": "Yodo radiactivo sin cirugía previa"
    },
    {
     "id": "c",
     "texto": "Vigilancia activa con ecografía"
    },
    {
     "id": "d",
     "texto": "Lobectomía con istmectomía del lado afectado"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "cuya punción confirma metástasis",
   "por_que_correcta": "En el algoritmo del docente, la metástasis ganglionar cervical lateral es una de las indicaciones de tiroidectomía total, junto con las metástasis a distancia, la extensión extratiroidea y el carcinoma poco diferenciado. La disección lateral del cuello es terapéutica, porque hay ganglios confirmados.",
   "por_que_no": {
    "b": "El yodo radiactivo complementa a la tiroidectomía; no la reemplaza.",
    "c": "La vigilancia activa se reserva para microcarcinomas de muy bajo riesgo.",
    "d": "La lobectomía solo es opción cuando no hay ganglios, metástasis ni extensión extratiroidea."
   },
   "fuentes": {
    "docente": "Diapositiva 184 del Dr. Yan Quiroz (PAP-1): «Indicaciones para tiroidectomía total (CUALQUIERA presente): 1. Metástasis a distancia conocida; 2. Extensión extratiroidea; 3. Metástasis ganglionar cervical lateral o metástasis ganglionar de cuello central grosera; 4. Carcinoma pobremente diferenciado y diferenciado de alto grado; 5. Considerar historia de radiación previa; 6. Considerar nodularidad bilateral o tumores > 4 cm». Diap. 77: «Disección radical de cuello, en casos N1».",
    "guia": "Guía, p. 26: «Disección lateral del cuello: únicamente terapéutica, ante enfermedad ganglionar lateral confirmada — nunca profiláctica»; vigilancia activa en microcarcinomas de muy bajo riesgo (p. 25).",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 184.",
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 77.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 25."
   ]
  },
  {
   "id": "ESP1-C-027",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Extensión de la cirugía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 26)",
   "enunciado": "Mujer de 38 años con carcinoma papilar de 1,8 cm, sin ganglios en la ecografía ni en la exploración. El residente propone añadir una disección lateral del cuello «por si acaso». ¿Qué responde la guía?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Sustituye a la tiroidectomía total en estos casos"
    },
    {
     "id": "b",
     "texto": "Debe hacerse si el tumor mide más de 1 cm de diámetro"
    },
    {
     "id": "c",
     "texto": "Solo es terapéutica, ante ganglios laterales confirmados"
    },
    {
     "id": "d",
     "texto": "Es obligatoria en todo carcinoma papilar de tiroides"
    }
   ],
   "correcta": "c",
   "tipo_clave": "guía",
   "dato_clave": "sin ganglios en la ecografía ni en la exploración",
   "por_que_correcta": "La guía distingue tres conceptos: disección terapéutica (hay ganglios confirmados, siempre indicada), central profiláctica (sin ganglios evidentes, hoy restringida) y lateral profiláctica, que no se hace nunca. Añadirla sin ganglios solo aumenta la morbilidad.",
   "por_que_no": {
    "a": "La disección ganglionar complementa a la cirugía del tiroides; no la sustituye.",
    "b": "El tamaño del tumor no indica una disección lateral profiláctica.",
    "d": "Sin ganglios clínicos ni ecográficos no está indicada."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 26: «Disección lateral del cuello: únicamente terapéutica, ante enfermedad ganglionar lateral confirmada — nunca profiláctica»; ganglios: «terapéutica (hay ganglios confirmados; siempre indicada), profiláctica central (no hay ganglios evidentes; discutida y hoy restringida) y lateral profiláctica (no se hace nunca)».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 26."
   ]
  },
  {
   "id": "ESP1-C-028",
   "especialidad": "esp1",
   "tema": "Cabeza y cuello y tiroides",
   "subtema": "Epidemiología",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Patología tiroidea (diap. 59)",
   "enunciado": "En la consulta de cirugía de cabeza y cuello, el docente pregunta cuál es el carcinoma de tiroides más frecuente y qué proporción representa aproximadamente.",
   "alternativas": [
    {
     "id": "a",
     "texto": "Medular, alrededor del 50 %"
    },
    {
     "id": "b",
     "texto": "Folicular, alrededor del 80 %"
    },
    {
     "id": "c",
     "texto": "Anaplásico, alrededor del 20 %"
    },
    {
     "id": "d",
     "texto": "Papilar, alrededor del 80 %"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "el carcinoma de tiroides más frecuente",
   "por_que_correcta": "En la diapositiva del docente: papilar 80 %, folicular 10 %, medular 3-5 %, oncocítico 2-4 % y anaplásico 1-2 %. La guía añade que el papilar es muy frecuente y poco letal, y que por eso la tendencia moderna es hacer menos cirugía.",
   "por_que_no": {
    "a": "El medular es el 3-5 %.",
    "b": "El folicular es alrededor del 10 %.",
    "c": "El anaplásico es el 1-2 %."
   },
   "fuentes": {
    "docente": "Diapositiva 59 del Dr. Yan Quiroz, «Frecuencia relativa de tumores tiroideos»: «Papilar 80 %; folicular 10 %; medular 3-5 %; oncocítico 2-4 %; anaplásico 1-2 %; linfoma < 5 %».",
    "guia": "Guía, p. 24: «el carcinoma papilar es muy frecuente y muy poco letal, así que la tendencia moderna es hacer menos, no más».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Patología tiroidea [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 59.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 24."
   ]
  },
  {
   "id": "ESP1-C-029",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma basocelular (diaps. 5, 6 y 8)",
   "enunciado": "Varón de 66 años, agricultor, con una placa eritematosa y descamativa de 2 cm en la espalda, de aspecto psoriasiforme, que no mejora con cremas. La biopsia confirma un carcinoma basocelular. ¿Qué variante clínica es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nodular"
    },
    {
     "id": "b",
     "texto": "Fibroepitelioma de Pinkus"
    },
    {
     "id": "c",
     "texto": "Morfeiforme o esclerosante"
    },
    {
     "id": "d",
     "texto": "Superficial"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "placa eritematosa y descamativa",
   "por_que_correcta": "La variante superficial (9-11 %) se presenta como una placa eritematoescamosa de tipo psoriasiforme, en tronco y extremidades. La nodular, la más frecuente (50-54 %), es una pápula o placa de bordes perlados con telangiectasias.",
   "por_que_no": {
    "a": "La nodular es una pápula o placa perlada con telangiectasias, a menudo en la cara.",
    "b": "El fibroepitelioma de Pinkus es una lesión papular sésil de superficie verrugosa, en región lumbosacra, ingles o muslos.",
    "c": "La morfeiforme es una placa esclerótica y blanquecina, sin ulceración."
   },
   "fuentes": {
    "docente": "Diapositivas de Carcinoma basocelular del Dr. Yan Quiroz: diap. 5, nodular 50-54 %, «pápula (< 1 cm) o placa (> 1 cm), de bordes céreos o perlados, con telangiectasias»; diap. 6, «Superficial 9 %-11 %: placa eritemato-escamosa, tipo psoriasiforme; tronco y extremidades»; diap. 8, morfeiforme o esclerosante 2 %, «placa esclerótica, blanquecina… sin ulceraciones»; diap. 9, fibroepitelioma de Pinkus.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 6.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 5.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 8.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 9."
   ]
  },
  {
   "id": "ESP1-C-030",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma basocelular (diap. 8)",
   "enunciado": "Mujer de 58 años con una placa blanquecina, indurada y de bordes mal definidos en la mejilla, con telangiectasias y sin ulceración. La biopsia muestra un carcinoma basocelular. ¿Qué variante es y por qué preocupa?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nodular: la más frecuente y de bajo riesgo"
    },
    {
     "id": "b",
     "texto": "Superficial: la de mejor pronóstico, se trata con cremas"
    },
    {
     "id": "c",
     "texto": "Morfeiforme: sus bordes reales superan lo visible"
    },
    {
     "id": "d",
     "texto": "Pigmentada: se confunde con un melanoma"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "sin ulceración",
   "por_que_correcta": "La placa esclerótica, blanquecina y mal delimitada, sin ulceración, es la variante morfeiforme o esclerosante (2 % en la diapositiva del docente). La guía explica que es la de peor pronóstico local porque crece de forma infiltrante y sus bordes reales superan lo visible; por eso es un subtipo de alto riesgo.",
   "por_que_no": {
    "a": "La nodular es perlada y suele ulcerarse en el centro.",
    "b": "La superficial es una placa eritematoescamosa, no esclerótica.",
    "d": "La pigmentada es marrón o negra, no blanquecina."
   },
   "fuentes": {
    "docente": "Diapositiva 8 de Carcinoma basocelular del Dr. Yan Quiroz: «CBC morfeiforme o esclerosante 2 %: placa esclerótica, blanquecina, con telangiectasias. Sin ulceraciones». Diap. 7: pigmentado, «marrón o negra (moteado)». Diap. 12: patrón de crecimiento agresivo y bordes pobremente definidos como alto riesgo de recurrencia.",
    "guia": "Guía, p. 12-13: forma esclerosante o morfeiforme, «placa blanquecina, indurada, mal delimitada — es la de peor pronóstico local porque sus bordes reales van mucho más allá de lo visible».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 8.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 7.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 12.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 13."
   ]
  },
  {
   "id": "ESP1-C-031",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma basocelular (diaps. 29 y 32)",
   "enunciado": "Varón de 80 años con un carcinoma basocelular recidivado de la región orbitaria, localmente avanzado, que no puede resecarse sin una mutilación grave y no es candidato a radioterapia. ¿Qué tratamiento sistémico muestra el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Yodo radiactivo en dosis ablativa"
    },
    {
     "id": "b",
     "texto": "Tamoxifeno (modulador estrogénico)"
    },
    {
     "id": "c",
     "texto": "Interferón alfa en dosis altas"
    },
    {
     "id": "d",
     "texto": "Vismodegib (inhibidor de Hedgehog)"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "no es candidato a radioterapia",
   "por_que_correcta": "En el basocelular localmente avanzado, cuando la cirugía o la radioterapia no son factibles, se plantea la terapia sistémica. El docente muestra el vismodegib, que inhibe de forma selectiva la vía Hedgehog (receptor Patched y proteína Smoothened), alterada en este tumor.",
   "por_que_no": {
    "a": "El yodo radiactivo se usa en el carcinoma diferenciado de tiroides.",
    "b": "El tamoxifeno es hormonoterapia del cáncer de mama.",
    "c": "El interferón se ha usado en melanoma, no en el basocelular."
   },
   "fuentes": {
    "docente": "Diapositiva 29 de Carcinoma basocelular del Dr. Yan Quiroz (CBC avanzado): «Si la cirugía y/o RT no son factibles entonces terapia sistémica». Diap. 32: «Ptch receptor de membrana… Smo… Inhibidor Sonic hedgehog (Shh): Vismodegib. Inhibidor selectivo de la vía de la señalización Hedgehog».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 29.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 32."
   ]
  },
  {
   "id": "ESP1-C-032",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma basocelular (diap. 35)",
   "enunciado": "Joven de 24 años con síndrome de nevus basocelular (Gorlin) y múltiples carcinomas basocelulares en la cara. ¿Qué tratamiento está contraindicado según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Cirugía micrográfica de Mohs"
    },
    {
     "id": "b",
     "texto": "Escisión quirúrgica con evaluación de márgenes"
    },
    {
     "id": "c",
     "texto": "Curetaje y electrodesecación en lesiones de bajo riesgo"
    },
    {
     "id": "d",
     "texto": "Radioterapia"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "síndrome de nevus basocelular (Gorlin)",
   "por_que_correcta": "El docente señala que la radioterapia está contraindicada en las condiciones genéticas que predisponen al cáncer de piel, como el síndrome de nevus basocelular, y es relativamente contraindicada en enfermedades del tejido conectivo como la esclerodermia. Estos pacientes necesitan vigilancia estrecha.",
   "por_que_no": {
    "a": "Mohs es útil en la cara y ahorra tejido sano.",
    "b": "La cirugía con margen es el tratamiento habitual.",
    "c": "Es una opción para lesiones de bajo riesgo en la guía del docente."
   },
   "fuentes": {
    "docente": "Diapositiva 35 de Carcinoma basocelular del Dr. Yan Quiroz: «La radioterapia está contraindicada en condiciones genéticas predisponentes al cáncer de piel (por ejemplo, síndrome de nevus de células basales) y relativamente contraindicado para pacientes con enfermedades del tejido conectivo (p. e. esclerodermia)». Diap. 34: síndrome de Gorlin y xeroderma pigmentoso, mayor vigilancia. Diap. 27: curetaje y electrodesecación en el bajo riesgo.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 35.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 34.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 27."
   ]
  },
  {
   "id": "ESP1-C-033",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma basocelular (diap. 27)",
   "enunciado": "Mujer de 62 años con carcinoma basocelular nodular de 1,2 cm en la mejilla, de bajo riesgo, al que se hace escisión estándar con margen clínico de 4 mm. El defecto requerirá un colgajo. ¿Cuándo debe hacerse la reconstrucción con colgajo?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Después de 6 meses de radioterapia"
    },
    {
     "id": "b",
     "texto": "En el mismo acto, antes de tener el informe de márgenes"
    },
    {
     "id": "c",
     "texto": "Nunca: todo defecto facial cierra por segunda intención"
    },
    {
     "id": "d",
     "texto": "Tras confirmar márgenes libres en la pieza"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "El defecto requerirá un colgajo",
   "por_que_correcta": "En la escisión estándar con margen de 4 mm y evaluación posoperatoria del margen, el docente advierte que la reorganización del tejido (colgajo, reconstrucción, socavación extensa) no debe hacerse hasta identificar márgenes libres. Si se rota un colgajo sobre un margen positivo, el tumor residual queda escondido bajo el tejido movilizado.",
   "por_que_no": {
    "a": "La radioterapia no es un paso previo obligado a la reconstrucción.",
    "b": "Rotar el colgajo antes de conocer los márgenes puede dejar tumor bajo el tejido movilizado.",
    "c": "La segunda intención, el cierre lineal o el injerto son aceptables, pero no son la única opción."
   },
   "fuentes": {
    "docente": "Diapositiva 27 de Carcinoma basocelular del Dr. Yan Quiroz (bajo riesgo): «ESCISIÓN ESTÁNDAR con márgenes clínicos de 4 mm y evaluación de márgenes postoperatorio. La reorganización del tejido (p. ej., colgajo, reconstrucción, socavación extensa) no debe realizarse hasta que se identifiquen márgenes claros (la curación por segunda intención…)». Diap. 41: colgajo bilobulado para defectos nasales < 1,5 cm.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 27.",
    "Yan Quiroz EF. Carcinoma basocelular [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 41."
   ]
  },
  {
   "id": "ESP1-C-034",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma basocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 13)",
   "enunciado": "Varón de 72 años con un carcinoma basocelular nodular de 1,5 cm en el ala nasal, sin adenopatías. El interno pregunta si se hará biopsia de ganglio centinela. ¿Qué responde la guía?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Sí, si la lesión mide más de 1 cm de diámetro"
    },
    {
     "id": "b",
     "texto": "No: la metástasis ganglionar es excepcional"
    },
    {
     "id": "c",
     "texto": "Solo si se usa cirugía de Mohs para la resección"
    },
    {
     "id": "d",
     "texto": "Sí: se hace en todo cáncer de piel facial"
    }
   ],
   "correcta": "b",
   "tipo_clave": "guía",
   "dato_clave": "sin adenopatías",
   "por_que_correcta": "El basocelular es local y destructivo, pero casi nunca metastatiza. Por eso no se hace linfadenectomía ni ganglio centinela: no aportarían beneficio y sí morbilidad. Todo el manejo gira en torno a lograr un margen completo.",
   "por_que_no": {
    "a": "El tamaño no cambia que la metástasis ganglionar sea excepcional.",
    "c": "Mohs controla el margen; no tiene relación con el estudio ganglionar.",
    "d": "El centinela se usa en melanoma y, de forma seleccionada, en el epidermoide de muy alto riesgo; no en el basocelular."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 13: «No se realiza linfadenectomía ni ganglio centinela… la metástasis ganglionar es excepcional, por lo que un vaciamiento solo añadiría morbilidad sin beneficio». P. 12: «invade y erosiona en profundidad, pero prácticamente no metastatiza». P. 16: en el epidermoide, el centinela es «una opción seleccionada en tumores de muy alto riesgo».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 13.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 12.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 16."
   ]
  },
  {
   "id": "ESP1-C-035",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (pp. 15-16)",
   "enunciado": "Varón de 58 años con una cicatriz de quemadura en la pierna desde la infancia. Desde hace meses tiene allí una úlcera que no cicatriza, de bordes indurados y sobreelevados, que sangra con facilidad. ¿Cuál es el diagnóstico más probable?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Queloide infectado sobre la cicatriz"
    },
    {
     "id": "b",
     "texto": "Melanoma de extensión superficial"
    },
    {
     "id": "c",
     "texto": "Carcinoma epidermoide sobre cicatriz (úlcera de Marjolin)"
    },
    {
     "id": "d",
     "texto": "Carcinoma basocelular superficial ulcerado"
    }
   ],
   "correcta": "c",
   "tipo_clave": "guía",
   "dato_clave": "cicatriz de quemadura",
   "por_que_correcta": "Las lesiones crónicas como la cicatriz de quemadura, la úlcera crónica o la fístula pueden dar origen a un carcinoma epidermoide: es la úlcera de Marjolin. La guía la incluye entre las lesiones que hay que conocer, junto a la queratosis actínica y la enfermedad de Bowen.",
   "por_que_no": {
    "a": "Una úlcera que no cicatriza sobre una cicatriz crónica debe biopsiarse para descartar malignidad.",
    "b": "El melanoma es una lesión pigmentada.",
    "d": "El basocelular superficial es una placa eritematoescamosa, no una úlcera indurada sobre una cicatriz."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 15: factores de riesgo del epidermoide, «lesiones crónicas: cicatriz de quemadura, úlcera crónica y fístula (úlcera de Marjolin)»; «placa o nódulo eritematoso, indurado… que puede ulcerarse y sangrar». P. 16: imprescindible, «Lesiones precursoras: queratosis actínica y enfermedad de Bowen (carcinoma in situ). Úlcera de Marjolin».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 15.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 16."
   ]
  },
  {
   "id": "ESP1-C-036",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma epidermoide (diap. 21)",
   "enunciado": "Mujer de 55 años con carcinoma epidermoide de 1,5 cm en el antebrazo, bien diferenciado y de bajo riesgo. ¿Qué margen clínico recomienda el docente en la escisión estándar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No requiere margen: basta con el curetaje"
    },
    {
     "id": "b",
     "texto": "1-3 mm"
    },
    {
     "id": "c",
     "texto": "2 cm"
    },
    {
     "id": "d",
     "texto": "4-6 mm"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "bien diferenciado y de bajo riesgo",
   "por_que_correcta": "Para el carcinoma epidermoide de bajo riesgo, el docente indica escisión estándar con márgenes clínicos de 4-6 mm y evaluación posoperatoria de los márgenes, sin reconstruir con colgajo hasta confirmar que están libres. La guía recuerda que el margen es mayor que en el basocelular, porque este tumor sí metastatiza.",
   "por_que_no": {
    "a": "El curetaje no sustituye a la escisión cuando el tumor puede extenderse a la dermis.",
    "b": "1-3 mm es el margen de la biopsia escisional de una lesión sospechosa de melanoma.",
    "c": "2 cm es un margen de melanoma grueso, no de un epidermoide de bajo riesgo."
   },
   "fuentes": {
    "docente": "Diapositiva 21 de Carcinoma epidermoide del Dr. Yan Quiroz (bajo riesgo): «ESCISIÓN ESTÁNDAR con márgenes clínicos de 4-6 mm y evaluación de los márgenes en el postoperatorio. La reorganización del tejido (p. ej., colgajo…) no debe realizarse hasta que se identifiquen márgenes claros». Diap. 132 de Melanoma: biopsia escisional con márgenes de 1-3 mm.",
    "guia": "Guía, p. 16: «Escisión local amplia con márgenes mayores que en el basocelular, ajustados al riesgo».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 21.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 132.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 16."
   ]
  },
  {
   "id": "ESP1-C-037",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma epidermoide (diaps. 8 y 9)",
   "enunciado": "Niño de 8 años con quemaduras graves tras exposiciones cortas al sol, pecas desde antes de los 2 años y ya varios carcinomas epidermoides en la cara. Sus padres son primos. ¿Qué defecto explica la enfermedad?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Infección crónica por virus del papiloma humano"
    },
    {
     "id": "b",
     "texto": "Mutación del gen supresor de la vía Hedgehog (síndrome de Gorlin)"
    },
    {
     "id": "c",
     "texto": "Xeroderma pigmentoso: falla la reparación del ADN dañado por UV"
    },
    {
     "id": "d",
     "texto": "Inmunosupresión por trasplante de órgano sólido"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "pecas desde antes de los 2 años",
   "por_que_correcta": "El xeroderma pigmentoso es una enfermedad autosómica recesiva (de ahí la consanguinidad) con sensibilidad extrema a la luz ultravioleta: pecas antes de los 2 años y quemaduras tras exposiciones cortas. Su defecto es la reparación por escisión de nucleótidos, que no corrige los dímeros de timina que produce la radiación UV.",
   "por_que_no": {
    "a": "No explica la fotosensibilidad extrema desde la infancia.",
    "b": "El Gorlin produce múltiples basocelulares, no esta fotosensibilidad extrema con pecas precoces.",
    "d": "No hay antecedente de trasplante."
   },
   "fuentes": {
    "docente": "Diapositiva 8 de Carcinoma epidermoide del Dr. Yan Quiroz: «Xeroderma pigmentoso: sensibilidad extrema a cambios inducidos por los rayos ultravioleta… aparición temprana de pecas (efélides) (antes de los 2 años de edad)… quemaduras severas tras una corta exposición al sol». Diap. 9: «asociada con un defecto en el mecanismo de reparación del ADN dañado por la luz ultravioleta, concretamente la reparación por escisión de nucleótido (NER)… formación de los dímeros de timina… enfermedad autosómica recesiva».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 8.",
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 9."
   ]
  },
  {
   "id": "ESP1-C-038",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma epidermoide (diaps. 10 y 15)",
   "enunciado": "Varón de 52 años con trasplante renal hace 10 años, que desarrolla con rapidez múltiples carcinomas epidermoides agresivos en el dorso de las manos y la cara. Además de tratar cada lesión, ¿qué medida considera la guía del docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Suspender toda la inmunosupresión de inmediato sin consultar"
    },
    {
     "id": "b",
     "texto": "Indicar radioterapia corporal total de forma preventiva"
    },
    {
     "id": "c",
     "texto": "Ajustar la inmunosupresión junto con el equipo de trasplante"
    },
    {
     "id": "d",
     "texto": "No hay medida adicional posible fuera de la cirugía"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "trasplante renal hace 10 años",
   "por_que_correcta": "Los receptores de trasplante son pacientes de alto riesgo de múltiples carcinomas epidermoides agresivos. El docente indica que, cuando el cáncer amenaza la vida o aparecen muchos tumores con rapidez, puede considerarse reducir la terapia inmunosupresora o incorporar inhibidores mTOR, con manejo multidisciplinario.",
   "por_que_no": {
    "a": "La decisión se toma con el equipo de trasplante; suspender sin control arriesga el injerto.",
    "b": "No es una medida que plantee el docente.",
    "d": "La modificación de la inmunosupresión es justamente la medida adicional."
   },
   "fuentes": {
    "docente": "Diapositiva 10 de Carcinoma epidermoide del Dr. Yan Quiroz: pacientes de alto riesgo, «receptores de trasplante de órganos». Diap. 15: «En receptores de órganos transplantados, la disminución del nivel de terapia inmunosupresora y/o la incorporación de inhibidores mTOR pueden considerarse en casos de que el cáncer de piel amenaza la vida o hay rápido desarrollo de múltiples tumores… consulta del tablero del tumor multidisciplinario».",
    "guia": "Guía, p. 15: «La inmunosupresión acelera todo el proceso… por eso los trasplantados desarrollan tumores múltiples y más agresivos».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 15.",
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 10.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 15."
   ]
  },
  {
   "id": "ESP1-C-039",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Carcinoma epidermoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma epidermoide (diap. 12)",
   "enunciado": "Varón de 70 años con múltiples lesiones ásperas y eritematosas en el dorso de las manos y la frente, diagnosticadas como queratosis actínicas. ¿Qué tratamiento tópico prefiere el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ninguno: la queratosis actínica no se trata"
    },
    {
     "id": "b",
     "texto": "5-fluorouracilo tópico"
    },
    {
     "id": "c",
     "texto": "Corticoide tópico de alta potencia"
    },
    {
     "id": "d",
     "texto": "Antibiótico tópico"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "queratosis actínicas",
   "por_que_correcta": "La queratosis actínica es un precáncer del epidermoide y, según el docente, debe tratarse en primer lugar. Entre las modalidades, el 5-fluorouracilo tópico es el preferido (con o sin calcipotriol); también se usan crioterapia, imiquimod, terapia fotodinámica y curetaje. Las lesiones atípicas o que no responden se biopsian.",
   "por_que_no": {
    "a": "El docente indica tratarla, porque es la lesión precursora del epidermoide.",
    "c": "Los corticoides no tratan una lesión precancerosa.",
    "d": "No hay infección."
   },
   "fuentes": {
    "docente": "Diapositiva 12 de Carcinoma epidermoide del Dr. Yan Quiroz, «Tratamiento de precánceres»: «La queratosis actínica debería ser tratada en primer lugar… Las modalidades de tratamiento incluyen: crioterapia, 5 fluorouracilo tópico (preferido) con o sin calcipotriol, imiquimod tópico, tirbanibulina tópica, terapia fotodinámica, curetaje y electrodisecación».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma epidermoide de piel [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 12."
   ]
  },
  {
   "id": "ESP1-C-040",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Melanoma cutáneo (diap. 63)",
   "enunciado": "Varón de 48 años con un nódulo negro azulado de 1 cm en la espalda que apareció hace 4 meses y crece rápido. La biopsia confirma un melanoma nodular. ¿Por qué es el subtipo más agresivo?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nunca se ulcera ni sangra"
    },
    {
     "id": "b",
     "texto": "Solo tiene fase de crecimiento radial"
    },
    {
     "id": "c",
     "texto": "Solo tiene fase de crecimiento vertical"
    },
    {
     "id": "d",
     "texto": "Aparece siempre sobre un nevo congénito"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "crece rápido",
   "por_que_correcta": "El docente describe dos fases: la radial, en la que el melanoma crece en superficie durante años y tiene escasa capacidad de metastatizar, y la vertical, de invasión en profundidad, asociada a la capacidad de metastatizar. El melanoma nodular solo tiene fase vertical; el lentigo maligno melanoma, el de extensión superficial y el lentiginoso acral tienen las dos.",
   "por_que_no": {
    "a": "El nodular puede ulcerarse; la ulceración empeora el pronóstico.",
    "b": "Es al revés: el nodular carece de fase radial.",
    "d": "No es la razón de su agresividad."
   },
   "fuentes": {
    "docente": "Diapositiva 63 de Melanoma del Dr. Yan Quiroz, «Formas de crecimiento»: «A) Fase de crecimiento radial… escasa capacidad de metastatizar… B) Fase de crecimiento vertical. Es la invasión focal en profundidad. Asociada a la capacidad de metastatizar. El melanoma nodular solo tiene esta fase. Los otros 3 (MLM, MES y MLA) tienen las dos fases».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 63."
   ]
  },
  {
   "id": "ESP1-C-041",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Melanoma cutáneo (diaps. 53-55)",
   "enunciado": "Mujer de 40 años con un lunar del brazo que, según ella, «antes era más pequeño y de un solo color». Mide 5 mm y es simétrico. ¿Qué signo del sistema ABCDE considera el docente el más importante?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La asimetría"
    },
    {
     "id": "b",
     "texto": "La evolución (el cambio)"
    },
    {
     "id": "c",
     "texto": "El diámetro mayor de 6 mm"
    },
    {
     "id": "d",
     "texto": "El color uniforme"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "antes era más pequeño y de un solo color",
   "por_que_correcta": "El docente insiste en que el signo más importante de melanoma es el cambio en tamaño, forma o color de un nevo, porque algunos melanomas no encajan en el resto del ABCDE: esta lesión mide menos de 6 mm y es simétrica, pero ha cambiado.",
   "por_que_no": {
    "a": "Esta lesión es simétrica; la asimetría no es lo que alerta aquí.",
    "c": "Muchos melanomas miden 6 mm o más, pero esta lesión no llega y aun así es sospechosa por su cambio.",
    "d": "El color uniforme es propio del nevo, no un signo de melanoma."
   },
   "fuentes": {
    "docente": "Diapositiva 53 de Melanoma del Dr. Yan Quiroz: sistema ABCDE (asimetría, bordes irregulares, color variado, diámetro a menudo de 6 mm o más, evolución). Diap. 55: «El más importante signo de melanoma es un CAMBIO en tamaño, forma o color de un nevus, ya que algunos melanomas no encajan en el sistema ABCDE descrito». Diap. 54: lunar ordinario simétrico, de color uniforme.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 55.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 53.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 54."
   ]
  },
  {
   "id": "ESP1-C-042",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Melanoma cutáneo (diap. 132)",
   "enunciado": "Varón de 45 años con una lesión pigmentada de 7 mm en la espalda, sospechosa de melanoma. ¿Qué biopsia prefiere el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia por afeitado superficial"
    },
    {
     "id": "b",
     "texto": "Biopsia escisional con márgenes de 1-3 mm"
    },
    {
     "id": "c",
     "texto": "Escisión directa con margen amplio de 2 cm"
    },
    {
     "id": "d",
     "texto": "Punción aspirativa con aguja fina"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "sospechosa de melanoma",
   "por_que_correcta": "El docente prefiere la biopsia escisional (elíptica, punzante o por saucerización) con márgenes de 1-3 mm y evita márgenes más amplios para permitir después un mapeo linfático exacto. La orientación se planifica para la escisión amplia definitiva, por ejemplo paralela a los linfáticos.",
   "por_que_no": {
    "a": "El afeitado puede comprometer el diagnóstico y la medición completa del Breslow.",
    "c": "Un margen amplio antes del diagnóstico altera el drenaje y compromete el mapeo linfático.",
    "d": "La citología no mide el espesor de Breslow."
   },
   "fuentes": {
    "docente": "Diapositiva 132 de Melanoma del Dr. Yan Quiroz: «Se prefiere la biopsia escisional (elíptica, punzante o de saucerización) con márgenes de 1-3 mm. Evitar márgenes más amplios para permitir posteriormente un mapeo linfático exacto. La orientación de la biopsia debe planificarse con una escisión amplia definitivamente (por ejemplo, paralela a los linfáticos)… La biopsia de afeitado puede comprometer el diagnóstico patológico y la evaluación completa del grosor de Breslow».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 132."
   ]
  },
  {
   "id": "ESP1-C-043",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Melanoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Melanoma cutáneo (diaps. 72 y 89)",
   "enunciado": "Mujer de 50 años con melanoma de extensión superficial en la pierna: Breslow de 1,5 mm, sin ulceración, sin ganglios palpables. ¿Qué conducta ganglionar indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ofrecer biopsia de ganglio centinela"
    },
    {
     "id": "b",
     "texto": "Solo observación clínica de la ingle"
    },
    {
     "id": "c",
     "texto": "No hacer biopsia de ganglio centinela, porque el riesgo es menor del 5 %"
    },
    {
     "id": "d",
     "texto": "Linfadenectomía inguinal completa de entrada"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "Breslow de 1,5 mm, sin ulceración",
   "por_que_correcta": "Un melanoma de más de 1 mm y hasta 2 mm sin ulceración es T2a (estadio IB). En el cuadro del docente, para el estadio IB (T2a) o II la probabilidad de centinela positivo es mayor del 10 % y se debe discutir y ofrecer la biopsia. En el T1a (< 0,8 mm sin ulceración) es menor del 5 % y no se recomienda.",
   "por_que_no": {
    "b": "Con más de 10 % de probabilidad de centinela positivo, se ofrece la biopsia.",
    "c": "Eso corresponde al T1a (< 0,8 mm sin ulceración y sin otros factores adversos).",
    "d": "Sin ganglios clínicos no se vacía la ingle de entrada; primero se estadifica con el centinela."
   },
   "fuentes": {
    "docente": "Diapositiva 89 de Melanoma del Dr. Yan Quiroz, «Indicaciones de ganglio centinela»: T1a (< 0,8 mm sin ulceración ni otros factores adversos), < 5 %, no se recomienda; T1b, 5-10 %, discutir y considerar; «estadio IB (T2a) o II (T2b y superior), > 10 %, discutir y ofrecer BGC». Diap. 72: categorías T por espesor y ulceración.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 89.",
    "Yan Quiroz EF. Melanoma cutáneo [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 72."
   ]
  },
  {
   "id": "ESP1-C-044",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diaps. 14 y 23)",
   "enunciado": "Varón de 42 años con una masa indolora de 7 cm en la cara anterior del muslo, que crece desde hace 2 meses. ¿Qué conducta indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Extirparla enucleándola por su pseudocápsula, como un lipoma"
    },
    {
     "id": "b",
     "texto": "Tratarla como sarcoma y hacer biopsia con aguja gruesa"
    },
    {
     "id": "c",
     "texto": "Observar 6 meses y repetir la ecografía de control"
    },
    {
     "id": "d",
     "texto": "Biopsia incisional transversal amplia con colgajos y drenaje"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "masa indolora de 7 cm",
   "por_que_correcta": "El docente da un axioma: toda masa de más de 5 cm en tejidos blandos por más de 5 semanas es un sarcoma hasta que no se demuestre lo contrario, y amerita biopsia. Lo ideal de inicio es la biopsia con aguja gruesa, guiada por ecografía, sobre la masa, con incisión longitudinal en el sentido de las fibras musculares, sin colgajos ni drenes.",
   "por_que_no": {
    "a": "Enuclear por la pseudocápsula es una resección marginal, con recurrencia local del 90 % según Enneking.",
    "c": "El axioma del docente obliga a biopsiar, no a observar.",
    "d": "La incisión transversal, los colgajos y los drenes contaminan más planos y complican la cirugía definitiva."
   },
   "fuentes": {
    "docente": "Diapositiva 14 de Sarcoma de partes blandas del Dr. Yan Quiroz: «toda masa > 5 cm por más de 5 semanas en tejidos blandos es un sarcoma, hasta que no se demuestre lo contrario. Por tal razón amerita biopsia. Biopsia core (incisional)… bajo guía ecográfica… no altera planos anatómicos… La incisión en el sentido de las fibras musculares… Sin disección de colgajos. No dejar drenes». Diap. 23: «IMPORTANTE PLANIFICAR LA BIOPSIA… Incisión longitudinal. Biopsia con aguja gruesa (IDEAL de inicio)». Diap. 40: resección marginal (enucleación), recurrencia local 90 %.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 14.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 23.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 40."
   ]
  },
  {
   "id": "ESP1-C-045",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diap. 40)",
   "enunciado": "Un cirujano extirpa un sarcoma del muslo pasando por la pseudocápsula, sin dejar tejido sano alrededor. Según la clasificación de Enneking del docente, ¿qué tipo de resección es y qué recurrencia local se espera?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección marginal, con recurrencia cercana al 90 %"
    },
    {
     "id": "b",
     "texto": "Resección radical o compartimentectomía, con recurrencia del 15 %"
    },
    {
     "id": "c",
     "texto": "Resección local amplia, con recurrencia del 15 %"
    },
    {
     "id": "d",
     "texto": "Resección intralesional, sin recurrencia"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "pasando por la pseudocápsula",
   "por_que_correcta": "Enneking clasifica las resecciones: intralesional (se abre la pseudocápsula; 100 % de recurrencia), marginal o enucleación (por la zona reactiva; 90 %), local amplia (fuera de las metástasis satélite, con al menos 2 cm de tejido sano; 50 % sin radioterapia) y radical o compartimentectomía (todos los músculos del compartimento; 15 %).",
   "por_que_no": {
    "b": "La compartimentectomía reseca todo el compartimento muscular.",
    "c": "La resección local amplia deja tejido sano alrededor y su recurrencia sin radioterapia es del 50 %.",
    "d": "La intralesional abre el tumor y recidiva en el 100 %."
   },
   "fuentes": {
    "docente": "Diapositiva 40 de Sarcoma de partes blandas del Dr. Yan Quiroz, «Márgenes de resección: clasificación de Enneking»: «Resección intralesional… 100 % de recurrencia. Resección marginal (enucleación): se hace por la zona reactiva. Recurrencia local: 90 %. Resección local amplia: … requiere como mínimo 2 cm de margen de tejido sano. Recurrencia: 50 % sin radioterapia. Resección radical o compartimentectomía… Recurrencia: 15 %».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 40."
   ]
  },
  {
   "id": "ESP1-C-046",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diap. 9)",
   "enunciado": "Varón de 55 años con un sarcoma de partes blandas de alto grado del muslo, sin adenopatías. El interno propone añadir una disección inguinal rutinaria. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Siempre se hace disección inguinal en el sarcoma de muslo"
    },
    {
     "id": "b",
     "texto": "Debe hacerse biopsia de ganglio centinela en todos los sarcomas"
    },
    {
     "id": "c",
     "texto": "La disección ganglionar sustituye a la radioterapia"
    },
    {
     "id": "d",
     "texto": "No: los sarcomas rara vez dan metástasis ganglionares"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "sin adenopatías",
   "por_que_correcta": "Los sarcomas de partes blandas tienen baja tendencia a dar metástasis ganglionares (3-5 % en promedio); los más propensos son el epitelioide, el rabdomiosarcoma y el sinovial. Por eso el docente no recomienda la disección ganglionar rutinaria. Dos tercios aparecen en las extremidades.",
   "por_que_no": {
    "a": "La disección rutinaria no se recomienda en el sarcoma de partes blandas.",
    "b": "El centinela no es un estándar en el sarcoma; se reserva para subtipos con más tendencia linfática.",
    "c": "La radioterapia se añade en las lesiones de alto grado; la disección ganglionar no la sustituye."
   },
   "fuentes": {
    "docente": "Diapositiva 9 de Sarcoma de partes blandas del Dr. Yan Quiroz, «Historia natural»: «2/3 partes de los sarcomas ocurren en las extremidades… BAJA TENDENCIA A HACER METÁSTASIS GANGLIONAR, que en diferentes estudios llega a promediar 3 % a 5 %. Los más propensos a hacerlo son: sarcoma epitelioide, rabdomiosarcoma, sarcoma sinovial. La disección ganglionar rutinaria no se recomienda». Diap. 27: «RT se agrega en lesiones de alto grado (G2-G3)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 9.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 27."
   ]
  },
  {
   "id": "ESP1-C-047",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diap. 8)",
   "enunciado": "Mujer de 70 años operada hace 15 años de cáncer de mama con vaciamiento axilar completo, que quedó con linfedema crónico del brazo. Ahora presenta lesiones violáceas que crecen en ese brazo. ¿Qué diagnóstico debe sospecharse?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Celulitis recurrente del brazo"
    },
    {
     "id": "b",
     "texto": "Hemangiomas seniles múltiples"
    },
    {
     "id": "c",
     "texto": "Linfangiosarcoma (Stewart-Treves)"
    },
    {
     "id": "d",
     "texto": "Recidiva axilar de su cáncer de mama"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "linfedema crónico del brazo",
   "por_que_correcta": "El docente describe el linfangiosarcoma en pacientes con cáncer de mama y linfedema crónico secundario al vaciamiento axilar: el síndrome de Stewart-Treves. Hoy es una curiosidad, porque el vaciamiento ya no es de los tres niveles, no se irradia la axila de rutina y el ganglio centinela redujo el linfedema.",
   "por_que_no": {
    "a": "La celulitis no produce lesiones violáceas progresivas que crecen.",
    "b": "No explica la relación con el linfedema crónico tras el vaciamiento.",
    "d": "Las lesiones violáceas que crecen sobre un brazo con linfedema crónico orientan a linfangiosarcoma, no a recidiva ganglionar."
   },
   "fuentes": {
    "docente": "Diapositiva 8 de Sarcoma de partes blandas del Dr. Yan Quiroz, «Linfedema crónico»: «Específicamente en pacientes con cáncer de mama y linfedema crónico secundario a su vaciamiento axilar se han descrito casos de linfangiosarcoma (síndrome de Stewart Treves). Son una curiosidad ya que en el manejo actual del cáncer de mama el vaciamiento axilar no es de los 3 niveles y tampoco se da RT en axila… Con la técnica del ganglio centinela…».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 8."
   ]
  },
  {
   "id": "ESP1-C-048",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Sarcoma de partes blandas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diap. 7)",
   "enunciado": "Mujer de 38 años que recibió radioterapia en la pared torácica por un linfoma hace 9 años. Ahora presenta un sarcoma dentro del campo irradiado. ¿Qué criterios hacen que se considere un sarcoma radioinducido?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Que aparezca en cualquier parte del cuerpo durante el primer año"
    },
    {
     "id": "b",
     "texto": "Que tenga la misma histología que el tumor tratado antes"
    },
    {
     "id": "c",
     "texto": "Que aparezca solo en mayores de 70 años irradiados"
    },
    {
     "id": "d",
     "texto": "Que surja en el campo irradiado, a más de 5 años, con otra histología"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "dentro del campo irradiado",
   "por_que_correcta": "El docente da tres criterios para el sarcoma radioinducido: aparece en el campo de irradiación previa, han pasado más de 5 años y tiene una histología diferente a la del tumor primario. Suele afectar a pacientes jóvenes tratados con radioterapia por otro tumor.",
   "por_que_no": {
    "a": "Debe estar en el campo irradiado y tras más de 5 años.",
    "b": "La histología debe ser diferente a la del tumor original.",
    "c": "El docente señala que suele aparecer en pacientes generalmente jóvenes."
   },
   "fuentes": {
    "docente": "Diapositiva 7 de Sarcoma de partes blandas del Dr. Yan Quiroz: «El sarcoma aparece como un 2do tumor primario en pacientes generalmente jóvenes que han recibido radioterapia por otro tumor… Los criterios aceptados… son: que el tumor aparezca en el campo de irradiación previa; que hayan pasado más de 5 años; que el tumor primario sea de diferente histología al radioinducido».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 7."
   ]
  },
  {
   "id": "ESP1-C-049",
   "especialidad": "esp1",
   "tema": "Piel y partes blandas",
   "subtema": "Tumor desmoide",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Sarcoma de partes blandas (diaps. 68 y 69)",
   "enunciado": "Mujer de 30 años, con dos partos recientes, con una masa firme en la vaina anterior del recto abdominal. La biopsia muestra un tumor desmoide. Su padre tuvo poliposis colónica con osteomas. ¿Qué evaluación adicional recomienda el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Evaluar síndrome de Gardner o poliposis adenomatosa familiar"
    },
    {
     "id": "b",
     "texto": "Mamografía bilateral"
    },
    {
     "id": "c",
     "texto": "Buscar metástasis pulmonares con TC de tórax, porque el desmoide metastatiza con frecuencia"
    },
    {
     "id": "d",
     "texto": "Biopsia de ganglio centinela"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "poliposis colónica con osteomas",
   "por_que_correcta": "El tumor desmoide predomina en mujeres en la tercera década, se asocia a traumatismo previo y a estimulación estrogénica (embarazos múltiples), y dos tercios asientan en la vaina anterior de los rectos. Es localmente invasivo, pero no tiene potencial de metástasis. El docente pide evaluar el síndrome de Gardner o la poliposis adenomatosa familiar.",
   "por_que_no": {
    "b": "No es la asociación que plantea el docente.",
    "c": "El desmoide no tiene potencial de metástasis.",
    "d": "No hay indicación de estudio ganglionar en un tumor que no metastatiza."
   },
   "fuentes": {
    "docente": "Diapositiva 68 de Sarcoma de partes blandas del Dr. Yan Quiroz: tumor desmoide, «pico de mayor incidencia en la 3.ª década, con una clara preponderancia femenina de 5:1. 2/3 partes… asientan en la vaina anterior de los músculos rectos abdominales». Diap. 69: «Considerar evaluación para síndrome de Gardner / poliposis adenomatosa familiar (PAF)». Diap. 67: asociación con «traumatismo previo en el lugar de la lesión» y «los embarazos múltiples» (estimulación estrogénica). Diap. 66: «localmente invasiva y no encapsulada… no tienen potencial de metástasis». Diap. 5: desmoides en la poliposis múltiple familiar (síndrome de Gardner).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 68.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 69.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 66.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 67.",
    "Yan Quiroz EF. Sarcoma de partes blandas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 5."
   ]
  },
  {
   "id": "ESP1-C-050",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Manejo de la axila",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 287)",
   "enunciado": "Mujer de 58 años con carcinoma ductal infiltrante de 2,5 cm (T2), axila clínica y ecográficamente negativa, sin quimioterapia neoadyuvante. Se le hace tumorectomía con biopsia de ganglio centinela: 2 de 3 ganglios centinela son positivos. Recibirá radioterapia a toda la mama. ¿Qué indica el docente sobre la axila?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Convertir la cirugía en mastectomía radical modificada"
    },
    {
     "id": "b",
     "texto": "Repetir la biopsia de ganglio centinela"
    },
    {
     "id": "c",
     "texto": "Completar siempre la disección axilar de niveles I a III"
    },
    {
     "id": "d",
     "texto": "No completar la disección axilar (criterios del Z0011)"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "2 de 3 ganglios centinela son positivos",
   "por_que_correcta": "En el algoritmo del docente, si la paciente tiene un tumor T1 o T2 cN0, 1-2 ganglios centinela positivos, no recibió quimioterapia neoadyuvante y tiene planificada radioterapia a toda la mama (criterios del ensayo ACOSOG Z0011), no se hace disección axilar posterior. Es la desescalada de la axila: menos linfedema sin perder supervivencia.",
   "por_que_no": {
    "a": "La afectación de 1-2 centinelas no obliga a cambiar a mastectomía.",
    "b": "La biopsia ya identificó los ganglios; repetirla no aporta.",
    "c": "Cumple los criterios de Z0011: completar la disección añade morbilidad sin beneficio en supervivencia."
   },
   "fuentes": {
    "docente": "Diapositiva 287 del Dr. Yan Quiroz (algoritmo axilar): «No disección axilar posterior nivel I/II si cumple con TODOS los siguientes criterios (Ensayo ACOSOG Z0011): es un tumor T1 o T2, cN0; 1-2 ganglios centinelas positivos; no va a recibir quimioterapia neoadyuvante; RT A TODA LA MAMA planeada». También los criterios del ensayo EORTC AMAROS (RT axilar).",
    "guia": "Guía, p. 29: «en pacientes seleccionadas con uno o dos ganglios centinela positivos, tratadas con cirugía conservadora, radioterapia y tratamiento sistémico, completar la disección axilar no mejora la supervivencia».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 287.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-C-051",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Cirugía conservadora",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diaps. 268 y 278)",
   "enunciado": "¿Cuál de las siguientes pacientes tiene una contraindicación absoluta para la cirugía conservadora de mama, según la diapositiva del docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mujer de 55 años con carcinoma ductal infiltrante de 2,8 cm y buena relación tumor-mama"
    },
    {
     "id": "b",
     "texto": "Mujer de 60 años con tumor de 2 cm en el cuadrante superoexterno"
    },
    {
     "id": "c",
     "texto": "Mujer de 45 años con tumor de 1,5 cm y axila negativa"
    },
    {
     "id": "d",
     "texto": "Mujer de 52 años con carcinoma inflamatorio de mama"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "contraindicación absoluta",
   "por_que_correcta": "Entre las contraindicaciones absolutas de la terapia conservadora (en las que se recomienda la mastectomía), el docente pone en primer lugar el cáncer de mama inflamatorio o el invasivo con afectación extensa de la piel o del sistema linfático dérmico. También cuentan las microcalcificaciones difusas sospechosas, los márgenes positivos persistentes tras reescisiones y la imposibilidad de dar radioterapia.",
   "por_que_no": {
    "a": "Con buena relación tumor-mama puede conservarse la mama.",
    "b": "Un tumor de 2 cm unifocal es candidato a cirugía conservadora.",
    "c": "Es candidata a cirugía conservadora con biopsia de ganglio centinela."
   },
   "fuentes": {
    "docente": "Diapositiva 268 del Dr. Yan Quiroz, «Contraindicaciones absolutas y relativas a la terapia conservadora de mama»: absolutas, «cáncer de mama inflamatorio o cáncer de mama invasivo con afectación extensa de la piel o el sistema linfático dérmico; microcalcificaciones difusas sospechosas…; incapacidad para eliminar múltiples márgenes patológicos positivos…». Diap. 278: pregunta de clase sobre la contraindicación absoluta, con el cáncer inflamatorio entre las alternativas.",
    "guia": "Guía, p. 30: el carcinoma inflamatorio figura entre las contraindicaciones de la cirugía conservadora.",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 268.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 278.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-C-052",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Márgenes",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 268)",
   "enunciado": "Mujer de 50 años operada con tumorectomía por un carcinoma ductal infiltrante. El informe dice: «el tumor está a 0,5 mm del borde entintado, sin tumor en la tinta». ¿Cómo se interpreta el margen?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No valorable sin repetir la cirugía"
    },
    {
     "id": "b",
     "texto": "Positivo: obliga a reescisión, porque se necesitan 2 cm"
    },
    {
     "id": "c",
     "texto": "Positivo: obliga a mastectomía"
    },
    {
     "id": "d",
     "texto": "Negativo: no hay tumor en la tinta"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "sin tumor en la tinta",
   "por_que_correcta": "El docente define los márgenes negativos como la ausencia de tinta en el tumor para el cáncer invasivo. La guía lo convierte en regla práctica: en el carcinoma infiltrante basta con que no haya tumor tocando la tinta; en el carcinoma ductal in situ con cirugía conservadora se exige algo más. Un margen positivo obliga a ampliar.",
   "por_que_no": {
    "a": "El informe es concluyente: no hay tumor en la tinta.",
    "b": "No se exigen 2 cm: basta con que el tumor no toque la tinta.",
    "c": "El margen es negativo; no hay indicación de mastectomía."
   },
   "fuentes": {
    "docente": "Diapositiva 268 del Dr. Yan Quiroz: «Incapacidad de lograr márgenes negativos (definidos como la ausencia de tinta en el tumor para cáncer invasivo + CDIS)».",
    "guia": "Guía, p. 30: «en carcinoma infiltrante basta con que no haya tumor tocando la tinta del margen; en carcinoma ductal in situ tratado con cirugía conservadora se exige un margen algo mayor. Un margen positivo obliga a reintervenir para ampliar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 268.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-C-053",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Biología tumoral",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diaps. 224 y 233)",
   "enunciado": "Mujer de 34 años con carcinoma ductal infiltrante de alto grado. La inmunohistoquímica informa: receptores de estrógeno negativos, receptores de progesterona negativos y HER2 negativo. ¿Qué afirmación es correcta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Es un HER2 puro: responde al trastuzumab"
    },
    {
     "id": "b",
     "texto": "Es un triple negativo, sin respuesta endocrina ni al trastuzumab"
    },
    {
     "id": "c",
     "texto": "Es un luminal B: el más frecuente"
    },
    {
     "id": "d",
     "texto": "Es un luminal A: responde a la terapia endocrina y tiene buen pronóstico"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "HER2 negativo",
   "por_que_correcta": "Sin receptores hormonales ni HER2 es un triple negativo (puede ser de tipo basal). En el cuadro del docente: alto grado, más frecuente en menores de 40 años, puede asociarse a BRCA1, no responde al manejo endocrino ni al trastuzumab y tiene en general mal pronóstico. Depende de la quimioterapia.",
   "por_que_no": {
    "a": "El HER2 puro sobreexpresa HER2 (+++), que aquí es negativo.",
    "c": "El luminal B tiene receptores hormonales positivos; el más frecuente es el luminal A.",
    "d": "El luminal A tiene receptores hormonales positivos y Ki67 bajo."
   },
   "fuentes": {
    "docente": "Diapositiva 224 del Dr. Yan Quiroz, «Clasificación molecular del cáncer de mama»: luminal A, «subtipo más común, menos agresivo… responde a terapia endocrina… buen pronóstico»; triple negativo (basal like), «alto grado histológico e índice mitótico; riesgo en edades menores (< 40 años); puede asociarse a BRCA 1 (75 %); no responde a manejo endocrino o trastuzumab; en general mal pronóstico»; HER2 (+++) puro, «respuesta a trastuzumab». Diap. 233: pregunta de clase sobre el subtipo asociado a BRCA1 y mal pronóstico.",
    "guia": "Guía, p. 29: «los triple negativos carecen de diana, son más agresivos y dependen de la quimioterapia».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 233.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-C-054",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Biología tumoral",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 224)",
   "enunciado": "Mujer de 61 años con carcinoma ductal infiltrante: receptores de estrógeno positivos, receptores de progesterona positivos, HER2 negativo y Ki67 del 35 %. ¿Qué subtipo molecular es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Luminal B HER2 negativo"
    },
    {
     "id": "b",
     "texto": "Luminal A con receptores positivos"
    },
    {
     "id": "c",
     "texto": "HER2 enriquecido no luminal"
    },
    {
     "id": "d",
     "texto": "Triple negativo de tipo basal"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "Ki67 del 35 %",
   "por_que_correcta": "Con receptores hormonales positivos y HER2 negativo, el Ki67 separa los luminales: menor del 20 % es luminal A y mayor del 20 % es luminal B. El luminal B tiene mayor grado histológico, responde a la terapia endocrina con respuesta variable a la quimioterapia y un pronóstico menos favorable que el A.",
   "por_que_no": {
    "b": "El luminal A tiene Ki67 menor del 20 %.",
    "c": "El HER2 es negativo.",
    "d": "Tiene receptores hormonales positivos: no es triple negativo."
   },
   "fuentes": {
    "docente": "Diapositiva 224 del Dr. Yan Quiroz, «Clasificación molecular del cáncer de mama»: RE/RP (+) y HER2 (-), con «Ki67 < 20%» para el luminal A y «Ki67 > 20%» para el luminal B; luminal B, «alto grado histológico; responde a terapia endocrina; respuesta variable a la QT; pronóstico menos agraciado que luminal A».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 224."
   ]
  },
  {
   "id": "ESP1-C-055",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Anatomía de la axila",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diaps. 53 y 54)",
   "enunciado": "En una disección axilar, el patólogo recibe por separado los ganglios situados por detrás del músculo pectoral menor. ¿A qué nivel de Berg corresponden?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nivel II"
    },
    {
     "id": "b",
     "texto": "Nivel I"
    },
    {
     "id": "c",
     "texto": "Nivel III"
    },
    {
     "id": "d",
     "texto": "Cadena mamaria interna"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "por detrás del músculo pectoral menor",
   "por_que_correcta": "Los niveles de Berg toman como referencia el pectoral menor: el nivel I está por fuera (lateral) del músculo, el II por detrás y el III por dentro (medial), hacia el vértice de la axila. La cadena mamaria interna es otra vía de drenaje.",
   "por_que_no": {
    "b": "El nivel I está lateral al pectoral menor.",
    "c": "El nivel III está medial al pectoral menor.",
    "d": "La cadena mamaria interna es paraesternal, no axilar."
   },
   "fuentes": {
    "docente": "Diapositiva 53 del Dr. Yan Quiroz: «Tomando como referencia anatómica el eje longitudinal del pectoral menor, la axila se divide en 3 niveles… Niveles axilares de Berg». Diap. 54: nivel I, II, III; cadena mamaria interna y supraclavicular.",
    "guia": "Guía, p. 29: «Niveles axilares: I por fuera del pectoral menor, II por detrás de él, III por dentro».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 53.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 54.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-C-056",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Complicaciones de la cirugía axilar",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 48)",
   "enunciado": "Mujer de 55 años, tres semanas después de una mastectomía radical modificada. Al empujar contra la pared, el borde medial de la escápula derecha se separa del tórax. ¿Qué nervio se lesionó?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nervio intercostobraquial de la axila"
    },
    {
     "id": "b",
     "texto": "Nervio toracodorsal (músculo dorsal ancho)"
    },
    {
     "id": "c",
     "texto": "Nervio torácico largo (serrato anterior)"
    },
    {
     "id": "d",
     "texto": "Nervio axilar (deltoides)"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "el borde medial de la escápula derecha se separa del tórax",
   "por_que_correcta": "La escápula alada se debe a la parálisis del serrato anterior por lesión del nervio torácico largo, que corre por la pared medial de la axila. El toracodorsal inerva al dorsal ancho (aducción y rotación interna) y el intercostobraquial es sensitivo (cara interna del brazo).",
   "por_que_no": {
    "a": "Es sensitivo: su sección da hipoestesia de la cara interna del brazo.",
    "b": "Su lesión debilita la aducción y la rotación interna del brazo, sin escápula alada.",
    "d": "No se diseca en la cirugía axilar del cáncer de mama y no produce escápula alada."
   },
   "fuentes": {
    "docente": "Diapositiva 48 del Dr. Yan Quiroz, «Anatomía de la axila: pared medial»: «M. serrato anterior; nervio torácico largo; nervio intercostobraquial, corresponde al ramo cutáneo lateral del II nervio intercostal». Diap. 20: nervio toracodorsal con la arteria subescapular.",
    "guia": "Guía, p. 30: «nervio torácico largo (su lesión produce escápula alada por parálisis del serrato anterior), nervio toracodorsal (su lesión debilita la aducción y rotación interna del brazo por parálisis del dorsal ancho), nervios intercostobraquiales (su sección produce hipoestesia de la cara interna del brazo…)».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 48.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 20.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-C-057",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Complicaciones de la cirugía axilar",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 48)",
   "enunciado": "Mujer de 48 años operada de disección axilar. Refiere adormecimiento persistente en la cara interna del brazo, sin debilidad. ¿Qué nervio se seccionó?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nervio toracodorsal"
    },
    {
     "id": "b",
     "texto": "Nervio mediano del brazo"
    },
    {
     "id": "c",
     "texto": "Nervio torácico largo"
    },
    {
     "id": "d",
     "texto": "Nervio intercostobraquial"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "sin debilidad",
   "por_que_correcta": "El nervio intercostobraquial es el ramo cutáneo lateral del segundo nervio intercostal y se une al cutáneo medial del brazo. Cruza la axila y su sección produce hipoestesia de la cara interna del brazo, muy frecuente y a menudo aceptada.",
   "por_que_no": {
    "a": "Su lesión debilita el dorsal ancho (motora).",
    "b": "El mediano no se diseca en la axila oncológica y su lesión sería mucho más extensa.",
    "c": "Su lesión produce escápula alada (motora)."
   },
   "fuentes": {
    "docente": "Diapositiva 48 del Dr. Yan Quiroz: «Nervio intercostobraquial, corresponde al ramo cutáneo lateral del II nervio intercostal. Se une al N. cutáneo medial del brazo».",
    "guia": "Guía, p. 30: «nervios intercostobraquiales (su sección produce hipoestesia de la cara interna del brazo, muy frecuente y a menudo aceptada)».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 48.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30."
   ]
  },
  {
   "id": "ESP1-C-058",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Técnica quirúrgica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 251)",
   "enunciado": "En una mastectomía radical modificada se extirpan la mama y el tejido linfograso axilar, se conserva el pectoral mayor y además se reseca el pectoral menor para acceder mejor a la axila. ¿Qué técnica es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Mastectomía radical de Halsted"
    },
    {
     "id": "b",
     "texto": "Mastectomía radical modificada de Patey"
    },
    {
     "id": "c",
     "texto": "Mastectomía radical modificada de Madden-Auchincloss"
    },
    {
     "id": "d",
     "texto": "Mastectomía simple"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "se reseca el pectoral menor",
   "por_que_correcta": "La mastectomía radical modificada extirpa la mama y el tejido linfograso axilar respetando el pectoral mayor. En la técnica de Patey se extirpa además el pectoral menor; en la de Madden-Auchincloss se conservan ambos pectorales.",
   "por_que_no": {
    "a": "La radical de Halsted extirpa también el pectoral mayor.",
    "c": "La de Madden-Auchincloss conserva ambos pectorales.",
    "d": "La mastectomía simple no incluye la disección axilar."
   },
   "fuentes": {
    "docente": "Diapositiva 251 del Dr. Yan Quiroz: «Mastectomía radical modificada: exéresis de la mama y del tejido linfograso axilar, respetando el músculo pectoral mayor. Incisión transversa de Stewart. Distintas técnicas: MT radical modificada de Patey (extirpación de pectoral menor); MT radical modificada de Madden / Auchincloss (1965)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 251."
   ]
  },
  {
   "id": "ESP1-C-059",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diaps. 158-161)",
   "enunciado": "Mujer de 57 años con microcalcificaciones agrupadas pleomorfas en la mamografía de tamizaje, sin nódulo palpable. ¿Cómo se guía la resección de esta lesión no palpable según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Con arpón (aguja de Kopans) colocado por imagen"
    },
    {
     "id": "b",
     "texto": "Por palpación intraoperatoria cuidadosa"
    },
    {
     "id": "c",
     "texto": "Con ecografía doppler del pezón y la areola"
    },
    {
     "id": "d",
     "texto": "Con mastectomía total directa sin localizar"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "sin nódulo palpable",
   "por_que_correcta": "Las lesiones no palpables se localizan antes de la cirugía con un arpón (aguja de Kopans) colocado guiado por imagen, que dirige la resección hacia la zona sospechosa.",
   "por_que_no": {
    "b": "Una lesión no palpable no puede encontrarse por palpación.",
    "c": "No es un método de localización.",
    "d": "No hay indicación de mastectomía sin diagnóstico ni contraindicación para conservar."
   },
   "fuentes": {
    "docente": "Diapositivas 158-161 del Dr. Yan Quiroz: «Manejo de lesiones no palpables: biopsia guiada con arpón (aguja de Kopans)».",
    "guia": "Guía, p. 30: «En lesiones no palpables se emplea localización preoperatoria mediante arpón o marcador para dirigir la resección»; p. 29, hallazgos de sospecha en mamografía: «microcalcificaciones agrupadas pleomorfas».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 158.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29."
   ]
  },
  {
   "id": "ESP1-C-060",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de mama (diap. 140)",
   "enunciado": "Mujer de 31 años, embarazada de 20 semanas, con un nódulo de 2 cm en la mama izquierda. ¿Qué estudio de imagen inicial indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gammagrafía ósea"
    },
    {
     "id": "b",
     "texto": "Resonancia con gadolinio"
    },
    {
     "id": "c",
     "texto": "Tomografía de tórax"
    },
    {
     "id": "d",
     "texto": "Ecografía mamaria"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "embarazada de 20 semanas",
   "por_que_correcta": "Entre las indicaciones clínicas de la ecografía, el docente incluye a las mujeres menores de 40 años y a las embarazadas, además de servir de guía para la biopsia. No irradia y caracteriza la lesión.",
   "por_que_no": {
    "a": "La gammagrafía no caracteriza un nódulo mamario.",
    "b": "No es el estudio inicial de un nódulo en una embarazada.",
    "c": "La TC irradia y no es el estudio de una lesión mamaria inicial."
   },
   "fuentes": {
    "docente": "Diapositiva 140 del Dr. Yan Quiroz, «Ultrasonido: indicaciones clínicas»: «Complemento a la mamografía… especialmente en mamas densas… Mujeres menores de 40 años y embarazadas. Es una guía para procedimientos mínimamente invasivos».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 140."
   ]
  },
  {
   "id": "ESP1-C-061",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (pp. 29-30)",
   "enunciado": "Mujer de 52 años, no lactante, con la mama derecha roja, caliente y edematosa, con piel de naranja, de instauración en 3 semanas, sin fiebre. No mejoró con 10 días de antibiótico. ¿Qué diagnóstico debe confirmarse y qué no debe hacerse?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Absceso mamario: drenaje quirúrgico inmediato"
    },
    {
     "id": "b",
     "texto": "Carcinoma inflamatorio: mastectomía radical inmediata"
    },
    {
     "id": "c",
     "texto": "Carcinoma inflamatorio: biopsia y no operar de entrada"
    },
    {
     "id": "d",
     "texto": "Mastitis bacteriana: cambiar de antibiótico y esperar"
    }
   ],
   "correcta": "c",
   "tipo_clave": "guía",
   "dato_clave": "No mejoró con 10 días de antibiótico",
   "por_que_correcta": "El carcinoma inflamatorio se presenta como una mama roja, caliente y edematosa de instauración rápida. Es un diagnóstico clínico, no una infección, y una forma localmente avanzada de mal pronóstico que nunca se opera de entrada: recibe primero tratamiento sistémico. La piel de naranja se debe al bloqueo de los linfáticos dérmicos.",
   "por_que_no": {
    "a": "No hay colección; drenar no trata la enfermedad.",
    "b": "El carcinoma inflamatorio no se opera de entrada; primero va el tratamiento sistémico.",
    "d": "Sin fiebre, fuera de la lactancia y sin respuesta a antibióticos, insistir retrasa el diagnóstico de cáncer."
   },
   "fuentes": {
    "docente": "Diapositiva 113 del Dr. Yan Quiroz: entre los síntomas, «Eritema difuso. Ca. inflamatorio. ¿Mastitis?». Diap. 473: diagnóstico clínico-patológico del cáncer inflamatorio de mama con estudio multidisciplinario.",
    "guia": "Guía, p. 29: «carcinoma inflamatorio (mama roja, caliente, edematosa, de instauración rápida; es un diagnóstico clínico, no una infección, y es una forma localmente avanzada de mal pronóstico que nunca se opera de entrada)»; piel de naranja «por bloqueo de los linfáticos dérmicos». P. 30: «Se difiere en el carcinoma inflamatorio… que reciben tratamiento sistémico primero».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 30.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 113.",
    "Yan Quiroz EF. Cáncer de mama [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 473."
   ]
  },
  {
   "id": "ESP1-C-062",
   "especialidad": "esp1",
   "tema": "Mama",
   "subtema": "Diagnóstico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 29)",
   "enunciado": "Mujer de 47 años con un nódulo mamario sospechoso de 2 cm. Se discute entre punción con aguja fina y biopsia con aguja gruesa. ¿Por qué la guía considera estándar la aguja gruesa?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Porque permite estudiar receptores y HER2"
    },
    {
     "id": "b",
     "texto": "Porque no deja ninguna cicatriz en la mama"
    },
    {
     "id": "c",
     "texto": "Porque evita siempre la cirugía posterior"
    },
    {
     "id": "d",
     "texto": "Porque permite estadificar la axila a la vez"
    }
   ],
   "correcta": "a",
   "tipo_clave": "guía",
   "dato_clave": "punción con aguja fina y biopsia con aguja gruesa",
   "por_que_correcta": "El diagnóstico se basa en el triple abordaje (clínica, imagen e histología). La biopsia con aguja gruesa es el estándar porque obtiene tejido con arquitectura, distingue infiltrante de in situ y permite estudiar receptores hormonales, HER2 y Ki67, que deciden el tratamiento. La aguja fina obtiene células, no arquitectura.",
   "por_que_no": {
    "b": "No es la razón; ambas son mínimamente invasivas.",
    "c": "La biopsia no reemplaza la cirugía; solo da el diagnóstico.",
    "d": "La axila se estadifica con el ganglio centinela o la disección."
   },
   "fuentes": {
    "docente": null,
    "guia": "Guía, p. 29: «La biopsia con aguja gruesa es el estándar, porque aporta arquitectura y permite determinar receptores hormonales, HER2 e índice de proliferación». P. 10: la aspiración con aguja fina «obtiene células, no arquitectura».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 29.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 10."
   ]
  },
  {
   "id": "ESP1-C-063",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Márgenes",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diaps. 175 y 600); adaptada de la complementaria n.º 138 del banco consolidado de Oncología",
   "enunciado": "Varón de 63 años con adenocarcinoma del cuerpo gástrico Borrmann III (ulceroinfiltrante), cT3. Se planifica una gastrectomía. ¿Qué margen proximal mínimo recomienda el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "2 cm"
    },
    {
     "id": "b",
     "texto": "1 cm"
    },
    {
     "id": "c",
     "texto": "5 cm"
    },
    {
     "id": "d",
     "texto": "3 cm"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "Borrmann III (ulceroinfiltrante)",
   "por_que_correcta": "Para tumores T2 o más profundos, el docente (guía japonesa) recomienda un margen proximal de al menos 3 cm en los de crecimiento expansivo (Borrmann 1 y 2) y de 5 cm en los de crecimiento infiltrativo (Borrmann 3 y 4) y en los distales. En el cáncer precoz (T1) basta con 2 cm. El Borrmann III es infiltrativo: 5 cm.",
   "por_que_no": {
    "a": "2 cm es el margen del cáncer precoz (T1).",
    "b": "Es insuficiente para cualquier carcinoma gástrico avanzado.",
    "d": "3 cm corresponde a los tumores expansivos (Borrmann 1 y 2)."
   },
   "fuentes": {
    "docente": "Diapositiva 600 del Dr. Yan Quiroz: «Para tumores T2 o más profundos, se recomienda un margen proximal de al menos: 3 cm para tumores con un patrón de crecimiento expansivo (Tipo 1 y 2); 5 cm para tumores distales y tumores con patrón de crecimiento infiltrativo (Tipo 3 y 4)… Para tumores T1 (carcinoma precoz) se debe tener un margen de resección proximal de 2 cm» (Japanese Gastric Cancer Treatment Guidelines). Diap. 175: Borrmann I exofítica, II ulcerada, III ulceroinfiltrante, IV infiltrante (linitis plástica).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 600.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 175."
   ]
  },
  {
   "id": "ESP1-C-064",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Síndromes posgastrectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diaps. 834 y 835); adaptada de la complementaria n.º 140 del banco consolidado de Oncología",
   "enunciado": "Mujer de 60 años con gastrectomía subtotal hace 2 meses. A los 20-30 minutos de comer presenta distensión, diarrea, sudoración, palidez y taquicardia, sobre todo tras postres. ¿Cuál es el mecanismo y el manejo inicial?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Síndrome de asa aferente; reintervención inmediata"
    },
    {
     "id": "b",
     "texto": "Fístula anastomótica; nada por vía oral y antibióticos"
    },
    {
     "id": "c",
     "texto": "Hipoglucemia reactiva; dar azúcar en cada episodio"
    },
    {
     "id": "d",
     "texto": "Dumping precoz por paso rápido al yeyuno; comidas pequeñas"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "A los 20-30 minutos de comer",
   "por_que_correcta": "Al perder la función de reservorio, el contenido hiperosmolar, sobre todo de carbohidratos simples, llega rápido al yeyuno, arrastra líquido a la luz y libera hormonas vasoactivas. Es el dumping precoz: aparece a la media hora con distensión, diarrea osmótica, sudoración, palidez y taquicardia. Se maneja con comidas pequeñas y frecuentes, bajas en carbohidratos; en casos refractarios, octreotida.",
   "por_que_no": {
    "a": "No hay datos de obstrucción del asa aferente.",
    "b": "A los 2 meses, con síntomas ligados a las comidas, no orienta a fístula.",
    "c": "La hipoglucemia reactiva es el dumping tardío, a las 2-3 horas."
   },
   "fuentes": {
    "docente": "Diapositiva 834 del Dr. Yan Quiroz: el dumping se produce en aproximadamente el 20 % tras gastrectomía, por el «RÁPIDO vaciado del QUIMO HIPEROSMOLAR, en particular de hidratos de carbono»; precoz dentro de los 30 minutos, tardío a las 2-3 horas. Diap. 835: «Ingesta de CHO simples concentrados… distensión yeyunal brusca… desplaza líquido hacia la luz del yeyuno… diarrea osmótica, sudoración, palidez, taquicardia… Comidas pequeñas frecuentes, bajas en carbohidratos, pueden eliminar el problema. En los casos más refractarios, octreotida».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 834.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 835."
   ]
  },
  {
   "id": "ESP1-C-065",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Síndromes posgastrectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 836)",
   "enunciado": "Varón de 55 años con gastrectomía distal. Dos a tres horas después de comer presenta debilidad, mareo y sudoración que ceden al tomar un jugo azucarado. ¿Qué cuadro es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Dumping tardío por hipoglucemia reactiva"
    },
    {
     "id": "b",
     "texto": "Anemia por déficit de vitamina B12"
    },
    {
     "id": "c",
     "texto": "Gastritis por reflujo alcalino"
    },
    {
     "id": "d",
     "texto": "Dumping precoz por contenido hiperosmolar"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "ceden al tomar un jugo azucarado",
   "por_que_correcta": "El dumping tardío es una hipoglucemia reactiva que aparece 2-3 horas después de comer, por una liberación excesiva de insulina tras la absorción rápida de glucosa. Da debilidad, mareo y sudoración, y se alivia con azúcar.",
   "por_que_no": {
    "b": "La anemia no produce episodios ligados a las comidas que ceden con azúcar.",
    "c": "El reflujo alcalino produce dolor epigástrico y vómito bilioso.",
    "d": "El precoz aparece dentro de los 30 minutos y no mejora con azúcar."
   },
   "fuentes": {
    "docente": "Diapositiva 836 del Dr. Yan Quiroz: «Dumping tardío. Esta es una hipoglucemia reactiva que se produce 2 a 3 horas después de la comida en respuesta a un exceso de liberación de insulina. Los síntomas incluyen: debilidad, mareos y sudoración… se alivian mediante la administración de azúcar». Diap. 34: síndromes posgastrectomía (gastritis por reflujo alcalino, anemia…).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 836.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 34."
   ]
  },
  {
   "id": "ESP1-C-066",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Síndromes posgastrectomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 840)",
   "enunciado": "Varón de 66 años con gastrectomía total hace 4 años, sin controles. Presenta astenia, glositis y anemia macrocítica. ¿Qué déficit explica el cuadro?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Vitamina C, por baja ingesta de frutas"
    },
    {
     "id": "b",
     "texto": "Hierro, por sangrado crónico"
    },
    {
     "id": "c",
     "texto": "Ácido fólico, por alcoholismo crónico"
    },
    {
     "id": "d",
     "texto": "Vitamina B12, por falta de factor intrínseco"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "anemia macrocítica",
   "por_que_correcta": "El docente señala que la anemia megaloblástica por déficit de vitamina B12 aparece en todos los pacientes con gastrectomía total en los 6 años siguientes, y en un 20 % de los de gastrectomía subtotal en 10 años. Por eso necesitan suplementación.",
   "por_que_no": {
    "a": "No produce anemia macrocítica.",
    "b": "El déficit de hierro da anemia microcítica, no macrocítica.",
    "c": "No hay antecedente de alcoholismo y la gastrectomía total explica el déficit de B12."
   },
   "fuentes": {
    "docente": "Diapositiva 840 del Dr. Yan Quiroz, «Síndrome post gastrectomía: anemia»: «En todos los pacientes sometidos a gastrectomía total en los 6 años siguientes a la intervención. En un 20 % de los pacientes en los 10 años siguientes en quienes se realizó gastrectomía subtotal. Se observa déficit de vitamina B12 (anemia megaloblástica)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 840."
   ]
  },
  {
   "id": "ESP1-C-067",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Cáncer gástrico hereditario",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 58)",
   "enunciado": "Mujer de 26 años, portadora de una mutación germinal de CDH1, con dos familiares con cáncer gástrico difuso. La endoscopia basal es normal. ¿Qué recomienda el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Gastrectomía subtotal con disección D2"
    },
    {
     "id": "b",
     "texto": "Solo erradicación de H. pylori y control"
    },
    {
     "id": "c",
     "texto": "Gastrectomía total profiláctica, sin necesidad de D2"
    },
    {
     "id": "d",
     "texto": "Esperar a que la endoscopia muestre un tumor para operar"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "mutación germinal de CDH1",
   "por_que_correcta": "En portadores de CDH1 se recomienda la gastrectomía total profiláctica entre los 18 y 40 años, con endoscopia basal previa. Se verifican por congelación los márgenes (mucosa esofágica proximal y duodenal distal) para asegurar que no quede tejido gástrico, y no es necesaria la disección D2. Si la rechazan, se ofrece endoscopia cada 6-12 meses con múltiples biopsias.",
   "por_que_no": {
    "a": "Una subtotal deja mucosa gástrica en riesgo, y la D2 no es necesaria en la profiláctica.",
    "b": "No elimina el riesgo genético de cáncer difuso.",
    "d": "El carcinoma difuso hereditario es multicéntrico y puede escapar a la endoscopia."
   },
   "fuentes": {
    "docente": "Diapositiva 58 del Dr. Yan Quiroz: «Se recomienda la gastrectomía total profiláctica entre los 18 y 40 años de edad para los portadores de la mutación CDH1. Se indica una endoscopia digestiva basal ANTES… Deben obtenerse secciones intraoperatorias congeladas para verificar que el margen proximal contenga mucosa escamosa esofágica y el margen distal contenga mucosa duodenal… No es necesaria una disección de ganglios linfáticos D2 para la gastrectomía total profiláctica… A los portadores… que DECIDAN NO SOMETERSE… endoscopia cada 6-12 meses con MÚLTIPLES biopsias». Diap. 51: «total, porque presenta gran multicentricidad de carcinoma in situ».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 58.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 51."
   ]
  },
  {
   "id": "ESP1-C-068",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diaps. 314 y 315)",
   "enunciado": "Varón de 59 años con adenocarcinoma gástrico cT3N1, sin metástasis en la TC. En la laparoscopia no hay implantes visibles, pero la citología del lavado peritoneal es positiva. ¿Cómo se clasifica?",
   "alternativas": [
    {
     "id": "a",
     "texto": "M0, porque no hay implantes visibles"
    },
    {
     "id": "b",
     "texto": "Mx, porque la citología no cuenta"
    },
    {
     "id": "c",
     "texto": "M1: equivale a metástasis a distancia"
    },
    {
     "id": "d",
     "texto": "N3, porque indica más ganglios"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "la citología del lavado peritoneal es positiva",
   "por_que_correcta": "El docente lo subraya: la citología peritoneal positiva ahora es M1. El cM0 se establece con imágenes sin biopsia, y el pM1 solo con biopsia positiva. Esto convierte a un paciente aparentemente resecable en enfermedad metastásica.",
   "por_que_no": {
    "a": "Aunque no haya implantes visibles, la citología positiva ya es M1.",
    "b": "La citología sí cuenta y define M1.",
    "d": "La citología peritoneal no se clasifica en la N."
   },
   "fuentes": {
    "docente": "Diapositiva 314 del Dr. Yan Quiroz, «Metástasis a distancia»: «cM0 con imagen y sin biopsia; pM1 sólo con biopsia positiva; citología peritoneal (+) ahora M1». Diap. 315: pregunta de clase con la misma clave.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 314.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 315."
   ]
  },
  {
   "id": "ESP1-C-069",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diaps. 403 y 404)",
   "enunciado": "Mujer de 61 años con adenocarcinoma gástrico cT3N1M0 por TC, potencialmente resecable. Antes de la gastrectomía, ¿qué procedimiento indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Laparoscopia diagnóstica"
    },
    {
     "id": "b",
     "texto": "Colonoscopia"
    },
    {
     "id": "c",
     "texto": "Gastrectomía directa sin más estudios"
    },
    {
     "id": "d",
     "texto": "Biopsia percutánea del hígado"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "potencialmente resecable",
   "por_que_correcta": "Los pacientes potencialmente resecables con cáncer intermedio o avanzado deben tener una laparoscopia diagnóstica antes de la resección, para detectar enfermedad que impida la gastrectomía (carcinomatosis, que la TC detecta mal) y completar la estadificación. Se hace al final del estudio clínico o al comienzo de la gastrectomía.",
   "por_que_no": {
    "b": "No estadifica el cáncer gástrico.",
    "c": "La TC tiene baja sensibilidad para la carcinomatosis; operar sin laparoscopia puede llevar a una laparotomía innecesaria.",
    "d": "No hay lesión hepática que biopsiar."
   },
   "fuentes": {
    "docente": "Diapositiva 403 del Dr. Yan Quiroz: «¿Cuándo hacer la laparoscopía? Los pacientes potencialmente resecables con cáncer intermedio o avanzado deben tener ANTES DE LA RESECCIÓN LAPAROSCOPÍA DIAGNÓSTICA con la finalidad de detectar una enfermedad que impida la gastrectomía. El momento preciso es al final del diagnóstico clínico… al comienzo de las gastrectomías». Diap. 404: «evaluar la resecabilidad y completar estadificación». Diap. 400: la detección de carcinomatosis por imagen tiene baja sensibilidad y especificidad.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 403.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 404.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 400."
   ]
  },
  {
   "id": "ESP1-C-070",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Diagnóstico",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 250)",
   "enunciado": "Varón de 64 años con úlcera gástrica de aspecto sospechoso. Al tomar biopsias endoscópicas, ¿qué técnica indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No biopsiar: la imagen endoscópica basta"
    },
    {
     "id": "b",
     "texto": "Al menos 6 biopsias, sobre todo del borde"
    },
    {
     "id": "c",
     "texto": "Una sola biopsia del centro de la úlcera"
    },
    {
     "id": "d",
     "texto": "Biopsias solo de la base necrótica"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "úlcera gástrica de aspecto sospechoso",
   "por_que_correcta": "La exactitud diagnóstica de la biopsia endoscópica es del 95 % y aumenta con el número de biopsias: deben tomarse 6-8, un mínimo de 6 (una de cada cuadrante de la úlcera y dos del centro), y del borde más que de la base. Si la sospecha persiste con biopsia negativa, se repite la endoscopia en 6-8 semanas.",
   "por_que_no": {
    "a": "El diagnóstico de cáncer debe confirmarse histológicamente.",
    "c": "Una sola biopsia reduce la exactitud diagnóstica.",
    "d": "La base necrótica no es representativa; se prefiere el borde."
   },
   "fuentes": {
    "docente": "Diapositiva 250 del Dr. Yan Quiroz, «Biopsia endoscópica»: «Exactitud diagnóstica de la biopsia endoscópica: 95 %. Si hay sospecha de cáncer después de la endoscopia, el examen debería ser repetido en 6-8 semanas. El diagnóstico de cáncer debe ser confirmado histológicamente… Deben realizarse 6-8 biopsias. Un mínimo de 6 biopsias deben ser tomadas: una de cada cuadrante de la úlcera y 2 del centro. Deben ser tomadas del borde más que de la base».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 250."
   ]
  },
  {
   "id": "ESP1-C-071",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Tratamiento adyuvante",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 424)",
   "enunciado": "Varón de 57 años con gastrectomía distal y disección D2 (30 ganglios). Patología: pT2N0, sin características de alto riesgo. ¿Qué indica el docente después de la cirugía?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Reintervención para ampliar la linfadenectomía"
    },
    {
     "id": "b",
     "texto": "Radioterapia adyuvante"
    },
    {
     "id": "c",
     "texto": "Vigilancia, sin tratamiento adyuvante"
    },
    {
     "id": "d",
     "texto": "Quimioterapia adyuvante obligatoria"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "pT2N0, sin características de alto riesgo",
   "por_que_correcta": "Tras una resección curativa con D2 y pT2N0 sin características de alto riesgo, el docente no recomienda tratamiento adyuvante: corresponde la vigilancia. Si la disección fue D0 o D1, con menos de 15 ganglios, se debe considerar la adyuvancia.",
   "por_que_no": {
    "a": "La D2 con 30 ganglios ya es adecuada (más de 15).",
    "b": "No está indicada en esta situación.",
    "d": "Con D2 adecuada y pT2N0 sin alto riesgo, no se recomienda."
   },
   "fuentes": {
    "docente": "Diapositiva 424 del Dr. Yan Quiroz: «Para los pacientes sometidos a resección curativa con disección D2 y con pT2N0 sin características de alto riesgo, no se recomienda el tratamiento adyuvante (ahí sería la VIGILANCIA). Para los pacientes con pT2N0 con disección D0 o D1 (principalmente con menos de 15 ganglios linfáticos resecados), se debe considerar el tratamiento adyuvante».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 424."
   ]
  },
  {
   "id": "ESP1-C-072",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Calidad quirúrgica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Índice de calidad quirúrgica (diaps. 4 y 18)",
   "enunciado": "En una auditoría de gastrectomías por cáncer, se evalúa si cada paciente alcanzó el «textbook outcome». ¿Cuál de estos criterios forma parte de él?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Márgenes negativos y más de 15 ganglios examinados"
    },
    {
     "id": "b",
     "texto": "Estancia en UCI planificada de 7 días como mínimo"
    },
    {
     "id": "c",
     "texto": "Resección de bazo en todos los casos de gastrectomía"
    },
    {
     "id": "d",
     "texto": "Uso obligatorio de cirugía robótica o laparoscópica"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "«textbook outcome»",
   "por_que_correcta": "El textbook outcome combina varios índices de calidad en una sola medida. Entre sus parámetros, el docente muestra: márgenes negativos, más de 15 ganglios linfáticos muestreados, ausencia de complicaciones graves, de reintervenciones y de ingreso no planificado en UCI, y una estancia hospitalaria adecuada. La linfadenectomía D2 es necesaria para lograr más de 15 ganglios.",
   "por_que_no": {
    "b": "Lo que cuenta es la ausencia de ingreso no planificado en UCI.",
    "c": "La esplenectomía no forma parte de la definición.",
    "d": "El abordaje no define el textbook outcome."
   },
   "fuentes": {
    "docente": "Diapositiva 18 del Dr. Yan Quiroz, Índice de calidad quirúrgica: «8 parámetros TO: márgenes negativos; > 15 ganglios linfáticos muestreados; ausencia de complicaciones graves; ausencia de reintervenciones; ausencia de ingreso no planificado en la UCI; estancia hospitalaria…». Diap. 4: «La linfadenectomía D2 es necesario para lograr una linfadenectomía adecuada (> 15 ganglios cosechados)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Índice de calidad quirúrgica en cirugía mínimamente invasiva en carcinoma gástrico [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 18.",
    "Yan Quiroz EF. Índice de calidad quirúrgica en cirugía mínimamente invasiva en carcinoma gástrico [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 4."
   ]
  },
  {
   "id": "ESP1-C-073",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Diseminación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diap. 287)",
   "enunciado": "Mujer de 54 años con cáncer gástrico avanzado y un nódulo periumbilical indurado, no doloroso, de aspecto fibroso. ¿Cómo se llama y qué significa?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Nódulo de la hermana María José: enfermedad metastásica"
    },
    {
     "id": "b",
     "texto": "Ganglio de Irish: hallazgo benigno sin importancia"
    },
    {
     "id": "c",
     "texto": "Hernia umbilical: sin relación con el cáncer"
    },
    {
     "id": "d",
     "texto": "Ganglio de Virchow: enfermedad local controlable"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "nódulo periumbilical indurado",
   "por_que_correcta": "El nódulo de la hermana María José es una metástasis periumbilical: nódulo subcutáneo, indurado, de consistencia fibrosa, generalmente indoloro. Junto con el ganglio de Virchow (supraclavicular izquierdo, signo de Troisier) y el de Irish (axilar izquierdo), indica enfermedad metastásica.",
   "por_que_no": {
    "b": "El ganglio de Irish es axilar izquierdo y también indica metástasis.",
    "c": "Un nódulo indurado en un paciente con cáncer gástrico avanzado debe considerarse metástasis.",
    "d": "El ganglio de Virchow es supraclavicular izquierdo, y también es metástasis."
   },
   "fuentes": {
    "docente": "Diapositiva 287 del Dr. Yan Quiroz: «Nódulo de la Hermana María Josefa; ganglio de Irish; diseminación contigua por infiltración peritoneal (la más común); nódulos subcutáneos, indurados, de consistencia fibrosa y apariencia avascular, generalmente no dolorosos y poco pruriginosos…; Troisier: ganglio de Virchow». Diap. 288: Julia Dempsey (hermana María José).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 287.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 288."
   ]
  },
  {
   "id": "ESP1-C-074",
   "especialidad": "esp1",
   "tema": "Cáncer gástrico",
   "subtema": "Técnica quirúrgica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Carcinoma gástrico (diaps. 598 y 600)",
   "enunciado": "Durante una gastrectomía por adenocarcinoma gástrico pT3, el residente propone conservar el epiplón mayor para disminuir el tiempo quirúrgico. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Omentectomía estándar, porque el tumor es T3"
    },
    {
     "id": "b",
     "texto": "La omentectomía solo se hace en los T1"
    },
    {
     "id": "c",
     "texto": "Resecar solo el epiplón menor y conservar el mayor"
    },
    {
     "id": "d",
     "texto": "Conservar el epiplón en todos los casos"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "adenocarcinoma gástrico pT3",
   "por_que_correcta": "Según la guía japonesa que cita el docente, la omentectomía estándar se hace junto a la gastrectomía en tumores T3 o más profundos. En los T1 y T2, el epiplón situado a más de 3 cm de la arcada gastroepiploica puede preservarse.",
   "por_que_no": {
    "b": "Es al revés: en los T1 puede preservarse.",
    "c": "En T3 se reseca el epiplón mayor.",
    "d": "Solo puede preservarse en T1-T2."
   },
   "fuentes": {
    "docente": "Diapositiva 600 del Dr. Yan Quiroz: «Omentectomía: se debe realizar omentectomía estándar junto a gastrectomía en tumores T3 o más profundos. Para tumores T1 y T2 puede ser preservado a 3 cm de arcada gastroepiploica» (Japanese Gastric Cancer Treatment Guidelines). Diap. 598: «Para los tumores T1-2, el epiplón más allá de 3 cm de la arcada gastroepiploica puede ser preservado».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 600.",
    "Yan Quiroz EF. Carcinoma gástrico (resumido) [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 598."
   ]
  },
  {
   "id": "ESP1-C-075",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de recto: técnica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer rectal (diaps. 161, 164 y 165); adaptada de la complementaria n.º 174 del banco consolidado de Oncología",
   "enunciado": "Mujer de 60 años con adenocarcinoma de recto medio que irá a resección anterior baja. El docente insiste en hacer una escisión mesorrectal total. ¿En qué consiste?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Sinónimo de amputación abdominoperineal"
    },
    {
     "id": "b",
     "texto": "Extirpación obligatoria del aparato esfinteriano"
    },
    {
     "id": "c",
     "texto": "Técnica que sustituye a la radioterapia en todos los casos"
    },
    {
     "id": "d",
     "texto": "Extirpar en bloque el mesorrecto con su fascia intacta"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "escisión mesorrectal total",
   "por_que_correcta": "La escisión mesorrectal total extirpa en bloque el mesorrecto, con sus estructuras vasculares y linfáticas, la grasa y la fascia mesorrectal, como un «paquete del tumor», mediante una disección precisa diseñada para preservar los nervios autonómicos. Se aplica tanto en la resección anterior baja como en la abdominoperineal, y facilita la linfadenectomía y los márgenes circunferenciales negativos.",
   "por_que_no": {
    "a": "Es una técnica que se aplica en la resección anterior y en la abdominoperineal; no es sinónimo de esta última.",
    "b": "La técnica se usa también en la resección anterior baja, que conserva el esfínter.",
    "c": "Es complementaria a la neoadyuvancia, no una alternativa."
   },
   "fuentes": {
    "docente": "Diapositiva 161 de Cáncer rectal del Dr. Yan Quiroz: «la excisión mesorrectal total (EMT) es recomendada. Una EMT involucra una remoción en bloque del mesorecto, incluyendo estructuras vasculares y linfáticas, tejido graso, y la fascia mesorectal como un “paquete del tumor” a través de una disección precisa y está diseñada para preservar los nervios autonómicos». Diap. 164: RAB con EMT; «una EMT amplia… mejorar la probabilidad de conseguir márgenes circunferenciales negativos». Diap. 165: RAP con EMT.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 161.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 164.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 165."
   ]
  },
  {
   "id": "ESP1-C-076",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de recto: anatomía",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer rectal (diaps. 12 y 14)",
   "enunciado": "Durante la disección del recto, el cirujano sigue el plano entre la fascia mesorrectal y la fascia parietal presacra por detrás. ¿Cómo se llaman, respectivamente, la fascia que limita el mesorrecto por delante y la fascia presacra?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Fascia de Denonvilliers y fascia de Waldeyer"
    },
    {
     "id": "b",
     "texto": "Fascia de Toldt y fascia renal de Gerota"
    },
    {
     "id": "c",
     "texto": "Fascia de Buck y fascia perineal de Colles"
    },
    {
     "id": "d",
     "texto": "Fascia de Scarpa y fascia de Camper"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "fascia parietal presacra",
   "por_que_correcta": "El mesorrecto es el tejido graso, linfovascular y nervioso que rodea al recto, delimitado por la fascia mesorrectal. Por delante lo limita la fascia de Denonvilliers y por detrás la fascia parietal presacra o de Waldeyer; ambas se unen a la altura de S4 formando el ligamento rectosacro.",
   "por_que_no": {
    "b": "La de Toldt se refiere al colon; la de Gerota rodea al riñón.",
    "c": "Son fascias del pene y del periné.",
    "d": "Son fascias de la pared abdominal."
   },
   "fuentes": {
    "docente": "Diapositiva 14 de Cáncer rectal del Dr. Yan Quiroz: «Mesorrecto: es el tejido graso que rodea al recto. Delimitado por la fascia mesorrectal (fascia visceral). Por delante: fascia de Denonvilliers. Por detrás: fascia parietal presacra o de Waldeyer… La FMR y la parietal se juntan a la altura de S4, y forman el ligamento rectosacro». Diap. 12: el mesorrecto se extiende desde el promontorio hasta los 2-3 últimos centímetros del recto.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 14.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 12."
   ]
  },
  {
   "id": "ESP1-C-077",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de recto: técnica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer rectal (diaps. 121 y 165)",
   "enunciado": "Varón de 64 años con adenocarcinoma de recto inferior a 3 cm del margen anal que, tras la neoadyuvancia, sigue invadiendo directamente el esfínter anal externo. ¿Qué cirugía corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección abdominoperineal"
    },
    {
     "id": "b",
     "texto": "Escisión local transanal de espesor total"
    },
    {
     "id": "c",
     "texto": "Hemicolectomía izquierda"
    },
    {
     "id": "d",
     "texto": "Resección anterior alta con anastomosis"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "invadiendo directamente el esfínter anal externo",
   "por_que_correcta": "La resección abdominoperineal con escisión mesorrectal total está indicada cuando el tumor invade directamente el esfínter anal o los elevadores, o cuando un margen negativo implicaría perder la función esfinteriana. Reseca en bloque rectosigmoides, recto, ano, mesorrecto y tejido perianal, y requiere colostomía. La resección anterior baja, que preserva el ano, se reserva para lesiones a más de 5 cm del margen anal.",
   "por_que_no": {
    "b": "No es posible ni oncológicamente adecuada con invasión del esfínter.",
    "c": "No trata un tumor del recto inferior.",
    "d": "La resección anterior alta trata el sigmoides distal y el recto superior."
   },
   "fuentes": {
    "docente": "Diapositiva 165 de Cáncer rectal del Dr. Yan Quiroz: «Una resección abdominoperineal (RAP) con EMT debería ser realizada cuando el tumor invade DIRECTAMENTE el esfínter anal o los músculos elevadores… involucra una resección en bloque del rectosigmoides, el recto y el ano… y es necesario la elaboración de una colostomía». Diap. 121: RAB indicada cuando la lesión está a más de 8 cm de la línea pectínea o más de 5 cm del margen anal; RAP por debajo. Diap. 156: tipos de resección anterior.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 165.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 121.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 156."
   ]
  },
  {
   "id": "ESP1-C-078",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de recto: definición",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer rectal (diap. 126)",
   "enunciado": "Un tumor del intestino grueso se localiza a 10 cm del margen anal medido con proctoscopia rígida. Según la definición que usa el docente, ¿se considera cáncer de recto?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Sí: el recto llega hasta 12 cm del margen anal"
    },
    {
     "id": "b",
     "texto": "Solo si sangra o produce tenesmo"
    },
    {
     "id": "c",
     "texto": "No: a esa altura siempre es sigmoides"
    },
    {
     "id": "d",
     "texto": "No: solo es recto lo que está a menos de 5 cm"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "a 10 cm del margen anal",
   "por_que_correcta": "El docente define el cáncer rectal como la lesión localizada dentro de los 12 cm del margen anal por proctoscopia rígida, apoyándose en el estudio de Kapiteijn sobre recurrencia local según la altura. La resonancia también ayuda: el recto está por debajo de la línea entre el promontorio y el borde superior de la sínfisis.",
   "por_que_no": {
    "b": "La definición se basa en la altura, no en los síntomas.",
    "c": "A 10 cm del margen anal está dentro del límite de 12 cm.",
    "d": "5 cm marca el límite para la resección anterior baja, no la definición de recto."
   },
   "fuentes": {
    "docente": "Diapositiva 126 de Cáncer rectal del Dr. Yan Quiroz: «El cáncer rectal se ha definido como lesión cancerosa localizada dentro de los 12 cm del margen anal por proctoscopia rígida… estudio de Kapiteijn et al». Diapositiva 4 de Cáncer de colon, 2.ª parte: «El recto se encuentra debajo de una línea virtual desde el promontorio sacro hasta el borde superior de la sínfisis, según lo determinado por resonancia magnética».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 126.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 4."
   ]
  },
  {
   "id": "ESP1-C-079",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 2.ª parte (diap. 20)",
   "enunciado": "Tras una hemicolectomía derecha por adenocarcinoma, el informe dice «8 ganglios examinados, todos negativos». ¿Qué problema tiene esta estadificación según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Debe repetirse la colonoscopia completa"
    },
    {
     "id": "b",
     "texto": "Se necesitan al menos 12 ganglios examinados"
    },
    {
     "id": "c",
     "texto": "Ninguno: 8 ganglios negativos confirman N0"
    },
    {
     "id": "d",
     "texto": "Hay que hacer biopsia de ganglio centinela"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "8 ganglios examinados, todos negativos",
   "por_que_correcta": "Un mínimo de 12 ganglios linfáticos debe examinarse para establecer el estado ganglionar N en el cáncer de colon. Con menos, el N0 no es fiable, y el muestreo inadecuado es además un criterio de alto riesgo en el estadio II.",
   "por_que_no": {
    "a": "El problema es la linfadenectomía, no la colonoscopia.",
    "c": "Con menos de 12 ganglios el N0 no es fiable.",
    "d": "El ganglio centinela no es el estándar del cáncer de colon."
   },
   "fuentes": {
    "docente": "Diapositiva 20 de Cáncer de colon, 2.ª parte, del Dr. Yan Quiroz: «Un mínimo de 12 GANGLIOS LINFÁTICOS NECESITAN SER EXAMINADOS para establecer el estado ganglionar N… Los ganglios linfáticos dejados atrás indican una resección incompleta (R2)». Diap. 62: «inadecuado muestreo ganglionar (< 12 ganglios)» entre los factores de alto riesgo en estadio II.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 20.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-C-080",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: adyuvancia",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 2.ª parte (diap. 62)",
   "enunciado": "Varón de 66 años con hemicolectomía izquierda por adenocarcinoma pT3N0M0 (estadio II), MSS, que debutó con obstrucción intestinal y con invasión linfovascular en la pieza. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Considerar quimioterapia adyuvante (alto riesgo)"
    },
    {
     "id": "b",
     "texto": "Ningún tratamiento adicional, porque es estadio II"
    },
    {
     "id": "c",
     "texto": "Reintervención para ampliar márgenes de resección"
    },
    {
     "id": "d",
     "texto": "Radioterapia pélvica adyuvante de 5 semanas"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "debutó con obstrucción intestinal y con invasión linfovascular",
   "por_que_correcta": "Los pacientes en estadio II, MSS o MMRp, con alto riesgo de recurrencia sistémica pueden considerarse para 6 meses de quimioterapia adyuvante. El docente define el alto riesgo por: T4, histología poco diferenciada, invasión linfovascular o perineural, gemación tumoral, obstrucción, perforación, márgenes positivos o indeterminados y menos de 12 ganglios.",
   "por_que_no": {
    "b": "Tiene dos criterios de alto riesgo: obstrucción e invasión linfovascular.",
    "c": "No hay datos de margen positivo.",
    "d": "La radioterapia no es el tratamiento adyuvante del cáncer de colon."
   },
   "fuentes": {
    "docente": "Diapositiva 62 de Cáncer de colon, 2.ª parte, del Dr. Yan Quiroz: «Paciente en estadio II, que es MSS / MMRp y con alto riesgo de RECURRENCIA SISTÉMICA, definido como aquellos con características de pobre pronóstico tales como: tumores T4; histología poco diferenciada o indiferenciada; invasión linfovascular; invasión perineural; tumor budding; obstrucción intestinal; lesiones con perforación localizada o cerrada; márgenes quirúrgicos positivos o indeterminados; inadecuado muestreo ganglionar (< 12 ganglios). Pueden considerarse para 6 meses de quimioterapia adyuvante…».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62."
   ]
  },
  {
   "id": "ESP1-C-081",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer hereditario",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 2.ª parte (diap. 84)",
   "enunciado": "Mujer de 68 años, sin antecedentes familiares, con adenocarcinoma de colon sigmoides recién resecado. ¿Qué estudio molecular recomienda el docente en su tumor?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ninguno, porque no tiene antecedentes familiares"
    },
    {
     "id": "b",
     "texto": "Inestabilidad de microsatélites (IMS/MMR)"
    },
    {
     "id": "c",
     "texto": "Mutación germinal de BRCA1 y BRCA2"
    },
    {
     "id": "d",
     "texto": "Mutación germinal de CDH1 (E-cadherina)"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "sin antecedentes familiares",
   "por_que_correcta": "El docente recomienda la prueba universal de MMR o IMS en todos los pacientes con cáncer de colon o recto, para identificar el síndrome de Lynch, orientar la inmunoterapia en la enfermedad metastásica y decidir en estadios iniciales. No depende de la historia familiar.",
   "por_que_no": {
    "a": "La prueba es universal, con o sin antecedentes familiares.",
    "c": "BRCA1 se relaciona con mama y ovario.",
    "d": "CDH1 se relaciona con el cáncer gástrico difuso hereditario."
   },
   "fuentes": {
    "docente": "Diapositiva 84 de Cáncer de colon, 2.ª parte, del Dr. Yan Quiroz: «El panel recomienda la prueba universal de MMR (deficiencia de reparación de emparejamientos erróneos) o IMS (inestabilidad de microsatélites) para todos los pacientes con antecedentes personales de cáncer de colon o recto, con el fin de identificar individuos con síndrome de Lynch. Esto sirve para informar el uso de inmunoterapia en pacientes con enfermedad metastásica…». Diap. 76: genes MMR (MLH1, MSH2, MSH6, PMS2, EpCAM) en el síndrome de Lynch.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 84.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 76."
   ]
  },
  {
   "id": "ESP1-C-082",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer hereditario",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 1.ª parte (diap. 134)",
   "enunciado": "Varón de 44 años con adenocarcinoma de colon derecho mucinoso con abundante infiltrado linfocitario. Su madre tuvo cáncer de endometrio a los 48 años. ¿Qué indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Solo seguimiento con CEA cada 6 meses"
    },
    {
     "id": "b",
     "texto": "Indicar directamente colectomía total profiláctica a sus hijos"
    },
    {
     "id": "c",
     "texto": "Cumple criterios de Bethesda: estudiar IMS o MMR en el tumor"
    },
    {
     "id": "d",
     "texto": "No requiere estudio porque tiene más de 40 años"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "Su madre tuvo cáncer de endometrio a los 48 años",
   "por_que_correcta": "Cumple varios criterios de Bethesda: cáncer colorrectal antes de los 50 años, histología con componente mucinoso e infiltrado linfocitario antes de los 60, y un familiar de primer grado con una neoplasia relacionada con Lynch (endometrio) antes de los 50. Si cumple alguno, el docente indica estudiar en el tejido la inestabilidad de microsatélites o la pérdida de expresión de las proteínas reparadoras.",
   "por_que_no": {
    "a": "El CEA sirve para el seguimiento, no para identificar el síndrome de Lynch.",
    "b": "Primero hay que confirmar el síndrome; no se indica cirugía profiláctica sin diagnóstico.",
    "d": "El criterio de edad de Bethesda es menos de 50 años, y además tiene otros criterios."
   },
   "fuentes": {
    "docente": "Diapositiva 134 de Cáncer de colon, 1.ª parte, del Dr. Yan Quiroz, «Criterios de Bethesda (2004)»: «1. CCR diagnosticado antes de los 50 años… 3. CCR con infiltración o respuesta linfocitaria intra y peritumoral, células en anillo de sello o componente tumoral mucinoso… diagnosticado antes de los 60 años; 4. Paciente con CCR y uno o más familiares de 1.er grado con CCR u otra neoplasia relacionada con CCRHNP (endometrio, estómago, ovario…) diagnosticada antes de los 50 años… Si un paciente con CCR CUMPLE ALGUNO de los criterios de Bethesda, DEBE ESTUDIARSE EN EL TEJIDO TUMORAL la presencia de inestabilidad de microsatélites y/o pérdida de expresión de las proteínas reparadoras».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 134."
   ]
  },
  {
   "id": "ESP1-C-083",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: urgencias",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 1.ª parte (diaps. 202 y 203)",
   "enunciado": "Mujer de 72 años con obstrucción intestinal por un adenocarcinoma resecable del colon sigmoides, estable. ¿Qué opción describe el docente para lesiones distales como esta?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hemicolectomía derecha de urgencia"
    },
    {
     "id": "b",
     "texto": "Quimioterapia sistémica como único tratamiento"
    },
    {
     "id": "c",
     "texto": "Esperar a que la obstrucción ceda sola sin intervenir"
    },
    {
     "id": "d",
     "texto": "Stent descompresivo y luego cirugía electiva"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "adenocarcinoma resecable del colon sigmoides",
   "por_que_correcta": "Para el cáncer de colon resecable que causa obstrucción, el docente da como opciones la colectomía en un tiempo con linfadenectomía en bloque, la resección con derivación, o la derivación o el stent seguido de colectomía. Los stents se reservan sobre todo para lesiones distales, para descomprimir y operar después de forma electiva con anastomosis primaria; sus resultados oncológicos son similares a los de la cirugía.",
   "por_que_no": {
    "a": "No trata un tumor del sigmoides.",
    "b": "Es un tumor resecable; la cirugía sigue siendo el pilar.",
    "c": "Una obstrucción por tumor no se resuelve sola."
   },
   "fuentes": {
    "docente": "Diapositiva 202 de Cáncer de colon, 1.ª parte, del Dr. Yan Quiroz: «Para el cáncer de colon resecable que causa obstrucción manifiesta, las opciones son: colectomía en un solo tiempo con remoción en bloque de ganglios linfáticos regionales; resección con derivación; o derivación o stent (en casos seleccionados) seguido de colectomía. Los stents generalmente se reservan para lesiones distales en las que un stent puede permitir descompresión del colon proximal con posterior colostomía electiva con anastomosis primaria». Diap. 203: resultados oncológicos del stent seguido de cirugía electiva similares a los de la cirugía.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 202.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 203."
   ]
  },
  {
   "id": "ESP1-C-084",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: técnica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 1.ª parte (diaps. 207 y 211)",
   "enunciado": "Durante una sigmoidectomía oncológica, el cirujano liga la arteria mesentérica inferior pegada a su origen en la aorta. ¿Qué estructura corre riesgo según el docente y con qué consecuencia?",
   "alternativas": [
    {
     "id": "a",
     "texto": "El uréter derecho, con fístula urinaria siempre"
    },
    {
     "id": "b",
     "texto": "La arteria esplénica, con infarto esplénico extenso"
    },
    {
     "id": "c",
     "texto": "El plexo hipogástrico: disfunción intestinal y urinaria"
    },
    {
     "id": "d",
     "texto": "El nervio femoral, con debilidad del cuádriceps"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "pegada a su origen en la aorta",
   "por_que_correcta": "A unos 2 cm del nacimiento de la arteria mesentérica inferior en la aorta está el plexo hipogástrico. La ligadura alta mejora la linfadenectomía, pero puede alterar la inervación y causar disfunción intestinal y urinaria, además de disminuir la circulación del asa proximal y aumentar el riesgo de fístula anastomótica.",
   "por_que_no": {
    "a": "No es la estructura que el docente relaciona con la ligadura alta de la mesentérica inferior.",
    "b": "La arteria esplénica no se relaciona con esta ligadura.",
    "d": "No está en el campo de la ligadura de la mesentérica inferior."
   },
   "fuentes": {
    "docente": "Diapositiva 207 de Cáncer de colon, 1.ª parte, del Dr. Yan Quiroz: «A 2 cm del nacimiento de la arteria mesentérica inferior de la aorta abdominal, está el PLEXO HIPOGÁSTRICO… ligadura baja vs. ligadura alta». Diap. 211: la ligadura alta «produce disminución en la circulación del asa colónica proximal y esto genera más riesgo de fístulas en la anastomosis; alteración de la inervación y presentar disfunción intestinal y urinaria».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 207.",
    "Yan Quiroz EF. Cáncer de colon, 1.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 211."
   ]
  },
  {
   "id": "ESP1-C-085",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: técnica",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 2.ª parte (diap. 20)",
   "enunciado": "Varón de 70 años con cáncer de colon transverso perforado y peritonitis. El residente propone una colectomía laparoscópica. ¿Qué indica el docente sobre el abordaje mínimamente invasivo?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Es preferible en la perforación porque reduce la contaminación"
    },
    {
     "id": "b",
     "texto": "Es obligatorio en todos los casos de cáncer de colon"
    },
    {
     "id": "c",
     "texto": "No en el localmente avanzado, obstruido o perforado"
    },
    {
     "id": "d",
     "texto": "Solo está contraindicado en mujeres mayores"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "perforado y peritonitis",
   "por_que_correcta": "Entre los principios de la colectomía, el docente indica que el abordaje mínimamente invasivo requiere experiencia del cirujano y no está indicado generalmente para el cáncer localmente avanzado, la obstrucción intestinal aguda o la perforación por el cáncer.",
   "por_que_no": {
    "a": "La perforación es justamente una situación en la que no se indica.",
    "b": "Es una opción, no una obligación, y tiene contraindicaciones.",
    "d": "El sexo no es criterio."
   },
   "fuentes": {
    "docente": "Diapositiva 20 de Cáncer de colon, 2.ª parte, del Dr. Yan Quiroz: «Los abordajes mínimamente invasivos deben ser considerados sobre la base de los siguientes criterios: el cirujano tiene experiencia en la realización de operaciones colorrectales asistidas por laparoscopia; los abordajes mínimamente invasivos no están indicados generalmente para cáncer localmente avanzado u obstrucción intestinal aguda o perforación por el cáncer».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 20."
   ]
  },
  {
   "id": "ESP1-C-086",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de recto: neoadyuvancia",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer rectal (diaps. 258 y 259)",
   "enunciado": "Mujer de 55 años con adenocarcinoma de recto medio localmente avanzado. El comité propone «terapia neoadyuvante total». ¿Qué significa?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Dar solo radioterapia de ciclo corto antes de operar"
    },
    {
     "id": "b",
     "texto": "Reemplazar definitivamente la cirugía por quimioterapia"
    },
    {
     "id": "c",
     "texto": "Operar primero y dar toda la quimioterapia después"
    },
    {
     "id": "d",
     "texto": "Dar quimioterapia y quimiorradioterapia antes de la cirugía"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "terapia neoadyuvante total",
   "por_que_correcta": "La terapia neoadyuvante total (TNT) administra antes de la cirugía tanto la quimioterapia sistémica (por ejemplo, FOLFOX o CAPEOX durante 12-16 semanas) como la quimiorradioterapia, en un orden alterno, con reestadificación posterior.",
   "por_que_no": {
    "a": "La TNT combina quimioterapia sistémica y quimiorradioterapia.",
    "b": "La TNT se hace antes de la cirugía; no la reemplaza por definición.",
    "c": "Eso es adyuvancia, no neoadyuvancia total."
   },
   "fuentes": {
    "docente": "Diapositiva 258 de Cáncer rectal del Dr. Yan Quiroz: «Es la administración y/o combinaciones de quimioterapia sistémica… y quimiorradioterapia… en un orden alterno antes de la cirugía. TERAPIA NEOADYUVANTE TOTAL (TNT)». Diap. 259: «Quimioterapia (12-16 semanas) FOLFOX o CAPEOX… reestadiaje con sigmoidoscopia ± RM».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 258.",
    "Yan Quiroz EF. Cáncer rectal [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 259."
   ]
  },
  {
   "id": "ESP1-C-087",
   "especialidad": "esp1",
   "tema": "Colon y recto",
   "subtema": "Cáncer de colon: estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de colon, 2.ª parte (diaps. 3 y 4)",
   "enunciado": "Varón de 58 años con adenocarcinoma de colon descendente confirmado por biopsia, sin sospecha de metástasis. ¿Qué estudios de estadificación indica el docente antes de operar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "PET-CT de cuerpo entero como único estudio"
    },
    {
     "id": "b",
     "texto": "Colonoscopia completa, CEA y TC de tórax, abdomen y pelvis"
    },
    {
     "id": "c",
     "texto": "Solo radiografía de tórax y ecografía abdominal"
    },
    {
     "id": "d",
     "texto": "Ningún estudio: se opera directamente sin demora"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "sin sospecha de metástasis",
   "por_que_correcta": "Para el cáncer de colon apropiado para resección, el docente pide biopsia y revisión de la patología, test de IMS/MMR, colonoscopia completa, hemograma, perfil bioquímico, CEA y TC de tórax, abdomen y pelvis (considerando RM si hay dudas). La colonoscopia completa descarta lesiones sincrónicas.",
   "por_que_no": {
    "a": "El PET no reemplaza a la TC en la estadificación inicial habitual.",
    "c": "No es suficiente para estadificar.",
    "d": "La estadificación es necesaria para decidir el tratamiento."
   },
   "fuentes": {
    "docente": "Diapositiva 3 de Cáncer de colon, 2.ª parte, del Dr. Yan Quiroz: «Cáncer de colon apropiado para resección (no metastásico): biopsia; test de IMS/MMR; revisión de la patología; colonoscopia; hemograma, perfil bioquímico, CEA; TAC tórax, abdomen-pelvis; considerar RMN abdomen / pelvis». Diap. 4: RM para distinguir recto de sigmoides bajo y para metástasis hepáticas potencialmente resecables.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 3.",
    "Yan Quiroz EF. Cáncer de colon, 2.ª parte [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 4."
   ]
  },
  {
   "id": "ESP1-C-088",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Carcinoma hepatocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de hígado (diap. 183); adaptada de la complementaria n.º 195 del banco consolidado de Oncología",
   "enunciado": "Varón de 58 años con cirrosis por hepatitis C, Child-Pugh A, sin nódulos conocidos. ¿Cómo debe vigilarse la aparición de carcinoma hepatocelular según el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Ecografía y alfa-fetoproteína cada 6 meses"
    },
    {
     "id": "b",
     "texto": "TC trifásica de abdomen cada 3 meses"
    },
    {
     "id": "c",
     "texto": "Alfa-fetoproteína anual como única prueba"
    },
    {
     "id": "d",
     "texto": "No está indicada ninguna vigilancia activa"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "cirrosis por hepatitis C, Child-Pugh A",
   "por_que_correcta": "Los pacientes en riesgo (cirrosis Child-Pugh A o B de cualquier causa, hepatitis B o C, alcohol, esteatohepatitis metabólica) se tamizan con ecografía más alfa-fetoproteína; si son negativas, se repiten cada 6 meses. Un nódulo mayor de 10 mm o una AFP positiva llevan a estudio con TC trifásica o RM.",
   "por_que_no": {
    "b": "La TC trifásica se reserva para caracterizar un nódulo, no para el tamizaje.",
    "c": "La AFP sola no es sensible ni específica para detectar el hepatocarcinoma.",
    "d": "Es un paciente de alto riesgo: necesita tamizaje."
   },
   "fuentes": {
    "docente": "Diapositiva 183 de Cáncer de hígado del Dr. Yan Quiroz, «Carcinoma hepatocelular: tamizaje»: pacientes en riesgo (cirrosis Child-Turcotte-Pugh A o B de cualquier etiología, hepatitis B o C, alcohol, esteatohepatitis…), «Ultrasonido (US) + alfa fetoproteína (AFP)… Ultrasonido negativo: repetir US + AFP en 6 meses… Nódulo(s) US > 10 mm: estudio diagnóstico adicional». Diap. 172: la AFP «no es una prueba diagnóstica sensible o específica».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 183.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 172."
   ]
  },
  {
   "id": "ESP1-C-089",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Carcinoma hepatocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de hígado (diaps. 160 y 167)",
   "enunciado": "Varón de 62 años con cirrosis alcohólica y un nódulo hepático de 2,5 cm en la ecografía de control. Se pide una TC trifásica. ¿Qué patrón de imagen es característico del carcinoma hepatocelular?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Captación arterial intensa y lavado en la fase venosa"
    },
    {
     "id": "b",
     "texto": "Realce periférico nodular con llenado centrípeto progresivo"
    },
    {
     "id": "c",
     "texto": "Lesión hipodensa sin realce en ninguna fase"
    },
    {
     "id": "d",
     "texto": "Cicatriz central con realce tardío"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "Se pide una TC trifásica",
   "por_que_correcta": "El perfil clásico del carcinoma hepatocelular es la captación arterial intensa seguida de lavado del contraste (hipointensidad) en la fase venosa retrasada. Los nódulos mayores de 1 cm en un paciente en riesgo se evalúan con TC trifásica o RM.",
   "por_que_no": {
    "b": "Ese patrón de llenado centrípeto no es el que describe el docente para el hepatocarcinoma.",
    "c": "Una lesión sin realce no corresponde al patrón arterial del hepatocarcinoma.",
    "d": "No es el perfil clásico del hepatocarcinoma."
   },
   "fuentes": {
    "docente": "Diapositiva 160 de Cáncer de hígado del Dr. Yan Quiroz: «El perfil clásico de imagen asociado con lesión CHC se caracteriza por la captación arterial intensa o realzada seguido de lavado contraste o hipointensidad en la fase venosa retrasada». Diap. 167: «Nódulos hepáticos mayores de 1 cm de tamaño: TC trifásica realzada con contraste o RM».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 160.",
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 167."
   ]
  },
  {
   "id": "ESP1-C-090",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Carcinoma hepatocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de hígado (diap. 172)",
   "enunciado": "Mujer de 65 años con cirrosis y un nódulo hepático de 3 cm con patrón típico de carcinoma hepatocelular en la RM, pero la alfa-fetoproteína es normal (12 ng/mL). El residente dice que una AFP normal descarta el cáncer. ¿Qué responde el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hay que esperar a que la AFP supere 400 ng/mL para diagnosticar"
    },
    {
     "id": "b",
     "texto": "Tiene razón: con AFP normal no puede ser un hepatocarcinoma"
    },
    {
     "id": "c",
     "texto": "La AFP es normal en casi la mitad de los hepatocarcinomas"
    },
    {
     "id": "d",
     "texto": "La AFP normal indica que el nódulo es una metástasis"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "la alfa-fetoproteína es normal (12 ng/mL)",
   "por_que_correcta": "El docente insiste en que la AFP no es una prueba diagnóstica sensible ni específica. En una serie de 1 158 pacientes con hepatocarcinoma, solo el 18 % tenía valores mayores de 400 ng/mL y el 46 % tenía niveles normales (< 20 ng/mL). Manda el patrón de imagen.",
   "por_que_no": {
    "a": "Solo el 18 % supera 400 ng/mL; esperar retrasa el tratamiento.",
    "b": "Casi la mitad de los hepatocarcinomas tiene AFP normal.",
    "d": "Una AFP normal no orienta a metástasis."
   },
   "fuentes": {
    "docente": "Diapositiva 172 de Cáncer de hígado del Dr. Yan Quiroz: «Aunque el AFP sérico ha sido utilizado como un marcador para CHC, NO ES UNA PRUEBA DIAGNÓSTICA SENSIBLE O ESPECÍFICA PARA CHC. Los niveles de AFP en suero > 400 ng/ml se observan sólo en un pequeño porcentaje… Sólo el 18 % de los pacientes tenían valores > 400 ng/mL y el 46 % de los pacientes tenían niveles séricos normales AFP < 20 ng/ml. En una serie de 1.158 pacientes con CHC».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 172."
   ]
  },
  {
   "id": "ESP1-C-091",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Carcinoma hepatocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de hígado (diap. 267)",
   "enunciado": "Varón de 55 años con cirrosis descompensada y tres nódulos de carcinoma hepatocelular de 2,0, 2,5 y 2,8 cm, sin invasión vascular ni enfermedad extrahepática. ¿Cumple los criterios de Milán para trasplante?",
   "alternativas": [
    {
     "id": "a",
     "texto": "No: los nódulos deben medir menos de 1 cm"
    },
    {
     "id": "b",
     "texto": "No: la cirrosis descompensada contraindica siempre el trasplante"
    },
    {
     "id": "c",
     "texto": "Sí: hasta tres nódulos de 3 cm o menos"
    },
    {
     "id": "d",
     "texto": "No: solo se admite un nódulo único de 5 cm"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "tres nódulos de carcinoma hepatocelular de 2,0, 2,5 y 2,8 cm",
   "por_que_correcta": "Los criterios de Milán (Mazzaferro, 1996) son: tumor único de 5 cm o menos, o no más de tres nódulos de 3 cm o menos, sin invasión macrovascular. Con ellos, el trasplante logró supervivencias a 4 años del 85 % y fueron adoptados por UNOS. Este paciente los cumple.",
   "por_que_no": {
    "a": "El límite es 3 cm por nódulo (o 5 cm si es único).",
    "b": "El trasplante trata a la vez el tumor y la cirrosis; los criterios de Milán se pensaron para pacientes con cirrosis.",
    "d": "También se admiten hasta tres nódulos de 3 cm o menos."
   },
   "fuentes": {
    "docente": "Diapositiva 267 de Cáncer de hígado del Dr. Yan Quiroz: «Mazzaferro et al propusieron los criterios de Milán (tumores únicos ≤ 5 cm de diámetro o no más de tres nódulos ≤ 3 cm de diámetro en pacientes con tumores múltiples y sin invasión macrovascular) para pacientes con CHC irresecable y cirrosis. Las tasas de SG y SLR a 4 años fueron del 85 % y 92 %… adoptados por UNOS».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 267."
   ]
  },
  {
   "id": "ESP1-C-092",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Carcinoma hepatocelular",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de hígado (diap. 188)",
   "enunciado": "Mujer de 60 años con hepatocarcinoma único de 4 cm en el segmento VI, cirrosis Child-Pugh A, sin hipertensión portal, ECOG 0 y remanente hepático adecuado. ¿Cuál es el tratamiento preferido?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Resección hepática"
    },
    {
     "id": "b",
     "texto": "Cuidados paliativos"
    },
    {
     "id": "c",
     "texto": "Observación con ecografía cada 6 meses"
    },
    {
     "id": "d",
     "texto": "Solo quimioterapia sistémica"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "sin hipertensión portal, ECOG 0 y remanente hepático adecuado",
   "por_que_correcta": "En el algoritmo del docente, el paciente potencialmente resecable y operable (buen ECOG), Child-Pugh A o B, sin hipertensión portal, con tumor accesible y reserva y remanente hepático adecuados tiene como tratamiento preferido la resección.",
   "por_que_no": {
    "b": "Tiene una opción curativa.",
    "c": "Ya tiene un cáncer diagnosticado: la vigilancia es para el tamizaje.",
    "d": "No es el tratamiento de un tumor resecable con buena función hepática."
   },
   "fuentes": {
    "docente": "Diapositiva 188 de Cáncer de hígado del Dr. Yan Quiroz, evaluación quirúrgica: «Potencialmente resecable o transplantable según la carga tumoral y operable por buen ECOG o comorbilidad aceptable: Child Turcotte Pugh A, B; no hipertensión portal; localización accesible del tumor; reserva hepática adecuada; remanente hepático adecuado… RESECCIÓN (preferido)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de hígado [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 188."
   ]
  },
  {
   "id": "ESP1-C-093",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Colangiocarcinoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Colangiocarcinoma (diaps. 9 y 62)",
   "enunciado": "Varón de 66 años con ictericia indolora progresiva. La colangiorresonancia muestra una estenosis en la confluencia de los conductos hepáticos, con vesícula no distendida. ¿Qué localización es y cuál es la más frecuente del colangiocarcinoma?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Distal, la más frecuente (70 %)"
    },
    {
     "id": "b",
     "texto": "Hiliar (Klatskin), la más frecuente"
    },
    {
     "id": "c",
     "texto": "Vesicular, la más frecuente"
    },
    {
     "id": "d",
     "texto": "Intrahepática, la más frecuente (80 %)"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "estenosis en la confluencia de los conductos hepáticos",
   "por_que_correcta": "Según el docente, el colangiocarcinoma es intrahepático en el 20 %, hiliar en el 50-60 % y distal (del cístico a la ampolla de Vater) en el 20-30 %. El hiliar es el tumor de Klatskin. Como la obstrucción está por encima del cístico, la vesícula no se distiende: el signo de Courvoisier orienta a obstrucción distal.",
   "por_que_no": {
    "a": "El distal es el 20-30 %.",
    "c": "El carcinoma de vesícula es otra entidad.",
    "d": "El intrahepático es el 20 % y no suele dar ictericia precoz."
   },
   "fuentes": {
    "docente": "Diapositiva 9 de Colangiocarcinoma del Dr. Yan Quiroz: «Intrahepático 20 %; Hiliar 50 %-60 %; Distal 20 %-30 % (desde el conducto cístico hasta la ampolla de Vater)». Diap. 62: «Colangiocarcinoma hiliar: tumor de Klatskin».",
    "guia": "Guía, p. 47: signo de Courvoisier, «sugiere obstrucción distal por debajo del cístico, y por tanto orienta a tumor distal o pancreático, no a un tumor hiliar».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 9.",
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 62.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 47."
   ]
  },
  {
   "id": "ESP1-C-094",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Colangiocarcinoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Colangiocarcinoma (diap. 74)",
   "enunciado": "Un tumor de Klatskin se origina en la confluencia biliar y se extiende por el conducto hepático derecho hasta los conductos de segundo orden, sin afectar el izquierdo. ¿Qué tipo de Bismuth es?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Tipo IIIa"
    },
    {
     "id": "b",
     "texto": "Tipo II"
    },
    {
     "id": "c",
     "texto": "Tipo IV"
    },
    {
     "id": "d",
     "texto": "Tipo IIIb"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "por el conducto hepático derecho",
   "por_que_correcta": "La clasificación de Bismuth se basa en la afectación ductal: tipo I, cerca de la confluencia sin comprometerla; tipo II, en la confluencia sin extensión a los hepáticos; IIIa, extensión al hepático derecho hasta los conductos de segundo orden; IIIb, al izquierdo; IV, extensión bilateral a los de segundo orden.",
   "por_que_no": {
    "b": "El tipo II no se extiende a los conductos hepáticos.",
    "c": "El tipo IV se extiende a ambos lados.",
    "d": "El IIIb se extiende al hepático izquierdo."
   },
   "fuentes": {
    "docente": "Diapositiva 74 de Colangiocarcinoma del Dr. Yan Quiroz, «Clasificación de Bismuth, basada en la afectación ductal»: «Tipo I: origen cerca de la confluencia sin compromiso de los conductos hepáticos… Tipo II: origen en confluencia biliar sin extensión a los conductos hepáticos derecho o izquierdo… Tipo IIIa: … con extensión al hepático derecho hasta conductos de segundo orden; Tipo IIIb: … al hepático izquierdo…; Tipo IV: … extensión bilateral a conductos biliares de segundo orden».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 74."
   ]
  },
  {
   "id": "ESP1-C-095",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Colangiocarcinoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Colangiocarcinoma (diap. 13)",
   "enunciado": "Varón de 40 años con colitis ulcerosa de larga evolución que desarrolla ictericia, prurito y una estenosis biliar maligna. ¿Qué factor de riesgo de colangiocarcinoma es el más característico en este contexto?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Hemangioma hepático gigante"
    },
    {
     "id": "b",
     "texto": "Colelitiasis vesicular simple"
    },
    {
     "id": "c",
     "texto": "Colangitis esclerosante primaria"
    },
    {
     "id": "d",
     "texto": "Hepatitis A aguda previa"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "colitis ulcerosa de larga evolución",
   "por_que_correcta": "La colangitis esclerosante primaria, asociada a la colitis ulcerosa, es el factor de riesgo más característico del colangiocarcinoma. El docente cita además los quistes de la vía biliar, la enfermedad de Caroli, la hepatolitiasis, las parasitosis (Clonorchis, Opisthorchis), el thorotrast y la cirrosis.",
   "por_que_no": {
    "a": "Es un tumor benigno sin relación con el colangiocarcinoma.",
    "b": "No es el factor característico; lo es la hepatolitiasis.",
    "d": "La hepatitis A no figura entre los factores de riesgo que cita el docente."
   },
   "fuentes": {
    "docente": "Diapositiva 13 de Colangiocarcinoma del Dr. Yan Quiroz, «Factores de riesgo»: colangitis esclerosante primaria, quiste de la vía biliar, infección por Clonorchis sinensis y Opisthorchis viverrini, enfermedad de Caroli, quiste coledociano, hepatolitiasis, Thorotrast y «Cirrosis de cualquier naturaleza VHB, VHC, alcohol, tabaco, obesidad».",
    "guia": "Guía, p. 47: «Colangitis esclerosante primaria (el más característico, asociado a colitis ulcerosa)».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 13.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 47."
   ]
  },
  {
   "id": "ESP1-C-096",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Colangiocarcinoma",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Colangiocarcinoma (diaps. 60 y 100)",
   "enunciado": "Mujer de 63 años con colangiocarcinoma hiliar resecable que requiere una hepatectomía mayor. La volumetría calcula un futuro remanente hepático del 25 %. ¿Qué indica el algoritmo del docente antes de operar?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Embolización portal preoperatoria"
    },
    {
     "id": "b",
     "texto": "Operar de inmediato, porque el remanente es suficiente"
    },
    {
     "id": "c",
     "texto": "Quimioterapia como único tratamiento"
    },
    {
     "id": "d",
     "texto": "Declarar el tumor irresecable sin más"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "futuro remanente hepático del 25 %",
   "por_que_correcta": "En el algoritmo del docente, si el futuro remanente hepático es menor del 30 % se considera la embolización portal para hipertrofiarlo antes de la hepatectomía; si es mayor del 30 %, se va a la resección hepática R0 con resección de la vía biliar. Con ictericia y hepatectomía mayor, además se plantea el drenaje biliar preoperatorio.",
   "por_que_no": {
    "b": "Un remanente del 25 % expone a insuficiencia hepática posoperatoria.",
    "c": "Es un tumor resecable; la cirugía es la opción curativa.",
    "d": "Antes de declarar irresecable se intenta aumentar el remanente."
   },
   "fuentes": {
    "docente": "Diapositiva 60 de Colangiocarcinoma del Dr. Yan Quiroz, algoritmo de manejo (INEN): «FRL < 30 %… ¿EVP?… FRL > 30 %: resección HEPÁTICA R0 + resección de vía biliar»; «¿Colangitis? Sí: drenaje biliar preoperatorio». Diap. 100, «Optimización preoperatoria»: ictericia (bilirrubina total > 4 mg/dL) y hepatectomía mayor con futuro remanente < 40 %: drenaje biliar y embolización portal.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 60.",
    "Yan Quiroz EF. Colangiocarcinoma [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 100."
   ]
  },
  {
   "id": "ESP1-C-097",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de páncreas (diaps. 238 y 290); adaptada de la complementaria n.º 196 del banco consolidado de Oncología",
   "enunciado": "Varón de 64 años con adenocarcinoma de la cabeza del páncreas resecable, que irá a duodenopancreatectomía cefálica clásica (Whipple). ¿Qué se reseca y cómo se reconstruye?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Todo el páncreas con el estómago completo; esofagoyeyunostomía"
    },
    {
     "id": "b",
     "texto": "Cuerpo y cola del páncreas con el bazo; cierre del muñón"
    },
    {
     "id": "c",
     "texto": "Solo la cabeza del páncreas, sin anastomosis ni reconstrucción"
    },
    {
     "id": "d",
     "texto": "Cabeza pancreática, duodeno, colédoco distal y antro; tres anastomosis"
    }
   ],
   "correcta": "d",
   "tipo_clave": "guía",
   "dato_clave": "duodenopancreatectomía cefálica clásica (Whipple)",
   "por_que_correcta": "La duodenopancreatectomía cefálica reseca la cabeza del páncreas, el duodeno completo, las primeras asas del yeyuno, la vesícula y el colédoco distal, y en la variante clásica el antro (hay una variante con preservación del píloro). Duodeno y cabeza se resecan juntos porque comparten irrigación. Se reconstruye con tres anastomosis: pancreatoyeyunostomía, hepaticoyeyunostomía y gastro- o duodenoyeyunostomía.",
   "por_que_no": {
    "a": "La pancreatectomía total es para casos seleccionados y no reseca el estómago completo.",
    "b": "Es la pancreatectomía distal con esplenectomía, para tumores de cuerpo y cola.",
    "c": "El duodeno no puede dejarse: comparte la irrigación con la cabeza del páncreas."
   },
   "fuentes": {
    "docente": "Diapositiva 238 de Cáncer de páncreas del Dr. Yan Quiroz: los tumores de la cabeza, que suelen presentarse con ictericia, «son tratados con pancreatoduodenectomía (p. e. procedimiento de Whipple)»; tumores de cuerpo y cola, pancreatectomía distal con bazo. Diaps. 280-291: reconstrucción, con pancreatoyeyunostomía y gastroyeyunostomía terminolateral antecólica.",
    "guia": "Guía, p. 50: «Se resecan: cabeza del páncreas, duodeno completo, primeras asas del yeyuno, vesícula biliar y colédoco distal, y en la variante clásica el antro gástrico… Se reconstruye con tres anastomosis: pancreatoyeyunostomía, hepaticoyeyunostomía y gastro- o duodenoyeyunostomía».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 238.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 290."
   ]
  },
  {
   "id": "ESP1-C-098",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de páncreas (diap. 330)",
   "enunciado": "Al quinto día de una operación de Whipple, el drenaje del paciente da un líquido claro con amilasa muy elevada, y después aparece sangrado por el dren. ¿Qué complicación característica originó el cuadro?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Íleo paralítico simple"
    },
    {
     "id": "b",
     "texto": "Fístula pancreática"
    },
    {
     "id": "c",
     "texto": "Retraso del vaciamiento gástrico"
    },
    {
     "id": "d",
     "texto": "Hipoglucemia"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "amilasa muy elevada",
   "por_que_correcta": "La pancreatoyeyunostomía es el foco principal de morbilidad y mortalidad tras la duodenopancreatectomía, por fugas, abscesos y fístulas. El jugo pancreático activado digiere los tejidos vecinos y puede erosionar un vaso y causar una hemorragia grave.",
   "por_que_no": {
    "a": "No explica la amilasa elevada ni el sangrado.",
    "c": "Es frecuente pero poco grave, y no explica la amilasa alta en el dren ni el sangrado.",
    "d": "No explica la amilasa en el dren."
   },
   "fuentes": {
    "docente": "Diapositiva 330 de Cáncer de páncreas del Dr. Yan Quiroz: «Los esfuerzos se han centrado en la prevención de fugas y fístulas, que son complicaciones mórbidas y potencialmente letales de duodenopancreatectomía. La pancreaticoyeyunostomía… es el foco principal de morbilidad y mortalidad tras duodenopancreatectomía debido a las fugas, la formación de abscesos y fístulas de esta anastomosis».",
    "guia": "Guía, p. 51: «Fístula pancreática: la complicación característica y más temida… el jugo pancreático activado digiere los tejidos vecinos, pudiendo erosionar un vaso y provocar una hemorragia grave»; el retraso del vaciamiento gástrico es «muy frecuente, aunque poco grave».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 330.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 51."
   ]
  },
  {
   "id": "ESP1-C-099",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de páncreas (diap. 81)",
   "enunciado": "En la TC con protocolo pancreático de un adenocarcinoma de la cabeza del páncreas, ¿qué hallazgo comanda hoy, según el docente, el grado de resecabilidad?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La edad y el estado funcional del paciente"
    },
    {
     "id": "b",
     "texto": "El compromiso de la arteria mesentérica superior"
    },
    {
     "id": "c",
     "texto": "El nivel sérico de CA 19-9 al diagnóstico"
    },
    {
     "id": "d",
     "texto": "El tamaño del tumor en centímetros en la TC"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "el grado de resecabilidad",
   "por_que_correcta": "El docente lo resume: lo que comanda hoy el grado de resecabilidad es el compromiso de la arteria mesentérica superior, con el plexo linfático, vascular y graso que la rodea. La vena mesentérica superior y la porta pueden resecarse y reconstruirse; la arteria no, porque su englobamiento indica extensión por los plexos.",
   "por_que_no": {
    "a": "La edad no define la resecabilidad del tumor.",
    "c": "El CA 19-9 sirve como referencia y seguimiento; no define la resecabilidad.",
    "d": "La resecabilidad del páncreas se define por los vasos, no por el tamaño."
   },
   "fuentes": {
    "docente": "Diapositiva 81 de Cáncer de páncreas del Dr. Yan Quiroz: «Resecable, borderline, localmente avanzado… Está comprometido el plexo linfático, vascular y graso que rodea a la arteria mesentérica superior. LO QUE COMANDA HOY EL GRADO DE RESECABILIDAD ES EL COMPROMISO DE LA ARTERIA MESENTÉRICA SUPERIOR».",
    "guia": "Guía, p. 49-50: «la resecabilidad se define por vasos, no por tamaño ni por órganos»; la vena se reseca y reconstruye y la arteria marca irresecabilidad. CA 19-9 «útil como valor de referencia y para el seguimiento, no para el diagnóstico».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 81.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 49.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-C-100",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de páncreas (diap. 238)",
   "enunciado": "Mujer de 67 años con dolor epigástrico sordo que irradia a la espalda y pérdida de peso de meses, sin ictericia. La TC muestra un tumor de la cola del páncreas, resecable. ¿Qué cirugía corresponde?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Derivación biliodigestiva"
    },
    {
     "id": "b",
     "texto": "Pancreatectomía distal con esplenectomía"
    },
    {
     "id": "c",
     "texto": "Duodenopancreatectomía cefálica (Whipple)"
    },
    {
     "id": "d",
     "texto": "Gastrectomía total"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "tumor de la cola del páncreas",
   "por_que_correcta": "Los tumores de cuerpo y cola dan síntomas tardíos, suelen estar avanzados al diagnóstico y rara vez son resecables. Cuando lo son, se hace pancreatectomía distal, que extirpa cola y cuerpo del páncreas junto con el bazo (comparten los vasos esplénicos y los ganglios del hilio). El Whipple es para la cabeza.",
   "por_que_no": {
    "a": "No hay obstrucción biliar que derivar.",
    "c": "El Whipple trata los tumores de la cabeza, que suelen dar ictericia.",
    "d": "No trata un tumor pancreático."
   },
   "fuentes": {
    "docente": "Diapositiva 238 de Cáncer de páncreas del Dr. Yan Quiroz: «Tumores del cuerpo y cola del páncreas causan síntomas tardíos en su desarrollo, usualmente son avanzados al momento del diagnóstico, raramente son resecables. Cuando los tumores en la cola del páncreas son resecables, la pancreatectomía distal, en la cual el cirujano remueve la cola y cuerpo del páncreas, así como también el bazo, es comúnmente realizada… Tumores en la cabeza del páncreas, quienes usualmente presentan ictericia, son tratados con pancreatoduodenectomía».",
    "guia": "Guía, p. 50: «se extirpa el bazo porque comparte los vasos esplénicos y los ganglios del hilio».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 238.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50."
   ]
  },
  {
   "id": "ESP1-C-101",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de páncreas (diaps. 212 y 239)",
   "enunciado": "Varón de 70 años con ictericia por un cáncer de la cabeza del páncreas. En la laparotomía se encuentra que el tumor engloba la arteria mesentérica superior y es irresecable. ¿Qué recomienda el docente en ese momento?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Biopsia y derivación biliar o stent paliativo"
    },
    {
     "id": "b",
     "texto": "Cerrar sin hacer nada más en ese acto"
    },
    {
     "id": "c",
     "texto": "Hacer el Whipple de todas formas con margen positivo"
    },
    {
     "id": "d",
     "texto": "Pancreatectomía total ampliada"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "engloba la arteria mesentérica superior y es irresecable",
   "por_que_correcta": "Si el tumor es irresecable en la cirugía, el docente recomienda confirmar el adenocarcinoma con biopsia (si no se hizo antes) y, en el paciente con ictericia, colocar un stent o hacer una derivación biliar en ese momento. Puede considerarse la gastroyeyunostomía y la neurólisis del plexo celíaco si hay dolor.",
   "por_que_no": {
    "b": "Se pierde la oportunidad de paliar la ictericia en el mismo acto.",
    "c": "Una resección con margen positivo no aporta beneficio y sí morbilidad.",
    "d": "No resuelve la irresecabilidad por invasión arterial."
   },
   "fuentes": {
    "docente": "Diapositiva 239 de Cáncer de páncreas del Dr. Yan Quiroz: «Si el tumor es encontrado irresecable durante la cirugía, el panel recomienda confirmación mediante biopsia… Si un paciente con ictericia es encontrado irresecable al momento de la cirugía, el panel recomienda la colocación de stents o derivación biliar en ese momento. Además, la gastroyeyunostomía puede ser considerada… La neurólisis del plexo celíaco puede realizarse también». Diap. 212: enfermedad irresecable al momento de la cirugía.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 239.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 212."
   ]
  },
  {
   "id": "ESP1-C-102",
   "especialidad": "esp1",
   "tema": "Hígado, vías biliares y páncreas",
   "subtema": "Cáncer de páncreas",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con la guía de Cirugía Oncológica (p. 50)",
   "enunciado": "En la pieza de una duodenopancreatectomía, el patólogo informa que uno de los márgenes está comprometido. ¿Cuál es el margen que con más frecuencia resulta positivo en esta cirugía?",
   "alternativas": [
    {
     "id": "a",
     "texto": "El margen del colon transverso"
    },
    {
     "id": "b",
     "texto": "El margen gástrico proximal"
    },
    {
     "id": "c",
     "texto": "El margen de la piel de la incisión"
    },
    {
     "id": "d",
     "texto": "El margen retroperitoneal (uncinado)"
    }
   ],
   "correcta": "d",
   "tipo_clave": "guía",
   "dato_clave": "uno de los márgenes está comprometido",
   "por_que_correcta": "En el páncreas, el margen crítico es el retroperitoneal o del proceso uncinado, el que enfrenta a la arteria mesentérica superior, y es el que con más frecuencia resulta positivo. Los márgenes del cuello pancreático, biliar y retroperitoneal se comprueban por congelación.",
   "por_que_no": {
    "a": "El colon transverso no forma parte de la pieza habitual.",
    "b": "No es el margen que con más frecuencia resulta positivo.",
    "c": "No es un margen de la pieza pancreática."
   },
   "fuentes": {
    "docente": "Diapositiva 220 de Cáncer de páncreas del Dr. Yan Quiroz: «La esqueletización de los bordes lateral, posterior y anterior de la arteria mesentérica superior hasta el nivel de la adventicia maximizarán el campo uncinado y margen radial».",
    "guia": "Guía, p. 50: «En el páncreas el margen crítico es el margen retroperitoneal o del proceso uncinado, el que enfrenta a la arteria mesentérica superior, y es el que con más frecuencia resulta positivo»; «Márgenes del cuello pancreático, biliar y, el más importante, el retroperitoneal… Se comprueban por congelación».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 50.",
    "Yan Quiroz EF. Cáncer de páncreas [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 220."
   ]
  },
  {
   "id": "ESP1-C-103",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Lesiones precursoras",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 65); adaptada de la complementaria n.º 218 del banco consolidado de Oncología",
   "enunciado": "Mujer de 23 años con biopsia por colposcopia que informa NIC 1. Está muy angustiada porque cree que «va a tener cáncer». ¿Qué dice la historia natural que muestra el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "La mayoría regresa; solo cerca del 1 % progresa a invasor"
    },
    {
     "id": "b",
     "texto": "Todas las NIC 1 progresan a cáncer invasor si no se tratan"
    },
    {
     "id": "c",
     "texto": "La NIC 1 progresa a cáncer invasor en el 50 % de los casos"
    },
    {
     "id": "d",
     "texto": "La NIC 1 nunca regresa sin tratamiento"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "NIC 1",
   "por_que_correcta": "En la tabla del docente, la NIC 1 regresa en el 57 %, persiste en el 32 %, progresa a NIC 3 en el 11 % y a carcinoma invasor en el 1 %. La NIC 3 progresa a invasor en el 12 % y el carcinoma in situ en el 30-36 %. Por eso la NIC 1 se vigila, y las lesiones de alto grado se tratan.",
   "por_que_no": {
    "b": "La mayoría regresa; la progresión a invasor es del 1 %.",
    "c": "La progresión a invasor desde NIC 1 es del 1 %.",
    "d": "La regresión es la evolución más frecuente."
   },
   "fuentes": {
    "docente": "Diapositiva 65 del Dr. Yan Quiroz, «Historia natural de las lesiones NIC»: tabla con regresión, persistencia, progresión a NIC 3 y progresión a carcinoma invasor: NIC 1, 57 %, 32 %, 11 % y 1 %; NIC 2, 43 %, 35 %, 22 % y 1,5 %; NIC 3, 32 %, 56 %, sin dato y 12 %; CIS, progresión a carcinoma invasor del 30-36 %.",
    "guia": "Guía, p. 53: la lesión progresa de bajo a alto grado y a carcinoma invasor «en un proceso que suele tardar años o décadas. Esa lentitud es la razón por la que el tamizaje funciona».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 65.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-C-104",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tamizaje",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 71)",
   "enunciado": "Mujer de 68 años con tamizaje cervical previo adecuado y siempre normal, sin antecedente de lesión de alto grado. Pregunta si debe seguir haciéndose el Papanicolaou. ¿Qué recomienda la tabla que muestra el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Citología cada año de por vida"
    },
    {
     "id": "b",
     "texto": "Co-test cada 3 años"
    },
    {
     "id": "c",
     "texto": "No continuar el tamizaje"
    },
    {
     "id": "d",
     "texto": "Colposcopia anual"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "tamizaje cervical previo adecuado y siempre normal",
   "por_que_correcta": "En la tabla del docente (ASCCP 2019): no se tamiza a menores de 21 años; de 21 a 29 años, citología cada 3 años; de 30 a 65 años, citología, prueba de VPH de alto riesgo o co-test con los intervalos indicados; en mayores de 65 con tamizaje previo adecuado, no se continúa. Tampoco en mujeres con histerectomía con extirpación del cuello sin antecedente de lesión de alto grado ni cáncer.",
   "por_que_no": {
    "a": "Con tamizaje previo adecuado y normal, a partir de los 65 años no se recomienda seguir.",
    "b": "El co-test es para mujeres de 30 a 65 años.",
    "d": "La colposcopia no es una prueba de tamizaje."
   },
   "fuentes": {
    "docente": "Diapositiva 71 del Dr. Yan Quiroz: «Mujeres de edad < 21 años: no tamizaje (D); 21-29 años: citología cervical únicamente cada 3 años (A); 30-65 años: citología cervical… o test de HPVhr… o co-test (test de HPVhr y citología cervical) cada 5 años (A); mujeres de edad > 65 años con tamizaje previo adecuado: no tamizaje (D); mujeres que han tenido histerectomía con remoción del cérvix sin antecedentes de lesión precancerosa de alto grado o cáncer: no tamizaje (D)» (2019 ASCCP).",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 71."
   ]
  },
  {
   "id": "ESP1-C-105",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tamizaje",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 187)",
   "enunciado": "Mujer de 35 años cuya prueba de VPH es positiva para el genotipo 16, con citología negativa. ¿Qué conducta indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Repetir el VPH en 5 años, como de rutina"
    },
    {
     "id": "b",
     "texto": "Histerectomía total simple"
    },
    {
     "id": "c",
     "texto": "Alta, porque la citología es negativa"
    },
    {
     "id": "d",
     "texto": "Colposcopia, por ser VPH 16"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "citología negativa",
   "por_que_correcta": "El docente indica que toda paciente con VPH positivo debe tener citología refleja, y que los genotipos 16 y 18 tienen alto riesgo de NIC 3 y de cáncer oculto: requieren evaluación adicional aunque la citología sea negativa, y si no es posible hacer la citología refleja, corresponde la colposcopia.",
   "por_que_no": {
    "a": "El VPH 16 positivo no permite esperar 5 años.",
    "b": "No hay una lesión diagnosticada que justifique una histerectomía.",
    "c": "Una citología negativa no descarta la lesión en presencia de VPH 16."
   },
   "fuentes": {
    "docente": "Diapositiva 187 del Dr. Yan Quiroz: «Todas las pacientes HPV +, sin importar el genotipo, deben tener citología reflex… HPV 16/18 tienen alto riesgo de NIC 3 y cáncer oculto. Requiere evaluación adicional si la citología es negativa. HPV 16/18 y no es posible realizar la citología o PAP reflex, la evaluación que corresponde será colposcopía».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 187."
   ]
  },
  {
   "id": "ESP1-C-106",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Lesiones precursoras",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 248)",
   "enunciado": "Mujer de 30 años tratada con cono LEEP por una NIC 3 con márgenes negativos. Pregunta si ya está curada y no necesita más controles. ¿Qué explica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Está curada: no necesita más controles"
    },
    {
     "id": "b",
     "texto": "Requiere seguimiento: persiste o recurre en el 5-30 %"
    },
    {
     "id": "c",
     "texto": "Debe hacerse histerectomía de inmediato"
    },
    {
     "id": "d",
     "texto": "Solo necesita un control a los 10 años de la cirugía"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "márgenes negativos",
   "por_que_correcta": "El docente advierte que, después de la conización, queda un riesgo de persistencia o recurrencia de la lesión del 5 al 30 %. Por eso se requiere seguimiento colpocitohistológico. Se habla de persistencia si la lesión aparece antes de los 12 meses y de recurrencia si aparece después de 12 meses de controles negativos.",
   "por_que_no": {
    "a": "El riesgo de persistencia o recurrencia obliga al seguimiento.",
    "c": "Con márgenes negativos no hay indicación de histerectomía.",
    "d": "El seguimiento debe ser estrecho, no a los 10 años."
   },
   "fuentes": {
    "docente": "Diapositiva 248 del Dr. Yan Quiroz, «Tratamiento de la NIC con cono LEEP»: «Después de la conización queda un riesgo de persistencia-recurrencia de la lesión de 5 a 30 %; por esto se requiere seguimiento colpocitohistológico postcono. Se denomina recurrencia a la aparición de la enfermedad luego de su remisión 12 meses después del tratamiento… Persistencia o recidiva es la existencia de lesión antes de los 12 meses».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 248."
   ]
  },
  {
   "id": "ESP1-C-107",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diaps. 271 y 273)",
   "enunciado": "Mujer de 41 años con conización cuyo informe muestra un carcinoma escamoso invasor visible solo al microscopio, con invasión del estroma de 4 mm de profundidad. ¿En qué estadio FIGO queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IB2"
    },
    {
     "id": "b",
     "texto": "IA1"
    },
    {
     "id": "c",
     "texto": "IB1"
    },
    {
     "id": "d",
     "texto": "IA2"
    }
   ],
   "correcta": "d",
   "tipo_clave": "docente",
   "dato_clave": "invasión del estroma de 4 mm",
   "por_que_correcta": "El estadio IA es el carcinoma invasor diagnosticado solo por microscopía: IA1 con invasión estromal menor de 3 mm y IA2 entre 3 y 5 mm. Con 4 mm, es IA2. El IB1 empieza cuando la invasión supera los 5 mm (hasta 2 cm de dimensión mayor).",
   "por_que_no": {
    "a": "El IB2 mide más de 2 cm y menos de 4 cm.",
    "b": "El IA1 tiene invasión menor de 3 mm.",
    "c": "El IB1 tiene invasión mayor de 5 mm."
   },
   "fuentes": {
    "docente": "Diapositiva 273 del Dr. Yan Quiroz: «Carcinoma invasor diagnosticado sólo mediante microscopía. Confinado al útero. IA1: invasión estromal < 3 mm en profundidad. IA2: invasión estromal > 3 mm y < 5 mm en profundidad». Diap. 271: IB1, «invasión estromal vertical > 5 mm hasta dimensión mayor < 2 cm»; IB2, «> 2 cm - < 4 cm».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 273.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271."
   ]
  },
  {
   "id": "ESP1-C-108",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tratamiento",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diaps. 294 y 328)",
   "enunciado": "Mujer de 50 años, sin deseo de fertilidad y operable, con carcinoma de cérvix IA1 sin invasión del espacio linfovascular y cono con márgenes negativos. ¿Qué tratamiento indica el docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Exenteración pélvica"
    },
    {
     "id": "b",
     "texto": "Histerectomía extrafascial (simple)"
    },
    {
     "id": "c",
     "texto": "Quimiorradioterapia"
    },
    {
     "id": "d",
     "texto": "Histerectomía radical tipo C con linfadenectomía pélvica"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "sin deseo de fertilidad y operable",
   "por_que_correcta": "En el estadio IA1 sin invasión linfovascular, el pronóstico es excelente. Si la paciente no desea fertilidad, tiene márgenes negativos y es operable, el docente indica histerectomía extrafascial (simple), sin linfadenectomía pélvica. Si desea fertilidad, basta el cono con márgenes negativos.",
   "por_que_no": {
    "a": "La exenteración se reserva para recidivas centrales tras radioterapia.",
    "c": "La quimiorradioterapia es para estadios más avanzados.",
    "d": "La radical es excesiva para un IA1 sin invasión linfovascular."
   },
   "fuentes": {
    "docente": "Diapositiva 294 del Dr. Yan Quiroz, «Resumen de manejo del cáncer de cérvix», IA1 sin preservación de la fertilidad y sin invasión del ELV: «Márgenes negativos y operable: se realizará histerectomía extrafascial». Diap. 328: «Estadio IA1: sugerimos una HISTERECTOMÍA SIMPLE en lugar de una histerectomía radical. La linfadenectomía pélvica no es necesaria. La CONIZACIÓN es una opción razonable en mujeres que desean preservar la fertilidad».",
    "guia": "Guía, p. 54: «Exenteración pélvica: … reservada para recidiva central tras radioterapia».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 294.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 328.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 54."
   ]
  },
  {
   "id": "ESP1-C-109",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 271)",
   "enunciado": "Mujer de 55 años con carcinoma escamoso de cérvix que compromete el tercio inferior de la vagina, sin llegar a la pared pélvica, sin hidronefrosis ni ganglios. ¿En qué estadio FIGO queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IIIA"
    },
    {
     "id": "b",
     "texto": "IVA"
    },
    {
     "id": "c",
     "texto": "IIIB"
    },
    {
     "id": "d",
     "texto": "IIA"
    }
   ],
   "correcta": "a",
   "tipo_clave": "docente",
   "dato_clave": "compromete el tercio inferior de la vagina",
   "por_que_correcta": "En la FIGO del docente, el compromiso de los dos tercios superiores de la vagina es IIA; el del tercio inferior, IIIA. El IIIB es la extensión parametrial hasta la pared pélvica, hidronefrosis o riñón no funcional, y el IVA la invasión de la mucosa de vejiga o recto.",
   "por_que_no": {
    "b": "El IVA es la invasión de la mucosa de vejiga o recto.",
    "c": "El IIIB requiere pared pélvica, hidronefrosis o riñón no funcional.",
    "d": "El IIA compromete solo los dos tercios superiores de la vagina."
   },
   "fuentes": {
    "docente": "Diapositiva 271 del Dr. Yan Quiroz, «Clasificación de la FIGO»: «IIA: compromiso de los 2/3 superiores de la vagina; IIB: compromiso de los parametrios sin llegar a hueso pélvico; IIIA: compromiso hasta el 1/3 inferior de la vagina; IIIB: compromiso de los parametrios hasta llegar a hueso pélvico, hidronefrosis o función renal alterada; IVA: tumor que invade la mucosa de la vejiga o del recto (demostrado por biopsia)».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271."
   ]
  },
  {
   "id": "ESP1-C-110",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 271)",
   "enunciado": "Mujer de 49 años con carcinoma de cérvix de 3 cm, parametrios aparentemente libres al tacto, pero la ecografía muestra hidronefrosis derecha sin otra causa que la explique. ¿En qué estadio FIGO queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IVB"
    },
    {
     "id": "b",
     "texto": "IIIB"
    },
    {
     "id": "c",
     "texto": "IIB"
    },
    {
     "id": "d",
     "texto": "IB2"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "hidronefrosis derecha sin otra causa",
   "por_que_correcta": "La hidronefrosis o la función renal alterada, salvo que se deba a otra causa, clasifica el tumor como IIIB, igual que la extensión parametrial hasta la pared pélvica. La guía recuerda que la obstrucción ureteral con insuficiencia renal es la causa clásica de muerte en esta enfermedad.",
   "por_que_no": {
    "a": "El IVB requiere metástasis a distancia.",
    "c": "El IIB es la invasión parametrial sin llegar a la pared ni causar hidronefrosis.",
    "d": "La hidronefrosis eleva el estadio, aunque el tumor mida 3 cm."
   },
   "fuentes": {
    "docente": "Diapositiva 271 del Dr. Yan Quiroz: «IIIB: compromiso de los parametrios hasta llegar a hueso pélvico, hidronefrosis o función renal alterada (a menos que se sepa que se debe a otra causa)».",
    "guia": "Guía, p. 53: la progresión hacia los parametrios «puede comprimir los uréteres y producir hidronefrosis e insuficiencia renal, que es la causa clásica de muerte».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 53."
   ]
  },
  {
   "id": "ESP1-C-111",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Estadificación",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 271)",
   "enunciado": "Mujer de 60 años con carcinoma de cérvix. La cistoscopia muestra infiltración de la mucosa vesical, confirmada por biopsia, sin metástasis a distancia. ¿En qué estadio FIGO queda?",
   "alternativas": [
    {
     "id": "a",
     "texto": "IIB"
    },
    {
     "id": "b",
     "texto": "IVA"
    },
    {
     "id": "c",
     "texto": "IIIA"
    },
    {
     "id": "d",
     "texto": "IVB"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "confirmada por biopsia",
   "por_que_correcta": "La invasión de la mucosa de la vejiga o del recto, demostrada por biopsia, es estadio IVA. El IVB corresponde a las metástasis a distancia.",
   "por_que_no": {
    "a": "El IIB es la invasión parametrial sin llegar a la pared pélvica.",
    "c": "El IIIA es el compromiso del tercio inferior de la vagina.",
    "d": "El IVB requiere metástasis a distancia."
   },
   "fuentes": {
    "docente": "Diapositiva 271 del Dr. Yan Quiroz: «IVA: tumor que invade la mucosa de la vejiga o del recto (demostrado por biopsia)»; IVB, M1.",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 271."
   ]
  },
  {
   "id": "ESP1-C-112",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Tratamiento",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diaps. 321 y 322)",
   "enunciado": "Mujer de 44 años que, tras una histerectomía radical por cáncer de cérvix, presenta retención urinaria persistente. El informe quirúrgico describe una histerectomía tipo C2 de Querleu-Morrow. ¿Qué explica la complicación?",
   "alternativas": [
    {
     "id": "a",
     "texto": "En el tipo C2 se extirpa también la vejiga"
    },
    {
     "id": "b",
     "texto": "En el tipo C2 no se preservan los nervios autonómicos pélvicos"
    },
    {
     "id": "c",
     "texto": "El tipo C2 es una histerectomía extrafascial sin disección parametrial"
    },
    {
     "id": "d",
     "texto": "La retención se debe siempre a una lesión del uréter"
    }
   ],
   "correcta": "b",
   "tipo_clave": "docente",
   "dato_clave": "tipo C2 de Querleu-Morrow",
   "por_que_correcta": "En la clasificación de Querleu-Morrow del docente, el tipo C1 reseca el paracérvix a nivel de los vasos hipogástricos con preservación nerviosa, y el C2 se hace sin preservación de los nervios autonómicos. La guía explica que la preservación de esos nervios es lo que evita la disfunción vesical.",
   "por_que_no": {
    "a": "La histerectomía radical no extirpa la vejiga.",
    "c": "La extrafascial con resección mínima del paracérvix es el tipo A.",
    "d": "La lesión ureteral produce fístula o hidronefrosis, no una retención urinaria por denervación."
   },
   "fuentes": {
    "docente": "Diapositiva 322 del Dr. Yan Quiroz, «Querleu y Morrow (2008)»: «Tipo C1: paracérvix: resección a nivel de los vasos hipogástricos… C2: sin preservación de nervios autónomos, el paracérvix es transeccionado debajo de la vena uterina profunda». Diap. 321: «Tipo A: resección mínima del paracérvix… muy cercana al cérvix y medial al uréter».",
    "guia": "Guía, p. 54: «nervios autonómicos pélvicos (cuya preservación es lo que evita la disfunción vesical)»; uréteres, «los más expuestos, en su cruce bajo la arteria uterina».",
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 322.",
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 321.",
    "Guía de estudio y ruta de aprendizaje: Cirugía Oncológica. Cirugía I, rotación de Cirugía Oncológica. Trujillo; 2026. p. 54."
   ]
  },
  {
   "id": "ESP1-C-113",
   "especialidad": "esp1",
   "tema": "Cérvix uterino y ginecología oncológica",
   "subtema": "Prevención",
   "origen": "creada",
   "procedencia": "Pregunta creada para practicar con las diapositivas del Dr. Yan Quiroz, Cáncer de cuello uterino (diap. 47)",
   "enunciado": "En un programa regional de control del cáncer de cuello uterino se planifican varias acciones. ¿Cuál corresponde a la prevención primaria y cuál al tamizaje, según el esquema del docente?",
   "alternativas": [
    {
     "id": "a",
     "texto": "Colposcopia (prevención primaria); quimioterapia (tamizaje)"
    },
    {
     "id": "b",
     "texto": "Papanicolaou (prevención primaria); vacunación (tamizaje)"
    },
    {
     "id": "c",
     "texto": "Vacuna VPH (primaria); Papanicolaou, ADN-VPH e IVAA (tamizaje)"
    },
    {
     "id": "d",
     "texto": "Cirugía radical (prevención primaria); radioterapia (tamizaje)"
    }
   ],
   "correcta": "c",
   "tipo_clave": "docente",
   "dato_clave": "prevención primaria",
   "por_que_correcta": "En el esquema del docente, la prevención primaria incluye la información, la educación, la consejería y las vacunas. El tamizaje en pacientes en riesgo incluye el Papanicolaou, la colposcopia, la prueba de ADN de VPH, la IVAA y la VILI, con biopsia y tratamiento del precáncer. La cirugía, la radioterapia y la quimioterapia pertenecen al diagnóstico y tratamiento.",
   "por_que_no": {
    "a": "La quimioterapia es tratamiento.",
    "b": "Es al revés: la vacuna es prevención primaria y la citología es tamizaje.",
    "d": "La cirugía y la radioterapia son tratamiento, no prevención ni tamizaje."
   },
   "fuentes": {
    "docente": "Diapositiva 47 del Dr. Yan Quiroz, «Programa de prevención y detección (screening) del cáncer»: «Prevención primaria: información, comunicación y educación; consejería; vacunas; participación comunitaria. Tamizaje: pacientes en riesgo; PAP test; colposcopia; test ADN PVH; IVAA; VILI; biopsia; tx. precáncer. Diagnóstico, tratamiento y cuidados paliativos: cirugía radical; radioterapia/BT; quimioterapia…».",
    "guia": null,
    "libro": null,
    "discrepancia": false
   },
   "referencias": [
    "Yan Quiroz EF. Cáncer de cuello uterino [diapositivas de clase]. Cirugía I – Cirugía Oncológica. Trujillo: UPAO. Diap. 47."
   ]
  }
 ]
};
