// form to register new users with email and password

import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, RegisterWithEmailAndPassword, SignInWithGoogle } from '../firebase/config'
import "./Register.css"



function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');
    const history = useNavigate();

    function NameValid () {
        if (!name) {
            alert ("Please enter your name")
            RegisterWithEmailAndPassword(name, email, password)
        }
    };

    useEffect(() => {
        if (loading) {
            console.log("loading")
        }
        if (user) {
            history.replace('/Title')
        }

    }, [user, loading, history]);


  return (
    <div className='register'>
        <div className='register__container'>
            <input type="text" className='register__textBox' placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" className='register__textBox' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" className='register__textBox' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className='register__btn' onClick={() => NameValid()}>Register</button>
            <button className='register__btn register__google' onClick={() => SignInWithGoogle()}>Sign In/LogIn with Google</button>
            <div>
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </div>

    </div>
  );
}

export default Register