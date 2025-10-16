import { ReactElement, ReactNode } from 'react';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

export interface __FormProps {
  onCancel: MouseEventHandler<HTMLInputElement> | undefined;
  title?: string | ReactElement;
  buttonTitle?: string;
  onSubmit?: (values: any) => void | Promise<any> | Function; // condition of submit button
  controllerSubmit?: UseFormHandleSubmit<FieldValues>;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
  methods: any;
  showCancelButton?: boolean;
  cancelButtonTitle?: string;
}
