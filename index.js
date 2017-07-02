'use strict'

const Plugin = require('lisa-plugin')

module.exports = class MjpegCamPlugin extends Plugin {

  /**
   * Initialisation of your plugin
   * Called once, when plugin is loaded
   * @returns Promise
   */
  init() {
    return super.init()
  }

  /**
   * Called when
   * @param action to execute
   * @param infos context of the action
   * @return Promise
   */
  interact(action, infos) {
    return Promise.resolve()
  }

  constructor(app) {
    super(app, {
      drivers: require('./drivers'),
      config: require('./config'),
      pkg: require('./package')
    })
  }
}
