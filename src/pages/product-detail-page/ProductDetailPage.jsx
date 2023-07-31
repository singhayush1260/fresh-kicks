import { useContext, useEffect, useState } from 'react';
import classes from './ProductDetailPage.module.scss';
import {LiaHeart} from 'react-icons/lia';
import af1black1 from '../../assets/images/products/af1black1.jpg'; 
import af1black2 from '../../assets/images/products/af1black2.jpg'; 
import ProductCarousal from '../../components/product-carousal/ProductCarousal';
import { CartContext } from '../../context/cartContext';
import { WishlistContext } from '../../context/wishlistContext';
import { useParams } from 'react-router-dom';
import { sanityClient } from '../../sanity/sanity-client';
const ProductDetailPage=({product_id})=>{
    
    const{dispatch}=useContext(CartContext)
    const{dispatch:wishlistDispatcher}=useContext(WishlistContext);
    const[product,setProduct]=useState({});
    const{prod_id}=useParams();
    //console.log(cartData)
    
    console.log('slug',prod_id)
    const dummyProduct=[{
    id:{current: 1},
    title:"Air Force 1 Black",
    brand:"Nike",
    price:"8790",
    image:[null]
    }]


    useEffect(()=>{
        const fetchProduct= async ()=>{
            const product=await sanityClient.fetch(`*[id.current == "${prod_id}"]`);
            setProduct(product[0]);
           // console.log(product)
           //console.log('dummy product', dummyProduct[0])
        }
        fetchProduct();
        console.log(product);
        
    },[])

    const[mainImage,setMainImage]=useState(af1black1);

   
    const handleImageChange=(img)=>{
        setMainImage(img);
    }

    return(
      <>
        <div className={classes.page_wrapper}>
        <div className={classes.images}>
            <div className={classes.main_image}>
                <img src={mainImage} alt="af1"/>
            </div>
            <div className={classes.thumbnails}>
            <img  className={`${ mainImage === af1black1 ? classes.current_image : null   }`}  src={af1black1} alt="af1" onMouseEnter={()=>handleImageChange(af1black1)}/>
            <img  className={`${ mainImage === af1black2 ? classes.current_image : null   }`} src={af1black2} alt="af1" onMouseEnter={()=>handleImageChange(af1black2)}/>
            {/* <img  className={`${ mainImage === af1black2 ? classes.current_image : null   }`} src={af1black2} alt="af1" onMouseEnter={()=>handleImageChange(af1black2)}/> */}
            </div>
        </div>
        <div className={classes.info}>
            <div className={classes.brand}>
              <p>{product.brand}</p>
              {/* { console.log(isProductInWishlist(product))} */}
              <LiaHeart onClick={()=>wishlistDispatcher({type:'ADD_ITEM', payload: product})}/>
            </div>
            <div className={classes.title_and_price}>
            <p> <b>{product.title}</b> </p>
            <b>{product.price} $</b>
            </div>
            <div className={classes.sizes}>
                <p>Shoe Size</p>
                <small>Size Chart</small>
                <div className={classes.size}>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                </div>
            </div>
            <button onClick={()=>{dispatch({type:'ADD_ITEM', payload:product})}}>Add to cart</button>
        </div>
    </div>
    <div className={classes.you_may_also_like}>
     <h1>You may also like</h1>
     <div>
        <ProductCarousal/>
     </div>
    </div>
      </>
    )
}
export default ProductDetailPage;