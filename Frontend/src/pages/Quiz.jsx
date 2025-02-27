import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import './Quiz.css';
import { Link } from 'react-router-dom';

const GET_QUIZ_QUESTIONS = gql`
  query {
    getQuizQuestions {
      id
      question
      options
      answer
    }
  }
`;

const Quiz = () => {
  const { loading, error, data } = useQuery(GET_QUIZ_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15); // Initialize timer state

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleAnswer(null); // Automatically move to the next question when time runs out
    }
  }, [timer, currentQuestionIndex]);

  const handleAnswer = (answer) => {
    setTimer(15); // Reset timer on answer
    if (answer === data.getQuizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < data.getQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimer(15); // Reset timer
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="quiz-container">
      <div>
        {showResult ? (
          <div>
            <h2 className="result">Your score: {score} out of {data.getQuizQuestions.length}</h2>
            <button className="quiz-button" onClick={handleRestart}>Restart Quiz</button>
            <Link to='/'><button className="quiz-button-back">Back</button></Link>
          </div>
        ) : (
          <div>
            <h2 className="quiz-question">Q{currentQuestionIndex + 1}: {data.getQuizQuestions[currentQuestionIndex].question}</h2>

            <h2>Time Remaining: {timer} seconds</h2> {/* Display timer */}
            <div className="quiz-options">
              {data.getQuizQuestions[currentQuestionIndex].options.map((option) => (
                <div className="quiz-card" key={option} onClick={() => handleAnswer(option)}>
                  <h3>{option}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
