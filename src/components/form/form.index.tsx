import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { FormStyles as Styles } from './form.styles';
import { __FormProps } from './form.types';
import { FormProvider } from 'react-hook-form';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { formContext } from './context.form';
// form component for render submit button and on submit loading
const __FormComp: React.FC<__FormProps> = (props: __FormProps) => {
  const defaultProps = {
    onSubmit: () => {
      return;
    },
    showCancelButton: false,
    onCancel: () => {},
    cancelButtonTitle: 'Cancel',
    disabled: false,
  };

  props = { ...defaultProps, ...props };
  // loading state of submit button controller
  // const [loading, setLoading] = useState<boolean>(false);

  // // on click to handle loading state of button
  // function innerOnClickHandler() {
  //     if (props.onSubmit) {
  //         const promise = props.onSubmit();
  //         // if onClick function return promise we should render loading, because the task is async
  //         if (promise) {
  //             setLoading(true);
  //             promise.then(() => {
  //                 setLoading(false);
  //             });
  //         }
  //     }
  // }

  // // support both controller and simple state of form
  // let onClick = innerOnClickHandler;
  // if (props.controllerSubmit) {
  //     onClick = props.controllerSubmit(innerOnClickHandler);
  // }

  function handleError(error: any) {
    console.error('form error', error);
  }

  async function handleSubmit(data) {
    try {
      await props.onSubmit(data);
    } catch (ex) {
      if (isAxiosError(ex)) {
        console.error('api call error', ex);
        if (ex.response?.status === 422) {
          Object.entries(ex.response.data?.errors ?? {}).map(([field, error]) => {
            const fieldNames = Object.keys(props.methods.getValues());
            const foundField = fieldNames.find((f) => field.startsWith(f));
            if (foundField) {
              props.methods.setError(foundField, error);
            }
          });

          toast.error(
            ex.response.data?.message === 'validationError'
              ? 'Please fix following errors, then try again.'
              : ex.response.data?.message
          );
        } else if (ex.response?.status === 403) {
          toast.error('Permission Denied!');
        } else if (ex.response?.status === 401) {
          toast.error('Session Expired. Please logout and login again.');
        } else {
          toast.error('Cannot complete your request!');
        }
        return;
      }

      throw ex;
    }
  }

  return (
    <form
      noValidate={true}
      className={props.className}
      onSubmit={props.methods.handleSubmit(handleSubmit, handleError)}
    >
      <formContext.Provider value={{ disabled: props.disabled, name: props.name }}>
        <FormProvider {...props.methods}>
          {/* form optional title */}
          {props.title ? <h2 className={Styles.title}>{props.title}</h2> : null}
          {/* form content */}
          {props.children}
          {/* form optional submit button (base on onSubmit props) */}
          {!props.disabled && props.buttonTitle ? (
            <div className="pt-2">
              {props.showCancelButton && (
                <input
                  disabled={props.isLoading}
                  type="button"
                  name="Cancel"
                  className={Styles.cancelButton}
                  value={props.cancelButtonTitle}
                  onClick={props.onCancel}
                />
              )}

              <input
                disabled={props.isLoading}
                type="submit"
                name="submit"
                className={Styles.submitButton}
                value={props.buttonTitle ? props.buttonTitle : 'Submit'}
              />
              {/* loading spinner on loading state */}
              {props.isLoading ? <FaSpinner className={Styles.spinner} /> : null}
            </div>
          ) : null}
        </FormProvider>
      </formContext.Provider>
    </form>
  );
};

export default __FormComp;
