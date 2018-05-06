const mongoose = require("mongoose");

mongoose.connect( 'mongodb://adim:dashboard@ds115420.mlab.com:15420/dashboard');

mongoose.connection.on('error', (e) => {
    console.log("CHECK YOUR DATABASE!");
    console.log(e);
});
mongoose.connection.once('open', () => {
    console.log("DB IS STARTED!");
});