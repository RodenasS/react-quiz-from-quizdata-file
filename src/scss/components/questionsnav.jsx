import React from 'react';
import '../style.scss';
import Logo from '../../images/icon-256x256.png'
import {Button, Image, Navbar, ProgressBar} from "react-bootstrap";
import ArrowBack from "../../images/arrow-back.svg";

const questionsnav = ({ currentQuestionNumber, totalQuestions, onBack, progress }) => {
    return (
        <div className="questionsnav">
            <Navbar className="Navbar justify-content-between">
                <div className="w-100">
                    <Button className="Navbar-button" onClick={onBack}>
                        <Image src={ArrowBack} alt="Back Icon"/>
                        {' '}
                        <b>Back</b>
                    </Button>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <Image src={Logo} className="logo-image" alt="Logo" height="40"/>
                    {' '}
                    <b>healthy.</b>health
                </div>
                <div className="w-100 d-flex justify-content-end">
                    <div className="page-number-container">
                        <span><b>{currentQuestionNumber}</b></span>
                        <span className="mx-1">of</span>
                        <span>{totalQuestions}</span>
                    </div>
                </div>
            </Navbar>
            <ProgressBar now={progress} className="violet-progress-bar shadow bg-body"/>
        </div>
    );
};


export default questionsnav;