'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('comments')
      .service('myService')
      .getWelcomeMessage();
  },

  async getComments(ctx) {
    const comments = await strapi.entityService.findMany('plugin::comments.comment')
    ctx.body = JSON.stringify(comments)
  },
  
  async acceptComments(ctx){
    const body = ctx.request.body
    for(let comment of body){
      const list = await strapi.entityService.findMany(`api::${comment.contentType}.${comment.contentType}`, {
        filters: {
          slug: comment.slug
        },
        populate: ['comment'],
      })
      const comments = list[0].comment
      const index = comments.findIndex(_ => _.uuid === comment.uuid)
      comments[index].isModerated = true
      const response = await strapi.entityService.update(`api::${comment.contentType}.${comment.contentType}`, list[0].id, {
        populate: ['comment'],
        data: {
          comment: [...comments]
        }
      })
      await strapi.entityService.delete('plugin::comments.comment', comment.id)
    }
    ctx.body = JSON.stringify('Accept successfully')
  },

  async declineComments(ctx){
    const body = ctx.request.body
    for(let comment of body){
      const list = await strapi.entityService.findMany(`api::${comment.contentType}.${comment.contentType}`, {
        filters: {
          slug: comment.slug
        },
        populate: ['comment'],
      })
      let comments = list[0].comment
      comments = comments.filter(_ => _.uuid !== comment.uuid)
      await strapi.entityService.update(`api::${comment.contentType}.${comment.contentType}`, list[0].id, {
        populate: ['comment'],
        data: {
          comment: [...comments]
        }
      })
      await strapi.entityService.delete('plugin::comments.comment', comment.id)
    }
    ctx.body = JSON.stringify('Decline successfully')
  },

});
