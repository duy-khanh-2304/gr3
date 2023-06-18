'use strict';

/**
 * tool-and-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-and-resource.tool-and-resource');
