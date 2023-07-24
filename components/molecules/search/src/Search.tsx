import { FC, useEffect, useMemo, useState } from 'react';

import debounce from 'lodash/debounce';
import { Input, InputProps } from '@avidkit/input';
import { CloseFill as ClearSVG, Search as SearchSVG } from '@avidkit/icons';

export interface SearchProps
  extends Omit<InputProps, 'value' | 'disabled' | 'startAdornment'> {
  startAdornment?: boolean;
}

export const Search: FC<SearchProps> = ({
  onChange,
  startAdornment = true,
  defaultValue,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue?.toString() ?? '');

  const onChangeDebounced = useMemo(() => debounce(onChange, 300), [onChange]);

  const delayedSubmit = (_value: string) => {
    setValue(_value);
    onChangeDebounced(_value);
  };

  useEffect(() => () => onChangeDebounced.cancel(), [onChangeDebounced]);

  const startIcon = (hover: boolean, typingMode: boolean, isFilledMode: boolean) =>
    typingMode || (hover && isFilledMode) ? (
      <ClearSVG onClick={() => delayedSubmit('')} />
    ) : (
      <SearchSVG />
    );

  return (
    <Input
      {...props}
      value={value}
      onChange={delayedSubmit}
      startAdornment={startAdornment ? startIcon : undefined}
    />
  );
};
