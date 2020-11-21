//move to weather.js and outfitController.js
//import { getJSON, getLocation } from './utilities.js';
import { WeatherController } from './weatherController.js';

//create an instance of the QuakesController class
const myController = new WeatherController("#outfit"); //todo: double check this is the right div, may need to go to a parent div

myController.init();










//array destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
//example:
// const people = [
//   {
//     name: 'Mike Smith',
//     family: {
//       mother: 'Jane Smith',
//       father: 'Harry Smith',
//       sister: 'Samantha Smith'
//     },
//     age: 35
//   },
//   {
//     name: 'Tom Jones',
//     family: {
//       mother: 'Norah Jones',
//       father: 'Richard Jones',
//       brother: 'Howard Jones'
//     },
//     age: 25
//   }
// ];

// for (const {name: n, family: {father: f}} of people) {
//   console.log('Name: ' + n + ', Father: ' + f);
// }

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"






//showWeather(); 

//todo create dummy clothing items with wet or hot etc 'tags' for testing- or just use what I have, and imgAlt will show up until I have the jpg

//todo write code to call render function to display clothing items in certain weather conditions
//todo continue collecting/creating clothing imgs
//todo collect/create weather images (sun, wind, clouds, rain, temp up and down arrows, etc). Consider using icons that come with openweathermap.org
//todo display daily.weather.icon- look up how to get icons
//todo: optional stretch, IF decide to toggle to tommorrow's weather, use daily[1]
//todo: get geolocation for lat and long of user, update API call using that 
//todo: optional stretch: display current location (city, state) with date