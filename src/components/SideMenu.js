import React from 'react'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    sideMenu:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        left:"0px",
        width:"200px",
        height:"100%",
        backgroundColor: "lightPink"   
    }
})

function SideMenu() {
    const classes = useStyles();
    return (
        <div className = {classes.sideMenu}>
        </div>
    )
}

export default SideMenu
