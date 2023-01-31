const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes=require("./routes/shop")

const bodyParser = require("body-parser");

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page Not found</h1>')
})

app.use(bodyParser.urlencoded({ extended: false }));


app.listen(3000);
