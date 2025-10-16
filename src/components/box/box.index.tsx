import React from 'react';

export function BoxComp(props: { children: React.ReactNode }) {
  return (
    <div className="my-6 mx-4 bg-white shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      {props.children}
    </div>
  );
}
