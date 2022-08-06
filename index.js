let weather = {
    apiKey: "02ce024d35638e85841dc0d52624ccb1",
    fetchWeather: function (city, ccCode) {
       fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" 
           + city
           + ","
           + ccCode
           + "&units=metric&appid=" 
           + this.apiKey)
       .then((response) => response.json())
       .then((data) => this.displayWeather(data));
   
       },
       displayWeather: function(data) {
           const {name} = data;
           const {icon, description} = data.weather[0];
           const {temp, humidity} = data.main;
           const {speed} = data.wind;
           
           document.querySelector(".city").innerText = "Weather in" + " " + name;
           document.querySelector(".icon").src =  "http://openweathermap.org/img/wn/" + icon + ".png";
           document.querySelector(".description").innerText = description;
           document.querySelector(".temp").innerText = temp + "°C" ;
           document.querySelector(".humidity").innerText = "Humidity:" + " " + humidity +  "%";
           document.querySelector(".wind").innerText = "wind speed:"+ " " + speed  +  " km/h";
           document.querySelector(".weather").classList.remove("loading");
           
           switch(description) {

            case "clear sky" :
            document.body.style.backgroundImage = "url('images/pictures/clear sky.jpg')";
            break;
            
            case "clouds" : case "few clouds" : case "scattered clouds" : case "broken clouds" : case "overcast clouds" :
            document.body.style.backgroundImage = "url('images/pictures/clouds.jpg')";
            break;

            case "mist": case "smoke" : case "haze" : case "fog" :
                document.body.style.backgroundImage = "url('images/pictures/haze.jpg')";
            break;

            case "sand/ dust whirls" : case "sand" : case "dust":
                document.body.style.backgroundImage = "url('images/pictures/sand.jpg')";
            break;

            case "volcanic ash":
                document.body.style.backgroundImage = "url('images/pictures/volcanic ash.jpg')";
            break;

            case "squalls":
                document.body.style.backgroundImage = "url('images/pictures/squalls.jpg')";
            break;

           case "tornado" :
                document.body.style.backgroundImage = "url('images/pictures/tornado.jpg')";
            break;

            case "light rain": case "moderate rain": case "heavy intensity rain" : case "very heavy rain": case "extreme rain" : case "freezing rain" : case "light intensity shower rain" : case "shower rain" : case "heavy intensity shower rain" : case "ragged shower rain":
                document.body.style.backgroundImage = "url('images/pictures/rain.jpg')";
            break;

            case "light snow": case "Snow" : case "Heavy snow" : case "Sleet" : case "Light shower sleet" : case "Shower sleet" : case "Light rain and snow" : case "Rain and snow" : case "Light shower snow" : case "Shower snow" : case "Heavy shower snow" :
                document.body.style.backgroundImage = "url('images/pictures/snowfall.jpg')";
            break;

            case "light intensity drizzle": case "drizzle" : case "heavy intensity drizzle" : case "light intensity drizzle rain" : case "drizzle rain" : case "heavy intensity drizzle rain" : case "shower rain and drizzle" : case "heavy shower rain and drizzle" : case "shower drizzle" :
                document.body.style.backgroundImage = "url('images/pictures/drizzel.jpg')";
            break;

            case "thunderstorm with light rain": case "thunderstorm with rain" : case "thunderstorm with heavy rain" : case "light thunderstorm" : case "thunderstorm" : case "heavy thunderstorm" : case "ragged thunderstorm" : case "thunderstorm with light drizzle" : case "thunderstorm with drizzle" : case "thunderstorm with heavy drizzle" :
                document.body.style.backgroundImage = "url('images/pictures/thunderstorm.jpg')";
            break;
            

           }
           
       },
   
       search: function() {
           this.fetchWeather(document.querySelector(".search-bar").value);
           
           
       }    
   };
   
   document.querySelector(".search button").addEventListener("click", function() {
       weather.search();  
      
   } );
   

   document.querySelector(".search-bar").addEventListener("keypress", function(event) {
       if (event.keyCode === 13) {
           weather.search();
       }
   
   })