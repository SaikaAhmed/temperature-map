//  const api = {
//      key: '1356e08a4c818f27755ccd6f0a1798b0',
//      base: 'https://api.openweathermap.org/data/2.5/'
//  }
  
const inputCity = document.getElementById('inputValue');
const cityName = document.getElementById('city');
const temperature = document.getElementById('temp');
const lead = document.getElementById('lead');
document.getElementById('search-btn').addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputCity.value +'&units=metric &appid=1356e08a4c818f27755ccd6f0a1798b0')
    .then(response => response.json())
    .then(data =>{
        const city_name = data['name'];
        const temp = data['main']['temp'];
        const temp_celcius = Math.floor(temp - 273.15);
        const weather = data['weather'][0]['main'];

        cityName.innerText = city_name;
        temperature.innerText = temp_celcius;
        lead.innerText = weather;
        inputCity.value = "";
        const iconCode = data.weather[0].icon;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(error => alert("Oops!!city name is not found"));


   

});















//  const appId = '1356e08a4c818f27755ccd6f0a1798b0';

// document.getElementById('searchBtn').addEventListener('click', function(){
//     const city = document.getElementById('cityName').value;
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}')
//     .then( res => res.json())
//     .then(data => {
//       getAllInfo(data) ;
//     })
// })

// function getAllInfo(data){
//     console.log(data);
//     document.getElementById('city').innerText = data.name;

//     document.getElementById('temperature').innerText = Math.round(data.main.temp - 273.15);

//     document.getElementById('lead').innerText = data.weather[0].main;

//     const iconCode = data.weather[0].icon;
//     const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
//     document.getElementById('icon').src = iconUrl;
// }