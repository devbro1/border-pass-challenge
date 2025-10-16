// source: https://flowbite.com/docs/components/stepper/
import React, { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { formContext } from '../form/context.form';
import { HiCheckCircle } from 'react-icons/hi';

type step = {
  title: string;
  description?: string;
  completed?: boolean;
};

type StepperProps = {
  steps: step[];
  currentStep: string;
};

// text input component compatible with controller logic
export const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  let classesCompleted = {
    outerLi:
      "flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
    innerSpan:
      "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
  };
  let classes = {
    outerLi:
      "flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700",
    innerSpan:
      "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500",
  };

  function outerLiClasses(step, completed = false) {
    if (step.last && step.completed) {
      return 'flex md:w-full items-center text-blue-600 dark:text-blue-500';
    }
    if (step.last) {
      return 'flex items-center';
    }
    return step.completed || completed ? classesCompleted.outerLi : classes.outerLi;
  }
  let completed = true;
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {props.steps.map((step, index) => {
        let lcompleted = step.completed || completed;
        let rc = (
          <li className={outerLiClasses(step, lcompleted)} key={`stepper-${index}`}>
            <span className={lcompleted ? classesCompleted.innerSpan : classes.innerSpan}>
              <span className="sm:inline-flex sm:ms-2 whitespace-nowrap">
                {lcompleted ? <HiCheckCircle className="mt-1 me-2" /> : <span className="me-2">{index + 1}</span>}{' '}
                {step.title}
              </span>
            </span>
          </li>
        );

        if (props.currentStep == step.title) {
          completed = false;
        }

        return rc;
      })}
      {/* <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="me-2">2</span>
            Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="me-2">3</span>
        Confirmation
    </li> */}
    </ol>
  );
};

export default Stepper;
