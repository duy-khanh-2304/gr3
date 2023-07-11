module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/ai-tech-blogs/:slug/comment', 
      handler: 'ai-tech-blog.postComment',
      config: {
        auth: false
      }
    }
  ]
}