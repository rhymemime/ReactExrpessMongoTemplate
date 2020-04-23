const express = require('express')
const router = express.Router()
const Test = require('../models/test')

//getting all items
router.get('/', async (req,res) =>{
    try{
        const tests = await Test.find()
        res.json(tests)
    }catch(err){
        res.status(500).json({ message: err.message})
    }
})
//getting one
router.get('/:id', (req,res) =>{
    res.send(req.params.id)
})
//creating one
router.post('/', (req,res) =>{

})
//updating a single one
router.patch('/', (req,res) =>{

})
//
router.delete('/:id', (req,res) =>{

})

module.exports = router