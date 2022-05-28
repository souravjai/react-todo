import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function AddNote({addTodo}) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [titleError,setTitleError]=useState(false);
    const [descError,setdescError]=useState(false);

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            if(!title) setTitleError(true);
            if(!desc)  setdescError(true);
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
        <form onSubmit={submit} style={{padding:"10px",margin:"10px"}}>
            <TextField id="standard-basic" 
                label={titleError?"Please add a title":"Add a title"}
                variant="standard" 
                style={{width:"400px", margin:"5px 0px"}}  
                value={title}
                onChange={(e)=>{ setTitleError(false); setTitle(e.target.value);}} error={titleError} 
                autoComplete="off" />

            <TextField id="standard-basic" 
                label={descError?"Please add a description":"Add a description"}
                variant="standard" 
                style={{width:"400px", margin:"5px 0px"}} 
                value={desc}
                onChange={(e)=>{setdescError(false); setDesc(e.target.value)}} error={descError}
                autoComplete="off"/>

            <button type="submit">Add Note</button>               
        </form>
    )
}
