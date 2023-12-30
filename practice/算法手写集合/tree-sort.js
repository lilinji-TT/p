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

  while (currentNode !== null || stack.length > 0) {
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    result.push(currentNode.value);
    currentNode = currentNode.right;
  }

  return result;
}
