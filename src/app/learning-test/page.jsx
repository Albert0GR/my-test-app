"use client";
import React, { useState } from 'react';

const questions = [
  // Preguntas para el estilo Auditivo (15 preguntas)
  { id: 1, text: "Prefiero escuchar explicaciones que leer textos.", style: "Auditivo" },
  { id: 2, text: "Aprendo mejor con conferencias o clases orales.", style: "Auditivo" },
  { id: 3, text: "Me resulta fácil recordar lo que escucho.", style: "Auditivo" },
  { id: 4, text: "Disfruto de discusiones y debates verbales.", style: "Auditivo" },
  { id: 5, text: "Prefiero usar grabaciones y audios para estudiar.", style: "Auditivo" },
  { id: 6, text: "Soy sensible al tono y ritmo de la voz en las clases.", style: "Auditivo" },
  { id: 7, text: "Me gusta explicar verbalmente lo que aprendo.", style: "Auditivo" },
  { id: 8, text: "Recuerdo mejor la información escuchada en presentaciones.", style: "Auditivo" },
  { id: 9, text: "Prefiero escuchar música o podcasts mientras estudio.", style: "Auditivo" },
  { id: 10, text: "Las explicaciones orales me ayudan a entender conceptos.", style: "Auditivo" },
  { id: 11, text: "Me resulta fácil aprender idiomas al escucharlos.", style: "Auditivo" },
  { id: 12, text: "Me gusta participar en discusiones en clase.", style: "Auditivo" },
  { id: 13, text: "Prefiero recibir instrucciones verbales.", style: "Auditivo" },
  { id: 14, text: "Aprendo mejor cuando explico lo que escuché.", style: "Auditivo" },
  { id: 15, text: "Soy bueno siguiendo explicaciones orales.", style: "Auditivo" },

  // Preguntas para el estilo Kinestésico (15 preguntas)
  { id: 16, text: "Prefiero aprender haciendo actividades prácticas.", style: "Kinestésico" },
  { id: 17, text: "Me resulta útil participar en experimentos o simulaciones.", style: "Kinestésico" },
  { id: 18, text: "Aprendo mejor cuando estoy en movimiento.", style: "Kinestésico" },
  { id: 19, text: "Disfruto de actividades manuales y prácticas.", style: "Kinestésico" },
  { id: 20, text: "Prefiero aprender a través del tacto y la acción.", style: "Kinestésico" },
  { id: 21, text: "Me ayuda mucho realizar actividades físicas durante el estudio.", style: "Kinestésico" },
  { id: 22, text: "Aprendo mejor cuando realizo tareas con mis manos.", style: "Kinestésico" },
  { id: 23, text: "Prefiero aprender con actividades interactivas.", style: "Kinestésico" },
  { id: 24, text: "Encuentro útil el aprendizaje basado en la experiencia práctica.", style: "Kinestésico" },
  { id: 25, text: "Me resulta fácil recordar lo que hago físicamente.", style: "Kinestésico" },
  { id: 26, text: "Prefiero usar mi cuerpo para entender conceptos.", style: "Kinestésico" },
  { id: 27, text: "Disfruto de actividades que involucran movimiento.", style: "Kinestésico" },
  { id: 28, text: "Me gusta participar en talleres o laboratorios.", style: "Kinestésico" },
  { id: 29, text: "Aprendo mejor haciendo demostraciones prácticas.", style: "Kinestésico" },
  { id: 30, text: "El aprendizaje práctico es más efectivo para mí.", style: "Kinestésico" },

  // Preguntas para el estilo Visual (15 preguntas)
  { id: 31, text: "Prefiero aprender mediante imágenes y gráficos.", style: "Visual" },
  { id: 32, text: "Aprendo mejor leyendo textos y viendo diagramas.", style: "Visual" },
  { id: 33, text: "Me ayuda mucho ver presentaciones y videos para entender conceptos.", style: "Visual" },
  { id: 34, text: "Recuerdo mejor la información cuando la veo representada visualmente.", style: "Visual" },
  { id: 35, text: "Me gusta usar mapas mentales y esquemas para estudiar.", style: "Visual" },
  { id: 36, text: "Prefiero ver ilustraciones y gráficos en lugar de leer largos textos.", style: "Visual" },
  { id: 37, text: "Aprendo mejor cuando los conceptos están visualmente organizados.", style: "Visual" },
  { id: 38, text: "Encuentro útil el uso de colores y formas para diferenciar ideas.", style: "Visual" },
  { id: 39, text: "Disfruto de ver videos educativos.", style: "Visual" },
  { id: 40, text: "Prefiero gráficos y tablas para analizar datos.", style: "Visual" },
  { id: 41, text: "Me resulta fácil recordar lo que he visto en imágenes.", style: "Visual" },
  { id: 42, text: "Prefiero diagramas y mapas conceptuales para estudiar.", style: "Visual" },
  { id: 43, text: "La presentación visual de la información es esencial para mi aprendizaje.", style: "Visual" },
  { id: 44, text: "Aprendo mejor con libros ilustrados y videos.", style: "Visual" },
  { id: 45, text: "La información presentada de forma visual me resulta más clara.", style: "Visual" },
];

export default function LearningTestPage() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(45).fill(0));
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

    // Calcular puntajes por estilo
    const scores = {
      Auditivo: 0,
      Kinestésico: 0,
      Visual: 0,
    };

    questions.forEach((question, index) => {
      scores[question.style] += answers[index];
    });

    // Determinar el estilo recomendado
    const recommendedStyle = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const payload = {
      name,
      answers,
      scores,
      recommendedStyle,
    };

    setLoading(true);
    const res = await fetch('/api/learning-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setLoading(false);

    if (res.ok) {
      setResult({ scores, recommendedStyle });
    } else {
      const errorData = await res.json();
      console.error("Error en respuesta API:", errorData);
      alert("Hubo un error al enviar los datos.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test de Estilos de Aprendizaje</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:&nbsp;
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <hr />
        <h2>Responde las siguientes preguntas (1 = Nunca, 5 = Siempre):</h2>
        {questions.map((q, index) => (
          <div key={q.id} style={{ marginBottom: '10px' }}>
            <label>
              {q.id}. {q.text}
            </label>
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
          {loading ? "Enviando..." : "Enviar Test"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultados</h2>
          <p>Puntajes por estilo de aprendizaje:</p>
          <ul>
            {Object.entries(result.scores).map(([style, score]) => (
              <li key={style}>{style}: {score}</li>
            ))}
          </ul>
          <p><strong>Estilo recomendado: {result.recommendedStyle}</strong></p>
        </div>
      )}
    </div>
  );
}
