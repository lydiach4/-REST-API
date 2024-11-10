
const Shoe = require("../models/Shoe");

exports.addshoe = async(req, res) => {
   const shoe = await Shoe.create(req.body);
     res.json(shoe);
};

exports.shoesList = async(req, res) => {
  const  shoes =  await  Shoe.find() 
  res.json(shoes)
  ;
}
  exports.shoe = async(req, res) => {
    const id = req.params.id ; 
    const  shoe =  await Shoe.findById(id)
    res.json(shoe) 
  };
  exports.updateshoe = async(req, res) => {
   const neww = await Shoe.findByIdAndUpdate(req.params.id , req.body , {
    new : true 
   });
    res.json(neww);
  };
  exports.deleteshoe = async(req, res) => {
   const delet =  await Shoe.findByIdAndDelete(req.params.id , req.body)
    res.json(delet );
  };
  
 