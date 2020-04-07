require('../src/db/mongoose')
const User = require('../src/models/user')

//5e7f3d4e47a07c05bc722f4c

// User.findByIdAndUpdate('5e7f3d4e47a07c05bc722f4c',{age: 45}).then((user)=>{
//    console.log(user)
//    return User.countDocuments({age:45}).then((result)=>{
//        console.log(result)
//    }).catch((e)=>{
//        console.log(e)
//    })
// })

const updateAgeAndCount= async(id,age) =>{
    const user = await User.findByIdAndUpdate(id,age)
    const count = await User.countDocuments(age)
    return count
}

updateAgeAndCount('5e7f3d4e47a07c05bc722f4c', 30).then((count)=>{
console.log(count)
}).catch((e)=>{
console.log(e)
})