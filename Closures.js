
// Closures
// function x() {
//     var a = 10;

//     function y() {
//         console.log(a);

//     }
//     return y;
// }

// var z = x();

// z();
// console.log(z);



// Data hiding
// function createBankAccount() {
//     let balance = 0;

//     return {
//         deposit(amount) {
//             balance += amount;
//         },
//         getBalance() {
//             return balance;
//         }
//     }
// }

// const account = createBankAccount();
// account.deposit(100);
// console.log(account.getBalance());


// Function Factory
// function multiplier(x) {
//     return function (y) {
//         return x * y;
//     };
// }
// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(10));
// console.log(triple(30));


// function currying
function multiplier(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

const fn = multiplier(10)(20)(30);
console.log(fn);
