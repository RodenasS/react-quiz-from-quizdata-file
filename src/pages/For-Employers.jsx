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
import disorganization from "../images/disorganization.webp"
import Logo from "../images/icon-256x256.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import pinterest from "../images/pinterest.svg";
import woman from "../images/woman.webp";
import featuresdesktop from "../images/features_desktop.webp";
import beandizzy from "../images/bean_dizzy.webp";
import beanholdingemojis from "../images/bean_holding_emojis.webp";
import getintouchdesktop from "../images/get_in_touch_desktop.webp";
import Loader from "./Loader.jsx";
const LandingButton = ({href, imageSrc, text}) => (
    <Button href={href} className="button d-flex flex-column align-items-center mx-1 m-auto">
        <Image src={imageSrc} alt="Icon" style={{width: '80px', height: '80px'}}/>
        <span>{text}</span>
    </Button>
);

LandingButton.propTypes = {
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const AngleCard = ({imageSrc, title, description}) => (
    <div className="angles-card">
        <Image src={imageSrc} alt="" className="card-image"/>
        <div className="card-description">
            <h5 className="description-hero">{title}</h5>
            <p className="description-explanation">{description}</p>
        </div>
    </div>
);

AngleCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const ForEmployers = () => {
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
        <div className="ForEmployers">
            <Navigation/>

            <div className="employers-intro">
                <span className="employers-hero"></span>
                <Image src={Cloud} alt="Cloud Image" className="bottombg-image"/>
                <div className="employers-wrapper">
                    <div className="employers-intro">
                        <h1 className="employers-intro-title">Your employees are vital – equip them with the tools they
                            need
                            to be at their best</h1>
                        <p className="employers-intro-desc">
                            We need to talk about mental health. <b>76% of Americans encountered stress or
                            anxiety</b> issues in the past year alone.<br/><br/>
                            Did you know, suicide is the second leading cause of death among 15-29 year-olds, and people
                            with severe mental health conditions often die prematurely – as much as two decades
                            early.<br/><br/>
                            The seriousness of conditions like stress, anxiety, and depression is often understated –
                            these
                            issues can manifest into physical symptoms if not treated properly.<br/><br/>
                            Help your employees take the measures they need to identify, manage, eliminate, or entirely
                            prevent mental health issues.
                        </p>
                        <button className="employers-button">Get in touch</button>
                    </div>
                    <img src={woman} alt="" className="employer-hero-image"/>
                </div>
            </div>

            <div className="angles-container">
                <div className="angles-explanation">
                    <AngleCard
                        imageSrc={stressanxiety}
                        title="Stress"
                        description="Stress is often the first sign of trouble"
                    />
                    <AngleCard
                        imageSrc={adhd}
                        title="Anxiety"
                        description="Anxiety is the culmination of stressful factors"
                    />
                    <AngleCard
                        imageSrc={burnout}
                        title="Burnout"
                        description="Burnout is usually caused by work – and can lead to anxiety or depression"
                    />
                    <AngleCard
                        imageSrc={procrastination}
                        title="Procrastination"
                        description="Procrastination sounds less serious, but often, if left untreated, leads to serious conditions like anxiety/depression"
                    />
                    <AngleCard
                        imageSrc={selfesteem}
                        title="Self-esteem"
                        description="Low self-esteem can lead to overworking, overthinking, and serious conditions like anxiety or depression."
                    />
                    <AngleCard
                        imageSrc={fatigueexhaustion}
                        title="Fatigue & Exhaustion"
                        description="Fatigue is often a symptom of mental health issues and can be caused by stress and anxiety"
                    />
                    <AngleCard
                        imageSrc={socialanxiety}
                        title="Social anxiety"
                        description="Social anxiety can be caused by low self-esteem and develop into deeper anxiety if left unchecked"
                    />
                    <AngleCard
                        imageSrc={ptsd}
                        title="PTSD"
                        description="Caused by experiencing or witnessing trauma. Learning coping strategies is important to manage symptoms and improve quality of life."
                    />
                    <AngleCard
                        imageSrc={disorganization}
                        title="Disorganization"
                        description="The precursor to missed opportunities and unfulfilled potential."
                    />
                </div>
                <p className="description">
                    The Sensa app is a tool that utilizes the science of Cognitive Behavioral Therapy (CBT). By
                    evaluating
                    individual needs and requirements, Sensa is able to provide a personalized plan designed to deliver
                    distinctive results to each and every user.
                </p>
            </div>

            <div className="employers-features">
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="position-absolute top-20 w-25 rotateimg180"
                />
                <div className="features-wrapper">
                    <div className="image-wrapper">
                        <img src={featuresdesktop} alt="" className="features-image"/>
                    </div>
                    <div className="description-wrapper">
                        <h2 className="description-hero">Designed by expert psychoanalysts &amp; behavioral
                            therapists</h2>
                        <p className="description-explanation">Sensa is designed to
                            make the journey towards better mental health easy. By offering a friendly UI with daily
                            guidance as well as engaging and useful activities, it helps users eliminate stress,
                            anxiety,
                            and even depression.<br/><br/>After taking a quick quiz, Sensa provides users with many
                            features,
                            including a quick relief tool, helping keep them calm and collected even when panic or
                            anxiety hits. Easy to use, and incredibly effective.<br/><br/>Every feature of the app has a
                            purpose – and they all lead to the same end result: building healthy habits and
                            fostering a positive, happy mindset.</p>
                    </div>
                </div>
            </div>

            <div className="affects-container">
                <div className="hero-container">
                    <h3 className="affects-hero">Mental health affects us all</h3>
                    <p className="affects-desc">Every day more and more users positively talk about Sensa. But Sensa
                        is just getting started. The journey ahead is long, but we're ready for anything. Watch this
                        space!</p>
                </div>
                <div className="cards-container">
                    <div className="affects-card">
                        <img src={beandizzy} alt="" className="card-image"/>
                        <h5 className="card-hero">Burnout affects up to 84% of the millennial population of the
                            US.</h5>
                    </div>
                    <div className="affects-card">
                        <img src={beanholdingemojis} alt="" className="card-image"/>
                        <h5 className="card-hero">Burnout affects up to 84% of the millennial population of the
                            US.</h5>
                    </div>
                </div>
            </div>

            <div className="get-in-touch">
                <div className="get-in-touch-image-wrapper">
                    <img src={getintouchdesktop} alt="" className="get-in-touch-image"/>
                </div>
                <div className="get-in-touch-image-description">
                    <h2 className="get-in-touch-image-hero">Equip your employees with the tools they need to lead a
                        healthier, happier life</h2>
                    <button className="get-in-touch-image-button">Get in touch
                    </button>
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
                                Disclaimer: Results may vary due to individual differences. In addition, mental
                                self-help
                                apps like Sensa are not a replacement for or a form of therapy, nor are they intended to
                                cure, treat, or diagnose medical conditions, including psychiatric conditions. Please
                                consult a qualified health care provider for a medical treatment plan.
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
                                <a href="https://www.instagram.com/mysensa.health/" className="media-link">
                                    <img src={instagram} alt="" className="social-emoji"/>
                                </a>
                                <a href="https://www.facebook.com/mysensa.health/" className="media-link">
                                    <img src={facebook} alt="" className="social-emoji"/>
                                </a>
                                <a href="https://www.youtube.com/mysensa.health/" className="media-link">
                                    <img src={youtube} alt="" className="social-emoji"/>
                                </a>
                                <a href="https://www.pinterest.com/mysensa.health/" className="media-link">
                                    <img src={pinterest} alt="" className="social-emoji"/>
                                </a>
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
}
export default ForEmployers;