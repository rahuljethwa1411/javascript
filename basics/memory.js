// two types of memory

//  1. stack 2. heap

// stack memory - primitive

// heap memory - non primitive datatype

let userOne = {
    username: "rahul",
    roll: 22
}

let userTwo = userOne

userTwo.username = "rahuljethwa"

console.log(userOne.username);
console.log(userTwo.username);
