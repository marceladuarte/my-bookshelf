var Author = require('../models/author');


module.exports = function(app){ 

     /**
     * @api {get} /api/author Return the Author's list
     * @apiName GetAuthor
     * @apiGroup Author
     *
     * @apiSuccess {json} Authors.
     * 
     */
    app.get('/api/author', function(req, res){
        Author.find({}, function(error, authors){
            res.send(authors);
        });       
    });

    /**
     * @api {get} /api/author/:id Return the author by id
     * @apiName GetAuthorById
     * @apiGroup Author
     * 
     * @apiParam {string} id
     *
     * @apiSuccess (200) {object} Author
     * 
     */
    app.get('/api/author/:id', function(req, res){
        Author.findById(req.params.id, function(error, author){
            res.send(author);
        });       
    });

    /**
     * @api {post} /api/author Create a new author
     * @apiName PostAuthor
     * @apiGroup Author
     * 
     * @apiParam {string} name
     * 
     * @apiSuccess (201) {Object} Author
     */
    app.post('/api/author', function(req, res){
        Author.create({'name': req.body.name}, function(error, authors){
            res.send(authors);
        });       
    });

    /**
     * @api {put} /api/author Update an author by id
     * @apiName PutAuthor
     * @apiGroup Author
     * 
     * @apiParam {string} id
     * @apiParam {string} name
     * 
     * @apiSuccess (200) {object} Author
     */
    app.put('/api/author', function(req, res){
        Author.findById(req.body.id, function(error, author){
            author.name = req.body.name;
            author.save(function(error, author){
                if(error) throw error;
                res.send(author);
            });
        });  
    });

    /**
     * @api {delete} /api/author/:id Remove an author by id
     * @apiName DeleteAuthor
     * @apiGroup Author
     * 
     * @apiParam {string} id
     * 
     * @apiSuccess (200) {Object} Author
     *         
     */
    app.delete('/api/author/:id', function(req, res){
        Author.findByIdAndRemove(req.params.id, function(error, author){
            if(error) throw error;
            res.status(200).send(author);
        });  
    });
}