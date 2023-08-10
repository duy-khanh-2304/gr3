module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/courses/:slug/comment', 
      handler: 'course.postComment',
      config: {
        auth: false
      }
    }
  ]
}