
console.log("Start");


setTimeout(function CBT() {
    console.log("setTimeout");

}, 5000);

fetch("https://api.github.com/users/Akshaymarch7").then(function cbf() {
    console.log(result);
})


console.log("End");