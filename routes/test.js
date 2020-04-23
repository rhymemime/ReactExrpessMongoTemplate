const express = require('express')
const router = express.Router()
const Test = require('../models/test')

//getting all items
router.get('/', async (req, res) =>{
    try{
        const tests = await Test.find()
        res.json(tests)
    }catch(err){
        res.status(500).json({ message: err.message})
    }
})
//getting one
router.get('/:id', getTest, (req, res) =>{
    res.json(res.test)
})
//creating one
router.post('/', async (req, res) => {
    const test = new Test({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newTest = await test.save()
        res.status(201).json(newTest)
    }catch(err){
        res.status(400).json({  message: err.message })
    }
})
//updating a single one
router.patch('/:id', getTest, async (req,res) =>{
    if (req.body.name != null) {
        res.test.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.test.subscribedToChannel = req.body.subscribedToChannel
    }
    try{
        const updatedTest = await res.test.save()
        res.json(updatedTest)
    } catch(err){
        res.status(400).json({ message: err.message })
    }
})
//
router.delete('/:id', getTest, async (req,res) =>{
    try{
        await res.test.remove()
        res.json({ message: 'deleted test'})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

async function getTest(req, res, next){
    let test
    try{
        test = await Test.findById(req.params.id)
        if(test == null){
            return res.status(404).json({ message: "Couldnt find"})
        }
    } catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.test = test
    next()
}

module.exports = router