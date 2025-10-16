import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { __SelectStyles as Styles } from './select.styles';
import { __SelectProps } from './select.types';
import Select from 'react-select';
import { useQuery, useQueries } from '@tanstack/react-query';

export interface AsyncSelectPropsType extends __SelectProps {
  dataApi: {
    index: any;
    get: any;
    toOption: any;
    getResourceName: any;
  };
  isMulti?: boolean;
  dataFilter?: object;
  disabled?: boolean;
  noOptionsMessage?: string;
  required?: boolean;
  placeholder?: string;
}

const AsyncSelectComp: React.FC<AsyncSelectPropsType> = (props: AsyncSelectPropsType) => {
  const [inputFilter, setInputFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState([]);
  const context = useFormContext();
  const getData = props.dataApi.index as () => Promise<any>;
  const defaultProps = {
    dataFilter: {},
    disabled: false,
    noOptionsMessage: 'No results found',
    options: [],
    placeholder: '',
  };

  props = { ...defaultProps, ...props };

  const { data: options } = useQuery({
    queryKey: ['select', props.name, JSON.stringify(props.dataFilter), inputFilter],
    queryFn: async () => {
      return getData({ 'filter[filter]': inputFilter, ...props.dataFilter }).then((response) => {
        let default_value: any[] = [];
        if (props.placeholder) {
          default_value = [{ value: null, label: props.placeholder }];
        }
        return [...default_value, ...response.data.data.map(props.dataApi.toOption)];
      });
    },
  });

  const loadOptions = (inputValue: string) => {
    setInputFilter(inputValue);
  };

  return (
    <Controller
      control={context.control}
      name={props.name}
      render={({ field, fieldState }) => {
        let vals = field.value || [];
        if (!Array.isArray(vals) && vals) {
          vals = [vals];
        }

        let queries = useQueries({
          queries: vals.map((value: any) => {
            return {
              queryKey: [props.dataApi.getResourceName(), value],
              queryFn: async () => {
                return props.dataApi.get(value).then((response: any) => response.data);
              },
            };
          }),
          combine: (data) => {
            return data.map((q) => {
              if (q.status !== 'success') {
                return null;
              }

              return props.dataApi.toOption(q.data);
            });
          },
        });

        useEffect(() => {
          if (!Array.isArray(queries) || queries.length == 0) {
            return;
          }
          if (props.isMulti) {
            setSelectedOption(queries);
          } else {
            setSelectedOption(queries[0]);
          }
        }, [queries]);

        const onChange = (selected: any) => {
          let values = field.value;
          if (props.isMulti) {
            values = selected ? selected.map((s) => s.value) : [];
          } else {
            values = selected ? selected.value : '';
          }
          field.onChange(values);
          setSelectedOption(selected);
        };

        return (
          <div className={props.className + (props.disabled ? ' ' + Styles.disabled : '')}>
            {props.title ? (
              <span className={Styles.title(fieldState.invalid)}>
                {props.title}
                {props.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            ) : null}
            <Select
              options={options}
              isMulti={props.isMulti ?? false}
              onInputChange={loadOptions}
              className={props.inputClassName || Styles.inputAsyncSelect(fieldState.invalid, Boolean(field.value))}
              // {...field}
              value={selectedOption}
              onChange={onChange}
              isDisabled={props.disabled}
              noOptionsMessage={() => props.noOptionsMessage}
              placeholder={props.placeholder}
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
};

export { AsyncSelectComp as AsyncSelect };
