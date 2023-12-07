import React from 'react';
import '../style.scss';
import Logo from '../../images/icon-256x256.png'
import {Link, useLocation} from "react-router-dom";

const nav = () => {
    const { pathname } = useLocation();
    const isLinkActive = (path) => pathname === path;

    return (
        <div className="nav">
            <div className="shadow-sm bg-body rounded">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} alt="emoji" className="navbar-emoji" />
                        <Link to="/" className="logotext">
                            <span>healthy.</span>health
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <Link to="/about-us" className={isLinkActive('/about-us') ? 'active-link' : ''}>
                            About
                        </Link>
                        <Link to="/app-features" className={isLinkActive('/app-features') ? 'active-link' : ''}>
                            App Features
                        </Link>
                        <Link to="/for-employers" className={isLinkActive('/for-employers') ? 'active-link' : ''}>
                            For Employers
                        </Link>
                        <Link to="/blog" className={isLinkActive('/blog') ? 'active-link' : ''}>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default nav;