import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import cloudIcon from "./cloud icon.png";
import humidityIcon from "./humidity icon.png";
import windIcon from "./wind icon.png";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse (response){
        setWeatherData ({
            ready: true,
            city: response.data.name,
            date: `Wednesday 07:00`,
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
            <div className="location-and-date">
                <h1>{weatherData.city}</h1>
                <p><em>Last updated {weatherData.date}</em></p>
            </div> 
            <div class="current-weather">
                <div class="current-weather-icon-container">
                    <img src={weatherData.iconUrl} id="current-weather-icon" alt="{weatherData.description}" />
                 </div>
                <div class="current-weather-content-container">
                    <div class="current-temperature"><span id="temperature-value">{Math.round(weatherData.temperature)}</span><span class="units"><a href="#" class="active" id="celsius-link">°C</a> | <a href="#" class="inactive" id="fahrenheit-link">°F</a></span> </div>
                    <div class="current-weather-description text-capitalize">{weatherData.description}</div>
                </div>
            </div>
            <div className="current-weather-stats">
                <div class="Cloudiness">
                    <div class="label">
                        Clouds
                    </div>
                    <div class="image">
                        <img src={cloudIcon} alt=""/>
                    </div>
                    <div class="value" id="cloudiness-value">
                        {weatherData.clouds}%
                    </div>
                </div>
                <div class="humidity">
                    <div class="label">
                        Humidity
                    </div>
                    <div class="image">
                        <img src={humidityIcon} alt=""/>
                    </div>
                    <div class="value" id="humidity-value">
                        {weatherData.humidity}%
                    </div>
                </div>
                <div class="wind">
                    <div class="label">
                        Wind
                    </div>
                    <div class="image">
                        <img src={windIcon} alt=""/>
                    </div>
                    <div class="value" id="wind-value">
                        {Math.round(weatherData.wind)}mph
                    </div>
                </div>
            </div>
        </div>
    )

    }
    else {
    const apiKey = "a86c3b0abefd7bc099059a69f17f7675";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }

 
}