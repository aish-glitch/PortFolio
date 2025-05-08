import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('Mumbai');
  const [inputCity, setInputCity] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '889dfb30f39444fa77d8877150bcec41'; // Your OpenWeatherMap API key

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error('City not found or failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data); // Use full response from OpenWeatherMap
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setWeatherData(null); // Clear previous data on error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      controller.abort(); // Cleanup on city change or unmount
    };
  }, [city]);

  const handleSearch = () => {
    setCity(inputCity); // Set city when user searches
  };

  return (
    <div style={styles.container}>
      <h2>Weather Dashboard</h2>
      <div style={styles.inputSection}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && !loading && !error && (
        <div style={styles.weatherBox}>
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
        marginTop:'50px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#2c3e50', 
      color: '#ecf0f1', 
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      width: '100%',
      maxWidth: '600px',
      margin: 'auto',
    },
    inputSection: {
      marginBottom: '30px',
    },
    input: {
      padding: '10px 15px',
      fontSize: '16px',
      width: '70%',
      borderRadius: '5px',
      border: '1px solid #34495e', 
      outline: 'none',
      backgroundColor: '#34495e', 
      color: '#ecf0f1', 
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      border: '1px solid #1abc9c', 
      boxShadow: '0 0 10px rgba(26, 188, 156, 0.5)', 
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#16a085', 
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#1abc9c', 
    },
    weatherBox: {
      marginTop: '30px',
      backgroundColor: '#34495e', 
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      textAlign: 'left',
      border: '1px solid #2c3e50',
      width: '100%',
      maxWidth: '500px',
      margin: 'auto',
    },
    weatherTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1abc9c', 
    },
    weatherDetails: {
      fontSize: '18px',
      margin: '10px 0',
    },
    loading: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#e67e22', 
    },
    error: {
      color: '#e74c3c', 
      fontSize: '18px',
    },
  };
  

export default Weather;
