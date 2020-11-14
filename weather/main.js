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
//todo write code to render the details to HTML, in outfits.js 
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

  //call showOutfit(daily, current);

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

//need to pass in the weather info to determine which render outfit function to call
function showOutfit() { //pass in daily, current, then write conditional code to determine which render function to call
  //clear out anything already in the innerHTML
  let outfitDiv = document.getElementById("outfit"); 
  outfitDiv.innerHTML = '';
  
  //conditional logic to select outfit to render 
  //pass wet as a boolean, if true render an umbrella
 // renderHotOutfit(outfitDiv, wet);  
}

//create an array of clothing
//use daily feels_like for temperatures
const clothesList = [
  {
    name: "Short Sleeve Shirt",
    imgSrc: "short_sleeve.jpg",
    imgAlt: "Image of short sleeve shirt",
    //only use short sleeves ABOVE lowTemp, write if...else paired with long sleeves (unless a Sunday...check that first)
    lowTemp: 50,
    highTemp: 200,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Long Sleeve Shirt",
    imgSrc: "long_sleeve.jpg",
    imgAlt: "Image of long sleeve shirt",
    //only use long sleeve shirt BELOW highTemp
    lowTemp: -200,
    highTemp: 49,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Light Jacket",
    imgSrc: "light_jacket.jpg",
    imgAlt: "Image of light jacket",
    //how to do a range? Use between low and high temp, but how to call? if < 40 && > 60
    lowTemp: 40,
    highTemp: 60,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Coat",
    imgSrc: "coat.jpg",
    imgAlt: "Image of coat",
    //range- use if BELOW highTemp
    lowTemp: -200,
    highTemp: 39,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Umbrella",
    imgSrc: "umbrella.jpg",
    imgAlt: "Image of umbrella",
    //use daily.rain and/or daily.pop (probability of precipitation)
    //use if ABOVE pop
    lowTemp: -200,
    highTemp: 200,
    rainPOP: 24
  },
  {
    name: "Shorts",
    imgSrc: "shorts.jpg",
    imgAlt: "Image of shorts",
    lowTemp: 55,
    highTemp: 200,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Pants",
    imgSrc: "pants.jpg",
    imgAlt: "Image of pants",
    lowTemp: -200,
    highTemp: 54,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    //everyday sandals
    name: "Sandals",
    imgSrc: "sandals.jpg",
    imgAlt: "Image of sandals",
    lowTemp: 51,
    highTemp: 200,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Sneakers",
    imgSrc: "sneakers.jpg",
    imgAlt: "Image of sneakers",
    lowTemp: -200,
    highTemp: 50,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    name: "Socks",
    imgSrc: "socks.jpg",
    imgAlt: "Image of socks",
    lowTemp: -200,
    highTemp: 50,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    //use with bitterly cold, below 30
    name: "Hat",
    imgSrc: "hat.jpg",
    imgAlt: "Image of winter hat",
    lowTemp: -200,
    highTemp: 30,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    //use with bitterly cold, below 30
    name: "Scarf",
    imgSrc: "scarf.jpg",
    imgAlt: "Image of winter scarf",
    lowTemp: -200,
    highTemp: 30,
    //can use if ABOVE pop
    rainPop: 0
  },
  {
    //use with bitterly cold, below 30
    name: "Mittens",
    imgSrc: "mittens.jpg",
    imgAlt: "Image of winter mittens",
    lowTemp: -200,
    highTemp: 30,
    //can use if ABOVE pop
    rainPop: 0
  }

  //todo: (optional stretch) hat, gloves/mittens
  //todo: (optional stretch) Sunday best dress- tights/closed toe sandals vs open-toe sandals, dress, shorts under, etc. Boy: pants/shirt/tie/dress shoes

]
const oufitList = [
  {
    //pic will include short sleeves, shorts, sandals
    //breakpoint: feels_like above 70
    name: "Hot Weather",
    imgSrc: "hot.jpg",
    imgAlt: "Image of hot weather outfit"
  },
  {
    //pic will include short sleeves, pants, sandals
    //breakpoint: feels_like between 60-70
    name: "Mild Weather",
    imgSrc: "mild.jpg",
    imgAlt: "Image of mild weather outfit"
  },
  {
    //pic will include short sleeves, pants, socks and shoes, light jacket
    //low will be cool but high will be warm, breakpoint: feels_like between 45-70
    name: "Cool to Warm Weather",
    imgSrc: "cool_warm.jpg",
    imgAlt: "Image of cool to warm weather outfit"
  },
  {
    //pic will include long sleeves, pants, socks and shoes
    //breakpoint: feels_like between 50-60
    name: "Cool Weather",
    imgSrc: "cool.jpg",
    imgAlt: "Image of cool weather outfit"
  },
  {
    //pic will include long sleeves, pants, socks and shoes, light jacket
    //breakpoint: feels_like between 40-50
    name: "Cold Weather",
    imgSrc: "cold.jpg",
    imgAlt: "Image of cold weather outfit"
  },
  {
    //pic will include long sleeves, pants, socks and shoes, coat
    //breakpoint: feels_like between 30-40
    name: "Very Cold Weather",
    imgSrc: "very_cold.jpg",
    imgAlt: "Image of very cold weather outfit"
  },
  {
    //pic will include long sleeves, pants, socks and shoes, coat, hat, scarf, gloves/mittens
    //breakpoint: feels_like below 30
    name: "Bittery Cold Weather",
    imgSrc: "bitterly_cold.jpg",
    imgAlt: "Image of bitterly cold weather outfit"
  }

 
//todo: optional stretch, 7-12) add umbrella/rain jacket to each outfit: right now, umbrella will just be another clothing item on the side when it is wet
//todo: render view of outfit with functions in outfits.js, conditional logic that calls that function in main.js or weather.js 
//todo: (optional stretch) Sunday best dress, warm weather and cool weather

]

showWeather(); 

//todo create dummy clothing items with wet or hot etc 'tags' for testing- or just use what I have, and imgAlt will show up until I have the jpg

//todo write code to call render function to display clothing items in certain weather conditions
//todo continue collecting/creating clothing imgs
//todo collect/create weather images (sun, wind, clouds, rain, temp up and down arrows, etc). Consider using icons that come with openweathermap.org
//todo display daily.weather.icon- look up how to get icons
//todo: optional stretch, IF decide to toggle to tommorrow's weather, use daily[1]
//todo: stretch, get geolocation for lat and long of user, update API call using that, display current location with date