const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(userRouter,taskRouter)

app.listen(port,()=>{
  console.log('the server is up on '+port)
})
