import React, { useState } from 'react';

const data = {
  characters: ['Луффи', 'Зоро', 'Нами', 'Санджи', 'Усопп', 'Чоппер', 'Робин', 'Фрэнки', 'Брук', 'Джимбей'],
  roles: ['главный герой', 'повар', 'штурман', 'врач', 'археолог', 'механик', 'музыкант', 'снайпер', 'медик', 'капитан'],
  places: ['на Ванно', 'в деревне Сироп', 'в Тоттлэнде', 'на небесных островах', 'в Эннис Лобби', 'в Импел Даун', 'в Маринфорде', 'на Острове Рыболюдей'],
  times: ['в начале путешествия', 'после таймскипа', 'во время войны на Маринфорде', 'в эпоху Йонко', 'после арки Вано'],
  bounties: ['30 миллионов', '100 миллионов', '400 миллионов', '1 миллиард', '3 миллиарда'],
  powers: ['владеет Хаки', 'ел дьявольский плод', 'превосходный мечник', 'мастер рукопашного боя', 'гениальный стратег', 'умеет лечить любые болезни', 'может разговаривать с животными', 'призрачные способности', 'владеет огнём', 'плавает под водой']
};

function OnePiece({ goHome }) {
  const [formData, setFormData] = useState({
    mainCharacter: '',
    role: '',
    place: '',
    time: '',
    bounty: '',
    power: '',
  });
  const [finalStory, setFinalStory] = useState('');

  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const generateStory = () => {
    const mainCharacter = formData.mainCharacter || getRandom(data.characters);
    const role = formData.role || getRandom(data.roles);
    const place = formData.place || getRandom(data.places);
    const time = formData.time || getRandom(data.times);
    const bounty = formData.bounty || getRandom(data.bounties);
    const power = formData.power || getRandom(data.powers);

    const story = `История пирата:\n\n${mainCharacter} — ${role}, впервые появился ${place} ${time}. Его награда составила ${bounty}, и он обладал способностью: ${power}.\n\nС такими союзниками и силами, их приключение в мире Grand Line только начиналось!`;

    setFinalStory(story);
  };

  const Select = ({ label, options, value, onChange }) => (
    <div className="w-full max-w-md">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <select
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={onChange}
      >
        <option value="">-- Выбери --</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-onepiece bg-cover bg-center flex flex-col items-center gap-6 p-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl w-full max-w-3xl relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-red-600 text-center w-full">One Piece: Создай своего героя</h1>
          {goHome && (
            <button
              onClick={goHome}
              className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-2xl"
              title="Вернуться в главное меню"
            >
              🏠
            </button>
          )}
        </div>

        {!finalStory && (
          <>
            <Select label="Главный персонаж" options={data.characters} value={formData.mainCharacter} onChange={handleChange('mainCharacter')} />
            <Select label="Роль" options={data.roles} value={formData.role} onChange={handleChange('role')} />
            <Select label="Место появления" options={data.places} value={formData.place} onChange={handleChange('place')} />
            <Select label="Период времени" options={data.times} value={formData.time} onChange={handleChange('time')} />
            <Select label="Цена за голову" options={data.bounties} value={formData.bounty} onChange={handleChange('bounty')} />
            <Select label="Способность" options={data.powers} value={formData.power} onChange={handleChange('power')} />

            <button
              onClick={generateStory}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded shadow mt-4 w-full"
            >
              Сгенерировать историю
            </button>
          </>
        )}

        {finalStory && (
          <>
            <div className="mt-6 bg-white p-6 rounded shadow text-lg text-gray-800 whitespace-pre-line">
              {finalStory}
            </div>
            <button
              onClick={() => {
                const randomForm = {
                  mainCharacter: getRandom(data.characters),
                  role: getRandom(data.roles),
                  place: getRandom(data.places),
                  time: getRandom(data.times),
                  bounty: getRandom(data.bounties),
                  power: getRandom(data.powers),
                };
                const story = `История пирата:\n\n${randomForm.mainCharacter} — ${randomForm.role}, впервые появился ${randomForm.place} ${randomForm.time}. Его награда составила ${randomForm.bounty}, и он обладал способностью: ${randomForm.power}.\n\nС такими союзниками и силами, их приключение в мире Grand Line только начиналось!`;

                setFormData(randomForm);
                setFinalStory(story);
              }}
              className="mt-4 bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded shadow w-full"
            >
              Сгенерировать ещё одну историю
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default OnePiece;
