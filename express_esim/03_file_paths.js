// 03_file_paths.js
const express = require('express')
const app = express()
const path = require("path")

const path1 = path.format({
    dir : '/home/user/node_modules',
    base: 'apps_list.txt'
})

const path2 = path.join('/var', 'lib', 'test/program', 'nodejs', '..')

const path3 = path.basename('/home/user/node_modules/apps_list.txt')
const path4 = path.dirname('/home/user/node_modules/apps_list.txt')

const path5 = path.parse('/home/user/node_modules/apps_list.txt')

app.get('/', (req, res) => {
    res.send(path1 + "<br>" + path2 + "<br>" + path3 + " " + path4 + "<br>"
        + JSON.stringify(path5))
})

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})
