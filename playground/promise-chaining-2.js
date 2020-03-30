require('../src/db/mongoose')
const Task = require('../src/models/task')

//5e7dddfdce4f6e19949421fa

// Task.findByIdAndRemove('5e7dddfdce4f6e19949421fa').then(()=>{
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5e7df5104088e50d88c5f869').then((count)=>{
console.log(count)
}).catch((e)=>{
    console.log(e)
})