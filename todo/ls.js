//local storage methods

//get data from local storage 
   export function readFromLS(key) { 
     return JSON.parse(localStorage.getItem(key)); 
   }

//set data in local storage
   export function writeToLS(key, data) { 
        localStorage.setItem(key, JSON.stringify(data));  
   }