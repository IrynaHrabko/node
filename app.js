// require('dotenv').config()
// const dbConfig = require("./config/db")[process.env['APP_ENV']]
const { criticalLog, warningLog, debugLog } = require('./config/logger')
const fs = require('node:fs');
const { myEmitter, MY_EVENT } = require('./events')

const server = require('./src/http');



// ; (async () => {

//     const p1 = new Promise((res, rej) => {
//         rej('error text')
//         // res('p1')
//     })

//     const p2 = Promise.resolve('resolve')
//     const p3 = "Static Text"
//     const p4 = new Promise((res, rej) => {
//         setTimeout(() => res('setTimeout'), 2000)
//     })

//     const all = await Promise.all([
//         p1,
//         p2,
//         p3,
//         p4
//     ])
//         .catch(err => console.log("catch", err))
//     console.log(all)
// })()
