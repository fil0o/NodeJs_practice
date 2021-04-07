const EventEmitter = require('events')

const emiter = new EventEmitter()

// emiter.on('anything', data => {
//   console.log('ON: anything', data)
// })

// emiter.emit('anything', {a: 1})
// emiter.emit('anything', {b: 2})


// setTimeout(() => {
//   emiter.emit('anything', {c: 3})
// }, 1500)

class Dispather extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispathcing...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispather()

dis.subscribe('bb', data => {
  console.log('ON: bb', data);
})

dis.dispatch('bb', {bb: 22})