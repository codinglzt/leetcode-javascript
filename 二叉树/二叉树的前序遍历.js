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
 */
const preorderTraversal = function(root) {
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

preorderTraversal(binaryTree)
