// import our libraries and setup express
const express = require('express')
const morgan = require('morgan')
const app = express()

// app.use allows different middleware to be brought into express
// morgan is a logger for express so that we have a record for debugging
app.use(morgan('dev'))
app.use(express.json())

// create the page router for express that recognizes and directs our URLs
const indexRoute = express.Router()

indexRoute.route('/').get((request, response, next) => {
  console.log('is this thing on')
  next()
}, (request, response, next) => {
  return response.json({status: 200, message: 'this thing is on!', data: null})
})

// register and define where to call route middleware
app.use('/apis', indexRoute)

// declare port express application is running on
app.listen(4200)

