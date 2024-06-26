import React from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

function Welcome(){
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