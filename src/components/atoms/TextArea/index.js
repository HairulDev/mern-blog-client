import React from 'react';

const TextArea = ({...rest}) => {
  return (
    <div>
      <textarea className='form-control mt-3' {...rest}></textarea>
    </div>
  )
}

export default TextArea
