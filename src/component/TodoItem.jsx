import React from 'react'
import Todo from "./Todo";

export default function TodoItem(props) {
    return (
        
        <div className="todoItem" style={{margin:"10px"}}>
            {props.todos.length===0?"No items to display":"Todo Items:"}
            {props.todos.map( 
                todo =>{ return (
                    <Todo key={todo.sno} className="todo"
                    todo={todo} 
                    onDelete={()=>{props.onDelete(todo)}}/> );
                    })
            }
        </div>
    )
}
