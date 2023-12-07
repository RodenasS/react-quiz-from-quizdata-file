import React, {useEffect, useState} from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importuojame useNavigate
import HeroImage from '../images/finish_line_bean.png';
import Cloud from '../images/cloudteal.svg';
import CloudGrey from '../images/cloudgrey.svg';
import '../scss/style.scss';
import Questionsnav from "../scss/components/questionsnav.jsx";
import PropTypes from 'prop-types';
import Loader from "./Loader.jsx";

const Confirm = ({ category }) => { // Use destructuring to access the category prop
    const navigate = useNavigate(); // Gauname navigate funkciją iš react-router-dom

    const handleBack = () => {
        // Įvykdome atgalinį veiksmą paspaudus "BACK"
        navigate(-1); // Naviguojame į ankstesnį puslapį
    };

    const navigateToCalculate = () => {
        navigate(`/${category}/quiz/calculate`);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="Confirm">
            <Questionsnav onBack={handleBack} /> {/* Pridedame onBack funkciją */}
            <Image
                src={CloudGrey}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{ opacity: '0.8', zIndex: '1' }}
            />
            <div className="Main-Container-Wrapper">
                <Container className="confirm-container">
                    <Image src={HeroImage} alt="Middle Image" className="hero-image" />
                    <div className="button-wrapper">
                        <h2 className="confirm-hero-text">Ready to see your plan?</h2>
                        <p className="confirm-header-leading-text">Taking the time to focus on
                            your problems and work on them takes a lot of effort – that’s why we designed Sensa to work from
                            just 5 minutes of your time dedicated to it each day!</p>
                        <p className="confirm-header-leading-text">Small steps lead to big
                            changes.</p>
                        <button className="button" onClick={navigateToCalculate}>See my plan</button> {/* Pridedame onClick funkciją */}
                    </div>
                    <Image
                        src={Cloud}
                        alt="Cloud Image"
                        className="bottombg-image"
                        style={{ opacity: '0.8', fill: 'rgb(255,255,255)' }}
                    />
                </Container>
            </div>
        </div>
    );
};

Confirm.propTypes = {
    category: PropTypes.string.isRequired,
};
export default Confirm;
