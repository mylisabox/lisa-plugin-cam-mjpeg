'use strict'

const Plugin = require('lisa-plugin')

module.exports = class MjpegCamPlugin extends Plugin {

  /**
   * Initialisation of your plugin
   * Called once, when plugin is loaded
   * @returns Promise
   */
  init() {
    return Promise.resolve()
  }

  /**
   * Called automatically to search for new devices
   * @return Promise
   */
  searchDevices() {
    return Promise.resolve()
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
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}
