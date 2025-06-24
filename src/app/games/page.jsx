"use client";
import React from "react";

const games = [
  { name: "Math Playground", url: "https://www.mathplayground.com/" },
  { name: "RodoCodo", url: "https://www.rodocodo.com/free-coding-game-for-kids/" },
  { name: "Lightbot", url: "https://lightbot.com/" },
  { name: "CodeCombat", url: "https://codecombat.com/play/junior" },
  { name: "VEXCode VR", url: "https://vr.vex.com/" },
  { name: "KODABLE", url: "https://game.kodable.com/basics/?hc=1&user=zyr7n2a&hoc=main&activity=self-guided" },
  { name: "Tangram", url: "https://polypad.amplify.com/es/tangram" },
];

export default function GamesListPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4 neon-text">Juegos de Lógica y Programación</h1>
     <br />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {games.map((game) => (
          <a
            key={game.url}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block p-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 neon-border rounded-2xl pointer-events-none"></div>
            <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
            <p className="text-sm text-blue-400 break-all">{game.url}</p>
          </a>
        ))}
      </div>

      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
        .neon-border::before {
          content: "";
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(45deg,
            #f0f, #0ff, #ff0, #f0f);
          background-size: 600% 600%;
          filter: blur(4px);
          animation: glow 3s ease infinite;
          z-index: -1;
          border-radius: inherit;
        }
        @keyframes glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
