import React from 'react';

const WeatherResults = (props) => {

    console.log(props)
    console.log(props.weather)

    // function displayWeather() {
    //      // return props.weather.forecast.forecastday.length >0 ? props.weather.forecast.forecastday.map(weather => <h2>{weather}</h2>) : null 
    //     return props.forecast.forecastday.map(weather => <h2>{weather}</h2>)
    // }


    return (
        <div>
            Hello from Weather Results 
            {props.weather.condition != undefined ? 
            <div>
                <h2>{props.weather.condition.text}</h2>  
                {/* {props.displayWeather()} */}
                {/* <h2>{props.weather.forecast.forecastday[1].day.condition}</h2>             */}
            </div> : null }   
        </div>
    );
};

export default WeatherResults;