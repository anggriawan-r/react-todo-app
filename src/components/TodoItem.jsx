import Checkbox from './Checkbox';
import { SquarePen, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../App';

function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo, handleOpenModal } =
    useContext(TodoContext);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Checkbox toggleCompleted={toggleCompleted} todoId={todo.id} />
        <div className="flex flex-col gap-0.5 justify-center">
          <p className={todo.completed ? 'line-through opacity-50' : ''}>
            {todo.title}
          </p>
          <p className="text-white/50 text-xs">{`${todo.time} ${todo.date.date}-${todo.date.month}-${todo.date.year}`}</p>
        </div>
      </div>

      <div className="flex gap-1">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="size-10 flex items-center justify-center rounded-md hover:bg-white/15 transition-all"
        >
          <Trash2 size={20} className="text-red-500" />
        </button>
        <button
          onClick={() => handleOpenModal(todo.id)}
          className="size-10 flex items-center justify-center rounded-md hover:bg-white/15 transition-all"
        >
          <SquarePen size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
