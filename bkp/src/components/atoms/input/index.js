import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div>
    <label>{label}</label>
      <input className="form-control mb-4" {...rest}/>
    </div>
  )
}

export default Input
