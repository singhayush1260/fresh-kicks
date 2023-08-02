import classes from './CollectionCollage.module.scss';
import Addidas from '../../assets/images/addidas.png';
import Nike from '../../assets/images/nike.png';
import Reebok from '../../assets/images/reebok.png';
import { Link} from 'react-router-dom';
const CollectionCollage=()=>{

    return(
        <div className={classes.collage}>
            <div className={classes.left}>
              <Link to="/products"><img src={Addidas} alt="addidas" /></Link>
            </div>
            <div className={classes.right}>
                <div className={classes.top}>
                <Link to="/products"><img src={Nike} alt="nike" /></Link>
                </div>
                <div className={classes.bottom}>
                <Link to="/products"><img src={Reebok} alt="reebok" /></Link>
                </div>
            </div>
        </div>
    )
}
export default CollectionCollage;