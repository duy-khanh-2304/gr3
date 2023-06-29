'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // strapi.db.lifecycles.subscribe({
    //   models: ["api::test.test"],
    //   async afterFindOne(event){
    //     const { data, where, select, populate } = event.params;
    //     console.log('Duy Khanh')
    //     const test = (await strapi.service("api::test.test").findOne(1, {
    //       populate: "deep"
    //     }))
    //     console.log("Test: ", test)
    //     // const update = await strapi.service("api::test.test").find({
    //     //   filters: {
    //     //     id: 2
    //     //   }
    //     // })
    //     // console.log("Update: ", update)
    //   }
    // })
  },
};
