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
const useStyles = makeStyles(theme => ({
  root: {
      marginTop: '5%',
    padding: "5%",
    height: '100vh',
    backgroundColor: "#171a29",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  
    color: "black",
    height: '80vh',
    // height: "auto",
    width: "auto",
    backgroundColor: "#ed7e34"
  },
   
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
        <Tab label="My Profile"  />
        <Tab label="Past Orders" />
      
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

