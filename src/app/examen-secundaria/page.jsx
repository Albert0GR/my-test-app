"use client";
import React, { useState, useEffect } from 'react';

// Tu listado completo de preguntas:
const allQuestions = [
  { id: 1, text: "¿Qué es una página web?", options: ["Un archivo físico", "Un documento HTML accesible por internet", "Una imagen estática", "Una base de datos"], answer: 1 },
  { id: 2, text: "¿Qué lenguaje se utiliza para definir el contenido de una página web?", options: ["Python", "HTML", "SQL", "C++"], answer: 1 },
  { id: 3, text: "¿Qué es una etiqueta en HTML?", options: ["Una variable", "Una instrucción de diseño", "Un comando de programación", "Un elemento que define estructura de contenido"], answer: 3 },
  { id: 4, text: "¿Para qué sirve la etiqueta `<h1>` en HTML?", options: ["Crear tablas", "Definir el título principal", "Agregar imágenes", "Crear listas"], answer: 1 },
  { id: 5, text: "¿Qué es el atributo 'src' en la etiqueta `<img>`?", options: ["Indica el color", "Define el tamaño", "Indica la fuente de la imagen", "Muestra el texto alternativo"], answer: 2 },
  { id: 6, text: "¿Qué es una problemática en la comunidad?", options: ["Un asunto que no tiene solución", "Una situación que afecta negativamente a un grupo", "Una ley", "Un beneficio común"], answer: 1 },
  { id: 7, text: "¿Qué es la justificación de un proyecto?", options: ["Explicar por qué se hace", "Contar una historia", "Escribir el título", "Nombrar al equipo"], answer: 0 },
  { id: 8, text: "¿Cómo se identifican los objetivos de un proyecto?", options: ["Copiando de otros", "Definiendo lo que se busca lograr", "Escribiendo conclusiones", "Haciendo dibujos"], answer: 1 },
  { id: 9, text: "¿Qué es Focalboard?", options: ["Un videojuego", "Una herramienta de gestión de tareas y proyectos", "Un buscador web", "Un editor de imágenes"], answer: 1 },
  { id: 10, text: "¿Qué permite hacer Focalboard?", options: ["Editar videos", "Organizar tareas por etapas", "Jugar online", "Hacer encuestas"], answer: 1 },
  { id: 11, text: "¿Qué rol puede existir dentro de un equipo?", options: ["Programador", "Diseñador", "Documentador", "Todos los anteriores"], answer: 3 },
  { id: 12, text: "¿Qué es el trabajo colaborativo?", options: ["Hacerlo solo", "Trabajar en equipo con objetivos comunes", "Mandar las tareas a otros", "No cumplir con los tiempos"], answer: 1 },
  { id: 13, text: "¿Cuál es la extensión básica de un archivo HTML?", options: [".html", ".txt", ".pdf", ".exe"], answer: 0 },
  { id: 14, text: "¿Qué etiqueta HTML se usa para agregar un hipervínculo?", options: ["<img>", "<a>", "<p>", "<link>"], answer: 1 },
  { id: 15, text: "¿Para qué sirve la etiqueta `<p>` en HTML?", options: ["Insertar párrafos de texto", "Agregar videos", "Definir encabezados", "Insertar audios"], answer: 0 },
  { id: 16, text: "¿Qué significa el atributo 'alt' en una imagen?", options: ["Alternativa de color", "Texto alternativo por si la imagen no carga", "Cambiar tamaño", "Insertar animaciones"], answer: 1 },
  { id: 17, text: "¿Qué es necesario para publicar una página web?", options: ["Una computadora", "Un servidor o servicio de hosting", "Una impresora", "Un navegador"], answer: 1 },
  { id: 18, text: "¿Qué es un dominio?", options: ["Dirección única de un sitio web", "Lenguaje de programación", "Servidor", "Cuenta de usuario"], answer: 0 },
  { id: 19, text: "¿Qué es el diseño responsivo?", options: ["Solo funciona en computadora", "Se adapta a distintos tamaños de pantalla", "Es un color especial", "Solo es para celulares"], answer: 1 },
  { id: 20, text: "¿Cuál es la estructura básica de un archivo HTML?", options: ["Inicio, medio y fin", "<html>, <head>, <body>", "Título, imagen, párrafo", "Script, footer, header"], answer: 1 },
  { id: 21, text: "¿Qué debemos evitar al trabajar en equipo?", options: ["Cumplir tiempos", "Comunicar avances", "Resolver problemas juntos", "No respetar opiniones de los demás"], answer: 3 },
  { id: 22, text: "¿Por qué es importante definir bien el problema?", options: ["Para perder tiempo", "Para tener un plan claro", "Para copiar soluciones", "Para justificar los errores"], answer: 1 },
  { id: 23, text: "¿Qué permite organizar tareas por etapas?", options: ["Paint", "Word", "Focalboard", "PowerPoint"], answer: 2 },
  { id: 24, text: "¿Qué es un objetivo general?", options: ["Lo que busca lograr todo el proyecto", "Un color", "Un diseño", "Una imagen"], answer: 0 },
  { id: 25, text: "¿Qué es un objetivo específico?", options: ["Sub-metas concretas del proyecto", "Una ley", "Un problema", "Una tabla"], answer: 0 },
  { id: 26, text: "¿Cuál es el primer paso al iniciar un proyecto?", options: ["Diseñar la página web", "Definir la problemática", "Subir a internet", "Elegir colores"], answer: 1 },
  { id: 27, text: "¿Qué herramienta gratuita permite crear páginas web estáticas?", options: ["Photoshop", "Github Pages", "Excel", "MS Paint"], answer: 1 },
  { id: 28, text: "¿Cuál es la función de un 'líder de proyecto'?", options: ["Regañar al equipo", "Organizar y coordinar actividades", "Revisar tareas de otros grupos", "Hacer todo solo"], answer: 1 },
  { id: 29, text: "¿Qué es el hosting?", options: ["Almacén de archivos web accesibles en internet", "Carpeta de Windows", "Editor de texto", "Diseñador de logos"], answer: 0 },
  { id: 30, text: "¿Qué permite el trabajo con roles?", options: ["Confusión", "Mayor organización y responsabilidad", "Menos participación", "Menos comunicación"], answer: 1 },
  { id: 31, text: "¿Qué es un encabezado `<h3>`?", options: ["Subtítulo de menor importancia que `<h1>`", "Imagen", "Tabla", "Video"], answer: 0 },
  { id: 32, text: "¿Qué representa un problema social?", options: ["Un asunto personal", "Una dificultad que afecta a varios en la comunidad", "Una pelea entre amigos", "Un gusto individual"], answer: 1 },
  { id: 33, text: "¿Cuál es la importancia de justificar un proyecto?", options: ["Para dar razones válidas de por qué realizarlo", "Para tener excusas", "Para ganar puntos", "Para gastar recursos"], answer: 0 },
  { id: 34, text: "¿Qué permite un plan de trabajo?", options: ["No planear", "Organizar actividades con tiempos y responsables", "Decidir después", "Repetir tareas"], answer: 1 },
  { id: 35, text: "¿Por qué es importante el trabajo colaborativo?", options: ["Permite sumar habilidades y conocimientos", "Hace perder tiempo", "Es obligatorio", "Es más rápido hacerlo solo"], answer: 0 },
  { id: 36, text: "¿Qué plataforma permite gestión de tareas y proyectos online?", options: ["Facebook", "Focalboard", "Netflix", "TikTok"], answer: 1 },
  { id: 37, text: "¿Qué sucede si no se respeta el tiempo de entrega en un proyecto?", options: ["Se mejora el trabajo", "Se retrasan todos los procesos", "No pasa nada", "Se gana más tiempo"], answer: 1 },
  { id: 38, text: "¿Qué es un documento de justificación?", options: ["Un reporte que argumenta las razones de un proyecto", "Una lista de materiales", "Un presupuesto", "Una tarea escrita"], answer: 0 },
  { id: 39, text: "¿Qué característica debe tener un objetivo?", options: ["Ser confuso", "Ser concreto, medible y alcanzable", "Ser largo", "Ser personal"], answer: 1 },
  { id: 40, text: "¿Cuál es la etiqueta correcta para insertar una imagen en HTML?", options: ["<img>", "<picture>", "<image>", "<pic>"], answer: 0 }
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
      body: JSON.stringify({ name, grade, answers }),
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