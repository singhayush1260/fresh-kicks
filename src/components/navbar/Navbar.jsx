import { useContext, useState } from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import NAV_IMAGE1 from '../../assets/images/products/nav1.jpg';
import NAV_IMAGE2 from '../../assets/images/products/nike1.2.jpg';
import { CartContext } from "../../context/cartContext";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.menu_container}>
          <div className={classes.menu}>New Arrival</div>
          <div
            className={classes.menu}
            onMouseEnter={() => setShowDropdown(true)}
          >
            <RiArrowDownSLine />
            Footwear
          </div>
          <div className={classes.menu}>
            Apparel
          </div>
          <div className={classes.menu}>
            Accessories
          </div>
          <Link to="/about" className={classes.menu}>About</Link>
          <div className={classes.menu}>Contact</div>
        </div>
      </div>
      {showDropdown && (
        <div className={classes.dropdown} onMouseLeave={() => setShowDropdown(false)}>
          <div className={classes.links}>
            <p style={ {textDecoration: 'underline', marginBottom:'1em'}}>Men</p>
            <p>Shop All</p>
            <p>Sneakers</p>
            <p>Basketball</p>
            <p>Classics</p>
            <p>Skateboard</p>
            <p>Slides and Sandals</p>
          </div>
          <div className={classes.links}>
          <p style={ {textDecoration: 'underline', marginBottom:'1em'}}>Women</p>
            <p>Shop All</p>
            <p>Sneakers</p>
            <p>Basketball</p>
            <p>Classics</p>
            <p>Skateboard</p>
            <p>Slides and Sandals</p>
          </div>
          <div className={classes.image}>
               <img src={NAV_IMAGE1} alt="nav1" />
          </div>
          <div className={classes.image} >
               <img src={NAV_IMAGE2} alt="nav2" />
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
