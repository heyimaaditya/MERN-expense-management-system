const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const path=require('path');
const connectDB = require('./config/connectDB')
dotenv.config();
connectDB();

const app=express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/users',require('./routes/userRoute'));
app.use('/api/v1/transections',require('./routes/transectionRoutes'));
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
  console.log(`server is running at ${PORT}`);
});