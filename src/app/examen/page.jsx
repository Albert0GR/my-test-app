"use client";
import React, { useState } from 'react';

const questions = [
  // Impresión 3D
  { id: 1, text: "¿Sabes que una impresora 3D puede crear juguetes de plástico?", topic: "Impresión 3D" },
  { id: 2, text: "¿Has visto una impresora 3D funcionando?", topic: "Impresión 3D" },
  { id: 3, text: "¿Te gustaría diseñar tus propios objetos en 3D?", topic: "Impresión 3D" },
  { id: 4, text: "¿Sabes que se pueden imprimir llaveros, figuras y piezas con una impresora 3D?", topic: "Impresión 3D" },
  { id: 5, text: "¿Te gustaría aprender a usar un programa de diseño 3D?", topic: "Impresión 3D" },

  // Paint
  { id: 6, text: "¿Has usado Paint en la computadora?", topic: "Paint" },
  { id: 7, text: "¿Sabes cómo usar los colores y pinceles en Paint?", topic: "Paint" },
  { id: 8, text: "¿Te gusta dibujar en la computadora?", topic: "Paint" },
  { id: 9, text: "¿Has guardado dibujos que hiciste en Paint?", topic: "Paint" },
  { id: 10, text: "¿Sabes abrir un dibujo guardado en Paint?", topic: "Paint" },

  // Crear imágenes en Paint
  { id: 11, text: "¿Has creado un dibujo usando figuras como círculos y cuadrados en Paint?", topic: "Crear Imágenes en Paint" },
  { id: 12, text: "¿Has agregado letras o nombres a tus dibujos en Paint?", topic: "Crear Imágenes en Paint" },
  { id: 13, text: "¿Sabes borrar algo si te equivocas en Paint?", topic: "Crear Imágenes en Paint" },
  { id: 14, text: "¿Sabes cambiar el tamaño de los dibujos en Paint?", topic: "Crear Imágenes en Paint" },
  { id: 15, text: "¿Has usado la herramienta de rellenar color en Paint?", topic: "Crear Imágenes en Paint" },

  // Crear presentaciones
  { id: 16, text: "¿Sabes qué es una presentación (como en PowerPoint)?", topic: "Presentaciones" },
  { id: 17, text: "¿Has creado una presentación en la computadora?", topic: "Presentaciones" },
  { id: 18, text: "¿Sabes agregar imágenes o dibujos a una presentación?", topic: "Presentaciones" },
  { id: 19, text: "¿Sabes poner tu nombre en la primera página de una presentación?", topic: "Presentaciones" },
  { id: 20, text: "¿Te gustaría mostrar una presentación a tus compañeros?", topic: "Presentaciones" },

  // Cyberbullying
  { id: 21, text: "¿Sabes que no está bien burlarse de alguien por internet?", topic: "Cyberbullying" },
  { id: 22, text: "¿Sabes que debes avisar a un adulto si alguien te molesta por internet?", topic: "Cyberbullying" },
  { id: 23, text: "¿Sabes que no debes compartir tus datos personales en internet?", topic: "Cyberbullying" },
  { id: 24, text: "¿Sabes que las bromas en internet pueden lastimar a otros?", topic: "Cyberbullying" },
  { id: 25, text: "¿Sabes que siempre debes ser respetuoso con los demás en internet?", topic: "Cyberbullying" },
];

export default function ExamenTecnologia() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(25).fill(0));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = Number(value);
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (answers.some(answer => answer === 0)) {
      alert("Por favor, responde todas las preguntas.");
      return;
    }
    if (!name) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    // Calcular puntaje total
    const totalScore = answers.reduce((sum, current) => sum + current, 0);

    const payload = {
      name,
      answers,
      totalScore,
    };

    setLoading(true);
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setLoading(false);

    if (res.ok) {
      setResult(totalScore);
    } else {
      const errorData = await res.json();
      console.error("Error en respuesta API:", errorData);
      alert("Hubo un error al enviar los datos.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Examen de Tecnología para Niños</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre del alumno:&nbsp;
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <hr />
        <h2>Responde (1 = Nunca, 5 = Siempre):</h2>
        {questions.map((q, index) => (
          <div key={q.id} style={{ marginBottom: '10px' }}>
            <label>{q.id}. {q.text}</label>
            <div>
              {[1, 2, 3, 4, 5].map(option => (
                <label key={option} style={{ marginRight: '10px' }}>
                  <input 
                    type="radio" 
                    name={`question-${q.id}`} 
                    value={option}
                    checked={answers[index] === option}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                  /> {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Examen"}
        </button>
      </form>

      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultado</h2>
          <p>Puntaje total: {result} de {25 * 5}</p>
        </div>
      )}
    </div>
  );
}
