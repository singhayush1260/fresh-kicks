import { useContext } from 'react'
import classes from './Checkout.module.scss'
import {SiRazorpay} from 'react-icons/si'
import {AiOutlineDelete} from 'react-icons/ai';
import { CartContext } from '../../context/cartContext'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';
const Checkout=()=>{

const{cartData, dispatch}=useContext(CartContext);
const{authData:{ user }}=useContext(AuthContext);

const notify = (message) => {
  toast(message);
}

const checkoutHandler = async (amount) => {
         
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
            description: "Tutorial of RazorPay",
            image: "https://www.superkicks.in/cdn/shop/files/squarelogo-2_2x_435ae8f5-0c82-4cb6-926d-49d17d86ac01.png?v=1670233733&width=150",
            order_id: order.id,
            callback_url: "http://localhost:3000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
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
      <option value="D9 Alpha 1, Greater Noida Uttar Pradesh">D9 Alpha 1, Great</option>
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
      <div className={classes.right}>
        <div className={classes.top}>
           { user && ( <span>Please <Link to="/login">login</Link> to checkout.</span>)  }
           { !user && renderAddressUI() }
        </div>
        <div className={classes.bottom}>
         <div className={classes.razorpay_btn} onClick={()=>checkoutHandler(2000)}>
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