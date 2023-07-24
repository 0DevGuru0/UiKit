export interface TreeNode {
  id: string;
  title: string;
  description?: string;
  href?: string;
  children?: string[] | null;
  isShowBadgeNotification?: boolean;
}

export interface Option {
  disabled: boolean | ((node: TreeNode) => boolean);
  action: (node: TreeNode) => void;
  label: string;
}
