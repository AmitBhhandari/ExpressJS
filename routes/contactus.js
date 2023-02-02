const express = require("express");
const router = express.Router();

const contactController=require('../controllers/contactus')

router.get("/contactus",contactController.getContactus );

router.post("/success",contactController.postContactus );


module.exports = router;