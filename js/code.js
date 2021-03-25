
// let villeChoisie;

// let changerDeVille = document.querySelector('#change');
// changerDeVille.addEventListener('click', () => {
//   villeChoisie = prompt('Quelle ville souhaitez-vous voir ?') || 'saint-jean-de-luz';
//   recevoirTemperature(villeChoisie);
// });

// if('geolocation' in navigator) {
//   let options = {
//     enableHighAccuracy: true
//   }

//   navigator.geolocation.watchPosition((position) => {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
//     + position.coords.latitude + '&lon='
//     + position.coords.longitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

//     console.log(url);


//     let requete = new XMLHttpRequest();
//     requete.open('GET', url);
//     requete.responseType = 'json';
//     requete.send();

//     requete.onload = function() {
//       if(requete.readyState === XMLHttpRequest.DONE) {
//         if(requete.status === 200) {
//           let reponse = requete.response;
//           let temperature = reponse.main.temp;
//           let weather = reponse.weather[0].main;
//           let city = reponse.name;
//           document.querySelector('#temperature_label').textContent = temperature;
//           document.querySelector('#weather_label').textContent = weather;
//           document.querySelector('#city').textContent = city;
          
//         }
//       }
//     }
//   }, error, options);

//   function error() {
//     villeChoisie = 'Paris';
//     recevoirTemperature(villeChoisie);
//   }

// } else {
//   villeChoisie = 'paris';
//   recevoirTemperature(villeChoisie);
// }


// function recevoirTemperature(ville) {
//   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

//   let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
//   requete.open('GET', url); // Nous récupérons juste des données
//   requete.responseType = 'json'; // Nous attendons du JSON
//   requete.send(); // Nous envoyons notre requête

//   // Dès qu'on reçoit une réponse, cette fonction est executée
//   requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         // console.log(reponse);
//         let temperature = reponse.main.temp;
//         let ville       = reponse.name;
//         // console.log(temperature);
//         document.querySelector('#temperature_label').textContent = temperature;
//         document.querySelector('#city').textContent = ville;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
//   }
// }


// // TODO : Review with fetch
// let city = document.querySelector('#city');
// let temperature = document.querySelector('#temperature');
// let weather = document.querySelector('#weather');

// let villeChoisie;

// let changerDeVille = document.querySelector('#change');
// changerDeVille.addEventListener('click', () => {
//   villeChoisie = prompt('Quelle ville souhaitez-vous voir ?') || 'saint-jean-de-luz';
//   recevoirTemperature(villeChoisie);
// });

// function recevoirTemperature(ville) {
//   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

//   fetch(url)
//   .then(response => response.json())
//   .then(response => {
//     city.innerHTML = response.name;
//     temperature.innerHTML = response.main.temp + '°C';
//     weather.innerHTML = response.weather[0].main;
//   })
//   .catch(error => console.log(error))
// }

// if('geolocation' in navigator) {
//   let options = {
//     enableHighAccuracy: true
//   }

//   navigator.geolocation.watchPosition((position) => {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
//     + position.coords.latitude + '&lon='
//     + position.coords.longitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

//     fetch(url)
//     .then(response => response.json())
//     .then(response => {
//       city.innerHTML = response.name;
//       temperature.innerHTML = response.main.temp + '°C';
//       weather.innerHTML = response.weather[0].main;
//     })
//     .catch(error => console.log(error))

//   }, error, options);

//   function error() {
//     villeChoisie = 'Paris';
//     recevoirTemperature(villeChoisie);
//   }

// } else {
//   villeChoisie = 'paris';
//   recevoirTemperature(villeChoisie);
// }


// Map Meteo
// const arrCity = [];
{/* <div id="container">
<img id="map-meteo" src="./assets/map.png" alt="Map world">
</div> */}

//  class City {
//    constructor(name) {
//     this.name = name;
//     this.temperature = this.recevoirTemperature(this.name);
//     this.weather = this.recevoirTemperature(this.name);
//     this.informations;
//     this.pushArray();
//    }

//   async recevoirTemperature(ville) {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

//     const response = await fetch(url)
//     .then(response => response.json())
//     .then(response => {
//       this.temperature = response.main.temp + '°C';
//       this.weather = response.weather[0].main;
//       return [this.temperature, this.weather];
//     })
//     .catch(error => console.log(error))

//     return response;
//   }

//   pushArray() {
//     arrCity.push(this);
//   }
//  }

//  paris = new City('Paris');
//  newYork = new City('New York');
//  dublin = new City('Dublin');

// console.log('arrCity',arrCity);

// arrCity.forEach(function (city, index) {
//   console.log('city', typeof city, 'index ' + index, city);
//   for(let item in city) {
//     console.log(`${city[item]}`)
//   }
  
// })

// New test map

// Meteo France
// France
const mymap = L.map('mapid').setView([46.52, 2.19], 5.4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
{
    attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 18,
    minZoom: 1,
    tileSize: 512,
    zoomOffset: -1,
    id: 'mapbox/light-v10'
}).addTo(mymap);

// Add Marker
var test = L.marker([48.8534, 2.3488]).addTo(mymap);
test.bindPopup("<b>Meteo</b><br>I am a popup.").openPopup();

function postionMapInfos(latitude, longitude, contentPop) {
  const marker = L.marker([parseFloat(latitude), parseFloat(longitude)]).addTo(mymap);
  marker.bindPopup(contentPop).openPopup();
}

let arrayCities = ['Paris', 'New York', 'Dublin', 'Marseille', 'Havana', 'Biarritz', 'Sydney', 'Hanoi', 'Nice'];
let container = document.querySelector('#container');

let city;

let btnMeteo = document.querySelector('#meteo');
btnMeteo.addEventListener('click', () => {
  city = prompt('Which city do you want to see?') || 'paris';
  arrayCities.push(city);
  recevoirTemperature(city);
});

// Illustrations
// src https://codepen.io/getreworked/pen/GpBpmg
const sunshine = `
  <svg class="meteo-illustration sunshine" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <title>Sunshine</title>
    <path class="sun-full" d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z M256,336
        c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
    <path class="sun-ray-eight" d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
        C147.9,351.6,137.8,351.6,131.6,357.8z" />
    <path class="sun-ray-seven" d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
    <path class="sun-ray-six" d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
        s6.2-16.4,0-22.6L380.5,357.8z" />
    <path class="sun-ray-five" d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
    <path class="sun-ray-four" d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
        C364.1,160.4,374.2,160.4,380.4,154.2z" />
    <path class="sun-ray-three" d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
    <path class="sun-ray-two" d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
    <path class="sun-ray-one" d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
  </svg>
`

const windycloud = `
  <svg class="meteo-illustration windy-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <title>Windy Cloud</title>
    <g class="cloud-wrap">
    <path class="cloud" d="M417,166.1c-24-24.5-57.1-38.8-91.7-38.8c-34.6,0-67.7,14.2-91.7,38.8c-52.8,2.5-95,46.2-95,99.6
    c0,55,44.7,99.7,99.7,99.7c5.8,0,11.6-0.5,17.3-1.5c20.7,13.5,44.9,20.9,69.7,20.9c24.9,0,49.1-7.3,69.8-20.9
    c5.7,1,11.5,1.5,17.3,1.5c54.9,0,99.6-44.7,99.6-99.7C512,212.3,469.8,168.5,417,166.1z M412.4,333.3c-8.3,0-16.4-1.5-24-4.4
    c-17.5,15.2-39.8,23.8-63.1,23.8c-23.2,0-45.5-8.5-63-23.8c-7.6,2.9-15.8,4.4-24,4.4c-37.3,0-67.7-30.4-67.7-67.7
    c0-37.3,30.4-67.7,67.7-67.7c3.2,0,6.4,0.2,9.5,0.7c18.1-24.6,46.5-39.4,77.5-39.4c30.9,0,59.4,14.8,77.5,39.4
    c3.1-0.5,6.3-0.7,9.6-0.7c37.3,0,67.6,30.4,67.6,67.7C480,303,449.7,333.3,412.4,333.3z" />
    </g>
    <path class="wind-three" d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
    <path class="wind-two" d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
    <path class="wind-one" d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
  </svg>
`

const rainclound = `
  <svg class="meteo-illustration rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <title>Rain Cloud</title>
    <path class="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
    <path class="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
    <path class="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
    <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
    C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
    c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z M400,256c-17.1,0-32.9-5.5-45.9-14.7
    C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
    c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
    S444.2,256,400,256z" />
  </svg>
`

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  fetch(url)
  .then(response => response.json())
  .then(response => {
    console.log('response',response);

    let illustration;
    switch(response.weather[0].main) {
      case 'Clear':
        illustration = sunshine;
        break;
      case 'Clouds':
        illustration = windycloud;
        break;
      case 'Drizzle':
        illustration = rainclound;
    }
    contentPop = `
    <div class="city" id="bloc-${response.name}" data-lat="${response.coord.lat}" data-lon="${response.coord.lon}">
      <span>${response.name}</span> - <span class="temperature">${response.main.temp}  °C</span>
      <p class="weatther-illu">${illustration}</p>
    </div>
  `

    postionMapInfos(response.coord.lat, response.coord.lon, contentPop);
  })
  .catch(error => console.log(error))
}

for (let city of arrayCities) {
  recevoirTemperature(city);
}



