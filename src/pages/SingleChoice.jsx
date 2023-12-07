import React, {useContext, useEffect, useState} from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import ArrowLeft from '../images/arrow-left.svg';
import Cloud from '../images/cloud.svg';
import '../scss/style.scss';
import PropTypes from 'prop-types';
import {QuizContext} from "../QuizContext.jsx";

const SingleChoice = ({ question, onAnswer, navigateToNext }) => {
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
        <div className="SingleChoice">
            <Image
                src={Cloud}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{opacity: '0.8', zIndex: '-1'}}
            />
            <Container className="text-center mt-5 position-relative">
                <Image src={heroImage} alt="Middle Image" className="mb-4" style={{height: '160px', width: 'auto'}}/>
                <h2 className="mb-4">{question.question}</h2>
                <div className="d-flex justify-content-center">
                    <div className="button-wrapper">
                        {question.options.map((option, index) => (
                            <div key={index} className="mb-3 w-50">
                                <Button
                                    className={`button w-100 justify-content-between d-flex ${selectedOption === option ? 'active' : ''}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    <span>{option}</span>
                                    <Image src={ArrowLeft} alt="Icon"/>
                                </Button>
                            </div>
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
    );
};

SingleChoice.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
        heroImage: PropTypes.string
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    navigateToNext: PropTypes.func.isRequired
};

export default SingleChoice;
