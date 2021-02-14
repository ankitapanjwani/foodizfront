import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import Box from "@material-ui/core/Box";
import './style.css';
import foodData from "./../data/foodGetdata";
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@material-ui/core';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carousels() {
  const restaurants = foodData();
  const cardstyle = {
  
      border: "2px solid grey",
      width: '345px',
      margin: "2%"
    
  };
  const mediastyle = {
    height: 300,
    width: '100%'
  }
const carddiv={
  maxWidth: '100%'
}
  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Top Five Rated Restaurants...</h1>
      <div className="Appi">
        <Carousel breakPoints={breakPoints}>
        
                {
                   restaurants.map(rest =>(
                     <Box>
                        <Card style={cardstyle}>
                    <CardActionArea>
                      <CardMedia
                        style={mediastyle}
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
                          <p>{rest.price}</p>       
                          </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  </Box>
                    
                   ))
                }
           
        </Carousel>
      </div>
    </>
  );
}

export default Carousels;