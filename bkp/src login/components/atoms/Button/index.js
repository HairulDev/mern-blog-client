import React from 'react';
import './button.scss';

const Button = ({gbr, title, ...rest}) => {
if(!gbr) {
  return <button {...rest}><img src={gbr} alt='alt' className='d-none' />{title}</button>
} else {
    return (
        <button {...rest}><img src={gbr} alt='alt' className='icon ' /> {title}</button>
    )
  }
}

export default Button
