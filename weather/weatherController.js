import { getLocation } from './utilities.js';
import Weather from './weather.js';
import WeatherView from './weatherView.js';
import Outfits from './outfits.js';
import Icons from './icons.js';

// Weather controller
export class WeatherController { 
  constructor(parent, position = null) {
    this.parentElement = document.getElementById(parent);
    this.position = position || {
      lat: 0,
      lon: 0
    };
    //add the model and view and arrays into the class as members
    this.weather = new Weather();  //model
    this.weatherView = new WeatherView();  //view
    this.outfits = new Outfits(); //Outfits class with clothing arrays
    this.icons = new Icons(); //Icons class with weather icons array
  }

  async init() {
    await this.initPos();
    this.getWeatherByLocation();      
  }

  async initPos() {
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

  // Request the appropriate data from the model, then pass it to the view to be rendered.
  async getWeatherByLocation() {
    // get the weather data in the user's location
    const data = await this.weather.getWeatherByPosition(this.position);
    console.log(data);
    const daily = data.daily;  
    const current = data.current;
    // console.log(daily, current);
    const icon = this.getIcon(current);
    const arrow = this.getArrow();
    //const arrow = this.icons.getWeatherIcons.find(icon => icon.name === "Arrow");
    // render the list to html
    this.weatherView.renderWeather(daily, current, this.parentElement, icon, arrow);
    this.showOutfit(daily, current, this.parentElement);
  }

  //Determine appropriate outfit/clothing based on current weather, then pass it to the view to be rendered
  showOutfit(daily, current, parentElement) {
    
    //weather variables 
    let feelsMorn = daily[0].feels_like.morn;
    let currentTemp = current.temp;
    let rainProb = daily[0].pop; //probability of precipition
    let main = current.weather[0].main; //current main weather condition
    let feelsDay = daily[0].feels_like.day; //comment this out for testing different outfits
    
    //outfitList temperature ranges: 70-200, 60-69, 50-59, 45-49, 40-44, 30-39, (-200)-29
    //let feelsDay = -30; //uncomment and change numbers for testing 
    
    let outfits = this.outfits.getOutfitList();
    let clothes = this.outfits.getClothesList();
    
    let currentOutfit = outfits.find(outfit => outfit.lowTemp <= feelsDay && outfit.highTemp >= feelsDay);

    //pull clothesList objects to match names from currentOutfit
    let currentClothing = [];
    currentOutfit.clothing.forEach(name => {
        let item = clothes.find(clothesItem => clothesItem.name === name);
        currentClothing.push(item);        
     });

    //add umbrella to currentClothing array based on current weather
    if(main === "Thunderstorm" || main === "Drizzle" || main === "Rain" || rainProb >= 25) {
        let item = clothes.find(clothesItem => clothesItem.name === "Umbrella");
        currentClothing.push(item);
    } 

    console.log(currentOutfit, currentClothing);
    
    //pass in currentOutfit and currentClothing to the view
    this.weatherView.renderOutfit(parentElement, currentOutfit, currentClothing); 

    //add event listeners for click events
    this.addClothesListener();

  }//end showOutfit

  addClothesListener() {
    //loop through the children of the list and attach listeners to each to manage animations
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        this.highlightItem(e.currentTarget); 
      });
      child.addEventListener('webkitAnimationEnd', removeClass); 
      child.addEventListener('animationend', removeClass);
    });
  }
  
  //add 'highlight' class, which will animate the scale and text color
  highlightItem(item) {    
    item.classList.add("highlight");
  }  

  getIcon(current) {
    //main weather conditions: Clear, Clouds, Thunderstorm, Drizzle, Rain, Snow, Mist, Smoke, Haze, Dust, Fog, Sand, Ash, Squall, Tornado
    //let main = "Haze"; //test conditions 
    let main = current.weather[0].main; //current main weather condition, comment out for testing
    let icons = this.icons.getWeatherIcons();
    let time = current.dt;
    let sunrise = current.sunrise;
    let sunset = current.sunset;
    let icon = '';
    
    switch (main) {
      case "Clear": 
        //differentiate between daytime clear and nightime clear, get that icon
        if(time > sunrise && time < sunset) {
          icon = icons.find(x => x.name === "Clear");
        } else {
          icon = icons.find(x => x.name === "Moon");
        } 
        break;
      //match icon to other general main conditions  
      case "Clouds":
      case "Thunderstorm":
      case "Drizzle":
      case "Rain":
      case "Snow": 
        icon = icons.find(x => x.name === main);  
        break;
      default:
        //all remaining main conditions have Mist icon
        icon = icons.find(x => x.name === "Mist");    
        break;
    }
    
    return icon;
  }

  getArrow() {
    let icons = this.icons.getWeatherIcons();
    let arrow = icons.find(icon => icon.name === "Arrow");
    return arrow;
  }

} //end of class

// remove class of highlight when animation is over to enable clicking again and repeating CSS effects
function removeClass(e) {
  this.classList.remove('highlight'); 
}


