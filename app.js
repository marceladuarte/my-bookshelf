const app = require('./server/config/express');
const load = require('express-load');
const hostname = 'localhost';
const port = 3000;

const database = require('./server/config/database.js')
const apiDocs = require('./server/config/swagger.js')(app, hostname, port);

load('./server/api/routes').into(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

module.exports = app; 

