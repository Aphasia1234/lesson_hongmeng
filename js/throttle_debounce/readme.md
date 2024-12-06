 - 认识几个url
   url的设计模式  restful API  (一切都是资源)
   网站是用来暴露资源的  如何将资源暴露出去
   - http://localhost:3001/posts/ 列表页的链接
   - http://localhost:3001/posts/:id  id 查询参数 详细页的链接
   - http://localhost:3001/users/:id   用户主页链接
     
 - 数据查询  Read     (增查改删 CRUD(create read update delete))
 - 访问资源的方式
   - apiFox 是啥？ web 请求代理
     Get  http://localhost:3001/posts/1 (浏览器默认 只能发送get请求)
     Patch http://localhost:3001/posts/1 (修改)
   - 资源 db.json   users  posts
   - HTTP 协议 
     - 请求行 Method (动作 GET | PATCH 修改| POST 新增) + url (资源)  
     - 请求头 Cookie Content-Type: text/json……
     - 请求体  数据

   - json-server
     - http 服务
     - db.json 数据资源向外提供访问 CRUD

 - 会设计restful API 接口
   - 需求
     - 新增一篇文章(找到文章总体)
       POST  http://localhost:3001/posts      (请求行) 
       {……}                                   (请求体)

     - 删除 文章2
       DELETE  http://localhost:3001/posts/2      (请求行)
       删除请求 没有请求体

 - json-server 是一个支持restful api 设计的数据服务器 

 - 全栈防抖
   - 前后端分离  解耦 
   - 前端 live-server 5500
     fetch url 
   - 后端 json-server 3001
     url 接口服务 restful 
   - API 接口 

 - filter、map
   - 都是Array.prototype上的方法,所有的数组都有
   - filter 数组进行过滤，回调函数返回值是否为true
   - map 数组进行映射，回调函数返回值是新的数组 原有数组不能满足需求
   - forEach 迭代每一项 没有返回值
 - 防抖
   - 将要执行的函数交给一个debounce()高阶函数去优化
   - 减少执行次数 只执行连续输入的最后一次
   - 定时器 本次关掉上一次的定时器
