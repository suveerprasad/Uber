const express = require('express')
const router = express.Router()
const {body} = require('express-validator')

router.post('/create', (req, res) => {
    body('userId').isString().isLength({min : 24}).withMessage('Invalid user id'),
    body('pickup').isString().isLength({min : 3}).withMessage('Pickup must be at least 3 characters long'),
    body('destination').isString().isLength({min : 3}).withMessage('Destination must be at least 3 characters long'),
    
})