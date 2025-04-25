import React, { useState } from 'react';
import OnePiece from './OnePiece';
import Naruto from './Naruto';
import Bleach from './Bleach';

function App() {
  const [mode, setMode] = useState('');

  const goHome = () => setMode('');

  if (mode === 'onepiece') return <OnePiece goHome={goHome} />;
  if (mode === 'naruto') return <Naruto goHome={goHome} />;
  if (mode === 'bleach') return <Bleach goHome={goHome} />;

  return (
    <div className="min-h-screen bg-big3 bg-cover bg-center flex flex-col items-center justify-center gap-6 p-6 animate-fade-in">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-xl text-center max-w-xl w-full animate-slide-up border border-white/40">
        <h1 className="text-4xl font-bold text-yellow-100 mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] tracking-wide uppercase">
          Выбери мир истории
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow transition-transform hover:scale-105 flex items-center gap-2"
            onClick={() => setMode('onepiece')}
          >
            <img src="/onepiece-logo.png" alt="One Piece" className="w-6 h-6" />
            One Piece
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition-transform hover:scale-105 flex items-center gap-2"
            onClick={() => setMode('naruto')}
          >
            <img src="/naruto-logo.png" alt="Naruto" className="w-6 h-6" />
            Naruto
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded shadow transition-transform hover:scale-105 flex items-center gap-2"
            onClick={() => setMode('bleach')}
          >
            <img src="/bleach-logo.png" alt="Bleach" className="w-6 h-6" />
            Bleach
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
