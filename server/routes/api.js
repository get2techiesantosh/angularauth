const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb+srv://santu:newone@cluster0.ukyhq.mongodb.net/eventsdb?retryWrites=true&w=majority"


mongoose.connect(db , err =>{
    if(err){
        console.log('Error' + err)
    }else{
        console.log('Connected to mongoDb')
    }

})
//mongodb+srv://santu:<password>@cluster0.ukyhq.mongodb.net/<dbname>?retryWrites=true&w=majority

router.get('/', (req, res) =>{
    res.send('From API route')
})

router.post('/register' , (req, res) => {

    
     let userData = req.body
     let user = new User(userData)
     
    user.save((error, registeredUser) =>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })
})


module.exports = router