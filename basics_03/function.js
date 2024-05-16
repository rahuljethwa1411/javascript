// function user() {
//     console.log('R');
//     console.log('A');
//     console.log('H');
//     console.log('U');
//     console.log('L');
// }

// user()

function addNum(num1,num2) {
    return num1 + num2
}

// console.log(addNum(3,5))   // example 1

// exmaple 2

function logIn(username) {

    return `${username} just logged in the system`
}

// console.log(logIn("rahul"));


// shopping cart and n number of arguments

function myCart(value1,...num1) {
    return num1
}

// console.log(myCart(3,4,5));

// HOW TO PASS OBJECT IN A FUNCTION AND WRITE THE CODE ACCORDINGLY

const user = {
    username : "rahul",
    price : 10
}

function returnObj(anyobj) {
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

returnObj(user)