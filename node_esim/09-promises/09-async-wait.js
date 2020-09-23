// node 09-async-wait.js

// SyntaxError: await is only valid in async function
async function asyncFun() {

  const waitReady = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ready!"), 500)
  });

  const res = await waitReady; 
  console.log(res); 
}

asyncFun();