import React, {useState} from "react";
import {Container,
    Card,
    CardTitle,
    CardText,
    CardColumns,
    CardBody,
    CardSubtitle,
    Button,} from "reactstrap";

const ZomatoResults = () => {
    
    const [restaurants, setRestaurants] = useState({});
    let latitude = 39.9
    let longitude = -86.0

    const fetchZomatoResults =() => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
            method: "GET",
            headers: {'user-key': "a827929e8885610b39150d9739cd0cea"}})
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setRestaurants(json); 
            console.log(json.nearby_restaurants[0].restaurant.name)
        });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            fetchZomatoResults();
        };

    return (
        <div> 
            <form onSubmit={ (e) => handleSubmit(e)}>                  
                <button className="submit">Click for Local Restaurants</button>
            </form>

            {restaurants.nearby_restaurants != undefined ? (
                <div>
                    <h1 id="locationOutput">Placeholder</h1>

                    <CardColumns>
                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[0].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[0].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[0].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[0].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[0].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[0].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[1].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[1].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[1].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[1].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[1].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[1].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[2].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[2].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[2].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[2].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[2].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[2].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[3].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[3].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[3].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[3].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[3].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[3].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[4].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[4].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[4].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[4].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[4].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[4].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[5].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[5].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[5].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[5].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[5].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[5].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[6].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[6].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[6].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[6].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[6].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[6].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[7].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[7].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[7].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[7].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[7].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[7].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card className = "text-muted">
                            <CardBody>
                                <CardTitle tag="h3">{restaurants.nearby_restaurants[8].restaurant.name}</CardTitle>
                                <CardSubtitle tag="h6">Rating: {restaurants.nearby_restaurants[8].restaurant.user_rating.rating_text}</CardSubtitle>
                                {/* <CardSubtitle tag="h6">Type of Food Served: {restaurants.nearby_restaurants[8].restaurant.cuisines}</CardSubtitle> */}
                                <CardText>
                                    <p>Type of Food Served: {restaurants.nearby_restaurants[8].restaurant.cuisines}</p>
                                    <p>{restaurants.nearby_restaurants[8].restaurant.location.address}</p>    
                                    <Button a href={restaurants.nearby_restaurants[8].restaurant.menu_url} target="blank">Click for Menu </Button>
                                </CardText>
                            </CardBody>
                        </Card>                       
                    
                    </CardColumns>
                </div>
                ):( "")}
        </div>
    );
};



export default ZomatoResults;

