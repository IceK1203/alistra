import React, { useEffect } from 'react';
import "../css/SignIn.css";
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png';
import Footer from '../components/Footer';
import Hero from "../img/hero-img.svg";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const SignIn = () => {

  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  if(user != null) {
    navigate("/home");
  }
}, [user])

  return (
    <div className="container">
      <form action="#" method="post" style={{backgroundColor:`#181414`,}}>
        <img className="logo" src={Logo} alt="logo" />
        <GoogleButton onClick={handleGoogleSignIn} />
      </form>
    </div>
  )
}

export default SignIn