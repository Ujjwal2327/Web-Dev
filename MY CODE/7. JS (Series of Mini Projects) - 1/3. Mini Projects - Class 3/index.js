console.log('Hello Jee');

// https://openweathermap.org/current
// https://home.openweathermap.org/api_keys
//  d743cd389f791d52185d5e3c94e449c6
const API_KEY = "d743cd389f791d52185d5e3c94e449c6";

// for updating UI
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    // let latitude = 15.333;
    // let longitude = 74.333;
    try{    
        let city = 'goa';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        // console.log("weather data-> " , data);

        renderWeatherInfo(data);        // for updating UI
    }
    catch(e){
        console.log("Errror Found- " , e);
    }
}

async function getCustomWeatherDetails() {
    try{
        let latitude = 17.6333;
        let longitude = 18.3333;
    
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        // console.log(data);
        renderWeatherInfo(data);
    }
    catch(err) {
        console.log("Errror Found Bro" , err);
    }
    
}


function getLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let longi = position.coords.longitude;
        console.log(lat, longi);
        console.log(position);
    });
}

fetchWeatherDetails();
getCustomWeatherDetails();
getLocation();