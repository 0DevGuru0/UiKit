import { ReactElement, useState } from 'react';

import MuiTreeItem, { TreeItemProps as MuiTreeItemProps } from '@mui/lab/TreeItem';
import Grid from '@mui/material/Grid';
import { isEmpty } from 'lodash';
import styled, { css, useTheme } from 'styled-components';
import { SortableElement } from 'react-sortable-hoc';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { EditableLabel, EditableLabelProps } from '@avidkit/editable-label';

import { TreeNode } from '../../types';
import { Nodes } from '../Nodes';
import { ExtraInfo } from './Node/ExtraInfo';
import { useTree } from '../../TreeContext';

export const newNodeId = 'new';

const focusedStyled = css`
  color: ${({ theme }) => theme.palette.primary.main} !important;
  background-color: ${({ theme }) => theme.palette.grey[400]} !important;
  & > div:nth-child(2) > div > div > div > p {
    font-weight: 700;
  }
`;

const selectedStyled = css`
  background-color: transparent !important;
  & > div:nth-child(2) > div > div > div > p {
    font-weight: 700;
  }
`;

interface TreeItemProps extends MuiTreeItemProps {
  $isLeaf: boolean;
  $editMode: boolean;
  $isFocused: boolean;
}

const BadgeNotification = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50px;
  margin-left: 2px;
  background: ${({ theme }) => theme.palette.error.dark};
`;

const TreeItem = styled((props: TreeItemProps) => <MuiTreeItem {...props} />)`
  & > div > div:last-child > div > div:nth-child(2) {
    visibility: hidden;
  }
  ${({ theme, $isLeaf, $editMode, $isFocused }) => css`
    & > div > div:last-child > div > div:nth-child(2) {
      visibility: ${$editMode ? 'visible' : 'hidden'};
    }
    margin: 2px 0px;
    & > div {
      padding: 12px;
      border-radius: ${theme.shape.borderRadius}px;
      ${$isFocused && selectedStyled}
      ${$editMode && selectedStyled}
      &:hover {
        ${focusedStyled}
        & > div:last-child > div > div:nth-child(2) {
          visibility: visible;
        }
      }
    }
    & > ul {
      ${!$isLeaf &&
      css`
        margin: 5px 0 5px 19px;
        border-left: 1px dashed ${theme.palette.grey[500]};
      `}
    }
  `}
`;

const Container = styled((props) => <Grid container {...props} />)`
  height: 24px;
`;

interface NodeTitleProps extends EditableLabelProps {
  isExpanded: boolean;
}

const NodeTitle = styled((props: NodeTitleProps) => <EditableLabel {...props} />)`
  font-weight: ${({ isExpanded }) => (isExpanded ? 700 : 400)};
`;

export interface RendererProps {
  node: TreeNode;
  isExpanded?: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TreeItem: (props: TreeItemProps) => ReactElement;
  methods: {
    onToggleNode: (
      e: React.MouseEvent<SVGSVGElement | HTMLLIElement, MouseEvent>,
    ) => void;
    onSingleClick: (
      e: React.MouseEvent<SVGSVGElement | HTMLLIElement, MouseEvent>,
    ) => void;
  };
  depth: number;
}

interface NonSortableNodeProps {
  node: TreeNode;
  expandedIds: string[];
  selectedNodeIds: string[];
  parentId: string;
  depth: number;
  renderer?: (args: RendererProps) => ReactElement;
  onNodeSelect: (selectedNodeId: string) => void;
}

const NonSortableNode = ({
  node,
  parentId,
  depth,
  expandedIds,
  selectedNodeIds,
  renderer,
  onNodeSelect,
}: NonSortableNodeProps) => {
  const [editMode, setEditMode] = useState(false);
  const {
    onToggle,
    onCollapse,
    onExpand,
    onAdd,
    editNodeConfig,
    removeNodeConfig,
    sortable,
    moreOptions,
    showTreeNodeId,
  } = useTree();

  const [addingNewNode, setAddingNewNode] = useState(false);

  const children = getChildren(node.children ?? [], addingNewNode);

  const isLeaf = isEmpty(children);
  const isAdd = node.id === newNodeId;
  const isExpanded = expandedIds.includes(node.id);

  const theme = useTheme();
  const ArrowIcon = theme.direction === 'ltr' ? ArrowRightIcon : ArrowLeftIcon;

  const showMoreOptions =
    !!editNodeConfig?.onEdit ||
    !!removeNodeConfig?.onRemove ||
    showTreeNodeId ||
    !!moreOptions;
  const hasExtraInfo = node.description || sortable || !!onAdd || showMoreOptions;

  const onToggleNode = (
    e: React.MouseEvent<SVGSVGElement | HTMLLIElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    if (isLeaf) {
      return;
    }

    onToggle?.(node.id);

    if (isExpanded) {
      onCollapse?.(node.id);
    } else {
      onExpand?.(node.id);
      onNodeSelect(node.id);
    }
  };

  const onSingleClick = (
    e: React.MouseEvent<SVGSVGElement | HTMLLIElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    if (isLeaf) {
      return;
    }

    if (!isExpanded) {
      onExpand?.(node.id);
      onNodeSelect(node.id);
    }
  };

  const onChangeNode = (changedNodeTitle: string) =>
    isAdd
      ? onAdd?.({ parentId, title: changedNodeTitle })
      : editNodeConfig?.onEdit({ ...node, title: changedNodeTitle });

  const Label = () => (
    <Container
      alignItems="flex-start"
      justifyContent="space-between"
      className="AK_TreeItem"
    >
      <Grid item sx={{ display: 'flex' }}>
        <NodeTitle
          latency={200}
          isExpanded={isExpanded}
          placeholder="Enter node title"
          defaultValue={node.title}
          onSubmit={(newTitle) => {
            onChangeNode(newTitle);
            setEditMode(false);
            setAddingNewNode(false);
          }}
          className="AK_TreeItemTitle"
          onFocusEdit={(focused) => {
            if (!focused) {
              setEditMode(false);
              setAddingNewNode(false);
            } else {
              setEditMode(true);
            }
          }}
          editMode={isAdd ? true : editMode}
          typeOfClick={editNodeConfig?.typeOfClick}
        />
        {node.isShowBadgeNotification && <BadgeNotification />}
      </Grid>
      {node.id !== newNodeId && hasExtraInfo && (
        <ExtraInfo
          node={node}
          onEditNode={editNodeConfig ? () => setEditMode(true) : undefined}
          onAddNode={() => {
            setAddingNewNode(true);
            if (!isExpanded) {
              onExpand?.(newNodeId);
            }
          }}
        />
      )}
    </Container>
  );

  const isFocused = isExpanded || selectedNodeIds.includes(node.id);

  return (
    <>
      {renderer ? (
        renderer({
          node,
          isExpanded,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          TreeItem: (props: TreeItemProps) => (
            <MuiTreeItem {...props}>
              {!isLeaf && (
                <Nodes
                  parentNodeId={node.id}
                  nodeIds={children}
                  nodeRenderer={renderer}
                  depth={depth + 1}
                  expandedIds={expandedIds}
                  selectedNodeIds={selectedNodeIds}
                  onNodeSelect={onNodeSelect}
                />
              )}
            </MuiTreeItem>
          ),
          methods: { onToggleNode, onSingleClick },
          depth,
        })
      ) : (
        <TreeItem
          nodeId={node.id}
          $isLeaf={isLeaf}
          $editMode={editMode}
          $isFocused={isFocused}
          collapseIcon={<ArrowDropDownIcon onClick={onToggleNode} />}
          expandIcon={<ArrowIcon onClick={onToggleNode} />}
          onClick={onSingleClick}
          label={<Label />}
        >
          {!isLeaf && (
            <Nodes
              parentNodeId={node.id}
              nodeIds={children}
              depth={depth + 1}
              expandedIds={expandedIds}
              selectedNodeIds={selectedNodeIds}
              onNodeSelect={onNodeSelect}
            />
          )}
        </TreeItem>
      )}
    </>
  );
};

export const Node = SortableElement(NonSortableNode);

const getChildren = (children: string[], addingNewNode: boolean): string[] => {
  if (addingNewNode) {
    return children.concat(newNodeId);
  }

  return children.filter((child) => child !== newNodeId);
};
