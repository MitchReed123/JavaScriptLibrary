/*
Challenge (Arrays):
Color List:
Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
*/

let color = [
  "red",
  "orange",
  "coral",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "violet",
  "black",
];
let suffix = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];

function numColor() {
  for (i = 0; i < color.length; i++) {
    let first = suffix;
    let colors = color;
    console.log(i + 1 + first[i] + " is", colors[i]);
  }
}

numColor();

// function printOrder(items, endings) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${items[1]} is ${i + 1}${i >= 3 ? endings[3] : endings[i]}`);
//   }
// }

// printOrder(color, suffix);
