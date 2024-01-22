import React from 'react'
import { useContext } from "react"
import CartContext from '../context/cart/CartContext'
import formatCurrency from 'format-currency'

function CartItem({item}) {
  const {removeItem} = useContext(CartContext)
  let opts = {format: '%s%v', symbol: '$'}

  return (
    <section className="product-cart-item">
{/* <h4 className="cart-price">{formatCurrency(`${item.price}`, opts)}</h4> */}
<img src={item.image_url} alt={item.name} />
<h2 key={item.product_id}>{item.name} <br /> <h4 className="cart-price">{formatCurrency(`${item.price}`, opts)}</h4></h2>
<p>{item.description}</p>
<button className="removeButton" onClick={()=>{    console.log('Removing item with id:', item.product_id)
removeItem(item.product_id)}}>Remove from Cart</button>
</section>
  )
}

export default CartItem
