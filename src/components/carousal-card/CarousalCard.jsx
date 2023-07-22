import classes from './CarousalCard.module.scss';

const CarousalCard=({title, brand, price,i1})=>{
return(
    <div className={classes.carousal_card}>
         <div className={classes.image}>
            <img src={i1} alt="i1" />
         </div>
         <div className={classes.info}>
            <small>{brand}</small>
           <p>{title}</p> 
           <p>{ price && `${price}$`}</p>
         </div>
    </div>
)
}
export default CarousalCard;