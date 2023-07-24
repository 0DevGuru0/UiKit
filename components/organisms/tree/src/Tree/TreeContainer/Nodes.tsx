import { useTree } from '../TreeContext';
import { Node, newNodeId, RendererProps } from './Nodes/Node';
import { Loading } from './Nodes/Loading';
import { compact } from 'lodash';
import { ReactElement } from 'react';

export interface NonSortableNodesProps {
  selectedNodeIds: string[];
  parentNodeId: string;
  nodeIds: string[];
  expandedIds: string[];
  depth: number;
  nodeRenderer?: (props: RendererProps) => ReactElement;
  onNodeSelect: (selectedNodeId: string) => void;
}

export const Nodes = ({
  parentNodeId,
  nodeIds,
  depth,
  expandedIds,
  selectedNodeIds,
  nodeRenderer,
  onNodeSelect,
}: NonSortableNodesProps) => {
  const { nodesKeyBy, isLoadingChildren } = useTree();

  const targetNodes = compact(nodeIds.map((nodeId) => nodesKeyBy[nodeId]));

  if (isLoadingChildren && isLoadingChildren.includes(parentNodeId)) {
    return <Loading />;
  }

  const includesNewNode = nodeIds.includes(newNodeId);

  return (
    <>
      {targetNodes.map((node, index) => (
        <Node
          index={index}
          key={node.id}
          // @ts-ignore
          // ! TODO: react-sortable-hoc is not compatible with react18 types, replace it
          node={node}
          collection={parentNodeId}
          parentId={parentNodeId}
          renderer={nodeRenderer}
          depth={depth}
          expandedIds={expandedIds}
          selectedNodeIds={selectedNodeIds}
          onNodeSelect={onNodeSelect}
        />
      ))}
      {includesNewNode && (
        <Node
          index={-1}
          key={newNodeId}
          // @ts-ignore
          // ! TODO: react-sortable-hoc is not compatible with react18 types, replace it
          node={{ id: newNodeId, title: '' }}
          collection={parentNodeId}
          parentId={parentNodeId}
          renderer={nodeRenderer}
          depth={depth}
          expandedIds={expandedIds}
          selectedNodeIds={selectedNodeIds}
          onNodeSelect={onNodeSelect}
        />
      )}
    </>
  );
};
