 # css 底层基础

 - 何为css？
   ```css
   /*css rules*/
   h1{  /*选择器*/
    color:red; /*声明 */
    text-align:center; /*声明*/
   }
   ```

 - css ？ 层叠样式表
   - html DOM 不能裸奔
   - css 选择DOM 元素运用样式规则
   - css 是怎么引入的
     - style   内联样式
     - link    外联样式
     - 行内样式 <p style="color :bule;"></p>

     先下载样式 再解析DOM 应用样式
     dom + css = render tree  渲染树(显示页面 数据结构)
     -> 浏览器渲染引擎 -> 渲染生成页面

 - 优先级
  - 从小到大
  - 计算规则 
    *10
    标签 1  类名10  id 100 行内1000  !important 最大
  - 当选择器比较复杂的时候 优先级加法
    .container ul li:nth-child(odd) 10(类)+1(元素)+1(元素)+10(伪类)=22
    一定选择最后的元素 

 - css 选择器分成哪几类？
   - 基础选择器
     - 标签选择器
     - 类选择器
     - id 选择器
     - 通配符选择器    * 性能不好
   - 组合选择器
     - 后代选择器       (空格)
     - 子元素选择器    >
     - 相邻兄弟选择器  +
     - 通用兄弟选择器  ~
   - 伪类选择器
     ::active  ::hover  ::selection……    可交互状态
   - 伪元素选择器
   - 属性选择器
   
    