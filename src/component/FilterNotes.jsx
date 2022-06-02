import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react'

export default function FilterNotes(props) {
    return (
        <div className="filter">
            <FormControl>
            <FormLabel id="filter-notes" style={{fontSize:"15px",color:"blue",marginBottom:"10px"}}>Filter Notes:</FormLabel>
            <RadioGroup  
            defaultValue="1" 
            onChange={(e)=>{props.onFilter(e.target.value)}}
            name="row-radio-buttons-group"
            >
                <FormControlLabel value="1" control={<Radio size="small" />} label="All" />
                <FormControlLabel value="3" control={<Radio size="small"/>} label="Active" />
                <FormControlLabel value="2" control={<Radio size="small"/>} label="Completed" />
            </RadioGroup>
            </FormControl>
        </div>
      );
}
