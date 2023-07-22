import classes from './FeaturedCollection.module.scss';
import AIR_MAX_COLLECTION from '../../assets/images/products/air_max_coll.png';
import GEL_LYTE3_SOO1 from '../../assets/images/products/gel_lyte3_soo1.jpg';
import CarousalCard from '../carousal-card/CarousalCard';

const FeaturedCollection=()=>{
return(
    <div className={classes.featured_collection_container}>
      <div className={classes.left}>
         <img src={AIR_MAX_COLLECTION} alt="air_max_coll.png" />
      </div>
      <div className={classes.right}>
       <CarousalCard title="fdffsf sd2ss 3" i1={GEL_LYTE3_SOO1} i2={GEL_LYTE3_SOO1}/>
       <CarousalCard title="fdffsf sd2ss 3" i1={GEL_LYTE3_SOO1} i2={GEL_LYTE3_SOO1}/>
       <CarousalCard title="fdffsf sd2ss 3" i1={GEL_LYTE3_SOO1} i2={GEL_LYTE3_SOO1}/>
       <CarousalCard title="fdffsf sd2ss 3" i1={GEL_LYTE3_SOO1} i2={GEL_LYTE3_SOO1}/>
      </div>
    </div>
)
}
export default FeaturedCollection;