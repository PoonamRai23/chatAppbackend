const express= require('express')
const app=express()
const path=require('path')

const sequelize=require('./util/user')
const userRouter =require('./routes/user')

const user = require("./models/user");

const jwt=require('jsonwebtoken')
const bodyparser=require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 app.use(express.static(path.join(__dirname,'views')))

 app.use('/',userRouter)

 




sequelize.sync({alter:true})
.then(()=>{
    

    app.listen(3000)
}) 
.catch((error)=>{
    console.log(error)

})


