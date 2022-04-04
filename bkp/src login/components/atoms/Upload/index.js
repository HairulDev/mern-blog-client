import React from 'react';
import LoginBg  from '../../../assets/images/bgRegister.jpg';

const Upload = () => {
  return (
    <div>
      <img src={LoginBg} alt="Preview" className="card-img-top" />
      <input type="file" />
    </div>
  )
}

export default Upload
