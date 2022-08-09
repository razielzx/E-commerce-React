import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/login.css'

const Login = () => {

    const {register, handleSubmit} = useForm();

    const submit = data => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/users/login")
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
        console.log(data)
    };

    return (
        <div>
            <h1 className='login-title'>Log In</h1>
            <div className='input-container'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;