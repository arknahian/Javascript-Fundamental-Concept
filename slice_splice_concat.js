var name = ["Justin", "Bieber", "Vin Diesel", "The Rock", "John Cena"];

console.log(name);
console.log(name.slice(2));

name.unshift("Alam");
console.log(name);
console.log(name.slice(2,4));

name.splice(0, 3, "Al Nahian", "Ark");
console.log(name)




//concat 

var name2 = ["Salman", "Ashish", "Ajey", "BongGuy"];
var resultAfter = name.concat(name2);
console.log(resultAfter);

