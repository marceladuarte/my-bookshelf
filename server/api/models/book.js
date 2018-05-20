var mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *   Book:
 *     type: object
 *     required:
 *       - title
 *       - author
 *     properties:
 *       title:
 *         type: string
 *       author:
 *         type: string
 *   Books:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Book'
 */

var book  = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: String, required: false},
    read: {type: Date, required: false}
});

module.exports = mongoose.model('Book', book);