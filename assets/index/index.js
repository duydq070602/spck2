const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".info-wrapper .city-name");
const weatherState = document.querySelector(".info-wrapper .weather-state");
const weatherIcon = document.querySelector(".info-wrapper .weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.cod == "200"){
                cityName.innerHTML = data.name 
                weatherState.innerHTML = data.weather[0].description ;
                weatherIcon.src =
                    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                temperature.innerHTML = data.main.temp;
                    let unix_timestamp = data.sys.sunrise;
                    var date = new Date(unix_timestamp * 1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                sunrise.innerHTML = formattedTime;
                    let unix = data.sys.sunset;
                    var date = new Date(unix * 1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                sunset.innerHTML = formattedTime;
                humidity.innerHTML = data.main.humidity;
                windSpeed.innerHTML = data.wind.speed;
            }
            else{
                cityName.innerHTML = "City not found";
                weatherState.innerHTML = DEFAULT_VALUE;
                weatherIcon.src = `https://openweathermap.org/img/wn/01d@2x.png`;
                temperature.innerHTML = DEFAULT_VALUE;
                sunrise.innerHTML = DEFAULT_VALUE;
                sunset.innerHTML = DEFAULT_VALUE;
                humidity.innerHTML = DEFAULT_VALUE;
                windSpeed.innerHTML = DEFAULT_VALUE;
            }
            
        })
        .catch((err) => {
            console.log(err);
        });
});

