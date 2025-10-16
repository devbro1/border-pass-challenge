import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { __SelectStyles as Styles } from './select.styles';
import { __MultiSelectOptionType, __MultiSelectProps } from './select.types';
import Select from 'react-select';

export interface MultiSelectOptionType extends __MultiSelectOptionType {}

// multi select component compatible with controller logic
export function __MultiSelect(props: __MultiSelectProps) {
  const context = useFormContext();

  return (
    <Controller
      control={context.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <div className={props.className + ' multi-select-field ' + props.name}>
            {props.title ? <span className={Styles.title(fieldState.invalid)}>{props.title}</span> : null}
            <Select
              options={props.options}
              getOptionLabel={(option: any) => option.title}
              isMulti={true}
              className="w-full"
              name={props.name}
              value={props.options?.filter((opt) => {
                return field.value?.includes(opt.value);
              })}
              onChange={(val: any) =>
                field.onChange(
                  val.map((v: any) => {
                    return v.value;
                  })
                )
              }
              classNames={Styles.reactSelect}
              unstyled={true}
            />
            {fieldState.invalid && fieldState.error?.message ? (
              <span className={Styles.error}>{fieldState.error?.message}</span>
            ) : null}
            {props.description ? <span className={Styles.description}>{props.description}</span> : null}
          </div>
        );
      }}
    />
  );
}
