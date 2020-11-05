//let url = 'https://swapi.dev/api/people/';
let container = document.querySelector('.container');

let next = document.getElementById('next');
next.addEventListener("click", () => {
    console.log('inside next event listener');
    console.log(next.myUrl);
    if (next.myUrl) {
        //github is not accepting an http request, change it to https
        let fixedUrl = next.myUrl.replace("http", "https");
        console.log(fixedUrl);
        renderPeople(fixedUrl);
    }        
});

let prev = document.getElementById('prev');
prev.addEventListener("click", () => {
    console.log('inside next event listener');
    console.log(prev.myUrl);
    if (prev.myUrl) {
        //github is not accepting an http request, change it to https
        let fixedUrl = prev.myUrl.replace("http", "https");
        console.log(fixedUrl);
        renderPeople(fixedUrl);
    }                    
});

function setNavButton (id, url) {
    let button = document.getElementById(id);
    button.addEventListener('click', () => renderPeople(url));
}

for(let i = 1; i <= 9; ++i) {
    let id = i.toString();
setNavButton(id, 'https://swapi.dev/api/people/?page=' + id);
}

async function getPeople(url) {      
    try {
        let response = await fetch(url);
        console.log(response.status); // 200?
        console.log(response.statusText); // OK?

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderPeople(url = 'https://swapi.dev/api/people/') {
    let people = await getPeople(url);
    container.innerHTML = '';  //reset what is showing in html
    console.log(people);
    //add each person to the html output
    people.results.forEach(person => {
        let pdiv = document.createElement('div');
        pdiv.className = 'person';
        let htmlSegment =   `   <h2>${person.name}</h2>
                                <p>gender: ${person.gender}, birth year:${person.birth_year}</p>  `;
        pdiv.innerHTML = htmlSegment;
        pdiv.thePerson = person;
        container.appendChild(pdiv);      
    });

    next.myUrl = people.next;
    prev.myUrl = people.previous;
    
    addPeopleListener(); 
   
} //end renderPeople()

function addPeopleListener() {
    const childrenArray = Array.from(container.children);
    childrenArray.forEach(child => {
        child.addEventListener('click', e => {
            renderOnePerson(e.currentTarget.thePerson); 
        });
    });
}

renderPeople();

async function renderOnePerson(person) {
    let html = '';  //reset what is showing in html
    console.log(person, "in renderOnePerson");
    html=   `<div class="person">
        <h2>${person.name}</h2>
        <p>gender: ${person.gender}</p>
        <p>birth year: ${person.birth_year}</p>
        <p>height: ${person.height}</p>
        <p>mass: ${person.mass}</p>
        <p>hair color: ${person.hair_color}</p>
        <p>homeworld: ${person.homeworld}</p>
        <p>films: ${person.films}</p>
        <p>species: ${person.species}</p>
        <p>vehicles: ${person.vehicles}</p>
        <p>starships: ${person.starships}</p>
        </div> `;
    
    container.innerHTML = html;

    container.appendChild(buildBackButton()); 
}

function buildBackButton() {
    const backButton = document.createElement("button");
    backButton.innerHTML = 'Back'; 
    backButton.addEventListener('click', (event) => renderPeople());
    return backButton;
}

// what returns when requesting swapi.dev/api/people/1/
// {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.dev/api/planets/1/",
// 	"films": [
// 		"https://swapi.dev/api/films/2/",
// 		"https://swapi.dev/api/films/6/",
// 		"https://swapi.dev/api/films/3/",
// 		"https://swapi.dev/api/films/1/",
// 		"https://swapi.dev/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.dev/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.dev/api/vehicles/14/",
// 		"https://swapi.dev/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.dev/api/starships/12/",
// 		"https://swapi.dev/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.dev/api/people/1/"
// }