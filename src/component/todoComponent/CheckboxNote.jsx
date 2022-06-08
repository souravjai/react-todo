import React from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxNote({completed,onCompleted}) {
    return (
        <Checkbox style={{ color: "blue", marginTop: "2px" }}
                checked={completed}
                onChange={onCompleted} />
    )
}
