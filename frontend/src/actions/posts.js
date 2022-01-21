import * as api from "../api";

// Action Creators
export const getPosts = (page) => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts(page)

    console.log(data);

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try{

    const {data: { data }} = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: "FETCH_BY_SEARCH", payload: { data } });

  } catch(error){
    console.log(error);

  }
}


export const createPost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); // post api request to a backend server
    
    
    dispatch({ type: 'CREATE', payload: data});
    
    navigate(`/posts`)
  } catch (err) {
    console.log(err);
  };
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data});
  } catch (err) {
    console.log(err);
  }
}


export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id })

  } catch (error) {
    console.log(error);
  }
};