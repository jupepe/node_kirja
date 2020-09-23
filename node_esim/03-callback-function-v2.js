// use:_ 03-callback-function-v2.js
function myFunctionWithCallback(param1, param2, callback) {
    return callback(param1, param2)
}

const myFunc = (p1, p2) => 'Pizza with: ' + p1 + ', ' + p2
const result = myFunctionWithCallback('ham', 'cheese', myFunc)

console.log(result)
