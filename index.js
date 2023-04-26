const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.listen(3001)

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.route'))

async function start() {
  try{
      await mongoose.connect('mongodb+srv://admin:admin@cluster0.zvqsm.mongodb.net/test')
  }
  catch(err){console.log(err)}
}