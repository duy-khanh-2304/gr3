module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/news-and-events',
    handler: 'myController.getAllNewsAndEvents',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/projects',
    handler: 'myController.getAllProjects',
    config: {
      policies: [],
    },
  },
];
