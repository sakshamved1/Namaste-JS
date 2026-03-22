
// Data hiding
function Counter() {

    var count = 0;

    return {
        incrementCounter: () => {
            count++;
            console.log(count);

        },
        decrementCounter: () => {
            count--;
            console.log(count);

        }
    }

    // this.incrementCounter = () => {
    //     count++;
    //     console.log(count);

    // }
    // this.decrementCounter = () => {
    //     count--;
    //     console.log(count);

    // }
}

var counter1 = Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();


