import React from 'react'

const Link = ({title, onClick}) => {
  return (
      <p onClick={onClick}>{title}</p>
  )
}

export default Link
