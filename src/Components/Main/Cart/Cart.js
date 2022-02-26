import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const onRemove=(id)=>{
        function filteredCart(){
            return cart.filter(cartI=>{
                let pid = cartI.product.sys.id;
                if(pid !== id){
                    return cartI;
                }
                return null;
    
            })
        }
        
        setCart(filteredCart())
    }

    let totalPrice = 0;
    cart.forEach(elt => {
        totalPrice += elt.product.fields.price
    });



    return (
        <div className="cartPageWrapper">
            <div className="carts">
                {
                    
                    cart.length < 1?
                    <div className='notAvailable'>
                        <h1 className='empty'>Cart is empty</h1>
                    </div>
                    :cart.map(cartItem=>(
                        // <h3 key={cartItem.product.sys.id}>{cartItem.product.fields.name}</h3>
                        <div key={cartItem.product.sys.id}>
                            <CartItem onRemove = {onRemove} product={cartItem.product} />
                        </div>
                    ))
                }
            </div>
            <div className="cartCheckOutSection">
            <div className=" checkout">
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
                            <h1 className="titleTextSmall">Location &amp; shipping address</h1>
                            <div className="splitInputField">
                                <input className='checkoutInputs firstNameInput' type="text" name='fName' placeholder='house address' /> 
                                <input className='checkoutInputs lastNameInput' type="text" name='lname' placeholder='street' /> 
                            </div>
                            <input className='checkoutInputs' type="email" name='email' placeholder='State / Town / Province' /> 
                            <input className='checkoutInputs' type="email" name='email' placeholder='ZIP code ' /> 
                        </section>
                    </form>
                </div>
                <div className="totalWrapper">
                    <h3 className="cartItemName">Total</h3>
                    <h1 className="totalPrice">${totalPrice.toFixed(2)}</h1>
                </div>

                <Link to={cart.length < 1 ? '/cart': 'checkout'} className={`buyBtn productPlaceOrder checkout ${cart.length < 1?"payDisable": ""}`}>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart
