import React, { useEffect, useState } from 'react';
import { Button,  Input, Upload, TextArea } from '../../components';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import  Axios  from 'axios';

const CreateBlog = (props) => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body} = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    if(id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:5000/v1/blog/post/${id}`)
      .then(res => {
        const data = res.data.data;
        dispatch(setForm('title', data.title));
        dispatch(setForm('body', data.body));
        dispatch(setImgPreview(`http://localhost:5000/${data.image}`));
      })
      .catch(err => {
        console.log('err: ', err)
      })
    }
  }, [dispatch, props])

  const onSubmit = () => {
    const id = props.match.params.id;
    if(isUpdate) {
      updateToAPI(form, id);
      console.log('update data');
    } else {
      postToAPI(form);
      console.log('create data')
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-5">
        <div className="card ">
          <div className="card-body">
            <div className="card shadow p-2">
              <div className="float-left">
                <div className="float-right">
                  <h6 className="text-right">{isUpdate ? 'Update' : 'Create New'} Blog Post <i className="fa fa-align-left"></i></h6>
                </div>
              </div>
                <Input placeholder="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
                <Upload  onChange={(e) => onImageUpload(e)} img={imgPreview} />
                <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
                <div className='row mt-2'>
                  <div className='col-md-6'>
                  <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} className='btn btn-block btn-primary'/>
                  </div>
                  <div className='col-md-6'>
                  <Button title="Back to Home" className='btn btn-block btn-outline-warning' onClick={() => history.push("/")} />
                  </div>
                </div>
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

export default withRouter(CreateBlog)
