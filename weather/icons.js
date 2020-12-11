const weatherIcons = [
    {
        name: "Clear",
        imgSrc: "sun.png", 
        imgAlt: "sun icon in clear sky"
    },
    {
        name: "Moon",
        imgSrc: "moon.png", 
        imgAlt: "moon icon"
    },
    {
        name: "Clouds",
        imgSrc: "cloud.png", 
        imgAlt: "cloud icon"
    },
    {
        name: "Thunderstorm",
        imgSrc: "thunderstorm.png", 
        imgAlt: "thunderstorm icon"
    },
    {
        name: "Drizzle",
        imgSrc: "drizzle.png", 
        imgAlt: "drizzle icon"
    },
    {
        name: "Rain",
        imgSrc: "rain.png", 
        imgAlt: "rain icon"
    },
    {
        name: "Snow",
        imgSrc: "snow.png", 
        imgAlt: "snow icon"
    },
    {
        //the mist icon is used for all group 7xx atmosphere conditions:
        //mist, smoke, haze, dust, fog, sand, ash, squall, tornado
        name: "Mist",
        imgSrc: "mist.png", 
        imgAlt: "mist icon"
    },
    {
        name: "Arrow",
        imgSrc: "arrows.png",
        imgAlt: "arrows icon"
    }
]

 export default class Icons {
    //function to return the array
    getWeatherIcons() {
      return weatherIcons;
    }
  }    