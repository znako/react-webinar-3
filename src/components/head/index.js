import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Head({ title, children }) {
  return (
    <div className="Head">
      <h1>
        {title}
        {children}
      </h1>
    </div>
  );
}

Head.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

export default React.memo(Head);
