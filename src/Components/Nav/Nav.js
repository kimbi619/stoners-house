import React, { useState, useRef, useContext } from 'react'
import { FcMenu } from 'react-icons/fc'
import './Nav.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../Main/CartContext';


const Nav = ({ products }) => {
    const [searchItems, setSearchItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cart, setCart] = useContext(CartContext);

    const background = useRef('')
    const searchItemList = useRef('')
    const searchField = useRef('');

    // toggle navigation for mobile view 
    const toggleNav = (e)=>{
        const navigation = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
       navigation.classList.toggle('showNav');
    }

    const removeNav = (e)=>{
        if(e.target.className === 'lsd'){
            const navigation = e.target.parentElement.parentElement.parentElement
            navigation.classList.remove('showNav')
        }
    }

    // search function to find particular item using regular expressions
    const searchProducts=(e)=>{
        const searchValue = e.target.value.toLowerCase();
        background.current.style.display="block";
        
        searchItemList.current.style.display="block";
        function filteredProducts(){
            return products.filter(product=>{
                let {description} = product.fields
                description = description.toLowerCase();
                if(description.includes(searchValue)){
                    return product.fields;
                }
                return "";

            })
        }
        // console.log(filteredProducts())
        setSearchItems(filteredProducts())
    }


    // remove filtered list on link select 
    const removeList = (e)=>{
        // background.current.style.display="none";
    }

    const removeSearch = (e)=>{
        background.current.style.display="none";
        searchItemList.current.style.display="none";
        searchField.current.value=""
    }

    return (
        <div>
            <div onClick={removeSearch} ref={background} className="searchBackground"></div>
            <div className="nav">
                <div className="container">
                    <div className="mobile navHeader">
                        <Link to="/" ><div className="logo">
                            <h2>Logo</ h2>
                        </div></Link>

                        <div className="search">
                            <form>
                                <input ref={searchField} onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                                <button type="submit" className="icon searchIcon"><FaSearch /></button>
                            </form>
                        </div>

                        <div className="burgerMenu" onClick={toggleNav}>
                            <div className="menu"><FcMenu /></div>
                        </div>
                    </div> 
                </div>
            
                {/* Search form to filter user input and route to product page */}
                <div ref={searchItemList} className="searchFilter">
                    <ul>
                        {
                            searchItems.map((item, index)=>(
                                <Link key={index} to={`/product/${item.sys.id}`}> 
                                    <li onClick={removeSearch} className="searchLinks">{ item.fields.description }</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <nav onClick={removeNav}>
                    <div className="logoCaption">
                        <Link to= "/"><div className="logo">logo</div></Link>
                        <div className="caption">Fill with Caption</div>
                    </div>
                    <ul className="navList">
                        <li className="navLink"><Link className='lsd' to="/products" >Products</Link></li>
                        <li className="navLink"><Link className='lsd' to="/contact-us">Contact us</Link></li>
                        <li className="navLink"><Link className='lsd' to="/about">About</Link></li>
                        <li className="navLink cart"><Link className='lsd' to="/cart">Cart</Link><span className={`${cart.length === 0 && 'zeroCartSize'} cartSize`}>{cart.length}</span></li>
                        <li className="navLink"><Link className='lsd' to="/store">Save</Link></li>
                        <li className="navLink"><Link className='lsd' to="/register/signup">Account</Link></li>
                    </ul>
                    <div className="logout">Log out</div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
