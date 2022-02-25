import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { FiBookmark } from 'react-icons/fi'
import { IoStarSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Product = ({ product, onAdd }) => {

    const {name,price, rating} = product.fields;
    const stars = Array(5).fill(0);
    const colors={
        blue: "#EFAD15",
        gray: "#a9a9a9"
    }
    const addProductToCart = (product,e)=>{
        onAdd(product, e)
    }
    const showDropDown = (e)=>{
        const dropDownList = e.target.parentElement.parentElement.nextElementSibling;
        if(dropDownList === null){
            return
        }
        dropDownList.classList.toggle('toggleDropDown');
    }
    
    return (
        <>
            <div className="product">
                
                <div className="productDesc">
                    <div className="name-price-flex">
                        <div className="name-rate">
                            <Link to={`/product/${product.sys.id}`}> 
                                <span className="name">{name}</span>
                            </Link>
                            <div className="rating">
                                {stars.map((_, index)=>(
                                    <IoStarSharp className="star"
                                        key = {index} 
                                        color={(rating) > index ? colors.blue: colors.gray}
                                    />
                                ))}
                                <span className='reviews'>- 2700 reviews</span>
                            </div>
                        </div>
                        <div className="price-discount">
                            <p className="price">${price}</p>
                            <p className="price discount">50% off$ {price}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
