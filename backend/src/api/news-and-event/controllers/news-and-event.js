'use strict';

/**
 * news-and-event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-and-event.news-and-event', ({strapi}) => ({
  async findOne(ctx){
    const {id: slug} = ctx.params
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::news-and-event.news-and-event').find(query) 
    strapi.service('api::news-and-event.news-and-event').update(entity.results[0].id, {
      data: {
        seen_time_array: [
          ...entity.results[0].seen_time_array,
          {
            time: new Date()
          }
        ]
      }
    })
    const {results} = await this.sanitizeOutput(entity, ctx)
    delete results[0].seen_time_array
    return this.transformResponse(results[0])
  },

  async postComment(ctx){
    const {slug} = ctx.params
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::news-and-event.news-and-event').find(query)
    await strapi.service('api::news-and-event.news-and-event').update(entity.results[0].id, {
      data: {
        comment: [
          ...entity.results[0].comment,
          ctx.request.body
        ]
      }
    })
    await strapi.entityService.create('plugin::comment.comment', {
      data: ctx.request.body
    })
    console.log("Passing .....")
    ctx.body = "post comment successfully !"
  }
}));
