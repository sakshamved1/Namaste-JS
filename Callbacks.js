
// Callback function

// setTimeout(function () {
//     console.log("timer");
// }, 5000);
// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");

// })


function attachEventListner() {

    let count = 1;
    document.getElementById("btn").addEventListener("click", function xyz() {
        console.log("Button clicked", count++);

    })
}

attachEventListner();