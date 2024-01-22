// 树的中序遍历，左中右

// 递归
function inorderTraversalRecursive_1(root) {
  let result = [];

  function traverse(r) {
    if (!r) return;
    traverse(r.left);
    result.push(r.val);
    traverse(r.right);
  }

  traverse(root);

  return result;
}

// 循环, 使用栈来模拟递归
function inorderTraversalRecursive_2(root) {
  let result = [];
  let stack = [];
  let currentNode = root;

  // 当前节点不为空，或者栈不为空
  while (currentNode !== null || stack.length > 0) {
    // 从root节点出发，遍历存储左节点
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    // 弹出栈顶节点
    currentNode = stack.pop();
    // 保存当前节点的值，也就是中
    result.push(currentNode.value);

    // 最后右
    currentNode = currentNode.right;
  }

  return result;
}
