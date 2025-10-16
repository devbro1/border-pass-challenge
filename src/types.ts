type QuestionText = {
    id: string;
    question: string;
    type: 'text'; 
    required: boolean;
}

type QuestionSelect = {
    id: string;
    question: string;
    type: 'select';
    options: string[];
    required: boolean;
}

export type QuestionType = QuestionText | QuestionSelect;