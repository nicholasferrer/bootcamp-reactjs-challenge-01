import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={this.props.onClick}>{this.props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
