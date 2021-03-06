// require
const express = require('express')
const router = express.Router()
const joi = require('joi')
const Database_Class = require('../database/query.js')
const database = new Database_Class()
const bodyParser = require('body-parser')
const moment = require('moment-timezone')

// config
moment.tz.setDefault("Asia/Tokyo") // set timezone to Asia/Tokyo

router.get('/customer', (req, res) => {
  database.get_all_customer((rows) => {
    res.send(rows)
  })
})

router.post('/customer', (req, res) => {
  console.log(req.body)
  // validation
  joi.validate(req.body, {
    sex: joi.string().regex(/male|female|neither/).required(),
    age: joi.number().integer().required()
  }, (err) => {
    if(err){
      // error handling
      console.log(err)
    }
    else{
      // insert to db
      database.add_customer({
        visit_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        sex: req.body.sex,
        age: req.body.age
      }, () => {
        res.send('Posted!')
      })
    }
  })
})

// exports
module.exports = router

