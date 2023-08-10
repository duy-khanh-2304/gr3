module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/news-and-events',
    handler: 'myController.getAllNewsAndEvents',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/projects',
    handler: 'myController.getAllProjects',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/ai-tech-blogs',
    handler: 'myController.getAllAiTechBlogs',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/solutions',
    handler: 'myController.getAllSolutions',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/tool-and-resources',
    handler: 'myController.getAllToolAndResources',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/courses',
    handler: 'myController.getAllCourses',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/research-teams',
    handler: 'myController.getAllResearchTeams',
    config: {
      auth: false,
      policies: [],
    },
  },
];
