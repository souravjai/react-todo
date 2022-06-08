import Header from './component/Header'
import Footer from './component/Footer'
import AddNote from './component/AddNote'
import TodoItem from './component/TodoItem'
import FilterNotes from './component/FilterNotes'
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  function getDate(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (date+' '+time);
  }
  const [color_index,set_color_index]=useState(0);
  const colors=["lightblue","lightcoral","lightgreen","lightpink","lightsteelblue","lightskyblue","lightsalmon"];
  
  function getRandomColor(){
    let color=colors[color_index];
    set_color_index((color_index+1)%colors.length);
    return color;
  }

  const onDelete=(todo)=>{
    setTodos(todos.filter( e=>{
      return e!==todo;
    }))
  }

  const updateTodo=(new_title,new_desc,todo)=>{
    setTodos(todos.map(e=>{
      if(todo===e){
        e.title=new_title;
        e.desc=new_desc;
      }
      return e;
    }))
  }
  const addTodo=(title,desc)=>{
    let newTodo={
      timeStamp:getDate(),
      title,
      desc,
      completed:false,
      color:getRandomColor()
    }
    setTodos([newTodo,...todos]);
  }
  
  const onCompleted=(todo)=>{
    setTodos(todos.map(e=>{
      if(e===todo){
        e.completed=!e.completed;
      }
      return e;
    }))
  }

  const onFilter=(filter)=>{
    setFilter(filter);
  }
  let initialize=[];

  if(localStorage['todos']!==undefined && localStorage['todos'].length>2){
    initialize=JSON.parse(localStorage['todos']);
  }
  else{
    initialize=[
      {
        timeStamp:getDate(),
        title:"Hello World!",
        desc:"how you doin'?",
        completed:false,
        color:"lightblue"
      },
      {
        timeStamp:getDate(),
        title:"This is completed!",
        desc:"To undo this click on the left checkbox",
        completed:true,
        color:"lightgrey"
      },
      {
        timeStamp:getDate(),
        title:"Start Hovering",
        desc:"Hover over notes to see its creation date",
        completed:false,
        color:"lightpink"
      },
      {
        timeStamp:getDate(),
        title:"You are good to go!",
        desc:"Delete these notes to get started!",
        completed:false,
        color:"lightsalmon"
      }
    ]
  }

  const [todos, setTodos] = useState(initialize);
  const[currentFilter,setFilter]=useState("1");
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <>
    <Header/>
    
    <div style={{display:"flex",alignItems:"center"}}>
      <AddNote addTodo={addTodo}/>
      <FilterNotes  onFilter={onFilter}/>
    </div>
    <TodoItem todos={todos.filter(e=>{
      return (currentFilter==="1" ) || (currentFilter==="2" && e.completed) || (currentFilter==="3" && !e.completed);
    })} 
    onDelete={onDelete} onCompleted={onCompleted} onUpdate={updateTodo}/>

    <Footer/>
    </>
  );
}

export default App;
