import { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../helpers/todoReducer";
import useForm from "../hooks/useForm";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const inicialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, inicialState, init);
  const { todo, onInputChange, onResetForm, setFormState, formState } = useForm(
    {
      todo: "",
    }
  );

  const [edit, setEdit] = useState(false);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  },[todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };

    const confirm = window.confirm("Estas seguro que deseas eliminar la tarea");

    if (confirm) {
      dispatch(action);
    }
  };

  const handleEditTodo = (todo) => {
    // console.log(todo);
    setEdit(true);
    setFormState(todo);
  };

  const editTodo = (todo) => {
    console.log(todo);
    const action = {
      type: "[TODO] edit todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: "[TODO] complete todo",
      payload: id,
    };

    dispatch(action);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleEditTodo,
        todo,
        onInputChange,
        onResetForm,
        edit,
        editTodo,
        formState,
        setEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };

export default TodoContext;
