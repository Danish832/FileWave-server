const dotenv = require('dotenv');
const mongoose  = require('mongoose') ;


dotenv.config() ;

const connection = ()=>{mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true,useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongoDb successfully");
    
}).catch((err)=>{
    console.log(err);
    
})
}
module.exports = connection ;