
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

var latNumber
var lonNumber
var countryName
var stateName
var mainWeather
var temp
var wind
var humidity


searchButton.addEventListener('click', function() {
  lonNumber = ""
  latNumber = ""
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);

  var coordsURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchTerm + "&limit=1&appid=90a95552c0fa8f37656e8d048d51f371";

      fetch(coordsURL)
      .then(function (response) {
         return response.json();
      })
      .then (function (data) {
        console.log(JSON.stringify(data))
       
       latNumber = data[0].lat;
       console.log(latNumber);
       lonNumber = data[0].lon;
       console.log(lonNumber);
       countryName = data[0].country;
       console.log(countryName);
       stateName = data[0].state;
       console.log(stateName);


       //if statement pausing the code until latNumber and lonNumber are not empty strings
       if (lonNumber === !"" && latNumber === !"");
       var todayURL = "https://api.openweathermap.org/data/2.5/weather?lat="+latNumber+"&lon="+lonNumber+"&appid=90a95552c0fa8f37656e8d048d51f371"
       // var todayURL = "https://api.openweathermap.org/data/2.5/weather?lat=52.4796992&lon=-1.9026911&appid=90a95552c0fa8f37656e8d048d51f371"
         fetch(todayURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(JSON.stringify(data))
             
              mainWeather = data[1].main;
              console.log(mainWeather);// WORKING ON THIS BIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              // temp = data[0].lon;
              // console.log(lonNumber);
              // wind = data[0].country;
              // console.log(countryName);
              // humidity = data[0].state;
              // console.log(stateName);
            });





      });

      //------------------------------------------------------------------------------------------------------------

//if (lonNumber === !"" && latNumber === !"");
      
// api call for today's weather https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


   



});












// api call for 5 day forecast    api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 
//api request by city name        api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} 




//end of search button event listener










//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=90a95552c0fa8f37656e8d048d51f371"

// fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       $("#forecast").text(JSON.stringify(data));
//     });


