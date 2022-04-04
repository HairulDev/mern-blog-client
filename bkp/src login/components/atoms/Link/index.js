import React from 'react'

const Link = ({title, onClick, ...rest}) => {
  return (
      <span {...rest} onClick={onClick} >{title}</span>
  )
}

export default Link
