import React, {useState} from 'react'
import {NavLink, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import {getLogin} from '../redux/store'

const Login = ({getLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getLogin(email, password)
        history.push("/home");
    }   

    return (
        <>
        
         <div>
            <NavLink to='/home'>Home</NavLink>

            <h1>Login</h1>
        
            <div>
                <label>Email</label>
                <input 
                    type='email'
                    value={email} 
                    onChange={(e) => handleChangeEmail(e)} /> 
            </div>
            <div>
                <label>Password</label>
                <input  
                    type='password'
                    value={password} 
                    onChange={(e) => handleChangePassword(e)}/>
            </div>

            
                <button onClick={handleSubmit}>
                    Sign up
                </button>
           
        
            
            <div>Don't have an account? 
                <NavLink to='/register'>Sign in</NavLink>
            </div>
        </div>
        </>
    )
}

export default connect(null, {getLogin})(Login)