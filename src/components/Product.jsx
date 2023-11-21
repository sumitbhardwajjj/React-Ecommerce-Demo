import React, { useEffect } from 'react'
import Navbar from './Navbar'
import '../styles/Product.css'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addtoCart } from './CartSlice'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/ProductDetalis.css'

const Product = () => {
  const dispatch = useDispatch();
  const [products,getproducts] = useState([])
  const [currentpage, setcurrentpage] = useState(1);
  const [price,setprice] = useState(0)
  const recordsPerPage = 8;
  const lastIndex = currentpage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(data=>data.json())
            .then(result=>getproducts(result))
  })

  const addhandler = (product)=>{
    dispatch(addtoCart(product))
  }

  const cards = records.filter(product=>{ return product.price > parseInt(price)}).map(product=>(
    <div key={product.id}  className='col-md-3'>
       <Card style={{height:'300px', margin:"5px",width:"300px", textAlign:"center" }}>
        <div className='text center' style={{display:"flex", justifyContent:"center" }}>
       <Link to={`/product/${product.id}`}><Card.Img src={product.image} style={{width:'200px', height:'150px'}}></Card.Img></Link>
        </div>
        <Card.Title>{product.title}</Card.Title>
        <div> <Button onClick={()=>addhandler(product)}>Add To Cart</Button></div>
       </Card>
         </div>
))

  return (
    <div>
      <Navbar/>
      <div>
        <img className='pro-1' src="image1.jpg" alt="" />
      </div>
      <div className="p-3">
      <input type="range" min="0" max='1001'  value={price} onChange={(e)=>setprice(e.target.value)}/>
      <h5>Price: ${price}</h5>
      </div>
   <div className="row">{cards}</div>
      <div className="d-flex justify-content-center p-5">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Perv</a>
          </li>
          {
            numbers.map((n,i)=>(
              <li className={`page-item ${currentpage===n ? 'active':''}`} key={i}>
                <a href="#" onClick={changeCpage} className="page-link">{n}</a>
              </li>
            ))
          }
           <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>   
    </div>
  )

  function prePage(){
    if(currentpage !== 1){
      setcurrentpage(currentpage-1)
    }
  }

  function changeCpage(id){
    setcurrentpage(id)
  }

  function nextPage(){
    if(currentpage !== npage){
      setcurrentpage(currentpage+1)
    }
  }
}

export default Product
