module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.getComments',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/accept',
    handler: 'myController.acceptComments',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/decline',
    handler: 'myController.declineComments',
    config: {
      auth: false,
      policies: [],
    },
  },
];
