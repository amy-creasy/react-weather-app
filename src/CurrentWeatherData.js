import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnits from "./TemperatureUnits";
import cloudIcon from "./cloud icon.png";
import humidityIcon from "./humidity icon.png";
import windIcon from "./wind icon.png";
import WeatherIcon from "./WeatherIcon";


export default function CurrentWeatherData (props){
    return (
        <div className="current-weather-data">
            <div className="location-and-date">
                <h1>{props.data.city}</h1>
                <p><em> < FormattedDate date={props.data.date} /></em></p>
            </div> 
            <div className = "weather-data-container">
                <div className="current-weather">
                    <div className="current-weather-icon-container">
                        <WeatherIcon code={props.data.icon}/>
                    </div>
                    <div className="current-weather-content-container">
                        <TemperatureUnits celsius={props.data.temperature} />
                        <div className="current-weather-description text-capitalize">{props.data.description}</div>
                    </div>
                </div>
                <div className="current-weather-stats">
                    <div className="Cloudiness">
                        <div className="label">
                            Clouds
                        </div>
                        <div className="image">
                            <img src={cloudIcon} alt=""/>
                        </div>
                        <div className="value" id="cloudiness-value">
                            {props.data.clouds}%
                        </div>
                    </div>
                    <div className="humidity">
                        <div className="label">
                            Humidity
                        </div>
                        <div className="image">
                            <img src={humidityIcon} alt=""/>
                        </div>
                        <div className="value" id="humidity-value">
                            {props.data.humidity}%
                        </div>
                    </div>
                    <div className="wind">
                        <div className="label">
                            Wind
                        </div>
                        <div className="image">
                            <img src={windIcon} alt=""/>
                        </div>
                        <div className="value" id="wind-value">
                            {Math.round(props.data.wind)}mph
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}