- vue3 响应式机制
  - ref  .value  响应式对象 value  Object.defineProperty 性能好
  - reactive  响应式代理 proxy 代理整个对象  开销大

- 父子组件通信
  - props 父传子(父组件传值给子组件) 传的是数据
  - @child-message="handleEvent" 自定义事件名称+处理函数 attrs 
  - 子组件 一切由外界传的 都得声明一下
    emit 汇报
    emits = defineEmits(['child-message'])
  - emits(event_name,params)