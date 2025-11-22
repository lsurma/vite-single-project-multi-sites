/**
 * Shared Handlebars helper functions for conditional logic
 * These helpers enable comparison and logical operations in Handlebars templates
 */
export const handlebarsHelpers = {
  // Comparison helpers
  eq: (a, b) => a === b,
  ne: (a, b) => a !== b,
  lt: (a, b) => a < b,
  gt: (a, b) => a > b,
  lte: (a, b) => a <= b,
  gte: (a, b) => a >= b,
  // Logical helpers
  and: (a, b) => a && b,
  or: (a, b) => a || b,
  not: (a) => !a,
};
