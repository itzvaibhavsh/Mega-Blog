// we are creating store for 2 reasons - state management and storing data in browser tempory memory
import {configureStore} from "@reduxjs/toolkit";
import authSlice from './authSlice'
import postSlice from './postSlice'

const store = configureStore({
    reducer: {
         auth: authSlice,
         post: postSlice,
    }
});

store.subscribe(() => {
    const state = store.getState()
    
    localStorage.setItem("postsState", JSON.stringify({posts: state.post.posts, postSlugs: state.post.postSlugs}))
})

export default store;