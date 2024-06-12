// require('dotenv').config()
// const dbConfig = require("./config/db")[process.env['APP_ENV']]
// const { criticalLog, warningLog, debugLog } = require('./config/logger')
const fs = require('node:fs');
const { myEmitter, MY_EVENT } = require('./events')
// const { EventEmitter } = require('node:events')

// class MyEmitter extends EventEmitter {
//     constructor() {
//         super()
//         console.log('inited MyEmitter')
//     }
// }

// const myEmitter = new MyEmitter()

// myEmitter.on('myEvent', (...arg) => {
//     console.log('myEvent', ...arg)
// })

myEmitter.emit(MY_EVENT, 1, true)

// // warningLog('warning message')
// // debugLog('debug message')


// // try {
// //     console.log(abc)

// // } catch (error) {
// //     criticalLog(error)
// // }

// console.log('log')

// setTimeout(() => console.log('setTimeout'), 0)

// const p = new Promise((res, rej) => {
//     res()
// })

// process.nextTick(() => {
//     console.log('nextTick')
// })

// p.then(() => {
//     console.log('Promise')
// })

// console.log('log2')




// (async () => {

//     const p1 = new Promise((res, rej) => {
//         rej('error text')
//         // res('p1')
//     })

//     const p2 = Promise.resolve('resolve')
//     const p3 = "Static Text"
//     const p4 = new Promise((res, rej) => {
//         setTimeout(() => res('setTimeout'), 2000)
//     })

// const all = await Promise.all([
//     p1,
//     p2,
//     p3,
//     p4
// ]).catch(err => console.log(err))

// console.log(all)


// all.then(res => {
//     console.log(res)
// }).catch(res => console.error(res))

// })()