import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import { FaTimes } from 'react-icons/fa'
import {BsCart4, BsFillSuitHeartFill} from 'react-icons/bs'
import { CartContext } from '../CartContext';


const Products = ({ products }) => {
    const [cart, setCart] = useContext(CartContext)
    const popupRef  = useRef()

    const addToCart = (product, e)=>{
        setCart([...cart, {product:product}]);
        popupRef.current.style.display="block";
    }

    // remove the popup alert from display
    const removePopup = (e)=>{
        e.target.parentElement.style.display="none";
    }
   
    return (
        <>
        
        <div className="container">
            <h1 className='buyers_top_list titleBig'>Buyers top list</h1>
        </div>
        <section className="productGridWrapper container">
            {
                products.map((product, index)=>(
                    // <Product product={product} key={product.sys.id} />
                    <div className='productItem' key={product.sys.id}>
                        <Link to={`/product/${product.sys.id}`}> 
                            <div className="productImgWrapper">
                                {product.fields.productImage &&
                                <img className="productImg skeleton"
                                    src={product.fields.productImage[0].fields.file.url} 
                                    alt={product.fields.name} 
                                 />}
                            </div>
                        </Link>
                        <div className="innerLinks">
                            <div className="float">
                                <BsCart4 className='cartIcon' />
                            </div>
                            <div className="float like liked">
                                <BsFillSuitHeartFill className='cartIcon' />
                            </div>
                        </div>
                        <Product onAdd={addToCart} product={product} />
                    </div>
                    ))  
                }
                
                <div ref={popupRef} className="popup">Product added... 
                    <Link to="/cart"><div>go to cart</div></Link>
                    <span className="closePopup" onClick={removePopup}><FaTimes /></span>
                </div>
        </section>
    </> 
    )
}

export default Products
