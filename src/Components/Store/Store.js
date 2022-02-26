import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaTimes } from 'react-icons/fa'

import { StoreContext } from './StoreContext';
import './Store.css'
import { CartContext } from '../Main/CartContext';
import Empty from './Empty';


const Store = () => {
  const [store, setStore] = useContext(StoreContext);
  const [cart, setCart] = useContext(CartContext);

  const AddToCart = (product, e)=> {
    setCart([...cart, {product:product}]);
    removeItem(product);
  }

  const removeItem = (product) => {
    let filteredStore = store.filter(item => (item.product.sys.id != product.sys.id))
    setStore(filteredStore)
  }
  
  return (
    <div className='store container'>
      {
        store.length < 1 ? (
          <>
            <h1 className='storeIsEmpty'>You haven't saved any items</h1>
            <p className="return"><Link to='/products'>return to products</Link></p>
            <Empty />
          </>
        ) : (
        store.map((item, index) => (
          <div className="storedProduct" key={index}>
            <div onClick={e=>{removeItem(item.product)}} className="storeItemRemove"><FaTimes /></div>
            <div className="storeImageWrapper">
              <div className="storeWrap">
                <img className='storeImage' src={item.product.fields.productImage[0].fields.file.url} alt={item.product.fields.name} />
              </div>
              <div className="storeName_Price">
                <h2 className='storeItemName'><Link to={`/product/${item.product.sys.id}`}>{item.product.fields.name}</Link></h2>
                <p className='storePrice'>Current Price: {item.product.fields.price}</p>
              </div>
            </div>
            <div className="buy">
              <button onClick={e=>AddToCart(item.product, e)} className='storeAddBtn'>add to cart</button>
            </div>
          </div>
        ))
        )
      }
    </div>
  )
}

export default Store