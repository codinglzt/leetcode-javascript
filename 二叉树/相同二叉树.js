/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  // 当两个二叉树为空时，结构与值都相同，返回真
  if (p === null && q === null) return true;
  // 其中一个二叉树为空时，为假
  if (p === null || q === null) return false;
  // 两个二叉树不为空时，值不相同返回假
  if (p.val !== q.val) return false;

  // 递归下个子树比较两个二叉树相应位置的节点
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}