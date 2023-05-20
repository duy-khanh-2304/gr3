'use strict';

/**
 * comment-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-box.comment-box');
