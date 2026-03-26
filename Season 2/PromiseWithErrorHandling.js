
const cart = ["pant", "short", "kurta", "jeans"];


createorder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId
    })
    .catch(function (err) {
        console.log(err.message);

    })
    .then((function (orderId) {
        return proceedToPayment(orderId);
    }))
    .then(function (paymentInfo) {
        console.log(paymentInfo);

    })
    .then(function (orderId) {
        console.log("i'll def be called");

    })
// proceedToPayment(cart);

///////////////////////////////////////////
// Producer



function createorder(cart) {
    const pr = new Promise(function (resolve, reject) {

        //validatecart
        //createorder
        //orderid

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "!2345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);

            }, 5000);
        }

    })


    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment was  succesful")
    })
}

function validateCart(cart) {
    return false;
}