import React, {useContext, useEffect, useState} from 'react';
import { Container, Image } from 'react-bootstrap';
import Cloud from '../images/cloud.svg';
import '../scss/style.scss';
import PropTypes from 'prop-types';
import {QuizContext} from "../QuizContext.jsx";

const MultipleCheckBox = ({question, currentQuestion, onAnswer, navigateToNext }) => {
    const { answers } = useContext(QuizContext);
    const [selectedValues, setSelectedValues] = useState([]);


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
        <div className="multipleCheckBox">
            <Image
                src={Cloud}
                alt="Cloud Image"
                className="position-absolute top-20 w-25 rotateimg180"
                style={{ opacity: '0.8', zIndex: '-1' }}
            />
            <Container className="text-center mt-5 position-relative">
                <Image
                    src={heroImage}
                    alt="Middle Image"
                    className="Hero-Image"
                    style={{ height: '160px', width: 'auto' }}
                />
                <h2 className="text-center mb-2 w-50 mx-auto">{question.question}</h2>
                <h3 className="subhead text-center mb-4 w-50 mx-auto">
                    Choose as many or few options as you like
                </h3>
                <div className="d-flex justify-content-center">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="button-wrapper">
                            {question.options.map((option, index) => (
                                <div key={index} className="w-50 d-flex align-items-center">
                                    <div className="form-check w-100 mb-2">
                                        <label
                                            className={`button justify-content-between d-flex ${
                                                selectedValues.includes(index) ? 'active' : ''
                                            }`}
                                            htmlFor={`checkbox-${index}`}
                                        >
                                            {option}
                                            <input
                                                className="form-check-input checkbox"
                                                type="checkbox"
                                                id={`checkbox-${index}`}
                                                onChange={() => handleCheckboxChange(index)}
                                                checked={selectedValues.includes(index)}
                                            />
                                        </label>
                                    </div>
                                </div>
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
                <Image src={Cloud} alt="Cloud Image" className="bottombg-image" />
            </Container>
        </div>
    );
};
MultipleCheckBox.propTypes = {
    question: PropTypes.object.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
    navigateToNext: PropTypes.func.isRequired,
};
export default MultipleCheckBox;
