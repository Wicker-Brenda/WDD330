//arrays of clothing items and outfits
//use daily feels_like for temperatures

const clothesList = [
      {
        name: "Short Sleeves",
        imgSrc: "short_sleeve.png",
        imgAlt: "Image of short sleeve shirt"
      },
      {
        name: "Long Sleeves",
        imgSrc: "long_sleeve.png",
        imgAlt: "Image of long sleeve shirt"
      },
      {
        name: "Light Jacket",
        imgSrc: "light_jacket.png",
        imgAlt: "Image of light jacket"
      },
      {
        name: "Coat",
        imgSrc: "coat.png",
        imgAlt: "Image of coat"
      },
      {
        name: "Umbrella",
        imgSrc: "umbrella.png",
        imgAlt: "Image of umbrella"
      },
      {
        name: "Shorts",
        imgSrc: "shorts.png",
        imgAlt: "Image of shorts"
      },
      {
        name: "Pants",
        imgSrc: "pants.png",
        imgAlt: "Image of pants"
      },
      {
        //everyday sandals
        name: "Sandals",
        imgSrc: "sandals.png",
        imgAlt: "Image of sandals"
      },
      {
        name: "Sneakers",
        imgSrc: "sneakers.png",
        imgAlt: "Image of sneakers"
      },
      {
        name: "Socks",
        imgSrc: "socks.png",
        imgAlt: "Image of socks"
      },
      {
        name: "Hat",
        imgSrc: "hat.png",
        imgAlt: "Image of winter hat"
      },
      {
        name: "Scarf",
        imgSrc: "scarf.png",
        imgAlt: "Image of winter scarf"
      },
      {
        name: "Mittens",
        imgSrc: "mittens.png",
        imgAlt: "Image of winter mittens"
      }    
    ];

  const outfitList = [
      {
        //pic will include short sleeves, shorts, sandals
        //breakpoint: feels_like above 70
        name: "Hot Weather",
        imgSrc: "hot.png",
        imgAlt: "Image of hot weather outfit",
        clothing: ["Short Sleeves", "Shorts", "Sandals"],
        lowTemp: 70,
        highTemp: 200 
      },
      {
        //pic will include short sleeves, pants, sandals
        //breakpoint: feels_like between 60-70
        name: "Mild Weather",
        imgSrc: "mild.png",
        imgAlt: "Image of mild weather outfit",
        clothing: ["Short Sleeves", "Pants", "Sandals"],
        lowTemp: 60,
        highTemp: 69 
      },      
      {
        //pic will include long sleeves, pants, socks and shoes
        //breakpoint: feels_like between 50-60
        name: "Cool Weather",
        imgSrc: "cool.png",
        imgAlt: "Image of cool weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers"],
        lowTemp: 50,
        highTemp: 59 
      },
      {
        //pic will include short sleeves, pants, socks and shoes, light jacket
        //low will be cool but high will be warm, breakpoint: feels_like between 45-69
        name: "Cool to Warm Weather",
        imgSrc: "cold.png", //use same img as cold weather outfit
        imgAlt: "Image of cool to warm weather outfit",
        clothing: ["Short Sleeves", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 45,
        highTemp: 69 
      },
      {
        //pic will include long sleeves, pants, socks and shoes, light jacket
        //breakpoint: feels_like between 40-50
        name: "Cold Weather",
        imgSrc: "cold.png",
        imgAlt: "Image of cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 40,
        highTemp: 49      
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat
        //breakpoint: feels_like between 30-40
        name: "Very Cold Weather",
        imgSrc: "very_cold.png",
        imgAlt: "Image of very cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Coat"],
        lowTemp: 30,
        highTemp: 39 
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat, hat, scarf, gloves/mittens
        //breakpoint: feels_like below 30
        name: "Bitterly Cold Weather",
        imgSrc: "bitterly_cold.png",
        imgAlt: "Image of bitterly cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Coat", "Hat", "Scarf", "Mittens"],
        lowTemp: -200,
        highTemp: 29 
      }    
    ];
    
    export default class Outfits {
      //some functions to return the arrays
      getOutfitList() {
        console.log('in getOutfitList');  
        return outfitList;
      }
      getClothesList() {
        console.log('in getClothesList');
        return clothesList;
      } 
    }    