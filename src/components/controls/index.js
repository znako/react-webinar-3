import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Controls({ children, onClick }) {
  return (
    <div className="Controls">
      {children}
      <button onClick={() => onClick()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  // onAdd: PropTypes.func,
};

Controls.defaultProps = {
  // onAdd: () => {},
};

export default React.memo(Controls);
