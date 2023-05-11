import PropTypes from 'prop-types';
import React from 'react';

function Button({
  type, className, onClick, value,
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      onClick={onClick}
      value={value}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},

};
export default Button;
