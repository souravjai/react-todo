
import {FiPlus} from 'react-icons/fi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NoteTextField from './NoteTextField';

export default function AddNote({addTodo}) {
    
    return (
        <>
        <NoteTextField form_id="note-form" title="" desc="" handleSubmit={addTodo}/>
        <Tooltip title="Add Note" style={{alignSelf:"flex-end"}}>
            <IconButton form="note-form" type="submit">
                <FiPlus className="noteAdd" style={{cursor: "pointer" ,color:"rebeccapurple"}} type="submit" size={40}/>
            </IconButton>
        </Tooltip>
        </>
    )
}
