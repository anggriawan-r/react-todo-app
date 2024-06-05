import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">My Todo List</h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
