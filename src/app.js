
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT||4000

const partialPath = path.join(__dirname ,'../templates/partials')
const thePublicPath= path.join(__dirname ,'../public')
const thePath= path.join(__dirname ,'../templates/views')


console.log(thePath)
console.log(thePublicPath)


hbs.registerPartials(partialPath)
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
    res.render('index',
    {

        name:'aristide',
        title:'Home'
    }
    
    )
}
)
    app.get('/about',(req ,res)=>{
        res.render('about',{

            title:'About',
            name:'aristide',
        })
        })


        app.get('/help',(req ,res)=>{
            res.render('help',{
    
                title:'Help',
                name:'aristide',
            })
            })


        app.get('/',(req ,res)=>{
           
            
            res.render('weather',{
              
                title:'Weather',
                name:'aristide',
                


            })
            })
            app.get('/product', (req ,res)=>{
                if(!req.query.address){
                  return res.send({
                  error:"you must provide a query"
                  }
                  ) 
                }
                else{
                    res.send({
                        location :'adja',
                        address:req.query.address
                    })
                }
                
            })
            app.get('/login' ,(req ,res)=>{
                res.render('login', {
                    title:'Log in',
                    name:'aristide' 
                })
            })
            app.get('*',(req ,res)=>{
                res.send('My 404 page')
            })

app.listen(port,(req , res)=>{
    console.log('server running on port 4000')
})

