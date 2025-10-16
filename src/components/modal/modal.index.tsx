import { ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  onClose?: () => void;
  title?: string;
  showCloseButton?: boolean;
  children?: ReactNode;
}

export function ModalComp(props: ModalProps): JSX.Element {
  const main_props = { ...props, showCloseButton: true };

  if (!main_props.show) {
    return <></>;
  }

  function onClose() {
    main_props.onClose && main_props.onClose();
  }
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full"
    >
      {/* Non-clickable semi-transparent background overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="relative p-4 w-full max-w-2xl max-h-full z-10">
        <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{main_props.title || ''}</h3>
            {main_props.showCloseButton && (
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            )}
          </div>
          <div className="p-0 m-0">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
