import React from 'react';
import './MyButton.css';

function MyButton(props) {
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default MyButton;
