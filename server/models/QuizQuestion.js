import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const QuizQuestion = mongoose.model('QuizQuestion', quizQuestionSchema);

export default QuizQuestion;
