import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Route, Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    //   margin: '2%',
    padding: "3%",

   // backgroundColor: "#37718e",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    border: "1px solid #171a29",
    color: "white",
    height: "900px",
    width: "",
    backgroundColor: "#171a29"
  },
  orders: {
    fontSize: "30px",
    "&:hover": {
      cursor: "pointer",
      color: "lightblue",
      textDecoration: "none"
    }
  }
}));

export default function MyProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} lg={12} md={4}>
           {/*  <Paper className={classes.paper}> */}
              {/* <div className={classes.orders}>
            <div><Link to="/pastorders">Past Orders</Link></div>
            <div><Link to="/myprofile">My Profile</Link></div>
          </div> */}
              My Profile
          {/*   </Paper> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
