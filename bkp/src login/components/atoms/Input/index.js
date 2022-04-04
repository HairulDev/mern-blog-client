import React from 'react'

const Input = ({label, require, ...rest}) => {
  return (
    <div>
      <label className='label mb-2'>{label}</label>
      <span className='label text-danger'>{require}</span>
      <div> <input className="form-control mb-4" {...rest}/> </div>
    </div>
  )
}

export default Input
