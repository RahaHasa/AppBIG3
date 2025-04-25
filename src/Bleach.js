import React, { useState } from 'react';

const data = {
  mainCharacters: ['Ичиго', 'Рукия', 'Ренджи', 'Урахара', 'Бьякуя'],
  rivals: ['Гриммджо', 'Ишимару Гин', 'Айзен', 'Улькиорра', 'Рэнджи'],
  girls: ['Рукия', 'Орихиме', 'Юруичи', 'Мацумото', 'Нанао'],
  teachers: ['Урахара', 'Йоруичи', 'Куроцучи', 'Ямамото', 'Шунсуй'],
  squads: ['отряд 1', 'отряд 6', 'отряд 11', 'отряд 13', 'отряд 4'],
  zanpakuto: ['Зангецу', 'Соде но Шираиуки', 'Сенбонзакура', 'Хиоринмару', 'Хоуденмару'],
  times: ['во времена обучения в Академии', 'во время нападения Айзена', 'во время арки Уэко Мундо', 'во время финальной войны', 'после победы над Айзеном'],
  powers: ['Банкей', 'Холлоу-форма', 'Кидо', 'Синпо', 'Контроль духовной энергии'],
};

function Bleach({ goHome }) {
  const [formData, setFormData] = useState({
    mainCharacter: '',
    rival: '',
    girl: '',
    teacher: '',
    squad: '',
    zanpakuto: '',
    time: '',
    power: '',
  });
  const [finalStory, setFinalStory] = useState('');

  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const generateStory = () => {
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const story = `История синигами:

${random(data.mainCharacters)} был синигами из ${random(data.squads)}, проходившим обучение у ${random(data.teachers)} ${random(data.times)}. Его вечным соперником был ${random(data.rivals)}, а поддерживала его ${random(data.girls)}.

С его верным занпакто ${random(data.zanpakuto)} и способностью ${random(data.powers)}, он прошёл множество испытаний и изменил ход истории Общества Душ.`;

    setFinalStory(story);
  };

  const resetStory = () => {
    generateStory();
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
    <div className="min-h-screen bg-bleach bg-cover bg-center flex flex-col items-center gap-6 p-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl w-full max-w-3xl relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-indigo-600 text-center w-full">Bleach: Собери свою историю синигами</h1>
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
            <Select label="Главный герой" options={data.mainCharacters} value={formData.mainCharacter} onChange={handleChange('mainCharacter')} />
            <Select label="Соперник" options={data.rivals} value={formData.rival} onChange={handleChange('rival')} />
            <Select label="Девушка в команде" options={data.girls} value={formData.girl} onChange={handleChange('girl')} />
            <Select label="Учитель" options={data.teachers} value={formData.teacher} onChange={handleChange('teacher')} />
            <Select label="Отряд (сквад)" options={data.squads} value={formData.squad} onChange={handleChange('squad')} />
            <Select label="Занпакто" options={data.zanpakuto} value={formData.zanpakuto} onChange={handleChange('zanpakuto')} />
            <Select label="Период времени" options={data.times} value={formData.time} onChange={handleChange('time')} />
            <Select label="Сила/Техника" options={data.powers} value={formData.power} onChange={handleChange('power')} />

            <button
              onClick={generateStory}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded shadow mt-4 w-full"
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
              onClick={resetStory}
              className="mt-4 bg-indigo-400 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded shadow w-full"
            >
              Сгенерировать ещё одну историю
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Bleach;
