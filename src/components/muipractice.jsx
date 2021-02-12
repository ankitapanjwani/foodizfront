import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Grid, Card, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import RecipeReviewCard from "./../card";
import Avatar from "@material-ui/core/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import "materialize-css/dist/css/materialize.min.css";
import Parallax from "./parallax";

// import Rating from '@material-ui/lab/Rating';
import Carousel from "./carousels";
import foodData from "./../data/foodGetdata";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: "100%",
    color: "#F0FFF0"
  },
  p: {
    fontSize: "1rem",
    fontWeight: 100
  },
  hero: {
    backgroundImage: `url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')`,
    backgroundRepeat: "no-repeat",
    height: "60vh",
    flexWrap: "wrap",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "col",
    //  justifyContent:"space-around",
    width: "100%",

    alignItems: "center",
    justifyContent: "center"

    //   fontWeight: 300,
    //   fontSize: "4rem",
  },
  search: {
    marginTop: "5vh",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    // width: "100%",
    paddingLeft: "2%",
    paddingRight: "2%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "55vw",
      height: "5vh"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 120),
    height: "100%",
    width: "100",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    paddingBottom: theme.spacing,
    color: "#282c3f"
  },
  card: {
    border: "2px solid grey",
    maxwidth: "100%"
  },
  media: {
    height: 300
  },

  inputRoot: {
    color: "white"
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
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const restaurants = foodData();
  // console.log(food);
  return (
    <div>
      <Box className={classes.hero}>
        <Box className={classes.image}>
          <div>
            <Typography variant="h1">FOODIZ</Typography>
            <Typography variant="h4">We Bring Joy to the Table</Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search Restaurants, dishes..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              fullWidth
            />
          </div>
        </Box>
      </Box>

      <Container maxWidth="lg" className={classes.foodsContainer}>
        <Typography className={classes.cardtitle} variant="h4">
          RESTAURANTS
        </Typography>

        <Grid item container spacing={10} mt={10}>
          <Grid item container xs={12} sm={6} md={4} lg={12} spacing={2}>
            {/* <Grid container spacing={2}> */}
              {restaurants.map(rest => (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={rest.imageUrl}
                        title=""
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
                      </CardContent>
                    </CardActionArea>

                    <CardActions></CardActions>
                  </Card>
                </Grid>
              ))}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
      {/* <Parallax></Parallax> */}
      {/*  <Carousel></Carousel> */}

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
