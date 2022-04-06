import {TodoList} from "../../model"
import {useState,useRef} from 'react'
interface Props {
    todos:TodoList[];
    setTodos:React.Dispatch<React.SetStateAction<TodoList[]>>
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
}


const TaskList = ({todos,setTodos,todo,setTodo}:Props) =>{
    
    type idType = number | string
    const divRef = useRef<HTMLInputElement>(null)
    const [edit,setEdit] = useState<boolean>(false)
    
    function handleUpdateTaskName (id:idType) {

    }

    function  handleDelete(id:idType){
            setTodos(todos.filter((todo) => {
                return todo.id !== id
            }))
         }

    function handleUpdate(id:idType){
        setTodos(todos.map((todo) => {
           return todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        })) 
    }

    return <>
        {todos.map((todo,index) => {
           return <div className="task__component" >
               <input type="text" value={todo.todo} style={{display: 'none'}} ref={divRef}></input>
               <li key={todo.id} style={{textDecoration:todo.isDone ? 'line-through':""}}>{todo.todo}</li>
               <button type="button" className="complete__task" onClick={() => handleUpdate(todo.id)}>Complete</button>
               <button type="button" className="delete__task"  onClick={() => handleDelete(todo.id)}>Delete</button>
               <button type="button" className="Edit__task"  onClick={() =>{ 
                   console.log(divRef)
                   console.log(divRef.current)
                   handleUpdateTaskName(todo.id)}} data-index={index}>Update</button>
           </div>
        })}
    </>
}

export default TaskList