const express = require('express') ;
const connectDB = require("./config.js/db");
const routes = require("./routes/files");
const path = require('path');
const cors = require('cors');
const app = express() ;

connectDB();
const corsOptions = {
    origin:true,
    methods:['GET','POST'],
    //process.env.ALLOWED_CLIENTS.split(',')
    //['http://localhost:3000','http://localhost:5000'],
}

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.static('public'));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');


const PORT = process.env.PORT || 3000 ;

app.get('/',(req,res)=>{
    res.json({Home:"Your application is live"});
})

app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`);
});

