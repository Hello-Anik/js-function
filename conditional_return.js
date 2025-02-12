function isEven(number){
    //Even declare
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const result = isEven(15);
console.log(isEven(50),isEven(7));

function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    else{
        return false;

    }
}

console.log(isOdd(30));
console.log(isOdd(5));