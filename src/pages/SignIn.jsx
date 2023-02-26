import React, { useEffect } from 'react';
import "../css/SignIn.css";
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png';
import Footer from '../components/Footer';


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
      <form action="#" method="post">
        <img className="logo" src={Logo} alt="logo" />
        <GoogleButton onClick={handleGoogleSignIn} />
      </form>
    </div>
  )
}

export default SignIn