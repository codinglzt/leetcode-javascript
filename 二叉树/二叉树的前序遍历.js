const binaryTree = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 递归解法
 */
const preorderTraversal = function(root) {
  if (!root) return [];
  let result = []
  let preorderTraversalNode = (node) => {
      if (node) {
          // 先访问根节点
          result.push(node.val)
          // 再遍历左节点
          preorderTraversalNode(node.left)
          // 最后遍历右节点
          preorderTraversalNode(node.right)
      }
  }
  preorderTraversalNode(root)
  console.log(result)
  return result
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 遍历解法
 */
const preorderTraversal1 = function(root) {
  if (!root) return [];
  let result = []
  let stack = [root]
  while (stack.length) {
    let size = stack.length
    while (size--) {
      let node = stack.pop()
      // 先取根节点
      result.push(node.val)
      // 我们先打印左子树，然后右子树
      // 所以先加入栈的是右子树，然后左子树
      if (node.right !== null) stack.push(node.right)
      if (node.left !== null) stack.push(node.left)
    }
  }
  return result
}

preorderTraversal(binaryTree)
