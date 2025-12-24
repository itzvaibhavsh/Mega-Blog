// Protector container
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// on basis of conditional rendering we'll decide whether to display the children or not
export default function Protected({children, authentication = true}) {
      const navigate = useNavigate()
      const [loader, setLoader] = useState(true)
      const authStatus = useSelector((state) => state.auth.status)   // authStatus keeps monitoring the store, if something changes
      
        // useEffect is used to redirect the user
      useEffect(() => {
            if(authentication && authStatus !== authentication) {
                navigate('/login')
            } else if(!authentication && authStatus !== authentication) {
                navigate('/')
            }
            setLoader(false)
      }, [authStatus, navigate, authentication])

      return loader ? <h1>Loading...</h1> : <>{children}</>
}
