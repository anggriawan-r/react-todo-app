import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="w-full flex gap-2 mb-12"
    >
      <input
        type="text"
        placeholder="Add your todo"
        value={title}
        onChange={(event) => handleChangeTitle(event)}
        className="w-full bg-zinc-800 rounded-md p-4"
      />
      <button className="w-[72px] bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors">
        Add
      </button>
    </form>
  );
}
