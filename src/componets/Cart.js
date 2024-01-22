import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency"
import CartItem from "./CartItem";

const Cart = ()=>{
     
    const {showCart, cartItems, showHideCart} = useContext(CartContext)
     
    let opts = {format: '%s%v', symbol: '$'}

     return(
        <>
        {showCart &&(
            <div className="cart_wrapper">
                <div >
                    <i style={{cursor: 'pointer'}} onClick={showHideCart}></i>
                    <div className="cart_total">
                        <div>
                            Cart Total
                        </div>
                        <></>
                        <div>
                            {formatCurrency(cartItems.reduce((amount, item) => item.price + amount, 0), opts)}
                        </div>

                    </div>
                    <div className="CartList">
                        {cartItems.length === 0 ? (<h4>Cart Is Empty</h4>): (
                            <>
                                {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                            </>
                        )}
                    </div>
                    
                </div>
            </div>
        )}
        </>
     )

}

export default Cart