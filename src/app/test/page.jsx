"use client";
import React, { useState } from 'react';

const questions = [
  // Preguntas para el rol Coordinador (10 preguntas)
  { id: 1, text: "¿Te gusta organizar a tus compañeros en actividades?", role: "Coordinador" },
  { id: 2, text: "¿Sueles planificar con anticipación?", role: "Coordinador" },
  { id: 3, text: "¿Te consideras buen gestor del tiempo?", role: "Coordinador" },
  { id: 4, text: "¿Te resulta fácil distribuir tareas?", role: "Coordinador" },
  { id: 5, text: "¿Disfrutas tomando decisiones en grupo?", role: "Coordinador" },
  { id: 6, text: "¿Eres bueno resolviendo conflictos en el equipo?", role: "Coordinador" },
  { id: 7, text: "¿Te sientes cómodo liderando reuniones?", role: "Coordinador" },
  { id: 8, text: "¿Eres capaz de mantener el orden en situaciones caóticas?", role: "Coordinador" },
  { id: 9, text: "¿Te gusta establecer objetivos claros para el equipo?", role: "Coordinador" },
  { id: 10, text: "¿Eres eficiente en la coordinación de proyectos?", role: "Coordinador" },

  // Preguntas para el rol Diseñador (10 preguntas)
  { id: 11, text: "¿Te interesa el arte y el diseño?", role: "Diseñador" },
  { id: 12, text: "¿Tienes buen gusto estético?", role: "Diseñador" },
  { id: 13, text: "¿Te gusta crear presentaciones visualmente atractivas?", role: "Diseñador" },
  { id: 14, text: "¿Disfrutas trabajando en proyectos creativos?", role: "Diseñador" },
  { id: 15, text: "¿Tienes habilidad para combinar colores y formas?", role: "Diseñador" },
  { id: 16, text: "¿Eres innovador en la presentación de ideas?", role: "Diseñador" },
  { id: 17, text: "¿Te gusta experimentar con diferentes estilos visuales?", role: "Diseñador" },
  { id: 18, text: "¿Te interesa el diseño gráfico o de maquetas?", role: "Diseñador" },
  { id: 19, text: "¿Sueles buscar inspiración en el arte?", role: "Diseñador" },
  { id: 20, text: "¿Te sientes cómodo diseñando elementos visuales?", role: "Diseñador" },

  // Preguntas para el rol Programador (10 preguntas)
  { id: 21, text: "¿Te gusta resolver problemas lógicos?", role: "Programador" },
  { id: 22, text: "¿Disfrutas de los desafíos técnicos?", role: "Programador" },
  { id: 23, text: "¿Tienes interés en la programación?", role: "Programador" },
  { id: 24, text: "¿Te consideras una persona analítica?", role: "Programador" },
  { id: 25, text: "¿Sueles pensar en soluciones eficientes?", role: "Programador" },
  { id: 26, text: "¿Te gusta aprender nuevos lenguajes de programación?", role: "Programador" },
  { id: 27, text: "¿Eres paciente al depurar código?", role: "Programador" },
  { id: 28, text: "¿Disfrutas trabajando en proyectos de tecnología?", role: "Programador" },
  { id: 29, text: "¿Te sientes cómodo trabajando con algoritmos?", role: "Programador" },
  { id: 30, text: "¿Tienes capacidad para entender estructuras complejas?", role: "Programador" },

  // Preguntas para el rol Motivador (10 preguntas)
  { id: 31, text: "¿Te gusta apoyar y animar a los demás?", role: "Motivador" },
  { id: 32, text: "¿Te sientes motivado al ayudar a tu equipo?", role: "Motivador" },
  { id: 33, text: "¿Sueles ser el encargado de elevar el ánimo en situaciones difíciles?", role: "Motivador" },
  { id: 34, text: "¿Te gusta comunicar ideas y dar feedback positivo?", role: "Motivador" },
  { id: 35, text: "¿Eres empático con las necesidades de tus compañeros?", role: "Motivador" },
  { id: 36, text: "¿Disfrutas incentivando a otros a dar lo mejor de sí?", role: "Motivador" },
  { id: 37, text: "¿Eres capaz de identificar y resolver conflictos emocionales en el grupo?", role: "Motivador" },
  { id: 38, text: "¿Te sientes cómodo motivando a otros a superar obstáculos?", role: "Motivador" },
  { id: 39, text: "¿Eres bueno reconociendo los logros de los demás?", role: "Motivador" },
  { id: 40, text: "¿Tienes facilidad para crear un ambiente de trabajo positivo?", role: "Motivador" },
];

export default function TestPage() {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('1ro a');
  const [answers, setAnswers] = useState(Array(40).fill(0));
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

    // Calcular puntajes por rol
    const scores = {
      Coordinador: 0,
      Diseñador: 0,
      Programador: 0,
      Motivador: 0,
    };

    questions.forEach((question, index) => {
      scores[question.role] += answers[index];
    });

    const recommendedRole = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    // Usamos "group_name" en el payload para evitar conflicto con palabra reservada
    const payload = {
      name,
      group_name: group,
      answers,
      scores,
      recommendedRole,
    };

    setLoading(true);
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setLoading(false);

    if (res.ok) {
      setResult({ scores, recommendedRole });
    } else {
      const errorData = await res.json();
      console.error("Error en respuesta API:", errorData);
      alert("Hubo un error al enviar los datos.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test de Roles para Equipos de Trabajo</h1>
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
        <div>
          <label>
            Grupo:&nbsp;
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="1ro a">1ro a</option>
              <option value="2do a">2do a</option>
              <option value="2do b">2do b</option>
              <option value="3ro a">3ro a</option>
              <option value="3ro b">3ro b</option>
            </select>
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
          <p>Puntajes por rol:</p>
          <ul>
            {Object.entries(result.scores).map(([role, score]) => (
              <li key={role}>{role}: {score}</li>
            ))}
          </ul>
          <p><strong>Rol recomendado: {result.recommendedRole}</strong></p>
        </div>
      )}
    </div>
  );
}
