
const arr = [5, 1, 3, 2, 6];


// // Double - [10,2,6,4,12];
// const double = (x) => {
//     return x * 2;
// }

// // Triple - [15,3,9,6,18];
// const triple = (x) => {
//     return x * 3;
// }

// const binary = (x) => {
//     return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// const isodd = (x) => {
//     return x % 2 != 0;
// }
// const iseven = (x) => {
//     return x % 2 == 0;
// }

// const greaterThan4 = (x) => {
//     return x > 4;
// }

// const output = arr.filter(greaterThan4);
// console.log(output);

// const findsum = arr.reduce((acc, curr) => acc += curr);


// const findmax = arr.reduce(function (max, curr) {


//     if (max < curr) {
//         max = curr;
//     }

//     return max;
// }, 0);


// // console.log(findsum);
// console.log(findmax);

const users = [
    { "name": "Aarav Mehta", "age": 24, "phone": "+91 9876512340" },
    { "name": "Riya Sharma", "age": 29, "phone": "+91 9123456781" },
    { "name": "Kunal Verma", "age": 31, "phone": "+91 9988766552" },
    { "name": "Sneha Patel", "age": 22, "phone": "+91 9012345673" },
    { "name": "Arjun Nair", "age": 35, "phone": "+91 9765432104" },
    { "name": "Priya Desai", "age": 27, "phone": "+91 9345678915" },
    { "name": "Rohit Singh", "age": 40, "phone": "+91 9090911226" },
    { "name": "Neha Kapoor", "age": 26, "phone": "+91 9887654337" }
];

//Using reduce
// const output = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }

//     return acc;

// }, {});


// console.log(output);


//using reduce

// const output = users.filter((x) => x.age > 30 ? console.log(x.name) : console.log(" "));
// const output = users.filter((x) => x.age > 30).map((x) => x.name);

const output = users.reduce((acc, curr) => {
    if (curr.age > 30) {
        acc.push(curr.name);
    }

    return acc;
}, []);


console.log(output);



