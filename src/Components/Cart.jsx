import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../store/cartSlics";
import '../Styles/Cart.css'

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const handleremove=(productId)=>{
      dispatch(remove(productId));
  }
  
  return (
    <div style={{marginBottom:"20px"}}>
      <h3 style={{ marginLeft: "40px" }}>Flights</h3>
      <div style={{ marginLeft: "40px" }}>
        {products.map((product) => (
          <div className="cartcard" style={{ display: "flex" }}>
            <img
              style={{ width: "20%", height: "10%", marginTop: "10px" }}
              src={product.imageSrc}
              alt=""
            />
            <h5 style={{ marginLeft: "40px", marginTop: "10px" }}>
              {product.title}
            </h5>
            <h5 style={{ marginLeft: "10px", marginTop: "10px" }}>
              {product.price}
            </h5>
            <button
              style={{ height: "10%", marginTop: "10px", marginLeft: "20%" }}
              onClick={() => handleremove(product.id)}
              className="btn0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
