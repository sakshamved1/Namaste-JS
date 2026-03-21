var x = 1;

// New execution context is created and pushed into call stack
a();
b();

console.log(x);



function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 20;
    console.log(x);
}


