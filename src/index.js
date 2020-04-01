const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT || 3000
// app.use((req,res, next)=>{
// if(req.method === 'GET'){
// res.send('GET requests are disable')
// }else{
//   next()
// }

// })
// app.use((req, res,next)=>{
// res.status(503).send('our server is under maintenance')
// })
app.use(express.json())
app.use(userRouter,taskRouter)

app.listen(port,()=>{
  console.log('the server is up on '+port)
})
