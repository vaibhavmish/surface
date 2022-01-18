import React from 'react'
import {makeStyles, Paper, Typography, Card} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:"pink",
        marginLeft: theme.spacing(2),
        transform: "translateZ(0)"
    },
    pageHeader:{
        padding:theme.spacing(2),
        display:"flex",
        marginBottom:theme.spacing(2)
    },
    styleIcon:{
        display:"inline-block",
        padding:theme.spacing(2),
        color:"pink"
    },
    pageTitle:{
        paddingLeft:theme.spacing(2),
        "& .MuiTypography-subtitle2":{
            opacity:"0.6"
        }
    }
})
)
function PageHeader(props) {
    const classes = useStyles();
    const { title,  subtitle, icon} = props;
    console.log(props, title);
    return (
        <Paper elevation={0} square className={classes.root}>
           <div className = {classes.pageHeader}>
               <Card className={classes.styleIcon}>
                   {icon}
               </Card>
               <div className={classes.pageTitle}>
                   <Typography
                        variant="h6"
                        component="div">
                        {title}
                    </Typography>
                   <Typography
                        variant="subtitle2"
                        component="div">
                        {subtitle}
                    </Typography>
               </div>   
           </div>
            
        </Paper>
    )
}

export default PageHeader
