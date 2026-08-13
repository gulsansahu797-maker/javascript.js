// prototype is a property of a function that allows you to add
//  properties and methods to it. When you create an object using a 
// constructor function, the object inherits properties
//  and methods from the constructor's prototype.

function multipleBy5(num) {
    this.num = num
    return num * 5    
}

multipleBy5.power = 2

console.log(multipleBy5(2));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

createUser.prototype.increment = function () {
    this.score++
}
const coffee = new createUser("coffee", 150)
const tea = new createUser("tea", 200)
const milk = new createUser("milk", 50)


coffee.printMe()
tea.printMe()
milk.printMe()  

/*
here's what happens behind the scenes new keywoes
is used:

A new object is created : the new keyword initiates the
creation of a new javascript object.

A phtotype is created is linked : the NEW created object gets linked
to the prototype property of the constructor fuction. 