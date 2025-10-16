import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmbalaCarousel';
import { questions } from './questions'
import { FormComp, SelectComp, TextInputComp } from './components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  const options: EmblaOptionsType = { containScroll: false };
  const slides = questions.map((v) => <div>
    <div className="text-base font-bold">Q: {v.question}{v.required ? <span className={'text-red-500'}> *</span> : ''}</div>
    {v.type === 'text' ? (<TextInputComp name={v.id} required={v.required} />) : null}
    {v.type === 'select' ? (<SelectComp name={v.id} placeholder=' -- Select One Option -- ' options={v.options} required={v.required} />) : null}
  </div>);

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
  };

  return (
    <>
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
    </>
  )
}

export default App
