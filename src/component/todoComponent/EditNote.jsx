import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NoteTextField from '../NoteTextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { MdEdit } from 'react-icons/md';

export default function EditNote(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate=(title,desc)=>{
        handleClose();
        props.onUpdate(title,desc,props.todo);
    }

    return (
        <>
        <Tooltip title="Edit">
            <IconButton onClick={handleClickOpen}>
                <MdEdit className="noteEdit" style={{ cursor: "pointer", color: "black" }} size="35px" />
            </IconButton>
        </Tooltip>

        <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{width:"500px"}}>Edit Note</DialogTitle>
        <DialogContent>
            <NoteTextField form_id="update-todo-form" title={props.todo.title} desc={props.todo.desc} handleSubmit={handleUpdate}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button  form="update-todo-form" type="submit" >Update</Button>
        </DialogActions>
        </Dialog>
        </>

    )
}
