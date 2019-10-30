
const path = require('path')
const express = require('express')
const app = express()



const thePublicPath= path.join(__dirname ,'../public')
const thePath= path.join(__dirname ,'../templates/views')
console.log(thePath)
console.log(thePublicPath)
app.use(express.static(thePublicPath))
app.set('view engine','hbs')
app.set('views',thePath)
// app.get('',(req,res)=>{
//     if(res.error){
//         console.log(error)
//     }
//     else if(res.statusCode){
//         res.send("No such file or page defined in your programm")
//     }
//    else{
//        res.send('hhhhhhhhhhhh')
//    }
    
// })

app.get('',(req ,res)=>{
    res.render('about')
    })

app.listen(3000,(req , res)=>{
    console.log('server running on port 3000')
})

