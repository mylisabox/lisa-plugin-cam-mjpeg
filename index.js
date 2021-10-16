import {Plugin} from 'lisa-plugin'
import {createRequire} from 'module';
import config from './config/index.js'
import drivers from './drivers/index.js'

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default class MjpegCamPlugin extends Plugin {
  /**
   * Initialisation of your plugin
   * Called once, when plugin is loaded
   * @return Promise
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
      drivers: drivers,
      config: config,
      pkg: pkg,
    })
  }
}
