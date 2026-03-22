//function statement or function Declaration
function a() {
    console.log("function a");
}

a();

// function expression
var b = function () {
    console.log("callled from function b");
}

b();

//Anonymous function
var c = function () {
    console.log("callled from function c anonymous function");
}

c();

// Named functions
var d = function () {
    console.log("callled from function d");
}

d();


// First call function , first class citizen
var e = function (param1) {
    console.log(param1);
    console.log("func e");
    return param1;
}

function xyz() {
    console.log("this is xyz func");
}

e(xyz);


