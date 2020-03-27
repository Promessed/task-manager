const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
useNewUrlParser: true,
useCreateIndex: true
})

const User = mongoose.model('User',{
Name: {
    type: String,
    required: true,
    trim: true
},
email:{
  type: String,
  required:true,
  trim:true,
  lowercase: true,
  validate(value) {
      if(!validator.isEmail(value)){
          throw new Error('The email is invalid')
      }
  }

},

Age:{
    type: Number,
    default: 0,
    validate(value){
      if (value < 0){
      throw new Error('Age must be positive')
      }
    }
},
password:{
    type:String,
    required:true,
    trim:true,
    minlength:7,
    validate(value) {
        if(value.toLowerCase().includes("password")){
            throw new Error('it must not include password')
        }
    }

}
})

// const me = new User({
//     Name: '   Pai     ',
//     email: '     PRODIV@OCTANGRP.COM   ',
//     password: '    jljl'
    
// })
// me.save().then(()=>{
//  console.log('success!',me)
// }).catch((error)=>{
// console.log('Error!',error)
// })

const Task = mongoose.model('Task',{
    description: {
        type: String,
        trim:true,
        required:true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '             Clean the floor',
    
})

task.save().then(()=>{
    console.log('Success!',task)
}).catch((error)=>{
    console.log('Error!',error)
})