import React from 'react';
import '../scss/style.scss';
import Logo from '../images/icon-256x256.png'
import HeroImage from '../images/bean.webp'
import Cloud from '../images/cloudteal.svg'
import Nav from '../scss/components/nav.jsx'
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const GenderPage = ( {category}) => {

    const navigate = useNavigate();

    const navigateToquestions = () => {
        navigate(`/${category}/quiz/1`);
    };


    return (
        <div className="quizgenderpage">
            <Nav />
            <img src={Cloud} className="cloud-image"
                 alt="Illustration"></img>

            <div className="ellipse"></div>
            <section className="hero">
                <div className="container">
                    <div className="left-col">
                        <h1>Don’t allow stress to control your life</h1>
                        <p className="subhead"> Let’s start simply – how do you identify?</p>
                        <div className="hero-cta">
                            <button onClick={navigateToquestions} className="primary-cta first-btn">Male</button>
                            <button onClick={navigateToquestions} className="primary-cta second-btn">Female</button>
                            <button onClick={navigateToquestions} className="primary-cta third-btn">Other</button>
                        </div>
                    </div>
                    <img src={HeroImage} className="hero-image"
                         alt="Illustration"></img>
                </div>

            </section>
            <footer>
                <div className="footerbackground">
                    <div className="disclaimer">
                        <p className="footerdisclaimer">Disclaimer: Results may vary due to individual differences. In
                            addition, mental self-help apps like healthy are not a replacement for or a form of therapy,
                            nor are they intended to cure, treat, or diagnose medical conditions, including psychiatric
                            conditions. Please consult a qualified health care provider for a medical treatment
                            plan.</p>
                    </div>
                    <div className="navbar-logo">
                        <img src={Logo} alt="emoji" className="navbar-emoji"/>
                        <a className="logotext"><span>healthy</span>.health</a>
                    </div>
                    <div className="copyright">
                        <p className="copyright">© 2023 healthy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

GenderPage.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GenderPage;