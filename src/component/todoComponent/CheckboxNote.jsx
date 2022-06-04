import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxNote({todo,onCompleted}) {
    return (
        <Checkbox style={{ color: "blue", marginTop: "2px" }}
                checked={todo.completed}
                onChange={onCompleted} />
    )
}
