const {Router} = require('express');
const router = Router()
const User = require('../models/User')

router.post('/registration',async (req, res) => {
  try {
    const {email,password} = req.body

    const isUsed = await User.findOne({email})

    if(isUsed){
      return res.status(300).json({error: 'User already exists'})
    }

    const sser = new User({
      email, password
    })

    await User.save()

    res.status(201).json({message: 'User created successfully'})
  }
  catch(err){console.log(err)}
})

module.exports = router;