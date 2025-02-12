function bathKhau (){
    console.log('hand wash naw');
    console.log('hat mucho');
    console.log('plat naw and vatt torkari naw');
    console.log('gopas gopas khawa suru koro');
}




//function call
// bathKhau();

function square (number){
    console.log(number);
    console.log('value of the number parameter', number);
    let borgo = number * number;
    console.log('square of the given number is:', borgo)

}

square(4);
square(2);
square(9);
square(11);
square(3);


function add (num1, num2){
    const sum = num1 - num2;
    const sum2 = num1 * num2;
    console.log('value of the number parameter', num1 , num2);
    console.log(sum, sum2);
    
}

add(4000, 240);

function addAll(a, b, c, d){
    const total = a + b + c + d;
    console.log('value of the number parameter:', a, b, c, d);
    console.log(a, b ,c ,d)
    console.log('show the number off total:' ,total);
}

addAll(2, 2, 3, 3);

addAll(5, 6, 7, 2)

/**What is  parameter
 * 
 * how to declare parameter
 * function name(parameter){}
 * nameOfFunction(*)
 */