import QuizQuestion from '../models/QuizQuestion.js';

const resolvers = {
    Query: {
        getQuizQuestions: async () => {
            return await QuizQuestion.find();
        },
    },
};

export default resolvers;
