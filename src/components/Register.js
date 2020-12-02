import React, {useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {getRegister} from '../redux/store'
import {connect} from 'react-redux'

const Register = ({getRegister}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        getRegister(email, password)
        history.push("/home");
    }   

    return (
        <div>
            <NavLink to='/home'>Home</NavLink>

            <h1>Register</h1>
            <div>
                <label>First name</label>
                 <input />
            </div>
            <div>
                <label>Last name</label>
                <input />
            </div>
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
        
            <button onClick={handleSubmit}>Sign up</button>
            <div>Already register? 
                <NavLink to='/login'>Log in</NavLink>
            </div>
        </div>
    )
}

export default connect(null, {getRegister})(Register)