import React from 'react';
// import CartComponet from '../componets/CartComponet';
import Cart from '../componets/Cart';
function Cartpage() {
//   const [cart, setCart] = useState({ items: [] });

//   useEffect(() => {
//     fetch('http://localhost:5000/cart/cart-items', { cache: 'no-store' })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched Cart Items:', data);
//         setCart(data);
//       })
//       .catch(error => console.error('Error fetching cart items:', error));
//   }, []);

  return (
    <div>
    <Cart />
    </div>
  );
}

export default Cartpage;
