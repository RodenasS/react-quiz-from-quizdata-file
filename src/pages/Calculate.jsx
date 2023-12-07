import React, {useEffect, useState} from 'react';
import {Container, Image, ProgressBar} from 'react-bootstrap';
import HeroImage from '../images/bean_calculating.webp';
import Cloud from '../images/cloudteal.svg';
import CloudGrey from '../images/cloudgrey.svg';
import '../scss/style.scss';
import Questionsnav from "../scss/components/questionsnav.jsx";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";


const Calculate = ({ category }) => {
    const [progress, setProgress] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [navigationDelayed, setNavigationDelayed] = useState(false);

    const messages = [
        "Calculating your anxiety levels",
        "Analyzing your answers",
        "Reviewing your habits",
        "Finalizing your personal plan"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => {
                const newProgress = oldProgress + 1;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setNavigationDelayed(true);
                }
                return newProgress;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const messageCount = Math.floor(progress / 25);
        setListItems(messages.slice(0, messageCount));
    }, [progress]);

    useEffect(() => {
        if (navigationDelayed) {
            setTimeout(() => {
                navigateToEmail();
            }, 1000);
        }
    }, [navigationDelayed]);

    const navigateToEmail = () => {
        navigate(`/${category}/email`);
    };

    const navigate = useNavigate();

    return (
        <div className="Calculate">
            <Questionsnav />
            <Image
                src={CloudGrey}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{opacity: '0.8', zIndex: '1'}}
            />
            <div className="Main-Container-Wrapper">
                <Container className="confirm-container">
                    <Image src={HeroImage} alt="Middle Image" className="hero-image"/>
                    <div className="button-wrapper">
                        <h2 className="confirm-hero-text">Calculating your results...</h2>
                        <ProgressBar now={progress} className="progress shadow bg-body"/>
                        <div className="loading-text">
                            <ul>
                                {listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Image
                        src={Cloud}
                        alt="Cloud Image"
                        className="bottombg-image"
                        style={{opacity: '0.8', fill: 'rgb(255,255,255)'}}
                    />
                </Container>
            </div>
        </div>
    );
};

Calculate.propTypes = {
    category: PropTypes.string.isRequired,
};
export default Calculate;
