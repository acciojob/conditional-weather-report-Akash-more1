import React from 'react'

function WeatherDisplay({Data}) {
    const {temperature, conditions} = Data;

    const temperatureStyle ={
        color: temperature > 20 ? 'red' : 'blue',
    };

  return (
    <div>
      <p >  <span style={temperatureStyle}> Temperature: {temperature}</span>  </p>
      <span>Conditions: {conditions}</span>
    </div>
  )
}

export default WeatherDisplay
