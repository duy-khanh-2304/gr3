'use strict';

/**
 * news-and-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-event.news-and-event', ({strapi}) => ({
  // async findOne(entityId, params) {
  //   const result = await super.findOne({
  //     ...params,
  //     filters: {
  //       slug: "leading-world-class-experts-on-operations-research-visit-and-give-a-talk-at-bkai"
  //     }
  //   });
  //   console.log("Result: ", result)
  //   // super.update(entityId, {
  //   //   ...params,
  //   //   data: {
  //   //     seen_time_array: [
  //   //       ...result.seen_time_array,
  //   //       {time: new Date()}
  //   //     ]
  //   //   },
  //   // })
  //   return result;
  // }
}));
