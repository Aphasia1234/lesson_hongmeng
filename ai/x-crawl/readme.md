 - package.json
  项目描述文件
  - dependencies   项目依赖部分？
  - devDependencies 开发期间依赖部分
  - scripts
    npm run dev development 

  - 版本号 的意义
    > 1.0.0  正式版  商用  成熟
    - 1.0.0   1 主版本  0 次更新 0 bug修复
    - 2.0.0   2 主版本  0 次更新 0 bug修复  (Vue2 和 Vue3)           
    - 2.2.0   2 主版本  2 次更新 0 bug修复  添加了某项功能
    - 2.2.1   2 主版本  2 次更新 1 bug修复  修复了某项bug

 - es6 
   - es6 模块化   import from  mjs
   - 解构
     对象、数组一次性解构 一批变量
     let {name, age} = obj; 是一种解构赋值的语法。它允许你从对象中提取属性，并将它们的值分配给变量。这种语法简化了从对象中获取多个属性的操作。
     - 待解构的对象在右边
     - 解构出来的在左边
     - 对象(key)、数组(下标)都可以解
     - ... rest 剩余运算符

 - AI 爬虫的核心
   - 发送请求爬取HTML 完成了 输入 (html 字符串)
   - http 请求
   - 解析出来 indent 
 - 交给大模型
   `
   ${Indent_html}             // 输入
   获取图片链接，以数组形式返回 // 输出
   `



