import { getJSON } from './utilities.js';
// Weather Model

// api key to openweathermap.org is: 8676a4304fa315cb8f1db61a8c963d0b

//example api call to one-call
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//working api call to one-call at openweathermap.org, exclude minutely and hourly, imperial units. language is english by default? if not, &lang=en
// https://api.openweathermap.org/data/2.5/onecall?lat=30.18&lon=-98.37&units=imperial&exclude=minutely,hourly&appid=8676a4304fa315cb8f1db61a8c963d0b

export default class Weather {
  constructor() {
    //url string before lat and lon  
    this.baseUrl =
      'https://api.openweathermap.org/data/2.5/onecall?';
    //url string after lat and lon
    this.endUrl = 
      '&units=imperial&exclude=minutely,hourly&appid=8676a4304fa315cb8f1db61a8c963d0b';  
  }

  async getWeatherByPosition(position) {    
    // use the getJSON function and the position provided to build out the correct URL to get the weather data we need.  Store it into data, then return it
    let newURL = this.baseUrl + `lat=${position.lat}&lon=${position.lon}` + this.endUrl;
    console.log(newURL);
    const data = await getJSON(newURL); 
    return data;
  }
}

    