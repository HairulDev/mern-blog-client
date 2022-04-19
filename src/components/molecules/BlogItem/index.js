import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../atoms';

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body, _id, onDelete} = props;

    return (
        <div className="col-md-4">
            <div className='card card-blog' >
                <div className="float-left m-1">
                    <span className='text-info text-left ml-2 fa fa-spin fa-cog' onClick={() => history.push(`/create-blog/${_id}`)}></span>
                    <div className="float-right">
                        <span onClick={() => onDelete(_id)}  className='text-danger text-right mr-2 fa fa-minus-square'></span>
                    </div>
                </div>
                <div className='card-body'>
                    <img src={image} className="card-img-top mb-3" alt='img'/>
                    <h6 className="card-title">{title}</h6>
                    <small className="card-text">{name} - {date}</small>
                    <p className="card-tex mt-2">{body}</p>
                    <Button children="Detail" type='button' title="Detail" onClick={() => history.push(`/detail-blog/${props._id}`)} 
                    className="btn btn-outline btn-sm" isWarning ></Button>
                </div>
            </div>
        </div>
  )
}

export default BlogItem
