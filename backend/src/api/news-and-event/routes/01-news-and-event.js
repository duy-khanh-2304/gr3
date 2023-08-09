module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/news-and-events/news', 
      handler: 'news-and-event.getPageAll',
      config: {
        auth: false
      }
    },
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