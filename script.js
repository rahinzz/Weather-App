const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fbc4bbfe95msh1bac0860e982befp19f7fejsn3c019a2eceb2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    
	.then(response => response.json())
	.then(response => 
        {
            console.log(response)
    
           
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            cloud_pct.innerHTML = response.cloud_pct
        }
    )
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai', options)
    .then(response => response.json())
    .then(response => 
        {
            console.log(response)

            shangai_cloud_pct.innerHTML = response.cloud_pct
            shangai_feels_like.innerHTML = response.feels_like
            shangai_humidity.innerHTML = response.humidity
            shangai_max_temp.innerHTML = response.max_temp
            shangai_min_temp.innerHTML = response.min_temp
            shangai_sunrise.innerHTML = response.sunrise
            shangai_sunset.innerHTML = response.sunset
            shangai_temp.innerHTML = response.temp
            shangai_wind_degrees.innerHTML = response.wind_degrees
            shangai_wind_speed.innerHTML = response.wind_speed
        }   
    )

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then(response => 
        {
            console.log(response)

            boston_cloud_pct.innerHTML = response.cloud_pct
            boston_feels_like.innerHTML = response.feels_like
            boston_humidity.innerHTML = response.humidity
            boston_max_temp.innerHTML = response.max_temp
            boston_min_temp.innerHTML = response.min_temp
            boston_sunrise.innerHTML = response.sunrise
            boston_sunset.innerHTML = response.sunset
            boston_temp.innerHTML = response.temp
            boston_wind_degrees.innerHTML = response.wind_degrees
            boston_wind_speed.innerHTML = response.wind_speed
        }   
    )

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => 
        {
            console.log(response)

            lucknow_cloud_pct.innerHTML = response.cloud_pct
            lucknow_feels_like.innerHTML = response.feels_like
            lucknow_humidity.innerHTML = response.humidity
            lucknow_max_temp.innerHTML = response.max_temp
            lucknow_min_temp.innerHTML = response.min_temp
            lucknow_sunrise.innerHTML = response.sunrise
            lucknow_sunset.innerHTML = response.sunset
            lucknow_temp.innerHTML = response.temp
            lucknow_wind_degrees.innerHTML = response.wind_degrees
            lucknow_wind_speed.innerHTML = response.wind_speed
        }   
    )

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => 
        {
            console.log(response)

            kolkata_cloud_pct.innerHTML = response.cloud_pct
            kolkata_feels_like.innerHTML = response.feels_like
            kolkata_humidity.innerHTML = response.humidity
            kolkata_max_temp.innerHTML = response.max_temp
            kolkata_min_temp.innerHTML = response.min_temp
            kolkata_sunrise.innerHTML = response.sunrise
            kolkata_sunset.innerHTML = response.sunset
            kolkata_temp.innerHTML = response.temp
            kolkata_wind_degrees.innerHTML = response.wind_degrees
            kolkata_wind_speed.innerHTML = response.wind_speed
        }   
    )


	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Bhuj")