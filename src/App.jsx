import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import appwriteService from './appwrite/config'
import {login, logout} from './store/authSlice' 
import {Header, Footer} from './components'
import {Outlet} from 'react-router-dom'
import {initialStoreUpdate} from "./store/postSlice"

function App() {
  // whenever we talk to network or database, its quite good to create a loading state so that on the basis of that we can show conditional rendering
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
  const initPosts = async () => {
    try {
      // 1️⃣ Try Appwrite FIRST (always)
      const response = await appwriteService.getPosts();

      if (response?.documents?.length) {
        dispatch(
          initialStoreUpdate({
            posts: response.documents,
            postSlugs: response.documents.map(p => p.$id),
          })
        );
        return;
      }

      // 2️⃣ Agar Appwrite fail ho jaaye (offline etc)
      const cached = localStorage.getItem("postsState");
      if (cached) {
        const parsed = JSON.parse(cached);
        dispatch(initialStoreUpdate(parsed));
      }

    } catch (err) {
      // 3️⃣ Hard fallback → localStorage
      const cached = localStorage.getItem("postsState");
      if (cached) {
        const parsed = JSON.parse(cached);
        dispatch(initialStoreUpdate(parsed));
      }
    }
  };

  initPosts();    // executing the function
}, [dispatch]);   // useEffect ke andar jo bhi bahar se use ho rha ho, usko dependency array me daal do. Empty would result in
// in ESLint warning


  // when we keep dependent array empty, useEffect works only once, just after the initial render of the component
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  return !loading? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
    </div>
  ): null
}

export default App
