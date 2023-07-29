import classes from './YouMayAlsoLike.module.scss';
import af1black1 from '../../assets/images/products/af1black1.jpg'
import CarousalCard from '../carousal-card/CarousalCard';
const YouMayAlsoLike=({products})=>{
    return(
        <div className={classes.component_wrapper}>
          <h3>You may also like</h3>
          <div className={classes.products}>
           <CarousalCard title="Air Force 1" brand="Nike" price="5331$" i1={af1black1}/>
          </div>
        </div>
    )
}
export default YouMayAlsoLike;