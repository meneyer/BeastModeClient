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
        <ZomatoResults />

        <br />

        <h2 className="resourceTitle">Transportation & Delivery Services</h2>
        <div>
          <CardGroup>
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Button</Button>
            </Card>
            <Card className="text-muted">
              <CardBody>
                <CardTitle tag="h3">Restaurant Delivery</CardTitle>
                {/* <CardSubtitle tag="h6">##</CardSubtitle> */}
                <CardText>
                  <ul className="servicesLink">
                    <li>
                      <Button
                        a
                        href="https://www.doordash.com/en-US"
                        target="blank"
                      >
                        DoorDash
                      </Button>
                    </li>
                    <li>
                      <Button a href="https://www.ubereats.com/" target="blank">
                        Uber Eats
                      </Button>
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
            <Card className="text-muted">
              <CardBody>
                <CardTitle tag="h3">Grocery Delivery</CardTitle>
                {/* <CardSubtitle tag="h6">##</CardSubtitle> */}
                <CardText>
                  <ul>
                    <li>
                      <Button
                        a
                        href="https://www.instacart.com/"
                        target="blank"
                      >
                        InstaCart
                      </Button>
                    </li>
                    <li>
                      <Button a href="http://www.shipt.com/" target="blank">
                        Shipt
                      </Button>
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
            <Card className="text-muted">
              <CardBody>
                <CardTitle tag="h3">Transportation</CardTitle>
                {/* <CardSubtitle tag="h6">Need a ride?</CardSubtitle> */}
                <CardText>
                  <ul>
                    <li>
                      <Button a href="https://www.lyft.com/" target="blank">
                        Lyft
                      </Button>
                    </li>
                    <li>
                      <Button a href="https://www.uber.com/" target="blank">
                        Uber
                      </Button>
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
            <Card className="text-muted">
              <CardBody>
                <CardTitle tag="h3">Places To Stay</CardTitle>
                {/* <CardSubtitle tag="h6">##</CardSubtitle> */}
                <CardText>
                  <ul>
                    <li>
                      <Button a href="https://www.airbnb.com/" target="blank">
                        airbnb
                      </Button>
                    </li>
                    <li>
                      <Button a href="https://www.vrbo.com/" target="blank">
                        Vrbo
                      </Button>
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
            {/* <Card className="text-muted">        
            <CardBody>
                <CardTitle tag="h3">Have a drink</CardTitle>
                <CardText>
                  <ul>
                    <li><Button a href="https://untappd.com/"  target="blank">Untappd</Button></li>  
                  </ul>
                </CardText>          
            </CardBody>
          </Card> */}
          </CardGroup>
        </div>
        <br />
      </Container>
    </div>
  );
};

export default Resources;
