import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './Payments.css'
import { CartContext } from '../CartContext'
import { ReactComponent as Cashapp } from "./icons/cashapp.svg"
import { ReactComponent as Vemo } from "./icons/vemo.svg"
import { ReactComponent as Zelle } from "./icons/zelle.svg"
import { ReactComponent as GPay } from "./icons/googlepay.svg"
import { ReactComponent as AmazonPay } from "./icons/amazonpay.svg"
import { ReactComponent as Stripe } from "./icons/stripe.svg"
import Pay from './Pay'

const Payments = () => {
    
    const [cart, setCart] = useContext(CartContext);
    const [selectedPay, setSelectedPay] = useState({})
    const [paymentMethods, setPaymentMethods] = useState([
        {
            logo: <Cashapp />,
            color: '#71C071',
            name: 'cash app'
        },
        {
            logo: <Vemo />,
            color: '#3d95ce',
            name: 'vemo'
        },
        {
            logo: <Zelle />,
            color: '#6D1ED4',
            name: 'zelle'
        },
        {
            logo: <GPay />,
            color: '#EA4335',
            name: 'google pay'
        },
        {
            logo: <AmazonPay />,
            color: '#32325D',
            name: 'amazon pay'
        },
        {
            logo: <Stripe />,
            color: '#32325D',
            name: 'bank transfer'
        },
    ])

    let totalPrice = 0;
    cart.forEach(elt => {
        totalPrice += elt.product.fields.price
    });

    console.log(cart)
  return (
    <div className='payments container'>
        <section className="paymentMethods">
            <div className="paymentGrid">
                {
                    paymentMethods.map((payMethod, index) =>(
                        <div key={index} onClick={e=>setSelectedPay(payMethod)} className="payCart">
                            <a href='#paymentSection'>
                            {payMethod.logo}
                            <div className="payName">
                                {payMethod.name}    
                            </div>
                            </a>
                        </div>
                    ))
                }    
            </div>
            
        </section>
        <section className="selectedPaymentMethod">
            <div id='paymentSection' className="totalPayments" style={{color: selectedPay ? selectedPay.color:'#71C071'}}>
                <h3>Total payment</h3>    
                <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="disclaimer">
                <span>Please note that all payments made are none refundable and we will not be held accountable for any controvercies. For more assistance please get to us using our social links</span>    
            </div>
            <div className="itemsToBuyWrapper">
            {
                cart.map((item, index) => (
                    <div key={index}>
                        <div className="itemToBuy">
                            <div className="mainSection">
                                <div className="imgWrapper">
                                    <img src={item.product.fields.productImage[0].fields.file.url} alt={item.product.fields.name} />    
                                </div>
                                <div className="pdtName">{item.product.fields.name}</div>
                            </div>
                            <div className="quantity">order count: 5</div>
                            <div className="price">${item.product.fields.price}</div>
                        </div>
                        <div className="lineUnder"></div>
                    </div>
                ))
            }    
            </div>  
            <Pay selectedPay={selectedPay} />  
        </section>
    </div>
  )
}

export default Payments
