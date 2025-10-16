export const __SelectStyles = {
  input: (error: boolean, hasValue: boolean) => {
    //return 'bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';
    return `shadow-sm bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
      error
        ? 'border-red-400 dark:border-red-400 placeholder-red-500 text-red-900 '
        : `border-gray-300 placeholder-gray-500 text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
            hasValue ? 'text-gray-900' : 'text-gray-500'
          }`
    } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;
  },

  inputAsyncSelect: (error: boolean, hasValue: boolean) => {
    return `shadow-sm bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
      error
        ? 'border-red-400 dark:border-red-400 placeholder-red-500 text-red-900 '
        : `border-gray-300 placeholder-gray-500 text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
            hasValue ? 'text-gray-900' : 'text-gray-500'
          }`
    } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;
  },

  title: (error?: boolean) =>
    `block text-sm font-medium ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-100'}`,
  error: 'text-xs text-red-600 dark:text-red-400',
  description: 'block text-xs dark:text-gray-100',
  reactSelect: {
    container: (state) => {
      return 'shadow-sm bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-gray-300 placeholder-gray-500 text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
    },
    control: (state) => {
      return 'shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white mx-1';
    },

    menu: (a) => {
      return 'text-gray-900 dark:text-white bg-white dark:bg-gray-600 shadow-sm border border-gray-700 rounded-lg mt-2 py-1 ';
    },
    option: (state) => {
      return `pl-2 py-2 focus:bg-purple-800 ${state.isFocused ? 'bg-blue-300 dark:bg-blue-700' : 'bg-white dark:bg-gray-600'}`;
    },
    group: (a) => {
      return 'bg-red-600 active:bg-purple-800';
    },
    ListBox: (a) => {
      return 'py-4';
    },
    multiValue: (state) => {
      return 'bg-gray-200 ml-1 my-1 px-2 dark:bg-gray-500';
    },
  },

  theme: (theme) => {
    return theme;
  },
  disabled: 'cursor-not-allowed',
};
