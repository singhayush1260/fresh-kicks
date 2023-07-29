import { useContext } from 'react'
import classes from './Checkout.module.scss'
import {CiCircleRemove} from 'react-icons/ci'
import {SiRazorpay} from 'react-icons/si'
import { CartContext } from '../../context/cartContext'
import axios from 'axios'
const Checkout=()=>{

const{cartData, dispatch}=useContext(CartContext);

const checkoutHandler = async (amount) => {
         

    console.log('checkout handler')

     const { data:{key} } = await axios.get("http://www.localhost:3000/api/getkey")
       
     console.log(key)

     const { data:{order} } = await axios.post("http://localhost:3000/api/checkout", {
         amount
     })
     //console.log(data)

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

return(
    <div className={classes.page_wrapper}>
      <div className={classes.left}>
          {
            cartData.map((product)=>{
                return <div className={classes.product}>
                <div>
                <small>{product.title}</small>
                 <small>Quantity: {product.quantity}</small>
                 <CiCircleRemove onClick={()=>dispatch({type:'REMOVE_ITEM', payload:{id:product.id}})}/>
                </div>
               </div>
            })
          }
      </div>
      <div className={classes.right}>
        <div className={classes.top}>
.
        </div>
        <div className={classes.bottom}>
         <div className={classes.razorpay_btn} onClick={()=>checkoutHandler(2000)}>
           <small>Pay with Razorpay</small>
           <SiRazorpay/>
         </div>
        </div>
      </div>
    </div>
)
}
export default Checkout;