const mongoose = require('mongoose') ;

module.exports = mongoose.model('Shoe' ,{
    name : String ,
    price : Number ,
    img : String , 
});