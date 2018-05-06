var mongoose = require('mongoose')

/**
 * @swagger
 * definitions:
 *   Author:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       name:
 *         type: string
 *   Authors:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Author'
 */

var author = mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Author', author);