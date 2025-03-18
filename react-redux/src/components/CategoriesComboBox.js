import React from "react";
import { Autocomplete, TextField } from '@mui/material';

const Categories = () => {
    const categories = [
        { id: 1, label: 'abc' },
        { id: 2, label: 'def' },
        { id: 3, label: 'ghi' }

    ]
    return (<Autocomplete
     options={categories} 
     sx={{ width: 301 }} 
     renderInput={(params) => <TextField {...params} label='קטגוריות'/>}
     />)
}
export default Categories