import Grid from '@mui/material/Grid';
import Typography, { TypographyProps } from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

import { MoreOptions } from '@avidkit/more-options';
import { IconButton } from '@avidkit/icon-button';

import { useTree } from '../../../TreeContext';
import { TreeNode } from '../../../types';

import { ReorderingHandler } from './ExtraInfo/ReorderingHandler';
import { IconButtonWrapper } from './ExtraInfo/IconButtonWrapper';
import { getActions } from './ExtraInfo/getActions';

interface DescriptionProps extends TypographyProps {
  paddingRight: number;
}

const Description = styled((props: DescriptionProps) => <Typography {...props} />)`
  padding-right: ${({ paddingRight }) => paddingRight + 10}px;
  color: ${({ theme }) => theme.palette.grey[400]};
`;

const StyledMoreOptions = styled(MoreOptions)`
  & > div > div {
    max-width: 300px;
    width: max-content;
  }
`;

interface ExtraInfoProps {
  node: TreeNode;
  onAddNode?: () => void;
  onEditNode?: () => void;
}

export const ExtraInfo = ({ node, onAddNode, onEditNode }: ExtraInfoProps) => {
  const {
    moreOptions,
    sortable,
    showTreeNodeId,
    onAdd,
    removeNodeConfig,
    editNodeConfig,
  } = useTree();

  const descriptionPaddingRight =
    (sortable ? 10 : 0) + (onAdd ? 6 : 0) + (moreOptions ? 5 : 0);

  const actions = getActions(moreOptions ?? [], node, {
    ...(onEditNode && { editNodeConfig: { ...editNodeConfig, onEdit: onEditNode } }),
    removeNodeConfig,
    showTreeNodeId,
  });

  // TODO: Add autoClose prop to MoreOption component
  return (
    <Grid item>
      <Grid container alignItems="start" direction="row">
        {node.description && (
          <Grid item>
            <Description paddingRight={descriptionPaddingRight}>
              {node.description}
            </Description>
          </Grid>
        )}
        <Grid item>
          <Grid container alignItems="start" direction="row">
            {sortable && <ReorderingHandler />}
            {onAdd && (
              <IconButtonWrapper item left={-6}>
                <IconButton
                  icon={<AddIcon />}
                  variant="Free"
                  color="Secondary"
                  size="Sm"
                  onClick={onAddNode}
                />
              </IconButtonWrapper>
            )}
            {!isEmpty(actions) && (
              <Grid item>
                <StyledMoreOptions sections={[actions]} size="Sm" variant="horizontal" />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
