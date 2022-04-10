import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  const dispatch = useDispatch();

  const removeProdHandler = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((prod) => {
          return (
            <div className="cartCard">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <h5>{prod.price}</h5>
              <button
                className="btn"
                onClick={() => removeProdHandler(prod.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
