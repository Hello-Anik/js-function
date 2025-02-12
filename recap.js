//function declare

function doubleIt (number){
    const total = number + number;
    console.log('show the number of total:', total)
}

// function call 
console.log('jaw pakhi bolo tare meger upare dekha koro');
doubleIt(2);
console.log('------------');
doubleIt(56);
console.log('ohoo__________');
doubleIt(55);
const money = 500;
doubleIt(money);
const double = 600;
doubleIt(double);


//function declare
function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);

}
const fatherAge = 53;
const sonAge = 17;
difference(fatherAge, sonAge);



//recap 
function add (price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(50, 25);
console.log('bill is', bill)

function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add2(30, 40);
console.log('the bill is', bill2);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = diff * num2;
    const result = mult /2;    
    return result;
}

const result = doMath(10, 5);

console.log('output is', result);
