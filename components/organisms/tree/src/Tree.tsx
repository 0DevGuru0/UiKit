import { SortEnd } from 'react-sortable-hoc';

import { ITreeContext, TreeProvider } from './Tree/TreeContext';
import { TreeContainer, TreeContainerProps, ROOT_LEVEL } from './Tree/TreeContainer';
import { useMemo, useState } from 'react';
import { keyBy } from 'lodash';

export type TreeProps = Omit<
  TreeContainerProps,
  'expandedIds' | 'selectedNodeIds' | 'onNodeSelect'
> &
  Omit<ITreeContext, 'sortable' | 'nodesKeyBy'> & {
    expandedIds?: string[];
    selectedNodeIds?: string[];
    className?: string;
    onNodeSelect?: (selectedNodeId: string | string[]) => void;
    onSort?: (newOrderedChildren: string[], parentId?: string) => void;
  };

export const Tree = ({
  nodes,
  moreOptions,
  rootNodeIds,
  isLoadingChildren,
  showTreeNodeId,
  className,
  onToggle,
  onCollapse,
  onExpand,
  onAdd,
  onSort,
  editNodeConfig,
  removeNodeConfig,
  ...props
}: TreeProps) => {
  const [localExpandedIds, setLocalExpandedIds] = useState<string[]>([]);
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>([]);

  const expandedIds = props.expandedIds ?? localExpandedIds;
  const selectedItems = props.selectedNodeIds ?? localSelectedItems;

  const onNodeSelectHandler = (selectedNodeId: string): void => {
    if (!props.onNodeSelect) {
      setLocalSelectedItems((prev) =>
        prev.includes(selectedNodeId)
          ? prev.filter((id) => id !== selectedNodeId)
          : [...prev, selectedNodeId],
      );
    } else {
      props.onNodeSelect(selectedNodeId);
    }
  };

  const onExpandHandler = (expandedNodeId: string) => {
    if (props.expandedIds !== undefined) {
      onExpand?.(expandedNodeId);
    } else {
      setLocalExpandedIds((prev) => [...prev, expandedNodeId]);
      onExpand?.(expandedNodeId);
    }
  };

  const onCollapseHandler = (collapsedNodeId: string) => {
    if (props.expandedIds !== undefined) {
      onCollapse?.(collapsedNodeId);
    } else {
      setLocalExpandedIds((prev) => prev.filter((id) => id !== collapsedNodeId));
      onCollapse?.(collapsedNodeId);
    }
  };

  const onSortEnd = (sortInfo: SortEnd) => {
    const parentNodeId = sortInfo.collection;

    const clonedNodes =
      parentNodeId === ROOT_LEVEL
        ? rootNodeIds.slice()
        : (nodes.find((node) => node.id === parentNodeId)?.children ?? []).slice();

    const targetChild = clonedNodes[sortInfo.oldIndex];

    clonedNodes.splice(sortInfo.oldIndex, 1);
    clonedNodes.splice(sortInfo.newIndex, 0, targetChild);

    onSort?.(
      clonedNodes,
      parentNodeId === ROOT_LEVEL ? undefined : parentNodeId.toString(),
    );
  };

  const nodesKeyByDep = nodes.map((node) => node.id);

  const nodesKeyBy = useMemo(() => keyBy(nodes, 'id'), [nodesKeyByDep]);

  return (
    <TreeProvider
      value={{
        nodesKeyBy,
        nodes,
        moreOptions,
        isLoadingChildren,
        sortable: !!onSort,
        showTreeNodeId,
        onAdd,
        onToggle,
        onCollapse: onCollapseHandler,
        onExpand: onExpandHandler,
        editNodeConfig,
        removeNodeConfig,
      }}
    >
      <TreeContainer
        {...props}
        useDragHandle
        // @ts-ignore
        // ! TODO: react-sortable-hoc is not compatible with react18 types, replace it
        rootNodeIds={rootNodeIds}
        onSortEnd={onSort ? onSortEnd : undefined}
        expandedIds={expandedIds}
        selectedNodeIds={selectedItems}
        onNodeSelect={onNodeSelectHandler}
        className={className}
      />
    </TreeProvider>
  );
};
