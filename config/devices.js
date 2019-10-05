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
    settings: {
      'type': 'column',
      'crossAxisAlignment': 3,
      'children': [
        {
          'type': 'text_field',
          'id': 'video',
          'required': true,
          'errorMaxLines': 2,
          'validator': 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)',
          'textInputAction': 6,
          'decoration': {
            'labelText': 'Url*',
          }
        },
        {
          'type': 'text_field',
          'id': 'login',
          'textInputAction': 6,
          'decoration': {
            'labelText': 'Login',
          }
        },
        {
          'type': 'text_field',
          'id': 'password',
          'obscureText': true,
          'textInputAction': 2,
          'decoration': {
            'labelText': 'Password',
          }
        },
      ],
    },
  }
]
