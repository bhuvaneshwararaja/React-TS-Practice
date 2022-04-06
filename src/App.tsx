import React, { useState } from 'react';
import './App.css';
import InputTaskField from './components/InputFiled'
import TaskList from './components/Tasklist';
import {TodoList} from "./model"
function App() {


  const [todo,setTodo] = useState<string>("")

  const [todos,setTodos] = useState<TodoList[]>([])

  function  handleAdd(e:React.FormEvent){
      e.preventDefault()
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
  }

  
  return (
   <div>
     <h1>Taskify</h1>
     <InputTaskField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <div className="container">
        <TaskList todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
     </div>
   </div>
  );
}

export default App;
