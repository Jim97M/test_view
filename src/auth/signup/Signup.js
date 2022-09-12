import React, {useState, useRef, useEffect} from 'react'

import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import authLogo from '../../img/close-up-picture.jpg';
import './Signup.css';

const Signup = () => {

  //const userRef = useRef();
  const errRef = useRef();
  
  const[username, setUserName] = useState('');
  const [validUsername, setValidUserName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [emailFocus, setEmailFocus] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  const navigate = useNavigate();

  const handleChange = ({currentTarget:input}) => {
    
  }

  useEffect(() => {
    setErrMsg('');
  }, [username, email, password])


  const handleSubmit = async (e) => {
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
  
  return (
    <div className="signup_container">
       <div className="signup_form_container">
          <div className="left">
            <img src={authLogo} />
          </div>
          <div className="right">
              <form className='form_container'>
                  <h2>Create Account</h2>
                  <input 
                    type="text"
                    placeholder="User Name"
                    className="input"
                    required
                  />
                  <input 
                    type="text"
                    placeholder="Email"
                    className="input"
                    required
                  />   
                  <input 
                  type="password"
                  placeholder="Password"
                  className="input"
                  required
                />

                <input 
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                  required
                />

                <button type='submit' className='green_btn'>
                  Sign Up
                </button>

              </form>
          </div>
       </div>
    </div>
  )
  }
export default Signup;
