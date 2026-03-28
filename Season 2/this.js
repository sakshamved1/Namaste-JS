"use strict"

// this in global space
console.log(this); // GlobalObject -- window, global

// this inside a function
function x() {
    //the value depend on strict and nonstrict mode
    console.log(this);  // (this substitution)
}


// this in strict mode - (this substitution)

// this value depends on how fucntion is called (window)

x(); //without reference
window.x(); // window

// this inside an object's method

// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this);
//     }
// }

// obj.x();


// call apply bind methods (sharing methods)
// const student = {
//     name: "Saksham",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// student.printName();


// const student2 = {
//     name: "Akshay"
// }

// student.printName.call(student2);        // value of this == student

// this inside arrow function



const obj = {
    name: "Sak",
    x: () => {
        console.log(this);

    }
}

obj.x();

// this inside nested arrow function

const obj2 = {
    name: "saksham",
    x: function () {
        // enclosing lexical Context
        const y = () => {
            console.log(this);
        }

        y();
    }
}

obj2.x();

// this inside DOM is reference elements     => reference to HTMLElements

