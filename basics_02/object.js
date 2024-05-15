// object literals

// singelton only forms when obj is created using constructor

// multiple instances happens only in case of literals

const data = {
       name : "rahul",
       email: "rahul@gmail.com" ,
       roll : 22 
}

console.log(data.email);
console.log(data["email"]);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(obj1))
console.log(Object.values(obj1))