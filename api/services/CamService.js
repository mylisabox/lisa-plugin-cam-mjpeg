'use strict'

const Service = require('lisa-plugin').Service
const dgram = require('dgram')

/**
 * @module ProjectorService
 * @description sony projector service
 */
module.exports = class CamService extends Service {

  search() {
    if (!this.listening) {
      this.listening = true
      this.server = dgram.createSocket({type: "udp4", reuseAddr: true})

      this.server.on('message', (message, remote) => {
        if (message.length == 50) {
          return this._manageProjector(message, remote)
        }
      })
      this.server.on('listening', () => {

      })
      this.server.bind(44201)
      setTimeout(() => {
        this.server.close(() => this.listening = false)
      }, 40000)
    }

    /*
     const mdns = this.lisa.mdns
     this._browser = mdns.createBrowser(mdns.tcp('udp'))
     this._browser.on('ready', () => {
     this._browser.discover()
     })
     this._browser.on('update', data => {
     console.log('data:', data)
     })*/
    /*service => {
     this.log.debug('Found an HTTP server:', service)
     if (service.host.toLowerCase().indexOf('dcs-930') != -1 || service.host.toLowerCase().indexOf('dcs-931') != -1) {
     this.manageDeviceFromBonjourService(service)
     }
     })*/

    return Promise.resolve()
  }

  manageDeviceFromBonjourService(bonjourService) {
    this.lisa.findDevices().then(devices => {
      const newDevice = {
        name: bonjourService.name,
        type: this.lisa.DEVICE_TYPE.CAMERA,
        data: {
          name: bonjourService.name
        },
        privateData: {
          ip: this._getIPV4Address(bonjourService.addresses),
          port: bonjourService.port,
          id: bonjourService.host
        },
        template: require('../../widgets/cam.json')
      }
      for (let device of devices) {
        if (device.privateData.id == bonjourService.host) {
          newDevice.id = device.id
          newDevice.roomId = device.roomId
          newDevice.name = device.name
          newDevice.data.name = device.data.name
          break
        }
      }
      return this.lisa.createOrUpdateDevices(newDevice)
    })
  }

  _getIPV4Address(addresses) {
    let ipv4Adress
    for (let address of addresses) {
      if (address.indexOf('::') == -1) {
        ipv4Adress = address
        break
      }
    }
    return ipv4Adress
  }

  init() {
    return this.search()
  }

  unload() {
    return Promise.resolve()
  }
}
