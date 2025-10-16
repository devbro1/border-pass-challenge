type QuestionText = {
    question: string;
    type: 'text'; 
    required: boolean;
}

type QuestionSelect = {
    question: string;
    type: 'select';
    options: string[];
    required: boolean;
}

export type Question = QuestionText | QuestionSelect;

export const questions: Question[] = [
    {
        question: "What is your full name?",
        type: "text",
        required: true
    },
    {
        question: "What is your email address?",
        type: "text",
        required: false
    },
    {
        question: "What is your preferred programming language?",
        type: "select",
        options: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"],
        required: false
    },
    {
        question: "How many years of programming experience do you have?",
        type: "select",
        options: ["Less than 1 year", "1-2 years", "3-5 years", "6-10 years", "More than 10 years"],
        required: true
    },
];