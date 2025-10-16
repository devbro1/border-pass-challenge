import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectComp, TextInputComp } from '..';
import { snakeCase } from 'change-case';

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

export const QuestionnaireComp: React.FC<QuestionnaireProps> = ({ name, questions, className = '', title }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="font-bold">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {questions.map((question, index) => {
          //let field_name = `${name}.${snakeCase(question.title) || 'question_' + index}`;
          let field_name = `${name}.${question.title}`;
          if (question.type === 'text') {
            return (
              <TextInputComp key={question.id} name={field_name} title={question.title} required={question.required} />
            );
          } else if (question.type === 'select') {
            return (
              <SelectComp
                key={question.id}
                name={field_name}
                title={question.title}
                required={question.required}
                placeholder={'-- Please Select One --'}
                options={question.options || []}
              />
            );
          }
        })}
      </div>

      {questions.length === 0 && <p className="text-gray-500 text-center py-4">No questions available</p>}
    </div>
  );
};
