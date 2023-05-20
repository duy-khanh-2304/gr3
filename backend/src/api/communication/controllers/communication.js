'use strict';

/**
 * communication controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::communication.communication');
