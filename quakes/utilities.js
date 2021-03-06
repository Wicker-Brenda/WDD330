//helper function to fetch the data from an external source and return it in JSON format
export async function getJSON(url) {
    try {
        const response = await fetch(url);
        console.log(response);
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const fetchJSON = await response.json();
                console.log(fetchJSON);
                return fetchJSON;
            }
        }
        catch(error) {
            console.log(error);
        }
}

//get the current location of the user, see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
//options are enableHighAccuracy (default: false), timeout (default:infinity), maximumAge (default:Infinity)
export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};


//API documentation: https://earthquake.usgs.gov/fdsnws/event/1/

// export function getJSON(url) {
//     return fetch(url)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         } else {
//           //console.log(response.json());
//           return response.json();
//         }
//       })
//         .catch(function(error) {
//         console.log(error);
//         });
// }