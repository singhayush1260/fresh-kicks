import { useContext } from 'react';
import classes from './Wishlist.module.scss';
import {MdCancel} from 'react-icons/md'
import { WishlistContext } from '../../context/wishlistContext';
const Wishlist=()=>{

const{handleShowWishlist}=useContext(WishlistContext);

return(
    <div className={classes.wishlist_wrapper}>
      <div className={classes.wishlist_title}>
           <h4>Your Wishlist</h4>
           <MdCancel onClick={handleShowWishlist}/>
      </div>
      <div className={classes.wishlist}>
       .
      </div>
    </div>
)
}
export default Wishlist;