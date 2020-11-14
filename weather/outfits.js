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