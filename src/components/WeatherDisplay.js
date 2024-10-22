import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


// Helper function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
  return ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
};

const WeatherDisplay = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  if (error) {
    return <h5>City not found</h5>;
  }

  return (
    <div>
      {weatherData ? (
        <div>
          <h3 style={{ color: 'greenyellow', marginTop: '2rem' }}>Weather for {weatherData.name}</h3>
          <Row lg={12} style={{ marginTop: '3rem' }}>
            <Col lg={2}>
              <h6><strong>Temperature</strong></h6>
            </Col>
            <Col lg={2}>
              <h6><strong>Pressure</strong></h6>
            </Col>
            <Col lg={2}>
              <h6><strong>Humidity</strong></h6>
            </Col>
            <Col lg={2}>
              <h6><strong>Co-ordination</strong></h6>
            </Col>
            <Col lg={2}>
              <h6><strong>Wind Speed</strong></h6>
            </Col>
            <Col lg={2}>
              <h6><strong>Wind Degree</strong></h6>
            </Col>
          </Row>
          <Row lg={12}>
            <Col lg={2}>
            <p>{kelvinToFahrenheit(weatherData.main.temp)}°F</p>
            </Col>
            <Col lg={2}>
              <p>{weatherData.main.pressure} hPa</p>
            </Col>
            <Col lg={2}>
              <p>{weatherData.main.humidity}%</p>
            </Col>
            <Col lg={2}>
              <p>{weatherData.coord.lon}, {weatherData.coord.lat}</p>
            </Col>
            <Col lg={2}>
              <p>{weatherData.wind.speed} km/h</p>
            </Col>
            <Col lg={2}>
              <p>{weatherData.wind.deg}°</p>
            </Col>
          </Row>
        </div>
      ) : (
        <p>No weather data to display</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
