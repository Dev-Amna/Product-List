import './App.css'
import Cart from './components/Cart'
import Desserts from './components/Desserts'

function App() {
  return (
    <>
    <div className="container">
      {/* Desserts */}
      <div className="desserts">
        <Desserts />
      </div>
      {/* Cart list */}
      <div className="cart">
        <Cart />
      </div>
    </div>
    </>
  )
}

export default App
