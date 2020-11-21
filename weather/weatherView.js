  // Weather View handler
  export default class WeatherView {
    //todo write code to render the details to HTML, in outfits.js 
    renderWeather(daily, current, weatherElement) {
        console.log("in renderWeather", daily, current, weatherElement); 
        
        //display info as a test 
        let date = new Date();
        document.getElementById("date").innerHTML = '<h2>' + date.toDateString() + '</h2>';
    
        let temp = document.getElementById("temp");
        let currentTemp = current.temp;
        temp.innerHTML = 'The current temperature is ' + currentTemp;
        
        let hiLow = document.getElementById("hilow");
        let max = daily[0].temp.max;
        let min = daily[0].temp.min;
        hiLow.innerHTML = 'The high today will be ' + max + '. The low today will be ' + min + '.'
    
        let conditions = document.getElementById("conditions");
        let main = daily[0].weather[0].main;
        let desc = daily[0].weather[0].description;
        conditions.innerHTML = '<h2>' + main + '</h2><p>' + desc + '</p>';
    
        let feels = document.getElementById("feels");
        //let feelsMorn = daily[0].feels_like.morn;
        let feelsDay = daily[0].feels_like.day;
        feels.innerHTML = '<p> It feels like ' + feelsDay + '</p>';

         
  
    //call showOutfit(daily, current);
    } 

    //pass in outfit and individual clothes together in clothes array
    //wet is a boolean for the umbrella, umbrella passes in img info
    renderOutfit(parent, clothes, wet, umbrella) {  
      clothes.forEach(item => {
        parent.appendChild(renderClothesImage(item));
      });
      if(wet) {
        parent.appendChild(renderClothesImage(umbrella));
      }
    }
  }

    //image path
    //todo: change to what is needed in GitHub
    const imgBasePath = ""; //"./"; 

  function renderClothesImage(item) {
    const pic = document.createElement("li"); //do I want this as an li?
    pic.myName = item.name;
    //pic.classList.add('clothes'); //for CSS, remove if don't use it
    pic.innerHTML = `<div class="image"><img src="${imgBasePath}${item.imgSrc}" alt="${item.imgAlt}"></div>`;
  }

  
