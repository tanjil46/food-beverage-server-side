

const express=require('express')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  
    res.send('FOOD AND BERAGE SERVER IS STARTING')

})

app.listen(port)
