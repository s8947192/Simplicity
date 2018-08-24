import { eventChannel, END } from 'redux-saga'
import io from 'socket.io-client'

import { actions as registrationActions } from 'universal/modules/Registration/actions'

export default class Socket {
  constructor (type) {
    this.type = type
  }
  connect () {
    this.io = io('http://localhost:9000', {
      transports: ['websocket', 'polling']
    })
  }

  createChannel () {
    return eventChannel(emit => {

      const onRegistration = payload => emit(registrationActions.showPendingMessage(payload))

      const onError = payload => emit({ type: 'ERROR', payload })

      this.on('connect', () => console.log('connected'))
      this.on('disconnect', () => emit(END))
      this.on('error', onError)

      this.on('registration', onRegistration)

      const unsubscribe = () => console.log('disconnected')

      return unsubscribe
    })
  }

  on (event, callback) {
    this.io.on(event, callback)
  }

  off (event, callback) {
    this.io.off(event, callback)
  }

  emit (event, message) {
    console.info('socket#emit', event, message)
    this.io.emit(event, message)
  }

  close () {
    this.io.close()
  }
}
