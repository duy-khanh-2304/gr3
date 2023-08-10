'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return JSON.stringify('Welcome to Strapi 🚀');
  },

  async getAllNewsAndEvents(){
    const data = await strapi.entityService.findMany('api::news-and-event.news-and-event', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllProjects(){
    const data = await strapi.entityService.findMany('api::project.project', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllAiTechBlogs(){
    const data = await strapi.entityService.findMany('api::ai-tech-blog.ai-tech-blog', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllSolutions(){
    const data = await strapi.entityService.findMany('api::solution.solution', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllToolAndResources(){
    const data = await strapi.entityService.findMany('api::tool-and-resource.tool-and-resource', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllCourses(){
    const data = await strapi.entityService.findMany('api::course.course', {
      populate: {
        post_image: '*',
        comment: true,
        seen_time_array: true
      }
    })
    return data
  },

  async getAllResearchTeams(){
    const data = await strapi.entityService.findMany('api::research-team.research-team', {
      populate: {
        post_image: '*',
        members: '*',
        projects: {
          populate: {
            comment: true, 
            seen_time_array: true,  
          }
        },
        tool_and_resources: {
          populate: {
            comment: true, 
            seen_time_array: true,
          }
        },
        publications: '*',
        solutions: {
          populate: {
            comment: true, 
            seen_time_array: true,
          }
        },
        comment: true, 
        seen_time_array: true,
      }
    })
    return data
  },

  
});
