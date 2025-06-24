// src/app/ExamTecnologia/page.jsx
"use client";
import React, { useState } from 'react';

// Listado de 50 preguntas de Tecnología: organización en equipo, proyectos sociales con tecnología, Focalboard y reportes
const allQuestions = [
  // 1–10: Roles y trabajo en equipo en proyectos de Tecnología
  { id: 1, text: "En un proyecto de robótica escolar, ¿qué hace el líder de equipo?", options: [
      "Organiza las tareas y motiva a sus compañeros",
      "Programa todos los robots solo",
      "Diseña los logos sin consultar",
      "Toma fotografías del evento"
    ], answer: 0 },
  { id: 2, text: "¿Por qué es importante que cada miembro tenga un rol definido?", options: [
      "Para que sepan qué tarea les toca y haya orden",
      "Para repetir el trabajo de otros",
      "Para evitar comunicarse entre sí",
      "Para usar más herramientas sin plan"
    ], answer: 0 },
  { id: 3, text: "¿Qué beneficios trae la colaboración en línea durante un proyecto?", options: [
      "Permite compartir documentos y editar juntos en tiempo real",
      "Solo sirve para chatear sin proyecto",
      "Hace que todos usen la misma computadora",
      "Reemplaza las clases presenciales"
    ], answer: 0 },
  { id: 4, text: "¿Cuál es el papel de alguien que revisa la calidad del código?", options: [
      "Verifica que el programa funcione sin errores",
      "Publica el código en redes sociales",
      "Toma capturas de pantalla sin analizar",
      "Solo copia y pega soluciones de internet"
    ], answer: 0 },
  { id: 5, text: "¿Qué promueve una buena comunicación en el equipo?", options: [
      "Escuchar ideas y dar retroalimentación constructiva",
      "Criticar sin proponer mejoras",
      "Mantener secretos del proyecto",
      "Ignorar las sugerencias"
    ], answer: 0 },
  { id: 6, text: "¿Cómo ayuda un mentor o tutor en proyectos tecnológicos?", options: [
      "Guía y resuelve dudas técnicas",
      "Escribe todo el contenido del reporte",
      "Solo evalúa al final sin ayudar",
      "Toma fotos del trabajo"
    ], answer: 0 },
  { id: 7, text: "¿Qué ocurre si no se definen tiempos de entrega?", options: [
      "El proyecto puede atrasarse y desorganizarse",
      "Se libera más tiempo para ocio",
      "No afecta el resultado final",
      "Mejora la creatividad"
    ], answer: 0 },
  { id: 8, text: "En un equipo de diseño web, ¿qué hace el diseñador UX?", options: [
      "Crea la estructura para que sea fácil de usar",
      "Solo elige colores llamativos",
      "Programa sin pruebas",
      "Toma fotos del equipo"
    ], answer: 0 },
  { id: 9, text: "¿Por qué es útil registrar las decisiones del equipo?", options: [
      "Para entender por qué se eligieron ciertas soluciones",
      "Para ocupar más páginas del reporte",
      "Para confundir al lector",
      "Para usar gráficos sin analizar"
    ], answer: 0 },
  { id: 10, text: "¿Qué acción fortalece la confianza entre compañeros?", options: [
      "Reconocer el trabajo bien hecho y agradecer aportes",
      "Ignorar los errores de otros",
      "Asignar tareas sin hablarlo",
      "Competir sin compartir información"
    ], answer: 0 },

  // 11–20: Planificación de proyectos sociales usando tecnología
  { id: 11, text: "¿Cuál es el primer paso al planear una página web para ayudar a tu comunidad?", options: [
      "Identificar la necesidad real que se quiere resolver",
      "Comprar un dominio caro",
      "Diseñar el logo primero",
      "Contratar una cámara profesional"
    ], answer: 0 },
  { id: 12, text: "¿Qué incluye un plan de trabajo para una campaña en redes sociales?", options: [
      "Fechas de publicaciones, responsable y objetivo de cada post",
      "Solo el contenido gráfico",
      "Un calendario sin fechas",
      "Una lista de emojis a usar"
    ], answer: 0 },
  { id: 13, text: "¿Por qué establecer objetivos medibles en un proyecto escolar?", options: [
      "Para saber si cumplimos lo planeado",
      "Para ocupar más tiempo en reuniones",
      "Para copiar de otro grupo",
      "Para retrasar entregas"
    ], answer: 0 },
  { id: 14, text: "¿Para qué sirve un prototipo en digital (mockup)?", options: [
      "Mostrar la idea visual antes de programar",
      "Crear imágenes para Instagram",
      "Solo diseñar sin función",
      "Enviar correos masivos"
    ], answer: 0 },
  { id: 15, text: "¿Qué es un diagrama de flujo en un proyecto de software?", options: [
      "Mapa de pasos que describen cómo funciona el programa",
      "Una foto de la interfaz",
      "Una tabla de Excel sin texto",
      "Un video con música"
    ], answer: 0 },
  { id: 16, text: "¿Por qué hacer pruebas de usabilidad con usuarios reales?", options: [
      "Para detectar errores de navegación y mejorar la experiencia",
      "Para promocionar en redes",
      "Para tomar fotos del grupo",
      "Para llenar el reporte"
    ], answer: 0 },
  { id: 17, text: "¿Qué es una encuesta en línea para un proyecto social?", options: [
      "Formulario web para recopilar opiniones de la comunidad",
      "Un video con preguntas",
      "Una presentación de diapositivas",
      "Un chat grupal"
    ], answer: 0 },
  { id: 18, text: "¿Cómo ayuda un análisis de datos en proyectos tecnológicos?", options: [
      "Identifica patrones y mejora las decisiones",
      "Solo sirve para gráficos bonitos",
      "Solo guarda información sin usarla",
      "Reemplaza la parte creativa"
    ], answer: 0 },
  { id: 19, text: "¿Qué es un reporte de progreso?", options: [
      "Documento que muestra avances, retos y siguientes pasos",
      "Una foto del equipo",
      "Un post en redes sociales",
      "Un video resumen"
    ], answer: 0 },
  { id: 20, text: "¿Para qué sirve la retroalimentación de la comunidad?", options: [
      "Ajustar el proyecto según necesidades reales",
      "Para obtener likes en redes",
      "Para alargar el proyecto sin razón",
      "Para sustituir al equipo"
    ], answer: 0 },

  // 21–30: Tecnologías y herramientas prácticas
  { id: 21, text: "¿Qué rol cumple una cámara en un proyecto de monitoreo ambiental?", options: [
      "Registrar imágenes para analizar cambios con el tiempo",
      "Solo tomar selfies del equipo",
      "Transmitir música ambiental",
      "Editar fotos automáticamente"
    ], answer: 0 },
  { id: 22, text: "¿Cómo puede ayudar un sensor de temperatura en proyectos sociales?", options: [
      "Medir condiciones y alertar si hay riesgo",
      "Tomar fotos de calor",
      "Transmitir video",
      "Solo mostrar datos sin usar"
    ], answer: 0 },
  { id: 23, text: "¿Qué es una página web estática?", options: [
      "Sitio con contenido fijo que no cambia al interactuar",
      "Una app móvil",
      "Un video interactivo",
      "Una base de datos"
    ], answer: 0 },
  { id: 24, text: "¿Qué hace un servidor web?", options: [
      "Envía las páginas web a los navegadores que las solicitan",
      "Diseña las imágenes",
      "Envía correos masivos",
      "Publica en redes sociales"
    ], answer: 0 },
  { id: 25, text: "¿Para qué sirve un dominio en internet?", options: [
      "Identificar la dirección de un sitio web",
      "Almacenar datos en local",
      "Diseñar gráficos",
      "Enviar mensajes"
    ], answer: 0 },
  { id: 26, text: "¿Qué es una red social para proyectos de Tecnología?", options: [
      "Plataforma para compartir información y movilizar apoyo",
      "Un juego en línea",
      "Un servidor FTP",
      "Una hoja de cálculo"
    ], answer: 0 },
  { id: 27, text: "¿Por qué es importante la seguridad al usar contraseñas?", options: [
      "Para proteger datos y evitar accesos no autorizados",
      "Para usar la misma en todo",
      "Para compartir con amigos",
      "No es relevante"
    ], answer: 0 },
  { id: 28, text: "¿Qué es el almacenamiento en la nube?", options: [
      "Guardar archivos en servidores remotos accesibles por internet",
      "Una carpeta en tu PC",
      "Un editor de texto",
      "Un programa de diseño"
    ], answer: 0 },
  { id: 29, text: "¿Cómo puede ayudar un chatbot en un sitio web comunitario?", options: [
      "Responder dudas frecuentes de forma automática",
      "Enviar spam",
      "Solo mostrar imágenes",
      "Descargar archivos maliciosos"
    ], answer: 0 },
  { id: 30, text: "¿Qué es la analítica en redes sociales?", options: [
      "Medir interacción y alcance de las publicaciones",
      "Un tipo de cámara",
      "Un lenguaje de programación",
      "Un servidor privado"
    ], answer: 0 },

  // 31–40: Uso de Focalboard en proyectos de Tecnología
  { id: 31, text: "¿Qué es un proyecto en Focalboard?", options: [
      "Un board donde agrupas tareas y metas",
      "Un video tutorial",
      "Un servidor en la nube",
      "Una base de datos"
    ], answer: 0 },
  { id: 32, text: "¿Para qué sirven las columnas en un board?", options: [
      "Organizar las tarjetas según su estado (por hacer, en proceso, hecho)",
      "Guardar imágenes",
      "Enviar correos",
      "Diseñar gráficos"
    ], answer: 0 },
  { id: 33, text: "¿Qué información puedes agregar a una tarjeta?", options: [
      "Descripción, responsable, fecha y etiquetas",
      "Solo fotos",
      "Solo links externos",
      "Solo comentarios sin contexto"
    ], answer: 0 },
  { id: 34, text: "¿Cómo te ayuda la vista de calendario en Focalboard?", options: [
      "Visualizar fechas de entrega de cada tarea",
      "Ver solo horas sin tareas",
      "Guardar fotos del evento",
      "Enviar recordatorios por email"
    ], answer: 0 },
  { id: 35, text: "¿Qué son los custom fields?", options: [
      "Campos adicionales para datos específicos de la tarea",
      "Un tipo de plantilla HTML",
      "Un botón de compartir",
      "Un formato de video"
    ], answer: 0 },
  { id: 36, text: "¿Cómo colaborar con otros en el mismo board?", options: [
      "Editando, comentando y asignando tareas juntos",
      "Solo viendo sin editar",
      "Enviando capturas de pantalla",
      "Recibiendo notificaciones de spam"
    ], answer: 0 },
  { id: 37, text: "¿Para qué sirve exportar tu board como CSV?", options: [
      "Analizar datos en una hoja de cálculo externa",
      "Publicar en redes sociales",
      "Diseñar diapositivas",
      "Crear un video resumen"
    ], answer: 0 },
  { id: 38, text: "¿Qué ventaja tiene el historial de cambios?", options: [
      "Ver quién hizo modificaciones y revertir si hay errores",
      "Guardar más imágenes",
      "Enviar correos masivos",
      "Solo para ocupar espacio"
    ], answer: 0 },
  { id: 39, text: "¿Cómo marcas una tarjeta como completada?", options: [
      "Arrastrándola a la columna 'Hecho'",
      "Eliminándola del board",
      "Cerrando la aplicación",
      "Publicándola en redes"
    ], answer: 0 },
  { id: 40, text: "¿Por qué usar colores o etiquetas en las tarjetas?", options: [
      "Para identificar prioridad o tipo de tarea fácil y rápido",
      "Para decorar sin función",
      "Para borrar información",
      "Para confundir al equipo"
    ], answer: 0 },

  // 41–50: Documentación y reportes en proyectos tecnológicos
  { id: 41, text: "¿Qué debe incluir el resumen ejecutivo de un reporte?", options: [
      "Objetivo, método, resultados y conclusiones breves",
      "Solo títulos llamativos",
      "Solo imágenes sin texto",
      "Solo la introducción"
    ], answer: 0 },
  { id: 42, text: "¿Dónde va la sección de metodología en el reporte?", options: [
      "Después de la introducción y antes de los resultados",
      "Al inicio en la portada",
      "Al final en anexos",
      "En la conclusión"
    ], answer: 0 },
  { id: 43, text: "¿Por qué es importante incluir tablas y gráficas?", options: [
      "Para mostrar datos de forma clara y comparativa",
      "Para ocupar espacio en el reporte",
      "Para decorar sin sentido",
      "Para reemplazar el texto"
    ], answer: 0 },
  { id: 44, text: "¿Qué rol cumple la sección de conclusiones?", options: [
      "Resumir aprendizajes y proponer siguientes pasos",
      "Presentar imágenes del equipo",
      "Listar tareas pendientes",
      "Repetir la introducción"
    ], answer: 0 },
  { id: 45, text: "¿Para qué sirven los anexos?", options: [
      "Adjuntar información adicional sin interrumpir el flujo principal",
      "Repetir datos del cuerpo",
      "Solo poner fotos sin contexto",
      "Para ocupar páginas extras"
    ], answer: 0 },
  { id: 46, text: "¿Qué formato de archivo es común para entregar reportes?", options: [
      ".PDF para conservar diseño y evitar cambios",
      ".TXT para texto sin estilo",
      ".MP4 para video",
      ".ZIP para comprimir imágenes"
    ], answer: 0 },
  { id: 47, text: "¿Por qué revisar ortografía antes de entregar?", options: [
      "Para asegurar claridad y profesionalismo en el documento",
      "No es necesario",
      "Solo para cumplir requisitos",
      "Para aumentar el número de páginas"
    ], answer: 0 },
  { id: 48, text: "¿Qué herramienta online ayuda a escribir en equipo?", options: [
      "Google Docs o Microsoft OneDrive",
      "Un servidor FTP",
      "Una cámara web",
      "Una hoja de cálculo sin texto"
    ], answer: 0 },
  { id: 49, text: "¿Qué datos aparecen en la portada del reporte?", options: [
      "Título, autores, fecha y nombre del proyecto",
      "Solo el título en mayúsculas",
      "Solo las conclusiones",
      "Solo imágenes llamativas"
    ], answer: 0 },
  { id: 50, text: "¿Para qué guardar versiones sucesivas del documento?", options: [
      "Permite comparar cambios y restaurar versiones anteriores",
      "Solo ocupa espacio",
      "No tiene utilidad",
      "Para duplicar archivos sin razón"
    ], answer: 0 }
];

// Función para mezclar un array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Mezcla opciones y recalcula índice de respuesta
function shuffleOptionsAndAnswer(questions) {
  return questions.map((q) => {
    const options = [...q.options];
    const correctAnswer = q.options[q.answer];
    // Mezclar opciones
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    // Nueva posición de la opción correcta
    const newAnswerIndex = options.indexOf(correctAnswer);
    return { ...q, options, answer: newAnswerIndex };
  });
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
    const randomized = shuffleOptionsAndAnswer(shuffle([...allQuestions]));
    setQuestions(randomized);
    setAnswers(new Array(randomized.length).fill(null));
    setStarted(true);
  };

  const handleSelect = (idx) => {
    const updated = [...answers];
    updated[currentIndex] = idx;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert("Por favor responde todas las preguntas antes de finalizar.");
      return;
    }
    const correctCount = answers.reduce((sum, ans, i) => sum + (ans === questions[i].answer ? 1 : 0), 0);
    setScore(correctCount);
    // Enviar a tu API si lo requieres...
  };

  if (!started) {
    return (
      <div style={containerStyle}>
        <h1>Examen de Tecnología</h1>
        <div style={{ marginTop: 20 }}>
          <label>Nombre:&nbsp;
            <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
          </label>
        </div>
        <div style={{ marginTop: 20 }}>
          <label>Grado:&nbsp;
            <select value={grade} onChange={e => setGrade(e.target.value)} style={inputStyle}>
              <option value="">Seleccione...</option>
              <option value="1roT">1ro Tecnología</option>
              <option value="2doT">2do Tecnología</option>
              <option value="3roT">3ro Tecnología</option>
            </select>
          </label>
        </div>
        <button onClick={startExam} style={startButtonStyle} disabled={!name || !grade}>
          Comenzar Examen
        </button>
      </div>
    );
  }

  if (score !== null) {
    return (
      <div style={containerStyle}>
        <h1>Resultado</h1>
        <h2>{score} / {questions.length}</h2>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: 10 }}>
        <strong>Alumno:</strong> {name} &nbsp; <strong>Grado:</strong> {grade}
      </div>
      <h2>Pregunta {currentIndex + 1} de {questions.length}</h2>
      <div style={cardStyle}>
        <p style={questionStyle}>{q.text}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                ...optionStyle,
                backgroundColor: answers[currentIndex] === idx ? '#c8e6c9' : '#f0f0f0'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div style={navButtonsStyle}>
        <button onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))} disabled={currentIndex === 0} style={navButtonStyle}>
          Anterior
        </button>
        <button onClick={() => setCurrentIndex(i => Math.min(i + 1, questions.length - 1))} disabled={currentIndex === questions.length - 1} style={navButtonStyle}>
          Siguiente
        </button>
      </div>
      {currentIndex === questions.length - 1 && (
        <button onClick={handleSubmit} style={finishButtonStyle}>
          Finalizar Examen
        </button>
      )}
    </div>
  );
}

// Estilos
const containerStyle = {
  backgroundColor: '#fafafa',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: '20px',
  width: '100%',
  maxWidth: '600px',
  textAlign: 'left'
};
const questionStyle = { fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' };
const optionStyle = { padding: '12px', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' };
const inputStyle = { padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #aaa', width: '60%' };
const startButtonStyle = { marginTop: '30px', padding: '12px 24px', fontSize: '16px', border: 'none', borderRadius: '6px', backgroundColor: '#1976d2', color: '#fff', cursor: 'pointer' };
const navButtonsStyle = { marginTop: '20px', display: 'flex', gap: '15px' };
const navButtonStyle = { padding: '10px 20px', fontSize: '14px', border: 'none', borderRadius: '6px', backgroundColor: '#1976d2', color: '#fff', cursor: 'pointer' };
const finishButtonStyle = { marginTop: '20px', padding: '12px 30px', fontSize: '16px', border: 'none', borderRadius: '6px', backgroundColor: '#388e3c', color: '#fff', cursor: 'pointer' };
