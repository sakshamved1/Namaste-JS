

const radius = [3, 1, 2, 4];


// const calculateArea = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }

// const calculateCircumference = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }

//     return output;
// }

// const calculateDiameter = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }


//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));


const Area = function (radius) {
    return Math.PI * radius * radius;
}


const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logic) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}



// console.log(calculate(radius, Area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

console.log(radius.map(Area));
console.log(radius.calculate(Area));  //Similar to mape function




