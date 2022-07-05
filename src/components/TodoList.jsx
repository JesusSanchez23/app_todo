import useTodo from "../hooks/useTodo"
import TodoItem from "./TodoItem";

const TodoList = () => {

    const {todos} = useTodo(); 
  return (
    <>
    <ul className="bg-sky-50">
    {todos.map(todo =>(
        <TodoItem key={todo.id} task={todo}/>
    ))}
    </ul>
    </>
  )
}

export default TodoList