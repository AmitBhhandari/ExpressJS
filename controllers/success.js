const path=require('path')

const rootDir=require('../util/path')

exports.success=(req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>');
}