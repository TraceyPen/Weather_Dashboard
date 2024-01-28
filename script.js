
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');



searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);

  var coordsURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchTerm + "&limit=1&appid=90a95552c0fa8f37656e8d048d51f371"
  fetch(coordsURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data))
       // $("#forecast").text(JSON.stringify(data));
       var latNumber = data.lat;
       console.log(latNumber);
       var lonNumber = data.lon;
       console.log(lonNumber);
      });




// api call for today's weather https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api call for 5 day forecast    api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 
//api request by city name        api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} 




//end of search button event listener
});









//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=90a95552c0fa8f37656e8d048d51f371"

// fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       $("#forecast").text(JSON.stringify(data));
//     });


