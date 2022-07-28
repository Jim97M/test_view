import React from 'react'
import fbLogo from '../../img/fb-logo.png';
import githubLogo from '../../img/github-logo.png';
import googleLogo from '../../img/google-logo.pgn';

const SocialSignup = () => {
    return(
        <div className='social-signup'>
            <a className='btn btn-block social-btn-google' href='#'>
              <img src={googleLogo} alt /> Sign Up With Google
            </a>
            <a className='btn btn-block social-btn-facebook' href='#'>
              <img src={githubLogo} alt /> Sign Up With Github
            </a>
            <a className='btn btn-block social-btn-github' href='#'>
              <img src={fbLogo} alt /> Sign Up With Facebook
            </a>
        </div>
    )
}
const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup