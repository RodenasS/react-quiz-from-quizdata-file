import React, {useContext, useEffect, useState} from 'react';
import {Container, Image} from 'react-bootstrap';
import Cloud from '../images/cloud.svg'
import '../scss/style.scss';
import YogaImage from '../images/yogaimage.webp';
import DailyWalksImage from '../images/cloudimage.webp';
import Medidation from '../images/meditationimage.webp'
import FriendsImage from '../images/friendsemojiimage.webp'
import Timeofwork from '../images/sunimage.webp'
import Playingwithpet from '../images/petimage.webp'
import Other from '../images/otherimage.webp'
import PropTypes from "prop-types";
import {QuizContext} from "../QuizContext.jsx";


const MultipleImage = ({question, onAnswer, navigateToNext, currentQuestion}) => {
    const {answers} = useContext(QuizContext);
    useEffect(() => {
        const existingAnswer = answers.find((a) => a.questionId === currentQuestion.id);

        if (existingAnswer) {
            const selectedIndexes = existingAnswer.selectedOption.map((option) =>
                question.options.indexOf(option)
            );
            setSelectedValues(selectedIndexes);
        } else {
            setSelectedValues([]);
        }
    }, [answers, question.options, question.id, currentQuestion.id]);

    const imageMap = {
        "Exercise or yoga": YogaImage,
        "Going for daily walks": DailyWalksImage,
        "Meditation": Medidation,
        "Spending time with a close friend": FriendsImage,
        "Taking time of work": Timeofwork,
        "Playing/walking with my pet": Playingwithpet,
        "Other": Other,
    };

    const [selectedValues, setSelectedValues] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedValues(prevValues => {
            const newValues = prevValues.includes(index) ? prevValues.filter(i => i !== index) : [...prevValues, index];
            console.log("Updated selected values:", newValues);
            return newValues;
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedOptions = selectedValues.map(index => question.options[index]);
        console.log("Submitting options:", selectedOptions);
        onAnswer(selectedOptions);

        setSelectedValues([]);
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
        <div className="MultipleImage">
            <Image
                src={Cloud}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{opacity: '0.8', zIndex: '-1',}}
            />
            <div className="d-flex justify-content-center align-items-center container-wrap">
                <Container className="text-center mt-5 position-relative ">
                    <Image src={heroImage} alt="Middle Image" className="mb-4"
                           style={{height: '160px', width: 'auto'}}/>
                    <h2 className="text-center mb-2 w-100 mx-auto">{question.question}</h2>
                    <h3 className="subhead text-center mb-4 w-100 mx-auto">Select as many or few options as you
                        like</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="button-wrapper">
                                {question.options.map((option, index) => (
                                    <label
                                        key={index}
                                        className={`button ${
                                            selectedValues.includes(index) ? 'active' : ''
                                        }`}
                                        htmlFor={`checkbox-${index}`}
                                    >
                                        <input
                                            className="form-check-input checkbox"
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                            onChange={() => handleCheckboxChange(index)}
                                            checked={selectedValues.includes(index)}
                                        />
                                        <Image src={imageMap[option]} alt="Icon" className="image-option"
                                               style={{width: '80px', height: '80px'}}/>
                                        <h5 className="option-header"> {option} </h5>
                                    </label>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className={`submit btn mt-3 w-50 mx-auto ${
                                    selectedValues.length > 0 ? 'active' : 'disabled'
                                }`}
                                disabled={selectedValues.length === 0}
                            >
                                Continue
                            </button>
                        </form>
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

MultipleImage.propTypes = {
    question: PropTypes.object.isRequired,
    heroImage: PropTypes.string,
    currentQuestion: PropTypes.number.isRequired,
    currentQuestionNumber: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
    navigateToNext: PropTypes.func.isRequired,
    onQuestionsCompleted: PropTypes.func.isRequired,
};
export default MultipleImage;