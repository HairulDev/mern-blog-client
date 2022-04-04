import React from 'react';
// import LoginBg  from '../../../assets/images/bgRegister.jpg';

const Upload = ({img, ...rest}) => {
  return (
    <div>
      {img &&  <img className="card-img-top" src={img} alt="Preview" />}
      <input type="file" {...rest} />
    </div>
  )
}

export default Upload
