import Navbar from './Navbar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from './CartSlice'



const Cart = () => {


  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const removehandler = (id)=>{
    dispatch(remove(id))

  }

  
  const cards = products.map(product=>(
    <div className='col-lg-3 col-md-4 col-sm-5 p-3 '>
      <Card style={{height:'400px',width:"280px", textAlign:"center"}}>
        <Card.Title style={{height:'100px', width:'100%'}}>{product.title}</Card.Title>
   <div className='pro-2'>
   <Card.Img src={product.image} style={{width:'90%', height:'180px'}}></Card.Img>
   </div>
   <div>
      <Card.Text style={{height:'50px'}}>${product.price}</Card.Text>
      </div>
      <div>

      </div>
      <div>
      <Button variant="danger" onClick={()=>removehandler(product.id)} >Remove</Button>
      </div>
   </Card>
   </div>     
))

  return (
    <div>
      <Navbar/>
      <h1>Shopping Cart</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Cart
