import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from '../Types'

const CartReducer = (state, action) =>{
    switch (action.type){
        case SHOW_HIDE_CART:{
            return{
                ...state,
                showCart: !state.showCart
            }
        }
        case ADD_TO_CART:{
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
        case REMOVE_ITEM: {
            console.log('Before removal:', state.cartItems);
            const newCartItems = state.cartItems.filter(item => item.product_id !== action.payload);
            console.log('After removal:', newCartItems);
            return {
              ...state,
              cartItems: newCartItems,
            };
          }
       
        default:
            return state
    }


}

export default CartReducer