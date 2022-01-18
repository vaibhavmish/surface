import {Grid, TextField, makeStyles, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core';
import Input from "../components/controls/Input.js"
import RadioGroup from "../components/controls/RadioGroup.js"
import React from 'react';
import {UseForm,Form } from '../components/UseForm';

const initialFvalues = {
    id:"0",
    fullName:"",
    eMail:"",
    mobile:"",
    city:"",
    gender:"male",
    departmentId:"",
    hireDate:new Date(),
    isPermanent:"yes"
}

export default function EmployeeForm() {
    
    const { values, setValues, handleInputChange} = UseForm(initialFvalues)
    
    console.log("here values", values);
    return (
        <Form>
            <Grid container>
               <Grid item xs={6}>
                   <Input
                       label = "Full Name" 
                       name ="fullName"
                       value = {values.fullName} 
                       onChange = {handleInputChange}    
                    />          
                    <Input 
                       label = "E-Mail"
                       name="email" 
                       value = {values.eMail}   
                       onChange = {handleInputChange}  
                    />             
               </Grid>
               <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>   
                        <RadioGroup name="gender" value={values.gender} onChange = {handleInputChange}>
                            <FormControlLabel value="male" control={<Radio/>} label="Male" />
                            <FormControlLabel value="female" control={<Radio/>} label="Female" />
                            <FormControlLabel value="others" control={<Radio/>} label="Others" />   
                        </RadioGroup>
                    </FormControl>    
               </Grid>

            </Grid>   
        </Form>
    )
}
