// api key to openweathermap.org is: 8676a4304fa315cb8f1db61a8c963d0b
//latitude: 30.18194517215717 or 30.18
//longitude: -98.3737838276627 or -98.37

//example api call to one-call
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//working api call to one-call at openweathermap.org, exclude minutely and hourly, imperial units. language is english by default? if not, &lang=en
// https://api.openweathermap.org/data/2.5/onecall?lat=30.18&lon=-98.37&units=imperial&exclude=minutely,hourly&appid=8676a4304fa315cb8f1db61a8c963d0b

//helper function to fetch the data from an external source and return it in JSON format
function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // model code, a bit redundant but if the model becomes more complex this will accomodate that.
  function getWeather(url) {
    return getJSON(url);
  }


// View code   
//todo write code to render the details to HTML 
function renderWeather(daily, current, weatherElement) {
  console.log("in renderWeather", daily, current, weatherElement); 
  
  //display info as a test 
  let date = new Date();
  document.getElementById("date").innerHTML = '<h2>' + date.toDateString() + '</h2>';

  let temp = document.getElementById("temp");
  let currentTemp = current.temp;
  temp.innerHTML = 'The current temperature is ' + currentTemp;
  
  let hiLow = document.getElementById("hilow");
  let max = daily[0].temp.max;
  let min = daily[0].temp.min;
  hiLow.innerHTML = 'The high today will be ' + max + '. The low today will be ' + min + '.'

  let conditions = document.getElementById("conditions");
  let main = daily[0].weather[0].main;
  let desc = daily[0].weather[0].description;
  conditions.innerHTML = '<h2>' + main + '</h2><p>' + desc + '</p>';

  let feels = document.getElementById("feels");
  //let feelsMorn = daily[0].feels_like.morn;
  let feelsDay = daily[0].feels_like.day;
  feels.innerHTML = '<p> It feels like ' + feelsDay + '</p>';

} 


// Controller code
function showWeather(url = "https://api.openweathermap.org/data/2.5/onecall?lat=30.18&lon=-98.37&units=imperial&exclude=minutely,hourly&appid=8676a4304fa315cb8f1db61a8c963d0b") {
  getWeather(url).then(function (data) {
    console.log("in getWeather", data);
    //test that this works!
    const daily = data.daily;  
    const current = data.current;
    console.log(daily, current);

    //get the html element
    const weatherElement = document.getElementById('container'); 
    renderWeather(daily, current, weatherElement);
  })
}

showWeather(); 

//todo determine what clothing items will be needed
//todo determine what weather conditions clothing will be used in, groupings (wet, snow/ice, very cold, cold, mild, warm, hot, very hot), and breakpoints. Look at weather condition codes (id) and main 
//todo use feels like data. Possibly spell out groupings on main page (hot)- maybe that is the condition? Use pre-existing conditions or create my own?
//todo create dummy clothing items with wet or hot etc 'tags' for testing
//todo create clothing objects
//todo write code to display clothing items in certain weather conditions if they have corrent tags 
//todo begin collecting/creating clothing imgs
//todo display daily.weather.icon- look up how to get icons
//todo IF decide to toggle to tommorrow's weather, use daily[1]