import axios from "axios";

const url = "http://localhost:4000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); // sends newPost as a data

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);//what post we want to update
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
