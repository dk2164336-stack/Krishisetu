import React, { useEffect,useState } from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 
function Home() {


  const navi=useNavigate();
  const[data,setData]=useState([]);
  
 async function getData(){

    const response= await axios.get("https://krishisetu-r48f.onrender.com/products")
    setData(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    getData();
  },[])

    const ProductList=[
       

   {
          id:1,
            productImage:"https://img.freepik.com/premium-photo/green-farmland-with-crops-tractor-isolated-piece-land-isolated-white-background-3d_667286-11411.jpg?semt=ais_hybrid&w=740&q=80",
            productTitle:"Agriculture",
            productPrice:"Rs 1,999"      
          },
          {
            id:2,
            productImage:"https://e7.pngegg.com/pngimages/247/869/png-clipart-agriculture-organic-farming-farmer-agribusiness-industry-indonesian-pin-grass-thumbnail.png",
            productTitle:"cultivated",
            productPrice:"Rs 4,564"
          },
          {
            id:3,
            productImage:"https://png.pngtree.com/png-vector/20240724/ourlarge/pngtree-corn-agriculture-vector-png-image_12911484.png",
            productTitle:"corn belt",
            productPrice:"Rs 5,555"
          },
          {
            id:4,
          productImage:"https://w7.pngwing.com/pngs/46/892/png-transparent-food-lou-s-farm-mart-vegetable-gourmetten-fresh-fruits-and-vegetables-natural-foods-leaf-vegetable-food.png",
          productTitle:"vegetables",
          productPrice:"Rs 1,122"
          },
          {
            id:5,
            productImage:"https://static.vecteezy.com/system/resources/thumbnails/050/480/481/small/sunny-rice-field-ready-for-harvest-cut-out-stock-png.png",
            productTitle:"organic",
            productPrice:"2,333"

          },
          {
            id:6,
            productImage:"https://images.bhaskarassets.com/web2images/1884/2025/07/16/550013-why-women-farmers-are-losing-jobs-earnings-_1752660406.jpg",
            productTitle:"farming",
            productPrice:"Rs 2,200"
          },
          {
            id:7,
            productImage:"https://rupiya.app/wp-content/uploads/2025/03/erasebg-transformed-2.png",
            productTitle:"paddy rice",
            productPrice:"Rs 5,646"
          },
           {
            id:8,
            productImage:"https://as1.ftcdn.net/jpg/03/48/58/60/1000_F_348586063_Qet050UULnm7C4IR4kzhnzUrcvQt7SQN.webp",
            productTitle:"corn field in sunset",
            productPrice:"Rs 11,099"
          },
          {
            id:9,
            productImage:"https://as1.ftcdn.net/jpg/03/40/70/08/1000_F_340700846_nF8QmOtEj37psIWn4r5yV3FKL71lTwJ7.jpg",
            productTitle:"young indian farmer plowing at field",
            productPrice:"Rs 79,000"
          },

          {
            id:10,
             productImage:"https://thumbs.dreamstime.com/b/fruit-vegetables-7134858.jpg",
            productTitle:"fruits",
            productPrice:"Rs 9,867"
          },

        
      ]

      function gotodetailpage(id){
          navi(`/details/${id}`)
      }
        

  return (

    <div className='productcontainer'>
        {
            data.map((product)=>(

                <div className='productcard' onClick={()=>gotodetailpage(product.id)} key={product.id} >
                    <img src={product.productImage} className='image'/>
                    <h1>{product.productTitle}</h1>
                    <h3>{product.productPrice}</h3>
                    </div>
             )) 
            
        }

    </div>
  )
   
          
}

export default Home