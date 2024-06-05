import { Trash2 } from 'lucide-react';
import Checkbox from './Checkbox';

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Checkbox toggleCompleted={toggleCompleted} todoId={todo.id} />
        <p className={todo.completed ? 'line-through opacity-50' : ''}>
          {todo.title}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="size-10 flex items-center justify-center rounded-md hover:bg-white/15 transition-all"
        >
          <Trash2 size={20} className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
