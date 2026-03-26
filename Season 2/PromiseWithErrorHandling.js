
// const cart = ["pant", "short", "kurta", "jeans"];


// createorder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId
//     })
//     .catch(function (err) {
//         console.log(err.message);

//     })
//     .then((function (orderId) {
//         return proceedToPayment(orderId);
//     }))
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);

//     })
//     .then(function (orderId) {
//         console.log("i'll def be called");

//     })
// // proceedToPayment(cart);

// ///////////////////////////////////////////
// // Producer



// function createorder(cart) {
//     const pr = new Promise(function (resolve, reject) {

//         //validatecart
//         //createorder
//         //orderid

//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         //logic for createOrder
//         const orderId = "!2345";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId);

//             }, 5000);
//         }

//     })


//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         resolve("Payment was  succesful")
//     })
// }

// function validateCart(cart) {
//     return false;
// }



const cart = ["iphone", "Oneplus", "Samsung", "Sony"];

createOrder(cart)
    .then(orderId => {
        console.log("Order created:", orderId);
        return proceedToPayment(orderId);
    })
    .then(paymentInfo => {
        console.log("Payment info:", paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(amount => {
        console.log("Order amount:", amount);
        return updateWallet(amount);
    })
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error("Error:", err.message);
    });

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            return reject(new Error("Cart is not valid"));
        }

        const orderId = "1122";

        setTimeout(() => resolve(orderId), 500);
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (!orderId) {
            return reject(new Error("Invalid OrderId"));
        }

        setTimeout(() => {
            resolve({
                orderId,
                status: "success",
                paymentId: "pay_12345"
            });
        }, 500);
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        if (!paymentInfo || paymentInfo.status !== "success") {
            return reject(new Error("Order not successful"));
        }

        setTimeout(() => resolve(5000), 500);
    });
}

function updateWallet(amount) {
    return new Promise((resolve, reject) => {
        if (!amount) {
            return reject(new Error("Invalid amount"));
        }

        setTimeout(() => {
            resolve(`Wallet updated with ₹${amount}`);
        }, 500);
    });
}

function validateCart(cart) {
    return Array.isArray(cart) && cart.length > 0;
}