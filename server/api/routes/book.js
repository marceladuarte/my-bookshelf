var Book = require('../models/book');

module.exports = function(app){

     /**
     * @api {get} /api/book Return the Book's list
     * @apiName GetBook
     * @apiGroup Book
     *
     * @apiSuccess {json} Books.
     * 
     */
    app.get('/api/book', function(req, res){
        Book.find({}, function(error, books){
            res.send(books);
        });
    });


    /**
     * @api {get} /api/book/:id Return a book by id
     * @apiName GetBookById
     * @apiGroup Book
     * 
     * @apiParam {string} id
     * 
     * @apiSuccess {json} Book
     */
    app.get('/api/book/:id', function(req, res){
        Book.findById(req.params.id, function(error, book){
            res.send(book);
        });
    });


    /**
     * @api {post} /api/book Create a new book
     * @apiName PostBook
     * @apiGroup Book
     * 
     * @apiParam {string} title
     * @apiParam {string} author
     * 
     * @apiSuccess (201) {json} Book
     */

    app.post('/api/book', function(req, res){
        Book.create(req.body, function(error, books){
            res.status(201).send(books);
        });
    });

    /**
     * @api {put} /api/book Update a book
     * @apiName PutBook
     * @apiGroup Book
     * 
     * @apiParam {string} id
     * @apiParam {string} title
     * @apiParam {string} author
     * 
     * @apiSuccess (200) {Object} Book
     */
    app.put('/api/book', function(req, res){
        Book.findById(req.body.id, function(error, book){
            book.title = req.body.title;
            book.author = req.body.author;
            book.save(function(error, book){
                if(error) throw error;
                res.status(200).send(book);
            });
        }); 
    });

    /**
     * @api {delete} /api/book/:id Remove a book by id
     * @apiName DeleteBook
     * @apiGroup Book
     * 
     * @apiParam {string} id
     * 
     * @apiSuccess (204) {Object} Book
     *         
     */
    app.delete('/api/book/:id', function(req, res){
        Book.findByIdAndRemove(req.params.id, function(error, book){
            if(error) throw error;
            res.status(204).send(book);
        });  
    });

}