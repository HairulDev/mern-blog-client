import axios from 'axios';

export const url = 'http://localhost:5000';

export const Fetch = (page) => axios.get(`${url}/v1/blog/posts?page=${page}&perPage=3`);
export const fetchById = (id) => axios.get(`${url}/v1/blog/post/${id}`);

export const Post = (data) => axios.post(`${url}/v1/blog/post`, data, {
    headers: { 'content-type': 'multipart/form-data'}
});

export const Update = (id, data) => axios.put(`${url}/v1/blog/post/${id}`, data, {
    headers: { 'content-type': 'multipart/form-data'}
});

export const Del = (id) => axios.delete(`${url}/v1/blog/post/${id}`);