import { getLocation } from './utilities.js';
import Weather from './weather.js';
import WeatherView from './weatherView.js';
import Outfits from './outfits.js';
import Icons from './icons.js';

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
    this.icons = new Icons(); //Icons class with weather icons array
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
    const icon = this.getIcon(current);
    const arrow = this.getArrow();
    //const arrow = this.icons.getWeatherIcons.find(icon => icon.name === "Arrow");
    // render the list to html
    this.weatherView.renderWeather(daily, current, this.parentElement, icon, arrow);
    this.showOutfit(daily, current, this.parentElement);
  }

  //need to pass in the weather info to determine which render outfit function to call
  showOutfit(daily, current, parentElement) { //pass in daily, current, then write conditional code to determine which render function to call
    //clear out anything already in the innerHTML
    
    //weather variables 
    let feelsMorn = daily[0].feels_like.morn;
    let currentTemp = current.temp;

    //to test correct outfit being pulled, comment out feelsDay below and replace with hardwired number
    //outfitList: Hot Weather Outfit, Mild Weather Outfit, Cool to Warm Weather Outfit, Cool Weather Outfit, Cold Weather Outfit, Very Cold Weather Outfit, Bitterly Cold Weather Outfit
    //let feelsDay = -30;
    let feelsDay = daily[0].feels_like.day;
    let rainProb = daily[0].pop; //probability of precipition
    let main = current.weather[0].main; //current main weather condition
    console.log(feelsMorn, currentTemp, feelsDay, rainProb, main);

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

    //Select the appropriate outfit for the weather conditions
    //let currentOutfit = this.outfits.getOutfitList().find(outfit => outfit.name === "Hot Weather"); 
    //todo: fix undefined error- problem with weather breakpoints, with feelsMorn range was outside of possibilities... expand criteria and need an else case
    //let currentOutfit = this.outfits.getOutfitList().find(outfit => outfit.lowTemp <= feelsMorn && outfit.highTemp >= feelsDay); 
    //let currentOutfit = outfits.find(outfit => outfit.lowTemp <= currentTemp && outfit.highTemp >= feelsDay); //too brittle
    
    let currentOutfit = outfits.find(outfit => outfit.lowTemp <= feelsDay && outfit.highTemp >= feelsDay);
    
    console.log(currentOutfit);

    //let currentOutfitClothing = currentOutfit.clothing; 
    //console.log(currentOutfitClothing); //array

    //pull clothesList objects to match names from currentOutfit
    let currentClothing = [];
    currentOutfit.clothing.forEach(name => {
        let item = clothes.find(clothesItem => clothesItem.name === name);
        currentClothing.push(item);        
     });

    //todo: determine if this should be based on daily weather instead, if so change weatherView display to match 
    //add umbrella to currentClothing array based on current weather
    if(main === "Thunderstorm" || main === "Drizzle" || main === "Rain" || rainProb >= 25) {
        let item = clothes.find(clothesItem => clothesItem.name === "Umbrella");
        currentClothing.push(item);
    }

    console.log(currentClothing); 
    
    //pass in currentOutfit and currentClothes to the view
    this.weatherView.renderOutfit(parentElement, currentOutfit, currentClothing); 

    //add event listener for click event
    this.addClothesListener();

  }//end showOutfit

  addClothesListener() {
    //loop through the children of the list and attach a listener to each
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        this.highlightItem(e.currentTarget); 
      });
    });
  }

  highlightItem(item) {
    //remove hidden class, then add back in when done
    //item.  
    //add 'highlight' class, which will transform scale 1.23 for 30s? then return to normal
    item.classList.add("highlight");

  }

    

  getIcon(current) {
    //to test correct icon against each main weather condition, comment out main and use the line below it instead 
    //let main = "Tornado";
    //main weather conditions: Clear, Clouds, Thunderstorm, Drizzle, Rain, Snow, Mist, Smoke, Haze, Dust, Fog, Sand, Ash, Squall, Tornado
    let main = current.weather[0].main; //current main weather condition
    let icons = this.icons.getWeatherIcons();
    let time = current.dt;
    let sunrise = current.sunrise;
    let sunset = current.sunset;
    let icon = '';
    console.log("in getIcon", time, sunrise, sunset);
    //differentiate between daytime clear and nightime clear
    if(main === "Clear") {
      if(time > sunrise && time < sunset) {
        icon = icons.find(x => x.name === "Clear");
      } else {
        icon = icons.find(x => x.name === "Moon");
      } 
    //use Mist if there is no matching name for main  
    } else if (main === "Clouds" || main === "Thunderstorm" || main === "Drizzle" || main === "Rain" || main === "Snow") {
          //(!icons.includes(main === "") //could the above be done with some() or includes()?
        icon = icons.find(x => x.name === main);
      } else {
        icon = icons.find(x => x.name === "Mist");
      }
    
    //todo: add code to use Mist if there is no matching name for main, use some() first to test if there is a match.  
    // if(icon = null) icon = icons.find(x => x.name === "Mist");
    console.log("in getIcon", main, icons, icon);
    return icon;
  }

  getArrow() {
    let icons = this.icons.getWeatherIcons();
    let arrow = icons.find(icon => icon.name === "Arrow");
    return arrow;
  }
} //end of class

// remove class of highlight when transition is over to enable clicking again and repeating CSS effects
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //exit function if not a transform 
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove('highlight'); 
}

const ul = document.querySelector('ul'); //was using .pic, try .highlight
ul.addEventListener('transitionend', removeTransition);

// const listItems = document.querySelectorAll('li'); //was using .pic, try .highlight
// listItems.forEach(item => addEventListener('transitionend', removeTransition));
//pics.forEach(pic =>addEventListener('transitionend', removeTransition));


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

