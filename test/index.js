'use strict'

const lisaApp = require('lisa-box')
const TrailsApp = require('trails')

before(() => {
  global.app = new TrailsApp(lisaApp)
  return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})
