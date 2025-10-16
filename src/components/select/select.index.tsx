import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { __SelectStyles as Styles } from './select.styles';
import { __SelectOptionType, __SelectProps } from './select.types';

export interface SelectOptionType extends __SelectOptionType {}

const __SelectComp: React.FC<__SelectProps> = (props: __SelectProps) => {
  const context = useFormContext();

  return (
    <Controller
      control={props.control ?? context.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div className={props.className}>
            {/* input optional title */}
            {props.title ? (
              <span className={Styles.title(fieldState.invalid)}>
                {props.title}
                {props.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            ) : null}
            <select
              disabled={props.disabled || !props.options?.length}
              className={props.inputClassName || Styles.input(fieldState.invalid, Boolean(field.value))}
              {...field}
            >
              {props.placeholder ? (
                <option value='' disabled={props.unSelectable}>
                  {props.placeholder}
                </option>
              ) : null}
              {props.options?.map((item) => (
                <option
                  key={typeof item === 'string' ? item : item.value}
                  value={typeof item === 'string' ? item : item.value}
                >
                  {typeof item === 'string' ? item : item.title || item.label}
                </option>
              ))}
            </select>
            {/* input error message */}
            {fieldState.invalid && fieldState.error?.message ? (
              <span className={Styles.error}>{fieldState.error?.message}</span>
            ) : null}
            {/* input optional description */}
            {props.description ? <span className={Styles.description}>{props.description}</span> : null}
          </div>
        );
      }}
    />
  );
};

export default __SelectComp;
