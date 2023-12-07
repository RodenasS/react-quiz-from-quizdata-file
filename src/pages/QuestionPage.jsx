import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData.json';
import MultipleCheckBox from './MultipleCheckBox';
import SingleChoice from './SingleChoice';
import SingleImage from './SingleImage';
import Questionsnav from '../scss/components/questionsnav.jsx';
import Confirm from './Confirm.jsx';
import { QuizContext } from '../QuizContext';
import MultipleImage from "./MultipleImage.jsx";

const QuestionPage = () => {
    const { category, questionId } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState({});
    const totalQuestions = quizData.length;
    const currentQuestionNumber = parseInt(questionId, 10);
    const { answers, setAnswers } = useContext(QuizContext);
    const progress = (currentQuestionNumber / totalQuestions) * 100;
    const [questionsCompleted, setQuestionsCompleted] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    useEffect(() => {
        setCurrentQuestion(
            quizData.find((q) => q.id === currentQuestionNumber && q.category === category)
        );
    }, [category, questionId, currentQuestionNumber]);

    const handleAnswer = (selectedOption) => {

        const questionData = quizData.find(q => q.id === currentQuestion.id);

        const answerValue = Array.isArray(selectedOption)
            ? selectedOption.reduce((sum, option) => {
                const optionIndex = questionData.options.indexOf(option);
                return sum + questionData.values[optionIndex];
            }, 0)
            : questionData.values[questionData.options.indexOf(selectedOption)];

        const answer = {
            questionId: currentQuestion.id,
            selectedOption,
            value: answerValue
        };

        console.log(answers)
        setAnswers((prevAnswers) => {
            const existingAnswerIndex = prevAnswers.findIndex(
                (a) => a.questionId === currentQuestion.id
            );

            if (existingAnswerIndex >= 0) {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[existingAnswerIndex] = answer;
                return updatedAnswers;
            } else {
                return [...prevAnswers, answer];
            }
        });
    };

    const navigateToNext = () => {
        if (currentQuestionNumber < totalQuestions) {
            navigate(`/${category}/quiz/${currentQuestionNumber + 1}`);
        } else {
            setQuestionsCompleted(true);
            setTimeout(() => {
                navigate(`/${category}/quiz/confirm`, {
                    state: {
                        sumOfAnsweredValues,
                        maxPossibleValue,
                        email
                    }
                });
            }, 0);
        }
    };

    const handleBack = () => {
        if (currentQuestionNumber > 1) {
            navigate(`/${category}/quiz/${currentQuestionNumber - 1}`);
        } else {
            navigate(`/${category}`);
        }
    };

    const handleEmailSubmit = () => {
        setEmailSubmitted(true);
    };

    const sumOfAnsweredValues = answers.reduce((sum, answer) => {
        const selectedOption = answer.selectedOption;
        if (Array.isArray(selectedOption)) {
            return sum + selectedOption.reduce((optionSum, option) => optionSum + option, 0);
        } else {
            const selectedOptionValue = parseFloat(selectedOption);
            return sum + selectedOptionValue;
        }
    }, 0);

    const maxPossibleValue = 100;

    return (
        <div>
            {questionsCompleted ? (
                <Confirm
                    email={email}
                    onEmailChange={(e) => setEmail(e.target.value)}
                    onEmailSubmit={handleEmailSubmit}
                    category={category}
                />
            ) : (
                <>
                    <Questionsnav
                        currentQuestionNumber={currentQuestionNumber}
                        totalQuestions={totalQuestions}
                        onBack={handleBack}
                        progress={progress}
                    />
                    {currentQuestion ? (
                        <>
                            {currentQuestion.type === 'single' && (
                                <SingleChoice
                                    question={currentQuestion}
                                    onAnswer={handleAnswer}
                                    totalQuestions={totalQuestions}
                                    currentQuestionNumber={currentQuestionNumber}
                                    navigateToNext={navigateToNext}
                                    progress={progress}
                                />
                            )}
                            {currentQuestion.type === 'multi-checkbox' && (
                                <MultipleCheckBox
                                    question={currentQuestion}
                                    currentQuestion={currentQuestion}
                                    totalQuestions={totalQuestions}
                                    onAnswer={handleAnswer}
                                    progress={progress}
                                    navigateToNext={navigateToNext}
                                    navigateToPrevious={handleBack}
                                />
                            )}
                            {currentQuestion.type === 'multi-image' && (
                                <MultipleImage
                                    question={currentQuestion}
                                    currentQuestion={currentQuestion}
                                    totalQuestions={totalQuestions}
                                    onAnswer={handleAnswer}
                                    progress={progress}
                                    navigateToNext={navigateToNext}
                                    navigateToPrevious={handleBack}
                                />
                            )}
                            {currentQuestion.type === 'single-image' && (
                                <SingleImage
                                    question={currentQuestion}
                                    onAnswer={handleAnswer}
                                    totalQuestions={totalQuestions}
                                    currentQuestionNumber={currentQuestionNumber}
                                    navigateToNext={navigateToNext}
                                    progress={progress}
                                />
                            )}
                        </>
                    ) : (
                        <div>Loading question...</div>
                    )}
                </>
            )}
            {questionsCompleted && emailSubmitted  && (
                navigateToNext()
            )}
        </div>
    );
};

export default QuestionPage;
