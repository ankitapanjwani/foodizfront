import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import foodData from "./../data/foodGetdata";

class TopRatedRests extends Component {
    state={
    
    }
    render() {
        const restaurants = foodData();
        const mystyle = {
        height: '50vh',
        marginTop: '20%',
        marginBottom: '20%',
      };
console.log(restaurants);
        return (
            <Carousel className="mt-5" style={mystyle}>
                {
                   restaurants.map(rest =>(
                    <div><image src={rest.imageUrl}>{rest.title}</image></div>
                   ))
                }
            </Carousel>
        );
    }
}
 
export default TopRatedRests;