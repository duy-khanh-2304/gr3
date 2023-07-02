'use strict';

/**
 * ai-tech-blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ai-tech-blog.ai-tech-blog', ({strapi}) => ({
  async findOne(ctx){
    console.log("CTX: ", ctx.state.user)
    const {id: slug} = ctx.params
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::ai-tech-blog.ai-tech-blog').find(query) 
    strapi.service('api::ai-tech-blog.ai-tech-blog').update(entity.results[0].id, {
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
  }
}));
