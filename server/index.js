const express=require('express')
const app=express()
const port=process.env.PORT || 3000;

app.use(express.json());
 
app.get("/",(req,res)=>{
    res.send('go to route for data')
});

app.post('/bhfl',(req,res)=>{
  let numbers=[];
  let alphabets=[];
  try{
      let array=req.body.data;
       for( let i=0;i<array.length;i++){
          if((array[i][0]>="0" && array[i][0]<="9")|| typeof(array[i])){
              numbers.push(array[i])
          }
          else{
              alphabets.push(array[i])
          }
       }
       res.status.send(200).send({
           is_success :true,
           user_id :"Rishika_Sahu_30112000",
           email:'sahurishika9@gmail.com',
           roll_number:'0101EC191105',
           numbers:numbers,
           alphabets:alphabets,
       });
       
  }
    catch(e){
          res.status(400).send({
              is_success:false
          }); 
    }
})


app.listen(port,()=>{
    console.log('server is up and running')
})