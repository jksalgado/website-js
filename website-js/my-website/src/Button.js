import React, { useState } from 'react';
import './Button.css';

const Button = () => {
  const [buttonText, setButtonText] = useState('Click Me');

  const handleClick = () => {
    if (buttonText === 'Click Me') {
      setButtonText('You Clicked Me');
    } else {
      setButtonText('Click Me');
    }
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};

export default Button;
