import React from 'react';
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary) className.push("btn-primary");
  if (props.isInfo) className.push("btn-info");
  if (props.isWarning) className.push("btn-warning");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
      <div>
        <button 
          onClick={onClick}
          className={className.join(" ")} >
          {props.children}
        </button>
      </div>
  )
}


Button.propTypes = {
  type: propTypes.oneOf(["button"]),
  className: propTypes.string,
};
