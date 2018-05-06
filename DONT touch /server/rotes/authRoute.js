const route = require("express").Router();

const prepareBody = require('../controllers/prepareBody');
const controllerUsers =require('../controllers/controllerUsers');



route.get('/:id', controllerUsers.authWithToken, prepareBody, (req, res,) => {
    res.json(req.responseData);
});
route.post('/', controllerUsers.authWithoutToken, prepareBody, (req, res,) => {
    res.json(req.responseData);
});




module.exports = route;