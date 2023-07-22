import classes from './ProductPage.module.scss';
import {AiFillCheckSquare} from 'react-icons/ai';
import {BsSquare} from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { dummyProducts } from '../../../productsStore';
import CarousalCard from '../../carousal-card/CarousalCard';
const ProductPage=()=>{

    const[selectedGender,setSelectedGender]=useState(null);
    const[isSelectedCategory,setSelectedCategory]=useState([false, false, false]);
    const[isSelectedBrand,setSelectedBrand]=useState([false, false, false, false]);
    const[isSelectedPrice,setSelectedPrice]=useState([false, false, false, false]);

    const[products,setProducts]=useState(dummyProducts);
    const[filteredProducts, setFilteredProducts]=useState(dummyProducts);
    const[selectedFilters,setSelectedFilters]=useState([]);

    const handleFilterSelection=(currentSelectedFilter)=>{
        //console.log('currentSelectedFilter',currentSelectedFilter)
    if(selectedFilters.includes(currentSelectedFilter)){
        let sf=selectedFilters.filter((f)=>f!==currentSelectedFilter)
        //console.log('sf',sf)
        setSelectedFilters(sf);
    }
    else{
        console.log('currentSelectedFilter',currentSelectedFilter)
        setSelectedFilters([...selectedFilters,currentSelectedFilter])
        //console.log('selectedFilters',selectedFilters)
    }
    }

   // useEffect(()=>{console.log('selectedFilters',selectedFilters)},[selectedFilters])

    const filterProducts=()=>{
       console.log('selectedFilters',selectedFilters)
      if(selectedFilters.length>0){
           let tempProducts=selectedFilters.map((selected_filter)=>{
           // console.log('selected_filter',selected_filter)
            let temp=products.filter((p)=>{ return p.category===selected_filter} )
            // console.log('temp',temp)
           //  console.log('temp.length',temp.length)
            return temp
           })
           setFilteredProducts(tempProducts.flat())
      }
      else{
        console.log('lasttttt')
          console.log('products',products)
          setFilteredProducts(products)
      }
    }   

   useEffect(()=>{ filterProducts()  },[selectedFilters])

    return(
      <div className={classes.product_page_container}>
       <div className={classes.filters_container}>
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
               <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 0 ? !isSelectedCategory[0] : item)); handleFilterSelection("Sneakers")}}>
                {isSelectedCategory[0] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Sneakers</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 1 ? !isSelectedCategory[1] : item)); handleFilterSelection("Classics")}}>
                {isSelectedCategory[1] ? <AiFillCheckSquare/> : <BsSquare/>}
               </div>
               <p>Classics</p>
             </div>
             <div className={classes.filter}>
             <div className={classes.tick_box} onClick={()=> {setSelectedCategory(prevState => prevState.map((item, index) => index === 2 ? !isSelectedCategory[2] : item)); handleFilterSelection("Basketball")}}>
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
       </div>
       <div className={classes.products_container}>
       { filteredProducts.map((product)=>{
           return <CarousalCard title={product.name} brand={product.brand} price={product.price} i1={product.image}/>
        })
          }
       </div>
      </div>
    )
}
export default ProductPage;