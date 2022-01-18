import React from 'react'
import {AppBar, Grid, InputBase, IconButton, Toolbar, Badge} from "@material-ui/core"
// import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:"white",
        marginLeft:theme.spacing(2),
        transform: "translateZ(0)"
    },
    searchInput:{
        opacity:"0.6",
        padding:"0px 8px",
        fontSize:"0.8rem",
        "&:hover" : {
            backgroundColor:"grey"
        },
        "& .MuiSvgIcon-root" :{
            marginRight:"8px"
        }
    }
})
);

function Header() {

    const classes =useStyles();
    return (
        <AppBar position="static" className={classes.root}> 
            <Toolbar>
               <Grid container alignItems="center">
                   <Grid item >
                       <InputBase 
                         placeholder='Search Items'  
                         startAdornment={<SearchIcon fontSize="small"/>}
                         className={classes.searchInput}
                       />
                   </Grid>
                   <Grid item sm>                
                   </Grid>
                   <Grid item>
                       <IconButton>
                           <Badge badgeContent={4} color="primary">
                              <NotificationsNoneIcon fontSize="small"/>
                           </Badge>
                        </IconButton> 
                        <IconButton>  
                           <Badge badgeContent={8} color="secondary">
                               <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>   
                       </IconButton>
                       <IconButton>
                           <LogoutIcon fontSize="small"/>
                       </IconButton>
                   </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
            
    )
}

export default Header
