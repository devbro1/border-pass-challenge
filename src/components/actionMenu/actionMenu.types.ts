export interface ActionMenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  onClick: () => void;
  disabled?: boolean;
  destructive?: boolean; // For delete/remove actions
  separator?: boolean; // Show separator after this item
}

export interface ActionMenuProps {
  items: ActionMenuItem[];
  trigger?: React.ReactNode;
  triggerClassName?: string;
  menuClassName?: string;
  position?: 'left' | 'right';
  disabled?: boolean;
}
