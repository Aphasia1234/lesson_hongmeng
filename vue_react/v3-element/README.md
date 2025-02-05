- 如何开发一个vue项目
  - vite 工程化
    npm init vite 
  - vue 核心语法(响应式、组件化、指令等)
    前端框架
  - vue-router
  - pinia
  - element3  UI组件库
  - stylus
  - axios  ajax 请求封装库

- app.use
  向vue app 中注册插件  生态 
  element3 提供的组件可以全局使用
  - 注意问题  性能
    首页打开就会变慢， 按需加载（需要哪个组件， 就加载哪个组件）
  - element3 组件 以el-开头
  - 不要重复造轮子(有组件库)  70%常见组件需求

## 项目亮点
- 项目全面使用es6+ 风格
  代码简洁  易读  易维护
- 良好的注释
- 良好的git 提交记录和习惯 git log --oneline

- 按需加载vue 组件库element3，性能优化，页面加载速度
- 路由
  - 多级路由
    二级路由 path 前面不要 /
  - path, component , name , meta 
  - 路由懒加载
    最佳用户体验是快
    按需加载页面级别组件 import函数引入方式 () => import('') 
  - 路由守卫
- 表单组件
  - 看文档
  - :model 收集表单数据 
  - ref 获取表单实例
    - 要获取一个DOM元素， 用ref
    - 要获取一个组件实例(对象)， 用ref
    - 调用相应方法
    - template 用ref 标记DOM | 组件
    - const formRef = ref(null)  挂载前就为null
    - 挂载后就拿到了
  - 表单校验
    - rules
    - items prop
    - valid 方法  boolean 值
- 布局组件 
  - ElContainer
  - ElAside
  - ElMain
  - ElRow
  - ElCol 

- web 应用登录？
  - http 请求 + 响应的简单协议 用户状态
  - 会话？ session 
  - cookie(小饼干)
  - 服务器知道这次请求是哪个用户发起的？
  - 用户携带身份证明 告知服务器我是谁
  - {
    userId:1,
    name:"张三",
    avatar:"------"
  }

- 登录流程
  - 前端提交登录请求
    - login.vue 组件化表单
    - 调用api / login 接口
      - 项目多了一层目录 api 目录会管理应用的所有接口
      - 接口好管理，统一维护
      - 和组件解耦
    - 统一配置的axios 实例 发送请求
  - 后端验证？
    - mock 模拟下后端
      前后端分离的能力 前端独立完成项目开发， 不要等后端的接口
      apifox 跳过前端， 模拟get / post 等请求
      前端 mock 跳过后端 模拟后端请求，

- jwt 登录 (json web token)
  - npm i jaonwebtoken   json + web + 令牌
  - sign 签发
  - token -> verify 方法 返回用户对象 name avatar...

- mock 前后端通信的工作流程
  - vitejs 启用 viteMockServe 插件
  - mock 目录下的文件 声明模拟后端接口
  - api 目录下编写了接口的封装 axios
  - 前端组件onMounted 生命周期 发起接口请求

- 需要验证用户身份的接口
  - token 在localStorage 中
  - ?token=${token} 每个请求都得带上
  - req 请求行，请求头，请求体(post get没有)
  - 请求头  Authorization: Bearer ${token}  专属头Authorization

- 怎么做登录的？
  - cookie + session 传统 安全问题
  - jwt 更适合现在
    - 登录的本质是身份认证
    - 得到一个身份 用户？
    - 表单提交登录请求， username , password
    - jwt sign 方法 签发一个token 给登录请求，用户身份， secret 加密
      token 
    - token 放到 localStorage 中
    - 每次请求都携带token ，axios 的拦截器来负责 headers 设置Authorization 字段
    - 后端 req 解出 设置Authorization 字段  token
    - 调用 verify 方法 返回用户对象
      - 后端知道身份
      - 前端也可以得到用户对象