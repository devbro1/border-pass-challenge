import React, { PropsWithChildren, useState } from 'react';

export interface Props {
  className?: string;
  title: string;
  subTitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonClassName?: string;
}

export const Card = (props: PropsWithChildren<Props>) => {
  return (
    <div className={props.className ?? ''}>
      <div className="bg-white overflow-hidden shadow rounded-lg border dark:bg-gray-700 dark:border-gray-500">
        {props.title && (
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{props.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">{props.subTitle ?? ''}</p>
              </div>
              {props.buttonText && props.onButtonClick && (
                <button
                  onClick={props.onButtonClick}
                  className={
                    props.buttonClassName ??
                    'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }
                >
                  {props.buttonText}
                </button>
              )}
            </div>
          </div>
        )}
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0 dark:border-gray-500">
          <dl className="sm:divide-y sm:divide-gray-200 dark:divide-gray-500">{props.children}</dl>
        </div>
      </div>
    </div>
  );
};
