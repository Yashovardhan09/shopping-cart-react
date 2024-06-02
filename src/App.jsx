import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [ warning,setWarning]=useState(false)
  const[show,setShow]=useState(true);

  const handleClick = (item)=>{
    let isPresent = false;
    
    cart.forEach((product)=>{
      if(item.id === product.id){
        isPresent=true;
      }
    })
      if(isPresent){
        setWarning(true);
        setTimeout(() => {
          setWarning(false)
        }, 2000);
        return
      }
    setCart([...cart,item])
  }
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>
      }
      
      {warning && <div className='warning'>
        Item is already present
        </div>}
    </div>
  )
}

export default App
