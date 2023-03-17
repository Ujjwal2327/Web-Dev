const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');
const grantAccessContainer = document.querySelector('grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('loading-container')
const userInfoContainer = document.querySelector('user-info-container')

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add('current-tab');
getFromSessionStorage();


userTab.addEventListener('click', ()=>{
    switchTab(userTab);
})

searchTab.addEventListener('click', ()=>{
    switchTab(searchTab);
})

function switchTab(clickedTab){
    if(currentTab != clickedTab){
        currentTab.classList.remove('current-tab');
        currentTab = clickedTab
        currentTab.classList.add('current-tab');
        
        if(!searchForm.classList.contains('active')){       // search form container is invisible
            userInfoContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
            searchForm.classList.add('active');   
        }
        else{
            searchForm.classList.remove('active');
            userInfoContainer.classList.remove('active');
            // show user weather
            getFromSessionStorage();
        }
    }
}

// check if coordinates are already present in session storage
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem('user-coordinates');
    if(!localCoordinates){      // if not found
        grantAccessContainer.classList.add('active');
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {latitude, longitude} = coordinates;
    // make grant container invisible
    grantAccessContainer.classList.remove('active');

    loadingScreen.classList.add('active');
    
    // API call
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);        // for updating UI
    }
    catch(e){
        loadingScreen.classList.remove("active");
        // homework
    }
}

function renderWeatherInfo(weatherInfo){
    // first fetch all elements
    const cityname = document.querySelector('[data-cityName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temperature = document.querySelector('[data-temp]');
    const windSpeed = document.querySelector('[data-windSpeed]');
    const humidity = document.querySelector('[data-humidity]');
    const cloudiness = document.querySelector('[data-cloudiness]');

    // updating UI
    cityname.innerText =  weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x118/${weatherInfo?.sys?.country?.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temperature.innerText = `${weatherInfo?.main?.temp} °C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}`
    cloudiness.innerText = weatherIcon?.clouds?.all;   
}

const grantAccessBtn = document.querySelector('[data-grantAccess]')
grantAccessBtn.addEventListener('click', getLocation);

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // show an alert for no geolocation support available
    }
}

function showPosition(position){
    const userCoordinates = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    }

    sessionStorage.setItem('user-coordinates', JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const searchInput = document.querySelector('[data-searchInput]');
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(searchInput.value==="")
        return;
    else
        fetchSearchWeatherInfo(searchInput.value);
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add('active');
    userInfoContainer.classList.remove('active');
    grantAccessContainer.classList.remove('active');
    
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch(e){

    }
}