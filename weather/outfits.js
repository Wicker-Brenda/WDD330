//create an array of clothing
//use daily feels_like for temperatures
//export default class Outfits {
const clothesList = [
      {
        name: "Short Sleeves",
        imgSrc: "images/short_sleeve.png", //img has a width and height
        imgAlt: "Image of short sleeve shirt"
      },
      {
        name: "Long Sleeves",
        imgSrc: "images/long_sleeve.png",
        imgAlt: "Image of long sleeve shirt"
      },
      {
        name: "Light Jacket",
        imgSrc: "images/light_jacket.png",
        imgAlt: "Image of light jacket"
      },
      {
        name: "Coat",
        imgSrc: "images/coat.png",
        imgAlt: "Image of coat"
      },
      {
        name: "Umbrella",
        imgSrc: "images/umbrella.png",
        imgAlt: "Image of umbrella"
      },
      {
        name: "Shorts",
        imgSrc: "images/shorts.png",
        imgAlt: "Image of shorts"
      },
      {
        name: "Pants",
        imgSrc: "images/pants.png",
        imgAlt: "Image of pants"
      },
      {
        //everyday sandals
        name: "Sandals",
        imgSrc: "images/sandals.png",
        imgAlt: "Image of sandals"
      },
      {
        name: "Sneakers",
        imgSrc: "images/sneakers.png",
        imgAlt: "Image of sneakers"
      },
      {
        name: "Socks",
        imgSrc: "images/socks.png",
        imgAlt: "Image of socks"
      },
      {
        //use with bitterly cold, below 30
        name: "Hat",
        imgSrc: "images/hat.png",
        imgAlt: "Image of winter hat"
      },
      {
        //use with bitterly cold, below 30
        name: "Scarf",
        imgSrc: "images/scarf.png",
        imgAlt: "Image of winter scarf"
      },
      {
        //use with bitterly cold, below 30
        name: "Mittens",
        imgSrc: "images/mittens.png",
        imgAlt: "Image of winter mittens"
      }
    
      //todo: (optional stretch) Sunday best dress- tights/closed toe sandals vs open-toe sandals, dress, shorts under, etc. Boy: pants/shirt/tie/dress shoes
    ];

  const outfitList = [
      {
        //pic will include short sleeves, shorts, sandals
        //breakpoint: feels_like above 70
        name: "Hot Weather",
        imgSrc: "images/hot.png",
        imgAlt: "Image of hot weather outfit",
        clothing: ["Short Sleeves", "Shorts", "Sandals"],
        lowTemp: 70,
        highTemp: 200 
      },
      {
        //pic will include short sleeves, pants, sandals
        //breakpoint: feels_like between 60-70
        name: "Mild Weather",
        imgSrc: "images/mild.png",
        imgAlt: "Image of mild weather outfit",
        clothing: ["Short Sleeves", "Pants", "Sandals"],
        lowTemp: 60,
        highTemp: 69 //may need to tweak this
      },      
      {
        //pic will include long sleeves, pants, socks and shoes
        //breakpoint: feels_like between 50-60
        name: "Cool Weather",
        imgSrc: "images/cool.png",
        imgAlt: "Image of cool weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers"],
        lowTemp: 50,
        highTemp: 59 //may need to tweak this
      },
      {
        //pic will include short sleeves, pants, socks and shoes, light jacket
        //low will be cool but high will be warm, breakpoint: feels_like between 45-70
        name: "Cool to Warm Weather",
        imgSrc: "images/cold.png", //use same img as cold weather outfit
        imgAlt: "Image of cool to warm weather outfit",
        clothing: ["Short Sleeves", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 45,
        highTemp: 79 //may need to tweak this- write code, high temp is above 59 (otherwise, long shirt)

      },
      {
        //pic will include long sleeves, pants, socks and shoes, light jacket
        //breakpoint: feels_like between 40-50
        name: "Cold Weather",
        imgSrc: "images/cold.png",
        imgAlt: "Image of cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 40,
        highTemp: 49 //may need to tweak this        
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat
        //breakpoint: feels_like between 30-40
        name: "Very Cold Weather",
        imgSrc: "images/very_cold.png",
        imgAlt: "Image of very cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Coat"],
        lowTemp: 30,
        highTemp: 39 //may need to tweak this
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat, hat, scarf, gloves/mittens
        //breakpoint: feels_like below 30
        name: "Bitterly Cold Weather",
        imgSrc: "images/bitterly_cold.png",
        imgAlt: "Image of bitterly cold weather outfit",
        clothing: ["Long Sleeves", "Pants", "Socks", "Sneakers", "Coat", "Hat", "Scarf", "Mittens"],
        lowTemp: -200,
        highTemp: 29 //may need to tweak this
      }
    
    
    //todo: optional stretch, 7-12) add umbrella/rain jacket to each outfit: right now, umbrella will just be another clothing item on the side when it is wet
    //todo: (optional stretch) Sunday best dress, warm weather and cool weather
    
    

    ];
    
    //console.log(outfitList);

    export default class Outfits {
      //some function to return the arrays
      getOutfitList() {
        console.log('in getOutfitList');  
        return outfitList;
        //console.log(outfitList);
      }
      getClothesList() {
        console.log('in getClothesList');
        return clothesList;
      } 
    }    
  //removed Outfits class from around arrays, getter functions in class instead























//code to render outfits and clothing items

//what am I passing in? parent element to display it in, and ? 
//call from showOutfit() in main.js or weather.js
export function renderHotOutfit(parent, wet) {
    
    let outfit = //call correct outfit 
    //let items = []; //call correct clothing items (look up array constructor)
    
    //if (wet) include umbrella in items
     
    //call function to display complete outfit picture
    parent.appendChild(renderOutfit(parent, outfit));

    //call function to display all the individual clothing items
    parent.appendChild(renderCompletedOutfit(parent, items));

}

export function renderMildOutfit(parent) {
    //code to display pants, short sleeve shirt
}

export function renderCoolOutfit(parent) {
    //code to display pants, long sleeve shirt
}

export function renderColdOutfit(parent) {
    //code to display pants, long sleeve shirt, sneakers and socks, 
}

export function renderOutfit(parent, outfit) { //does this need to be a separate function, or should it be combined with renderOutfitItems
    //parent is div, display completed outfit jpg
    
}

export function renderOutfitItems(parent, items) {
    //parent is div
    //loop through each clothing item, add each as an img to the div

}