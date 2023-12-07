import React, {useContext, useEffect, useState} from 'react';

import Cloud from "../images/cloud.svg";
import Logo from "../images/icon-256x256.png";
import diagrambackground from "../images/diagram-bg.png"
import diagramgaugelevel from "../images/gauge_level.webp"
import diagramgaugearrow from "../images/diagram_arrow.svg"
import diagramarrowback from "../images/arrow_back.png"
import diagramarrowforward from "../images/arrow_forward.png"
import diagrambeanred from "../images/bean_diagram_red.png"
import diagrambeangreen from "../images/bean_diagram_green.png"
import diagrambenefitsbg from "../images/diagram_benefits_bg.png"
import beanicandoit from "../images/bean_i_can_do_it.png"
import markicon from "../images/mark_icon.png"
import splitarrowsicon from "../images/split_arrow.png"
import dislikebutton from "../images/dislike_button.png"
import beanholdingheart from "../images/bean_holding_heart.png"
import nominee from "../images/nominee.webp"
import starrating from "../images/star.svg"
import library from "../images/library.webp"
import paymentcards from "../images/payment_cards.png"
import backgroundcloud from "../images/blue_background.webp"
import Dainius from "../images/Dainius.webp"
import beanchampion from "../images/finish_line_bean.png"
import cbsfoxnbc from "../images/cbs_fox_nbc.png"
import cardicon1 from "../images/card_icon1.png"
import cardicon2 from "../images/card_icon2.png"
import cardicon3 from "../images/card_icon3.png"
import cardicon4 from "../images/card_icon4.png"
import cardicon5 from "../images/card_icon5.webp"
import cardicon6 from "../images/card_icon6.png"

import { QuizContext } from '../QuizContext';
import '../scss/style.scss'
import {Image} from "react-bootstrap";
import Loader from "./Loader.jsx";


const Checkout = () => {

    const initialTime = 15 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const { answers } = useContext(QuizContext);

    const sumOfAnsweredValues = answers.reduce((sum, answer) => sum + answer.value, 0);

    console.log(sumOfAnsweredValues);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft >= 1) return timeLeft - 1;
                clearInterval(interval);
                return 0;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const [selectedPlan, setSelectedPlan] = useState('6-month'); // Default selected plan

    const toggleActivePlan = (plan) => {
        setSelectedPlan(plan);
    };

    const isActive = (plan) => {
        return selectedPlan === plan;
    };

    // COUPON FUNCTIONALITY
    const [couponCode, setCouponCode] = useState('');

    const handleInputChange = (e) => {
        setCouponCode(e.target.value);
    };


    const buttonClass = couponCode ? "checkout-plans-button button active" : "checkout-plans-button button";
    const inputWrapperClass = couponCode ? "form-input-wrapper active" : "form-input-wrapper";
    const labelClass = couponCode ? "checkout-plans-label active" : "checkout-plans-label";


    const planDetails = {
        '3-month': {
            title: '3-month plan',
            oldPrice: '89.97 USD',
            newPrice: '59.97 USD',
            billingCycle: 'Billed every 3 months',
            beforeperDay: '0.99 USD',
            perDay: '0.66 USD'
        },
        '6-month': {
            title: '6-month plan',
            oldPrice: '179.94 USD',
            newPrice: '59.97 USD',
            billingCycle: 'Billed every 6 months',
            beforeperDay: '0.99 USD',
            perDay: '0.33 USD'
        },
        '1-month': {
            title: '1-month plan',
            oldPrice: '',
            newPrice: '29.99 USD',
            billingCycle: 'Billed every 1 month',
            beforeperDay: '',
            perDay: '0.99 USD'
        }
    };

    const faqs = [
        {
            id: 'faq1',
            question: 'What is healthy?',
            answer: (
                <>
                    <span className="content-span">healthy is a mobile app designed to help people fight against multiple mental health issues, find their inner peace, and calm their mind.</span>
                    <span className="content-span">App content is crafted by behavioral psychologists and you can choose to follow the plan for 1, 3, or 6 months, depending on how you feel.</span>
                    <span className="content-span">You'll be able to access the plan and content through the healthy mobile app – available on both iOS and Android.</span>
                </>
            ),
        },
        {
            id: 'faq2',
            question: 'What happens after I order?',
            answer: (
                <>
                    <span className="content-span">In order to access the healthy app, you will need to download it from the App Store or Google Play Store – depending on if you use an iPhone or Android phone.</span>
                    <span className="content-span">You will receive an email with further instructions within 2 hours – if you can't see it, please check your SPAM folder.</span>
                </>
            ),
        },
        {
            id: 'faq3',
            question: 'Is this a one-time payment?',
            answer: (
                <>
                    <span className="content-span">healthy is based on a subscription model. You can choose to subscribe to a 1, 3, or 6-month plan.</span>
                </>
            ),
        },
        {
            id: 'faq4',
            question: 'How can I cancel my subscription?',
            answer: (
                <>
                    <span className="content-span">If you decide to cancel your subscription, you can do so by visiting the “Manage Subscription” page on our website. You can also drop an email to <a
                        href="mailto:hello@healthy.health" className="content-colored">hello@healthy.health.</a></span>
                </>
            ),
        },
        {
            id: 'faq5',
            question: 'How is my plan prepared?',
            answer: (
                <>
                    <span className="content-span">Your plan will be prepared by our experts in behavioral psychology and mental health. Each program is verified to ensure you have access to the most relevant and up-to-date information and tips for your particular situation.</span>
                </>
            ),
        },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (faqId) => {
        if (openFaq === faqId) {
            setOpenFaq(null);
        } else {
            setOpenFaq(faqId);
        }
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
        <div className="checkout">
            <div className="shadow-sm mb-5 bg-body rounded">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} alt="emoji" className="navbar-emoji"/>
                        <a className="logotext"><span>healthy.</span>health</a>
                    </div>
                    <div className="navbar-menu">
                        <button className="button nav-button">Claim my plan</button>
                    </div>
                </div>
            </div>
            <Image
                src={Cloud}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{opacity: '0.8', zIndex: '-1',}}
            />
            <div className="card-layout">
                <div className="card-box">
                    <div className="first-card">
                        <h2> Ready for the new you? </h2>
                        <p> Using the answers you provided – weve calculated your ADHD levels – here are your
                            results. </p>
                    </div>
                    <div className="card diagram-card">
                        <p className="herotext"> Your ADHD symptom level is: </p>
                        <img src={diagrambackground} alt="diagrambackground" className="card-image diagrambackground "/>
                        <img src={diagramgaugelevel} alt="diagramgaugelevel" className="card-image diagramgaugelevel "/>
                        <img src={diagramgaugearrow}
                             alt="diagramgaugearrow"
                             className="card-image diagramgaugearrow"
                             style={{ transform: `translate(-50%, -50%) rotate(${sumOfAnsweredValues}deg)` }}
                        />

                        <div className="red-indicator">
                            <img src={diagrambeanred} alt="redbean" className="redbean"/>
                        </div>
                        <div className="arrow-back">
                            <img src={diagramarrowback} alt="arrowback" className="arrowback"/>
                            <p>distracted</p>
                        </div>
                        <div className="green-indicator">
                            <img src={diagrambeangreen} alt="greenbean" className="greenbean"/>
                        </div>
                        <div className="arrow-forward">
                            <p>focused</p>
                            <img src={diagramarrowforward} alt="arrowforward" className="arrowforward"/>
                        </div>
                        <div className="calc-results">
                            <span> {sumOfAnsweredValues}/61 </span> <span className="spantag"> (Moderate) </span>
                        </div>
                    </div>

                    <div className="card third-card">
                        <h4> Stop feeling overwhelmed</h4>
                        <p> Increase your productivity levels </p>
                        <img src={diagrambenefitsbg} alt="diagrambenefitsbg" className="card-image diagrambenefitsbg"/>
                    </div>

                    <div className="card fourth-card">
                        <img src={beanicandoit} alt="beanicandoit" className="card-image beanicandoit"/>
                        <p> Based on your data, we recommend to start with our <b> 6-month plan </b> for the most
                            effective results. </p>
                    </div>
                </div>
                <button className="button card-button">Claim my plan</button>
            </div>

            <div className="summary-container">
                <h2 className="summary-header"> Your personal summary </h2>
                <p className="summary-description"> Your answers tell us that you could be suffering from:</p>

                <div className="summary-layout">
                    <div className="summary-card">
                        <img src={markicon} alt="markicon" className="summary-card-icon"/>
                        <div className="summary-card-description">
                            <h5> Inability to focus </h5>
                            <p> Your scores indicate to us that you could be struggling
                                with distractions and procrastination. </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <img src={splitarrowsicon} alt="splitarrowsicon" className="summary-card-icon"/>
                        <div className="summary-card-description">
                            <h5> Impulsivity </h5>
                            <p>By default, you tend to make impulsive decisions that
                                negatively impact your work and personal life. </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <img src={dislikebutton} alt="dislikebutton" className="summary-card-icon"/>
                        <div className="summary-card-description">
                            <h5> Emotional instability </h5>
                            <p> You tend to be easily frustrated, and mood swings are a
                                fairly common occurrence. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="statistics-section">
                <div className="statistics-layout">
                    <img src={beanholdingheart} alt="dislikebutton" className="summary-card-icon"/>
                    <div className="statistics-cards-layout">
                        <div className="statistics-list-item">
                            <h1> 83% </h1>
                            <p> of users started with <b> similar ADHD symptoms </b> as you </p>
                        </div>
                        <div className="statistics-list-item">
                            <h1> 77% </h1>
                            <p> of users were able to <b> improve their self-esteem </b> after just 6 weeks </p>
                        </div>
                        <div className="statistics-list-item">
                            <h1> 45% </h1>
                            <p> of users suffered from the <b> same distraction </b> triggers as you </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout-testimonials">
                <div className="checkout-testimonials-award-banner">
                    <div className="award-card">
                        <img src={nominee} alt="award-nominee" className="award-nominee"></img>
                        <p>healthy is proudly nominated for an <span> UCSF Health Hub Digital Health Award – 2022.</span>
                        </p>
                    </div>
                </div>
                <div className="reviews-container">
                    <h3 className="">Real people. Real stories.</h3>
                    <p className="">See how we&apos;ve helped others:</p>

                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide-visible swiper-slide-active">
                            <div className="review-container">
                                <div className="review-card">
                                    <h5>Monica S. 34</h5>
                                    <p className="location">New York, USA</p>
                                    <div className="review-card-stars-rating">
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    </div>
                                    <p className="review-card-comment">Since starting with healthy I have felt my overall
                                        anxiety levels dropping. I feel more confident than I have felt in many, many
                                        years.</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-visible swiper-slide-next">
                            <div className="review-container">
                                <div className="review-card">
                                    <h5>David B. 28</h5>
                                    <p className="location">Brisbane, AUS</p>
                                    <div className="review-card-stars-rating">
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    </div>
                                    <p className="review-card-comment">I&apos;ve struggled with self-esteem for a really
                                        long
                                        time, but learning to reframe my thoughts has allowed me to really get hold of
                                        my anxiety and not only reduce it, but actually mostly eliminate it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-visible">
                            <div className="review-container">
                                <div className="review-card">
                                    <h5>Shivani N. 35</h5>
                                    <p className="location">Edmonton, CAN</p>
                                    <div className="review-card-stars-rating">
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                        <img src={starrating} alt="star-rating" className="star-rating"></img>
                                    </div>
                                    <p className="review-card-comment">You never realize quite how important feeling
                                        content is – until you stop feeling it. healthy has taught me how to stay
                                        positive, no matter what happens. As a result, I feel so much happier in my
                                        everyday life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="library-container">
                    <div className="library-card">
                        <img src={library} alt="library" className="library"></img>
                        <p>In a study published in the National Library of Medicine, it was determined that using the
                            healthy mobile app was related to decreased depression, anxiety, and stress
                            symptoms.<sup>[1]</sup></p>
                    </div>
                </div>
            </div>
            <div className="checkout-plans">
                <div className="plans-container">
                    <h5 className="main-title">Your special offer expires soon!</h5>
                    <div className="plans-timer-container">
                        <div className="time-section">
                            <h2 className="plans-timer-text">{formattedMinutes}</h2>
                            <p className="plans-timer-unit">minutes</p>
                        </div>
                        <h2 className="plans-timer-text">:</h2>
                        <div className="time-section">
                            <h2 className="plans-timer-text">{formattedSeconds}</h2>
                            <p className="plans-timer-unit">seconds</p>
                        </div>
                    </div>
                </div>

                <div className="plans-cards-container">
                    <h2 className="main-h">Choose your plan:</h2>
                    <div className="card-wrapper">
                        {Object.entries(planDetails).map(([planKey, details]) => (
                            <div
                                key={planKey}
                                className={`card-container ${isActive(planKey) ? 'active' : ''}`}
                                onClick={() => toggleActivePlan(planKey)} // Card click handler
                            >
                                <div className="radio-group">
                                    <input
                                        type="radio"
                                        name="plan"
                                        value={planKey}
                                        checked={isActive(planKey)}
                                        onChange={() => toggleActivePlan(planKey)}
                                    />
                                </div>
                                <div className="plan-group">
                                    <h5>{details.title}</h5>
                                    <span>
                                {details.oldPrice && <span className="red-span">{details.oldPrice}</span>}
                                        &nbsp;<span>{details.newPrice}</span>
                            </span>
                                    <p>{details.billingCycle}</p>
                                </div>
                                <div className="pricing-group">
                                    <p className="primary-p">{details.beforeperDay}</p>
                                    <h2>{details.perDay}</h2>
                                    <p className="secondary-p">per day</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkout-plans-container">
                    <form action="#" className="checkout-plans-coupon-form" data-gtm-form-interact-id="0">
                        <div className="coupon-form-outter">
                            <div className={inputWrapperClass}>
                                <label htmlFor="coupon" className={labelClass}>Have a coupon code?</label>
                                <input id="coupon" type="text" maxLength="256" name="coupon"
                                       className="checkout-plans-input" value={couponCode}
                                       onChange={handleInputChange}/>
                            </div>
                        </div>
                        <button type="submit" className={buttonClass} disabled={couponCode === ''}>Apply</button>
                    </form>
                </div>
                <div className="bottom-actions-container">
                    <div className="bottom-terms-agreement-form">
                        <input type="checkbox" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                               className="checkbox"></input>
                        <label className="terms-agreement-label">By choosing a payment method you agree to the
                            <a className="terms-agreement-link" href="/terms-of-services/">T&amp;Cs</a>and <a
                                className="terms-agreement-link" href="/privacy-policy/">Privacy Policy</a></label>
                    </div>
                    <button className="button claim-button">Claim my plan</button>
                    <div className="payment-cards-wrapper">
                        <p className="payment-cards-paragraph">guaranteed <b>safe</b> checkout</p>
                        <img src={paymentcards} alt="payment-cards" className="payment-cards"></img>
                    </div>
                </div>
            </div>

            <div className="checkout-advisor-container">
                <div className="checkout-advisor-wrapper">
                    <div className="checkout-advisor-text">
                        <h2 className="hero-text"> Our promise</h2>
                        <p className="text">
                            <b>I know how you feel.</b> Waking up every day feeling like the world is on your shoulders
                            – or being so paralyzed by anxiety that even the smallest of tasks feels unbearable.<br/>
                            It can affect you in many areas, from school, to the workplace, and even your personal life,
                            if left untreated.<br/>
                            healthy was designed to work <b>with you</b> on a daily basis – it teaches you how to
                            effectively manage both stress and anxiety, and helps you learn how to reduce distractions
                            in order to stay on top of things.<br/>
                            We know that admitting to yourself that you need some help can be difficult, but don&apos;t
                            worry
                            – we&apos;re in this together, and <b>you will beat this.</b><br/>
                            Dainius
                        </p>
                    </div>
                    <div className="checkout-advisor-doctor">
                        <img src={backgroundcloud} alt="backgroundcloud" className="backgroundcloud"></img>
                        <div className="checkout-advisor-container">
                            <img src={Dainius} alt="doctor-image" className="doctor-image"></img>
                            <div className="checkout-advisor-credentials">
                                <p className="checkout-advisor-name">Dainius Jakučionis MD</p>
                                <p className="checkout-advisor-role">The brains behind healthy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comparison-container">
                <div className="comparison-title">
                    <h2>If you feel like <span> you&apos;ve done all you can </span> – the healthy anxiety-relief plan is
                        perfect for you</h2>
                </div>
                <div className="comparison-content">
                    <img src={beanchampion} alt="Bean Champion Image" className="comparison-image"></img>
                    <div className="comparison-cards">
                        <div className="card before-card">
                            <h3>Life before you start using healthy</h3>
                            <ul>
                                <li> Constant stress and anxiety</li>
                                <li>Struggles with focus</li>
                                <li>Challenges in managing emotions</li>
                                <li>Low confidence</li>
                                <li>Emotional ups and downs</li>
                            </ul>
                        </div>
                        <div className="card after-card">
                            <h3>Life after you start using healthy</h3>
                            <ul>
                                <li>A calm and relaxed mind</li>
                                <li>Improved focus and clarity</li>
                                <li>Better emotional regulation</li>
                                <li>Increased self-confidence</li>
                                <li>Stable emotional state</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured_container">
                <p className="featured_container_text">As featured in:</p>
                <img src={cbsfoxnbc} alt="CBS FOX NBC" className="channels-image"></img>
            </div>

            <div className="plan-includes-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="420" height="132" fill="none" id="cloud"
                     className="plan-includes-cloud">
                    <path fill="#fff"
                          d="M0 132h410.114s22.243-28.135 0-47.067c-12.271-10.451-26.766-9.364-37.294-6.295-6.859 2.004-13.697-2.625-15.208-9.61-2.491-11.566-10.175-26.703-32.256-35.65-21.72-8.8-35.46 4.636-43.405 18.445-2.619 4.545-9.576 3.86-11.157-1.136C263.914 28.89 239.921 0 161.09 0 60.822 0 71.964 53.298 80.926 75.456c1.56 3.846-1.736 7.833-5.793 6.965-15.469-3.31-44.175-7.593-57.047 2.512C0 99.13 0 132 0 132Z"></path>
                </svg>
                <div className="plan-includes-container-wrapper">
                    <h3 className="plan-includes-text">So, what&apos;s included?</h3>
                    <div className="plan-includes-box-wrapper">
                        <div className="plan-includes-wrapper">
                            <img src={cardicon1} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">28+ self-paced lessons</h5>
                                <p className="plan-includes-text plan-includes-parag">developed by professional
                                    behavioral therapists.</p>
                            </div>
                        </div>
                        <div className="plan-includes-wrapper">
                            <img src={cardicon2} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">Simple 10 to 30 minute
                                    activities</h5>
                                <p className="plan-includes-text plan-includes-parag">for you to complete each day.
                                    Small steps lead to big results.</p>
                            </div>
                        </div>
                        <div className="plan-includes-wrapper">
                            <img src={cardicon3} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">Daily guidance</h5>
                                <p className="plan-includes-text plan-includes-parag">helping you improve your
                                    well-being and keep your anxiety symptoms under control.</p>
                            </div>
                        </div>
                        <div className="plan-includes-wrapper">
                            <img src={cardicon4} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">Concise content</h5>
                                <p className="plan-includes-text plan-includes-parag">will help you both understand and
                                    manage your emotional state.</p>
                            </div>
                        </div>
                        <div className="plan-includes-wrapper">
                            <img src={cardicon5} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">A customizable habit
                                    planner</h5>
                                <p className="plan-includes-text plan-includes-parag">allows you to track your progress,
                                    eliminate bad habits, and create new, healthy ones.</p>
                            </div>
                        </div>
                        <div className="plan-includes-wrapper">
                            <img src={cardicon6} alt="card-icon" className="plan-includes-image"></img>
                            <div className="plan-includes-wrapper-text">
                                <h5 className="plan-includes-text plan-includes-header">Quick-relief exercises</h5>
                                <p className="plan-includes-text plan-includes-parag">to help you relax during stressful
                                    situations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-container">
                <div className="faq-accordion" data-orientation="vertical">
                    <h3 className="faq-title">People often ask us</h3>
                    <div className="accordion-container">
                        {faqs.map(({id, question, answer}) => (
                            <div key={id} className={`faq-item ${openFaq === id ? 'active' : ''}`}>
                                <h3 className="faq-header">
                                    <button
                                        type="button"
                                        aria-expanded={openFaq === id}
                                        onClick={() => toggleFaq(id)}
                                        className="accordion-trigger"
                                    >
                                        {question}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             aria-hidden="true" className="sc-bf2c6fb5-2 gA-diVK">
                                        </svg>
                                    </button>
                                </h3>
                                {openFaq === id && (
                                    <div className="faq-content">
                                        {answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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

export default Checkout;