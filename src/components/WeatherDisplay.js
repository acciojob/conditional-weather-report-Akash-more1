import React from 'react'

function WeatherDisplay({Data}) {
    const {temperature, conditions} = Data;

    const temperatureStyle ={
        color: temperature > 20 ? 'red' : 'blue',
    };

  return (
    <div>
      <span style={temperatureStyle}>Temperature: {temperature}</span>
      <span>Conditions: {conditions}</span>
    </div>
  )
}

export default WeatherDisplay
