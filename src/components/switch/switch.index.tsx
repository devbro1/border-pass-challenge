import { Switch } from '@headlessui/react';
import React, { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { __SwitchStyles as Styles } from './switch.styles';
import { __SwitchProps } from './switch.types';
import { formContext } from '../form/context.form';

// switch component compatible with controller logic
const __SwitchComp: React.FC<__SwitchProps> = (props2: __SwitchProps) => {
  const context = useFormContext();
  const context2 = useContext(formContext);

  let props = { ...props2 };
  props.disabled = props.disabled || context2.disabled;

  return (
    <Controller
      control={context.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <div className={props.className}>
          <Switch.Group>
            <div className={Styles.root}>
              {/* input optional title */}
              {props.title ? (
                <Switch.Label className={Styles.title(fieldState.invalid)}>{props.title}</Switch.Label>
              ) : null}
              {/* switch main body */}

              <Switch
                checked={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={props.name}
                className={
                  Styles.body(Boolean(field.value)) +
                  ' switch-field-name-' +
                  props.name +
                  ' switch-field-value-' +
                  field.value
                }
                value={field.value}
                disabled={props.disabled || false}
              >
                <span className={Styles.toggle(Boolean(field.value))} />
              </Switch>
            </div>
            {/* switch error message */}
            {fieldState.invalid && fieldState.error?.message ? (
              <span className={Styles.error}>{fieldState.error?.message}</span>
            ) : null}
            {/* input optional description */}
            {props.description ? <span className={Styles.description}>{props.description}</span> : null}
          </Switch.Group>
        </div>
      )}
    />
  );
};

export default __SwitchComp;
