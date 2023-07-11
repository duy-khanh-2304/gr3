'use strict';
const {v4: uuidv4} = require('uuid')
module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('contact')
      .service('myService')
      .getWelcomeMessage();
  },

  async getMessages(ctx){
    const comments = await strapi.entityService.findMany('plugin::contact.message')
    ctx.body = comments
  },

  async createMessage(ctx){

    const body = ctx.request.body
    console.log("Body: ", body)
    await strapi.entityService.create('plugin::contact.message', {
      data: {
        uuid: uuidv4(),
        isReplied: false,
        message: JSON.stringify(body)
      }
    })
    ctx.body = "Create message successfully !"
  }
});
