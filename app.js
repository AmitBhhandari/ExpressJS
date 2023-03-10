const path=require('path')

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes=require("./routes/shop")
const contactRoutes=require('./routes/contactus')


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'Public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})





app.listen(3000);
