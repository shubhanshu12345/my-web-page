const mongoose=require("mongoose");

const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=> {
    console.log("successful connected to db");
}).catch((err)=>{
    console.log("error");
})
