const express= require ('express');
const router= express.Router();
const Alien=require('../models/alien');
const app= express();
// get all data from mongodb
router.get('/',async(req,res)=>{
try{
    const aliens= await Alien.find()
    res.json(aliens)
    res.send("working")
    
}
catch(err){
res.send('Error : '+err)
}

})

app.use(express.json());


//set data into mongdb
router.post('/',async(req,res)=>{
const alien= new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
})

try{
 const a1=await alien.save()
 res.json(a1);
}catch(err){
res.send("error is :"+err)
}


})

module.exports = router