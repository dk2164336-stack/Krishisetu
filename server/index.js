const express=require("express");
const connectdb=require('./DB');
const dipikaSchema=require('./productSchema')
const cors=require('cors')


connectdb();

const app = express();


app.use(cors({


origin:"https://krishisetudeepika.netlify.app"
}));

app.use(express.json())



app.get('/products',(req,res)=>{
    dipikaSchema.find({})
    .then(cat=>{
       res.json(cat);

        console.log(cat);

    })

    })

app.get('/',(req,res)=>{
    res.send("Hello");  

})
app.get('/movie',(req,res)=>{
    res.json(
        {
        "movie_name":"Baaghi",
        "thumnail":"https://stat4.bollywoodhungama.in/wp-content/uploads/2016/05/Baaghi-2-002.jpg",
        "trailer_video":"https://www.youtube.com/embed/R_ha0AMNUn0?si=YvxNOhr69AmiPmQU" 
    }
)
})
dipkhus=()=>{
    console.log("dipkhus is running")
}
const port=5000;
app.listen(port,dipkhus); 





    


