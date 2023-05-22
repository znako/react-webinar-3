import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import List from "../list";
import { priceFormat } from "../../utils";

function Cart({ cartList, onDeleteItemFromCart, cartCost }) {
  return (
    <div className="Cart">
      <div className="Cart-margin-top"></div>
      <List list={cartList} btnTitle="Удалить" onClick={onDeleteItemFromCart} />
      <div className="Cart-total">
        Итого <span>{priceFormat(cartCost)}</span>
      </div>
      <div className="Cart-margin-bottom"></div>
    </div>
  );
}

Cart.PropTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
  cartCost: PropTypes.number,
  onDeleteItemFromCart: PropTypes.func,
};

Cart.defaultProps = {
  onDeleteItemFromCart: () => {},
};

export default React.memo(Cart);
