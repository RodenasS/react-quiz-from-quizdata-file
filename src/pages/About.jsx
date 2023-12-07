import React, {useEffect, useState} from 'react';
import Navigation from '../scss/components/nav'
import {Button, Image} from "react-bootstrap";
import PropTypes from "prop-types";
import Cloud from "../images/cloudteal.svg";
import stressanxiety from "../images/stress_anxiety.webp"
import adhd from "../images/adhd.webp"
import procrastination from "../images/procrastination.webp"
import burnout from "../images/burnout.webp"
import selfesteem from "../images/self_esteem.webp"
import fatigueexhaustion from "../images/fatigue_exhaustion.webp"
import socialanxiety from "../images/social_anxiety.webp"
import ptsd from "../images/ptsd.webp"
import asd from "../images/asd.webp"
import disorganization from "../images/disorganization.webp"
import beanshugging from "../images/bean_hugging_smaller_bean.webp"
import beanwithemoticons from "../images/bean_with_emoticons.webp"
import beanpraisingother from "../images/bean_praising_other.webp"
import beanchampion from "../images/bean_champion.webp"
import beanswaving from "../images/beans_waving.webp"
import Logo from "../images/icon-256x256.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import pinterest from "../images/pinterest.svg";
import backgroundcloud from "../images/blue_background.webp";
import Dainius from "../images/Dainius.webp";
import beanmeditating from "../images/bean_meditating_plain.webp";
import cbsfoxnbc from "../images/cbs_fox_nbc.png";
import features from "../images/features.webp";
import Loader from "./Loader.jsx";

const LandingButton = ({href, imageSrc, text}) => {
    return (
        <Button href={href} className="button d-flex flex-column align-items-center mx-1 m-auto">
            <Image src={imageSrc} alt="Icon" style={{width: '80px', height: '80px'}}/>
            <span>{text}</span>
        </Button>
    );
};

LandingButton.propTypes = {
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const About = () => {
    const buttonData = [
        {
            href: '/stress-anxiety',
            imageSrc: stressanxiety,
            text: 'Stress / anxiety',
        },
        {
            href: '/adhd',
            imageSrc: adhd,
            text: 'ADHD',
        },
        {
            href: '/procrastination',
            imageSrc: procrastination,
            text: 'Procrastination',
        },
        {
            href: '/burnout',
            imageSrc: burnout,
            text: 'Burnout',
        },
        {
            href: '/self-esteem',
            imageSrc: selfesteem,
            text: 'Self-esteem',
        },
        {
            href: '/fatigue-exhaustion',
            imageSrc: fatigueexhaustion,
            text: 'Fatigue / Exhaustion',
        },
        {
            href: '/social-anxiety',
            imageSrc: socialanxiety,
            text: 'Social anxiety',
        },
        {
            href: '/ptsd',
            imageSrc: ptsd,
            text: 'PTSD',
        },
        {
            href: '/asd',
            imageSrc: asd,
            text: 'ASD',
        },
        {
            href: '/disorganization',
            imageSrc: disorganization,
            text: 'Disorganization',
        },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className="about">
            <Navigation/>
            <div className="about_us_intro">
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="position-absolute top-20 w-25 rotateimg180"
                />
                <div className="about_us_intro_hero">
                    <h1 className="about_us_intro_header"> Ready for your second chance?</h1>
                    <p className="about_us_description">Sensa has been designed with one thing in mind: <b>you</b>.</p>
                </div>
                <div className="intro_explanations_container">
                    <div className="intro_explanations_description">
                        <h2 className="description_hero"> Feel the effects of a revitalized you.</h2>
                        <p className="description_paragraph">At the end of the day, the only person who can make a real
                            change in your life is you – we aim to teach you how.<br/> <br/> From scientifically-backed
                            CBT (Cognitive Behavioral Therapy) content to calming exercises, and even guides on
                            self-improvement your journey to a stress-free life has never been quite so simple.</p>
                    </div>
                    <img src={beanswaving} alt="" className="intro_container_image"/>
                </div>
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="bottombg-image"
                />
            </div>

            <div className="intro_cards">
                <div className="intro_cards_container">
                    <div className="card-container">
                        <img src={beanshugging} alt="" className="card-image"/>
                        <p className="card-description"> Over 50,000 happy users</p>
                    </div>
                    <div className="card-container">
                        <img src={beanwithemoticons} alt="" className="card-image"/>
                        <p className="card-description"> Used in over 100 countries</p>
                    </div>
                    <div className="card-container">
                        <img src={beanpraisingother} alt="" className="card-image"/>
                        <p className="card-description"> Available in multiple languages</p>
                    </div>
                    <div className="card-container">
                        <img src={beanchampion} alt="" className="card-image"/>
                        <p className="card-description"> 30+ carefully crafted activities </p>
                    </div>
                </div>
            </div>

            <div className="checkout-advisor-container">
                <div className="checkout-advisor-wrapper">
                    <div className="checkout-advisor-text">
                        <h2 className="hero-text"> Meet our advisor</h2>
                        <p className="text">
                            Dainius has been with Sensa from the beginning, helping craft and mold the app into a tool
                            that has been successfully used by thousands of people looking to improve their lives.
                            <br/> <br/>
                            Danius is a qualified Family Physician, with a post-graduate degree as a Psychotherapist
                            specializing in Cognitive Behavioral Therapy.
                        </p>
                    </div>
                    <div className="checkout-advisor-doctor">
                        <img src={backgroundcloud} alt="backgroundcloud" className="backgroundcloud"></img>
                        <div className="checkout-advisor-container">
                            <img src={Dainius} alt="doctor-image" className="doctor-image"></img>
                            <div className="checkout-advisor-credentials">
                                <p className="checkout-advisor-name">Dainius Jakučionis MD</p>
                                <p className="checkout-advisor-role">The brains behind Sensa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why_us_container">
                <div className="why_us_wrapper">
                    <h2 className="why_us_hero">Why
                        Sensa is right for you</h2>
                    <p className="why_us_desc">We know how you feel. That seemingly
                        never-ending cycle of searching for solutions to feel the way you deserve to – it’s
                        exhausting.</p>
                </div>
            </div>
            <div className="about_us_slogan">
                <img src={beanmeditating} alt="" className="bean-image"></img>
                <p className="slogan_hero">We’re here to change that – and our Vision Statement reflects it:</p>
                <p className="slogan_caption">"Be the first-hand solution for self-growth and better mental health. Simple."</p>
                <div className="featured_in">
                    <div className="featured_in_wrapper">
                        <p className="slogan_featured">As featured in:</p>
                        <img src={cbsfoxnbc} alt="" className="featured-image"></img>
                </div>
                </div>
            </div>

            <div className="about_us_features">
                <div className="about_us_features_wrapper">
                    <div className="about_us_features_container">
                        <img src={features} alt="" className="features-image"></img>
                        <div className="about_us_features_description">
                            <h2 className="features_hero">Build healthy habits – one step at a time</h2>
                            <p className="features_paragraph">By utilizing modern Cognitive Behavioral Therapy (CBT) in an interactive way, Sensa is able to really dig deep into the causes of your problems and provide a personalized plan that helps you get on the right track towards feeling the way you deserve.</p>
                            <button className="button">Check out Sensa's features</button>
                        </div>
                    </div>
                </div>
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="bottombg-image"
                />
            </div>

            <div className="mt-5 landing_selection_container">
                <h3 className="landing_selection_hero_text"> Current problems we solve</h3>
                <div className="button-wrapper d-flex">
                    {buttonData.map((button, index) => (
                        <LandingButton
                            key={index}
                            href={button.href}
                            imageSrc={button.imageSrc}
                            text={button.text}
                        />
                    ))}
                </div>
            </div>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer_content_flex">
                        <div className="footer_logo_side">
                            <div className="navbar-logo">
                                <img src={Logo} alt="emoji" className="navbar-emoji"/>
                                <a className="logotext">
                                    <span>sensa</span>.health
                                </a>
                            </div>
                            <p className="footerdisclaimer">
                                Disclaimer: Results may vary due to individual differences. In
                                addition, mental self-help apps like Sensa are not a replacement for
                                or a form of therapy, nor are they intended to cure, treat, or
                                diagnose medical conditions, including psychiatric conditions. Please
                                consult a qualified health care provider for a medical treatment
                                plan.
                            </p>
                        </div>
                        <div className="footer_navigation_side">
                            <div className="navigation_links">
                                <a className="navigation_link" href="/subscription-management/">My Subscription</a>
                                <a className="navigation_link" href="/privacy-policy/">Privacy policy</a>
                                <a className="navigation_link" href="/contacts">Contacts</a>
                                <a className="navigation_link" href="/terms-of-services">Terms & Conditions</a>
                                <a className="navigation_link" href="/help">Help center</a>
                            </div>
                            <div className="media-links">
                                <a href="https://www.instagram.com/mysensa.health/" className="media-link"> <img
                                    src={instagram} alt="" className="social-emoji"/> </a>
                                <a href="https://www.facebook.com/mysensa.health/" className="media-link"> <img
                                    src={facebook} alt="" className="social-emoji"/> </a>
                                <a href="https://www.youtube.com/mysensa.health/" className="media-link"> <img
                                    src={youtube} alt="" className="social-emoji"/> </a>
                                <a href="https://www.pinterest.com/mysensa.health/" className="media-link"> <img
                                    src={pinterest} alt="" className="social-emoji"/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p className="copyright">© 2023 Sensa. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;