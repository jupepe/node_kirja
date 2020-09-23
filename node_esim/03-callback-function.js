// use: 03-callback-function.js
function myFunctionWithCallback(param1, param2, callback) {
    console.log(
        'Started function with two parameter: ' + param1 + ', ' + param2)
    return callback(param1, param2)
}

const result = myFunctionWithCallback('ham', 'cheese', function (p1, p2) {
    console.log('callback with parameters ' + p1 + ', ' + p2)
    return 'Pizza with: ' + p1 + ', ' + p2
})

console.log(result)