import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice' 
import {Header, Footer} from './components'
import {Outlet} from 'react-router-dom'

function App() {
  // whenever we talk to network or database, its quite good to create a loading state so that on the basis of that we can show conditional rendering
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

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
