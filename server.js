const express = require('express') ;
const connectDB = require("./config.js/db");
const routes = require("./routes/files");
const path = require('path');
const app = express() ;


app.use(express.json());
app.use(express.static('public'));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');


const PORT = process.env.PORT || 3000 ;


app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`);
});
connectDB();
