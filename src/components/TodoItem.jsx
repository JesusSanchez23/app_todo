import useTodo from "../hooks/useTodo";

const TodoItem = ({ task }) => {
  const { handleDeleteTodo, handleCompleteTodo,handleEditTodo } = useTodo();
  const { todo, id, completado } = task;
  return (
    <li className="border p-2 rounded font-bold flex justify-between items-center flex-wrap">
      <div>
        <span className={`${completado ? "line-through text-green-500" : ""} flex-grow`}>
          {todo}
        </span>
      </div>
      <div className="flex gap-10 ">
        {/* boton completar */}
        <button className="flex flex-col items-center" onClick={() => handleCompleteTodo(id)}>
          {completado ? (
            <>
            <span className="text-icon">Pendiente</span>   
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        
            </>
          
          ): (
            <>  
            <span className="text-icon">Completar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
              
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
            </>
          )}
        </button>
        {/* boton editar */}
        <button className="flex flex-col items-center" onClick={()=>handleEditTodo(task)}>
        <span className="text-icon">Editar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>

        {/* eliminar tarea */}
        <button className="flex flex-col items-center" onClick={() => handleDeleteTodo(id)}>
        <span className="text-icon">Eliminar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
