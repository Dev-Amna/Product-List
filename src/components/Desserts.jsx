import React, { useState, useEffect } from "react";
import "./Desserts.css";

function Desserts() {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState({});

  // Fetch data from public/data.json
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDesserts(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id]--;
      else delete newCart[id];
      return newCart;
    });
  };

  return (
    <div className="desserts-container">
    
  <h1>Desserts</h1>
      <div className="desserts-grid">
        
        {desserts.map((item, index) => (
          <div className="dessert-card" key={index}>
            <div className="image-wrapper">
              <img
                src={item.image.desktop}
                alt={item.name}
                className="dessert-image"
              />
            </div>

            <div className="button-container">
              {cart[index] ? (
                <div className="cart-controls">
                  <button className="btn" onClick={() => removeFromCart(index)}>
                    -
                  </button>
                  <span>{cart[index]}</span>
                  <button className="btn" onClick={() => addToCart(index)}>
                    +
                  </button>
                </div>
              ) : (
                <button className="add-button" onClick={() => addToCart(index)}>
                  🛒 Add to Cart
                </button>
              )}
            </div>

            <p className="category">{item.category}</p>
            <h3 className="dessert-name">{item.name}</h3>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desserts;
