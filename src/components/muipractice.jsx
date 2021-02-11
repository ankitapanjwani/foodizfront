import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid, Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import RecipeReviewCard from './../card';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { spacing } from '@material-ui/system';
// import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url("http://i.imgur.com/XBEKUJK.jpg")` 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  image:{
        // marginTop: '10%',
        marginRight: '5%',
    color: "#F0FFF0",
  },
  p:{
    fontSize: '1rem',
    fontWeight: 100,
  },
  hero: {
      height: '600px',
      backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: "relative",
     display: "flex",
      justifyContent:"center",
  
      alignItems: "center",
     
      fontWeight: 300,
      fontSize: "4rem",
    backgroundImage: `url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')`
  },
//   image:{
//     height: '6',
//     width: '100vw',
//   },
  title: {
      color:"white",
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
   
  },
  color:{
    backgroundColor: 'black'
},
foodsContainer:{
    paddingTop: theme.spacing(3)
},
cardtitle:{
    fontWeight: 700,
    fontSize: '4rem',
    textAlign: "center",
    paddingBottom: theme.spacing,
    color: "#282c3f"
},
card:{
    border: "2px solid grey",
    maxwidth: '100%',
},
media:{
    height: 300
},
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.color}>
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
      {/*     <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                 inputProps={{ 'aria-label': 'search' }} />
                   
            </div> */}
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
       
        </Toolbar>
      </AppBar>
    {/* IMAGE */}
    <Box className={classes.hero}>
        <Box className={classes.image}>
           FOODIZ
        </Box> 
    </Box>
    <Container maxWidth="lg" className={classes.foodsContainer}>
    <Typography className={classes.cardtitle} variant="h4" >
                           RESTAURANTS
        </Typography> 
        <Grid container spacing={10} mt={10}>

                <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>

                     <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zqghalajjw2meciffuhd"
                            title="Bluez Terrace Cafe"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Burger King
                                   
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  American Fast Food
                                   
                                </Typography>

                                
                            </CardContent>
                        </CardActionArea>



                        <CardActions>
                           
                        </CardActions>


                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>


                             <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/btuyxj8d21p8riyitxrn"
                        title="Bluez Terrace Cafe"
                        />

                          <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Briyani
                        </Typography>


                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>



                            <CardActions>
      
                            </CardActions>


                        </Card>

                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>


                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nuqpoivlwm7jywhooij8"
                            title="Bluez Terrace Cafe"
                            />

                   <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dosa
                    </Typography>


                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>



                    <CardActions>
                        
                    </CardActions>


                    </Card>

                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>


                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zqghalajjw2meciffuhd"
                                title="Bluez Terrace Cafe"
                                />

                                <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Burgers
                            </Typography>


                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>



                        <CardActions>
                            
                        </CardActions>


                            </Card>

                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>


                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zqghalajjw2meciffuhd"
                            title="Bluez Terrace Cafe"
                            />

                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Burgers
                            </Typography>


                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>



                                    <CardActions>
                                        
                                    </CardActions>


                                </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>


                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zqghalajjw2meciffuhd"
                            title="Bluez Terrace Cafe"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Burgers
                                </Typography>


                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>



                                    <CardActions>
                                        
                                    </CardActions>


                                    </Card>
                </Grid>
        </Grid>
    </Container>

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