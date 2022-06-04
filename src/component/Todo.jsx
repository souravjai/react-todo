import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NoteTextField from './NoteTextField';

export default function Todo({ todo, onDelete, onCompleted,onUpdate }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate=(title,desc)=>{
        handleClose();
        onUpdate(title,desc,todo);
    }

    return (
        <div className="todo"
            style={todo.completed ?
                { padding: "20px", background: "lightgrey", borderRadius: "20px", opacity: 0.6 } :
                { padding: "20px", background: todo.color, borderRadius: "20px" }}>

            <Checkbox style={{ color: "blue", marginTop: "2px" }}
                checked={todo.completed}
                onChange={onCompleted} />

            <div style={{ textDecoration: todo.completed && "line-through", color: todo.completed && "grey", cursor: "default" }} >
                <Tooltip title={<div>Created On: {todo.timeStamp} </div>} followCursor >
                    <h2>{todo.title}</h2>
                </Tooltip>
                <p>{todo.desc}</p>
            </div>

            <Tooltip title="Edit">
                <IconButton onClick={handleClickOpen}>
                    <MdEdit className="noteEdit" style={{ cursor: "pointer", color: "black" }} size="35px" />
                </IconButton>
            </Tooltip>

            <Dialog open={open} onClose={handleClose} >
                <DialogTitle style={{width:"500px"}}>Edit Note</DialogTitle>
                <DialogContent>
                    <NoteTextField form_id="update-todo-form" title={todo.title} desc={todo.desc} handleSubmit={handleUpdate}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button  form="update-todo-form" type="submit" >Update</Button>
                </DialogActions>
            </Dialog>

            <Tooltip title="Delete">
                <IconButton onMouseUp={onDelete}>
                    <MdDelete className="noteDelete" style={{ cursor: "pointer", color: "black" }} size="35px" />
                </IconButton>
            </Tooltip>
        </div>

    )
}

