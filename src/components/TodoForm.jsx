import { useRef, useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState({});

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title, dateTime);
    formRef.current.reset();
    setTitle('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDate = (event) => {
    const date = new Date(event.target.value);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setDateTime({
      date: {
        date: day,
        month,
        year,
      },
      time: `${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }`,
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={(event) => handleSubmit(event)}
      className="w-full flex flex-col gap-2 mb-12"
    >
      <input
        type="text"
        placeholder="Add your todo"
        value={title}
        onChange={(event) => handleChangeTitle(event)}
        className="w-full bg-zinc-800 rounded-md p-4"
      />
      <div className="flex gap-2">
        <input
          type="datetime-local"
          onChange={(event) => handleChangeDate(event)}
          className="bg-zinc-800 px-4 rounded-md"
          required
        />
        <button className="w-[72px] bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors">
          Add
        </button>
      </div>
    </form>
  );
}
