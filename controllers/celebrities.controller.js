const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

module.exports.celebList = (req, res, next) => {

    Celebrity.find()
        .then((celebrities) => {
            res.render('celebrities/celebrities', { celebrities })

        })
        .catch((err) => console.log(err))

  };