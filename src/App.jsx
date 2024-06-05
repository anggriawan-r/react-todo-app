import { useState } from 'react';
import Todos from './components/Todos';
import MaxWIdthWrapper from './components/MaxWIdthWrapper';

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

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updateTodos);
  };

  return (
    <main className="bg-zinc-900 relative flex flex-col min-h-screen text-white justify-center">
      <MaxWIdthWrapper>
        <h1 className="text-3xl font-bold py-8">Welcome Back!</h1>
        <Todos
          todos={todos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      </MaxWIdthWrapper>
    </main>
  );
}
