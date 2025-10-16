import React, { useState } from 'react';
import './App.css';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmbalaCarousel';
import { questions } from './questions'
import { FormComp, SelectComp, TextInputComp } from './components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Question } from './Question';
import SuccessPage from './SuccessPage';

function App() {
  const options: EmblaOptionsType = { containScroll: false };
  const slides = questions.map((v) => <Question question={v} key={v.id} />);
  const [showSuccess, setShowSuccess] =  useState(false);

  const validationShape: any = {};
  questions.map((v) => {
    validationShape[v.id] = v.required ? yup.string().required() : yup.string();
  });

  const validationSchema = yup.object().shape(validationShape);

  const formMethods = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const submitForm = (data: any) => {
    console.log('Form submitted:', data);
    setShowSuccess(true);
  };

  if(showSuccess) {
    return (<SuccessPage />);
  }

  return (
    <div className="w-screen mx-auto text-center">
      <h1>Please Answer following questions:</h1>
      <div className="card">
        <FormComp
      onSubmit={submitForm}
      title=''
      className={''}
      methods={formMethods}
      onCancel={() => {}}
    >
        <EmblaCarousel slides={slides} options={options} />
     </FormComp>
      </div>
    </div>
  )
}

export default App
