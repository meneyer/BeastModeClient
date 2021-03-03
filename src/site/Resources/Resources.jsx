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
} from "reactstrap";
import WeatherResults from "./WeatherResults";

const Resources = () => {
  return (
    <div id="eventInfoBG">
      <h2 className="resourceTitle">
        Enter the Race Location's Zip Code to see the Local Weather!
      </h2>

      <WeatherResults />

      <h2 className="resourceTitle">Nearby Restaurants</h2>

      <h2 className="resourceTitle">Nearby Hotels</h2>

      <Container>
        <h2 className="resourceTitle">Find Your Next Race!</h2>
        <CardColumns>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src="https://cdn4.mudrunguide.com/wp-content/uploads/2018/04/spartan-logo-18.png"
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
              src="https://www.mudrunguide.com/wp-content/uploads/2019/09/Stacked-Obstacle-Race-300x168.jpg"
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
              src="https://cdn4.mudrunguide.com/wp-content/uploads/2012/02/logo_tough-mudder.png"
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
              src="https://cdn4.mudrunguide.com/wp-content/uploads/2014/01/OCRWC-Logo-Black-Font.png"
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
              src="https://uceb300e0d1bccf0d885557c71c3.previews.dropboxusercontent.com/p/pdf_img/ABH9gDzJjlltSfBZ2ir03y17VzxiblpHuRwxfvR8hgrRf-RJr1z-y6AA1AlcTGe6XxY_7MbF9KrzqEnvLkCUDOQPZqBUpj6Cl1v898iB2YgIgYBSNlUL0mNAr6yrh84mb1Uakj-SRuXeQ4SFrlJErBnDcIckxKl3QjFPyDkBIuewkMhIZHTkwp2gtZy9Hsr2NhR3UDzLpgMG-S66ZZs0hxDLJkqO-NAhhNcFixpdMzM8HGdWIR_tFSIJK46rsZdg_nFve-jxmguG88ckCavpphUHyplfrnAMFyi58qHQfO3CGwQQ6VQ7LBMwGtQSuAluIFhlBht-sJ51YKlbZRXWBE8w/p.png?page=0&scale_percent=0"
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
                OCR World Championships
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              className="raceFinderCards"
              top
              width="100%"
              src="https://cdn4.mudrunguide.com/wp-content/uploads/2012/06/STACKED_Savage_Race.png"
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
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZEtljN3iWpA/company-logo_200_200/0/1519952411343?e=1622678400&v=beta&t=mkhmK7mp-AZtwuHpdc95XA9C30rHNiDttTZMqq3YSd4"
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
          */
        </CardColumns>
      </Container>

      <h2 className="resourceTitle">
        Other Helpful Links (Door Dash, Uber)
        <ul>
          <li>
            <a href="https://www.doordash.com/en-US">DoorDash</a>
          </li>
          <li>
            <a href="https://www.ubereats.com/">Uber Eats</a>
          </li>
          <li>
            <a href="https://untappd.com/">Untappd</a>
          </li>
          <li>
            <a href="https://www.uber.com/">Uber</a>
          </li>
          <li>
            <a href="https://www.lyft.com/">Lyft</a>
          </li>
        </ul>
      </h2>
      <h2>Grocery, Drug, Sporting Goods Stores?</h2>
    </div>
  );
};

export default Resources;
