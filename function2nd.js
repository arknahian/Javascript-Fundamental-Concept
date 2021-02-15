function doubleIt(num){
    console.log(num * 2)
}
doubleIt(2);

//triple it with function 

function tripleIt(num){
    var result = num * 3;
    return result;
}
var first = tripleIt(3);
var second = tripleIt(8);
console.log( first, second );
console.log(first + second);



function add(num1, num2){
    var addResult = num1 + num2;
    return addResult;
}
var number = add(2, 3);
console.log(number)








//it will not be working

function anotherAdd(doubleIt, tripleIt) {
    var result = doubleIt + tripleIt;
    return result;
}
var another = anotherAdd(doubleIt(4), 3);
console.log(another);