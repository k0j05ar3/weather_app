console.log("Starting weather app..."); // used to make sure code is running

// variables ⬇
const city_name = document.querySelector("#cityName"); // shows the user the city name for pulled result
const input = document.querySelector("#cityInput"); // where the user inputs the city they're looking for
const weather_visual = document.querySelector("#weatherIcon"); // where the weather icon will be displayed
const weather_temp = document.querySelector("#temperature") // city weather temperature
const pull_date = document.querySelector("#date"); // date of the pulled weather data
const search_btn = document.querySelector("#searchBtn"); // button to search for the city weather
const icons = document.querySelector("#weatherIcon");
const api_key = '4040427e106a4df6b39213913260107';
// **


async function getWeather(city_a) { // this pulls the data
    
    try {
        const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_a}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        updatePage(data);
    } catch (error) {
        console.log("Error:", error.message);
        alert("Error. Please check city name");
    }
    
    
    
    
}

search_btn.addEventListener("click", () => { 
    console.log("search btn clicked")
    let city = input.value;
    console.log(`City is ${city}`); // double check city input 
    getWeather(city);
})

function updatePage(data) {
    city_name.textContent = `${data.location.name}, ${data.location.region}`; 
    weather_temp.textContent = `${data.current.temp_f}°F`;
    pull_date.textContent = `${data.current.last_updated}`;
    icons.src = data.current.condition.icon;
}