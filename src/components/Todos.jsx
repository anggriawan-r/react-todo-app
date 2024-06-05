import TodoItem from './TodoItem';

function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        // <p key={todo.id}>{todo.title}</p>
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
