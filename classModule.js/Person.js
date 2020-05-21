let address="pune";
class Person {

    data(name,age) {
        console.log("name: "+name+" age : "+age)
        this.Show()
    }

    Show() {
        console.log("welcome" + address)
    }
}

module.exports = Person;