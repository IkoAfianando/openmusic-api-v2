const joi = require("joi");

const albumsPayloadSchema = joi.object({
    name: joi.string().required(),
    year: joi.number().min(100).max(2025).required(),
});

module.exports = {albumsPayloadSchema};

