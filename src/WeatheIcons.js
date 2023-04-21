import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default WeatherIcons() 

let WeatherIcon = ({ 
    ReactAnimatedWeatherIcons  }) => {
    return (
      <WeatherIcon
        name={
            ReactAnimatedWeatherIcons  }
        size="4x"
        animated={true}
      />
    );
  };
  
{   
 ReactAnimatedWeatherIcons  = {
    animate: true,
    size: 64,
    color: 'black'
  };
   
  ReactAnimatedWeatherIcons  = {
    icon: PropTypes.oneOf([
      'CLEAR_DAY',
      'CLEAR_NIGHT',
      'PARTLY_CLOUDY_DAY',
      'PARTLY_CLOUDY_NIGHT',
      'CLOUDY',
      'RAIN',
      'SLEET',
      'SNOW',
      'WIND',
      'FOG'
    ]).isRequired,
    animate: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string
  };
}