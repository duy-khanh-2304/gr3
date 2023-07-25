module.exports = [
  {
    method: 'POST',
    path: '/searchScholar',
    handler: 'myController.searchScholar',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/searchScholarCite',
    handler: 'myController.searchScholarCite',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/getResearchTeams',
    handler: 'myController.getResearchTeams',
    config: {
      auth: false,
      policies: [],
    },
  },
];
