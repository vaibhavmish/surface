import React, {useState} from 'react';
import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles (theme =>({
    root:{   
     "& .MuiFormControl-root" :{
         width:"80%",
         margin:theme.spacing(1)
     }
    
    },
 
 })
 )
 
export function UseForm(initialFvalues) {
    const [values, setValues] = useState(initialFvalues);
    
    const handleInputChange = e => {
        const {name, value } = e.target
        console.log("values, e.target", values, e.target, name, value);
        setValues({...values, [name]:value});
    }
    return {
        values,
        setValues,
        handleInputChange
    }
}


export function Form(props) {
    return (
        <form>
            {props.children}
        </form>
    )
}
