// 二叉树节点定义
class TreeNode{
constructor(val){
     this.val = val;
     this.left = null;
     this.right = null;
 }
}
// 创建一颗二叉树
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// 层序遍历  队列实现
function levelOrderTraversal(root) {
    // 退出条件 空树
    if(!root){
        return;
    }
    const result = [];
    // 根节点入队
    // 借助  队列  先进先出 FIFO  (栈 后进先出 LIFO)
    const queue = [root];
    // 队列不为空
    while(queue.length){
        // 队头出队
        const currentNode = queue.shift();
        // 队头元素  放入结果数组
        result.push(currentNode.val);
        // 若队头元素左右子树不为空，则左右子树入队
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }
    return result;  
}

console.log(levelOrderTraversal(root));