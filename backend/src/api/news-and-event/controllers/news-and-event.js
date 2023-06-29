'use strict';

/**
 * news-and-event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-and-event.news-and-event', ({strapi}) => ({
  async findOne(ctx){
    const {id: slug} = ctx.params
    console.log("Slug: ", slug)
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    console.log("Query; ", query)
    const entity = await strapi.service('api::news-and-event.news-and-event').find(query)

    const {results} = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(results[0])
  }
}));
