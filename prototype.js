//prototype string

var student = function() {
    this.name = "Priyanka"
    this.age = 27
    this.email = "priyanka@gmail.com"
}


//getName : function
student.prototype = {
    address : "new mumbai",
    getName :function() {
        return this.name
    }
}

//obj of student
var stud = new student();
console.log(stud.address);

/**
 * o/p: new mumbai
 */