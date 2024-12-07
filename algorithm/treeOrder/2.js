// 先序遍历
//  递归？
//    函数直接或间接调用自己
//  - 退出条件   root === null
//  - 递归公式  顶端 自顶向下
//    整棵树先序遍历  自己先出来 左字数完成先序遍历 右子树完成先序遍历

 function preorder(root) {
    // 退出条件 空树
    if(!root){
        return;
    }
    // 递归公式
    console.log(root.val);//先输出根节点
    preorder(root.left);  //递归遍历左子树
    preorder(root.right); //递归遍历右子树
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
 preorder(root);