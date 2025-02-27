import mongoose from 'mongoose';
import QuizQuestion from './models/QuizQuestion.js';
import dotenv from 'dotenv';

dotenv.config();

const quizQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
        answer: 'Jupiter',
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'NaCl'],
        answer: 'H2O',
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
        answer: 'William Shakespeare',
    },
    {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2',
    },
    {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        answer: 'Mitochondria',
    },
    {
        question: 'What is the capital of Japan?',
        options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
        answer: 'Tokyo',
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
        answer: 'Diamond',
    },
    {
        question: 'What is the main ingredient in guacamole?',
        options: ['Tomato', 'Avocado', 'Onion', 'Pepper'],
        answer: 'Avocado',
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        answer: 'Pacific Ocean',
    },
];

const seedDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await QuizQuestion.deleteMany({});
    await QuizQuestion.insertMany(quizQuestions);
    console.log('Database seeded with quiz questions!');
    mongoose.connection.close();
};

seedDB();
