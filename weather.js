const API_KEY = "7231ff857bebe0f13a7d21988e0c8018";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp};`
    });
    
}


function onGeoError(){
    alert("위치 정보를 찾을 수 없음")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


