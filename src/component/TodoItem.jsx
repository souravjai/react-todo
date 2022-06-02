import React from 'react'
import Todo from "./Todo";

export default function TodoItem(props) {
    return (
        
        <div className="todoItem" style={{margin:"10px"}}>
            {props.todos.length===0?
            <div style={{background: "rebeccapurple",width: "245px",borderRadius: "11px",padding: "7px 20px",color: "white"}}>No items to display</div>:
            <div style={{background: "green",width: "150px",borderRadius: "11px",padding: "7px 20px",color: "white"}}>Todo Items</div>}
            {props.todos.map( 
                todo =>{ return (
                    <Todo key={todo.timeStamp} 
                    className="todo"
                    todo={todo} 
                    onDelete={()=>props.onDelete(todo)}
                    onCompleted={()=>props.onCompleted(todo)}/> 
                    );
                    })
            }

        </div>
    )
}
