// usage: node 03-simple-async.js

const print = str => {
    setTimeout(function () {
        console.log(str)
    }, 100) // set timeout for 100 ms
}

const print2 = str => {
    setTimeout(function () {
        console.log(str)
    }, 30)
    print("Calling print from print2")
}

function execute(callbackFunc, str) {
    callbackFunc(str)
}

execute(print, "Hello using callback function print")
execute(print2, "Hello using another callback function print2")
console.log("Last code line")

