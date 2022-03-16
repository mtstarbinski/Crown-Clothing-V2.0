import React from "react";
import "./ProductCard.style.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const ProductCard = ({item, addItem}) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="product-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItem(item)}>Add to cart</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default ProductCard;
