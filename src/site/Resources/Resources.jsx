import React, { useEffect, useState } from "react";
import {
  Container,
  CardColumns,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardGroup,
} from "reactstrap";

import WeatherResults from "./WeatherResults";
import spartan from "../assets/spartan.png";
import ruggedManiac from "../assets/ruggedManiac.png";
import toughMudder from "../assets/toughMudder.png";
import ocrwc from "../assets/ocrwc.png";
import Ragnar from "../assets/Ragnar.png";
import savageRace from "../assets/savageRace.png";
import mudRunGuide from "../assets/mudRunGuide.png";
import ZomatoResults from "./ZomatoResults";

const Resources = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
    
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      // console.log(latitude);
      // console.log(longitude)
    })
        
    function getZomatoResults (){
      fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
        method: "GET",
        headers: { "user-key": "a827929e8885610b39150d9739cd0cea" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRestaurant(json.nearby_restaurants);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getZomatoResults();
    console.log(restaurant);
  };

  return (

    <div id="eventInfoBG">
      <Container style={{ padding: "20px" }}>
        <h2 className="resourceTitle">
          Enter the Race Location's Zip Code to Check out the Local Weather!
        </h2>
        <WeatherResults />
        <br />

        <h2 className="resourceTitle">Find Your Next Race!</h2>
        <CardColumns>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={spartan}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Spartan Race
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                Stadion (5K), Sprint (5K), Super (10K), Beast (21K), Ultra
                (50K), & Trail (10K+)
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://www.spartan.com/"
                target="blank"
              >
                Spartan Race
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={ruggedManiac}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Rugged Maniac
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">5K</CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://ruggedmaniac.com/"
                target="blank"
              >
                Rugged Maniac
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={toughMudder}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Tough Mudder
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                5K, Classic (10 Miles), & Endurance Series (24 Hours)
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://toughmudder.com/"
                target="blank"
              >
                Tough Mudder
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={ocrwc}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                OCR World Championships
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                100M, 3K, 5K, 15K, Team Relay (6K){" "}
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://ocrworldchampionships.com/"
                target="blank"
              >
                OCR World Championships
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={Ragnar}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Ragnar
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                Ragnar Relay (Teams of 12 for 200 Miles)
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://www.runragnar.com/"
                target="blank"
              >
                Ragnar Relay
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={savageRace}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Savage Race
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                Savage Blitz (3+ Miles) & Savage Race (5-7 Miles)
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://savagerace.com/"
                target="blank"
              >
                Savage Race
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src={mudRunGuide}
              alt="Card image cap"
            />
            <CardBody className="raceFinderBackground">
              <CardTitle
                tag="h5"
                className="text-white, text-center, resourceCardTitle"
              >
                Mud Run Guide{" "}
              </CardTitle>
              <CardText className="mb-2 text-white, text-center">
                OCR News, Race Discounts, and More
              </CardText>
              <Button
                className="resourcesButton"
                class="btn btn-secondary btn-lg"
                a
                href="https://www.mudrunguide.com/"
                target="blank"
              >
                {" "}
                Mud Run Guide
              </Button>
            </CardBody>
          </Card>{" "}
        </CardColumns>
        {/* Resource Card END */}
        <br />

        {/* Services Link Begin */}

        <form
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <button id="serviceBtn" size="lg">
            Click for Local Restaurants
          </button>
        </form>

        {restaurant.length > 0 ? (
          <CardColumns>
            <ZomatoResults restaurant={restaurant} />
          </CardColumns>
        ) : null}

        <br />


        <h2 className="resourceTitle">Transportation & Delivery Services</h2>
        <div>
          <CardGroup>
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.76)",
                borderColor: "rgba(51, 51, 51, 0.76)",
              }}
            >
              <CardTitle style={{ textAlign: "center" }} tag="h5">
                Restaurant Delivery
              </CardTitle>
              <hr />
              <Button
                // className="linkBtn"
                a
                href="https://www.doordash.com/en-US"
                target="blank"
              >
                DoorDash
              </Button>
              <br />
              <Button a href="https://www.ubereats.com/" target="blank">
                Uber Eats
              </Button>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.76)",
                borderColor: "rgba(51, 51, 51, 0.76)",
              }}
            >
              <CardTitle style={{ textAlign: "center" }} tag="h5">
                Grocery Delivery
              </CardTitle>
              <hr />
              <Button a href="https://www.instacart.com/" target="blank">
                InstaCart
              </Button>
              <br />
              <Button a href="http://www.shipt.com/" target="blank">
                Shipt
              </Button>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.76)",
                borderColor: "rgba(51, 51, 51, 0.76)",
              }}
            >
              <CardTitle style={{ textAlign: "center" }} tag="h5">
                Transportation Services
              </CardTitle>
              <hr />
              <Button a href="https://www.lyft.com/" target="blank">
                Lyft
              </Button>
              <br />
              <Button a href="https://www.uber.com/" target="blank">
                Uber
              </Button>
            </Card>
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.76)",
                borderColor: "rgba(51, 51, 51, 0.76)",
              }}
            >
              <CardTitle style={{ textAlign: "center" }} tag="h5">
                Places To Stay
              </CardTitle>
              <hr />
              <Button a href="https://www.airbnb.com/" target="blank">
                airbnb
              </Button>
              <br />
              <Button a href="https://www.vrbo.com/" target="blank">
                Vrbo
              </Button>
            </Card>
          </CardGroup>
        </div>
        <br />
      </Container>
    </div>
  );
};

export default Resources;
