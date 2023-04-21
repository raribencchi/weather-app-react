import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default WeatherIcons()
    let WeatherIcons = ({ 
        ReactAnimatedWeatherIcons  }) => {
        return (
          <WeatherIcons
            name={
                ReactAnimatedWeatherIcons}
            size="64"
            animated={true}
            color = "black"
          />
        );
      };
      
    {   
    let ReactAnimatedWeatherIcons,PropTypes = {
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