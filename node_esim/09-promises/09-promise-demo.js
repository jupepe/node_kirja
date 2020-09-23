// node 09-promise-demo.js
let myPromise = new Promise((resolve, reject) => {
  let value = 'It works';
  // when success
  resolve(value); 
 
});

let myPromise2 = new Promise((resolve, reject) => {
  // when error
  reject(new Error('Promise Rejected!')); 
});


myPromise.then(response => {
  console.log(response);
}, error => {
  console.log(error);
});

// chaining promises
myPromise
.then(response => {
  return response + " Success again";
})
.then(response => {
  console.log(response);
});

// compact way to catch errors
myPromise2.catch(
  error => {
    console.log("Error: " + error);
});


/************** many promises resolved ****************/
let promise1 = new Promise(resolve => {
    resolve('solved');
  }),
  promise2 = new Promise(resolve => {
    resolve('solved again');
  }),
  promise3 = new Promise(resolve => {
    resolve('and again'); 
});

Promise.all([
    promise1,
    promise2,
    promise3
])
.then(response => {
    let [r1, r2, r3] = response;
    console.log(`${r1} => ${r2} => ${r3}`); 
});