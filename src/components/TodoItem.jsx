import { Check } from 'lucide-react';

function TodoItem({ todo, toggleCompleted }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="peer size-8 cursor-pointer appearance-none rounded-full border border-blue-500 checked:border-blue-500 checked:bg-blue-500 checked:text-white"
          onChange={() => toggleCompleted(todo.id)}
        />
        <span className="size-12 bg-blue-500 opacity-0 rounded-full pointer-events-none absolute left-1/2 -translate-x-1/2 peer-hover:opacity-25 transition-opacity"></span>
        <Check
          className="text-white absolute left-1/2 -translate-x-1/2 pointer-events-none invisible peer-checked:visible"
          strokeWidth={3}
          size={24}
        />
      </div>
      <p className={todo.completed ? 'line-through opacity-50' : ''}>
        {todo.title}
      </p>
    </div>
  );
}

export default TodoItem;
