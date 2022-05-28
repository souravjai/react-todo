import Header from './component/Header'
import AddNote from './component/AddNote'
import TodoItem from './component/TodoItem'
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const onDelete=(todo)=>{
    setTodos(todos.filter( e=>{
      return e!==todo;
    }))
  }

  const addTodo=(title,desc)=>{
    let sno=todos.at(-1)?todos.at(-1).sno+1:1;

    let newTodo={
      sno,
      title,
      desc,
      completed:false
    }
    setTodos([...todos,newTodo]);
  }
  
  let initialize=[];

  if(localStorage['todos']!==undefined){
    initialize=JSON.parse(localStorage['todos']);
  }
  const [todos, setTodos] = useState(initialize);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <>
    <Header/>
    <AddNote addTodo={addTodo}/>
    <TodoItem todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default App;
