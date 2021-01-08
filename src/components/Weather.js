import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({apiResult}) => {

  const {name, main} = apiResult

  if (!name || !main) return null

  // Transform Kelvin into Celsius
  const kelvin = 273.15

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name} is: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(0)}
          <span> &#x2103; </span>
        </p>
        <p>Max. temperature: &nbsp;
          {parseFloat(main.temp_max - kelvin, 10).toFixed(0)}
          <span> &#x2103; </span>
        </p>
        <p>Min. temperature: &nbsp;
          {parseFloat(main.temp_min - kelvin, 10).toFixed(0)}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  )
}

Weather.propTypes = {
  apiResult: PropTypes.object.isRequired
}

export default Weather
