// const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
// const key = "nMibW9Urp2Ch0oyBBR7NFM1CWHUqWfvf"; //2
// let url;
// //querySelector will search for the first element within the doucment that matches the specified selector or group of selectors, if no matches are found, null is returned
// //SEARCH FORM
// const searchTerm = document.querySelector(".search"); // grabbing the search field
// const startDate = document.querySelector(".start-date"); //grabing the start date field
// const endDate = document.querySelector(".end-date"); //grabbing the end-date field
// const searchForm = document.querySelector("form"); //grabs the tag form
// const submitBtn = document.querySelector(".submit"); //grabbing the submit button

// //RESULTS NAVIGATION
// const nextBn = document.querySelector(".next"); //grabing a specific class to work with, which would be the button "next"
// const previousBtn = document.querySelector(".prev"); //grabbing the button "previous" class
// const nav = document.querySelector("nav"); //grabs the tag Nav

// //RESULTS SECTION
// const section = document.querySelector("section"); //grabs the section tag
// // this make it so "prev/next" buttons wont show when the page is originally loaded so there isnt next/prev buttons when there are no results to show
// nav.style.display = "none"; // makes it so the navigation buttons wont pop up by default

// let pageNumber = 0; //sets it to 0 for default
// console.log("PageNumber", pageNumber);
// let displayNav = false; //doesnt show the nav info if nothing is there

// //addEventLister() helps us identify a target and the add an eventlister on that target, event targets can be an element, the doument object, the window object or any other object that supports events.

// // We want to submit a form that contains a query: "Sports","Politics","Weather", etc...
// // We want to be able to toggle through the results when we click on the next or previous button

// //         1                      2
// searchForm.addEventListener("submit", fetchResults); // searchs for when the submit button is pressed and fetches the results fromt he search bar
// nextBtn.addEventListener("click", nextPage); // next page button listener to show the next page of results
// previousBtn.addEventListener("click", previousPage); // same as above but does previous results
// //                    1
// function fetchResults(e) {
//   console.log(e); //2
//   // Assemble the full URL
//   // backticks are string interpalation
//   url =
//     baseURL +
//     "?api-key" +
//     key +
//     "&page=" +
//     pageNumber +
//     "&q=" +
//     searchTerm.value; //3
//   console.log("URL:", url); //4
//   // 1 - We create an article variable that will create a node in the DOM that is an article element. Remember that rticle is an HTML5 element
//   // 2 - We also create a heading variable that creates a node in the DOM that is an h2 element
//   // 3 - We call appendChild() on the article element. This will create a child node on that element. We pass in 'heading' to the appendChild method. This means that there will be an h2 element inside each article element
//   // 4 - Since we havea  section in our original html file, we call the appendChild() method on the section element. We pass in the article to that. This way, the article is a child of section, and the h2 is a grandchild of seciton

//   e.preventDefault(); // prevents the post and implements the get .
//   url = // creates the entire url
//     baseURL +
//     "?api-key=" +
//     key +
//     "&page=" +
//     pageNumber +
//     "&q=" +
//     searchTerm.value;
//   console.log("URL:", url);
//   //INSERT HERE checks the date values you can enter into the form, if its empty it leave teh
//   if (startDate.value !== "") {
//     //checks to see if the box is empty
//     console.log(startDate.value);
//     url += "&begin_date=" + startDate.value;
//   }

//   if (endDate.value !== "") {
//     url += "&end_date=" + endDate.value;
//   }
//   //END HERE
//   fetch(url) //fetches the url and returns the results from the JSON. FETCH is the function here, takes in a parameter of URL
//     .then(function (result) {
//       //creates a function, uses json in the promise,
//       return result.json();
//     })
//     .then(function (json) {
//       // grabs result from the promise above and exucutes the function with the data in the json placeholder
//       displayResults(json); //1 & //3 sends the results to the displayResults function
//     });
// }

// function nextPage(e) {
//   pageNumber++; // Adds one to the url for page number
//   fetchResults(e); //loads next page of results, stores the 'e' so the page doesnt refresh again
//   console.log("Page Number:", pageNumber);
// } //5

// function previousPage(e) {
//   if (pageNumber > 0) {
//     pageNumber--; // takes on awawy from the url page number
//   } else {
//     return;
//   }
//   fetchResults(e);
//   console.log("Page:", pageNumber);
// }

// function displayResults(json) {
//   while (section.firstChild) {
//     section.removeChild(section.firstChild);
//   }
//   // 1 - We run the displayResults function each time the button gets pressed. In this chunk of code, we are checking to see if the section element has any child elements. If the section.firstChild is true, then we call removeChild on the section variable, which targets the section element in the html file. This simply will clear out any child elements that are in the section.
//   let articles = json.response.docs;

//   if (articles.length === 10) {
//     nav.style.display = "block"; //shows the nav display if 10 items are in the array
//   } else {
//     nav.style.display = "none"; //hides the nav display if less than 10 items are in the array
//   }

//   if (articles.length === 0) {
//     console.log("No results"); // logs no results to the console if there is no match to their search
//   } else {
//     //Display the data
//     for (let i = 0; i < articles.length; i++) {
//       let article = document.createElement("article"); // this set of Lets creates sections in the final display
//       let heading = document.createElement("h2");
//       let img = document.createElement("img");
//       let link = document.createElement("a");
//       let para = document.createElement("p");
//       let clearfix = document.createElement("div");

//       let current = articles[i]; // just holding that specific article that we are
//       console.log("Current:", current);

//       link.href = current.web_url;
//       link.textContent = current.headline.main;

//       for (let j = 0; j < current.keywords.length; j++) {
//         //loops over the amount of keywords in the array
//         let span = document.createElement("span"); // creating a span element

//         span.textContent += current.keywords[j].value + " "; //grabbing the content in the span element

//         para.appendChild(span); //throws a span element in the parent that we are running the appendchild on, putting a span tag in a p tag
//       }
//       //   // gets the link of the photo and displays it.
//       //   if (current.multimedia.length > 0) {
//       //     //   just checks to see if there is a article there
//       //     img.src = "http://www.nytimes.com/" + current.multimedia[0].url; // pulls the image from the API to be shows with the appendChild down below
//       //     img.alt = current.headline.main;
//       //   }

//       clearfix.setAttribute("class", "clearfix");

//       article.appendChild(heading);
//       heading.appendChild(link); // Adds the link to the article that was pulled from the API
//       article.appendChild(img); // Adds the image to the article that was pulled fromt he API
//       article.appendChild(para); // Adds a snippet of info the small block that is showed to you
//       article.appendChild(clearfix);
//       section.appendChild(article);
//     }
//   }
// }

// 1 - The little (e) is part of something in Javascript called an event handling function. Every event handling function receives an event object. For the purpose of this discussion, think of an object as a "thing" that holds a bunch of properties (variables) and methods (functions). The handle, the e, is similar to a variable that allows you to interact with the object.
// 2 - We are logging the event object so that you can look at it in the console for learning purpose
// 3 - We are creating a versatile query string. The url variable is loaded with other variables and url requirements. We have our base for the API, our key, the page number that carresponds to the results array, and our specific value Something to study on your own might be: '?','&' and '&q=' in a URL string.
// 4 - We log the string so that we can see it. Later on, you can try another search and see how it changes
// 5 -  We add in a few basic functions to define "nextPage" and "previousPage" and log them. If oyu leave out this step, your app will get an error

//______________________________________________________________________________________________________________
//| Parameter	                        |Purpose                                                               |
//| baseURL	                            |The actual web address for the API                                    |
//| apiKey	                            |Your key allowing you access into the API                             |
//| page	                            |The current page of results being accessed                            |
//| q	                                |This is the search term, or query, that we are looking for in the API |
//| begin_date	                        |The earliest (furthest away) date from which we want to see articles  |
//| end_date	                        |The latest (most recent) date from which we want to see articles      |
//| Clearfix                            |a way for an element to clear its child elements                      |
//--------------------------------------------------------------------------------------------------------------

// This is the working code that Donovan slacked to us
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "S0iwMsrXcgsXcoHQY6IEPYMcGX7NmMMU";
let url;

const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");
const section = document.querySelector("section");

nav.style.display = "none";

let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber);

searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log("URL:", url);

  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    console.log(endDate.value);
    url += "&end_date=" + endDate.value;
  }

  fetch(url)
    .then(function (result) {
      console.log(result);
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      displayResults(json);
    });
}

function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;

  if (articles.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement("article");
      let heading = document.createElement("h2");
      let link = document.createElement("a");
      let img = document.createElement("img");
      let para = document.createElement("p");
      let clearfix = document.createElement("div");

      let current = articles[i];
      console.log("Current:", current);

      link.href = current.web_url;
      console.log(link);
      link.textContent = current.headline.main;

      para.textContent = "Keywords: ";
      // Group 3
      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement("span");
        span.textContent += current.keywords[j].value + " ";
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute("class", "clearfix");

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log("Page Number:", pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log("Page:", pageNumber);
}
