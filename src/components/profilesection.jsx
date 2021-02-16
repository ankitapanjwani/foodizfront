import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PastOrders from "./pastorders";
import MyProfile from "./myprofile";
import { shadows } from '@material-ui/system';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import SvgIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles(theme => ({
  root: {
      // marginTop: '5%',
    padding: "2%",
    height: 'auto',
    backgroundColor: "#2c446e",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  
    color: "#dae2f0",
    height: 'auto',
    // height: "auto",
    width: "auto",
    backgroundColor: "#ffffff"
  },
  tabs:{

    marginTop: '6%',
    paddingTop: '30%',
    backgroundColor:"#d8dee8",
    height:'90vh'
  },
  tabtext:{
 
    fontSize: '20px',
    color:'#2c446e',
    textAlign: 'left'
  
  },
  labelContainer: {
    width: "auto",
    padding: 2 
  },
  iconLabelWrapper: {
    flexDirection: "row",
    // padding: '20px'
  },

  tabposition:{
    padding: '20%'
  }
   
}));

export default function ProfileSection() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  return (



    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} md={12}>
            <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4} md={12}>
        
              <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
 
     <Tab className={classes.tabtext}  classes={{
              wrapper: classes.iconLabelWrapper,
              labelContainer: classes.labelContainer
            }} icon={<PersonIcon/>} label="Profile"/>
    
        <Tab className={classes.tabtext}  classes={{
              wrapper: classes.iconLabelWrapper,
              labelContainer: classes.labelContainer
            }} icon={<ShoppingBasketIcon/>} label="Past Orders"/>
         
      
      </Tabs>
  

              </Grid>
              <Grid item xs={12} lg={8} md={12}>
        
              {selectedTab === 0 && <MyProfile />}
              {selectedTab === 1 && <PastOrders />}   
              </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

