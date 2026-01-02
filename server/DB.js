const mongoose =require('mongoose');

async function connectMongo() {
    try{
       await mongoose.connect("mongodb+srv://Deepikakumari:Pns0MTVECCg5O8AN@cluster0.5u0v0ps.mongodb.net/Krishisetu?appName=Cluster0"),{
            useNewUrlParser:true,
            useUnifiedTopology:true
          }
              console.log("connected to mongodb");

    } catch(error){
       console.log(error);
       process.exit(1);
    
    }
}

module.exports=connectMongo;
    

