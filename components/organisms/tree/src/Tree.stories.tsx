import { Tree, TreeProps } from './Tree';
import { TreeNode } from './Tree/types';

import { StoryFC } from '$storybook/StoryFC';
import { useState } from 'react';
import { NewNode } from './Tree/TreeContext';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default {
  title: 'Organisms / Tree',
  component: Tree,
};

interface IDLSubjectTree {
  nodes: {
    _id: number;
    title: string;
    level: number;
    children?: number[];
  }[];
  rootNodes: number[];
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nodes, rootNodes }: IDLSubjectTree = require('./DLSubjectTree.json');

const treeNodes: TreeNode[] = nodes.map((node) => ({
  id: node._id.toString(),
  title: node.title,
  children: node.children?.map((childId) => childId.toString()) ?? null,
}));
const rootNodeIds = rootNodes.map((n) => n.toString());

const readonlyParameters = {
  zeplinLink: 'dummy',
  actions: { argTypesRegex: '^on(?!Sort|Toggle|Add)[A-Z].*' },
};

type Option = Exclude<TreeProps['moreOptions'], undefined>[0];

type StoryProps = Omit<TreeProps, 'moreOptions'> & {
  moreOptions?: Omit<Option, 'action'>[];
  onImportNodes?: (node: TreeNode) => void;
};

export const Readonly: StoryFC<StoryProps> = (args) => {
  const [treeInputNodes, setTreeInputNodes] = useState<TreeNode[]>(args.nodes);
  const [treeInputRootNodeIds, setTreeInputRootNodeIds] = useState<string[]>(
    args.rootNodeIds,
  );
  const moreOptions = args.moreOptions?.map((option: Option) => ({
    ...option,
    action: args.onImportNodes ?? (() => null),
  }));

  const onSort = (newNodes: any, parentNodeId: any) => {
    if (parentNodeId) {
      setTreeInputNodes((_nodes) => {
        const nodeIndex = _nodes.findIndex((n) => n.id === parentNodeId);
        _nodes.splice(nodeIndex, 1, {
          ..._nodes[nodeIndex],
          children: newNodes,
        });
        return [..._nodes];
      });
    } else {
      setTreeInputRootNodeIds(newNodes);
    }
  };

  const onEdit = (node: TreeNode) => {
    setTreeInputNodes((_nodes) => {
      const nodeIndex = _nodes.findIndex((n) => n.id === node.id);

      _nodes.splice(nodeIndex, 1, node);

      return [..._nodes];
    });
  };

  const onAdd = (newNode: NewNode) => {
    setTreeInputNodes((_nodes) => {
      _nodes.push({
        id: newNode.title,
        title: newNode.title,
      });

      if (newNode.parentId) {
        const nodeIndex = _nodes.findIndex((n) => n.id === newNode.parentId);
        _nodes[nodeIndex].children = [
          ...(_nodes[nodeIndex].children ?? []),
          newNode.title,
        ];
      }

      return [..._nodes];
    });
  };

  const getAllChildrenIds = (node?: TreeNode): string[] => {
    const childrenIds = [];
    for (const childId of node?.children ?? []) {
      childrenIds.push(childId);
      const childNode = treeInputNodes.find((n) => n.id === childId);
      childrenIds.push(...getAllChildrenIds(childNode));
    }
    return childrenIds;
  };

  const onRemove = (node: TreeNode) => {
    const childrenIds = getAllChildrenIds(node);

    if (treeInputRootNodeIds.includes(node.id)) {
      setTreeInputRootNodeIds((_rootNodes) => _rootNodes.filter((n) => n !== node.id));
    }
    setTreeInputNodes((_nodes) => {
      return _nodes
        .filter((n) => n.id !== node.id && !childrenIds.includes(n.id))
        .map((n) => {
          return {
            ...n,
            children: n.children?.filter((c) => c !== node.id),
          };
        });
    });
  };

  return (
    <Tree
      {...args}
      nodes={treeInputNodes}
      rootNodeIds={treeInputRootNodeIds}
      onSort={args.onSort ? onSort : undefined}
      editNodeConfig={
        args.editNodeConfig ? { ...args.editNodeConfig, onEdit } : undefined
      }
      onAdd={args.onAdd ? onAdd : undefined}
      removeNodeConfig={
        args.removeNodeConfig ? { ...args.removeNodeConfig, onRemove } : undefined
      }
      moreOptions={moreOptions}
    />
  );
};

Readonly.args = {
  nodes: treeNodes,
  rootNodeIds,
};
Readonly.parameters = {
  ...readonlyParameters,
};

export const WithDescriptionAndBadge = Readonly.bind({});
WithDescriptionAndBadge.args = {
  ...Readonly.args,
  nodes: treeNodes.map((node, index) =>
    index % 2 === 0
      ? {
          ...node,
          description: `${node.title}-Description`,
        }
      : { ...node, isShowBadgeNotification: true },
  ),
};
WithDescriptionAndBadge.parameters = {
  ...readonlyParameters,
};

export const Loading = Readonly.bind({});
Loading.args = {
  ...Readonly.args,
  isLoadingChildren: [rootNodeIds[0], rootNodeIds[2]],
};
Loading.parameters = {
  ...readonlyParameters,
};

export const Editable = Readonly.bind({});
Editable.args = {
  nodes: treeNodes,
  rootNodeIds,
  removeNodeConfig: {
    onRemove: () => null,
  },
  editNodeConfig: {
    onEdit: () => null,
    typeOfClick: 'singleClick',
  },
  onAdd: () => null,
  onSort: () => null,
  moreOptions: [
    {
      label: 'Import children via json file',
    },
  ],
};

export const CopyNodeID = Readonly.bind({});
CopyNodeID.args = {
  nodes: treeNodes,
  rootNodeIds,
  showTreeNodeId: true,
};
CopyNodeID.parameters = {
  ...readonlyParameters,
};

export const ConditionallyShowNodeID = Readonly.bind({});
ConditionallyShowNodeID.args = {
  nodes: treeNodes,
  rootNodeIds,
};

ConditionallyShowNodeID.parameters = {
  ...readonlyParameters,
};

export const CustomRenderer = Readonly.bind({});

CustomRenderer.args = {
  nodes: treeNodes,
  rootNodeIds,
  nodeRenderer: ({ node, TreeItem, methods }: any) => {
    const { onToggleNode, onSingleClick } = methods;

    return (
      <TreeItem
        nodeId={node.id}
        label={node.title}
        expandIcon={<ArrowRightIcon onClick={onToggleNode} />}
        collapseIcon={<ArrowDropDownIcon onClick={onToggleNode} />}
        onClick={onSingleClick}
      />
    );
  },
};

export const WithControlOnToggleExpansionAndSelection: StoryFC<TreeProps> = (args) => {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onExpand = (expandedNodeId: string) =>
    setExpandedIds((prev) => [...prev, expandedNodeId]);

  const onCollapse = (collapsedNodeId: string) =>
    setExpandedIds((prev) => prev.filter((id) => id !== collapsedNodeId));

  const onNodeSelect = (selectedNodeId: string) => {
    setSelectedIds((prev) =>
      prev.includes(selectedNodeId)
        ? prev.filter((id) => id !== selectedNodeId)
        : [...prev, selectedNodeId],
    );
  };

  return (
    <>
      <Tree
        {...args}
        expandedIds={expandedIds}
        onExpand={onExpand}
        onCollapse={onCollapse}
        selectedNodeIds={selectedIds}
        onNodeSelect={onNodeSelect}
      />
      <hr />
      <ul>
        {selectedIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </>
  );
};

WithControlOnToggleExpansionAndSelection.args = { nodes: treeNodes, rootNodeIds };
WithControlOnToggleExpansionAndSelection.parameters = { ...readonlyParameters };
