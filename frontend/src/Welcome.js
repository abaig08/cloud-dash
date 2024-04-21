import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'

function Welcome(){
    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login",values)
            .then(res => {
                if(res.data==="Success"){
                    navigate('/home');
                }else{
                    alert("No record found")}
                })
            .catch(err => console.log(err));
        }

    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-40 justify-content:center'>
                <div>
                    <h2>WATER LEAKAGE MANAGEMENT SYSTEM</h2>
                </div>
            
                <div className='pt-4'>
                <Link to="/login" className='btn btn-default border w-100 bg-primary rounded-0 text-decoration-none'><b>Sing In</b></Link>
                <br/><br/>
                <Link to="/signup" className='btn btn-default border w-100 bg-success rounded-0 text-decoration-none'><b>Sign Up</b></Link>
                </div>
            
            </div>
        </div>
    )
}

export default Welcome