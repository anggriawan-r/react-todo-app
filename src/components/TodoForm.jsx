import { useContext, useRef } from 'react';
import { TodoContext } from '../App';

function dateConversion(data) {
  const date = new Date(data);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { hour, minute, day, month, year };
}

function parseTime(data) {
  const month = data.date.month < 10 ? `0${data.date.month}` : data.date.month;
  const date = data.date.date < 10 ? `0${data.date.date}` : data.date.date;

  return `${data.date.year}-${month}-${date}T${data.time}`;
}

export default function TodoForm({ addTodo, isEdit, todo }) {
  const formRef = useRef(null);
  const { handleCloseModal, editTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title');
    const { hour, minute, day, month, year } = dateConversion(
      formData.get('date')
    );

    const dateTime = {
      date: {
        date: day,
        month,
        year,
      },
      time: `${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }`,
    };

    if (!isEdit) {
      addTodo(title, dateTime);
      formRef.current.reset();
    } else {
      const newTodo = {
        id: todo.id,
        title,
        completed: false,
        ...dateTime,
      };

      editTodo(todo.id, newTodo);
      handleCloseModal();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(event) => handleSubmit(event)}
      className="w-full flex flex-col gap-2 mb-12"
    >
      <input
        name="title"
        type="text"
        defaultValue={isEdit ? todo.title : undefined}
        placeholder="Add your todo"
        className="w-full bg-zinc-800 rounded-md p-4 text-white"
      />
      <div className="flex gap-2">
        <input
          name="date"
          type="datetime-local"
          defaultValue={isEdit ? parseTime(todo) : undefined}
          className="bg-zinc-800 px-4 rounded-md text-white"
          required
        />
        <button className="w-[72px] bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors text-white">
          {isEdit ? 'Edit' : 'Add'}
        </button>
        {isEdit && (
          <button className="w-[72px] flex justify-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors text-white">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
