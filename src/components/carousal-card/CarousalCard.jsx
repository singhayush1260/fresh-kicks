import classes from './CarousalCard.module.scss';
import { Link } from 'react-router-dom';
const CarousalCard=({prod_id,title, brand, price,i1})=>{
return(
    <Link to={`/products/${prod_id}`} className={classes.carousal_card}>
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
export default CarousalCard;