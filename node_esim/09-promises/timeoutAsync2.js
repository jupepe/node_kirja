// node timeoutAsync2.js
const resolveAfter = (sleepTime) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved in ' + sleepTime + ' ms.');
        }, sleepTime);
    });
}

async function asyncRunning(sleepTime) {
    const result = resolveAfter(sleepTime);
    console.log(await result);
}

console.log('asyncRunning function calls starts');
asyncRunning(3000).then(r => console.log("3000 ms"));
asyncRunning(2000).then(r => console.log("2000 ms"));
asyncRunning(500).then(r => console.log("500 ms"));
asyncRunning(200).then(r => console.log("200 ms"));
asyncRunning(10).then(r => console.log("10 ms"));
