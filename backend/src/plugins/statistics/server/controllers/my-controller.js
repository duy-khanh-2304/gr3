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
    const { from } = ctx.query
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllProjects(from);
  },
  async getAllAiTechBlogs(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllAiTechBlogs();
  },
  async getAllSolutions(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllSolutions();
  },
  async getAllToolAndResources(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllToolAndResources();
  },
  async getAllCourses(ctx){
    ctx.body = await strapi
      .plugin('statistics')
      .service('myService')
      .getAllCourses();
  }
});
