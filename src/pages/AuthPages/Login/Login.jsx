import React from 'react'

import { Link } from "react-router-dom"

import LoginForm from '../../../components/AuthComponent/LoginForm'

export const Login = () => {
  return (
   <div className='container-fluid'>
    <h1 className='display-1 my-5 text-center'>Login Here</h1>
    <div className='row'>
        <div className='col-md-5 mx-auto mt-5'>
            <LoginForm/>
            <Link to="/register">
            not a member register here 
            </Link>
        </div>
    </div>
   </div>
  )
}

