'use strict';

/**
 * student-technology service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-technology.student-technology');
