import React from 'react'
import fbLogo from '../../img/fb-logo.png';
import githubLogo from '../../img/github-logo.png';
import googleLogo from '../../img/google-logo.png';
import './Signup.css';

const Signup = () => {
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
              <img src={googleLogo} alt /> Sign Up With Google
            </a>
            <a className='btn btn-block social-btn facebook' href='#'>
              <img src={githubLogo} alt /> Sign Up With Github
            </a>
            <a className='btn btn-block social-btn github' href='#'>
              <img src={fbLogo} alt /> Sign Up With Facebook
            </a>
        </div>
    )
}
const SignupForm = () => {
  return (
    <form>
      <div className='form-item'>
        <input type="text" name="name" placeholder='Name' className="form-control" required/>
      </div>
      <div className='form-item'>
        <input type="email" name="email" placeholder='Email' className="form-control" required/>
      </div>
      <div className='form-item'>
        <input type="text" name="password" placeholder='Password' className="form-control" required/>
      </div>
     
     <div className='form-item'>
       <button type='submit' className='btn btn-block btn-primary'> Sign Up</button>
     </div>

    </form>
  )
}

export default Signup;