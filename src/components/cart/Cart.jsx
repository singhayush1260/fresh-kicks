import classes from './Cart.module.scss';
import {MdCancel} from 'react-icons/md'
import {AiFillMinusSquare, AiFillPlusSquare, AiOutlineShopping} from 'react-icons/ai';
import af1black1 from '../../assets/images/products/af1black1.jpg'; 
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
const Cart=()=>{

const{showCart ,handleShowCart, cartData, dispatch}=useContext(CartContext);

const generateCartItem=(id,brand, title, size, price, quantity)=>{
  return <div className={classes.cart_item}>
  <div className={classes.image}>
     <img src={af1black1} alt="image" />
  </div>
  <div className={classes.cart_item_detail}>
    <small>{brand}</small>
    <h4>{title}</h4>
    <small> Size:{size}</small>
    <b>{price}$</b>
    <div className={classes.cart_item_quantity}>
     <AiFillMinusSquare onClick={()=>{dispatch({type:'DECREMENT_ITEM', payload:{id}})}}/>
     <p>{ quantity}</p>
     {/* <AiFillPlusSquare onClick={()=>{dispatch({type:'INCREMENT_ITEM', payload:{id}})}} /> */}
     <AiFillPlusSquare onClick={()=>{dispatch({type:'ADD_ITEM', payload:{id}})}} />
    </div>
  </div>
  <Link className={classes.checkout} to="/checkout" onClick={handleShowCart}>
       Proceed to checkout
       </Link>
</div>
}

const renderEmptyCartUI=()=>{
  return <div className={classes.empty_cart}>
     <p>Your cart is empty!</p>
     <Link to="/products" className={classes.btn}>Continue Shopping</Link>
     <h5>Have an account?</h5>
     <small>
     <Link to='/login'>Login</Link> for faster checkouts.
     </small>
  </div>
}

return(
    <>
    <div className={`${classes.cart_container} ${showCart ? classes.show : ''}`}>
       <div className={classes.cart_title}>
         <h1>Shopping Cart</h1>
         <MdCancel onClick={handleShowCart}/>
       </div>
       { 
       cartData.length > 0 ?
        cartData.map((product)=>{
          console.log(product)
           return generateCartItem(product.id,product.brand, product.title, product.size, product.price, product.quantity)
        }) : renderEmptyCartUI()
       }
      

    </div>
    </>
)
}
export default Cart;