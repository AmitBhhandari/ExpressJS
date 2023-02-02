
const path=require('path')

const rootDir=require('../util/path')

exports.getContactus=(req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
  }

  exports.postContactus=(req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>');
}