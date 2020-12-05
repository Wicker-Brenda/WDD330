const weatherIcons = [
    {
        name: "Clear",
        imgSrc: "images/sun.png", //img is 170px square
        imgAlt: "sun icon in clear sky"
    },
    {
        name: "Clouds",
        imgSrc: "images/cloud.png", 
        imgAlt: "cloud icon"
    },
    {
        name: "Thunderstorm",
        imgSrc: "images/thunderstorm.png", 
        imgAlt: "thunderstorm icon"
    },
    {
        name: "Drizzle",
        imgSrc: "images/drizzle.png", 
        imgAlt: "drizzle icon"
    },
    {
        name: "Rain",
        imgSrc: "images/rain.png", 
        imgAlt: "rain icon"
    },
    {
        name: "Snow",
        imgSrc: "images/snow.png", 
        imgAlt: "snow icon"
    },
    {
        //the mist icon is used for all group 7xx atmosphere conditions:
        //mist, smoke, haze, dust, fog, sand, ash, squall, tornado
        name: "Mist",
        imgSrc: "images/mist.png", 
        imgAlt: "mist icon"
    },
    {
        name: "Arrow",
        imgSrc: "images/arrows.png",
        imgAlt: "arrows icon"
    }
]

 export default class Icons {
    //some function to return the arrays
    getWeatherIcons() {
      console.log('in getweatherIcons');  
      return weatherIcons;
      //console.log(weatherIcons);
    }
  }    