import React from 'react'
import { useState, useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, SendPasswordResetEmail} from '../firebase/config';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Reset.css"

function Reset() {
    const [email, setEmail] = useState('');
    const [user , loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading){
            console.log("loading")
        }
        if(user){
            navigate('/')
        }

    }, [ user, loading, navigate]);
  return (
    <div className='reset'>
        <div className='reset__container'>
            <input type="text" className='reset__textBox' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className='reset__btn' onClick={() => SendPasswordResetEmail(email)}>Reset Password</button>
        </div>
        <div>
            Dont have an account? <Link to='/register'>Register</Link>
        </div>

    </div>
  )
}

export default Reset