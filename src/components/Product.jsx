import React, { useEffect } from 'react'
import Navbar from './navbar'
import '../styles/Product.css'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addtoCart } from './CartSlice'
import {useDispatch} from 'react-redux'

const Product = () => {
  const dispatch = useDispatch();
  const [products,getproducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(data=>data.json())
            .then(result=>getproducts(result))
  })

  const addhandler = (product)=>{
    dispatch(addtoCart(product))
  }

    const cards = products.map(product=>(
      <div className='col-lg-3 col-md-4 col-sm-5 p-3 '>
        <Card style={{height:'360px',width:"250px", textAlign:"center",background:'#121212',color:'white' }}>
          <Card.Title style={{height:'100px', width:'100%'}}>{product.title}</Card.Title>
     <div className='pro-2'>
     <Card.Img src={product.image} style={{width:'100%', height:'180px'}}></Card.Img>
     </div>
     <div>
        <Card.Text style={{height:'50px'}}>${product.price}</Card.Text>
        </div>
     <Card.Footer style={{display:'flex',justifyContent:'center', padding:'5px'}}>
      <Button onClick={()=>addhandler(product)} >Add to Cart</Button>
     </Card.Footer>
     </Card>
     </div>     
  ))
  return (
    <div>
      <Navbar/>
      <div>
        <img className='pro-1' src="image1.jpg" alt="" />
      </div>
      <div className='row'>
          {cards}
      </div>
    </div>
  )
}

export default Product
