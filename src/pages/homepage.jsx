import React from 'react';
import Navigation from '../scss/components/nav'
import {Button, Image} from "react-bootstrap";
import PropTypes from "prop-types";

import heroimage from "../images/bean_in_heart.webp";
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
import beanswithflag from "../images/beans_with_flag_bg.webp"
import beantakingnotes from "../images/bean_purple_taking_notes.webp"
import beangreentakingnotes from "../images/bean_green_taking_notes.webp"
import beanworkinglate from "../images/bean_working_late.webp"
import appscreens from "../images/app_screens.webp"
import starrating from "../images/star.svg";
import Logo from "../images/icon-256x256.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import pinterest from "../images/pinterest.svg";

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

const Homepage = () => {

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

    return (
        <div className="homepage">
            <Navigation/>
            <div className="landing_intro">
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="position-absolute top-20 w-25 rotateimg180"
                />
                <div className="landing_intro_title_wrap">
                    <h1 className="landing_intro_hero_text"> Your mental health is important - healthy gives you the tools
                        to help you improve it</h1>
                    <img src={heroimage} alt="emoji" className="landing_intro_hero_image"/>
                </div>
                <div className="landing_selection_container">
                    <h3 className="landing_selection_hero_text"> What are you struggling with the most right now?</h3>
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
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="bottombg-image"
                />
            </div>

            <div className="landing_facts">
                <div className="facts_why_us_wrapper">
                    <h2 className="facts_title"> Why healthy? </h2>
                    <p className="facts-description">healthy is designed to cater to a wide range of users, suffering from
                        many forms of mental health issues. Here is some of the ways it can help you.</p>
                </div>
                <div className="facts_cards_container">
                    <div className="card-container">
                        <img src={beanswithflag} alt="" className="card-image"/>
                        <p className="card-description"> Guides you through your journey with advice tailored to your
                            exact needs.</p>
                    </div>
                    <div className="card-container">
                        <img src={beantakingnotes} alt="" className="card-image"/>
                        <p className="card-description"> Provides you with the tools you need to work on yourself.</p>
                    </div>
                    <div className="card-container">
                        <img src={beangreentakingnotes} alt="" className="card-image"/>
                        <p className="card-description"> Constantly-evolving content reviewed by professional behavioral
                            therapists. </p>
                    </div>
                </div>
            </div>

            <div className="clients-review-container">
                <h2 className="review_title"> Don’t just take our word for it </h2>
                <p className="review-description">Hear how healthy has improved the lives of these users:</p>

                <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-visible swiper-slide-active">
                        <div className="review-container">
                            <div className="review-card">
                                <h5>Sharon D. 36</h5>
                                <p className="location">Salt Lake City, US</p>
                                <div className="review-card-stars-rating">
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                </div>
                                <p className="review-card-comment">healthy has totally turned my life around. I was
                                    struggling so much with procrastination and just generalized anxiety, but the daily
                                    guidance and lessons have allowed me to really focus on myself and feel so much
                                    better as a result.</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-visible swiper-slide-next">
                        <div className="review-container">
                            <div className="review-card">
                                <h5>David S. 41</h5>
                                <p className="location">Melbourne, AUS</p>
                                <div className="review-card-stars-rating">
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                </div>
                                <p className="review-card-comment">I was so used to being absolutely exhausted. Working
                                    12-hour shifts and feeling tired and drained was just part of my routine, but I
                                    didn’t realize how much of these things were symptoms of burnout until I tried
                                    healthy. My routine hasn’t changed, but the way I view it has, and the mind is a
                                    powerful thing!</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-visible">
                        <div className="review-container">
                            <div className="review-card">
                                <h5>Ellie F, 25</h5>
                                <p className="location">Bringhton, UK</p>
                                <div className="review-card-stars-rating">
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    <img src={starrating} alt="star-rating" className="star-rating"></img>
                                </div>
                                <p className="review-card-comment">I always viewed my ADHD as just a part of my life,
                                    until it started causing me serious issues with my performance at work. Through
                                    healthy, I learned to plan and manage my daily tasks effectively, and without causing
                                    me to feel overwhelmed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="landing_explanations">
                <div className="landing_explanations_wrapper">
                    <div className="landing_explanations_container">
                        <img src={beanworkinglate} alt="" className="explanations_container_image"/>
                        <div className="landing_explanations_description">
                            <h2 className="description_hero"> Why does it matter? </h2>
                            <p className="description_paragraph">Did you know that 76% of <b>Americans encountered
                                stress or anxiety</b> issues in the past year alone?<br/><br/>Unfortunately, the
                                seriousness of conditions like stress, anxiety, and depression is often understated –
                                these issues can manifest into physical symptoms if not treated properly.<br/><br/>healthy
                                is built to help you through whatever mental health issues affect you most. From burnout
                                to procrastination, ADHD to anxiety, and everything in between.</p>
                        </div>
                    </div>
                    <div className="landing_explanations_container">
                        <div className="landing_explanations_description">
                            <h2 className="description_hero"> What is healthy?</h2>
                            <p className="description_paragraph">healthy is a mobile application designed to work as your
                                complete guide to improved mental health. Built upon the principles of Cognitive
                                Behavioral Therapy (CBT), healthy utilizes developed techniques to fight against a
                                plethora of mental health issues, including anxiety, stress, depression,
                                procrastination, ADHD, Self-esteem, and burnout.&nbsp;<br/><br/>This list is constantly
                                growing, however; and healthy is always looking for new ways to help users no matter what
                                they suffer from.</p>
                        </div>
                        <img src={appscreens} alt="" className="explanations_container_image"/>
                    </div>
                </div>
                <div className="mt-5 landing_selection_container">
                    <h3 className="landing_selection_hero_text"> What are you struggling with the most right now?</h3>
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
            </div>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer_content_flex">
                        <div className="footer_logo_side">
                            <div className="navbar-logo">
                                <img src={Logo} alt="emoji" className="navbar-emoji"/>
                                <a className="logotext">
                                    <span>healthy</span>.health
                                </a>
                            </div>
                            <p className="footerdisclaimer">
                                Disclaimer: Results may vary due to individual differences. In
                                addition, mental self-help apps like healthy are not a replacement for
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
                                <a href="https://www.instagram.com/" className="media-link"> <img
                                    src={instagram} alt="" className="social-emoji"/> </a>
                                <a href="https://www.facebook.com/" className="media-link"> <img
                                    src={facebook} alt="" className="social-emoji"/> </a>
                                <a href="https://www.youtube.com/" className="media-link"> <img
                                    src={youtube} alt="" className="social-emoji"/> </a>
                                <a href="https://www.pinterest.com/" className="media-link"> <img
                                    src={pinterest} alt="" className="social-emoji"/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p className="copyright">© 2023 healthy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;