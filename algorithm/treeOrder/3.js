// 中序遍历
function inorder(root) {
    // 退出条件 空树
    if(!root){
        return;
    }
    // 递归公式
    inorder(root.left);  //先递归遍历左子树，到root的左子树为空时
    console.log(root.val);//输出根节点
    inorder(root.right); //递归遍历右子树
 }
 const root = {
    val: 'A',
    left: {
      val: 'B',
      left: {
        val: 'D'
      },
      right: {
        val: 'E'
      }
    },
    right: {
      val: 'C',
      right: {
        val: 'F'
      }
    }
   }
 inorder(root);