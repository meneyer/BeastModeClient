import React, { useState } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardText,
  CardColumns,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

const ZomatoResults = (props) => {
    // console.log(props.restaurant)
    return (
        <div>
             <h1 id="locationOutput">Here are a few choices for you.</h1>   
            {props.restaurant.map (restaurants => {
                return(
                    <div>
                    <Card className = "foodCardText">
                        <CardBody className="foodCard">
                            <CardTitle tag="h3">{restaurants.restaurant.name}</CardTitle>
                            <CardSubtitle tag="h6">Rating: {restaurants.restaurant.user_rating.rating_text}</CardSubtitle>
                            <CardText>
                                <p>Type of Food Served: {restaurants.restaurant.cuisines}</p>
                                <p>{restaurants.restaurant.location.address}</p>    
                                <Button className="menuBtn" a href={restaurants.restaurant.menu_url} target="blank">Click for Menu</Button>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                )})}           
        </div>                                
    );
};



export default ZomatoResults;