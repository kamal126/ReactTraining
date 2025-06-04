import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'   /*Redux store se auth.status uthayega (user login || not) */
import { useNavigate } from 'react-router-dom'  /*page redirect kane ke liye (React Router DOM se) */


 export default function Protected({
    children,
    authentication=true
 }) 
 {

    /* Hooks */
    const navigate = useNavigate()  // for page route change
    const [loader, setLoader] = useState(true)  // whenever auth is checking , show Loading... on screen
    const authStatus = useSelector(state=>state.auth.status)    // Redux se user ka login status (true/false/null)

    /* Main Logic: useEffect*/
    useEffect(()=>{

        // if(authStatus===true)
        //     navigate("/")
        // else if(authStatus===false)
        //     navigate("/login")

        // let authValue = authStatus === true? true : false

        if(authentication && authStatus !== authentication)
            navigate("/login")
        else if(!authentication && authStatus !== authentication)
            navigate("/")
        setLoader(false)    // when auth is checked stoped Loading...
    },[authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
