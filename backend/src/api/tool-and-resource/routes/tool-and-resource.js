'use strict';

/**
 * tool-and-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tool-and-resource.tool-and-resource');
