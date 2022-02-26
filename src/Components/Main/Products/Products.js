import React, { useRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import { FaTimes } from 'react-icons/fa'
import {BsCart4, BsFillSuitHeartFill} from 'react-icons/bs'
import { CartContext } from '../CartContext';
import { StoreContext } from '../../Store/StoreContext';


const Products = ({ products }) => {
    
    const [cart, setCart] = useContext(CartContext)
    const [store, setStore] = useContext(StoreContext)
    const [isLiked, setIsLiked] = useState(false)
    const popupRef  = useRef()

    const addToCart = (product, e)=>{
        setCart([...cart, {product:product}]);
        popupRef.current.style.display="block";
    }
    function addToStore(newProduct){
        setStore([...store, {product:newProduct}]);
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
                    <>
                        {product.fields.isLiked = false}
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
                            <div onClick={e=>{addToCart(product, e)}} className="float">
                                <BsCart4 className='cartIcon' />
                            </div>
                            <div onClick={e=>{addToStore(product)}}  className={`float like ${product.fields.isLiked && 'liked'}`}>
                                <BsFillSuitHeartFill className='cartIcon' />
                            </div>
                        </div>
                        <Product onAdd={addToCart} product={product} />
                    </div>
                    </>
                    )) 
                }
                
                <div ref={popupRef} className="popup">Product added... 
                    <Link to="/cart"><div>click here go to cart</div></Link>
                    <span className="closePopup" onClick={removePopup}><FaTimes /></span>
                </div>
        </section>
    </> 
    )
}

export default Products
