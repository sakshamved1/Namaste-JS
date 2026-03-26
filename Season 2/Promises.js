

// const cart = ["shoes", "pants", "kurta", "jeans"];


createOrder(cart, function () {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        })
    });
}) //orderid

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    })



// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });



// const GITHUBAPI = "https://api.github.com/akshaymarch7";

// const user = fetch(GITHUBAPI);

// user.then((data) => console.log(data)
// );














