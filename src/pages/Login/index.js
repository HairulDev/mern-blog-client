import React from 'react';
import { Button, Gap, Input } from '../../components/atoms';

const Login = () => {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-5">
        <div className="card ">
          <div className="card-body">
            <div className="card shadow p-2">
              <div className="float-left">
                <div className="float-right">
                  <h6 className="text-right m-2 ">Login <i className="fa fa-align-left"></i></h6>
                </div>
              </div>
              <form>
                <Input label="Email" placeholder="Email" />
                <Input label="Password" placeholder="Password" />
                <Gap height={20} />
                <Button title="Login" className='btn btn-block btn-primary mb-2' />
                <Button title="Back to Register" className='btn btn-block btn-outline-warning' />
              </form>
            </div>
          </div>
          <svg className="decoration-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 192.275">
            <defs>
            </defs>
            <path className="cls-1" d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z" transform="translate(0 -158.755)" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Login
