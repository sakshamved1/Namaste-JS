

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 Success")
        reject("p1 fail")
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("p2 rejected");
        // resolve("p2 success")
        reject("p2 fail")
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 Success")
        reject("p3 fail")
    }, 2000);
})


Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.error(err.errors));



