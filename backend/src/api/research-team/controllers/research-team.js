'use strict';

/**
 * research-team controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::research-team.research-team', ({strapi}) => ({
  async findOne(ctx){
    const {id: slug} = ctx.params
    const {query} = ctx
    if(!query.filters){
      query.filters = {}
    }
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::research-team.research-team').find(query) 
    strapi.service('api::research-team.research-team').update(entity.results[0].id, {
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
