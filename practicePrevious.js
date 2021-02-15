function doubleIt(num){
    var total = num * 2;
    return total;
}
var number1 = doubleIt(2);
console.log(number1);

function makingTotal(num1, num2){
    var multiples = num1 * 2;
    var total = multiples + num2;
    return total;
}
var sum = makingTotal(3, 4);
console.log(sum);

var sum2 = 0;
while(sum2 < 15){
    console.log(sum2);
    sum2++;
}

var sum4 = [213, 4234, 5433, 232];
var sum3 = [11, 23, 33, 21, 54, 32];
sum3.concat(sum4);
for(let i = 0; i < sum3.length; i++) {
    var element = sum3[i];
    console.log(element);
}

function makingALoop(sum4) {
    var sum4 = [213, 4234, 5433, 232];
    for (let i = 0; i < sum4.length; i++) {
        const element = sum4[i];
        console.log(element);
    }
}
makingALoop();

var switcher = 23;
switch (switcher) {
    case 89:
        console.log("I am 89");
    break;
    case 56:
        console.log("This is 56");
    break;
    case 23:
        console.log("I am 23");
    case 45:
        console.log("This is the correct thing in the switch thing. I wanna make that again I getting fun from this");
    break;
    default:
        console.log("Fuck I am none of these Please write the exact number");
}

var student = {
    name: "Al Nahian Ark",
    id: 32,
    phone: 7824736826476,
    email: "alnahianark@mailas.com"
}
var student2 = {
    name: "Lalisa Manoban",
    id: 43,
    phone: 247783647823657,
    email: "lalisamanoban@mailas.com"
}


var name = student.name;
var id = student["id"];
var propertyName = "email";
var email = student2[propertyName];



console.log(student);
console.log(student2);
console.log(name);
console.log(id);
console.log(email);