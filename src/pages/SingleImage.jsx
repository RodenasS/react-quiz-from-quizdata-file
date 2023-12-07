import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Image} from 'react-bootstrap';
import Cloud from '../images/cloud.svg'
import '../scss/style.scss';
import YogaImage from '../images/yogaimage.webp';
import DailyWalksImage from '../images/cloudimage.webp';
import Medidation from '../images/meditationimage.webp'
import FriendsImage from '../images/friendsemojiimage.webp'
import Timeofwork from '../images/sunimage.webp'
import Playingwithpet from '../images/petimage.webp'
import Other from '../images/otherimage.webp'
import RedBean from '../images/red_bean.webp'
import YellowBean from '../images/yellow_bean.webp'
import PurpleBean from '../images/purple_bean.webp'
import GreenBean from '../images/green_bean.webp'
import PropTypes from "prop-types";
import {QuizContext} from "../QuizContext.jsx";


const SingleImage = ({question, onAnswer, navigateToNext} ) => {

    const [selectedOption, setSelectedOption] = useState('');
    const {answers} = useContext(QuizContext);
    useEffect(() => {
        const currentAnswer = answers.find(answer => answer.questionId === question.id);
        if (currentAnswer) {
            setSelectedOption(currentAnswer.selectedOption);
        }
    }, [answers, question.id]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onAnswer(option);
        navigateToNext();
    };


    const imageMap = {
        "Exercise or yoga": YogaImage,
        "Going for daily walks": DailyWalksImage,
        "Meditation": Medidation,
        "Spending time with a close friend": FriendsImage,
        "Taking time of work": Timeofwork,
        "Playing/walking with my pet": Playingwithpet,
        "Other": Other,
        "Strongly agree": RedBean,
        "Somewhat agree": YellowBean,
        "Disagree": PurpleBean,
        "Strongly disagree": GreenBean,
    };

    const [heroImage, setHeroImage] = useState(null);

    useEffect(() => {
        import(`../images/${question.heroImage}`)
            .then(image => {
                setHeroImage(image.default);
            })
            .catch(err => {
                console.error('Failed to load image', err);
            });
    }, [question.heroImage]);

    return (
        <div className="SingleImage">
            <Image
                src={Cloud}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{opacity: '0.8', zIndex: '-1',}}
            />
            <div className="d-flex justify-content-center align-items-center container-wrap">
            <Container className="text-center mt-5 position-relative ">
                <Image src={heroImage} alt="Middle Image" className="mb-4" style={{height: '160px', width: 'auto'}}/>
                <h2 className="text-center mb-2 w-100 mx-auto">How do you feel about the following statement?</h2>
                <h3 className="subhead text-center mb-4 w-100 mx-auto">“{question.question}”</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="button-wrapper d-flex">
                        {question.options.map((option, index) => (
                            <Button
                                key={index}
                                className={`button d-flex flex-column align-items-center mx-1 m-auto ${selectedOption === option ? 'active' : ''}`}
                                onClick={() => handleOptionSelect(option)}
                            >
                                <Image src={imageMap[option]} alt="Icon" style={{ width: '80px', height: '80px' }} />
                                <span>{option}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <Image
                    src={Cloud}
                    alt="Cloud Image"
                    className="bottombg-image"
                />
            </Container>
            </div>
        </div>
    );
};

SingleImage.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
        heroImage: PropTypes.string
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    currentQuestionNumber: PropTypes.number.isRequired,
    navigateToNext: PropTypes.func.isRequired
};
export default SingleImage;