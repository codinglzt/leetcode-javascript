/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  // 当二叉树为空时
  if (!root) return 0;
  // 当根节点左右子节点为null时
  if (root.left === null && root.right === null) return 1;
  let mindepth = Number.MAX_SAFE_INTEGER;
  
  // 比较左右子树最小深度
  if (root.left) {
      mindepth = Math.min(minDepth(root.left), mindepth);
  }
  if (root.right) {
      mindepth = Math.min(minDepth(root.right), mindepth);
  }

  return mindepth + 1;
};