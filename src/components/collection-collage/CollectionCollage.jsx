import classes from './CollectionCollage.module.scss';
import Addidas from '../../assets/images/addidas.png';
import Nike from '../../assets/images/nike.png';
import Reebok from '../../assets/images/reebok.png';
const CollectionCollage=()=>{
    return(
        <div className={classes.collage}>
            <div className={classes.left}>
              <img src={Addidas} alt="addidas" />
            </div>
            <div className={classes.right}>
                <div className={classes.top}>
                <img src={Nike} alt="nike" />
                </div>
                <div className={classes.bottom}>
                <img src={Reebok} alt="reebok" />
                </div>
            </div>
        </div>
    )
}
export default CollectionCollage;