import React, {useState, useEffect, useRef} from 'react'
import axios from '../../httpClient/axios';
const LOGIN_URL = '/auth/login';
const Login = () => {
    const errRef = useRef();
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
       emailRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [email, password]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <>
      {success ? (
          <section>
                <h1>Success</h1>
          </section>
      ): (
        <section>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live='assertive'
            >
              {errMsg}
            </p>
            <h1>Login</h1>
            <form>
                <label>Username:</label>
                <input
                  type='email'  
                  id='email'
                  ref={emailRef}
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                /><label>Password:</label>
                <input
                  type='password'  
                  id='password'
                  autoComplete='off'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
               <button>Sign In</button>
            </form>
            <p>
                Need an Account?
            </p>
        </section>
      )}
    </>
  )
}

export default Login