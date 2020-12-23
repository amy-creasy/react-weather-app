import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className ="Weather">
            <form>
                <div className = "row">
                    <div className ="col-9">
                        <input type ="search" placeholder ="Search for a city..." className="form-control"/>
                        <p><small><a href="#">Current Location</a></small></p>
                    </div>
                    <div className ="col-3">
                        <input type ="submit" value ="Search" className="btn btn-light"/>
                    </div>
                </div>
            </form>
            <div className="location-and-date">
                <h1>London</h1>
                <p><em>Last updated 11:43</em></p>
            </div> 
            <div class="current-weather">
                <div class="current-weather-icon-container">
                    <img src="01d.png" id="current-weather-icon" alt="" />
                 </div>
                <div class="current-weather-content-container">
                    <div class="current-temperature"><span id="temperature-value">20</span><span class="units"><a href="#" class="active" id="celsius-link">°C</a> | <a href="#" class="inactive" id="fahrenheit-link">°F</a></span> </div>
                    <div class="current-weather-description">Mostly Cloudy</div>
                </div>
            </div>
            <div className="current-weather-stats">
                <div class="Cloudiness">
                    <div class="label">
                        Clouds
                    </div>
                    <div class="image">
                        <img src="./cloud icon.png" alt=""/>
                    </div>
                    <div class="value" id="cloudiness-value">
                        20%
                    </div>
                </div>
                <div class="humidity">
                    <div class="label">
                        Humidity
                    </div>
                    <div class="image">
                        <img src="./humidity icon.png" alt=""/>
                    </div>
                    <div class="value" id="humidity-value">
                        80%
                    </div>
                </div>
                <div class="wind">
                    <div class="label">
                        Wind
                    </div>
                    <div class="image">
                        <img src="./wind icon.png" alt=""/>
                    </div>
                    <div class="value" id="wind-value">
                        40mph
                    </div>
                </div>
            </div>
        </div>
    )
}