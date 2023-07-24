import { FC, ReactNode, SyntheticEvent, useCallback, useState } from 'react';

import { InputLabel, InputLabelProps } from './Select/InputLabel';

import { SelectChangeEvent, SelectProps as MuiSelectProps } from '@mui/material';

import { Controller } from './Select/Selector/Controller';

import {
  StyledSelect,
  CustomIconContainer,
  StyledMenuItem,
  StyledListItemText,
  Error,
  StyledHelperText,
  ControllerContainer,
} from './Select/Select.styles';

export type SelectProps = MuiSelectProps & {
  labelProps?: InputLabelProps;
  placeHolderText?: string;
  loading?: boolean;
  controllerIcon?: JSX.Element;
  labelText?: string;
  optional?: boolean;
  startIcon?: JSX.Element;
  onControllerClick?: () => void;
  onIconClick: (e: React.MouseEvent) => void;
  onSelectionChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  onMenuOpen?: (event: SyntheticEvent<Element, Event>) => void;
  onMenuClose?: (event: SyntheticEvent<Element, Event>) => void;
  filled?: boolean;
};

export const Select: FC<SelectProps> = ({
  onMenuOpen,
  onMenuClose,
  onControllerClick,
  renderValue,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const defaultRenderValue = useCallback(
    (value: any): ReactNode => {
      let text = props.placeHolderText;
      if (value && value.length > 0) {
        if (Array.isArray(value)) {
          text = value.join(', ');
        } else {
          text = value;
        }
      }
      return <>{text}</>;
    },
    [props.placeHolderText],
  );

  const handleOpen = useCallback(
    (e: SyntheticEvent<Element, Event>) => {
      setOpen(true);
      onMenuOpen?.(e);
    },
    [onMenuOpen],
  );

  const handleClose = useCallback(
    (e: SyntheticEvent<Element, Event>) => {
      setOpen(false);
      onMenuClose?.(e);
    },
    [onMenuClose],
  );

  const handleControllerClick = useCallback(() => {
    setOpen(!open);
    if (onControllerClick) {
      onControllerClick();
    }
  }, [onControllerClick, setOpen, open]);

  return (
    <StyledSelect
      id={props.id}
      onChange={props.onChange}
      multiple
      displayEmpty={true}
      renderValue={renderValue || defaultRenderValue}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      MenuProps={{ disablePortal: true }}
      $isFilled={props.filled}
      startAdornment={
        props.startIcon && (
          <CustomIconContainer
            $focused={open}
            $disabled={props.disabled!}
            $hasLabel={!!props.label}
            onClick={props.onIconClick}
          >
            {props.startIcon}
          </CustomIconContainer>
        )
      }
      endAdornment={
        <ControllerContainer>
          <Controller
            loading={props.loading!}
            disabled={props.disabled!}
            hasLabel={!!props.label}
            focused={open}
            variant={'LERNITO'}
            icon={props.controllerIcon}
            onIconClick={onControllerClick && handleControllerClick}
          />
        </ControllerContainer>
      }
      IconComponent={() => null}
      {...props}
    >
      {props.children}
    </StyledSelect>
  );
};

export { StyledMenuItem as MenuItem };
export { StyledListItemText as ListItemText };
export { Error as ErrorText };
export { StyledHelperText as HelperText };
export { InputLabel };
