# vue hooks 编程

- react 的 hooks 编程，vue 直接抄
- 从vue 功能 -> 组件思维
- 内存泄漏思维 重要
  不会主动取消事件监听，组件销毁，事件处理函数无法被回收
- 生命周期 v-if 组件卸载前打扫内存战场

- 把问题放心交给LLM
  - 当 import { useMouse } from '../hooks/useMouse' 引入时，报了以下bug: The requested module '/src/hooks/useMouse.js' does not provide an export named 'useMouse' ,请帮我解决一下，给出代码，不需要useMouse函数的具体功能代码
  - MousePos.vue:11 Uncaught TypeError: Cannot destructure property 'x' of 'useMouse(...)' as it is undefined. x, y 应该是响应式的鼠标坐标，监听onmousemove 响应式设置x, y为鼠标的坐标，并在组件卸载时取消mousemove 监听 请完成功能

- es6 模块化
  - import from 引入
    import Obj from  export default 默认输出的对象
    import { A, B }  export 对象
  - export  导出

- hooks 编程风格
  - 函数式编程
    useMouse  use开头， hooks 函数的特征
  - 将响应式业务(状态) 和UI 分离
  - 组件更好维护， 复用性高
  - UI 组件开发工程师
  - 组件拆分为 UI界面 和 业务逻辑

- 组件 = UI + State