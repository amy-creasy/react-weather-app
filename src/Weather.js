import React, {useState} from "react";
import CurrentWeatherData from "./CurrentWeatherData";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse (response){
        setWeatherData ({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            clouds: response.data.clouds.all,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        });
    }
    if (weatherData.ready) {
    return (
        <div className ="Weather">
                <form className ="search-form">
                    <div className = "row">
                        <div className ="col-9">
                            <input type ="search" placeholder ="Search for a city..." className="form-control" autoFocus="on"/>
                            <p id="current-location"><small><a href="#">Current Location</a></small></p>
                        </div>
                        <div className ="col-3 submit-button">
                            <input type ="submit" value ="Search" className="btn btn-light"/>
                        </div>
                    </div>
                </form>
                < CurrentWeatherData data={weatherData}/>
        </div>
    );

    }
    else {
    const apiKey = "a86c3b0abefd7bc099059a69f17f7675";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }

 
}