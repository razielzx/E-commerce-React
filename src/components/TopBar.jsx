import React from 'react';
import "../styles/topbar.css"

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/andres-botello/">linkedin.com/in/andres-botello</a>
                    </div>
                    <div className="col-sm-6">
                        <i className="fa-brands fa-github"></i>
                        <a href="https://github.com/razielzx/E-commerce-React">See code's project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;