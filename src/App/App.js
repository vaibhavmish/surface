import './App.css';
import SideMenu from '../components/SideMenu';
// import SideMenu from '../components/SideMenu';
import {makeStyles, CssBaseline} from "@material-ui/core";
import Header from '../components/Header';
import Employees from '../pages/Employees';
// import PageHeader from '../components/PageHeader';

const useStyles = makeStyles({
   appMain:{
     width:"100%",
     paddingLeft:"200px"
   }
});

function App() {
  
  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </>  
  );
}

export default App;
