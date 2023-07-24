import { Tabs, Tab as MuiTab } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { ControlledTab } from './ControlledTab';

export interface TabItem {
  label: string;
  content: React.ReactNode | string;
  disabled?: boolean;
  muiTabProps?: Partial<typeof MuiTab>;
}

export interface GeneralTabProps {
  items: TabItem[];
  /*
   * The index of the tab to be selected by default.
   */
  defaultTabIndex?: number;
  muiTabsProps?: Partial<typeof Tabs>;
  className?: string;
  onChange?: (e: any, value: any) => void;
}
export type TabProps = Omit<GeneralTabProps, 'onChange'> & {
  onChange?: (val: number) => void;
};
export const Tab: FC<TabProps> = (props) => {
  const { items, muiTabsProps, defaultTabIndex = 0, onChange } = props;
  const [value, setValue] = useState(defaultTabIndex);

  const handleChange = useCallback(
    (event: any, newValue: any) => {
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <ControlledTab
      items={items}
      tabIndex={value}
      onChange={handleChange}
      muiTabsProps={muiTabsProps}
    />
  );
};
