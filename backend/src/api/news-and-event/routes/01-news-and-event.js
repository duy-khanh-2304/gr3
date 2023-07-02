module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/news-and-events/:slug/comment', 
      handler: 'news-and-event.postComment',
      config: {
        auth: false
      }
    }
  ]
}