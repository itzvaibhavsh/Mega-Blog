import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    postSlugs: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
          
          postUpload: (state, action) => {
            const {postData} = action.payload
            state.posts.push(postData)
            state.postSlugs.push(postData.$id)
          },
          
          deletePost: (state, action) => {
            state.postSlugs = state.postSlugs.filter((postSlug) => postSlug != action.payload)
            state.posts = state.posts.filter((post) => post.$id !== action.payload)
          },
          
          initialStoreUpdate: (state, action) => {
            state.posts = action.payload.posts || [];
            state.postSlugs = action.payload.postSlugs || []
          }
    }
})

export const {initialStoreUpdate, postUpload, deletePost} = postSlice.actions;
export default postSlice.reducer