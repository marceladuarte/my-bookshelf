const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
    info: {
      title: 'My Bookshelf API',
      version: '1.0.0',
      description: 'My Bookshelf API Documentation',
    },
    basePath: '/',
};

var options = {
    swaggerDefinition: swaggerDefinition, 
    apis: ['./server/api/models/*.js', './server/api/routes/*.js'],
};

module.exports = function(app, hostname, port){
    swaggerDefinition.host = `${hostname}:${port}`;
    var swaggerSpec = swaggerJSDoc(options);
    
    app.get('/swagger.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });
}
