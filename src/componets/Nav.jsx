import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import ProPage from '../routes/ProPage';
import Cartpage from '../routes/Cartpage';
import NonDestructive from './NonDestructive';
import Sale from './Sale';
import Destructive from './Destructive';
import L_T_H from './L_T_H';
import H_T_L from './H_T_L';
import '../Styles/Home.css'
import CartContext from '../context/cart/CartContext';

function Nav() {
  const {cartItems, showHideCart } = useContext(CartContext)
  return (
    <div>
      <Router>
        <nav>
          <ul id="nav">
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/products'>Products</Link></li>
            <li><Link to ='/contact'>Contact Us</Link></li>
            <li><Link to='/cart' onClick={showHideCart}>
              Cart
             {cartItems.length > 0 && <div className='item_count'><span>{cartItems.length}</span></div>}
            </Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/NonDestructive' element={<NonDestructive />} />
          <Route path='/Sales' element={<Sale />} />
          <Route path='/Destructive' element={<Destructive />} />
          <Route path='/Low_to_High' element={<L_T_H />} />
          <Route path='/High_to_Low' element={<H_T_L />} />
          <Route path='/cart' element={<Cartpage />} />



        </Routes>

      </Router>


    </div>
  )
}

export default Nav
