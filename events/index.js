const { EventEmitter } = require('node:events')

const MY_EVENT = 'myEvent'

class MyEmitter extends EventEmitter {
    constructor() {
        super()
        console.log('inited MyEmitter')

        // process.nextTick(() => {
        //     myEmitter.emit(MY_EVENT, 1, true)
        // })
    }
}

const myEmitter = new MyEmitter()



myEmitter.on(MY_EVENT, (...arg) => {
    console.log('myEvent', ...arg)
})


myEmitter.on(MY_EVENT, (...arg) => {
    console.log('myEvent2', ...arg)
    
})

myEmitter.on('sendEmail', (...arg) => {
    console.log('sendEmail', ...arg)
})

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 100);
// }

module.exports = {
    myEmitter,
    MY_EVENT
}


