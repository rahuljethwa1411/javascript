const user = {
    username : "rahul",
    roll : 15,
    message : function () {
        console.log(`${this.username} welcome to the portal`);
    }

}
// user.message()

// console.log(this);

// +++THIS ONLY WORKS INSIDE AN OBJECT NOT ON NORMAL FUNCTION TO GET THE CONTEXT VALUES

