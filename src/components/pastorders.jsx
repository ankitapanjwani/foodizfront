import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MyProfile from "./MyProfile";
import foodData from "../data/Restaurants";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { shadows } from "@material-ui/system";
import currencyInr from "@iconify-icons/mdi/currency-inr";
import { Icon, InlineIcon } from "@iconify/react";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    //   margin: '2%',
    padding: "3%",
    height: "100%",
    // backgroundColor: '#37718e',
    flexGrow: 1
  },

  paper: {
    padding: theme.spacing(7),
    textAlign: "left",
    // border: '1px solid #171a29',
    color: "black",
    height: "100%",
    // boxShadow: "0 14px 28px rgb(89, 130, 150), 0 10px 10px rgb(89, 130, 150)",
    backgroundColor: "#ffffff"
  },
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#ffffff",
    margin: "2%",
    color: "black",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  pastorders: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 0,
    paddingLeft: theme.spacing(1),
    alignItems: "center"
  },

  image: {
    borderRadius: "20px",
    width: "100%",
    height: "120px"
  },
  cardtitle: {
    fontWeight: 400,
    fontSize: "2rem",
    textAlign: "center",

    // paddingBottom: theme.spacing,
    color: "#282c3f"
  },
  orderdetails: {
    color: "#2c446e",
    fontWeight: "100",
    width: "65%"
  },
  media: {
    height: 200
  },
  pastImage: {
    borderRadius: "20px",
    border: "2px solid white",
    width: "40%",
    margin: "2%"
  },
  card: {
    border: "2px solid white",
    maxwidth: "80%"
    /*  "&$selected": {
      backgroundColor: "white !important"
    } */
  },
  price: {
    // paddingTop: '10px',
    // paddingLeft: '10px'
  },
  pastordertext: {
    color: "#2c446e",
    fontSize: "30px",
    fontWeight: "200"
  },
  hrcolor: {
    // backgroundColor: "#2c446e",
    borderTop: "1px dashed #2c446e"
  },

  loaditems: {
    height: "100px"
  }
}));

const handleId = rest => {
  console.log(rest);
};

export default function PastOrders() {
  const classes = useStyles();
  const restaurants = foodData();
  const length = restaurants.length;
  console.log(length);
  let limit = 2;

  const [showMore, setShowMore] = useState(true);
  console.log("rest", restaurants);
  
  const [list, setList] = useState(
    _(restaurants)
      .slice(0)
      .take(limit)
      .value()
  );

  const [index, setIndex] = useState(limit);
  console.log(index);

  const loadMore = () => {
    const newIndex = index + limit;
    
    console.log("index", index);
    console.log("new indedx", newIndex);
    const newShowMore = newIndex <= length - 1;
    console.log("new show more", newShowMore);
    const newList = _.concat(
      list,
      _(restaurants)
        .slice(limit,newIndex)
        .take(limit)
        .value()
    );
    console.log("new list", newList);
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  console.log(list);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} lg={12} md={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.pastordertext}>
                Past Orders
              </Typography>
              {list.map(rest => (
                <Paper className={classes.paper1}>
                  <div className={classes.pastorders}>
                    <div className={classes.pastImage}>
                      <img className={classes.image} src={rest.imageUrl} />
                    </div>
                    <div className={classes.orderdetails}>
                      <Typography
                        variant="h5"
                        color="textsecondary"
                        style={{ fontWeight: "200" }}
                      >
                        {rest.title}
                      </Typography>
                      <Typography>Mahadev Nagar</Typography>
                      <Typography>
                        Order Time Sat, Sun Jan 26, 10:43 AM
                      </Typography>
                      <div className={classes.price}>
                        <hr className={classes.hrcolor} />
                        <Typography>
                          Total Paid: <Icon icon={currencyInr} />
                          {rest.price}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              ))}
            </Paper>
            {showMore && <button onClick={loadMore}> Load More </button>}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
