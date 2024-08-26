// import {GoogleLogin} from '@react-oauth/google'
// import {googleLogout} from '@react-oauth/google'

import { useEffect,useState } from 'react'
import {GoogleLogin} from '@react-oauth/google'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {Link} from 'react-router-dom'

import './index.css'

const Login = () => {

console.log(window.location.pathname)
const history = useHistory()
const onClickHome = ()=>{
  history.replace("/")
  
}

// useEffect(()=>{
//   const fetchJwt = async ()=>{
//     const url = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com"
//     const options = {
//       method: "GET"
//     }
//     const response = await fetch(url,options)
//     const data = await response.json()
//     console.log(response)
//     console.log(data)
    
//   }

//   fetchJwt()
// },[])



//console.log(window.location.href)
  console.log(useHistory())
  return (
    <div className="login-main-container">
      <header className="head-container">
        <img
          className="logo-image"
          src="https://res.cloudinary.com/dbb5puzve/image/upload/v1724476353/Logo_12_bdcrf2.png"
          alt="website logo"
        />
        <hr className="h-line" />
      </header>
      <div className="login-container">
        <div className="login-card-container">
          <h1 className="create-account-heading">Create a new account</h1>
        {/* <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://localhost:3000/" target="_blank"> */}
        <button type="button" className="sign-up-button" onClick={onClickHome}>
            <img
              className="google-logo"
              src="https://res.cloudinary.com/dbb5puzve/image/upload/v1724490003/Frame_rmnxze.png"
              alt="google"
            />
            <span className="sign-up-text">Sign Up with Google</span>
          </button>
        {/* </a> */}
          
          <button className="create-account-btn" type="button">
            Create an Account
          </button>
          <div>
            <p className="have-an-account">
              Already have an account?{' '}
              <button type="button" className="sign-in-btn">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <hr className="h-line" />
        <p className="have-an-account">
          @ 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login
