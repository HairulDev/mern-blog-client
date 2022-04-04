import React from 'react';
import gbr1 from '../../assets/images/bgRegister.jpg';
import { Button } from '../../components';
import { useHistory, withRouter } from 'react-router-dom';


const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className='row justify-content-center'>
      <div className="col-md-6  ">
          <div className='card mt-4'>
              <div className='card-body'>
                  <div className="card shadow p-2">
                      <div className="card">
                          <img src={gbr1} className="card-img-top" />
                          <div className="card-body">
                              <h6 className="card-title">Card title</h6>
                              <small className="card-text">Author - Data post</small>
                              <p className="card-text">Some quick example  card's content.</p>
                              
                <Button title="Back to Home" className='btn btn-block btn-outline-warning' onClick={() => history.push("/")} />
                          </div>
                      </div>
                  </div>
              </div>
              <svg className="decoration-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 192.275">
              <path className="cls-1" d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z" transform="translate(0 -158.755)" />
              </svg>
          </div>
      </div>
    </div>
  )
}

export default DetailBlog
