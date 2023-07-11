module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.getMessages',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: 'myController.createMessage',
    config: {
      auth: false,
      policies: [],
    },
  },
];
