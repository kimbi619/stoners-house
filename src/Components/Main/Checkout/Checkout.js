import React, { useContext } from 'react'
import { Link } from 'react-router-dom'



import './Checkout.css'
import { CartContext } from '../CartContext'

const Checkout = () => {
    
    const [cart, setCart] = useContext(CartContext);
  return (
        <div className='container'>
            <h1 className="checkoutTitle titleText">fill in the fields for delivery</h1>
            <div className='checkout'>
                <div className="buyerDetails">
                    <form>
                        <section className="userCridentials">
                            <h1 className="titleTextSmall">User details</h1>
                            <div className="splitInputField">
                                <input className='checkoutInputs firstNameInput' type="text" name='fName' placeholder='first name' /> 
                                <input className='checkoutInputs lastNameInput' type="text" name='lname' placeholder='last name' /> 
                            </div>
                            <input className='checkoutInputs' type="email" name='email' placeholder='email' /> 
                        </section>

                        <section className="userCridentials">
                            <h1 className="titleTextSmall">Location &copy; shipping address</h1>
                            <div className="splitInputField">
                                <input className='checkoutInputs firstNameInput' type="text" name='fName' placeholder='house address' /> 
                                <input className='checkoutInputs lastNameInput' type="text" name='lname' placeholder='street' /> 
                            </div>
                            <input className='checkoutInputs' type="email" name='email' placeholder='State / Town / Province' /> 
                            <input className='checkoutInputs' type="email" name='email' placeholder='ZIP code ' /> 
                        </section>
                    </form>
                </div>
                <div className="buyerContent">
                
                </div>
            </div>
    </div>
  )
}

export default Checkout