import React, {useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import HeroImage from '../images/bean_with_envelope_next_to_pc.webp';
import Cloud from '../images/cloudgrey.svg';
import '../scss/style.scss';
import Questionsnav from '../scss/components/questionsnav.jsx';
import Logo from '../images/icon-256x256.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Loader from "./Loader.jsx";

const Email = ({ category }) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true); // Added state for email validation
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        // Check if the entered email is in a valid format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(inputEmail));
    };

    // Determine the class names dynamically
    const buttonClass = isValidEmail
        ? 'email-button button active'
        : 'email-button button disabled';
    const inputWrapperClass = isValidEmail
        ? 'form-input-wrapper active'
        : 'form-input-wrapper error';
    const labelClass = isValidEmail ? 'email-label active' : 'email-label error';

    const navigateToCheckout = () => {
        if (isValidEmail) {
            navigate(`/${category}/checkout`);
        }
    };

    return (
        <div className="Email">
            <Questionsnav />
            <div className="main-container-wrapper">
                <div className="email-form-wrapper">
                    <div className="email-wrapper">
                        <h2 className="confirm-hero-text">Enter your email</h2>
                        <form action="#" className="email-form" data-gtm-form-interact-id="0">
                            <div className="email-form-outter">
                                <div className={inputWrapperClass}>
                                    <label htmlFor="email" className={labelClass}>
                                        Email*
                                    </label>
                                    <input
                                        id="email"
                                        type="text"
                                        maxLength="256"
                                        name="coupon"
                                        className="email-input"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </form>
                        <button
                            type="submit"
                            onClick={navigateToCheckout}
                            className={buttonClass}
                            disabled={!isValidEmail}
                        >
                            See my results
                        </button>
                        {!isValidEmail && (
                            <p className="email-input-terms email-input-error">
                                Please enter a valid email address.
                            </p>
                        )}
                        <p className="email-input-terms">
                            By providing your email, you consent to newsletters and marketing
                            emails from Sensa.health as described in our T&Cs and Privacy
                            Policy. We respect your privacy and do not tolerate spam. We will
                            never share or sell your information to third parties.
                        </p>
                    </div>
                    <div className="hero-image-container">
                        <Image src={HeroImage} alt="Middle Image" className="hero-image" />
                    </div>
                </div>
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="bottombg-image"
                    style={{ opacity: '0.8', fill: 'rgb(255,255,255)' }}
                />
            </div>
            <footer>
                <div className="footerbackground">
                    <div className="disclaimer">
                        <p className="footerdisclaimer">
                            Disclaimer: Results may vary due to individual differences. In
                            addition, mental self-help apps like Sensa are not a replacement for
                            or a form of therapy, nor are they intended to cure, treat, or
                            diagnose medical conditions, including psychiatric conditions. Please
                            consult a qualified health care provider for a medical treatment
                            plan.
                        </p>
                    </div>
                    <div className="navbar-logo">
                        <img src={Logo} alt="emoji" className="navbar-emoji" />
                        <a className="logotext">
                            <span>sensa</span>.health
                        </a>
                    </div>
                    <div className="copyright">
                        <p className="copyright">© 2023 Sensa. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

Email.propTypes = {
    category: PropTypes.string.isRequired,
};

export default Email;
