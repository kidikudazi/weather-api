const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const state = 'kwara';

let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");

let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + state + "&appid="+appKey;
httpRequestAsync(searchLink, theResponse);

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°C"+" / "+jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}