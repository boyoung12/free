const Api_key = "9a78fc528a9ba5c94a0287489b8f5909";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${Api_key}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}c`;
    });
}

function onGeoError(){
    alert("can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);