import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Modal({ isVisible, setVisible, children, title }) {
  const callbacks = {
    setVisible: (e) => {
      e.stopPropagation();
      setVisible(false);
    },
  };
  return (
    <div
      className={isVisible ? "Modal active" : "Modal"}
      onClick={callbacks.setVisible}
    >
      <div
        className={isVisible ? "Modal-content active" : "Modal-content"}
        onClick={callbacks.setVisible}
      >
        <div className="Modal-header">
          <h2 className="Modal-title">{title}</h2>
          <div>
            <button onClick={callbacks.setVisible}>Закрыть</button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
};

Modal.defaultProps = {
  setVisible: () => {},
};

export default React.memo(Modal);
