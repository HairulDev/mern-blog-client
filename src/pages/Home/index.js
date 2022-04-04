import React, { useEffect, useState } from 'react';
import { BlogItem, Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { useHistory } from 'react-router-dom';
import  Axios  from 'axios';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }
  
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter  + 1)
  }

  const confirmDelete = (id) => {
    Axios.delete(`http://localhost:5000/v1/blog/post/${id}`)
    .then(res => {
      console.log('sukses delete: ', res.data);
       dispatch(setDataBlog(counter === 1))
    })
    .catch(err => {
      console.log('err delete: ', err);
    })
}
  return (
   <div className='container'>
   <div className="card shadow bg-warnings border-white m-4 p-4">
     <div className='row'>
       <div className="col-md-6 text-left">
         <Button title="+ Create" className='btn btn-sm btn-info' onClick={() => history.push("/create-blog")} />
       </div>
       <div className="col-md-6 text-right">
         <p>Showing page {page.currentPage} / {page.totalPage}</p>
       </div>
         {dataBlog.map(blog => {
           return <BlogItem
           key={blog._id}
           image={`http://localhost:5000/${blog.image}`}
           title={blog.title}
           body={blog.body}
           name={blog.author.name}
           date={blog.createdAt}
           _id={blog._id}
           onDelete={confirmDelete}
           />
         })}
       <div className="col-md-6 text-left">
         <Button onClick={previous} className='btn btn-sm btn-outline-white mt-2 mb-n1 fa fa-arrow-left' />
         </div>
       <div className="col-md-6 text-right">
         <Button onClick={next} className='btn btn-sm btn-outline-white mt-2 mb-n1 fa fa-arrow-right' />
       </div>
     </div>
     </div>
   </div>
 )
}

export default Home