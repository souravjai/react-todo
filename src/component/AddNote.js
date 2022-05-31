import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {FiPlus} from 'react-icons/fi';

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
        <form onSubmit={submit} style={{padding:"10px",margin:"10px 110px"}}>
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

                <FiPlus className="noteAdd" style={{cursor: "pointer" , padding:"12px 10px",color:"rebeccapurple"}} type="submit" size={40} onClick={submit}/>

            <button type="submit" style={{display:"none"}}/>
        </form>
    )
}
