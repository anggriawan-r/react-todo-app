import { X } from 'lucide-react';
import MaxWIdthWrapper from './MaxWIdthWrapper';
import TodoForm from './TodoForm';

export default function EditFormModal({ isEdit, todo, close }) {
  return (
    <div className="relative z-10" role="dialog">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"></div>

      <MaxWIdthWrapper className="fixed inset-0 z-10 overflow-y-auto flex flex-col justify-center items-center">
        <button
          onClick={close}
          className="self-end my-4 text-zinc-900 bg-white/60 rounded-full p-1"
        >
          <X size={24} />
        </button>
        <TodoForm isEdit={isEdit} todo={todo} />
      </MaxWIdthWrapper>
    </div>
  );
}
