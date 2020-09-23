// Usage:  node 03-cmd-line-arguments.js 10 

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SIZE_OF_ARRAY")
    process.exit(-1)
}

console.log(process.argv);

let param = process.argv[2]
param = (param < 0 || param > 100) ? 100 : param

console.log('Param: ' + param)


const createArray = (last) => {
    let result = []

    for (let i = 0; i <= last; i++) {
        result.push(getRandomInt(1, 100))
    }
    return result
}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}


const arr = createArray(param)
console.log('Generated Array: ' + arr)


