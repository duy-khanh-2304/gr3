module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/tool-and-resources/:slug/comment', 
      handler: 'tool-and-resource.postComment',
      config: {
        auth: false
      }
    }
  ]
}