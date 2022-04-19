import { Fetch } from "../../../api";

export const setDataBlog = (page) => (dispatch) => {
    Fetch(page)
    .then(result=> {
      const responseAPI = result.data;
      dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
      
      dispatch({
        type: 'UPDATE_PAGE',
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
        }
      })
    })
    .catch(err => {
      console.log('error: ', err);
    })
    }