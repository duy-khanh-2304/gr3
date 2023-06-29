'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('statistics')
      .service('myService')
      .getWelcomeMessage();
  },
  async getAllNewsAndEvents(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllNewsAndEvents();
  },
  async getAllProjects(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllProjects();
  }
});
