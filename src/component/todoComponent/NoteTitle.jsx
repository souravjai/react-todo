import React from 'react'
import Tooltip from '@mui/material/Tooltip';

export default function NoteTitle({todo}) {
    return (
        <div 
        style={{ textDecoration: todo.completed && "line-through", color: todo.completed && "grey", cursor: "default" }} >
            <Tooltip title={<div>Created On: {todo.timeStamp} </div>} followCursor >
                <h2>{todo.title}</h2>
            </Tooltip>
            <p>{todo.desc}</p>
        </div>
    )
}
