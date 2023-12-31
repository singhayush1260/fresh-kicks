import { useState, useEffect } from 'react';
import classes from './ProductPage.module.scss';
import {AiFillCheckSquare} from 'react-icons/ai';
import {BsSquare} from 'react-icons/bs';
import ProductCard from '../../components/product-card/ProductCard';
import { sanityClient } from '../../sanity/sanity-client';
import af1black1 from '../../assets/images/products/af1black1.jpg'; 
const ProductPage=()=>{

    const[selectedGender,setSelectedGender]=useState(null);
    const[isSelectedCategory,setSelectedCategory]=useState([false, false, false]);
    const[isSelectedBrand,setSelectedBrand]=useState([false, false, false, false]);
    const[isSelectedPrice,setSelectedPrice]=useState([false, false, false, false]);

    const[products,setProducts]=useState(null);
    const[filteredProducts, setFilteredProducts]=useState([]);
    const[selectedFilters,setSelectedFilters]=useState([]);

    const handleFilterSelection=(currentSelectedFilter)=>{
    if(selectedFilters.includes(currentSelectedFilter)){
        let sf=selectedFilters.filter((f)=>f!==currentSelectedFilter)
        setSelectedFilters(sf);
    }
    else{
        console.log('currentSelectedFilter',currentSelectedFilter)
        setSelectedFilters([...selectedFilters,currentSelectedFilter])
    }
    }

    const filterProducts=()=>{
      if(selectedFilters.length>0){
           let tempProducts=selectedFilters.map((selected_filter)=>{
            let temp=products.filter((p)=>{ return p.category===selected_filter} )
            return temp
           })
           setFilteredProducts(tempProducts.flat())
           console.log(filteredProducts)
      }
      else{
          setFilteredProducts(products)
      }
    }   

   useEffect(()=>{
   const fetchProducts= async ()=>{
      const products= await sanityClient.fetch('*[_type == "products"]{ title,category,brand,price,id,image}')
      setProducts(products);
      setFilteredProducts(products)
     }
    fetchProducts()
   },[])

   useEffect(()=>{ filterProducts()  },[selectedFilters])

   const renderFilterUI=()=>{
    return(
      <>
       <div className={classes.gender_filter}>
           <fieldset id="gender" >
            <div>
            <input type="radio" value="men" name="gender" /> 
            <label>Men</label>
            </div>
            <div>
            <input type="radio" value="women" name="gender" /> 
            <label>Women</label>
            </div>
           </fieldset>
         </div>
         <div className={classes.categories_filter}>
            <h4>CATEGORIES</h4>
             <div className={classes.filter}>
               <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 0 ? !isSelectedCategory[0] : item)); handleFilterSelection("sneaker")}}>
                {isSelectedCategory[0] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Sneakers</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 1 ? !isSelectedCategory[1] : item)); handleFilterSelection("classics")}}>
                {isSelectedCategory[1] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Classics</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 2 ? !isSelectedCategory[2] : item)); handleFilterSelection("basketball")}}>
                {isSelectedCategory[2] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Basketball</p>
             </div>
         </div>
         <div className={classes.brand_filter}>
            <h4>BRAND</h4>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedBrand(prevState => prevState.map((item, index) => index === 0 ? !isSelectedBrand[0] : item))}>
                {isSelectedBrand[0] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Nike</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedBrand(prevState => prevState.map((item, index) => index === 1 ? !isSelectedBrand[1] : item))}>
                {isSelectedBrand[1] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Adidas</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedBrand(prevState => prevState.map((item, index) => index === 2 ? !isSelectedBrand[2] : item))}>
                {isSelectedBrand[2] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Puma</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedBrand(prevState => prevState.map((item, index) => index === 3 ? !isSelectedBrand[3] : item))}>
                {isSelectedBrand[3] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>New Balance</p>
             </div>
         </div>
         <div className={classes.price_filter}>
            <h4>PRICE</h4>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedPrice(prevState => prevState.map((item, index) => index === 0 ? !isSelectedPrice[0] : item))}>
                {isSelectedPrice[0] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Rs.1000 to Rs.5000</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedPrice(prevState => prevState.map((item, index) => index === 1 ? !isSelectedPrice[1] : item))}>
                {isSelectedPrice[1] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Rs.5000 to Rs.10000</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedPrice(prevState => prevState.map((item, index) => index === 2 ? !isSelectedPrice[2] : item))}>
                {isSelectedPrice[2] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Rs.10000 to Rs.15000</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=>setSelectedPrice(prevState => prevState.map((item, index) => index === 3 ? !isSelectedPrice[3] : item))}>
                {isSelectedPrice[3] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Rs.15000 to Rs.25000</p>
             </div>
         </div>
      </>
    )
   }

    return(
      <div className={classes.product_page_container}>
       <div className={classes.filters_container}>
        {renderFilterUI()}
       </div>
       <div className={classes.products_container}>
        { filteredProducts && filteredProducts.length < 1 && <p className={classes.no_prod_found}>No product found.</p>}
        { filteredProducts &&  filteredProducts.length > 0 && filteredProducts.map((product)=>{ console.log(product.id.current)
           return <ProductCard key={product.id.current} prod_id={product.id.current} title={product.title} brand={product.brand} price={product.price} i1={af1black1}/>
        })
          }
       </div>
      </div>
    )
}
export default ProductPage;