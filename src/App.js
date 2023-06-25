import { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NewArrival from './components/NewArrival';
import NewsLetter from './components/NewsLetter';
import Products from './components/Products';
import Service from './components/Service';
import SideCart from './components/SideCart';
import Testimonial from './components/Testimonial';

function App() {
  const[showCart,setShowCart]=useState(false)
  const toggleCart=()=>setShowCart(prev=>!prev)

  return (
  <>

 <Header toggleCart={toggleCart}/>
<SideCart  toggleCart={toggleCart} showCart={showCart} />
  <main className="main">

   <Home />

   <NewArrival />
 
   <About/>
  
   <Service/>
   <Products/>
   <Testimonial/>
   <NewsLetter/>
   
 
  </main>

<Footer/>
 


      

    
  </>
  );
}

export default App;
