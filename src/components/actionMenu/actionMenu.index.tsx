import React from 'react';
import { Popover } from '@headlessui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ActionMenuProps } from './actionMenu.types';
import { __ActionMenuStyles as Styles } from './actionMenu.styles';

const ActionMenuComp: React.FC<ActionMenuProps> = ({
  items,
  trigger,
  triggerClassName,
  menuClassName,
  position = 'right',
  disabled = false,
}) => {
  const defaultTrigger = <BsThreeDotsVertical className={Styles.dropdownIcon} />;

  if (disabled) {
    return (
      <button className={triggerClassName || Styles.triggerDisabled} disabled>
        {trigger || defaultTrigger}
      </button>
    );
  }

  return (
    <Popover className="relative">
      <Popover.Button className={triggerClassName || Styles.trigger}>{trigger || defaultTrigger}</Popover.Button>

      <Popover.Panel
        className={`${Styles.menuContainer} ${
          position === 'left' ? Styles.menuContainerLeft : Styles.menuContainerRight
        } ${menuClassName || ''}`}
      >
        {({ close }) => (
          <div>
            {items.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (!item.disabled) {
                      item.onClick();
                      close();
                    }
                  }}
                  disabled={item.disabled}
                  className={
                    item.disabled
                      ? Styles.menuItemDisabled
                      : item.destructive
                        ? Styles.menuItemDestructive
                        : Styles.menuItem
                  }
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className={Styles.icon} />}
                    {item.label}
                  </div>
                </button>
                {item.separator && index < items.length - 1 && <div className={Styles.separator}></div>}
              </div>
            ))}
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export { ActionMenuComp };
