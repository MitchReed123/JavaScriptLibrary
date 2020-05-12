const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("table");

searchForm.addEventListener("submit", fetchSpace);
// .preventDefault stops the default refresh from happening so data isnt lost on page
// fetches always return promises
function fetchSpace(e) {
  e.preventDefault();

  fetch(baseURL)
    .then((data) => data.json())
    .then((json) => displayRockets(json))
    .catch((err) => console.log(err));
}

function displayRockets(rockets) {
  console.log("Results:", rockets);
  let eachRocket = rockets.forEach((r) => {
    let rocket = document.createElement("tr");
    let rocketName = document.createElement("td");
    let rocketCost = document.createElement("td");
    let country = document.createElement("td");
    let descr = document.createElement("td");
    let act = document.createElement("td");

    rocketName.innerText = r.name;
    rocketCost.innerText = r.cost_per_launch;
    country.innerText = r.country;
    descr.innerText = r.description;
    act.innerText = r.active;

    spaceShips.appendChild(rocket);
    rocket.appendChild(rocketName);
    rocket.appendChild(rocketCost);
    rocket.appendChild(country);
    rocket.appendChild(descr);
    rocket.appendChild(act);
  });
}
//whiteboard challenge for tommorow i need to study: functions/parameters, for loops, objects
