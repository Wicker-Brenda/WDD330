  //image path
    //todo: change to what is needed in GitHub
    const imgBasePath = ""; //"./"; 
  
  // Weather View handler
  export default class WeatherView {
    //todo write code to render the details to HTML, in outfits.js 
    renderWeather(daily, current, weatherElement, icon, arrow) {
        console.log("in renderWeather", daily, current, weatherElement, icon, arrow); 
        
        //display weather info in the header 
        let date = new Date();
        let currentTemp = Math.round(current.temp);
        let feelsDay = Math.round(daily[0].feels_like.day);
        document.getElementById("date").innerHTML = 
            `${date.toDateString()}<br>
            <span class="temp">${currentTemp}&deg;</span><br>
            feels like: ${feelsDay}`;

        let conditions = document.getElementById("conditions");
        let desc = current.weather[0].description;
        conditions.innerHTML = `<img src="${imgBasePath}${icon.imgSrc}" alt="${icon.imgAlt}"></img><p>${desc}</p>`;
       
        let hiLow = document.getElementById("hilow");
        let max = Math.round(daily[0].temp.max);
        let min = Math.round(daily[0].temp.min);
        hiLow.innerHTML = `<img src="${imgBasePath}${arrow.imgSrc}" alt="${arrow.imgAlt}"></img><p>high: ${max}</p><p>low: ${min}</p>`;
    
        

        //<div class="color"><img src="${imgBasePath}${item.img2Src}" alt="${item.imgAlt}"></div> 
          
        // let feels = document.getElementById("feels");
        // //let feelsMorn = daily[0].feels_like.morn;
        // let feelsDay = Math.round(daily[0].feels_like.day);
        // feels.innerHTML = '<p> It feels like ' + feelsDay + '</p>';

         
  
    //call showOutfit(daily, current);
    } 

    //pass in outfit and individual clothes together in clothes array
    //wet is a boolean for the umbrella, umbrella passes in img info - don't need wet, just umbrella with default of ''
    renderOutfit(parentElement, currentOutfit, currentClothing) {   //, umbrella = null
      console.log(parentElement.nodeType);  //says 1, which is an element node 
      console.log(typeof parentElement); //object
      console.log(parentElement, currentOutfit, currentClothing);
      
      renderClothesImage(parentElement, currentOutfit);
      currentClothing.forEach(item => {
        //parentElement.appendChild(renderClothesImage(item));
        console.log(item);
        renderClothesImage(parentElement, item);
        
      });
      // if(umbrella) {
      //   parent.appendChild(renderClothesImage(umbrella));
      // }
    }
  }//end class

    

  function renderClothesImage(parentElement, item) { //, sequence 1 of 8 etc position 
    const pic = document.createElement('li'); 
    console.log("in renderClothesImage", pic.nodeType, item); //says 1, which is an element node
    pic.myName = item.name;
    pic.setAttribute('data-name', item.name); //use to get audio
    pic.classList.add('pic');
    //pic.classList.add('hidden'); //for CSS, remove if don't use it
    pic.innerHTML = //`<div class="pic">
    `<div class="clothing"><img src="${imgBasePath}${item.imgSrc}" alt="${item.imgAlt}"></div>
    <span class="name hidden" style="anim-delay:">${item.name}</span>`;
    //</div>`;
    parentElement.appendChild(pic);
  }

  
