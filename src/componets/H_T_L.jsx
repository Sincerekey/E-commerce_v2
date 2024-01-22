import React, {useEffect, useState, useContext} from 'react'
import FilterButtons from './Filter_Buttons';
import CartContect from '../context/cart/CartContext';
import formatCurrency from 'format-currency'


function H_T_L() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the server
        fetch('http://localhost:5000/api/products')
          .then(response => response.json())
          .then(data => setProducts(data.sort((a,b)=> b.price - a.price)))
          .catch(error => console.error('Error fetching products:', error));
      }, [])

      const {addToCart} = useContext(CartContect)
      let opts = {format: '%s%v', symbol: '$'}

  return (
    <>
    <FilterButtons />
    <div className='products'>
     
     {products.map(product => (

<section className="product-item">
<h4 className="price">{formatCurrency(`${product.price}`, opts)}</h4>
<img src={product.image_url} alt={product.name} />
<h2 key={product.product_id}>{product.name}</h2>
<p>{product.description}</p>
<button onClick={() =>addToCart(product)}>Add To Cart </button>
</section>
))}
    </div>
</>
  )
}

export default H_T_L
