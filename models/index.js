if (!global.hasOwnProperty('db')) {
    var mongoose = require('mongoose');

    // the application is executed on the local machine ...
    mongoose.connect('mongodb://root:root@ds137749.mlab.com:37749/server');

    global.db = {
        mongoose: mongoose,
        //models
        User:           require('./User')(mongoose),
    };

}

module.exports = global.db;