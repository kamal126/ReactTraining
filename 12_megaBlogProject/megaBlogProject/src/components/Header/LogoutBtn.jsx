import React from 'react';
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/Auth';
import {logout} from '../../store/authSilce'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
            .then(()=>{
                dispatch(logout())
            })
    }

    return(
        <button className=''
        onClick={logoutHandler}>
            Logout
        </button>
    )
}


export default LogoutBtn