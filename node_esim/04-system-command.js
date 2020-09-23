//usage: 04-system-commands.js

const exec = require("child_process").exec

console.log("Executing system command with NodeJS.")

// system command for finding all .js files 
exec("find . -name '*.js'",
    function (error, stdout, stderr) {
        if (error) {
            console.log("error: " + error)
            console.log("stderr:" + stderr)
        }
        console.log(stdout)
    }
)


require("child_process").exec("ps",
    function (error, stdout, stderr) {
        if (error) {
            console.log("error: " + error)
            console.log("stderr:" + stderr)
        }
        console.log(stdout)
    }
)

// Error in system command
exec("dirr",
    function (error, stdout, stderr) {
        if (error) {
            console.log("error: " + error)
            console.log("stderr:" + stderr)
        }
        console.log(stdout)
    }
)