
let name = {
    firstName: "saksham",
    lastName: "ved",

}

let printFullName = function (homeTown) {
    console.log(this.firstName + " " + this.lastName + " From : " + homeTown);

}

printFullName.call(name, "delhi");




let name2 = {
    firstName: "Akshay",
    lastName: "Saini"
}


printFullName.call(name2, "Agra");


printFullName.apply(name2, ["Agra"]);


let printmyname = printFullName.bind(name2, ["Mumbai"]);


printmyname();





