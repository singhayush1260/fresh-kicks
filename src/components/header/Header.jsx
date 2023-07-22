import classes from './Header.module.scss';
import {LiaUserCircle,LiaHeart} from 'react-icons/lia';
import {AiOutlineShopping} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Header=()=>{
return(
    <header className={classes.header}>
        <Link to="/login" className={classes.login} ><LiaUserCircle/> </Link>
        <Link to="/" className={classes.logo}>
       <img src="https://www.superkicks.in/cdn/shop/files/squarelogo-2_2x_435ae8f5-0c82-4cb6-926d-49d17d86ac01.png?v=1670233733" alt="logo" />
        </Link>
        <div className={classes.utils}>
            <div className={classes.search}>
                <CiSearch/>
                <input type="text" placeholder='Search...' />
            </div>
           <div className={classes.wishlist}>
               <LiaHeart/>
           </div>
           <div className={classes.cart}>
            <AiOutlineShopping/>
           </div>
        </div>
    </header>
)
}
export default Header;