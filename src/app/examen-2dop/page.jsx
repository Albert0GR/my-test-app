"use client";
import React, { useState } from 'react';

const questions = [
  { id: 1, text: "¿Qué es una impresora 3D?", options: ["Una máquina que imprime en hojas", "Un aparato que dibuja", "Una máquina que crea objetos en 3D", "Una televisión especial"], answer: 2 },
  { id: 2, text: "¿Qué material usa comúnmente la impresora 3D?", options: ["Plástico", "Papel", "Madera", "Metal puro"], answer: 0 },
  { id: 3, text: "¿Para qué sirve el programa Paint?", options: ["Ver películas", "Escribir códigos", "Hacer dibujos", "Escuchar música"], answer: 2 },
  { id: 4, text: "¿Cómo puedes colorear un dibujo en Paint?", options: ["Usando la herramienta de música", "Usando el bote de pintura", "Presionando la barra espaciadora", "Con el teclado numérico"], answer: 1 },
  { id: 5, text: "¿Qué debemos usar para crear presentaciones?", options: ["Word", "PowerPoint", "Paint", "Excel"], answer: 1 },
  { id: 6, text: "¿Qué es un 'slide' en una presentación?", options: ["Una canción", "Una imagen", "Una diapositiva", "Un video"], answer: 2 },
  { id: 7, text: "¿Qué NO es un buen comportamiento en internet?", options: ["Respetar a los demás", "Compartir información personal", "No insultar", "Pedir ayuda a un adulto"], answer: 1 },
  { id: 8, text: "¿Qué hacemos si alguien nos molesta en línea?", options: ["Ignoramos y avisamos a un adulto", "Insultamos de regreso", "Compartimos los mensajes", "Nos peleamos"], answer: 0 },
  { id: 9, text: "¿Cómo se llama el problema de molestar a alguien por internet?", options: ["Bullying normal", "Cyberbulling", "Amistad digital", "Internet feliz"], answer: 1 },
  { id: 10, text: "¿Qué objeto puede crear la impresora 3D?", options: ["Fotos", "Videos", "Juguetes", "Canciones"], answer: 2 },
  { id: 11, text: "¿Qué herramienta sirve para borrar en Paint?", options: ["Pincel", "Borrador", "Lupa", "Texto"], answer: 1 },
  { id: 12, text: "¿Dónde guardamos el trabajo en Paint?", options: ["En una caja", "En el disco duro", "En la nube", "En el escritorio virtual"], answer: 1 },
  { id: 13, text: "¿Qué debemos evitar publicar en internet?", options: ["Nuestro nombre", "Nuestras fotos privadas", "Nuestros dibujos", "Chistes graciosos"], answer: 1 },
  { id: 14, text: "¿Qué forma tiene la boquilla de impresión 3D?", options: ["Cuadrada", "Punta pequeña", "Circular gigante", "Plana"], answer: 1 },
  { id: 15, text: "¿Qué podemos insertar en una presentación?", options: ["Música", "Imágenes", "Videos", "Todas las anteriores"], answer: 3 },
  { id: 16, text: "¿Qué parte se mueve en la impresora 3D?", options: ["El monitor", "El extrusor", "El CPU", "El cable"], answer: 1 },
  { id: 17, text: "¿Para qué sirve el botón 'Guardar'?", options: ["Borrar", "Cerrar el programa", "Guardar el trabajo", "Imprimir"], answer: 2 },
  { id: 18, text: "¿Qué podemos hacer en Paint?", options: ["Programar robots", "Escribir cuentos", "Dibujar y pintar", "Tocar música"], answer: 2 },
  { id: 19, text: "¿Cómo deben ser los títulos en una presentación?", options: ["Muy largos", "Muy pequeños", "Claros y grandes", "Difíciles de leer"], answer: 2 },
  { id: 20, text: "¿Quién puede ayudarnos si alguien nos molesta en internet?", options: ["Un amigo desconocido", "Un adulto de confianza", "Un niño extraño", "Nadie"], answer: 1 },
  { id: 21, text: "¿Qué sucede si no guardamos nuestro trabajo?", options: ["Se guarda solo", "Se pierde", "Se imprime", "Se comparte"], answer: 1 },
  { id: 22, text: "¿Qué objeto real puede salir de una impresión 3D?", options: ["Una mesa", "Una pizza real", "Un dibujo", "Un juguete de plástico"], answer: 3 },
  { id: 23, text: "¿Qué es el 'extrusor'?", options: ["La computadora", "El motor", "La pieza que derrite el plástico", "El ventilador"], answer: 2 },
  { id: 24, text: "¿Qué tipo de archivos usamos para la impresora 3D?", options: [".mp3", ".jpg", ".stl", ".txt"], answer: 2 },
  { id: 25, text: "¿Qué colores podemos usar en Paint?", options: ["Sólo rojo y azul", "Muchos colores", "Solo blanco y negro", "Depende de la computadora"], answer: 1 },
  { id: 26, text: "¿Qué es importante en un dibujo en Paint?", options: ["Que tenga errores", "Que tenga colores", "Que tenga letras difíciles", "Que no tenga fondo"], answer: 1 },
  { id: 27, text: "¿Qué es el ciberacoso?", options: ["Hacer tareas", "Jugar en internet", "Molestar a otros por internet", "Buscar información"], answer: 2 },
  { id: 28, text: "¿Qué pasa si insultamos en internet?", options: ["No pasa nada", "Nos castigarán", "Es divertido", "Es obligatorio"], answer: 1 },
  { id: 29, text: "¿Qué debes hacer cuando terminas tu trabajo en Paint?", options: ["Apagar la computadora sin guardar", "Cerrar sin guardar", "Guardar el archivo", "Borrar el dibujo"], answer: 2 },
  { id: 30, text: "¿Qué debemos hacer si alguien desconocido nos escribe en internet?", options: ["Contestar siempre", "No contestar y avisar a un adulto", "Compartir información personal", "Agregarlo como amigo"], answer: 1 },
  { id: 31, text: "¿Cómo puede ayudarnos la impresora 3D?", options: ["A cocinar", "A fabricar piezas", "A lavar ropa", "A programar"], answer: 1 },
  { id: 32, text: "¿Cuál es el primer paso al hacer una presentación?", options: ["Escribir todo rápido", "Elegir un tema", "Hacer dibujos", "Buscar música"], answer: 1 },
  { id: 33, text: "¿Cómo se llama el programa para crear presentaciones?", options: ["Excel", "Word", "PowerPoint", "Paint"], answer: 2 },
  { id: 34, text: "¿Qué debe tener una buena diapositiva?", options: ["Mucho texto", "Imágenes y pocas palabras", "Solo dibujos", "Videos largos"], answer: 1 },
  { id: 35, text: "¿Qué debemos evitar hacer en las redes sociales?", options: ["Compartir datos personales", "Ser amables", "Publicar dibujos", "Aprender cosas nuevas"], answer: 0 },
];

export default function ExamPage() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || answers.includes(null)) {
      alert("Responde todas las preguntas y escribe tu nombre");
      return;
    }

    const correct = answers.filter((ans, idx) => ans === questions[idx].answer).length;

    const res = await fetch('/api/submit-2do', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, score: correct }),
    });

    if (res.ok) {
      setScore(correct);
    } else {
      alert("Error al guardar los resultados");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Comic Sans MS, sans-serif', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ fontSize: '32px', color: '#2b6cb0' }}>Examen de Tecnologías</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: '20px' }}>Nombre del alumno:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ fontSize: '18px', marginLeft: '10px', padding: '5px', borderRadius: '8px' }}
          />
        </label>
        <hr />
        {questions.map((q, idx) => (
          <div key={q.id} style={{ marginBottom: '25px', padding: '10px', border: '1px solid #cbd5e0', borderRadius: '10px', backgroundColor: '#ffffff' }}>
            <p style={{ fontSize: '20px' }}>{q.id}. {q.text}</p>
            {q.options.map((opt, optIdx) => (
              <label key={optIdx} style={{ marginRight: '15px', fontSize: '18px' }}>
                <input 
                  type="radio" 
                  name={`q-${q.id}`} 
                  value={optIdx} 
                  checked={answers[idx] === optIdx}
                  onChange={() => handleAnswerChange(idx, optIdx)}
                  style={{ marginRight: '8px' }}
                /> {opt}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#48bb78', color: '#fff', border: 'none', borderRadius: '10px' }}>
          Enviar respuestas
        </button>
      </form>

      {score !== null && (
        <div style={{ marginTop: '20px', fontSize: '22px', color: '#2f855a' }}>
          <h2>¡Tu resultado es: {score} de {questions.length}!</h2>
        </div>
      )}
    </div>
  );
}
