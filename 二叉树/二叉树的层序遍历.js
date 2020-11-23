/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = []
  if (!root) return res

  const queue = []
  queue.push(root)
  while(queue.length) {
    // 二叉树当前层的节点数
    const currentLevelSize = queue.length
    res.push([])
    // 遍历当前层节点并保存到数组中
    for (let i = 0; i < currentLevelSize; i++) {
      let node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
}
