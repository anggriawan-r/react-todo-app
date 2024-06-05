import TodoItem from './TodoItem';

function Todos({ todos, toggleCompleted, deleteTodo }) {
  return (
    <div className="flex flex-col gap-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
