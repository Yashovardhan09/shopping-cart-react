import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  return (
    <div>
      {cart?.map((item) => {
        return (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="image" />
              <p>{item.title}</p>
            </div>

            <div>
              <span>{item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
