document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#searchCity').addEventListener('click', getCity);

    function getCity(){
        city = document.getElementById('city').value;
        console.log(city);
        let meteoCity = 'https://api.openweathermap.org/data/2.5/weather?q='+city+ '&appid=746c244e1e6c001b6a8197b506b12c22';
        fetch(meteoCity)
        .then(response => response.json())
        .then(data => {

         let obj = data;
         console.log(obj);
    
        //  document.queryselector(".widget").style.color = "blue";

         document.getElementById('cityName').innerHTML = obj.name + ', ' + obj.sys.country;
         document.getElementById('temperature').innerHTML = Math.floor(obj.main.temp -273.15) + ' ' + '°C';
        //  document.getElementById('description').innerHTML = obj.weather[2].description;

         document.getElementById('icon').src = 'http://openweathermap.org/img/wn/'+obj.weather[0].icon+'@2x.png';
         document.getElementById('min').innerHTML = 'Min:  ' + Math.floor(obj.main.temp_min -273.15) + ' '+ '°C';
         document.getElementById('max').innerHTML = 'Max:  ' + Math.floor(obj.main.temp_max -273.15) + ' '+ '°C';
         document.getElementById("widget").style.backgroundColor = "bisque";
         document.getElementById("current-weather-items").style.opacity = 0.8;
  
         
         document.getElementById('current-weather-items').innerHTML = 
         'Humidity:'+'  '+obj.main.humidity+' %'+'<br>Wind Speed:'+'  '+obj.wind.speed+' '+'Km/h'+'<br>Pressure:  '+obj.main.pressure+ ' hPa'

    }



    )}

document.querySelector('#searchCity').addEventListener('click', getForecast)

function getForecast(){
    city = document.getElementById('city').value;
    // console.log(city);
    let forecastCity = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=746c244e1e6c001b6a8197b506b12c22';
    fetch(forecastCity)
    .then(response => response.json())
    .then(dataFor => {

     let objFor = dataFor;
   
     console.log(objFor)

    new Date(data.list[i].dt * 1000).getDay()

        
     document.getElementById('dayone').innerHTML = objFor.list[9].dt_txt + Math.floor(objFor.list[9].main.temp -273.15)  + ' '+ '°C' + ' ' + objFor.list[9].weather[0].icon + ' '+objFor.list[25].weather[0].icon + ' ' + objFor.list[33].dt_txt;
     document.getElementById('icon-dayone').innerHTML = objFor.list[0].weather[1].icon;
    document.getElementById('date-dayone').innerHTML = objFor.list[8].dt_txt(toLocalDateString(undefined, options))
     document.getElementById('icon-dayone').src = 'http://openweathermap.org/img/wn/'+objFor.list[8].weather[0].icon+'@2x.png';
     document.getElementById('temp-one').innerHTML = Math.floor(objFor.list[8].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('date-daytwo').innerHTML = objFor.list[17].dt_txt
     document.getElementById('icon-daytwo').src = 'http://openweathermap.org/img/wn/'+objFor.list[17].weather[0].icon+'@2x.png';
     document.getElementById('temp-two').innerHTML = Math.floor(objFor.list[17].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('date-daythree').innerHTML = objFor.list[25].dt_txt
     document.getElementById('icon-daythree').src = 'http://openweathermap.org/img/wn/'+objFor.list[25].weather[0].icon+'@2x.png';
     document.getElementById('temp-three').innerHTML = Math.floor(objFor.list[25].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('date-dayfour').innerHTML = objFor.list[33].dt_txt
     document.getElementById('icon-dayfour').src = 'http://openweathermap.org/img/wn/'+objFor.list[33].weather[0].icon+'@2x.png';
     document.getElementById('temp-four').innerHTML = Math.floor(objFor.list[33].main.temp -273.15) + ' '+ '°C' ;


}

)}

    document.querySelector('#searchCity').addEventListener('click', getDate)

    function getDate(){
        dateHp = document.getElementById('city').value;
        console.log(dateHp)
    let homePageDate = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=746c244e1e6c001b6a8197b506b12c22';
    fetch(homePageDate)
    .then(weather => {
        return weather.json();
    }).then(displayResults)
    }
     
     let now = new Date();
     let date = document.querySelector('.location .date');
     date.innerText = dateBuilder(now);

      function displayResults (weather) {
        let cityHp = document.querySelector('.location .city');
        cityHp.innerText = `${weather.name}, ${weather.sys.country}`;
      
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);
      
     }
     function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      console.log(day)
        return `${day} ${date} ${month} ${year}`;
      }})  
