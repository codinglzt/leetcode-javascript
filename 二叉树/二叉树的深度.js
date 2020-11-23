/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0

  let dfs = (node) => {
    if (node === null) return 0
    // 左子树深度
    let leftDepth = node.left && dfs(node.left) + 1
    // 右子树深度
    let rightDepth = node.right && dfs(node.right) + 1

    return Math.max(leftDepth, rightDepth)
  }

  return dfs(root) + 1
}