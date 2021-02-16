import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Route, Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MyProfile from './myprofile';
import foodData from "./../data/foodGetdata";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles((theme) => ({
  root: {
    //   margin: '2%',
      padding: '3%',
    height: '100%',
     // backgroundColor: '#37718e',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
  // border: '1px solid #171a29',
    color: 'white',
   height: '100%',
    width: '',
    backgroundColor: '#171a29'
  },
  paper1:{
    padding: theme.spacing(2),
    backgroundColor: '#171a29',
    margin: '2%',
    color: 'white'

  },
  pastorders:{
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing(1),    alignItems: 'center',
   

  },
  
  image: {
    width: "80%",
    paddingTop: "5%"
  },
  cardtitle: {
    fontWeight: 400,
    fontSize: "2rem",
    textAlign: "center",

    // paddingBottom: theme.spacing,
    color: "#282c3f"
  },
  media: {
    height: 200
  },
  card: {
    border: "2px solid white",
    maxwidth: "80%",
   /*  "&$selected": {
      backgroundColor: "white !important"
    } */
  },
}));

const handleId = rest => {
  console.log(rest);
};

export default function PastOrders() {
  const classes = useStyles();
  const restaurants = foodData();

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


          
                  {/* <Grid item container xs={12} sm={12} md={12} lg={12} spacing={2}>
            {restaurants.map(rest => (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={rest.imageUrl}
                      title=""
                      onClick={() => handleId(rest)}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {rest.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {rest.description}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h3"
                      >
                        Rs. {rest.price} for Two
                      </Typography>
                      {/* <Typography> */}
                        {/* <p className={classes.rating}>
                          <StarRateIcon /> 4.5
                        </p>
                      </Typography> */}
                    {/* </CardContent>
                  </CardActionArea>

                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))} 
          </Grid> */}

          {restaurants.map(rest =>
          <Paper className={classes.paper1}>
          <div className={classes.pastorders}>
          <div>
            <img width="200" height="100" src={rest.imageUrl} /> 
          </div>
          <div>
            <Typography>{rest.title}</Typography>
            <Typography>Mahadev Nagar</Typography>
            <Typography>Order Time Sat, Sun Jan 26, 10:43 AM</Typography>
            <Typography>Total price: {rest.price}</Typography>
          </div>
        </div>
        </Paper>
          )}
    
           </Paper> 
        </Grid>

      </Grid>
      </Container>

   
    </div>
  );
}
