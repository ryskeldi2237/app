import React, { useState } from "react";
import axios from "axios";

const api = {
  key: "8c430bce653d579a55a0dd94b5f476fd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState(null);
  const [nweather, setNweather] = useState(null);
  const [city, setCity] = useState(null);

  const getWeatherIconUrl = (weatherMain) => {
    switch (weatherMain) {
      case "Clouds":
        return "cloudy";
      case "Clear":
        return "clear";
      case "Rain":
        return "rain";
      default:
        return "snow";
    }
  };

  const getValue = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${api.base}forecast?q=${value}&lang=ru&units=metric&APPID=${api.key}`
      );
      if (response.data.cod !== "404") {
        setCity(response.data.city);
        const day = response.data.list.filter((reading) =>
          reading.dt_txt.includes("12:00:00")
        );
        const night = response.data.list.filter((reading) =>
          reading.dt_txt.includes("00:00:00")
        );
        setWeather(day);
        setNweather(night);
        setValue("");
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const nightWeather = (i) => {
    const nightItem = nweather.find((item, index) => index === i);
    return nightItem ? Math.round(nightItem.main.temp) : null;
  };

  const dateBuilder = (el) => {
    const ms = el.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString("en", { weekday: "long" });
    return weekdayName;
  };

  const getDat = (elem) => {
    const ms = elem.dt * 1000;
    const day = new Date(ms).getDate();
    const month = new Date(ms).getMonth();
    const year = new Date(ms).getFullYear();
    return `${day}.${month < 10 ? `0${month + 1}` : month + 1}.${year}`;
  };

  return (
    <div>
      <div className="hero">
        <div className="container">
          <form action="#" className="find-location">
            <input
              type="text"
              placeholder="Find your location..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button onClick={getValue}>Find</button>
          </form>
        </div>
      </div>
      {weather && (
        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">
              <div className="today forecast">
                <div className="forecast-header">
                  <div className="day">
                    {weather && dateBuilder(weather[0])}
                  </div>
                  <div className="date">{getDat(weather[0])}</div>
                </div>
                <div className="forecast-content">
                  <div className="location">{city.name}</div>
                  <div className="degree">
                    <div className="num">
                      {Math.round(weather[0].main.temp)}
                      <sup>o</sup>C
                    </div>
                    <div className="forecast-icon">
                      <img
                        src={`assets/images/icons/${getWeatherIconUrl(
                          weather[0].weather[0].main
                        )}.svg`}
                        alt="img"
                        className="forecast-img"
                      ></img>
                    </div>
                  </div>
                  <span>
                    <img
                      src="assets/images/icon-umberella.png"
                      alt="images"
                    ></img>
                    {weather[0].main.humidity}%
                  </span>
                  <span>
                    <img src="assets/images/icon-wind.png" alt="images"></img>
                    {Math.round(weather[0].wind.speed)}km/h
                  </span>
                </div>
              </div>
              {weather.map((item, i) => {
                if (i !== 0) {
                  return (
                    <div className="forecast" key={`${item}_${i}`}>
                      <div className="forecast-header">
                        <div className="day">{dateBuilder(item)}</div>
                      </div>
                      <div className="forecast-content">
                        <div className="forecast-icon">
                          <img
                            src={`assets/images/icons/${getWeatherIconUrl(
                              item.weather[0].main
                            )}.svg`}
                            alt="img"
                            className="forecast-icon"
                          ></img>
                        </div>
                        <div className="degree">
                          {Math.round(item.main.temp)}
                          <sup>o</sup>C
                        </div>
                        <small>
                          {nweather && nightWeather(i)}
                          <sup>o</sup>
                        </small>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
