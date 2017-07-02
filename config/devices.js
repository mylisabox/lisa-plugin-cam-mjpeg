const template = require('../widgets/cam.json')

module.exports = [
  {
    image: 'camera_ip.png',
    name: {
      en: 'IP Camera MJPG',
      fr: 'Caméra IP MJPG'
    },
    description: {
      en: 'Add an IP Camera with MJPG stream',
      fr: 'Ajout d\'une caméra IP avec un flux MJPG'
    },
    driver: 'cam',
    type: 'camera',
    pairing: 'settings',
    template: template,
    settings: [
      {
        controlType: 'textbox',
        type: 'url',
        name: 'video',
        label: {
          en: 'Stream URL'
        },
        required: true
      },
      {
        controlType: 'textbox',
        type: 'text',
        name: 'login',
        label: {
          en: 'Login',
          fr: 'Identifiant'
        },
        private: true
      },
      {
        controlType: 'textbox',
        type: 'password',
        name: 'password',
        label: {
          en: 'Password',
          fr: 'Mot de passe'
        },
        private: true
      }
    ]
  }
]
