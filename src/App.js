import {React, useState} from 'react'
import data from './components/back/data/data'
import Header from './components/front/Header/Header'
import { BrowserRouter as Router} from "react-router-dom"
import Routes from './components/front/Routes/Routes'

const App = () => {
  const { productItems } = data;
  const [cartItems, setcartItems] = useState([])

  const handleAddProduct=(product) =>{
      const ProductExist = cartItems.find((item) => item.id === product.id);
    
      if(ProductExist){
        setcartItems( cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity +1 } : item))
      } else{
        setcartItems([...cartItems, {...product, quantity:1}])
    }
  }

  const handleRemoveProduct =(product)=> {
    const ProductExist = cartItems.find((item) => item.id === product.id);
     
    if (ProductExist.quantity === 1) {
       setcartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setcartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1} : item))
    }
  }

  const handleCardClearence =() => {
    setcartItems([])
  }

  return (
    <div>
       <Router>
         <Header />
         <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCardClearence={handleCardClearence}/>
       </Router>
    </div>
  )
}
export default App
