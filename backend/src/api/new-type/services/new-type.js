'use strict';

/**
 * new-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-type.new-type');
