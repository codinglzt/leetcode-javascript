/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root) return true;

  const queue = [];
  queue.push(root.left, root.right);

  while(queue.length) {
    const currentNodeSizes = queue.length; // 当前层结点数
    for (let i = 0; i < currentNodeSizes; i += 2) {
      const left = queue.shift(); // 左节点
      const right = queue.shift(); // 右节点
      // 比较左右子结点的值是否相等
      if ((left === null && right) || (left && right === null)) return false;
      if (left && right) {
        if (left.val != right.val) return false;
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }
    }
  }

  return true;
}