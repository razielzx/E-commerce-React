import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import swal from 'sweetalert';

const NavBar = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logOut = () => {
        localStorage.setItem("token", "")
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                            <a className="nav-link" href="#/purchases">Purchases</a>

                            {token ? (
                                <a className="nav-link" href="#/login" onClick={logOut}>Log Out</a>
                            ) : (
                                <a className="nav-link" href="#/login">Login</a>
                            )}

                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;