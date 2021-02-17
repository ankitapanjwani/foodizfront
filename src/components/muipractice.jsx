import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Card, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FooterGrid from "./footer";
import "materialize-css/dist/css/materialize.min.css";
import Parallax from "./parallax";
import Carousel from "./carousels";
import TopRatedRests from "./topratedrests";
import foodData from "./../data/foodGetdata";
import StarRateIcon from "@material-ui/icons/StarRate";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // rating:{
  //   marginTop: '5%',
  //   width: '60px',
  //   backgroundColor: '#48c479',
  //   color: 'white'
  // },
  image: {
    width: "80%",
    paddingTop: "5%"
  },
  p: {
    fontSize: "1rem",
    fontWeight: 100
  },
  hero: {
    margin: 0,
    // backgroundImage: `url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    backgroundImage: `url(${process.env.PUBLIC_URL+`/foodimage.jfif`} )`,
    backgroundRepeat: "no-repeat",
    height: "60vh",
    flexWrap: "wrap",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',

    width: "100%",

    alignItems: "center",
    // justifyContent: "center"
  },
  foodtext:{
    float: 'right'
  },
  search: {
    marginTop: "5vh",
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },

    paddingLeft: "2%",
    paddingRight: "2%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(1),
      width: "100vh",
      height: "7vh"
    }
  },
  
  title: {
    color: "white",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  foodsContainer: {
    paddingTop: theme.spacing(3)
  },
  cardtitle: {
    fontWeight: 700,
    fontSize: "4rem",
    textAlign: "center",

    // paddingBottom: theme.spacing,
    color: "#282c3f"
  },
  card: {
    // border: "2px solid white",
    borderRadius:'16px',
    maxwidth: "100%",
   /*  "&$selected": {
      backgroundColor: "white !important"
    } */
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "&:hover" :{transform: 'translate3D(0,-7px,0) scale(1.05)'}
  },
  restcontainer: {
    marginTop: "5%"
  },

  media: {
    height: 200
  },
  // searchbar:{
  //   backgroundColor: fade(theme.palette.common.black, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.black, 0.25)
  //   },
  //    color: 'white'
  // },
  inputRoot: {
    color: "black"
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
      "&:focus": {
        width: "10ch"
      }
    }
  },
  // foodizTitle:{
  //   color:'white'
  // }
}));

const handleId = rest => {
  console.log(rest);
};

export default function SearchAppBar() {
  const classes = useStyles();
  const restaurants = foodData();
  // console.log(restaurants);
  // console.log(restaurants._id);
  return (
    <div>
        <Box className={classes.hero}>
          <Box className={classes.image}>
          <div>
            Sign
          </div>
            <div className={classes.foodtext}>
              <Typography variant="h1" className={classes.foodizTitle}>FOODIZ</Typography>
              <Typography variant="h4">We Bring Joy to the Table</Typography>
            </div>
    
          </Box>
        </Box>

      <Container maxWidth="lg" className={classes.foodsContainer}>
  
        <Grid
          item
          container
          spacing={10}
          mt={10}
          className={classes.restcontainer}
        >
          <Grid item container xs={12} sm={12} md={12} lg={12} spacing={6}>
           
           <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.card}>
                  <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          title="Contemplative Reptile"
                        />


                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Order Food Online
                          </Typography>

                          <Typography variant="body2" color="textSecondary" component="p">
                            Stay at home and order to your doorstep
                          </Typography>
                    </CardContent>
               </CardActionArea>

              
             </Card>
              </Grid>


              <Grid item xs={12} sm={6} md={6} lg={4}  >
              <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Grab some amazing food
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Enjoy limitless dining privileges
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
              </Grid>
          </Grid>
        </Grid>
      </Container>

      <Parallax></Parallax>
       <Carousel></Carousel>
      <FooterGrid></FooterGrid>
      {/* <TopRatedRests></TopRatedRests> */}

      {/* <RecipeReviewCard></RecipeReviewCard> */}
    </div>
  );
}

// <Fab color="primary" aria-label="add">
// //                 <AddIcon />
// //             </Fab>
// //             <Fab color="secondary" aria-label="edit">
// //                 <EditIcon />
// //             </Fab>
// //             <Fab variant="extended">
// //                 <NavigationIcon className={classes.extendedIcon} />
// //                 Navigate
// //             </Fab>
// //             <Fab disabled aria-label="like">
//                 <FavoriteIcon />
//  </Fab>
{
  /* <AppBar position="static" className={classes.color}>
        <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                           <Avatar alt="Remy Sharp" src="https://media.gettyimages.com/videos/cheerful-young-businesswoman-headshot-portrait-smiling-at-camera-video-id1156656651?s=640x640" />
                    </IconButton>
                            <Typography className={classes.title} variant="h6" >
                           
                            </Typography>
          
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
       
        </Toolbar>
      </AppBar> */
}
{
  /* IMAGE */
}
