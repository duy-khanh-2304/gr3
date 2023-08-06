'use strict';

/**
 * new-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-type.new-type');
