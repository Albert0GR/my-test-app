"use client";
import React, { useState, useEffect } from 'react';

// Tu listado completo de preguntas:

const allQuestions = [
  { id: 1, text: "¿Qué es una página web?", options: [
      "Un programa que se ejecuta localmente en tu equipo",
      "Un documento HTML accesible por internet",
      "Un servicio de streaming de video",
      "Un repositorio de bases de datos"
    ], answer: 1 },
  { id: 2, text: "¿Qué lenguaje se utiliza para definir el contenido de una página web?", options: [
      "JavaScript",
      "HTML",
      "CSS",
      "PHP"
    ], answer: 1 },
  { id: 3, text: "¿Qué es una etiqueta en HTML?", options: [
      "Una marca que delimita contenido",
      "Un comando para dar estilo",
      "Un método de programación",
      "Una hoja de estilo externa"
    ], answer: 0 },
  { id: 4, text: "¿Para qué sirve la etiqueta `<h1>` en HTML?", options: [
      "Establecer el título principal",
      "Crear un vínculo",
      "Añadir una imagen de fondo",
      "Definir un párrafo"
    ], answer: 0 },
  { id: 5, text: "¿Qué es el atributo 'src' en la etiqueta `<img>`?", options: [
      "Especificar la URL de la imagen",
      "Determinar el estilo CSS",
      "Mostrar texto alternativo",
      "Definir el color de enlace"
    ], answer: 0 },
  { id: 6, text: "¿Qué es una problemática en la comunidad?", options: [
      "Un reto que necesita solución colectiva",
      "Una tradición comunitaria",
      "Una regla establecida",
      "Una actividad recreativa"
    ], answer: 0 },
  { id: 7, text: "¿Qué es la justificación de un proyecto?", options: [
      "Argumentar las razones para iniciarlo",
      "Establecer el cronograma",
      "Describir al equipo",
      "Presentar los resultados"
    ], answer: 0 },
  { id: 8, text: "¿Cómo se identifican los objetivos de un proyecto?", options: [
      "Describir metas claras y medibles",
      "Copiar de otro proyecto",
      "Dibujar diagramas sin texto",
      "Incluir solo conclusiones"
    ], answer: 0 },
  { id: 9, text: "¿Qué es Focalboard?", options: [
      "Una aplicación de administración de proyectos",
      "Un editor de texto en línea",
      "Un servicio de correo",
      "Un reproductor de video"
    ], answer: 0 },
  { id: 10, text: "¿Qué permite hacer Focalboard?", options: [
      "Crear y priorizar tareas",
      "Monitorear contraseñas",
      "Enviar mensajes automáticos",
      "Diseñar gráficos vectoriales"
    ], answer: 0 },
  { id: 11, text: "¿Qué rol puede existir dentro de un equipo?", options: [
      "Programador",
      "Diseñador UX",
      "Analista de datos",
      "Todos los anteriores"
    ], answer: 3 },
  { id: 12, text: "¿Qué es el trabajo colaborativo?", options: [
      "Coordinar esfuerzos con otros",
      "Trabajar de manera aislada",
      "Enviar tareas sin retroalimentación",
      "Ignorar plazos"
    ], answer: 0 },
  { id: 13, text: "¿Cuál es la extensión básica de un archivo HTML?", options: [
      ".html",
      ".docx",
      ".css",
      ".json"
    ], answer: 0 },
  { id: 14, text: "¿Qué etiqueta HTML se usa para agregar un hipervínculo?", options: [
      "<a>",
      "<link>",
      "<nav>",
      "<href>"
    ], answer: 0 },
  { id: 15, text: "¿Para qué sirve la etiqueta `<p>` en HTML?", options: [
      "Insertar bloques de texto",
      "Incrustar scripts",
      "Definir estilos en línea",
      "Agregar formularios"
    ], answer: 0 },
  { id: 16, text: "¿Qué significa el atributo 'alt' en una imagen?", options: [
      "Texto de descripción para accesibilidad",
      "Enlace alternativo",
      "Color de fondo",
      "URL de la imagen"
    ], answer: 0 },
  { id: 17, text: "¿Qué es necesario para publicar una página web?", options: [
      "Un dominio registrado y hosting",
      "Solo un editor de texto",
      "Un antivirus instalado",
      "Un sistema operativo específico"
    ], answer: 0 },
  { id: 18, text: "¿Qué es un dominio?", options: [
      "Nombre único que identifica un sitio web",
      "Un lenguaje de programación",
      "Una red social privada",
      "Un protocolo de transferencia"
    ], answer: 0 },
  { id: 19, text: "¿Qué es el diseño responsivo?", options: [
      "Ajustar el diseño según el tamaño de pantalla",
      "Usar colores vivos",
      "Solo editar HTML",
      "Requiere Java"
    ], answer: 0 },
  { id: 20, text: "¿Cuál es la estructura básica de un archivo HTML?", options: [
      "<html>, <head> y <body>",
      "<div>, <span> y <header>",
      "<section>, <article> y <footer>",
      "<script>, <style> y <link>"
    ], answer: 0 },
  { id: 21, text: "¿Qué debemos evitar al trabajar en equipo?", options: [
      "Ignorar aportes de otros",
      "Colaborar activamente",
      "Revisar avances",
      "Mantener comunicación"
    ], answer: 0 },
  { id: 22, text: "¿Por qué es importante definir bien el problema?", options: [
      "Para enfocar soluciones y objetivos",
      "Para copiar plantillas",
      "Para añadir estética",
      "Para completar requisitos sin propósito"
    ], answer: 0 },
  { id: 23, text: "¿Qué permite organizar tareas por etapas?", options: [
      "Focalboard",
      "Chrome DevTools",
      "Spotify",
      "GitHub"
    ], answer: 0 },
  { id: 24, text: "¿Qué es un objetivo general?", options: [
      "Meta amplia del proyecto",
      "Una sección de estilo",
      "Un elemento HTML",
      "Un script de JavaScript"
    ], answer: 0 },
  { id: 25, text: "¿Qué es un objetivo específico?", options: [
      "Meta puntual y medible",
      "Un diagrama de flujo",
      "Una imagen de portada",
      "Una biblioteca externa"
    ], answer: 0 },
  { id: 26, text: "¿Cuál es el primer paso al iniciar un proyecto?", options: [
      "Detectar la problemática real",
      "Diseñar la interfaz",
      "Configurar el servidor",
      "Crear el logo"
    ], answer: 0 },
  { id: 27, text: "¿Qué herramienta gratuita permite crear páginas web estáticas?", options: [
      "GitHub Pages",
      "AWS Lambda",
      "Adobe Photoshop",
      "Microsoft Excel"
    ], answer: 0 },
  { id: 28, text: "¿Cuál es la función de un 'líder de proyecto'?", options: [
      "Coordinar tareas y recursos",
      "Gestionar presupuestos",
      "Programar el proyecto",
      "Editar todo el contenido"
    ], answer: 0 },
  { id: 29, text: "¿Qué es el hosting?", options: [
      "Servicio para alojar sitios web",
      "Carpeta local en Windows",
      "Editor de texto",
      "Un CMS"
    ], answer: 0 },
  { id: 30, text: "¿Qué permite el trabajo con roles?", options: [
      "Clarificar responsabilidades",
      "Difuminar funciones",
      "Restringir la comunicación",
      "Excluir miembros"
    ], answer: 0 },
  { id: 31, text: "¿Qué es un encabezado `<h3>`?", options: [
      "Subtítulo menos importante que `<h1>`",
      "Etiqueta para imágenes",
      "Tabla de datos",
      "Enlace externo"
    ], answer: 0 },
  { id: 32, text: "¿Qué representa un problema social?", options: [
      "Una dificultad que impacta a un grupo",
      "Un gusto personal",
      "Un error de programación",
      "Una preferencia individual"
    ], answer: 0 },
  { id: 33, text: "¿Cuál es la importancia de justificar un proyecto?", options: [
      "Brindar fundamentos y motivación del proyecto",
      "Mostrar ejemplos gráficos",
      "Citar solo fuentes",
      "Ignorar contexto"
    ], answer: 0 },
  { id: 34, text: "¿Qué permite un plan de trabajo?", options: [
      "Definir actividades, plazos y responsables",
      "Eliminar tareas",
      "Retrasar entregas",
      "Diseñar logos"
    ], answer: 0 },
  { id: 35, text: "¿Por qué es importante el trabajo colaborativo?", options: [
      "Combinar habilidades y conocimientos",
      "Reducir trabajo en equipo",
      "Aumentar costos",
      "Evitar comunicación"
    ], answer: 0 },
  { id: 36, text: "¿Qué plataforma permite gestión de tareas y proyectos online?", options: [
      "Focalboard",
      "YouTube",
      "Instagram",
      "Reddit"
    ], answer: 0 },
  { id: 37, text: "¿Qué sucede si no se respeta el tiempo de entrega en un proyecto?", options: [
      "Puede retrasar todo el proyecto",
      "Mejora la calidad",
      "No impacta el cronograma",
      "Acelera la entrega"
    ], answer: 0 },
  { id: 38, text: "¿Qué es un documento de justificación?", options: [
      "Explicar razones, contexto y beneficios",
      "Listar materiales sin contexto",
      "Incluir solo fechas",
      "Solo poner nombres"
    ], answer: 0 },
  { id: 39, text: "¿Qué característica debe tener un objetivo?", options: [
      "Ser claro, medible y alcanzable",
      "Ser genérico",
      "Ser abstracto",
      "Ser personal"
    ], answer: 0 },
  { id: 40, text: "¿Cuál es la etiqueta correcta para insertar una imagen en HTML?", options: [
      "<img>",
      "<figure>",
      "<iframe>",
      "<svg>"
    ], answer: 0 },
  { id: 41, text: "¿Qué es el hosting web?", options: [
      "Editor de páginas web",
      "Servicio que mantiene tu sitio disponible en internet",
      "Lenguaje de programación",
      "Plataforma de streaming"
    ], answer: 1 },
  { id: 42, text: "¿Qué es un dominio en internet?", options: [
      "Dirección web que ubica un sitio",
      "Una clave de acceso",
      "Un protocolo de seguridad",
      "Una plantilla de diseño"
    ], answer: 0 },
  { id: 43, text: "¿Cuál es un ejemplo correcto de un dominio?", options: [
      "www.mipaginaweb.com",
      "192.168.0.1",
      "http://localhost:3000",
      "ftp://servidor"
    ], answer: 0 },
  { id: 44, text: "¿Para qué sirve una base de datos en una página web?", options: [
      "Guardar y gestionar información dinámica",
      "Crear estilos CSS",
      "Renderizar HTML",
      "Enviar correos"
    ], answer: 0 },
  { id: 45, text: "¿Qué es MySQL?", options: [
      "Sistema gestor de bases de datos",
      "Lenguaje de programación",
      "Editor de texto",
      "Framework de JavaScript"
    ], answer: 0 },
  { id: 46, text: "¿Qué sucede si no pagamos el dominio de nuestra página web?", options: [
      "Podría quedar libre para otros",
      "Funciona sin cambios",
      "Se convierte en privado",
      "Genera un error 404 permanente"
    ], answer: 0 },
  { id: 47, text: "¿Qué información guarda una base de datos de usuarios?", options: [
      "Nombres, correos y contraseñas",
      "Tareas de diseño",
      "Enlaces de video",
      "Imágenes de portada"
    ], answer: 0 },
  { id: 48, text: "¿Qué servicio gratuito permite publicar páginas web estáticas?", options: [
      "Github Pages",
      "Google Docs",
      "Dropbox",
      "Flickr"
    ], answer: 0 },
  { id: 49, text: "¿Qué ventaja tiene usar hosting en la nube?", options: [
      "Escalabilidad y disponibilidad continua",
      "Requiere servidor propio",
      "Solo funciona offline",
      "Reduce interactividad"
    ], answer: 0 },
  { id: 50, text: "¿Para qué sirve el panel de control del hosting?", options: [
      "Administrar archivos, bases y configuraciones",
      "Diseñar presentaciones",
      "Enviar newsletters",
      "Monitorear redes sociales"
    ], answer: 0 },

  // 10 preguntas nuevas (51–60)
  { id: 51, text: "¿Qué elemento HTML se usa para insertar un video en una página web?", options: [
      "<video>",
      "<img>",
      "<audio>",
      "<embed>"
    ], answer: 0 },
  { id: 52, text: "¿Cuál es la función de CSS en el desarrollo web?", options: [
      "Dar estilo visual a la página",
      "Definir la estructura HTML",
      "Programar la lógica",
      "Almacenar datos"
    ], answer: 0 },
  { id: 53, text: "¿Qué símbolo se utiliza para comentar en CSS?", options: [
      "/* comentario */",
      "// comentario",
      "<!-- comentario -->",
      "# comentario"
    ], answer: 0 },
  { id: 54, text: "¿Qué propiedad de CSS cambia el tamaño de fuente?", options: [
      "font-size",
      "text-align",
      "margin",
      "background"
    ], answer: 0 },
  { id: 55, text: "¿Cómo enlazas una hoja de estilos externa en HTML?", options: [
      "<link rel=\"stylesheet\" href=\"estilos.css\">",
      "<script src=\"estilos.css\">",
      "<style src=\"estilos.css\">",
      "<css src=\"estilos.css\">"
    ], answer: 0 },
  { id: 56, text: "¿Qué etiqueta HTML define una lista desordenada?", options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ], answer: 0 },
  { id: 57, text: "¿Cuál es la diferencia principal entre `<ol>` y `<ul>`?", options: [
      "`<ol>` numera elementos; `<ul>` usa viñetas",
      "`<ol>` usa viñetas; `<ul>` numera",
      "No hay diferencia",
      "`<ul>` está obsoleto"
    ], answer: 0 },
  { id: 58, text: "¿Qué es un servidor?", options: [
      "Una computadora o sistema que proporciona servicios o recursos a otras computadoras llamadas clientes",
      "Un software de diseño gráfico que crea interfaces de usuario",
      "Un programa que protege contra virus y malware en una red",
      "Una aplicación de mensajería que permite la comunicación entre usuarios ubicados en diferentes partes del mundo"
    ], answer: 0 },
  {
  id: 59,
  text: "¿Qué es JavaScript?",
  options: [
    "Un lenguaje de programación que permite añadir interactividad a las páginas web",
    "Una hoja de estilo que da color y forma a una página web",
    "Una herramienta para crear bases de datos en el servidor",
    "Un programa para editar imágenes desde el navegador"
  ],
  answer: 0
}
,
  {
  id: 60,
  text: "¿Qué es HTML?",
  options: [
    "Un lenguaje de marcado que se utiliza para estructurar el contenido de las páginas web",
    "Un programa que se instala para hacer gráficos en 3D en las páginas web",
    "Una base de datos que almacena información del usuario dentro de una página web",
    "Un sistema operativo utilizado para desarrollar aplicaciones móviles y de escritorio"
  ],
  answer: 0
},
{
  id: 61,
  text: "¿Cuál es el propósito principal de un reporte escrito sobre un proyecto?",
  options: [
    "Informar de manera clara y ordenada sobre el desarrollo y resultados del proyecto",
    "Diseñar gráficamente una página web",
    "Publicar el proyecto en redes sociales",
    "Enviar una carta a las autoridades escolares"
  ],
  answer: 0
},
{
  id: 62,
  text: "¿Qué sección del reporte presenta la problemática que se quiere resolver?",
  options: [
    "Introducción",
    "Anexos",
    "Justificación",
    "Desarrollo técnico"
  ],
  answer: 0
},
{
  id: 63,
  text: "¿Qué debe incluir la sección de justificación en el reporte?",
  options: [
    "Razones por las que se eligió la problemática y la importancia de resolverla",
    "Solo el título del proyecto",
    "El nombre de los participantes",
    "Un resumen de la conclusión"
  ],
  answer: 0
},
{
  id: 64,
  text: "¿Qué se incluye en los objetivos del proyecto dentro del reporte?",
  options: [
    "Las metas que se desean alcanzar al resolver la problemática",
    "Los errores que se cometieron",
    "Los dibujos de los participantes",
    "Una lista de materiales"
  ],
  answer: 0
},
{
  id: 65,
  text: "¿Qué se recomienda al escribir la introducción del reporte?",
  options: [
    "Presentar de forma general el tema y su contexto",
    "Incluir tablas de datos",
    "Escribir solo la fecha",
    "Hacer un resumen de todas las conclusiones"
  ],
  answer: 0
},
{
  id: 66,
  text: "¿Qué se debe describir en el desarrollo del reporte?",
  options: [
    "Las acciones realizadas para resolver la problemática",
    "Solo los nombres de los participantes",
    "La marca de la computadora usada",
    "Una lista de contraseñas"
  ],
  answer: 0
},
{
  id: 67,
  text: "¿Para qué sirve agregar evidencias gráficas (como fotos) en un reporte?",
  options: [
    "Para mostrar el proceso del proyecto de manera visual",
    "Para decorar el documento",
    "Para evitar escribir texto",
    "Para reemplazar la introducción"
  ],
  answer: 0
},
{
  id: 68,
  text: "¿Qué se debe evitar al redactar un reporte escrito?",
  options: [
    "Incluir opiniones sin fundamento o sin relación al tema",
    "Explicar el proceso paso a paso",
    "Agregar gráficos de apoyo personalizados",
    "Redactar en orden cronológico"
  ],
  answer: 0
},
{
  id: 69,
  text: "¿Cuál es el propósito de la conclusión en un reporte de proyecto?",
  options: [
    "Resumir lo aprendido y los resultados obtenidos",
    "Poner imágenes del equipo con los resultados",
    "Escribir las tareas pendientes del proyecto",
    "Mostrar los errores de ortografía cometidos"
  ],
  answer: 0
},
{
  id: 70,
  text: "¿Qué datos deben aparecer en la portada del reporte escrito?",
  options: [
    "Nombre del proyecto, integrantes, grado y fecha",
    "Solo el título en mayúsculas",
    "Una imagen llamativa con las caracteristicas mas importantes",
    "Una frase motivadora para el equipo"
  ],
  answer: 0
}


];


// Mezcla aleatoria:
// Función para mezclar preguntas aleatoriamente
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function ExamPage() {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(null);

  const startExam = () => {
    const shuffled = shuffle([...allQuestions]);
    setQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setStarted(true);
  };

  const handleSelect = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert("Por favor responde todas las preguntas antes de finalizar.");
      return;
    }

    let correct = 0;
    answers.forEach((ans, idx) => {
      if (ans === questions[idx].answer) correct++;
    });

    setScore(correct);

   const res = await fetch('/api/submit-secundaria', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, grade, answers, score: correct }),
});


    if (!res.ok) {
      alert("Error al guardar resultados");
    }
  };

  if (!started) {
    return (
      <div style={containerStyle}>
        <h1>Examen de Tecnologías</h1>

        <div style={{ marginTop: 20 }}>
          <label>Nombre del alumno:&nbsp;
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>

        <div style={{ marginTop: 20 }}>
          <label>Grado:&nbsp;
            <select value={grade} onChange={(e) => setGrade(e.target.value)} style={inputStyle}>
              <option value="">Seleccione...</option>
              <option value="1roA">1roA</option>
              <option value="2doA">2doA</option>
              <option value="2doB">2doB</option>
              <option value="3roA">3roA</option>
              <option value="3roB">3roB</option>
            </select>
          </label>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            onClick={startExam}
            style={startButtonStyle}
            disabled={!name || !grade}
          >
            Comenzar Examen
          </button>
        </div>
      </div>
    );
  }

  if (score !== null) {
    return (
      <div style={containerStyle}>
        <h1>Resultado final</h1>
        <h2>{score} / {questions.length}</h2>
      </div>
    );
  }

  const question = questions[currentIndex];

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: 10, fontSize: 16 }}>
        <strong>Alumno:</strong> {name} &nbsp;&nbsp; <strong>Grado:</strong> {grade}
      </div>

      <h1>Pregunta {currentIndex + 1} de {questions.length}</h1>

      <div style={cardStyle}>
        <p style={questionStyle}>{question.id}. {question.text}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                ...optionStyle,
                backgroundColor: answers[currentIndex] === idx ? '#a3d2ca' : '#e6f0fa'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div style={navButtonsStyle}>
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          style={navButtonStyle}
        >
          Anterior
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
          disabled={currentIndex === questions.length - 1}
          style={navButtonStyle}
        >
          Siguiente
        </button>
      </div>

      {currentIndex === questions.length - 1 && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleSubmit} style={finishButtonStyle}>Finalizar Examen</button>
        </div>
      )}
    </div>
  );
}

// Estilos (igual que ya tenías)
const containerStyle = {
  backgroundColor: '#f0f8ff',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  padding: '30px',
  width: '90%',
  maxWidth: '700px',
  textAlign: 'center'
};

const questionStyle = {
  fontSize: '20px',
  marginBottom: '20px',
  fontWeight: 'bold'
};

const optionStyle = {
  padding: '15px',
  fontSize: '18px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  cursor: 'pointer'
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #aaa',
  width: '60%'
};

const startButtonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const navButtonsStyle = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px'
};

const navButtonStyle = {
  padding: '12px 30px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const finishButtonStyle = {
  padding: '15px 50px',
  fontSize: '18px',
  backgroundColor: '#2196F3',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};