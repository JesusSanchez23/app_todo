import useForm from "../hooks/useForm"
import Error from "./Error";
import { useState } from "react";
import useTodo from "../hooks/useTodo";

const Formulario = () => {

    const {handleNewTodo,todo, onInputChange, onResetForm,edit, formState,editTodo,setEdit} = useTodo();


    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(todo <= 1) {
            setError('Escriba una tarea correcta');
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }

        if(edit){
            editTodo(formState)
            onResetForm();
            setEdit(false);
            return;
        }

        const newTodoItem = {
            id: Date.now(),
            todo,
            completado: false
        }

        handleNewTodo && handleNewTodo(newTodoItem)
        setError('');
        onResetForm();
    }

  return (
   <form onSubmit={handleSubmit}>
    {error && <Error msj={error} />}
    <div>
        <label className="text-gray-600 uppercase font-bold text-2xl block" htmlFor="todo">Agregar Tarea</label>
        <input className="w-full p-2 border rounded mt-2" type="text" name="todo" id="todo" placeholder="Agregar Tarea" value={todo} onChange={onInputChange}/>
    </div>
    <input type="submit" value={`${edit ? 'Editar Tarea' : 'Crear Tarea'}`} className="btn"/>
   </form>
  )
}

export default Formulario