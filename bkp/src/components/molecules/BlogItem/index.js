import React from 'react';
import { Button } from '../../atoms';
import { useHistory } from 'react-router-dom';

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body, _id} = props;
  return (
        <div className="col-md-4">
        <div className='card card-blog' >
            <div className="float-left m-1">
                <span className='text-info text-left ml-2 fa fa-spin fa-cog' onClick={() => history.push(`/create-blog/${_id}`)}></span>
                <div className="float-right">
                <span className='text-danger text-right mr-2 fa fa-minus-square'></span> 
                </div>
            </div>
            <div className='card-body'>
                <img src={image} className="card-img-top mb-3" alt='img'/>
                <h6 className="card-title">{title}</h6>
                <small className="card-text">{name} - {date}</small>
                <p className="card-tex mt-2">{body}</p>
                <Button title="Detail" onClick={() => history.push(`/detail-blog/${_id}`)} className='btn btn-block btn-outline-info' />
            </div>
        </div>
        </div>
  )
}

export default BlogItem
