import React from 'react'


export default function Todo({todo,onDelete}) {
    return (
        <div className="todo" style={{padding:"10px 20px"}}>
            <div>
                <h2>{todo.title}</h2>
                <p>{todo.desc}</p>
            </div>
            <button onClick={onDelete}>delete</button>
        </div>
    )
}
