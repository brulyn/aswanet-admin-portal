'use strict';

/**
 * Staff.js controller
 *
 * @description: A set of functions called "actions" for managing `Staff`.
 */

module.exports = {

  /**
   * Retrieve staff records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.staff.search(ctx.query);
    } else {
      return strapi.services.staff.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a staff record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.staff.fetch(ctx.params);
  },

  /**
   * Count staff records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.staff.count(ctx.query);
  },

  /**
   * Create a/an staff record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.staff.add(ctx.request.body);
  },

  /**
   * Update a/an staff record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.staff.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an staff record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.staff.remove(ctx.params);
  }
};
