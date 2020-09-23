// Usage:  node 02-js-array-consoleapp.js

const message = ""
const words = ["looping", "array", "is", "simple", "at", "node"]

console.log(words.join(" "))

const sentence = words.reduce((result, word, ind) => {
        console.log(ind + ":" + word)
        return result + word
    }
)

const sum = [1, 2, 3, 4, 5].reduce((total, num, ind) => {
        console.log(ind + ":" + num + "=" + total)
        return total + num
    },
    0)

console.log(sentence)
console.log(sum)


