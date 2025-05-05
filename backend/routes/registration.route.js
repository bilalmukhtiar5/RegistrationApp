const express = require('express')
const router = express.Router()
const controller = require('../controllers/registration.controller')


// const Registration = require('../models/registration.model')

router.post('/registration', controller.createRegistration)
router.get('/registration', controller.getRegistration)
router.get('/registration/:id', controller.getRegistrationById) 
router.put('/registration/:id', controller.updateRegistration)  
router.delete('/registration/:id', controller.deleteRegistration)


module.exports = router;