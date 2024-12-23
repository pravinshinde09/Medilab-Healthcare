import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  return (
    <div
      className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pb-2"
      key={props.id}
    >
      <div className="products">
        <div className="product">
          <Link
            className="woocommerce-LoopProduct-link"
            to={`/product/${props.id}`}
          >
            <img src={props.image} alt={props.id}/>
            <h2>{props.name}</h2>
            <div className="product-description-short"></div>
          </Link>
          <Link to={`/product/${props.id}`} className="button product_type_simple">
            <i style={{ color: "white" }}>View</i>
          </Link>
          <ToastContainer position="bottom-right" closeOnClick="false" autoClose={10} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
