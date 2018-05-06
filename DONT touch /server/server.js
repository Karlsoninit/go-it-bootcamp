require('./util/db');
const {PORT = 9988} = process.env;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const usersRoute = require('./rotes/usersRoute');
const authRoute = require('./rotes/authRoute');
const topicsRoute = require('./rotes/topicsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./build'));

app.use('/users/', usersRoute);
app.use('/auth/', authRoute);
app.use('/topics/', topicsRoute)
app.use((err, req, res, next) => {
    res.json({
        status: 400,
        message: err.message})
})


app.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});
