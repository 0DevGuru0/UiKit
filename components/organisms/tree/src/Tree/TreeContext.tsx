import { createContext, ReactElement, useContext } from 'react';

import { TreeNode, Option } from './types';

export interface NewNode {
  parentId: string;
  title: TreeNode['title'];
}

interface RemoveNodeConfig {
  onRemove: (node: TreeNode) => void;
  label?: string;
  removableNodeIds?: string[];
}

interface EditNodeConfig {
  onEdit: (node: TreeNode) => void;
  label?: string;
  editableNodeIds?: string[];
  typeOfClick?: 'doubleClick' | 'singleClick';
}

export interface ITreeContext {
  nodesKeyBy: Record<string, TreeNode>;
  nodes: TreeNode[];
  moreOptions?: Option[];
  /**
   * For loading root nodes, you should set 'root', for indicating other nodes
   *  specifying only their ids would be enough
   */
  isLoadingChildren?: string[];
  sortable: boolean;
  showTreeNodeId?: boolean | string[];
  onAdd?: (newNode: NewNode) => void;
  onToggle?: (toggledNodeId: string) => void;
  onExpand?: (expandedNodeId: string) => void;
  onCollapse?: (collapsedNodeId: string) => void;
  editNodeConfig?: EditNodeConfig;
  removeNodeConfig?: RemoveNodeConfig;
}

const TreeContext = createContext<ITreeContext>({
  nodesKeyBy: {},
  nodes: [],
  sortable: false,
});

interface TreeProviderProps {
  children: ReactElement;
  value: ITreeContext;
}

export const TreeProvider = ({ children, value }: TreeProviderProps) => {
  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
};

export const useTree = () => {
  return useContext(TreeContext);
};
