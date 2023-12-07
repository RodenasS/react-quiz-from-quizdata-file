import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [answers, setAnswers] = useState([]);
    const [sumOfValues, setSumOfValues] = useState(0);

    return (
        <QuizContext.Provider value={{ answers, setAnswers, sumOfValues, setSumOfValues }}>
            {children}
        </QuizContext.Provider>
    );
};