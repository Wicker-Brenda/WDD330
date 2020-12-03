//create an array of clothing
//use daily feels_like for temperatures
//export default class Outfits {
const clothesList = [
      {
        name: "Short Sleeve Shirt",
        imgSrc: "images/short_sleeve.jpg", //img has a width and height
        img2Src: "images/dummy2.jpg", 
        imgAlt: "Image of short sleeve shirt",
        //only use short sleeves ABOVE lowTemp, write if...else paired with long sleeves (unless a Sunday...check that first)
        //can use if ABOVE pop
        rainPop: 0,
        //where to draw the image
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Long Sleeve Shirt",
        imgSrc: "images/long_sleeve.jpg",
        img2Src: "images/dummy2.jpg", 
        imgAlt: "Image of long sleeve shirt",
        //only use long sleeve shirt BELOW highTemp
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Light Jacket",
        imgSrc: "images/dummy.jpg", // "light_jacket.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of light jacket",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Coat",
        imgSrc: "images/dummy.jpg", // "coat.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of coat",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Umbrella",
        imgSrc: "images/dummy.jpg", // "umbrella.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of umbrella",
        //use daily.rain and/or daily.pop (probability of precipitation)
        //use if ABOVE pop
        rainPOP: 24,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Shorts",
        imgSrc: "images/dummy.jpg", // "shorts.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of shorts",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Pants",
        imgSrc: "images/pants.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of pants",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        //everyday sandals
        name: "Sandals",
        imgSrc: "images/sandals.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of sandals",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Sneakers",
        imgSrc: "images/dummy.jpg", // "sneakers.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of sneakers",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        name: "Socks",
        imgSrc: "images/dummy.jpg", // "socks.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of socks",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        //use with bitterly cold, below 30
        name: "Hat",
        imgSrc: "images/dummy.jpg", // "hat.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of winter hat",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        //use with bitterly cold, below 30
        name: "Scarf",
        imgSrc: "images/dummy.jpg", // "scarf.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of winter scarf",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      },
      {
        //use with bitterly cold, below 30
        name: "Mittens",
        imgSrc: "images/dummy.jpg", // "mittens.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of winter mittens",
        //can use if ABOVE pop
        rainPop: 0,
        xcoord: 1,
        ycoord: 1
      }
    
      //todo: (optional stretch) Sunday best dress- tights/closed toe sandals vs open-toe sandals, dress, shorts under, etc. Boy: pants/shirt/tie/dress shoes
    ];

  const outfitList = [
      {
        //pic will include short sleeves, shorts, sandals
        //breakpoint: feels_like above 70
        name: "Hot Weather Outfit",
        imgSrc: "images/dummy.jpg", // "hot.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of hot weather outfit",
        //shirt: clothesList.name == ""  //not sure how to add in each clothesList item here
        clothing: ["Short Sleeve Shirt", "Shorts", "Sandals"],
        lowTemp: 70,
        highTemp: 200 
      },
      {
        //pic will include short sleeves, pants, sandals
        //breakpoint: feels_like between 60-70
        name: "Mild Weather Outfit",
        imgSrc: "images/mild.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of mild weather outfit",
        clothing: ["Short Sleeve Shirt", "Pants", "Sandals"],
        lowTemp: 60,
        highTemp: 69 //may need to tweak this
      },
      {
        //pic will include short sleeves, pants, socks and shoes, light jacket
        //low will be cool but high will be warm, breakpoint: feels_like between 45-70
        name: "Cool to Warm Weather Outfit",
        imgSrc: "images/dummy.jpg", // "cool_warm.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of cool to warm weather outfit",
        clothing: ["Short Sleeve Shirt", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 45,
        highTemp: 79 //may need to tweak this- write code, high temp is above 59 (otherwise, long shirt)

      },
      {
        //pic will include long sleeves, pants, socks and shoes
        //breakpoint: feels_like between 50-60
        name: "Cool Weather Outfit",
        imgSrc: "images/dummy.jpg", // "cool.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of cool weather outfit",
        clothing: ["Long Sleeve Shirt", "Pants", "Socks", "Sneakers"],
        lowTemp: 50,
        highTemp: 59 //may need to tweak this
      },
      {
        //pic will include long sleeves, pants, socks and shoes, light jacket
        //breakpoint: feels_like between 40-50
        name: "Cold Weather Outfit",
        imgSrc: "images/dummy.jpg", // "cold.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of cold weather outfit",
        clothing: ["Long Sleeve Shirt", "Pants", "Socks", "Sneakers", "Light Jacket"],
        lowTemp: 40,
        highTemp: 49 //may need to tweak this        
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat
        //breakpoint: feels_like between 30-40
        name: "Very Cold Weather Outfit",
        imgSrc: "images/dummy.jpg", // "very_cold.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of very cold weather outfit",
        clothing: ["Long Sleeve Shirt", "Pants", "Socks", "Sneakers", "Coat"],
        lowTemp: 30,
        highTemp: 39 //may need to tweak this
      },
      {
        //pic will include long sleeves, pants, socks and shoes, coat, hat, scarf, gloves/mittens
        //breakpoint: feels_like below 30
        name: "Bitterly Cold Weather Outfit",
        imgSrc: "images/dummy.jpg", // "bitterly_cold.jpg",
        img2Src: "images/dummy2.jpg",
        imgAlt: "Image of bitterly cold weather outfit",
        clothing: ["Long Sleeve Shirt", "Pants", "Socks", "Sneakers", "Coat", "Hat", "Scarf", "Mittens"],
        lowTemp: -200,
        highTemp: 29 //may need to tweak this
      }
    
    
    //todo: optional stretch, 7-12) add umbrella/rain jacket to each outfit: right now, umbrella will just be another clothing item on the side when it is wet
    //todo: render view of outfit with functions in outfits.js, conditional logic that calls that function in weatherController.js or weather.js 
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