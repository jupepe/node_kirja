const resolveAfter = (sleepTime) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved in ' + sleepTime + 'ms.');
        }, sleepTime);
    })

const asyncRunning = async () => {
    console.log('asyncCalling function starts');
    const result = await resolveAfter(4000);
    console.log(result);
    const result2 = resolveAfter(3000);
    console.log(await result2);
    const result3 = resolveAfter(2000);
    console.log(await result3);
    console.log('asyncCalling function stops');
};

asyncRunning().then(r => "asyncRunning() is finished.");