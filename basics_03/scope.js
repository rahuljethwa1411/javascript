// let a = 10;
// const b = 20;
// var c = 30;
var a = 100;
if (true) {
    var a = 50
    
}

// +++++++++++++++DONT USE VAR BECAUSE OF SCOPE ISSUE+++++++++++++++

console.log(a);
// console.log(b);
// console.log(c);

let b = 100;
if (true) {
    let b = 50
    
}

console.log(b);
