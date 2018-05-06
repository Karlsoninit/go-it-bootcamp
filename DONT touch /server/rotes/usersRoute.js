const route = require("express").Router();

const prepareBody = require('../controllers/prepareBody');
const controllerUsers =require('../controllers/controllerUsers');



route.post('/', controllerUsers.create, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.get('/', controllerUsers.readAll, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.get('/:id', controllerUsers.readOne, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.put('/:id', controllerUsers.update, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.delete('/:id', controllerUsers.delete, prepareBody, (req, res,) => {
    res.json(req.responseData);
});


module.exports = route;