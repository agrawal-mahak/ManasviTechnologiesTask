import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'
import calling from '../assets/calling.jpg'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Access a vast library of stickers, play games,"
      desc1="and engage with Line’s diverse range of content and services."
      desc2="Make crystal-clear voice and video calls with friends and family."
      image={calling}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
