module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/projects/:slug/comment', 
      handler: 'project.postComment',
      config: {
        auth: false
      }
    }
  ]
}