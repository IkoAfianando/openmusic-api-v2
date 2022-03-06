/* eslint-disable linebreak-style */
const joi = require('joi');

const songsPayloadSchema = joi.object({
  title: joi.string().required(),
  year: joi.number().required(),
  genre: joi.string().required(),
  performer: joi.string().required(),
  duration: joi.number(),
  // albumId: joi.string(),
});

module.exports = { songsPayloadSchema };
