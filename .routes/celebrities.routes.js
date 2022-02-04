const express = require('express')
const router = require("express").Router();
const Celebrity = require('./models/celebrity.model')

router.get('/', (req, res, next) => {

    Celebrity.find()
        .then((celebrities) => {
            res.render('celebrities/celebrities', { celebrities })

        })
        .catch((err) => console.log(err))

  });



module.exports = router;