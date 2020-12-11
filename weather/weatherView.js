  //image path
    const imgBasePath = "images/";
  
  // Weather View handler
  export default class WeatherView {
    //display weather info in the header
    renderWeather(daily, current, weatherElement, icon, arrow) {
        console.log("in renderWeather", daily, current, weatherElement, icon, arrow); 
        
        //date/temp infor 
        let date = new Date();
        let currentTemp = Math.round(current.temp);
        let feelsDay = Math.round(daily[0].feels_like.day);
        document.getElementById("date").innerHTML = 
            `${date.toDateString()}<br>
            <span class="temp">${currentTemp}&deg;</span><br>
            feels like: ${feelsDay}`;

        //weather conditions and icon    
        let conditions = document.getElementById("conditions");
        let desc = current.weather[0].description;
        conditions.innerHTML = `<img src="${imgBasePath}${icon.imgSrc}" alt="${icon.imgAlt}"></img><p>${desc}</p>`;
       
        //high-low temps
        let hiLow = document.getElementById("hilow");
        let max = Math.round(daily[0].temp.max);
        let min = Math.round(daily[0].temp.min);
        hiLow.innerHTML = `<img src="${imgBasePath}${arrow.imgSrc}" alt="${arrow.imgAlt}"></img><p>high: ${max}</p><p>low: ${min}</p>`;
    } 

    //display outfit and clothing items
    renderOutfit(parentElement, currentOutfit, currentClothing) {              
      renderClothesImage(parentElement, currentOutfit);
      currentClothing.forEach(item => {
        renderClothesImage(parentElement, item);        
      });
    }

  }//end class

  
  function renderClothesImage(parentElement, item) { 
    const pic = document.createElement('li');
    pic.setAttribute('data-name', item.name); 
    pic.classList.add('pic');
    pic.innerHTML = 
    `<div class="clothing"><img src="${imgBasePath}${item.imgSrc}" alt="${item.imgAlt}"></div>
    <span class="name hidden" style="anim-delay:">${item.name}</span>`;    
    parentElement.appendChild(pic);
  }

  
