const mongoose=require("mongoose");

const dipikaSchema=mongoose.Schema({
    productImage:String,
    productTitle:String,
    productPrice:String

     
})
module.exports=mongoose.model("Farminges",dipikaSchema);    