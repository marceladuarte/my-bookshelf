var Author = require('../models/author');


module.exports = function(app){ 

     /**
     * @swagger
     * /api/authors:
     *   get:
     *     tags:
     *       - Authors
     *     description: Return all authors
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of authors
     *         schema:
     *           $ref: '#/definitions/Author'
     *         
     */
    app.get('/api/authors', function(req, res){
        Author.find({}, function(error, authors){
            res.send(authors);
        });       
    });

    /**
     * @swagger
     * /api/authors/{id}:
     *   get:
     *     tags:
     *       - Authors
     *     description: Return an authors by id
     *     parameters:
     *       - name: id
     *         type: string
     *         in: path
     *         required: true
     *         description: Author id
     *         schema:
     *           $ref: "#/definitions/Author"
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An author
     *         schema:
     *           $ref: '#/definitions/Author'
     *         
     */
    app.get('/api/authors/:id', function(req, res){
        Author.findById(req.params.id, function(error, author){
            res.send(author);
        });       
    });

    /**
     * @swagger
     * /api/authors:
     *   post:
     *     tags:
     *       - Authors
     *     description: Create an new author
     *     parameters:
     *       - name: author name
     *         in: body
     *         required: true
     *         description: Author name
     *         schema:
     *           $ref: "#/definitions/Author"
     *     produces:
     *       - application/json
     *     responses:
     *       201:
     *         description: Created
     *         schema:
     *           $ref: '#/definitions/Author'
     *         
     */
    app.post('/api/authors', function(req, res){
        Author.create({'name': req.body.name}, function(error, authors){
            res.send(authors);
        });       
    });

    /**
     * @swagger
     * /api/authors/{id}:
     *   put:
     *     tags:
     *       - Authors
     *     description: Update an author
     *     parameters:
     *       - name: id
     *         type: string
     *         in: path
     *         required: true
     *         description: Author id 
     *       - name: name
     *         in: body
     *         required: true
     *         description: Author name
     *         schema:
     *           $ref: "#/definitions/Author"
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Updated
     *         schema:
     *           $ref: '#/definitions/Author'
     *         
     */
    app.put('/api/authors/:id', function(req, res){
        Author.findById(req.params.id, function(error, author){
            author.name = req.body.name;
            author.save(function(error, author){
                if(error) throw error;
                res.send(author);
            });
        });  
    });

    /**
     * @swagger
     * /api/authors/{id}:
     *   delete:
     *     tags:
     *       - Authors
     *     description: Delete an author
     *     parameters:
     *       - name: id
     *         type: string
     *         in: path
     *         required: true
     *         description: Author id
     *         schema:
     *           $ref: "#/definitions/Author"
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Deleted
     *         schema:
     *           $ref: '#/definitions/Author'
     *         
     */
    app.delete('/api/authors/:id', function(req, res){
        Author.findByIdAndRemove(req.params.id, function(error, author){
            if(error) throw error;
            res.status(200).send(author);
        });  
    });
}