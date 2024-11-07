import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

const api_key = import.meta.env.VITE_SOME_KEY
function App() {
  const [city, setCity] = useState('Phillaur')
  const [weatherDetails, setWeatherDetails] = useState(null)


  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        setWeatherDetails(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };
    fetchWeather();
  }, []);

  return <>

    {
      weatherDetails ?
        <h1>{weatherDetails.wind.speed}</h1>
        : null

    }
  </>

}

export default App
