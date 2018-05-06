const TopicModel = require('../models/modelTopic');

const controllerTopics = {
    create(req, res, next) {
        TopicModel.create({
            day: +req.body.day,
        }).then((topic) => {
            req.data = topic._doc; 
            next();
        }).catch(e => {
            next(new Error('Данные не валидны'));
        })
       
    },
    readAll(req, res, next){
        TopicModel.find({}).exec()
        .then((topic) => {
            req.data = topic;
            next();
        })
    },
    readOne(req, res, next){
        TopicModel.findById(req.params.id)
        .then((topic) => {
            req.data = topic;
            next();
        })
    },
    update(req, res, next){
        TopicModel.findByIdAndUpdate(req.params.id, {
            ...req.body
          
        }).then((topic) => {
            req.data = topic;
            next();
        })
    },
    delete(req, res, next){
        TopicModel.findByIdAndRemove(req.params.id)
            .then((topic) => {
                req.data = topic;
                next();
            })
    }
}   
 module.exports = controllerTopics;