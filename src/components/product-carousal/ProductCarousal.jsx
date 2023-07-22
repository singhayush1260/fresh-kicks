import { useRef } from 'react';
import CarousalCard from '../carousal-card/CarousalCard';
import classes from './ProductCarousal.module.scss';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import GEL_LYTE3_SOO1 from '../../assets/images/products/gel_lyte3_soo1.jpg';
import GEL_LYTE3_SOO2 from '../../assets/images/products/gel_lyte3_soo2.jpg';

import JAPANS_WHITE2 from '../../assets/images/products/japans_white2.jpg';
import JAPANS_WHITE1 from '../../assets/images/products/japans_white1.jpg';

import  AF_BLACK1 from '../../assets/images/products/af1black1.jpg';
import  AF_BLACK2 from '../../assets/images/products/af1black2.jpg';

import GEL_LYTE3_OG1 from '../../assets/images/products/gel_lyte3og1.jpg'; 
import GEL_LYTE3_OG2 from '../../assets/images/products/gel_lyte3og2.jpg';

const ProductCarousal = ({ title }) => {
 // let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let newArrivals=[
    {title:"GEL-LYTE V GODAI 'SOOTHING", i1:GEL_LYTE3_SOO1, i2:GEL_LYTE3_SOO2},
    {title:"JAPAN S ST 'WHITE/GLACIER GREY'",i1:JAPANS_WHITE2,i2:JAPANS_WHITE1},
    {title:"Air Force 1 Black",i1:AF_BLACK1,i2:AF_BLACK2},
    {title:"GEL-LYTE V GODAI OG",i1:GEL_LYTE3_OG1,i2:GEL_LYTE3_OG2},
    {title:"GEL-LYTE V GODAI 'SOOTHING", i1:GEL_LYTE3_SOO1, i2:GEL_LYTE3_SOO2},
    {title:"JAPAN S ST 'WHITE/GLACIER GREY'",i1:JAPANS_WHITE2,i2:JAPANS_WHITE1},
    {title:"Air Force 1 Black",i1:AF_BLACK1,i2:AF_BLACK2},
    {title:"GEL-LYTE V GODAI OG",i1:GEL_LYTE3_OG1,i2:GEL_LYTE3_OG2},
]
  const cardContainerRef = useRef(null);

  const showPrev = () => {
    let width = cardContainerRef.current.clientWidth;
    console.log(width);
    cardContainerRef.current.scrollLeft -= width;
    console.log('prev');
  };

  const showNext = () => {
    let width = cardContainerRef.current.clientWidth;
    console.log(width);
    cardContainerRef.current.scrollLeft += width;
    console.log('next');
  };

  return (
    <div className={classes.carousal_container}>
      <h3>{title}</h3>
      <div className={classes.carousal}>
        <div className={classes.prev_btn}>
          <SlArrowLeft onClick={showPrev} />
        </div>
        <div className={classes.card_container} ref={cardContainerRef}>
          {
            newArrivals.map((product)=>{
                return <CarousalCard title={product.title} i1={product.i1} i2={product.i2}/>
            })
          }
        </div>
        <div className={classes.next_btn}>
          <SlArrowRight onClick={showNext} />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousal;
