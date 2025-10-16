import { Control, FieldValues } from 'react-hook-form';

export interface __TextInputProps {
  name: string;
  title?: string;
  description?: string;
  type?: 'text' | 'number' | 'password' | 'datetime-local' | 'date';
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}
