'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({strapi}) => ({
  async findOne(ctx){
    const {id: slug} = ctx.params
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::course.course').find(query) 
    strapi.service('api::course.course').update(entity.results[0].id, {
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
    const entity = await strapi.service('api::course.course').find(query)

    ctx.request.body.uuid = uuidv4()
    await strapi.service('api::course.course').update(entity.results[0].id, {
      data: {
        comment: [
          ...entity.results[0].comment,
          ctx.request.body
        ]
      }
    })
    await strapi.entityService.create('plugin::comments.comment', {
      data: {
        ...ctx.request.body,
        contentType: "course",
        slug: entity.results[0].slug,
        title: entity.results[0].title
      }
    })
    ctx.body = "post comment successfully !"
  }
}));
