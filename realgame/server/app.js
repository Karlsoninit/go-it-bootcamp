

const PORT = 9898;


const registration = require ('http').Server(app);

const io = require('socket.io')(registration, {
    patch: '/registration/'
})




