import { useState, useEffect, useCallback } from 'react';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import useDoubleClick from 'use-double-click';
import { isNil } from 'lodash';
import styled from 'styled-components';

import { useClickOutside } from '@avidkit/hooks';

const LabelInput = styled(InputBase)`
  margin-top: -3px;
  color: ${({ theme }) => theme.palette.grey[200]};
`;
export interface EditableLabelProps {
  defaultValue?: string;
  /**
   * Default is 1000
   */
  latency?: number;
  editMode?: boolean;
  placeholder?: string;
  className?: string;
  typeOfClick?: 'doubleClick' | 'singleClick';
  /**
   * Missing onSubmit means user cannot edit label
   */
  onSubmit?: (newLabel: string) => void;
  onFocusEdit?: (focused: boolean) => void;
}

export const EditableLabel = ({
  defaultValue,
  latency,
  editMode,
  placeholder,
  typeOfClick = 'doubleClick',
  className,
  onSubmit,
  onFocusEdit,
}: EditableLabelProps) => {
  const [editing, setEditing] = useState(editMode);
  const [label, setLabel] = useState(defaultValue);
  const onSubmitLabel = useCallback(() => {
    setEditing(false);
    if (!isNil(label) && editing) {
      onSubmit?.(label);
    } else {
      onFocusEdit?.(false);
    }
  }, [editing, onFocusEdit, onSubmit, label]);
  const labelRef = useClickOutside(onSubmitLabel);

  useEffect(() => {
    if (!isNil(editMode)) {
      setEditing(editMode);
    }
  }, [editMode]);

  useDoubleClick({
    latency: latency ?? 1000,
    ref: labelRef,
    onDoubleClick: () => {
      if (onSubmit && !editMode) {
        setEditing(true);
        onFocusEdit?.(true);
      }
    },
  });

  return (
    <div
      ref={labelRef}
      className={className}
      onClick={() => {
        if (typeOfClick === 'singleClick') {
          setEditing(true);
          onFocusEdit?.(true);
        }
      }}
    >
      {editing ? (
        <LabelInput
          autoFocus
          placeholder={placeholder}
          value={label}
          onChange={(e) => setLabel?.(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSubmitLabel()}
          className="AK_LabelInput"
        />
      ) : (
        <Typography className="AK_LabelText">{label}</Typography>
      )}
    </div>
  );
};
