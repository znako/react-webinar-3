import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

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
      <div className="Item-title">{props.item.title}</div>
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
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => {},
};

export default React.memo(Item);
