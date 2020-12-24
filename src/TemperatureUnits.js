import React, { useState } from "react";

export default function TemperatureUnits (props){
    const [unit, setUnit] = useState("celsius");


    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function setFahrenheit() {
        return ((props.celsius *9) / 5 + 32);
    }

    if (unit === "celsius") {
    return (
        <div className="TemperatureUnits current-temperature">
            <span id="temperature-value">
                {Math.round(props.celsius)}
            </span>
            <span className="units">
                °C | <a href="/" onClick={convertToFahrenheit}>°F</a>
            </span>
        </div>
    )
    } else{
        return(
        <div className="TemperatureUnits current-temperature">
            <span id="temperature-value">
                {Math.round(setFahrenheit())}
            </span>
            <span className="units">
                <a href="/" onClick={convertToCelsius}>°C</a> | °F
            </span>
        </div> 
        );
       
    }

}