import { Control, FieldValues } from 'react-hook-form';
import { SelectOption } from 'types';

export interface __SelectProps {
  name: string;
  title?: string;
  description?: string;
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  unSelectable?: boolean;
  className?: string;
  inputClassName?: string;
  options?: __SelectOptionType[] | string[];
  disabled?: boolean;
  required?: boolean;
}

export interface __SelectOptionType {
  title: string;
  lable?: string;
  value: string | number;
}

export interface __MultiSelectProps {
  name: string;
  title?: string;
  description?: string;
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  className?: string;
  options?: __MultiSelectOptionType[] | SelectOption[];
}

export interface __MultiSelectOptionType {
  title: string;
  value: string | number;
}
