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

const WeatherResults = () => {
  const apiKey = "a9095404d4c44ef1b3e232722212702";
  const [zipCode, setZipCode] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeather = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zipCode}&days=5`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setWeather(json);
        console.log(json.current.condition.text);
        console.log(json.forecast.forecastday[1].day.condition.text);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <Container>
        <form id="zipcodeForm" onSubmit={(e) => handleSubmit(e)}>
          {/* <span style={{ margin: "10px", fontSize: "20px" }}>Zip Code:</span> */}
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            onChange={(e) => setZipCode(e.target.value)}
            required
          ></input>
          <Button id="weatherBtn" size="lg">
            Submit
          </Button>
        </form>

        {weather.location !== undefined ? (
          <div>
            <h1 id="locationOutput">
              {weather.location.name}, {weather.location.region}
            </h1>

            <CardColumns>
              <Card className="weatherCardText">
                <CardBody className="weatherCard">
                  <CardTitle tag="h3">Today's Forecast</CardTitle>
                  <CardSubtitle tag="h6">
                    ({weather.forecast.forecastday[0].date})
                  </CardSubtitle>
                  <CardText>
                    <ul>
                      <li>{weather.current.condition.text}</li>
                      <li>Current Temperature: {weather.current.temp_f}</li>
                      <li>Feels Like: {weather.current.feelslike_f}</li>
                      <li>
                        High: {weather.forecast.forecastday[0].day.maxtemp_f}
                      </li>
                      <li>
                        {" "}
                        Low: {weather.forecast.forecastday[0].day.mintemp_f}
                      </li>
                      <li>
                        Maximum Wind Speed:{" "}
                        {weather.forecast.forecastday[0].day.maxwind_mph}
                      </li>
                      <li>
                        Average Humidity Level:{" "}
                        {weather.forecast.forecastday[0].day.avghumidity}
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>

              <Card className="weatherCardText">
                <CardBody className="weatherCard">
                  <CardTitle tag="h3">Tomorrow's Forecast</CardTitle>
                  <CardSubtitle tag="h6">
                    ({weather.forecast.forecastday[1].date})
                  </CardSubtitle>
                  <CardText>
                    <ul>
                      <li>{weather.forecast.forecastday[1].day.condition.text}</li>
                      <li>Chance of Rain: {weather.forecast.forecastday[1].day.daily_chance_of_rain}%</li>
                      <li>UV index: {weather.forecast.forecastday[1].day.uv}</li>
                      <li>
                        High: {weather.forecast.forecastday[1].day.maxtemp_f}
                      </li>
                      <li>
                        {" "}
                        Low: {weather.forecast.forecastday[1].day.mintemp_f}
                      </li>
                      <li>
                        Maximum Wind Speed:{" "}
                        {weather.forecast.forecastday[1].day.maxwind_mph}
                      </li>
                      <li>
                        Average Humidity Level:{" "}
                        {weather.forecast.forecastday[1].day.avghumidity}
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>

              <Card className="weatherCardText">
                <CardBody className="weatherCard">
                  <CardTitle tag="h3">The Next Day's Forecast</CardTitle>
                  <CardSubtitle tag="h6">
                    ({weather.forecast.forecastday[2].date})
                  </CardSubtitle>
                  <CardText>
                    <ul>
                      <li>{weather.forecast.forecastday[2].day.condition.text}</li>
                      <li>Chance of Rain: {weather.forecast.forecastday[2].day.daily_chance_of_rain}%</li>
                      <li>UV index: {weather.forecast.forecastday[2].day.uv}</li>
                      <li>
                        High: {weather.forecast.forecastday[2].day.maxtemp_f}
                      </li>
                      <li>
                        {" "}
                        Low: {weather.forecast.forecastday[2].day.mintemp_f}
                      </li>
                      <li>
                        Maximum Wind Speed:{" "}
                        {weather.forecast.forecastday[2].day.maxwind_mph}
                      </li>
                      <li>
                        Average Humidity Level:{" "}
                        {weather.forecast.forecastday[2].day.avghumidity}
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </CardColumns>
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default WeatherResults;
