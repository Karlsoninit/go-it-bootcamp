const route = require("express").Router();

const prepareBody = require('../controllers/prepareBody');
const controllerTopics =require('../controllers/controllerTopics');



route.post('/', controllerTopics.create, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.get('/', controllerTopics.readAll, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.get('/:id', controllerTopics.readOne, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.put('/:id', controllerTopics.update, prepareBody, (req, res,) => {
    res.json(req.responseData);
});

route.delete('/:id', controllerTopics.delete, prepareBody, (req, res,) => {
    res.json(req.responseData);
});


module.exports = route;