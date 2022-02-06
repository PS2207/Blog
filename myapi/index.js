const express= require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const categoryRoute=require("./routes/categories")
const multer = require("multer");

dotenv.config();
app.use(express.json());
//  app.use("/main",(req,res)=>{
//      console.log("hey this is main url")
//  })

mongoose
  .connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(console.log("connected to MongoDB"))
.catch((err)=> console.log(err));


const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
       cb(null,"images")
     },
   filename:(req,file,cb)=>{
     cb(null, req.body.name);
        //cb(null, "hello.jpg")//to get image in images folder
      }
});

const upload= multer({storage: storage})
app.post("/myapi/upload", upload.single("file"), (req,res)=>{
  res.status(200).json("File has been uploaded");
} )

app.use("/myapi/auth",authRoute)
app.use("/myapi/users",userRoute)
app.use("/myapi/posts",postRoute)
app.use("/myapi/categories",categoryRoute)

app.listen("4000",()=>{
    console.log("Backend is running")
})