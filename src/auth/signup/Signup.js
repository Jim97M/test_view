import React, {useState, useRef, useEffect} from 'react'
import fbLogo from '../../img/fb-logo.png';
import githubLogo from '../../img/github-logo.png';
import googleLogo from '../../img/google-logo.png';
import './Signup.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from '../../httpClient/axios';
const REGISTER_URL = "/auth/signup";


const Signup = () => {

  const userRef = useRef();
  const errRef = useRef();
  
  const[username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  })

  useEffect(() => {
    setErrMsg('');
  }, [username, email, password])


  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({username, email, password}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      setUserName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      if(!error?.message){
        setErrMsg('No Server Response');
      } else if(error.response?.status === 409){
         setErrMsg('Username Token');    
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  }

  return(
  
    <div className="signup-container">
     <div className="signup-content">
        <h1 className="signup-title">Test View</h1>
        <SocialSignup />
        <div className="or-separator">
            <span className="or-text">OR</span>
        </div>
        <SignupForm/>
        <span className="login-link">Already have an account?</span>
     </div>
    </div>
  )
}


const SocialSignup = () => {
    return(
        <div className='social-signup'>
            <a className='btn btn-block social-btn google' href='#'>
              <img src={googleLogo} alt="Google" /> Sign Up With Google
            </a>
            <a className='btn btn-block social-btn facebook' href='#'>
              <img src={githubLogo} alt="Facebook" /> Sign Up With Github
            </a>
            <a className='btn btn-block social-btn github' href='#'>
              <img src={fbLogo} alt="Github" /> Sign Up With Facebook
            </a>
        </div>
    )
}
const SignupForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-item'>
        <input type="text" name="name" placeholder='Name' className="form-control" required/>
      </div>
      <div className='form-item'>
        <input type="email" name="email" placeholder='Email' className="form-control" required/>
      </div>
      <div className='form-item'>
        <input type="password" name="password" placeholder='Password' className="form-control" required/>
      </div>
     
     <div className='form-item'>
       <button type='submit' className='btn btn-block btn-primary'> Sign Up</button>
     </div>

    </form>
  )
}

export default Signup;