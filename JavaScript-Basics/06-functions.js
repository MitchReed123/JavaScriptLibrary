//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

hello(); // invokes the function hello.
hello();
hello();
hello();
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtracttwonumbers(firstnum, secondnum){
    console.log(firstnum - secondnum)
}

subtracttwonumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;

    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364






function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));


function World(a,b){
    return a + b;
}
console.log(World("Hello ", "World"));