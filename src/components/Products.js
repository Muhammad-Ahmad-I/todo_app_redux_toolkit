import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice.js";
import { STATUSES } from "../store/productsSlice";
import { add } from "../store/cartSlice";
const Products = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const addProduct = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    console.log("loading status are running");
    return <div> Loading....</div>;
  }
  if (status === STATUSES.ERROR) {
    return <div> Something Went Wrong!!</div>;
  }
  return (
    <div className="productsWrapper">
      {products.map((data) => {
        return (
          <div className="card" key={data.id}>
            <img src={data.image} alt="" />
            <h4>{data.title}</h4>
            <h5>{data.price}</h5>
            <button className="btn" onClick={() => addProduct(data)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
