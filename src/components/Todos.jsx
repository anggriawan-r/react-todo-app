import TodoItem from './TodoItem';

function Todos({ todos, toggleCompleted }) {
  return (
    <div className="flex flex-col gap-6">
      {todos.map((todo) => (
        // <p key={todo.id}>{todo.title}</p>
        <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
}

export default Todos;
