import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Card } from './card';
import { FormComp, TextInputComp } from '..';
import { useForm } from 'react-hook-form';

export interface Props {
  className?: string;
  title: string;
  subTitle?: string;
  details: { key: string; value: string | JSX.Element | undefined }[];
  format?: 'linear' | 'grid';
  editable?: boolean;
  onSubmit?: (data: any) => void;
}

export const Information = (props: PropsWithChildren<Props>) => {
  const [showForm, setShowForm] = useState(false);
  const editButton = props.editable ? (showForm ? 'Cancel' : 'Edit') : undefined;

  const formMethods = useForm({
    defaultValues: Object.entries(props.details).reduce((acc, [key, detail]) => {
      acc[`${detail.field_name || detail.key}`] = detail.value;
      return acc;
    }, {}) as any,
  });

  const onSubmit = async (data: any) => {
    if (props.onSubmit) {
      await props.onSubmit(data);
      setShowForm(false);
    }
  };

  let format = props.format || 'grid';
  return (
    <Card
      {...props}
      buttonText={editButton}
      onButtonClick={() => {
        setShowForm((v) => !v);
      }}
    >
      {!showForm &&
        props.details.map((detail, key) => {
          if (typeof detail.value === 'undefined') return null;
          if (format === 'linear') {
            return (
              <div className="py-2 border-b last:border-0 border-gray-200 dark:border-gray-700" key={key}>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{detail.key}</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">{detail.value}</dd>
              </div>
            );
          }
          return (
            <div className="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-3" key={key}>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{detail.key}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">{detail.value}</dd>
            </div>
          );
        })}
      {showForm && (
        <FormComp methods={formMethods} buttonTitle="Save" onSubmit={onSubmit}>
          {props.details.map((detail, key) => {
            return (
              <div
                className="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-3 border-b last:border-0 border-gray-200 dark:border-gray-700"
                key={key}
              >
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{detail.key}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
                  <InformationField {...detail} name={detail.field_name || detail.key} />
                </dd>
              </div>
            );
          })}
        </FormComp>
      )}
    </Card>
  );
};

export const InformationField = (props: {
  key: string;
  value: string | JSX.Element | undefined;
  editable?: boolean;
}) => {
  if (!props.editable) {
    return <>{props.value}</>;
  }

  return <TextInputComp name={props.name} title="" />;
};
