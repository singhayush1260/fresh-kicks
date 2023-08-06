import classes from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
const ProductCard=({id,title, brand, price,i1})=>{
return(
    <Link to={`/products/${id}`} className={classes.carousal_card}>
         <div className={classes.image}>
            <img src={i1} alt="i1" />
         </div>
         <div className={classes.info}>
            <small>{brand}</small>
           <p>{title}</p> 
           <p>{ price && `${price}$`}</p>
         </div>
    </Link>
)
}
export default ProductCard;