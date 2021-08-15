import React, { useState } from 'react'

const api = {
    key : '8c430bce653d579a55a0dd94b5f476fd',
    base : 'https://api.openweathermap.org/data/2.5/'
}
function Weather() {
	const [value, setValue] = useState(null);
	const [weather, setWeather] = useState(null);
	const [nweather, setNweather] = useState(null);
	const [city, setCity] = useState(null);
	const getValue = async(e) => {
		e.preventDefault();
		const api_call = await fetch(`${api.base}forecast?q=${value}&lang=ru&units=metric&APPID=${api.key}`) 
		const response = await api_call.json()
		if(response.cod !== '404'){
			console.log(response)
			setCity(response)
			const day = response.list.filter(reading => reading.dt_txt.includes("12:00:00"));
			const night = response.list.filter(reading => reading.dt_txt.includes("00:00:00"));
			setWeather(day)
			setNweather(night)
			setValue('')
		}else{
			console.error('error')
		}
	}
	function dateBuilder(el){
			const ms =  el.dt * 1000;;
			const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});
		 	return weekdayName
	}
	function nightWeather(i){
		let result;
		nweather.map((item, index) => {
			if(index === i){
				result = item.main.temp
			}
		})
		return Math.round(result)
	}
	function getDat(elem){
		const ms =  elem.dt * 1000;;
			const day = new Date(ms).getDate()
			const month = new Date(ms).getMonth()
			const year = new Date(ms).getFullYear()
			return `${day}.${month < 10 ? `0${month+1}` : month+1}.${year}`
	}
    return (
        <div>
			<div className="hero">
				<div className="container">
					<form action="#" className="find-location">
						<input type="text" placeholder="Find your location..." value={value} onChange={(e) => setValue(e.target.value)}></input>
						<button onClick={getValue}>Find</button>
					</form>
				</div>
			</div>
			{
				weather &&
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
								<div className="location">{city.city.name}</div>
								<div className="degree">
									<div className="num">{Math.round(weather[0].main.temp)}<sup>o</sup>C</div>
									<div className="forecast-icon">
										<img src={`assets/images/icons/${weather[0].weather[0].main === 'Clouds' ? 'cloudy': weather[0].weather[0].main === 'Clear' ? 'clear': weather[0].weather[0].main === 'Rain' ? 'rain' : 'snow'}.svg`} alt="img" className="forecast-img"></img>
									</div>	
								</div>
								<span><img src="assets/images/icon-umberella.png" alt="images"></img>{weather[0].main.humidity}%</span>
								<span><img src="assets/images/icon-wind.png" alt="images"></img>{Math.round(weather[0].wind.speed)}km/h</span>
							</div>
						</div>
						{
							weather.map((item, i) => {
								if(i !== 0){
									return(
										<div className="forecast" key={`${item}_${i}`}>
											<div className="forecast-header">
												<div className="day">{dateBuilder(item)}</div>
											</div>
											<div className="forecast-content">
												<div className="forecast-icon">
													<img src={`assets/images/icons/${item.weather[0].main === 'Clouds' ? 'cloudy': item.weather[0].main === 'Clear' ? 'clear':item.weather[0].main === 'Rain' ? 'rain' : 'snow'}.svg`} alt="img" className="forecast-icon"></img>
												</div>
												<div className="degree">{Math.round(item.main.temp)}<sup>o</sup>C</div>
												<small>{nweather && nightWeather(i)}<sup>o</sup></small>
											</div>
										</div>
									)
								}
							})
						}
					</div>
				</div>
			</div>
			} 
		</div>
    )
}

export default Weather
