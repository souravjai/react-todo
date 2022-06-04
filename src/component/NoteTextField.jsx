import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function NoteTextField(props) {

    const [title,setTitle]=useState(props.title);
    const [desc,setDesc]=useState(props.desc);
    const [titleError,setTitleError]=useState(false);
    const [descError,setdescError]=useState(false);

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            if(!title) setTitleError(true);
            if(!desc)  setdescError(true);
        }
        else{
        props.handleSubmit(title,desc);
        setTitle("");
        setDesc("");
        }
    }


    return (
        <form id={props.form_id} onSubmit={submit}>
            <TextField id="note_title" 
                label={titleError?"Please add a title":"Add a title"}
                variant="standard" 
                style={{width:"400px", margin:"5px 0px"}}  
                value={title}
                onChange={(e)=>{ setTitleError(false); setTitle(e.target.value);}} error={titleError} 
                autoComplete="off" />

            <TextField id="note_desc" 
                label={descError?"Please add a description":"Add a description"}
                variant="standard" 
                style={{width:"400px", margin:"5px 0px"}} 
                value={desc}
                onChange={(e)=>{setdescError(false); setDesc(e.target.value)}} error={descError}
                autoComplete="off"/>
    
            <button type="submit" style={{display:"none"}}/>
        </form>
    )
}
