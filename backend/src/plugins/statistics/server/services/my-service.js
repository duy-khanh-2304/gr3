'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return JSON.stringify('Welcome to Strapi 🚀');
  },

  async getAllNewsAndEvents(){
    const data = await strapi.entityService.findMany('api::news-and-event.news-and-event', {
      populate: 'deep'
    })
    return JSON.stringify(data)
  },

  async getAllProjects(){
    const data = await strapi.entityService.findMany('api::project.project')
    return JSON.stringify(data)
  }
});
