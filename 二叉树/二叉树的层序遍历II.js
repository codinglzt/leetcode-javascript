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
var levelOrderBottom = function(root) {
  if (root === null) return [];
  const queue = [];
  queue.push(root);
  const result = [];
  
  while(queue.length) {
      const orderedRes = [];
      const levelSize = queue.length; 
      for (let i = 0; i < levelSize; i++) {
          const current = queue.shift();
          orderedRes.push(current.val);
          if (current.left) {
              queue.push(current.left);
          }
          if (current.right) {
              queue.push(current.right);
          }
      }
      result.unshift(orderedRes);
  }
  return result;
};