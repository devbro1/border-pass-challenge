export interface QuestionnaireQuestion {
  id: string;
  title: string;
  type: 'text' | 'select';
  options?: string[];
  required?: boolean;
  order?: number;
}

export interface QuestionnaireProps {
  name: string;
  questions: QuestionnaireQuestion[];
  className?: string;
  title?: string;
}
