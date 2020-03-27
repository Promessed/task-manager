// CRUD
const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
      return console.log('Unable to connect to the database!')
    }
    const db = client.db(databaseName)
    
  //  db.collection('users').updateOne({_id:new ObjectId("5e7cb4f1cf677319acd65a34")},{$inc: {Age : 1}}).then((result)=>{
  //     console.log(result)
  //    }).catch((error)=>{
  //     console.log(error)
  //    })

    //  db.collection('tasks').updateMany({ completed : false
    // },{
    //   $set: {completed : true}
    // }
    // ).then((result)=>{
    //  console.log(result.modifiedCount)
    // }).catch((error)=>{
    //   console.log(error)
    // })

    // db.collection('users').deleteMany({Age: 23}).then((result)=>{
    //   console.log(result.deletedCount)
    // }).catch((error)=>{
    //    console.log(error)
    // })

    db.collection('tasks').deleteOne({description: 'easy'}).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
})