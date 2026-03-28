

/*
    * What is async ?
    * What is await ?
    * how async await works BTS?
    * Examples of async/await
    * error handling
    * interviews
    * Async await vs promise.then/.catch

*/

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved Promise 1");
//     }, 10000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved Promise 1");
//     }, 20000)
// });

// Always return a promise
// async function getData() {
//     return p;
// }

// const data = getData();

// data.then((res) => console.log(res));


/////////////////////////
// function getData() {
//     // JS Engine will not wait for Promise to be resolved
//     p1.then((res) => console.log(res));
//     console.log("Namaste js");

// }

// getData();

// async function handlePromise() {

//     console.log("Hello world");

//     const promiseData = await p1;
//     console.log("Namaste Javascript");
//     console.log(promiseData);


//     const promiseData2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(promiseData2);

// }

// handlePromise();




//////////////////////////////Promise

const GITHUB_URL = "https://api.github.com/users/akshaymarch7";


async function handlePromises() {

    try {
        const data = await fetch(GITHUB_URL);


        const jsonValue = await data.json();
        console.log(jsonValue);

    }
    catch (err) {
        console.log(err.message);

    }




}

handlePromises().catch((err) => console.log(err));