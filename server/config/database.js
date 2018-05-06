var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/myBookshelfDB';

var connection = mongoose.connect(url, function (error) {
    if (error) throw error;
});

module.exports = connection;