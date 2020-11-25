import React from 'react';
import './TextInput.css';

function TextInput(props) {
  const { size = 'medium', ...rest } = props;
  return <input className={`textInput ${size}`} {...rest} />;
}

export default TextInput;
