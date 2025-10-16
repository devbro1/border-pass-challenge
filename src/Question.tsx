import { FormComp, SelectComp, TextInputComp } from './components';
import { QuestionType } from './types';

export function Question(props: { question: QuestionType }) {
    const { question } = props;
    return (
        <div className="p-4">
            <div className="text-base font-bold">Q: {question.question}{question.required ? <span className={'text-red-500'}> *</span> : ''}</div>
            {question.type === 'text' ? (<TextInputComp name={question.id} required={question.required} />) : null}
            {question.type === 'select' ? (<SelectComp name={question.id} placeholder=' -- Select One Option -- ' options={question.options} required={question.required} />) : null}
        </div>
    );
}