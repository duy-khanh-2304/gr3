'use strict';
const {v4: uuidv4} = require('uuid')
const {Resend} = require('resend')

const resend = new Resend('re_WgSpk7yv_4PaBJpSVnEqepR5rcdnRMmoY')

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
        ...body
      }
    })
    ctx.body = "Create message successfully !"
  },
});
