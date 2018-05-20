const app = require('./server/config/express');
const load = require('express-load');
const config = require('./server/config/enviroment.js')

const database = require('./server/config/database.js')
const apiDocs = require('./server/config/swagger.js')(app, config.hostname, config.port);

load('./server/api/routes').into(app);

app.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
});

module.exports = app; 

