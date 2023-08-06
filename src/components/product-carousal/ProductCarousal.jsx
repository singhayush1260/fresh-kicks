import { useState, useEffect, useRef } from 'react';
import classes from './ProductCarousal.module.scss';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { sanityClient } from '../../sanity/sanity-client'
import ProductCard from '../product-card/ProductCard';
import  AF_BLACK1 from '../../assets/images/products/af1black1.jpg';

const ProductCarousal = ({ title }) => {
 
const[products, setProducts]=useState(null);

const[products1, setProducts1]=useState(null);

useEffect(()=>{
  const fetchProducts= async ()=>{
     const products= await sanityClient.fetch('*[_type == "products"]{ title,category,brand,price,id,image}')
     setProducts(products);
    }
   fetchProducts()
  },[])

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
      {
        products1.map((a)=>a)
      }
      <h3>{title}</h3>
      <div className={classes.carousal}>
        <div className={classes.prev_btn}>
          <SlArrowLeft onClick={showPrev} />
        </div>
        <div className={classes.card_container} ref={cardContainerRef}>
          {
            products?.map((product)=>{
                return <ProductCard title={product.title} id={product.id.current} i1={AF_BLACK1}/>
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
