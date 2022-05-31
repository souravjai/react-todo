import React from 'react'
import { FiX } from 'react-icons/fi'
import Checkbox from '@mui/material/Checkbox';


export default function Todo({todo,onDelete,onCompleted}) {
    return (
        <div className="todo" style={{padding:"10px"}}>
            <Checkbox style={{marginTop:"7px"}}
            onChange={onCompleted}/>
            <div>
                <h2>{todo.title}</h2>
                <p>{todo.desc}</p>
            </div>
            <FiX className="noteDelete" style={{cursor:"pointer"}} onClick={onDelete} size="35px"/>
        </div>
    )
}
