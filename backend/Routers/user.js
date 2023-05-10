const express = require('express')
const {addUser, login} = require('../Services/UserServices')
const router = express.Router()

router.put('/add',(req,res,next)=>{
    addUser(req)
    .then(()=>{
        res.status(201).send("User Created")
    })
    .catch(err=>next(err))
})
router.post('/login',(req,res,next)=>{
    login(req)
    .then((auth)=>{
        res.status(201).send(auth)
    })
    .catch(err=>next(err))
})

module.exports = router