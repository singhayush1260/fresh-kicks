import { useContext, useState } from 'react'
import classes from './Checkout.module.scss'
import {SiRazorpay} from 'react-icons/si'
import {AiOutlineDelete} from 'react-icons/ai';
import {PiShoppingCartThin} from 'react-icons/pi'
import { CartContext } from '../../context/cartContext'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';
const Checkout=()=>{

const{cartData, dispatch, totalPrice, calculateTotalPrice}=useContext(CartContext);
const{authData:{ user }}=useContext(AuthContext);
const[savedAddress, setSavedAddress]=useState([{address:'D9 Alpha 1, Greater Noida Uttar Pradesh', _id:1},
{address:'D9 Alpha 1, Greater Noida Uttar Pradesh', _id:2}])

const notify = (message) => {
  calculateTotalPrice();
  toast.error(message);
}

const checkoutHandler = async (name, email, contact, amount) => {
         
     console.log('checkout handler')
     try{
        const { data:{key} } = await axios.get("http://www.localhost:3000/api/getkey",{
            headers:{
              'Authorization':`Bearer ${user.token}`
            }
          })
       
        console.log(key)
   
        const { data:{order} } = await axios.post("http://localhost:3000/api/checkout", {amount},{
            headers:{
                'Authorization':`Bearer ${user.token}`
              }
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Fresh Kicks",
            description: "Your shop value",
            image: "https://www.superkicks.in/cdn/shop/files/squarelogo-2_2x_435ae8f5-0c82-4cb6-926d-49d17d86ac01.png?v=1670233733&width=150",
            order_id: order.id,
            callback_url: "http://localhost:3000/api/paymentverification",
            prefill: {
                name: name,
                email: email,
                contact: contact
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
     }
     catch(error){
         notify("Login to checkout.")
     }
 }

 const renderAddressUI=()=>{
  return <div className={classes.user_address}>
    <div className={classes.form_controller}>
    <label className={classes.input_label}>Saved Addresses</label>
    <select name="SavedAdress">
      {savedAddress && savedAddress.map((sa)=>{
        return <option value={savedAddress} key={sa._id}>{sa.address}</option>
      })}
    </select>
    </div>
    <div className={classes.form_controller}>
      <label className={classes.input_label}>Full Address</label>
      <input  className={classes.input_field} type="text" name="FullAddress" placeholder="Enter your full address"/>
    </div>
    <div className={classes.form_controller}>
      <label className={classes.input_label}>Nearest Landmark</label>
      <input  className={classes.input_field} type="text" name="Landmark" placeholder="Enter nearest landmark"/>
    </div>
    <div className={classes.form_controller}>
      <label className={classes.input_label}>City / State</label>
      <div className={classes.split}>
       <input  className={classes.input_field} type="text" name="City" placeholder="City"/>
       <input  className={classes.input_field} type="text" name="State" placeholder="State"/>
    </div>
    </div>
    <button className={classes.save_adrress_btn}>Save Address</button>
  </div>
 }

return(
  <>
  <Toaster position="top-center" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}}
  toastOptions={{
 className: '',
 duration: 3000,
 style: { background: '#363636',color: '#fff',},
 success: {duration: 3000, theme: { primary: 'green',secondary: 'black'}}}} />
    <div className={classes.page_wrapper}>
      <div className={classes.left}>
          <div className={classes.products}>
            {
              //console.log('cardData', cartData);
              cartData && cartData.length < 1 && <div className={classes.empty_cart}>
                <PiShoppingCartThin/>
                <small>Your cart is empty.</small> 
               <small> Add products to checkout.</small>
                </div>
            }
          {
            cartData.map((product)=>{
                return <div className={classes.product}>
                <div>
                <small>{product.title}</small>
                 <small>Quantity: {product.quantity}</small>
                 <AiOutlineDelete onClick={()=>dispatch({type:'REMOVE_ITEM', payload:{id:product.id}})}/>
                </div>
               </div>
            })
          }
          </div>
          <div className={classes.total_amount}>
            <p>Total Amount:</p>
            <p>{totalPrice}$</p>
          </div>
      </div>
      <div className={classes.right}>
        <div className={classes.top}>
           { !user && ( <span>Please <Link to="/login">login</Link> to checkout.</span>)  }
           { user && renderAddressUI() }
        </div>
        <div className={classes.bottom}>
         <div className={classes.razorpay_btn} onClick={()=>checkoutHandler("ayush","ayush@gmail.com","635356463",totalPrice)}>
           <small>Pay with Razorpay</small>
           <SiRazorpay/>
         </div>
        </div>
      </div>
    </div>
  </>
)
}
export default Checkout;