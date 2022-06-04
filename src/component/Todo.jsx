import React from 'react'

import EditNote from './todoComponent/EditNote';
import DeleteNote from './todoComponent/DeleteNote';
import NoteTitle from './todoComponent/NoteTitle';
import CheckboxNote from './todoComponent/CheckboxNote';

export default function Todo({ todo, onDelete, onCompleted,onUpdate }) {


    return (
        <div className="todo"
            style={todo.completed ?
                { padding: "20px", background: "lightgrey", borderRadius: "20px", opacity: 0.6 } :
                { padding: "20px", background: todo.color, borderRadius: "20px" }}>

            
            <CheckboxNote todo={todo} onCompleted={onCompleted}/>
            <NoteTitle todo={todo}/>
            <EditNote onUpdate={onUpdate} todo={todo}/>
            <DeleteNote onDelete={onDelete}/>
            
            
        </div>

    )
}

