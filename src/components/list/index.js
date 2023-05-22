import React from "react";
import PropTypes from "prop-types";
import Item from "../item";
import "./style.css";

function List({ list, onClick, btnTitle }) {
  return (
    <div className="List">
      {list.map((item) => (
        <div key={item.code} className="List-item">
          <Item item={item} onClick={onClick} btnTitle={btnTitle} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  onClick: PropTypes.func,
  btnTitle: PropTypes.string,
};

List.defaultProps = {
  onClick: () => {},
};

export default React.memo(List);
