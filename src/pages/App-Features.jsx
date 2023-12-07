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
import checked from "../images/checked.webp"
import graphup from "../images/graph_up.webp"
import sparkles from "../images/sparkles.webp"
import emojis from "../images/emojis.webp"
import selfpaced from "../images/self_paced_lessons.webp"
import dailytasks from "../images/daily_tasks.webp"
import weeklytasks from "../images/weekly_assesments.webp"
import moodjournal from "../images/mood_journal.webp"
import starrating from "../images/star.svg";
import Logo from "../images/icon-256x256.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import pinterest from "../images/pinterest.svg";
import strategies from "../images/habit_building_strategies_short.webp"
import assertmens from "../images/weekly_assessments_short.webp"
import pacedlessons from "../images/self_paced_lessons_short.webp"
import journalshort from "../images/journal_short.webp"
import beanfocused from "../images/bean_focused.webp"
import beanwithdiagram from "../images/bean_with_pie_diagram.webp"
import yellowbeanwalking from "../images/bean_yellow_walking.webp"
import beaninheart from "../images/bean_in_heart.webp"
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

const ForEmployers = () => {
    const [activeDiv, setActiveDiv] = useState('selfpaced');

    const handleDivClick = (id) => {
        setActiveDiv(id);
    };
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
        <div className="AppFeatures">
            <Navigation/>
            <div className="app-features-intro">
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="position-absolute top-20 w-25 rotateimg180"
                />
                <div className="app-features-carousel">
                    <h2 className="carousel-hero">Self-improvement every day – it's easy
                        with Sensa</h2>
                    <p className="carousel-desc">Build inner peace from the ground up</p>

                    <div className="carousel-cards">
                        <div className={`carousel-card-wrapper ${activeDiv === 'selfpaced' ? 'active' : ''}`}>
                            <div className="card1">
                                <div className="carousel-card-content" id="selfpaced"
                                     onClick={() => handleDivClick('selfpaced')}>
                                    <Image src={checked} alt="" className="carousel-card-image"/>
                                    <p className="card-content">
                                        <b>Self-paced lessons</b>
                                        <br/>
                                        <span>Work through your issues at your own pace</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-card-wrapper ${activeDiv === 'weeklyassessments' ? 'active' : ''}`}>
                            <div className="card2">
                                <div className="carousel-card-content" id="weeklyassessments"
                                     onClick={() => handleDivClick('weeklyassessments')}>
                                    <Image src={sparkles} alt="" className="carousel-card-image"/>
                                    <p className="card-content">
                                        <b>Weekly asessments</b>
                                        <br/>
                                        <span>Keep on top of your progress with regular assessments</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-card-wrapper ${activeDiv === 'dailytasks' ? 'active' : ''}`}>
                            <div className="card3">
                                <div className="carousel-card-content" id="dailytasks"
                                     onClick={() => handleDivClick('dailytasks')}>
                                    <Image src={graphup} alt="" className="carousel-card-image"/>
                                    <p className="card-content">
                                        <b>Simple daily tasks</b>
                                        <br/>
                                        <span>Quick, yet effective from just 10-30 minutes each day</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-card-wrapper ${activeDiv === 'moodjournal' ? 'active' : ''}`}>
                            <div className="card4">
                                <div className="carousel-card-content" id="moodjournal"
                                     onClick={() => handleDivClick('moodjournal')}>
                                    <Image src={emojis} alt="" className="carousel-card-image"/>
                                    <p className="card-content">
                                        <b>Mood Journal</b>
                                        <br/>
                                        <span>Identify your emotional triggers, and understand yourself better with each passing day</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={activeDiv === 'selfpaced' ? selfpaced : activeDiv === 'weeklyassessments' ? weeklytasks : activeDiv === 'dailytasks' ? dailytasks : moodjournal}
                            alt="" className="carousel-main-image"/>
                    </div>
                </div>
            </div>

            <div className="common-perks">
                <div className="common-wrapper">
                    <div className="hero-text">
                        <h2 className="app-perks-title">Sensa – your
                            missing piece</h2>
                        <p className="app-perks-description">Empowering you to take control of your life and well-being.</p>
                    </div>
                    <div className="app-perk-card">
                        <img src={strategies} alt="" className="perk-image"></img>
                        <div className="hero-text">
                            <h2 className="app-perks-title">Habit-building strategies</h2>
                            <p className="app-perks-description">Forming healthy habits can help improve your quality of life by introducing positive reinforcement to your daily routine.</p>
                        </div>
                    </div>
                    <div className="app-perk-card">
                        <div className="hero-text">
                            <h2 className="app-perks-title">Weekly assessments</h2>
                            <p className="app-perks-description">Science-based weekly assessments help you track your progress and monitor your improvement over time.</p>
                        </div>
                        <img src={assertmens} alt="" className="perk-image"></img>
                    </div>
                    <div className="app-perk-card">
                        <img src={pacedlessons} alt="" className="perk-image"></img>
                        <div className="hero-text">
                            <h2 className="app-perks-title">Self-paced lessons</h2>
                            <p className="app-perks-description">Healing at your own pace is a key factor in healing overall – which is why your lessons are daily, taking just 5-15 minutes of your time, and based on proven Cognitive Behavioral Therapy principles.</p>
                        </div>
                    </div>
                    <div className="app-perk-card">
                        <div className="hero-text">
                            <h2 className="app-perks-title">Journal</h2>
                            <p className="app-perks-description">By keeping track of your feelings, mood, and thoughts in the Journal, you are able to reflect back and analyze the patterns that emerge from each passing day.</p>
                        </div>
                        <img src={journalshort} alt="" className="perk-image"></img>
                    </div>
                </div>
            </div>

            <div className="landing_facts">
                <div className="facts_why_us_wrapper">
                    <h2 className="facts_title">How it works</h2>
                </div>
                <div className="facts_cards_container">
                    <div className="card-container">
                        <img src={beanfocused} alt="" className="card-image"/>
                        <h5 className="card-hero">1. Choose a plan</h5>
                        <p className="card-description"> What are you suffering with?</p>
                    </div>
                    <div className="card-container">
                        <img src={beanwithdiagram} alt="" className="card-image"/>
                        <h5 className="card-hero">2. Get your personalized action-plan</h5>
                        <p className="card-description">Designed to work with you in mind</p>
                    </div>
                    <div className="card-container">
                        <img src={yellowbeanwalking} alt="" className="card-image"/>
                        <h5 className="card-hero">3. Become the best version of yourself!</h5>
                        <p className="card-description">Designed to work with you in mind</p>
                    </div>
                </div>
            </div>

            <div className="clients-review-container">
                <h2 className="review_title"> Don’t just take our word for it </h2>
                <p className="review-description">Hear how Sensa has improved the lives of these users:</p>
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
                                <p className="review-card-comment">Sensa has totally turned my life around.
                                    I was
                                    struggling so much with procrastination and just generalized anxiety,
                                    but the
                                    daily
                                    guidance and lessons have allowed me to really focus on myself and feel
                                    so much
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
                                <p className="review-card-comment">I was so used to being absolutely
                                    exhausted.
                                    Working
                                    12-hour shifts and feeling tired and drained was just part of my
                                    routine, but I
                                    didn’t realize how much of these things were symptoms of burnout until I
                                    tried
                                    Sensa. My routine hasn’t changed, but the way I view it has, and the
                                    mind is a
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
                                <p className="review-card-comment">I always viewed my ADHD as just a part of
                                    my
                                    life,
                                    until it started causing me serious issues with my performance at work.
                                    Through
                                    Sensa, I learned to plan and manage my daily tasks effectively, and
                                    without
                                    causing
                                    me to feel overwhelmed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 landing_selection_container">
                <h3 className="landing_selection_hero_text"> What are you struggling with the most right
                    now?</h3>
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

            <div className="landing_explanations">
                <div className="landing_explanations_wrapper">
                    <div className="landing_explanations_container">
                        <div className="landing_explanations_description">
                            <h2 className="description_hero"> Designed with you in mind</h2>
                            <p className="description_paragraph">Sensa is here to guide you through your journey to self-love, unlocking scientifically-backed information to help you understand yourself better. Following the principles of Cognitive Behavioral Therapy (CBT), you are in control of your progress.</p>
                        </div>
                        <img src={beaninheart} alt="" className="explanations_container_image"/>
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
                                <a className="navigation_link" href="/subscription-management/">My
                                    Subscription</a>
                                <a className="navigation_link" href="/privacy-policy/">Privacy policy</a>
                                <a className="navigation_link" href="/contacts">Contacts</a>
                                <a className="navigation_link" href="/terms-of-services">Terms &
                                    Conditions</a>
                                <a className="navigation_link" href="/help">Help center</a>
                            </div>
                            <div className="media-links">
                                <a href="https://www.instagram.com/mysensa.health/" className="media-link">
                                    <img
                                        src={instagram} alt="" className="social-emoji"/> </a>
                                <a href="https://www.facebook.com/mysensa.health/" className="media-link">
                                    <img
                                        src={facebook} alt="" className="social-emoji"/> </a>
                                <a href="https://www.youtube.com/mysensa.health/" className="media-link">
                                    <img
                                        src={youtube} alt="" className="social-emoji"/> </a>
                                <a href="https://www.pinterest.com/mysensa.health/" className="media-link">
                                    <img
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
export default ForEmployers;