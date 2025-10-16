import React from 'react';

export const ServiceUnavailable: React.FC = (props) => {
  props = { ...{ message: 'Sorry, the service is temporarily unavailable. Please try again later.' }, ...props };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">503</h1>
      <h2 className="text-2xl font-semibold mb-2">Service Unavailable</h2>
      <p className="text-lg">{props.message}</p>
    </div>
  );
};
