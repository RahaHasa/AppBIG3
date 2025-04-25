import React, { useState } from 'react';

const data = {
  characters: ['Наруто', 'Саске', 'Сакура', 'Какаши', 'Хината', 'Гаара', 'Шикамару', 'Нэджи', 'Итачи', 'Обито'],
  roles: ['гени́н', 'чу́нин', 'джо́нин', 'анбу', 'сенсей', 'кагэ', 'преступник S-ранга'],
  places: ['в Конохе', 'в Сунагакуре', 'в Киригакуре', 'в Кумогакуре', 'в Ивагакуре', 'в Амагакуре', 'в деревне Звука', 'в Долине Конца'],
  times: ['во время экзамена на чунина', 'после нападения Пэйна', 'в Великую войну шиноби', 'во время юности', 'после возвращения Саске в Коноху'],
  ranks: ['Генин', 'Чунин', 'Джонин', 'Анбу', 'Кагэ'],
  powers: ['Шаринган', 'Бьякуган', 'Риннеган', 'мудрость отшельника', 'владение стихией огня', 'призыв жаб', 'владение Расенганом', 'теневые клоны', 'контроль песка', 'способности Биджу']
};

function Naruto({ goHome }) {
  const [formData, setFormData] = useState({
    mainCharacter: '',
    role: '',
    place: '',
    time: '',
    rank: '',
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
    const rank = formData.rank || getRandom(data.ranks);
    const power = formData.power || getRandom(data.powers);

    const story = `История ниндзя:\n\n${mainCharacter} — ${role} из ${place}, ${time}. Имеет ранг: ${rank}, и способность: ${power}.\n\nОн навсегда оставил след в мире шиноби!`;

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
    <div className="min-h-screen bg-naruto bg-cover bg-center flex flex-col items-center gap-6 p-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl w-full max-w-3xl relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-orange-600 text-center w-full">Naruto: Создай своего шиноби</h1>
          {goHome && (
            <button
              onClick={goHome}
              className="absolute top-4 right-6 text-gray-500 hover:text-orange-500 text-2xl"
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
            <Select label="Место" options={data.places} value={formData.place} onChange={handleChange('place')} />
            <Select label="Время" options={data.times} value={formData.time} onChange={handleChange('time')} />
            <Select label="Ранг" options={data.ranks} value={formData.rank} onChange={handleChange('rank')} />
            <Select label="Способность" options={data.powers} value={formData.power} onChange={handleChange('power')} />

            <button
              onClick={generateStory}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow mt-4 w-full"
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
                  rank: getRandom(data.ranks),
                  power: getRandom(data.powers),
                };
                const story = `История ниндзя:\n\n${randomForm.mainCharacter} — ${randomForm.role} из ${randomForm.place}, ${randomForm.time}. Имеет ранг: ${randomForm.rank}, и способность: ${randomForm.power}.\n\nОн навсегда оставил след в мире шиноби!`;

                setFormData(randomForm);
                setFinalStory(story);
              }}
              className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded shadow w-full"
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

export default Naruto;
