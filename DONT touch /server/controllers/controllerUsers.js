const UserModel = require('../models/modelUsers');
const jwt= require('jsonwebtoken');
const KEY = 'Dashboard';

const сontrollerUsers = {
    create(req, res, next) {
        if(req.body.password === 'admin') {
            UserModel.create({
                admin: true,
                login: req.body.login,
                email: req.body.email,
                password: req.body.password
            }).then((user) => {
                const {password, ...data} = user._doc
                req.token = jwt.sign({id: user._doc._id},KEY);
                req.data = data; 
                next();
            }).catch(e => {
                next(new Error('Данные не валидны'));
            })
        } else {
            UserModel.create({
                login: req.body.login,
                email: req.body.email,
                password: req.body.password
            }).then((user) => {
                const {password, ...data} = user._doc
                req.token = jwt.sign({id: user._doc._id},KEY);
                req.data = data; 
                next();
            }).catch(e => {
                next(new Error('Данный e.mail уже зарегистрирован'));
            })
        }
       
    },
    readAll(req, res, next){
        UserModel.find({}).exec()
        .then((users) => {
            req.data = users;
            next();
        })
    },
    readOne(req, res, next){
        UserModel.findById(req.params.id)
        .then((user) => {
            req.data = user;
            next();
        })
    },
    update(req, res, next){
        UserModel.findByIdAndUpdate(req.params.id, {
            ...req.body
          

        },{new: true,}).then((user) => {


            req.data = user;
            next();
        })
    },
    delete(req, res, next){
        UserModel.findByIdAndRemove(req.params.id)
            .then((user) => {
                req.data = user;
                next();
            })
    },
    authWithToken(req, res, next){
        const idUser = jwt.verify(req.params.id, KEY)
        UserModel.findById(idUser.id)
        .then(user => {
            req.data=user;
            next()
        }) 
        .catch(e => {
            next(new Error('Токен не валидный'))
        })
    },
    authWithoutToken(req, res, next){
        UserModel.findOne({email: req.body.email})
        .then((user) => {
            if(!user) {
                next(new Error('Неверный e.mail'))
            }
            if(user.password === req.body.password) {
                const {password, ...data} = user._doc
                req.token = jwt.sign({id: user._doc._id},KEY);
                req.data = data; 
                next();
            }
            if(user.password !== req.body.password)  {
                next(new Error('Неверный пароль'))
            }
        })
        .catch(e => {
            next(new Error('Неверные данные'))
        })
    }

}

module.exports = сontrollerUsers;