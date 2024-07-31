import React from 'react'

function WeatherDisplay({Data}) {
    const {temperature, conditions} = Data;

    const temperatureStyle ={
        color: temperature > 20 ? 'red' : 'blue',
    };

  return (
    <div>
      <h1 style={temperatureStyle}>Temperature: {temperature}</h1>
      <p>Conditions: {conditions}</p>
    </div>
  )
}

export default WeatherDisplay
