const prepareBody = (req, res, next) => {
    req.responseData = {
        status: 200,
        data: req.data,
        token: req.token ? req.token : undefined,
    }
    next()
}

module.exports = prepareBody;