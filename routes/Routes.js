const express = require('express')
const router = express.Router()

const Milestone = require('../models/Milestone') 

router.get('/', (req, res) => {
    res.send({ "hello from ": req.method, 'data' : Milestone})
})



router.post('/', async (req, res) => {
    try {
        const newMilestone = await Milestone.create({ date: new Date(), activity: req.body.activity })
        res.status(200).json(newMilestone)
    }
    catch (error) {
        res.send(error.message)
    }
})

router.patch('/:id', (req, res) => {
    res.send({ "hello from ": req.method })
})


router.delete('/:id', (req, res) => {
    res.send({ "hello from ": req.method })
})


module.exports = router  