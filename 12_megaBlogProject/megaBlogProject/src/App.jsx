// import conf from './conf/conf'; //test only
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import authService from './appwrite/Auth'
import {login, logout} from './store/authSilce'
import {Footer,Header} from './components'
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  /*console.log(conf.appWriteURL);   // text only not part here
  console.log(conf.appWriteProjectId);   // text only not part here
  console.log(conf.appWriteDbId);    // text only not part here
  console.log(conf.appWriteCollectionId);    // text only not part here
  console.log(conf.appWriteBucketId);    // text only not part here
  */
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrUser()
    .then((userData)=>{
      if(userData)
          dispatch(login({userData}))
      else
          dispatch(logout())
    })
      .finally(()=>setLoading(false))
  }, [])

  return !loading ? (
    <div className="">
      <div className="w-full">
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;
