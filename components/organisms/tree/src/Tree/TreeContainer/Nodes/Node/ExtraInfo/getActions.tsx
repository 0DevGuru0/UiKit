import { compact, isArray } from 'lodash';

import { MoreOptionsProps } from '@avidkit/more-options';
import { CopyToClipboard } from '@avidkit/icons';

import { TreeNode, Option } from '../../../../types';
import { ITreeContext } from '../../../../TreeContext';

type CommonOptionKeys = 'editNodeConfig' | 'removeNodeConfig' | 'showTreeNodeId';

type InternalActions = Pick<ITreeContext, CommonOptionKeys>;

type Section = MoreOptionsProps['sections'][0];

export const getActions = (
  moreOptions: Option[],
  node: TreeNode,
  internalActions: InternalActions,
): Section => {
  const section: Section = compact([
    // onEdit
    isEditableNode(node, internalActions.editNodeConfig) && {
      label: internalActions.editNodeConfig?.label ?? 'Edit node',
      onClick: (e) => {
        internalActions.editNodeConfig?.onEdit(node);
        e.stopPropagation();
      },
    },

    // Dynamic actions
    ...getDynamicActions(moreOptions, node),

    // Show Tree Node ID
    shouldShowTreeNodeId(node, internalActions.showTreeNodeId) && {
      label: `Node ID ${node.id}`,
      onClick: (e) => {
        navigator.clipboard.writeText(node.id);
        e.stopPropagation();
      },
      icon: {
        default: <CopyToClipboard />,
        hover: <CopyToClipboard />,
        position: 'end',
      },
    },

    // onRemove
    isRemovableNode(node, internalActions.removeNodeConfig) && {
      label: internalActions.removeNodeConfig?.label ?? 'Delete node and children',
      onClick: (e) => {
        internalActions.removeNodeConfig?.onRemove(node);
        e.stopPropagation();
      },
    },
  ]);

  return section;
};

const getDynamicActions = (moreOptions: Option[], node: TreeNode): Section => {
  const section: Section = [];

  // TODO: Add disabled flag to MoreOptions component
  for (const option of moreOptions) {
    section.push({
      label: option.label,
      onClick: (e) => {
        option.action(node);
        e.stopPropagation();
      },
      // disabled: option.disabled
    });
  }

  return section;
};

const isEditableNode = (
  node: TreeNode,
  editNodeConfig: ITreeContext['editNodeConfig'],
): boolean => {
  if (!editNodeConfig) {
    return false;
  }

  return (
    !editNodeConfig.editableNodeIds || editNodeConfig.editableNodeIds.includes(node.id)
  );
};

const shouldShowTreeNodeId = (
  node: TreeNode,
  showTreeNodeId: ITreeContext['showTreeNodeId'],
): boolean => {
  if (!showTreeNodeId) {
    return false;
  }

  return isArray(showTreeNodeId) ? showTreeNodeId.includes(node.id) : showTreeNodeId;
};

const isRemovableNode = (
  node: TreeNode,
  removeNodeConfig: ITreeContext['removeNodeConfig'],
): boolean => {
  if (!removeNodeConfig) {
    return false;
  }

  return (
    !removeNodeConfig.removableNodeIds ||
    removeNodeConfig.removableNodeIds.includes(node.id)
  );
};
