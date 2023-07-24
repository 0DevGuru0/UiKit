import { FC, ReactElement, SyntheticEvent } from 'react';

import TreeView from '@mui/lab/TreeView';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { SortableContainer } from 'react-sortable-hoc';
import { useTheme } from 'styled-components';

import { Nodes, NonSortableNodesProps } from './TreeContainer/Nodes';

export const ROOT_LEVEL = 'root';

export type TreeContainerProps = {
  rootNodeIds: string[];
  expandedIds: string[];
  selectedNodeIds: string[];
  expandIcon?: ReactElement;
  collapseIcon?: ReactElement;
  className?: string;
  onNodeSelect: (nodeId: string) => void;
} & Pick<NonSortableNodesProps, 'nodeRenderer'>;

const NonSortableTreeContainer: FC<TreeContainerProps> = (props) => {
  const {
    className,
    rootNodeIds,
    expandIcon,
    expandedIds,
    selectedNodeIds,
    collapseIcon,
    onNodeSelect,
    nodeRenderer,
  } = props;

  const theme = useTheme();
  let defaultExpandIcon =
    theme.direction === 'ltr' ? <ArrowRightIcon /> : <ArrowLeftIcon />;
  if (expandIcon) {
    defaultExpandIcon = expandIcon;
  }

  return (
    <TreeView
      defaultCollapseIcon={collapseIcon ?? <ArrowDropDownIcon />}
      defaultExpandIcon={defaultExpandIcon}
      className={className}
      expanded={expandedIds}
      selected={selectedNodeIds}
      onNodeSelect={(_e: SyntheticEvent, nodeId: string | string[]) =>
        onNodeSelect(nodeId as string)
      }
    >
      <Nodes
        nodeIds={rootNodeIds}
        parentNodeId={ROOT_LEVEL}
        nodeRenderer={nodeRenderer}
        depth={1}
        expandedIds={expandedIds}
        selectedNodeIds={selectedNodeIds}
        onNodeSelect={onNodeSelect}
      />
    </TreeView>
  );
};

export const TreeContainer = SortableContainer(NonSortableTreeContainer);
