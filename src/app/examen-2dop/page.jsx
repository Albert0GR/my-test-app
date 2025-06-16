"use client";
import React, { useState } from 'react';

// Tus 30 preguntas
const questions = [
  { id: 1, text: "¿Qué material usa comúnmente una impresora 3D?", options: ["Madera", "Plástico", "Vidrio", "Papel"], correct: 1 },
  { id: 2, text: "¿Qué crea una impresora 3D?", options: ["Fotos", "Videos", "Objetos físicos", "Sonidos"], correct: 2 },
  { id: 3, text: "¿En qué programa puedes diseñar para imprimir en 3D?", options: ["Paint", "Tinkercad", "Word", "PowerPoint"], correct: 1 },
  { id: 4, text: "¿Qué forma puede imprimir una impresora 3D?", options: ["Sólo cuadrados", "Solo círculos", "Cualquier forma", "Líneas planas"], correct: 2 },
  { id: 5, text: "¿Cuál es un uso de la impresión 3D?", options: ["Ver películas", "Hacer comida", "Fabricar piezas", "Escribir cartas"], correct: 2 },
  { id: 6, text: "¿Qué necesitas antes de imprimir en 3D?", options: ["Un dibujo en papel", "Un archivo digital 3D", "Una cámara", "Un teléfono"], correct: 1 },
  { id: 7, text: "¿Para qué sirve Paint?", options: ["Escribir textos largos", "Dibujar y colorear", "Reproducir música", "Hacer cálculos"], correct: 1 },
  { id: 8, text: "¿Qué herramienta usas para borrar?", options: ["Pincel", "Goma", "Lupa", "Texto"], correct: 1 },
  { id: 9, text: "¿Qué puedes agregar a un dibujo en Paint?", options: ["Tablas", "Gráficos", "Texto", "Videos"], correct: 2 },
  { id: 10, text: "¿Qué formato común tiene un dibujo guardado en Paint?", options: ["PDF", "JPG", "MP3", "TXT"], correct: 1 },
  { id: 11, text: "¿Qué puedes hacer si te equivocas?", options: ["Apagar la computadora", "Llamar a alguien", "Usar deshacer (ctrl+z)", "Volver a dibujar todo"], correct: 2 },
  { id: 12, text: "¿Qué es el balde de pintura en Paint?", options: ["Borra todo", "Colorea zonas cerradas", "Hace figuras", "Agranda el dibujo"], correct: 1 },
  { id: 13, text: "¿Qué programa sirve para hacer presentaciones?", options: ["Excel", "Word", "PowerPoint", "Paint"], correct: 2 },
  { id: 14, text: "¿Qué podemos agregar en una presentación?", options: ["Solo texto", "Solo dibujos", "Imágenes, texto y sonidos", "Solo música"], correct: 2 },
  { id: 15, text: "¿Qué es una diapositiva?", options: ["Una hoja de cálculo", "Una hoja de dibujo", "Una página de presentación", "Una ventana de internet"], correct: 2 },
  { id: 16, text: "¿Cómo se cambia el fondo de una diapositiva?", options: ["No se puede", "Desde diseño", "Desde internet", "Con el teclado"], correct: 1 },
  { id: 17, text: "¿Qué podemos poner en la primera diapositiva?", options: ["Nombre y tema", "Solo dibujos", "Nada", "Fotos de internet"], correct: 0 },
  { id: 18, text: "¿Para qué sirven las presentaciones?", options: ["Para jugar", "Para enseñar y mostrar ideas", "Para pintar", "Para escribir cuentos"], correct: 1 },
  { id: 19, text: "¿Qué es el cyberbullying?", options: ["Jugar en línea", "Hacer amigos", "Molestar a otros por internet", "Ver videos"], correct: 2 },
  { id: 20, text: "¿Qué debes hacer si alguien te molesta en internet?", options: ["Ignorar", "Responder igual", "Decirle a un adulto", "Salir de internet para siempre"], correct: 2 },
  { id: 21, text: "¿Está bien compartir tus contraseñas?", options: ["Sí", "No", "A veces", "Solo con amigos"], correct: 1 },
  { id: 22, text: "¿A quién puedes contarle si te sientes mal por algo en internet?", options: ["A un desconocido", "A un amigo de internet", "A tus papás o maestro", "A nadie"], correct: 2 },
  { id: 23, text: "¿Es correcto publicar fotos de otros sin permiso?", options: ["Sí", "No", "Solo si es gracioso", "Si es amigo sí"], correct: 1 },
  { id: 24, text: "¿Qué debes hacer si ves que molestan a otro niño en internet?", options: ["Reírte", "Ignorar", "Ayudar y avisar a un adulto", "Compartir la burla"], correct: 2 },
  { id: 25, text: "¿Cuál de estos es un dispositivo de entrada?", options: ["Monitor", "Teclado", "Impresora", "Bocina"], correct: 1 },
  { id: 26, text: "¿Qué programa usamos para navegar por internet?", options: ["Calculadora", "Word", "Google Chrome", "Paint"], correct: 2 },
  { id: 27, text: "¿Qué es una contraseña segura?", options: ["12345", "MiNombre", "Una combinación de letras, números y símbolos", "Mi fecha de nacimiento"], correct: 2 },
  { id: 28, text: "¿Qué es el icono de la papelera?", options: ["Guardar archivos", "Eliminar archivos", "Editar archivos", "Enviar archivos"], correct: 1 },
  { id: 29, text: "¿Qué parte de la computadora muestra la imagen?", options: ["CPU", "Teclado", "Pantalla", "Ratón"], correct: 2 },
  { id: 30, text: "¿Qué es Internet?", options: ["Un juego", "Una red mundial de información", "Un programa de dibujo", "Una televisión"], correct: 1 }
];

export default function ExamenTecnologia() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(30).fill(null));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = Number(value);
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (answers.some(answer => answer === null) || !name) {
      alert("Por favor, completa el examen y escribe tu nombre.");
      return;
    }

    let score = answers.reduce((acc, val, idx) => acc + (val === questions[idx].correct ? 1 : 0), 0);

    const payload = { name, score };

    setLoading(true);
    try {
      const res = await fetch('/api/submit-2do', {  // <-- OJO aquí va la ruta correcta del API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Error al enviar datos');

      setResult(score);
    } catch (err) {
      //console.error(err);
      //alert("Error al enviar los datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: '20px',
      background: 'linear-gradient(135deg, #48c9b0 0%, #a3e4d7 100%)',
      minHeight: '100vh',
      fontFamily: 'Comic Sans MS, sans-serif',
      fontSize: '18px'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px', color: '#333' }}>🧩 Examen de Tecnología 🖥️</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <label>Nombre del alumno:&nbsp;
            <input style={{ fontSize: '20px', padding: '10px', borderRadius: '10px' }}
              type="text" value={name}
              onChange={(e) => setName(e.target.value)} required />
          </label>
        </div>
        <hr />
        {questions.map((q, index) => (
          <div key={q.id} style={{
            backgroundColor: '#138d75', padding: '15px',
            marginBottom: '15px', borderRadius: '15px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
          }}>
            <p><strong>{q.id}. {q.text}</strong></p>
            {q.options.map((option, optIndex) => (
              <div key={optIndex}>
                <label>
                  <input type="radio" name={`question-${q.id}`}
                    value={optIndex}
                    checked={answers[index] === optIndex}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required /> {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" disabled={loading}
            style={{
              fontSize: '22px', backgroundColor: '#4CAF50',
              color: 'white', padding: '15px 30px',
              borderRadius: '15px', cursor: 'pointer',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
            }}>
            {loading ? "Enviando..." : "Enviar Examen"}
          </button>
        </div>
      </form>

      {result !== null && (
        <div style={{
          marginTop: '30px',
          backgroundColor: '#48c9b0',
          padding: '20px',
          borderRadius: '15px',
          textAlign: 'center',
          fontSize: '24px',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
        }}>
          <h2>¡Muy bien {name}!</h2>
          <p>Tu puntaje es: <strong>{result} de 30</strong></p>
        </div>
      )}
    </div>
  );
}
