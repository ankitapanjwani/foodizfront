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
    //   margin: '2%',
    padding: "3%",

    backgroundColor: "#171a29",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    border: "1px solid #171a29",
    color: "white",
    height: "300px",
    width: "",
    backgroundColor: "#f5f2eb"
  },
  orders: {
    fontSize: "30px",
    "&:hover": {
      cursor: "pointer",
      color: "lightblue",
      textDecoration: "none"
    }
  },
  tabstyle: {
   /*  "&:hover": {
      backgroundColor: "#37718e"
    } */
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "left",
    border: "1px solid #171a29",
    color: "white",
    height: "",
    width: "",
    backgroundColor: "#dedede"
  },
  indicator: {
    backgroundColor: "#f5f2eb",
    height: "5px",
    top: "45px"
  },
  tabSelected: {
    background: "#171a29"
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
          <Grid item xs={6} lg={12} md={4}>
            <Paper className={classes.paper}>
              {/* <div className={classes.orders}>
            <div><Link to="/pastorders">Past Orders</Link></div>
            <div><Link to="/myprofile">My Profile</Link></div>
          </div> */}

              <Tabs
              orientation="vertical"
                value={selectedTab}
                onChange={handleChange}
                classes={{
                  indicator: classes.indicator
                }}
              >
                <Tab
                  fullWidth
                  label="Past Orders"
                  TabIndicatorProps={{ className: classes.indicator }}
                 
                  classes={{
                    selected: classes.tabSelected
                  }}
                  value={0}
                />
                <Tab
                  fullWidth
                  label="My Profile"
                
                  classes={{
                    selected: classes.tabSelected
                  }}
                  value={1}
                />
              </Tabs>

              {selectedTab === 0 && <PastOrders />}
              {selectedTab === 1 && <MyProfile />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

