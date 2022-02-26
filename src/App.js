import './App.css';
import { useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import Register from './Components/Registration/Register';
import { Route, Switch } from 'react-router';
import CategoryCarousel from './Components/Nav/CategoryCarousel';
import useLocalStorage from './UseLocalStorage';
import HomePage from './Components/HomePage';
import app from './fire'
import CategoryDesktop from './Components/Nav/CategoryDesktop';
import Contact from './Components/Contact/Contact';
import { CartContextProvider } from './Components/Main/CartContext';
import { StoreContextProvider } from './Components/Store/StoreContext'
import Checkout from './Components/Main/Checkout/Checkout';
import Store from './Components/Store/Store';




function App() {
  console.log(app);

  
  const [products, setProducts] = useLocalStorage('products', [])

  useEffect(() => {  
    Client.getEntries()
    .then(res=>{
      setProducts(res.items);
    })
    .catch(err=>console.log(err))

  }, []);

  const handleFilter = (category)=>{
    console.log(category.target);
  }



  return (
    <div className="App">
      <CartContextProvider>
        <StoreContextProvider>
        <Nav products={products} />
        <Route path="/products" exact>
          <CategoryCarousel className='categoryMobile' onFilter={handleFilter} products={products} />
          <CategoryDesktop className='categoryDesktop' />
        </Route>
        <Main products={products} />
        
        <Switch>
          <Route path="/register/signup" component={Register}  />
          <Route path="/register/login" component={Register}  />
          <Route path="/contact-us" component={Contact}  />
          <Route path="/checkout" component={Checkout}  />
          <Route path="/store" component={Store}  />
          <Route path="/" exact><HomePage products={products} /></Route>
        </Switch>
        </StoreContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
