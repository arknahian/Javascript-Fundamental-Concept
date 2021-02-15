function feetToInch(num){
    var inch = num * 12;
    return inch;
}

function inchToFeet(num) {
    var feet = num / 12;
    var result = feet.toFixed(3);
    return result;
}

var getInch = feetToInch(23);
console.log(getInch);

var getFeet = inchToFeet(878);
console.log(getFeet);