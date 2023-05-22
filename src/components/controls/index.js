import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Controls({ children, onClick }) {
  return (
    <div className="Controls">
      <div className="Controls-items">{children}</div>
      <button onClick={() => onClick()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Controls.defaultProps = {
  onClick: () => {},
};

export default React.memo(Controls);
