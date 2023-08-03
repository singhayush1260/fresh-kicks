import classes from './PaymentSuccessful.module.scss';
import { Link, useSearchParams } from "react-router-dom"
import runFireworks from '../../utils/FireworksConfetti';
import { useEffect, useContext } from 'react';
import {BsCheckCircle} from 'react-icons/bs';
import {CiShoppingCart} from 'react-icons/ci';
import { CartContext } from '../../context/cartContext';
import { format } from 'date-fns';
const PaymentSuccessful = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

    const{dispatch}=useContext(CartContext);

    useEffect(()=>{
        runFireworks();
        dispatch({type:'CLEAR_CART'});
    },[])
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.main_container}>
             <BsCheckCircle/>
             <p>Payment Successful</p>
             <div className={classes.payment_details}>
                <span><b>Transaction Number: </b> <small>{referenceNum}</small></span>
                <div className={classes.payment_details_divs}>
                <div> <Link to="/">Continue Shopping!</Link> <CiShoppingCart/> </div>
                <div> <p>Date</p> <small> {format(new Date(),'do MMM, YYY')} </small> </div>
                <div> <p>Amount Paid</p> <small>6785$</small> </div>
                </div>
             </div>
            </div>
        </div>
    )
}

export default PaymentSuccessful