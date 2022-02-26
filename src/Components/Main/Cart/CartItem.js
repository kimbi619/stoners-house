import React,{useState, useContext} from 'react'
import './Cart.css'
import { IoStarSharp } from 'react-icons/io5'
import { StoreContext } from '../../Store/StoreContext'
import { CartContext } from '../CartContext'

const CartItem = ({ product, onRemove, onCartChange }) => {
    const [itemCount, setItemCount] = useState(1)
    const [store, setStore] = useContext(StoreContext);
    const [cart, setCart] = useContext(CartContext);
    let medias = [];
    const stars = Array(5).fill(0);
    const colors={
        blue: "#EFAD15",
        gray: "#a9a9a9"
    }

    if(product.fields.productImage){
        product.fields.productImage.forEach(elt => {
            medias.push(elt.fields.file.url);
        });
    }


    const {name, rating, price} = product.fields
    const id = product.sys.id;
    const removeItem = (e)=>{
        onRemove(id)
    }

    const addToStore = (product, e) => {
        console.log(product)
        setStore([...store, {product:product}])
        let filteredCart = cart.filter(item => (item.product.sys.id != product.sys.id))
        setCart(filteredCart)
        console.log(filteredCart)
    }
    
    if(itemCount <= 0){
        setItemCount(1)
    }
    product.fields.count = parseInt(itemCount)
    
    const getRealCount = (e)=>{
        onCartChange(e, parseInt(itemCount))
    }
    return (
        <div>
            <div onChange={(e) => {getRealCount(e)}} className="cartItemWrapper">
                <div className="cartFlexItem cartImageWrapper">
                    <img src={medias[0]} alt={name} />
                </div>
                <div className="cartFlexItem cartDescription">
                    <h3 className="cartItemName">{name}</h3>
                    <div className="rating remove">
                        {stars.map((_, index)=>(
                            <IoStarSharp className="star"
                                key = {index} 
                                color={(rating) > index ? colors.blue: colors.gray}
                            />
                        ))}
                        <div className="cartNumbers remove">2123 sold . All Levels</div>
                    </div>
                </div>
                <div className="cartFlexItem cartControl">
                    <div className="cartMobilePrice">${price}</div>
                    <div className="cartPrice">${price}</div>
                    <div className="cartBtnControl">
                        <span onClick={removeItem} className="cartBtn">remove</span>
                        <span onClick={e=>addToStore(product, e)} className="cartBtn cartSaveToLater remove">save</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem
