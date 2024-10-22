import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import { setWeatherData, setError } from '../redux/weatherSlice';


const Weather = () => {
  const [city, setCity] = useState('');
  const [radio1, setRadio1] = useState(true);
  const [radio2, setRadio2] = useState(false);
  
  const [zip, setZip] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city ? city : zip}&APPID=a6a712cdf95cc30dddca2f7188b8509a`)
      .then((data) => {
        dispatch(setWeatherData(data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError());
      });
  };

  const handleZip = (e) => {
    setZip(e.target.value);
    setCity('');
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setZip('');
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <label style={{ margin: "10px" }} htmlFor="city-input">Enter a city:</label>
        <input type="radio" checked={radio1} onClick={() => { setRadio1(true); setRadio2(false); }} style={{ margin: "10px" }} />
        <label style={{ margin: "10px" }} htmlFor="city-input">Enter a zipcode:</label>
        <input type="radio" checked={radio2} onClick={() => { setRadio2(true); setRadio1(false); }} style={{ margin: "10px" }} />
        {!radio1 ?
          <input style={{ margin: "10px" }} type='number' id="city-input" value={zip} onChange={handleZip} /> :
          <input style={{ margin: "10px" }} type='text' id="city-input" value={city} onChange={handleCity} />
        }
        <Button style={{ margin: "10px" }} type="submit">Get weather</Button>
      </Form>
      <WeatherDisplay />
    </div>
  );
}

export default Weather;
