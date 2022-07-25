import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth, SignInWithEmailAndPassword, signOut, SignInWithGoogle} from '../firebase/config';
import {useAuthState} from 'react-firebase-hooks/auth';
import "./Login.css"



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading ){
      console.log("loading")
    }
    if (user) {
      navigate('/Title')
    }
  },[user, loading, navigate]);



  return (
    <div className='login'>
      <div className='login-container'>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => SignInWithEmailAndPassword(email, password)}>Sign In/LogIn</button>
        <button onClick={() => SignInWithGoogle()}>Sign In/LogIn with Google</button>
        <div>
          <Link to='/reset'>Fogort Password</Link>
        </div>
        <div>
          <Link to='/register'>Register</Link>
        </div>

      </div>

    </div>
  )
}

export default Login