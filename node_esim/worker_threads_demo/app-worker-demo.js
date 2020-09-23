// node --experimental-worker app-worker-demo.js on Node.js 10.x
const {Worker} = require('worker_threads')

function runAsyncService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./counterService.js', {workerData})
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', code => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })
}

async function run(fileName) {
    const result = await runAsyncService(fileName)
    console.log(result)
}

run('worker1.txt').catch(
    err => console.error(err)
)

run('worker2.txt').catch(
    err => console.error(err)
)

run('worker3.txt').catch(
    err => console.error(err)
)

