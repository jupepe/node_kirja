const {workerData, parentPort} = require('worker_threads')


// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

console.log('Writing content on file :' + workerData);
parentPort.postMessage({fileName: workerData, status: 'Done'})

