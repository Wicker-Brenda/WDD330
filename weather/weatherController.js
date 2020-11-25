import { getLocation } from './utilities.js';
import Weather from './weather.js';
import WeatherView from './weatherView.js';
import Outfits from './outfits.js';

// Weather controller
export class WeatherController { //not providing an export with the default keyword, removed it
  constructor(parent, position = null) {
    //this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    //this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.parentElement = document.getElementById(parent);
    this.position = position || {
      lat: 0,
      lon: 0
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.weather = new Weather();  //model
    this.weatherView = new WeatherView();  //view
    this.outfits = new Outfits(); //outfits class with clothing arrays
  }

  async init() {
    console.log("in init()");  
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display weather info by calling this.getQuakesByRadius()
    //this.parentElement = document.querySelector(this.parent);
    //this.parentElement = document.getElementById(this.parent);
    console.log(this.parentElement);
    console.log(this.parentElement.nodeType); //returns 1, which is an element node
    await this.initPos();
    this.getWeatherByLocation();  
    
  }

  async initPos() {
    console.log("in initPos()");
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        const location = await getLocation(); //false, Infinity, 0
        // if we get the location back then set the latitude and longitude into this.position
        this.position.lat = location.coords.latitude;
        this.position.lon = location.coords.longitude;
        console.log(`this.position.lat= ${this.position.lat}, this.position.lon= ${this.position.lon}`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
  async getWeatherByLocation() {
    //set loading message
    //this.parentElement.innerHTML = 'Loading...';
    // get the weather data in the user's location
    const data = await this.weather.getWeatherByPosition(this.position);
    console.log(data);
    const daily = data.daily;  
    const current = data.current;
    console.log(daily, current);
    // render the list to html
    this.weatherView.renderWeather(daily, current, this.parentElement);
    this.showOutfit(daily, current, this.parentElement);
  }

  //need to pass in the weather info to determine which render outfit function to call
  showOutfit(daily, current, parentElement) { //pass in daily, current, then write conditional code to determine which render function to call
    //clear out anything already in the innerHTML
    

    let feelsMorn = daily[0].feels_like.morn;
    let feelsDay = daily[0].feels_like.day;
    console.log(feelsMorn, feelsDay);

    //conditional logic to select outfit from outfitList based on weather, put in currentOutfit
    //print out image, put clothing from outfit into array (is this needed, or can i use currentOutfit.clothing?)
    //forEach clothing in array, pull info from clothesList, print image and altImg 


    //let outfit = this.outfits.outfitList.filter(x => outfitList.lowTemp <= feelsDay && outfitList.highTemp >= feelsDay);
    //console.table(outfit);
    
    //pass wet as a boolean, if true render an umbrella
    let outfits = this.outfits.getOutfitList();
    console.log(outfits);

    let clothes = this.outfits.getClothesList();
    console.log(clothes);

    //for weather matching, use lowTemp/highTemp <= feelsDay, etc
    //let currentOutfit = this.outfits.getOutfitList().find(outfit => outfit.name === "Hot Weather"); 
    let currentOutfit = this.outfits.getOutfitList().find(outfit => outfit.name === "Hot Weather"); 
    console.log(currentOutfit);

    //let currentOutfitClothing = currentOutfit.clothing; 
    //console.log(currentOutfitClothing); //array

    //pull clothesList objects to match names from currentOutfit
    let currentClothing = [];
    currentOutfit.clothing.forEach(name => {
        let item = clothes.find(clothesItem => clothesItem.name === name);
        currentClothing.push(item);
        
     });
     console.log(currentClothing); 
    
    


    //console.table(this.outfits);

    //pass in currentOutfit and currentClothes to the view
    this.weatherView.renderOutfit(parentElement, currentOutfit, currentClothing); 
  }


}


// let feels = document.getElementById("feels");
//         //let feelsMorn = daily[0].feels_like.morn;
//         let feelsDay = daily[0].feels_like.day;
//         feels.innerHTML = '<p> It feels like ' + feelsDay + '</p>';



// Controller code from main.js, without position
// function showWeather(url = "https://api.openweathermap.org/data/2.5/onecall?lat=30.18&lon=-98.37&units=imperial&exclude=minutely,hourly&appid=8676a4304fa315cb8f1db61a8c963d0b") {
//   getWeather(url).then(function (data) {
//     console.log("in getWeather", data);
//     //test that this works!
//     const daily = data.daily;  
//     const current = data.current;
//     console.log(daily, current);

//     //get the html element
//     const weatherElement = document.getElementById('container'); 
//     renderWeather(daily, current, weatherElement);
//   })
// }



//from inside show outfit
// let outfitDiv = document.getElementById("outfit");  //don't think I need this, outfit is current the parent element
//     outfitDiv.innerHTML = ''; //pretty sure don't need this either