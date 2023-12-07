import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage.jsx';
import Checkout from "./pages/Checkout.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import Confirm from "./pages/Confirm.jsx";
import Calculate from "./pages/Calculate.jsx";
import Email from "./pages/Email.jsx";
import GenderPage from "./pages/GenderPage.jsx"
import quizData from "./data/quizData.json"
import {QuizProvider} from './QuizContext';

const categories = [...new Set(quizData.map((question) => question.category))];

function App() {

    return (
        <QuizProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/:category/quiz/:questionId" element={<QuestionPage/>}/>
                    {categories.map((category) => (
                        <React.Fragment key={category}>
                            <Route
                                path={`/${category}/`}
                                element={<GenderPage category={category}/>}
                            />
                            <Route
                                path={`/${category}/quiz/confirm`}
                                element={<Confirm category={category}/>}
                            />
                            <Route
                                path={`/${category}/quiz/calculate`}
                                element={<Calculate category={category}/>}
                            />
                            <Route
                                path={`/${category}/email`}
                                element={<Email category={category}/>}
                            />
                            <Route
                                path={`/${category}/checkout`}
                                element={
                                    <Checkout
                                    />
                                }
                            />
                        </React.Fragment>
                    ))}
                </Routes>
            </Router>
        </QuizProvider>
    );
}

export default App;
