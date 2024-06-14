'use strict';

/**
 * student-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-post.student-post');
