import React, { useEffect } from 'react';
import { Button } from '../../components/atoms';
import BlogItem from '../../components/molecules/BlogItem';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
              
const Home = () => {
  // const [dataBlogs, setDataBlog] = useState([]);        // desctructure react Hook
  const {dataBlogs} = useSelector(state => state);  
  const dispatch = useDispatch();
  console.log('Data blog global: ', dataBlogs)

  useEffect(() => {
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(result=> {
      const responseAPI = result.data;
      // setDataBlog(responseAPI.data); // function react Hook
      // dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data }) // function redux
    })
    .catch(err => {
      console.log('error: ', err.message);
    })
  }, [dispatch])

  const history = useHistory();

   return (
    <div className='container'>
      <div className="row justify-content-center mt-3">
        <div className='col-md-12'>
         <Button title="Create" className='btn btn-sm btn-outline-primary mb-2' onClick={() => history.push("/create-blog")} />
        </div>
        {/* <p>{name}</p> */}
        
        { dataBlogs.map(blog => {
          return <BlogItem 
          key={blog._id} 
          image={`http://localhost:4000/${blog.image}`}
          title={blog.title}
          body={blog.body}
          name={blog.author.name}
          date={blog.createdAt}
          />
        }) }
      </div>
      <div className='row justify-content-center '>
        <div className='col-md'>
          <Button title="Prev" className='btn btn-sm btn-outline-dark my-2' />
        </div>
        <div className='col-md'>
          <p className='h2'>1/2</p>
        </div>
        <div className='col-md'>
          <Button title="Next" className='btn btn-sm btn-outline-dark ml-2 my-2' />
        </div>
      </div>
    </div>
  )
}

export default Home