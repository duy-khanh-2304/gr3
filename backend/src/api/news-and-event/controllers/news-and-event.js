'use strict';

/**
 * news-and-event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const {v4: uuidv4} = require('uuid')

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

    ctx.request.body.uuid = uuidv4()
    await strapi.service('api::news-and-event.news-and-event').update(entity.results[0].id, {
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
        contentType: "news-and-event",
        slug: entity.results[0].slug,
        title: entity.results[0].title
      }
    })
    ctx.body = "post comment successfully !"
  },

  async getPageAll(ctx){
    // const layout = await strapi.entityService.findMany('api::layout.layout',{
    //   populate: '*',
    // })
    // const information = await strapi.entityService.findMany('api::contact-information.contact-information',{
    //   populate: '*',
    // })
    // const newsList = await strapi.entityService.findMany('api::news-and-event.news-and-event',{
    //   filters: {
    //     tag: {$containsi: 'news'}
    //   },
    //   sort: 'publishAt',
    //   page: 1,
    //   pageSize: 6,
    //   fields: ['title', 'slug', 'publishAt', 'post_image', 'post_subtitle', 'tag'],
    //   populate: {
    //     post_image: '*'
    //   }
    // })
    // console.log('NEWS LIST; ', newsList)
    // console.log('LAYOUT: ', layout)
    // console.log('INFORMATION: ', information)

    ctx.body = 'DUY KHANH'
  }
}));
