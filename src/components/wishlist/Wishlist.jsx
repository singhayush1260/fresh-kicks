import { useContext } from 'react';
import classes from './Wishlist.module.scss';
import {MdCancel} from 'react-icons/md'
import {AiOutlineDelete} from 'react-icons/ai';
import { WishlistContext } from '../../context/wishlistContext';
import { AuthContext } from '../../context/authContext';
const Wishlist=()=>{

const{wishlistData, dispatch:wishlistDispatcher, handleShowWishlist}=useContext(WishlistContext);
const{authData:{user}, dispatch}=useContext(AuthContext);

console.log('user',user)
console.log('wishlistData',wishlistData)


return(
    <div className={classes.wishlist_wrapper}>
      <div className={classes.wishlist_title}>
           <h4>Your Wishlist</h4>
           <MdCancel onClick={handleShowWishlist}/>
      </div>
      <div className={classes.wishlist}>
       { !user && <p>Login to access wishlist.</p>}
       {
           user && wishlistData.map((product)=>{
                return <div className={classes.product}>
                <div>
                <small>{product.title}</small>
                 <small>Quantity: {product.quantity}</small>
                 <AiOutlineDelete onClick={()=>wishlistDispatcher({type:'REMOVE_ITEM', payload:{id:product.id}})}/>
                </div>
               </div>
            })
          }
      </div>
    </div>
)
}
export default Wishlist;