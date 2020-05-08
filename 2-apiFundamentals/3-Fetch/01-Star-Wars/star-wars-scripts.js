var starWarsPeopleList = document.querySelector("ul");

fetch("https://swapi.dev/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });
