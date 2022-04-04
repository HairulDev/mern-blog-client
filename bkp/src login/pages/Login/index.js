import React, { useState } from "react";
import { Button, Input, Link } from '../../components/atoms';
import gbr from '../../assets/images/login.png';
import gbr2 from '../../assets/images/image 51.png';
import gbr3 from '../../assets/images/Vector.png';
import './register.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
const history = useHistory();
  const { username, password } = user;
  const onInputChange = e => {
    setUser ({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:4000/admin/signin', user)
    .then(result => {
      console.log("Login: ", result.message)
      history.push("/register");
    })
    .catch(result => {
      console.log("Gagal: ", result.message)
    })
  };

  return (
  //   <div className="row main-page p-0">
  //   <div className="col-md-6 left p-0">
  //     <img src={gbr} className="bg-image" alt='img' />
  //   </div>
  //   <div className="col-md-6 right ">
  //      </div>
  // </div>
<div className="card-group">
    <div className="card">
      <img src={gbr} alt='img' className="img"/>
    </div>
    <div className="card mb-1 ">
      <div className="card-body">
        <p className='beam text-left'>Log in to Beam Space</p>
        <Button gbr={gbr2} title="Log in with Google" className='button-google mb-4' />
        <Button gbr={gbr3} title="Log in with Facebook" className='button-fb mb-4' />
        <div className="separator"> <div className="line"></div> <p>or login with your email</p> <div className="line"></div> </div>
        <form>
          <Input label="Email Address" type="text" require="*" placeholder="E.g, name@email.com" name="username" value={username} onChange={e => onInputChange(e)} />
          <Input label="Password" type="password" require="*"  placeholder="Enter your password" name="password" value={password} onChange={e => onInputChange(e)} />
          <Button title="Login" onClick={ (e) => onSubmit(e) } className='button-login mb-4'/>
        </form>
        <p className='text-center'><Link title="Forgot Password?" className="link" /></p>
        <p className='text-center'><span className="account">Don’t have an account? <Link title="Create an account" className="link"  /></span></p>
      </div>
    </div>
</div>
  )
}
export default Login
