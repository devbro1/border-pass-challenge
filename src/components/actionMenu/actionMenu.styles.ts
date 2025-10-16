export const __ActionMenuStyles = {
  // Trigger button styles
  trigger:
    'inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md transition-colors duration-200',
  triggerDisabled: 'inline-flex items-center justify-center p-2 text-gray-300 cursor-not-allowed rounded-md',

  // Menu container styles
  menuContainer:
    'absolute z-50 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-48 dark:bg-gray-800 dark:border-gray-700',
  menuContainerLeft: 'origin-top-left left-0',
  menuContainerRight: 'origin-top-right right-0',

  // Menu item styles
  menuItem:
    'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
  menuItemDisabled: 'block w-full text-left px-4 py-2 text-sm text-gray-400 cursor-not-allowed dark:text-gray-600',
  menuItemDestructive:
    'block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors duration-150 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300',

  // Icon styles
  icon: 'w-4 h-4 mr-3 flex-shrink-0',

  // Separator styles
  separator: 'border-t border-gray-200 my-1 dark:border-gray-600',

  // Dropdown icon (default trigger)
  dropdownIcon: 'w-5 h-5',
};
