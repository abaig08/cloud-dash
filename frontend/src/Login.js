import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';

function Login(){
    const [values, setValues] = useState({
        email: '',
        password:''
    })

    const [errors,setErrors] = useState({})
    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' onChange={handleInput} name='email' className="form-control rounded-0"/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password'onChange={handleInput} name='password' className="form-control rounded-0"/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                <p>You agree to our terms and policies.</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login