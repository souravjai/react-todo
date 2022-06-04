import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdDelete} from 'react-icons/md'

export default function DeleteNote({onDelete}) {
    return (
        <Tooltip title="Delete">
            <IconButton onMouseUp={onDelete}>
                <MdDelete className="noteDelete" style={{ cursor: "pointer", color: "black" }} size="35px" />
            </IconButton>
        </Tooltip>
    )
}
