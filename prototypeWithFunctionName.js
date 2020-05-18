function student() {
    this.name = "Priyanka",
    this.age = 26,
    this.email = "pri@gmail.com"
}

student.prototype= {
    address : "shridi",
    getName : function() {
        return this.name
    }
}

var stud =new student()
console.log(stud.getName());
console.log(stud.address)

console.log(student)