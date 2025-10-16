import React, { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInputStyles as Styles } from './textInput.styles';
import { __TextInputProps } from './textInput.types';
import { formContext } from '../form/context.form';

// text input component compatible with controller logic
const __TextInputComp: React.FC<__TextInputProps> = (props2: __TextInputProps) => {
  const context = useFormContext();
  const context2 = useContext(formContext);

  let props = { ...props2 };
  props.disabled = props.disabled || context2.disabled;

  return (
    <Controller
      control={context.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div className={props.className}>
            {/* input optional title */}
            {props.title ? <span className={Styles.title(fieldState.invalid)}>{props.title}
              {props.required ? <span className={Styles.required}>*</span> : null}
            </span> : null}

            {!props.disabled ? (
              <input
                placeholder={props.placeholder}
                type={props.type ? props.type : 'text'}
                {...field}
                value={field.value !== undefined && field.value !== null ? field.value : ''}
                className={Styles.input(fieldState.invalid) + ' ' + (props.disabled ? Styles.disabled : '')}
                disabled={props.disabled || false}
              />
            ) : (
              field.value
            )}
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

export default __TextInputComp;
