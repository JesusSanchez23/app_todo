import { useReducer } from "react";
import Formulario from "./components/Formulario";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

const TodoApp = () => {
  
  return (
    <>
      <main className="container mx-auto mt-5 p-5  md:flex md:justify-center flex-col items-center md:w-1/2 lg:w-2/3">
        <h1 className="text-center text-4xl font-bold mb-5 ">
          <span className="text-sky-600">Todo</span> App
        </h1>

        <div className=" bg-white p-10 rounded shadow md:w-full lg:w-2/3">
          <div>
            <Formulario />
          </div>
          <div>
            <TodoList/>
          </div>
        </div>
      </main>
    </>
  );
};

export default TodoApp;
