# Simulacro de Especialidades de Cirugía I (UPAO)

Simulador del parcial de Especialidades: Cirugía oncológica, Anestesiología, Traumatología y ortopedia, y Cirugía pediátrica. Cada simulacro tiene 40 preguntas, dura 50 minutos y se califica sobre 20. Al terminar, cada pregunta se revisa con su explicación y sus referencias.

## Cómo abrirlo

**En tu computadora:** abre `index.html` con doble clic. No necesita internet ni servidor: los bancos están en `esp1.js` a `esp4.js` y las tipografías van dentro de `estilos.css`.

**En GitHub Pages:**

1. Crea un repositorio y, en *Add file → Upload files*, arrastra juntos los 9 archivos. Van todos en la raíz, sin carpetas.
2. En el repositorio, entra en *Settings → Pages*.
3. En *Source*, elige *Deploy from a branch*, la rama `main` y la carpeta `/ (root)`.
4. Guarda. La dirección del sitio aparece en esa misma página después de unos minutos.

## Archivos

```
index.html            página única del simulador
estilos.css           diseño (planificador pastel), impresión y tipografías incrustadas
app.js                motor: armado del simulacro, reloj, nota, revisión y progreso
esp1.js               Cirugía oncológica (preguntas de examen y creadas, juntas)
esp2.js               Anestesiología
esp3.js               Traumatología y ortopedia
esp4.js               Cirugía pediátrica
README.md             este archivo
LICENCIA-FUENTES.txt  licencias SIL OFL 1.1 de Patrick Hand y Atkinson Hyperlegible
```

Si falta alguno de los archivos `esp1.js` a `esp4.js`, el inicio lo avisa y el simulacro se arma con las especialidades que sí cargaron.

## Reglas

Están al inicio de `app.js`, en el objeto `CONFIG`. Es lo único que hace falta cambiar para ajustar el simulacro.

| Constante | Valor | Qué controla |
|---|---|---|
| `PREGUNTAS_POR_ESPECIALIDAD` | 10 | Preguntas de cada especialidad (40 en total) |
| `TIEMPO_MINUTOS` | 50 | Reloj único para todo el simulacro |
| `PUNTOS_POR_PREGUNTA` | 0.5 | Puntaje de cada respuesta correcta |
| `NOTA_MAXIMA` | 20 | Escala de la nota |
| `NOTA_APROBATORIA` | 11 | Nota mínima para aprobar |
| `INTENTOS_PARA_REFUERZO` | 5 | Simulacros terminados antes de empezar a reforzar temas |
| `VENTANA_INTENTOS` | 5 | Simulacros recientes que se miran para medir errores |
| `UMBRAL_1_EXTRA` | 0.40 | Error en un tema a partir del cual recibe 1 pregunta extra |
| `UMBRAL_2_EXTRA` | 0.60 | Error a partir del cual recibe 2 preguntas extra |
| `PREFIJO` | `simcir1_` | Prefijo de lo que se guarda en el navegador |

Las preguntas sin responder cuentan como incorrectas. Si el reloj llega a cero, el simulacro se entrega solo con lo que hayas respondido.

## Cómo se arman las 10 preguntas de cada especialidad

1. Cada uno de los 8 temas de la especialidad recibe una pregunta.
2. Desde el quinto simulacro terminado, se mira el porcentaje de error de cada tema en los últimos cinco. Un tema con 40 % de error o más recibe 1 pregunta extra; con 60 % o más, 2.
3. Si con los extras se pasa de 10, se quitan preguntas de los temas que mejor dominas (los temas sin datos se quitan después de los que siempre aciertas).
4. Si faltan para llegar a 10, se completan al azar, en proporción al tamaño de cada tema.
5. Dentro de cada tema salen primero las preguntas que nunca viste, luego las que fallaste la última vez y al final las que ya acertaste. No se repiten dos preguntas con el mismo enunciado en un mismo simulacro.

Las alternativas se barajan, salvo cuando alguna dice «todas», «ninguna», «anteriores», «ambas» o «a y b», porque ahí el orden importa. Por eso las explicaciones nombran el texto de cada alternativa y nunca su letra.

En el inicio, el «Mi dominio por tema» muestra tus aciertos por tema y qué temas recibirán preguntas extra (+1 o +2).

## La revisión

Cada pregunta muestra:

- El enunciado con el **dato clave** resaltado.
- Las alternativas, con la correcta y la tuya señaladas.
- **Por qué es correcta** la respuesta.
- **Por qué no es tu respuesta**, si fallaste.
- **Las otras alternativas**, una por una.
- **Fuentes**:
  - «Tu docente dice»: diapositiva, pretest o examen que sostiene la clave.
  - «Dato curioso: la guía»: lo que añade la guía de estudio.
  - «Libro o fuente oficial»: libro o fuente en línea, con enlace.
  - Si las fuentes no coinciden, un recuadro lo explica y termina con «Para el examen, marca…».
  - Las referencias completas, con archivo y página o diapositiva.
- Etiquetas de origen: si es una pregunta de examen o una creada para practicar, y de dónde sale la clave.

| Etiqueta | Significa |
|---|---|
| Clave del docente | Sale de un examen, pretest o diapositiva del docente |
| Clave de la guía | No hay clave del docente; la da la guía de estudio actualizada |
| Clave del libro | No hay clave del docente ni de la guía; la da el libro |
| Clave deducida | No hay clave oficial; se dedujo de las fuentes citadas |

La revisión se filtra por incorrectas, correctas, marcadas o especialidad. «Imprimir revisión» abre todas las preguntas y deja la página lista para imprimir o guardar en PDF.

## Qué hay en los bancos

| Especialidad | Total | De examen | Creadas | Clave del docente | Clave de la guía | Clave del libro | Clave deducida |
|---|---|---|---|---|---|---|---|
| Cirugía oncológica (`esp1`) | 314 | 201 | 113 | 154 | 11 | 0 | 149 |
| Anestesiología (`esp2`) | 287 | 183 | 104 | 110 | 46 | 2 | 129 |
| Traumatología y ortopedia (`esp3`) | 328 | 201 | 127 | 254 | 17 | 1 | 56 |
| Cirugía pediátrica (`esp4`) | 288 | 132 | 156 | 211 | 76 | 1 | 0 |
| **Total** | **1217** | **717** | **500** | **729** | **150** | **4** | **334** |

Las preguntas creadas son casos clínicos de 4 alternativas. En cada una, la alternativa correcta no es la más larga más a menudo de lo que tocaría por azar (entre el 19 y el 24 %), para que la longitud no delate la respuesta.

Sobre las citas entre comillas « »:

- Reproducen el texto de la diapositiva, la guía o el libro. En diapositivas con texto en columnas o en imagen se respeta el orden de las palabras de la diapositiva, incluidas sus abreviaturas.
- Cuando el dato sale de una tabla, se describe la tabla sin comillas y se citan solo las celdas.
- Si una fuente está en inglés y la cita aparece en español, lleva la nota «(traducción propia)».

## Atajos de teclado durante el simulacro

- Letras `a` a `e` (o números `1` a `5`): elegir alternativa.
- Flechas izquierda y derecha: pregunta anterior y siguiente.
- `M`: marcar o desmarcar la pregunta para revisarla.

## Dónde se guarda tu progreso

En el almacenamiento local del navegador, con dos claves:

- `simcir1_historial`: tus simulacros terminados (nota, fecha y respuestas). Se guardan los últimos 60.
- `simcir1_sesion`: el simulacro en curso. Si cierras la pestaña, al volver aparece «Continuar el simulacro en curso» con el tiempo que quedaba.

El progreso vive solo en ese navegador y en esa computadora. Para empezar de cero, usa «Borrar mi progreso» al final del inicio. En una ventana privada, el progreso se pierde al cerrarla.

## Añadir o corregir preguntas

Cada archivo `esp1.js` a `esp4.js` tiene esta forma:

```js
window.BANCO = window.BANCO || {};
window.BANCO["esp4"] = {
  "nombre": "Cirugía pediátrica",
  "temas": ["Manejo preoperatorio", "Cabeza y cuello", "..."],
  "preguntas": [ /* objetos como el de abajo */ ]
};
```

Una pregunta:

```js
{
  "id": "ESP4-B-001",                 // único en todo el simulador
  "especialidad": "esp4",
  "tema": "Manejo preoperatorio",     // uno de los de «temas»
  "subtema": "Historia clínica",
  "origen": "banco",                  // "banco" (de examen) o "creada"
  "procedencia": "Pretest 1, preg. 5 (clave resaltada)",
  "enunciado": "…",
  "alternativas": [ { "id": "a", "texto": "…" }, { "id": "b", "texto": "…" } ],
  "correcta": "a",
  "tipo_clave": "docente",            // "docente", "guía", "libro" o "deducida"
  "dato_clave": "…",                  // copia literal de un trozo del enunciado
  "por_que_correcta": "…",
  "por_que_no": { "b": "…" },         // una explicación por cada alternativa incorrecta
  "fuentes": {
    "docente": "…",
    "guia": "…",                      // si hay discrepancia: «Tu docente dice… Dato curioso… Para el examen, marca…»
    "libro": "…",
    "discrepancia": false
  },
  "referencias": ["Autor. Título [archivo]. Pág. N."]
}
```

Reglas para que la revisión salga bien:

- `dato_clave` debe copiarse tal cual del enunciado; si no, no se resalta.
- Las explicaciones deben nombrar el texto de la alternativa, no su letra, porque las letras cambian al barajar.
- No inventes referencias: cita archivo y diapositiva o página, y deja el enlace si la fuente está en línea.
- Si una palabra del original es ilegible, escribe `[ilegible]`.

Después de editar un banco, recarga la página. Las preguntas que borres desaparecen también de los simulacros guardados, sin romperlos.

## Tipografías

Patrick Hand (títulos) y Atkinson Hyperlegible (texto), incrustadas en `estilos.css` bajo la licencia SIL Open Font License 1.1 (ver `LICENCIA-FUENTES.txt`).
