import './App.css';
import Home from './components/Home';
import Product from './components/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Cart from './components/Cart';
import ProductsDetails from './components/ProductsDetails';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/product/:id' element={<ProductsDetails/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
