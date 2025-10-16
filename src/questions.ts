import { QuestionType } from './types';

export const questions: QuestionType[] = [
    {
        id: "full_name",
        question: "What is your full name?",
        type: "text",
        required: true
    },
    {
        id: "email",
        question: "What is your email address?",
        type: "text",
        required: false
    },
    {
        id: "programming_language",
        question: "What is your preferred programming language?",
        type: "select",
        options: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"],
        required: false
    },
    {
        id: "experience",
        question: "How many years of programming experience do you have?",
        type: "select",
        options: ["Less than 1 year", "1-2 years", "3-5 years", "6-10 years", "More than 10 years"],
        required: true
    },
];
