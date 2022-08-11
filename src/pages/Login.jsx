import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    

    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login/", data)
            .then((res) => {
                swal(<h1>Logged!</h1>)
                navigate("/")
                localStorage.setItem('token', res.data.data.token)
                console.log(res.data.data.token)})
                
            .catch((err) => {
                if (err.response.status === 404) {
                    swal(<h1>Credentials are not valid</h1>)
                }
                console.log(err.response)
            });
        reset({
            email: '',
            password: ''
        });
    };

    return (
        <div>
            <h1 className='login-title'>Log In</h1>
            <h3>"email": "mason@gmail.com",
                "password": "mason1234"
            </h3>
            <div className='input-container'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;