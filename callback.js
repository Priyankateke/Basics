function show(number) {
    return number+5;

}

function display(callback) {
    console.log("In display function")
    return callback(4);

}

console.log(display(show));