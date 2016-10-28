const mongoose = require('mongoose');

/*global global*/
const config = global.config();
mongoose.connect(config.database.mongo.host);
var db = mongoose.connection;
db.on('error', args => {
    console.error('Error on database connection', args);
    process.exit(0);
});
db.once('open', ()=> {
    console.log(`Connected to database on host ${config.database.mongo.host}`)
});
module.exports = mongoose;