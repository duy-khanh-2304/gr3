module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/solutions/:slug/comment', 
      handler: 'solution.postComment',
      config: {
        auth: false
      }
    }
  ]
}