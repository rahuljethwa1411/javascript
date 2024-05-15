// object deconstructing

const course = {
    name: "javascript",
    price : 10,
    inst : "rahul"
}

// console.log(course.name);    // old and easy way

const {name} = course
console.log(name);      // new and efficent way to deconstruct the values

const {name: na} = course
console.log(na);        // used to alias and minimize the texts

