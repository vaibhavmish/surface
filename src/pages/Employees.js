import React from 'react'
import PageHeader from "../components/PageHeader"
import PublicIcon from '@mui/icons-material/Public';
import EmployeeForm from './EmployeeForm';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles (theme =>({
    pageContent:{
        margin: theme.spacing(2),
        padding: theme.spacing(3)
     }
})
)
export default function Employees() {
    const classes = useStyles();
    return (
        <div>
        <PageHeader
        title="Artist"
        subtitle="Description"
        icon={<PublicIcon/>}
        />
        <Paper className={classes.pageContent}>
          <EmployeeForm/>
        </Paper>  
        </div>
    )
}
