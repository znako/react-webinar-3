import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { priceFormat } from "../../utils";

function Item(props) {
  const callbacks = {
    onClick: (e) => {
      e.stopPropagation();
      props.onClick(props.item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">
        {props.item.title}
        <span className="Item-price">{priceFormat(props.item.price)}</span>
      </div>
      {props.item.count && (
        <span className="Item-count">{props.item.count}&nbsp;шт</span>
      )}
      <div className="Item-actions">
        <button onClick={callbacks.onClick}>{props.btnTitle}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  btnTitle: PropTypes.string,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => {},
};

export default React.memo(Item);
